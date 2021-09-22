import { defineLaw } from "../Factory"
import { lawIsAccepted, linear, renewablePercentage } from "../lawTools"
import { markdown } from "../lib/utils"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Solarstrom Förderung x2",
  description: "Subventionierung für mittlere bis große Solaranlagen verdoppeln",
  labels: ["SolarFoerderung"],
  removeLawsWithLabels: ["SolarFoerderung"],
  treatAfterLabels: [],

  effects(game, startYear, currentYear): Change[] {
    return [
      modify("popularity").byValue(10).if(startYear === currentYear),
      modify("unemployment").byValue(-31000).if(startYear === currentYear),
      modify("electricitySolar").byValue(10),
    ]
  },

  priority(game) {
    if (lawIsAccepted(game, "SolarstromFoerderungBeibehalten")) {
      return linear(100, 30, renewablePercentage(game))
    }
    return 0
  },
  
  details: markdown`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.`
})
