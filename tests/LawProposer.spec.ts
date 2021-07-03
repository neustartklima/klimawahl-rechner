import "should"
import API from "../src/api"
import repository from "../src/model/Repository"
import { fillUpLawProposals, replaceLawProposal } from "../src/LawProposer"
import { Game, Law } from "../src/types"
import Sinon from "sinon"

function priority(game: Game): number {
  return 1
}

const allLaws: Law[] = [
  { id: "law1", title: "law 1", description: "", effects: () => ({}), priority },
  { id: "law2", title: "law 2", description: "", effects: () => ({}), priority },
  { id: "law3", title: "law 3", description: "", effects: () => ({}), priority },
  { id: "law4", title: "law 4", description: "", effects: () => ({}), priority },
  { id: "law5", title: "law 5", description: "", effects: () => ({}), priority },
  { id: "law6", title: "law 6", description: "", effects: () => ({}), priority },
]

function mockedFetch(info: RequestInfo, init?: RequestInit) {
  return Promise.resolve({
    ok: true,
    headers: { get: (which: string) => "application/json" },
    json: () => Promise.resolve({ ...JSON.parse(init?.body?.toString() || ""), id: "12345" }),
  } as Response)
}

const storage = ({
  setItem: Sinon.spy(),
  getItem: Sinon.spy(),
} as unknown) as Storage

const mockedApi = API("http://test.localhost", mockedFetch)
const { createGame } = repository({ api: mockedApi, storage })

describe("LawProposer", () => {
  describe("fillUpLawProposals()", () => {
    it("should fill up an empty array", async () => {
      const game = await createGame()
      fillUpLawProposals(game, allLaws)
      game.proposedLaws.length.should.equal(6)
      game.proposedLaws.should.deepEqual(allLaws.map((law) => law.id))
    })

    it("should add missing laws", async () => {
      const game = await createGame()
      fillUpLawProposals(game, allLaws)
      game.proposedLaws.shift()
      fillUpLawProposals(game, allLaws)
      game.proposedLaws.length.should.equal(6)
      const ids = allLaws.map((law) => law.id)
      ids.push(ids.shift() as string)
      game.proposedLaws.should.deepEqual(ids)
    })

    it("should only fill up if enough laws exist", async () => {
      const game = await createGame()
      fillUpLawProposals(game, allLaws.slice(0, 3))
      game.proposedLaws.length.should.equal(3)
    })

    it("should not fill up already proposed laws", async () => {
      const game = await createGame()
      fillUpLawProposals(game, allLaws.slice(0, 3))
      fillUpLawProposals(game, allLaws.slice(0, 3))
      game.proposedLaws.length.should.equal(3)
    })
  })

  describe("replaceLawProposal()", () => {
    it("should remove the given law", async () => {
      const game = await createGame()
      fillUpLawProposals(game, allLaws)
      replaceLawProposal(game, allLaws[0].id)
      game.proposedLaws.should.not.containEql(allLaws[0].id)
    })

    it("should fill up after remove", async () => {
      const game = await createGame()
      fillUpLawProposals(game, allLaws)
      replaceLawProposal(game, allLaws[0].id)
      game.proposedLaws.length.should.equal(6)
    })
  })

  describe("getLaw()", () => {
    it("should return the law with the given id")

    it("should throw if law id is non-existent")
  })

  describe("getAcceptedLaw", () => {
    it("should return the corresponding law together with the year, it was accepted in")

    it("should throw if the referenced law does not exist")
  })
})
