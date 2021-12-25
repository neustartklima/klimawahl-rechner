import { cite, wuppertalStudie } from "../citations"
import { markdown } from "../lib/utils"
import { Change, modify } from "../params"
import { defineLaw, monthsEffort } from "./LawsTypes"
import { lawIsAccepted, linear, powerTransfer, renewablePercentage } from "./lawTools"

export default defineLaw({
  title: "Solarstrom Förderung x4",
  description: "Subventionierung für mittlere bis große Solaranlagen vervierfachen",
  labels: ["SolarFoerderung"],
  removeLawsWithLabels: ["SolarFoerderung"],

  effort(game) {
    return monthsEffort(3)
  },

  effects(game, startYear, currentYear): Change[] {
    return [
      modify("popularity")
        .byValue(20)
        .if(startYear === currentYear),
      modify("unemployment")
        .byValue(-89000)
        .if(startYear === currentYear),
      ...powerTransfer(game, "electricitySolar", 20),
    ]
  },

  priority(game) {
    if (lawIsAccepted(game, "SolarstromFoerdernx2")) {
      return linear(100, 30, renewablePercentage(game))
    }
    return 0
  },

  details: markdown`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für besonders geeignete Gebäude, moderater Zuwachs der Freiflächen Photovoltaik mit Doppeltbewirtschaftung von Energieerzeugung und Landwirtschaft #AgroPV.
  `,

  internals: markdown`
    # Happy path 10

    ${cite(wuppertalStudie)}
  `,

  citations: [wuppertalStudie],
})
