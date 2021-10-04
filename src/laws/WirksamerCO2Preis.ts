import { defineLaw } from "../Factory"
import { lawIsAccepted, linearPopChange, renewablePercentage } from "../lawTools"
import { Change, modify, transfer } from "../params"
import { markdown } from "../lib/utils"
import { wdr2021KlimaschutzMitCO2Preis } from "../citations"
import { Percent } from "../types"

export default defineLaw({
  title: "Wirksamer CO2 Preis",
  description: "Eine Tonne CO2 kostet ab jetzt 150 Euro.",
  labels: ["CO2Preis"],
  removeLawsWithLabels: ["CO2Preis"],

  effects(game, startYear, currentYear): Change[] {
    const electricityPopChange = linearPopChange(80, 50, renewablePercentage(game), -3)

    const carPopChange = linearPopChange(80, 50, game.values.carRenewablePercentage, -3)

    const relReduction: Percent = -2

    return [
      modify("stateDebt").byValue((-125 / 1000) * game.values.co2emissions),

      modify("popularity").byValue(electricityPopChange + carPopChange),

      modify("co2emissionsIndustry").byPercent(relReduction),
      modify("co2emissionsAgriculture").byPercent(relReduction),
      modify("co2emissionsOthers").byPercent(relReduction),

      transfer("electricityBrownCoal", "electricityWind").byPercent(0.7 * relReduction),
      transfer("electricityHardCoal", "electricityWind").byPercent(0.7 * relReduction),
      transfer("electricityBrownCoal", "electricitySolar").byPercent(0.3 * relReduction),
      transfer("electricityHardCoal", "electricitySolar").byPercent(0.3 * relReduction),

      transfer("buildingsSourceOil", "buildingsSourceBio").byPercent(relReduction), // TODO #78: What about other regernative sources?

      transfer("carUsage", "publicNationalUsage").byPercent(0.5 * relReduction),
      transfer("carUsage", "publicLocalUsage").byPercent(0.5 * relReduction),
    ]
  },

  priority(game) {
    if (!lawIsAccepted(game, "CO2PreisErhoehen")) return 0
    return 50
  },
  citations: [wdr2021KlimaschutzMitCO2Preis],
  details: markdown`

  `,
  internals: markdown`
    # Happy Path 5.5

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen werden.

    ## Staatsschulden

    sinken um die zusätzlich eingenommene CO2-Steuer von 125€ pro Tonne CO2.

    ## Popularität

    - [x] Popularität sinkt jährlich abhängig vom Anteil der Erneuerbaren an der Stromerzeugung.
    - [x] Popularität sinkt jährlich abhängig vom Anteil der Erneuerbaren am Straßenverkehr.

    Abhängigkeit vom jeweiligen Anteil der Erneuerbaren wie folgt:

    - Anteil >= 80%: Popularität sinkt nicht.
    - Anteil = 65%: Popularität sinkt um 1,5% pro Jahr.
    - Anteil = 50%: Popularität sinkt um 3% pro Jahr.
    - Anteil = 20%: Pooularität sinkt um 6% pro Jahr.
      (dazwischen linear interpoliert.)

    ## Fossile

    - [x] Nutzungen, die fossile Energieträger verwenden, reduzieren sich jährlich um 2%.

    - Es werden 2% von allen CO2 Emissionen bzw. emittierenden Größen abgezogen.
    - Nicht mehr erzeugter Kohlestrom wird zu 70% aus Windkraft udn 30% Solar erzeugt.
    - Erdöl wird ersetzt durch biologische Quellen.
    - KFZ wird je zur Hälfte durch Fernverkehr und Nahverkehr ersetzt.

    TODO #78: Dies ist ein sehr grobes Modell.

    # Voraussetzungen

    - "CO2PreisErhoehen" wurde beschlossen.

    # Priorität

    - 50%
  `,
})
