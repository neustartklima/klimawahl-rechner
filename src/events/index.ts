import AbstandsregelnWindkraft from "./AbstandsregelnWindkraft"
import Altbausanierung from "./Altbausanierung"
import Bestechung from "./Bestechung"
import EnergieStrategie from "./EnergieStrategie"
import FinanzKollaps from "./Finanzkollaps"
import Hitzehoelle from "./Hitzehölle"
import NewYear from "./NewYear"
import SocialMedia from "./SocialMedia"
import TempolimitAufAutobahnen from "./TempolimitAufAutobahnen"
import TimesUp from "./TimesUp"
import WahlVerloren from "./WahlVerloren"
import WindkraftAusschreibung from "./WindkraftAusschreibung"
import SolarstromFoerderung from "./SolarstromFoerderung"
import AtomKatastrophe from "./AtomKatastrophe"
import BSE from "./BSE"
import Duerrewelle from "./Duerrewelle"
import PRKohleindustrie from "./PR-Kohleindustrie"
import PRInnenminister from "./PR-Innenminister"
import Klimafluechtlinge from "./Klimafluechtlinge"
import Plagiatsaffaere from "./Plagiatsaffaere"
import CO2PreisDebatte from "./CO2PreisDebatte"

import { prepareModuleList } from "../Factory"
import { EventDefinition } from "./EventsTypes"
import { Game } from "../game"
import { Ratio } from "../types"

const allEventsObj = {
  AbstandsregelnWindkraft,
  Altbausanierung,
  Bestechung,
  EnergieStrategie,
  FinanzKollaps,
  Hitzehoelle,
  NewYear,
  SocialMedia,
  TempolimitAufAutobahnen,
  TimesUp,
  WahlVerloren,
  WindkraftAusschreibung,
  SolarstromFoerderung,
  AtomKatastrophe,
  BSE,
  Duerrewelle,
  PRKohleindustrie,
  PRInnenminister,
  Klimafluechtlinge,
  Plagiatsaffaere,
  CO2PreisDebatte,
}

export type EventId = keyof typeof allEventsObj

export type Event = EventDefinition & {
  id: EventId
  probability(game: Game): Ratio
}

export type EventReference = {
  id: EventId
  occuredIn: number
  acknowledged: boolean
}

export const allEvents = prepareModuleList(allEventsObj) as Event[]
