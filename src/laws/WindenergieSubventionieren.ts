import { defineLaw } from "../Factory"
import { MrdEuro, TWh, WritableBaseParams } from "../types"
import { linear } from "../lawTools"

export default defineLaw({
  title: "Windenergie subventionieren",
  description: "Garantierte Einspeisevergütung für neue und erneuterte Windanlagen",
  labels: ["WindkraftSubvention"],
  removeLawsWithLabels: ["WindkraftSubvention"],
  treatAfterLabels: ["WindkraftAbstandsregel"],

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    const onshoreNew: TWh = Math.min(18.8 as TWh, data.electricityWindOnshoreMaxNew)
    const offshoreNew: TWh = 1.2
    return {
      electricityWind: onshoreNew + offshoreNew,
      stateDebt: 1 as MrdEuro,
    }
  },

  priority(game) {
    const electricityRenewable =
      game.values.electricityWind +
      game.values.electricitySolar +
      game.values.electricityWater +
      game.values.electricityBiomass
    const percentage = (electricityRenewable / game.values.electricityDemand) * 100
    return linear(100, 0, percentage)
  },
})
