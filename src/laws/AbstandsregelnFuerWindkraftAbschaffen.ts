import { defineLaw } from "./LawsTypes"
import { lawIsAccepted, linear, windPercentage } from "./lawTools"
import { Percent, TWh } from "../types"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Abstandsregeln für Windkraft abschaffen",
  description: "Jeder der Land besitzt kann seine Windkraftanlage dahin bauen wo er will.",
  labels: ["WindkraftAbstandsregel"],
  removeLawsWithLabels: ["WindkraftAbstandsregel"],

  effects(game, startYear, currentYear): Change[] {
    const delay = lawIsAccepted(game, "WindkraftVereinfachen") ? 0 : 5
    return [
      modify("popularity")
        .byValue(-40)
        .if(startYear === currentYear),
      modify("electricityWindOnshoreMaxNew")
        .setValue(1000 as TWh)
        .if(currentYear >= startYear + delay),
    ]
  },

  priority(game) {
    if (lawIsAccepted(game, "AbstandsregelnFuerWindkraftLockern")) {
      return linear(80, 25, windPercentage(game))
    }
    return 0
  },
})
