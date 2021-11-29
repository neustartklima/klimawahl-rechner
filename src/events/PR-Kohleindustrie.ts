import { defineEvent } from "./EventsTypes"
import { lawIsAccepted } from "../laws/lawTools"
import { markdown } from "../lib/utils"
import { modify } from "../params"

export default defineEvent({
  title: "PR-Skandal",
  description: `Du wurdest mit dem Vorstand von RWE beim Currywurst essen gesehen und fotografiert. Das Bild geht jetzt viral und führt zu einer neuen Diskussion über Lobbyismus.`,

  apply() {
    return [modify("popularity").byValue(-2)]
  },

  probability(game) {
    if (lawIsAccepted(game, "WirksamerCO2Preis") || lawIsAccepted(game, "KohleverstromungEinstellen")) {
      return 0
    }
    // - viele Investitionen in Kohlekraft getätigt
    // - Ablehnung von Gesetzen für erneuerbare Energien
    return 0.3
  },

  laws: [],
  citations: [],
  details: markdown`

  `,
  internals: markdown`
    Klimaaktivisten steigen dir aufs Dach! Aber bei den Lobbyisten steigt deine Beliebtheit. Das gleicht deinen Popularitätsverlust etwas aus.
  `,
})
