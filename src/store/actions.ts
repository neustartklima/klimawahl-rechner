import { Context, store } from "."
import { LawId, GameId, Game, LawReference, Event, AcceptedLaw } from "../types"
import router from "../router"
import API from "../api"
import RepositoryFactory from "../repository"
import * as Calculator from "../Calculator"
import { fillUpLawProposals, getAcceptedLaw, getLaw, replaceLawProposal } from "../LawProposer"
import EventMachine from "../EventMachine"
import { allEvents } from "../events"

let eventMachine: ReturnType<typeof EventMachine>

function getEventMachine() {
  return eventMachine || (eventMachine = EventMachine(store, allEvents))
}

const backendURL = "/api"
const api = API(backendURL, fetch)
const repository = RepositoryFactory({ api })

export const actions = {
  async startGame(context: Context) {
    const game = await repository.createGame()
    game.acceptedLaws = context.state.allLaws
      .filter((law) => law.labels?.includes("initial"))
      .map<LawReference>((law) => {
        return {
          lawId: law.id,
          effectiveSince: game.currentYear,
        }
      })
    fillUpLawProposals(game, context.state.allLaws)
    repository.saveGame(game)
    getEventMachine().start()
    router.push("/games/" + game.id)
  },

  async loadGame(context: Context, payload: { gameId: GameId }) {
    const game = await repository.loadGame(payload.gameId)
    repository.saveGame(game)
    getEventMachine().start()
    context.commit("setGameState", { game })
  },

  gameOver(context: Context) {
    context.commit("gameOver", undefined)
    router.push("/games/" + context.state.game?.id + "/over")
  },

  acceptLaw(context: Context, payload: { lawId: LawId }) {
    const game = { ...(context.state.game as Game) }
    const newLawRef = { lawId: payload.lawId, effectiveSince: game.currentYear + 1 }
    const newLaw = getAcceptedLaw(newLawRef)
    const removeLawsWithLabels = newLaw.removeLawsWithLabels
    const filteredLawRefs = game.acceptedLaws
      .map(getAcceptedLaw)
      .filter(
        (lawToCheck: AcceptedLaw) =>
          !removeLawsWithLabels?.some((labelToRemove) => lawToCheck.labels?.includes(labelToRemove))
      )
      .map((law) => ({ lawId: law.id, effectiveSince: law.effectiveSince }))
    game.acceptedLaws = [...filteredLawRefs, newLawRef]
    replaceLawProposal(game, payload.lawId)
    repository.saveGame(game)
    api.decisionMade(game, newLaw, true)
    context.commit("setGameState", { game })
  },

  rejectLaw(context: Context, payload: { lawId: LawId }) {
    const game = { ...(context.state.game as Game) }
    game.rejectedLaws = [...game.rejectedLaws, payload.lawId]
    replaceLawProposal(game, payload.lawId)
    repository.saveGame(game)
    api.decisionMade(game, getLaw(payload.lawId), false)
    context.commit("setGameState", { game })
  },

  advanceYear(context: Context) {
    const game = { ...(context.state.game as Game) }
    const laws = game.acceptedLaws.map(getAcceptedLaw)
    game.currentYear++
    game.values = Calculator.calculateNextYear(game.values, laws, game.currentYear)
    repository.saveGame(game)
    context.commit("setGameState", { game })
    getEventMachine().start()
  },

  applyEvent(context: Context, payload: { event: Event }) {
    payload.event.apply(context)
    const game = { ...(context.state.game as Game) }
    game.events.unshift(payload.event)
    context.commit("setGameState", { game })
    repository.saveGame(context.state.game as Game)
    api.eventOccurred(game, payload.event)
  },
}
