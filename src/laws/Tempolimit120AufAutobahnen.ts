import { defineLaw } from "../Factory"
import { lawIsAccepted, linear } from "../lawTools"
import { GramPerPsgrKm, Percent } from "../types"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Tempolimit 120 auf Autobahnen",
  description: "Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 120 km/h.",
  labels: ["TempolimitAutobahn"],
  removeLawsWithLabels: ["TempolimitAutobahn"],

  effects(data): Change[] {
    const newCarEmissionFactor: GramPerPsgrKm = 157.1
    const popChange = data.carEmissionFactor > newCarEmissionFactor ? 2 : 0
    return [
      modify("popularity").byPercent(popChange),
      modify("carEmissionFactor").byValue(newCarEmissionFactor - data.carEmissionFactor),
    ]
  },

  priority(game) {
    if (!lawIsAccepted(game, "Tempolimit130AufAutobahnen")) return 0
    const v = game.values
    const relCarPercentage: Percent = (v.carUsage / v.passengerTransportUsage) * 100
    return linear(10, 60, relCarPercentage)
  },
})
