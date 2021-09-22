var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(t,i,n)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n,l=(e,t)=>{for(var i in t||(t={}))r.call(t,i)&&s(e,i,t[i]);if(n)for(var i of n(t))a.call(t,i)&&s(e,i,t[i]);return e},o=(e,n)=>t(e,i(n));import{s as u,v as c,d,m as h,p as g,a as m,c as b,b as p,e as f,t as v,w,o as y,F as k,r as S,f as A,g as P,h as D,i as W,j as z,k as V,u as T,l as L,n as C,q as O}from"./vendor.f89ad69f.js";function E(e){return Object.entries(e).map((([e,t])=>o(l({},t),{id:e.replace(/\W/g,"_")})))}var B={title:"Abstandsregeln für Windkraft erneut im Fokus",description:"Anwohner wollen, dass der Abstand zu Windkraftanlagen erhöht wird. Das führte zu einer Auseinandersetzung des Wirtschaftsministers mit der Umweltministerin.",laws:["AbstandsregelnFuerWindkraftVerschaerfen","AbstandsregelnFuerWindkraftWieBisher","AbstandsregelnFuerWindkraftLockern","AbstandsregelnFuerWindkraftAbschaffen"],apply(){},probability:()=>Math.random()},M={title:"Alles bleibt wie es ist",description:"Die vorhandenen Gesetze haben sich lange bewährt. Wir lassen sie so, wie sie sind.",effects:()=>[],priority:e=>Math.random()};const F=new Intl.DateTimeFormat("de-DE");class U{constructor(e){this.url=new URL(e.url),this.title=e.title,this.publisher=e.publisher,this.authors=e.authors,this.date=e.date?new Date(e.date):void 0,this.comment=e.comment,this.internalComment=e.internalComment,this.localCopy=e.localCopy,this.referringUrl=e.referringUrl?new URL(e.referringUrl):void 0,this.archiveUrl=e.archiveUrl?new URL(e.archiveUrl):void 0,this.archiveNotPossible=e.archiveNotPossible}dateString(){const e=this.date;return e?" ("+F.format(e)+")":""}toString(){return[this.authors?this.authors+this.dateString():void 0,this.title?'"'+this.title+'"':void 0,this.url,this.publisher].filter((e=>e)).join(", ")}}function G(e){const t=e.publisher||e.authors;return`[[${null!=t?t+": ":""}${e.title||e.url.toString()}](${e.url.toString()})]`}const x=new U({url:"https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31",title:"Umweltgutachten 2020 Kapitel 2 Pariser Klimaziele",publisher:"Umweltrat",archiveUrl:"https://web.archive.org/web/20210828201134/https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=31"}),I=new U({url:"https://energy-charts.info/charts/energy/chart.htm?l=en&c=DE&interval=year&year=2020",title:"Energy-Charts: Annual electricity generation in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Bar Charts Electricity Generation Energy-Charts.pdf"}),_=new U({url:"https://energy-charts.info/charts/installed_power/chart.htm?l=en&c=DE&stacking=grouped&year=2020",title:"Net installed electricity generation capacity in Germany in 2020",publisher:"Fraunhofer ISE",archiveNotPossible:!0,localCopy:"Installed Power _ Energy-Charts.pdf"}),N=new U({url:"https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html",title:"Bund kassiert so viel Mineralölsteuer wie seit Jahren nicht",publisher:"welt.de",authors:"Birger Nicolai",date:"2018-02-04",archiveUrl:"https://web.archive.org/web/20201113072050/https://www.welt.de/wirtschaft/article173181909/Mineraloelsteuer-Einnahmen-auf-hoechstem-Stand-seit-14-Jahren.html"}),K=new U({url:"https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",title:"Steuervorteile für wenige kosten 18 Milliarden Euro",publisher:"welt.de",authors:"Martin Greive",date:"2016-06-26",archiveUrl:"https://web.archive.org/web/20201201122658/https://www.welt.de/wirtschaft/article156562013/Steuervorteile-fuer-wenige-kosten-18-Milliarden-Euro.html",comment:"",internalComment:""}),H=new U({url:"https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf",title:"CO2-neutral bis 2035: Eckpunkte eines deutschen Beitrags zur Einhaltung der 1,5-°C-Grenze",publisher:"Wuppertal Institut",date:"2020-10",archiveUrl:"https://web.archive.org/web/20210916070821/https://epub.wupperinst.org/frontdoor/deliver/index/docId/7606/file/7606_CO2-neutral_2035.pdf"}),j=new U({url:"https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",title:"Schlüsselergebnisse der Studie des Wuppertal Instituts für Klima, Umwelt, Energie zu einem Beitrag Deutschlands zur Einhaltung der 1,5-°C-Grenze",publisher:"Wuppertal Institut",date:"2020-10-13",archiveUrl:"https://web.archive.org/web/20210726125101/https://wupperinst.org/fa/redaktion/downloads/projects/CO2-neutral_2035_Factsheet.pdf",comment:`Summary of ${G(H)}.`});H.comment=`Zusammengefasst in ${G(j)}.`;const J=new U({url:"https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland#nationale-und-europaische-klimaziele",title:"Vorjahreschätzung der deutschen Treibhausgas-Emissionen für das Jahr 2020",publisher:"Umweltbundesamt",date:"2021-03-15",archiveUrl:"https://web.archive.org/web/20210712115357/https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx",comment:'Soweit nicht anders angegeben, werden die Werte aus Blatt "THG" Spalte 2019 verwendet'}),Z=new U({url:"https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx/manage_document",referringUrl:"https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland?listpart=1#nationale-und-europaische-klimaziele",title:"Detaillierte Berichtstabellen CRF 2021 der deutschen Treibhausgas-Emissionen für das Jahr 2019",publisher:"Umweltbundesamt",date:"2021-01-15",archiveUrl:"https://web.archive.org/web/20210830100630/https://cdr.eionet.europa.eu/de/eu/mmr/art07_inventory/ghg_inventory/envx7gqa/DEU_2021_2019_14012021_224203_started.xlsx",comment:""}),$=new U({url:"https://www.vdv.de/vdv-statistik-2019.pdfx",title:"2019 Statistik",publisher:"VDV",date:"2020-10-01",archiveUrl:"https://web.archive.org/web/20210714151304/https://www.vdv.de/vdv-statistik-2019.pdfx",comment:"Seite 11 enthält CO2e-Emissions-Werte pro Personenkilometer [g/Pkm] für mehrere Verkehrsmittel"}),R=new U({url:"https://www.vdv.de/daten-fakten.aspx",title:"2019 Statistik",publisher:"VDV",date:"2021-01-01",archiveUrl:"https://web.archive.org/web/20210526133828/https://www.vdv.de/daten-fakten.aspx",comment:"",internalComment:""}),Q=new U({url:"https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr",title:"Emissionen des Verkehrs - Straßengüterverkehr",publisher:"Umweltbundesamt",archiveUrl:"https://web.archive.org/web/20210712110744if_/https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr"}),q=new U({url:"https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",title:"Verkehr in Zahlen 2020/2021",publisher:"BMVI",date:"2021-04-13",archiveUrl:"https://web.archive.org/web/20210520124742/https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile",comment:"Seite 219 enthält Personenkilometer-Jahreswerte für mehrere Verkehrsmittel. Soweit nicht anders angegeben, werden die Werte aus Spalte 2019 verwendet"}),Y=new U({url:"https://bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",title:"Finanzierung ÖPNV",publisher:"BMVI",date:"2020-12-09",archiveUrl:"https://web.archive.org/web/20210605120822/https://www.bmvi.de/SharedDocs/DE/Dossier/OEPNV/oepnv-foerderung-des-bundes.html",comment:""}),X=new U({url:"https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",title:"Heizung: Wie viel CO2 dein Brennstoff verursacht",publisher:"Polarstern Magazin",date:"2021-07-26",archiveUrl:"https://web.archive.org/web/20210803113328/https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085",comment:"",internalComment:""}),ee=new U({url:"https://www.klimaneutral-handeln.de/php/kompens-berechnen.php#rechner",title:"CO2-Rechner",authors:"Horst Emse",date:"2021-08-03",archiveUrl:"https://web.archive.org/web/20210803121340/https://www.klimaneutral-handeln.de/php/kompens-berechnen.php",comment:"Quelle für 160g CO2 pro kWh Fernwärme.",internalComment:"TODO #91: Direkte Quelle finden. Siehe auch [uba2008Fernwaerme]"});new U({url:"https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",title:"Bestimmung spezifischer Treibhausgas-Emissionsfaktoren für Fernwärme",authors:"Uwe R. Fritsche, Lothar Rausch",publisher:"Umweltbundesamt",date:"2008-05-01",archiveUrl:"https://web.archive.org/web/20210717204537/https://www.umweltbundesamt.de/sites/default/files/medien/publikation/long/3476.pdf",comment:"",internalComment:"Angebliche Quelle für 160g CO2 pro kWh Fernwärme. TODO #91: Zahl nicht gefunden. Quelle recht alt."});const te=new U({url:"https://www.rensmart.com/Calculators/KWH-to-CO2",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"RenSMART",date:"2021-01-01",archiveNotPossible:!0,localCopy:"Rensmart-KWH-to-CO2.pdf",comment:"",internalComment:"Refers to [ukgov2018kWhtoCO2]."}),ie=new U({url:"https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",referringUrl:"https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2018",title:"CO2(eq) emissions due to electricity generation (by source)",publisher:"UK Departments for Business, Energy & Industrial Strategy and for Envirnoment, Food & Rural Affairs",date:"2018-06-08",archiveUrl:"https://web.archive.org/web/20210521093351/https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/715425/Conversion_Factors_2018_-_Condensed_set__for_most_users__v01-01.xls",comment:"",internalComment:""}),ne=new U({url:"https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",title:"Autos in Deutschland: Zahlen und Fakten",authors:"Roland Hildebrandt",publisher:"motor1.com",date:"2020-03-02",archiveUrl:"https://web.archive.org/web/20210307063954/https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/",comment:"",internalComment:"TODO #91: KBA als direkte Quelle wäre besser."}),re=new U({url:"https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",title:"Bevölkerung nach Nationalität und Geschlecht 2020",publisher:"Statistisches Bundesamt",date:"2021-07-21",archiveUrl:"https://web.archive.org/web/20210803151453/https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html",comment:"",internalComment:""}),ae=new U({url:"https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",title:"Entwicklung des Arbeitsmarkts 2020 in Deutschland",publisher:"Bundesagentur für Arbeit",date:"2021-01-05",archiveUrl:"https://web.archive.org/web/20210803152007/https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre",comment:"",internalComment:""}),se=new U({url:"https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",title:"Bruttoinlandsprodukt (VGR)",publisher:"Statistische Ämter des Bundes und der Länder",date:"2021-03-30",archiveUrl:"https://web.archive.org/web/20210713024739/https://www.statistikportal.de/de/bruttoinlandsprodukt-vgr",comment:"",internalComment:""});new U({url:"https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",title:"Staatsverschuldung Deutschlands",publisher:"Wikipedia",date:"2021-06-30",archiveUrl:"https://web.archive.org/web/20210630204805/https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands",comment:"",internalComment:""});const le=new U({url:"https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",title:"In Zeiten des Klimawandels sind Subventionsformen wie das Dienstwagenprivileg einfach nicht mehr zeitgemäß - Interview mit Prof. Stefan Gössling",publisher:"Deutsche Umwelthilfe",date:"2020-08-24",archiveUrl:"https://web.archive.org/web/20210410185937/https://www.duh.de/presse/pressemitteilungen/pressemitteilung/in-zeiten-des-klimawandels-sind-subventionsformen-wie-das-dienstwagenprivileg-einfach-nicht-mehr-ze/",comment:"",internalComment:""}),oe=new U({url:"https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",title:"Economic cost of climate change could be six times higher than previously thought",publisher:"University College London",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210915122616/https://phys.org/news/2021-09-economic-climate-higher-previously-thought.html",comment:"Corresponding publication: Jarmo S Kikstra et al, The social cost of carbon dioxide under climate-economy feedbacks and temperature variability, Environmental Research Letters (2021). DOI: 10.1088/1748-9326/ac1d0b",internalComment:""}),ue=new U({url:"https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",title:"",publisher:"WDR",date:"2021-09-06",archiveUrl:"https://web.archive.org/web/20210909151034/https://www1.wdr.de/nachrichten/benzinpreis-klima-kohlendioxid-steuern-100.html",comment:"",internalComment:""});class ce{constructor(e){this.unit=e.unit,this.citations=e.citations?e.citations:[],this.details=e.details?e.details:"",this.internals=e.internals?e.internals:""}citationsDesc(){return this.citations.map((e=>e.toString())).join("; ")}}const de={MioTons:e=>e<0?0:e,TWh:e=>e<0?0:e,MrdEuro:e=>e,TsdPeople:e=>e<0?0:e,Percent:e=>e>100?100:e<0?0:e,GramPerPsgrKm:e=>e<0?0:e,MioPsgrKm:e=>e<0?0:e};class he extends ce{constructor(e){super(e),this.writable=!0,this.initialValue=e.initialValue,this.applyBounds=de[e.unit]}}class ge extends ce{constructor(e){super(e),this.writable=!1,this.valueGetter=e.valueGetter,this.shouldInitiallyBe=e.shouldInitiallyBe}}const me=new u.exports.Converter;function be(e){return e>0?[...Array(e)].map(((e,t)=>t)):[]}function pe(e,t){const i=e-t-1;return[...be(t),Math.max(t,i),...be(i).reverse()]}function fe(e,...t){let i=e.map(((e,i)=>e+(t[i]||""))).join("").split("\n");0===i[0].length&&i.shift();const n=i[0].match(/^(\s+)/);return n&&!i.filter((e=>e.trim())).some((e=>!e.startsWith(n[1])))&&(i=i.map((e=>e.replace(n[1],"")))),me.makeHtml(i.join("\n"))}function ve(e){return t=>!e(t)}const we=new he({unit:"MioTons",initialValue:6700,citations:[x],details:fe`

  `,internals:fe`

  `}),ye=new he({unit:"MioTons",initialValue:186.793,citations:[J],details:fe`

  `,internals:fe`

  `}),ke=new ge({unit:"MioTons",valueGetter:e=>e.carUsage*(1-e.carRenewablePercentage/100)*e.carEmissionFactor/1e6+14.4,shouldInitiallyBe:159.696,citations:[J,Q],details:fe`

  `,internals:fe`
    ${G(J)}: 159.696 as MioTons

    ${G(Q)}: 47.4 MioTons CO2e pro Jahr durch LKW in 2019.

    TODO: #72 Hier wird 14.4 MioTons verwendet, um die korrekten Gesamtemissionen zu erhalten.
  `}),Se=new ge({unit:"MioTons",valueGetter:e=>e.co2emissionsStreetVehicles+65*e.publicLocalCapacity/1e6+32*e.publicNationalCapacity/1e6+222*e.airDomesticUsage/1e6+1.641,citations:[$,J],details:fe`

  `,internals:fe`
    ${G($)}:
    - 65 g/Pkm für Nahverkehr (publicLocal),
    - 32 g/Pkm für Fernverkehr (publicNational),
    - 230 g/Pkm für Inlands-Flugverkehr (airDomestic).

    Rückwärtsrechnung aus ${G(J)} ergibt
    222 g/Pkm für Inlands-Flugverkehr (airDomestic). Wird derzeit benutzt.

    ${G(J)}:
    1.641 MioTons CO2e Emissionen durch Küsten- und Inlandsshifffahrt.

    Einheitenumrechnung:
    - 1 MioPsgrKm * 1 GramPerPsgrKm = 1 MioGram = 1 Ton.
    - Zieleinheit: MioTons. Also durch 1 000 000 teilen.
  `}),Ae=new ge({unit:"MioTons",valueGetter:e=>0*e.buildingsSourceBio+.247*e.buildingsSourceGas+.318*e.buildingsSourceOil+.16*e.buildingsSourceTele,citations:[J,X],details:fe`

  `,internals:fe`
    TODO: #91 Gibt es hier bessere Quellen?

    ${G(X)}: 247g CO2 pro kWh Erdgas.

    ${G(X)}: 318g CO2 pro kWh Erdöl.

    ${G(ee)}: 160g CO2 pro kWh Fernwärme.

    ${G(J)}: Gesamtemissionenen addieren sich auf 123.461 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 168.6 MioTons. Sollte laut Quelle oben 123.461 MioTons sein.
  `}),Pe=new he({unit:"MioTons",initialValue:67.936,citations:[J],details:fe`

  `,internals:fe`

  `}),De=new he({unit:"MioTons",initialValue:9.243,citations:[J],details:fe`

  `,internals:fe`

  `}),We=new ge({unit:"MioTons",valueGetter:e=>.399*e.electricityGas+.058*e.electricitySolar+.005*e.electricityWind+.02*e.electricityWater+.835*e.electricityHardCoal+1.137*e.electricityBrownCoal+.03*e.electricityBiomass+.005*e.electricityNuclear,citations:[te,J],details:fe`

  `,internals:fe`
    ${G(te)}:
    - 0.5     kg CO2e / kWh durch Gaskraftwerke, (verwendet: 0.399)
    - 0.058   kg CO2e / kWh durch Photovoltaikanlagen,
    - 0.00464 kg CO2e / kWh durch onshore Windräder, (verwendet: 0.005)
    - 0.00525 kg CO2e / kWh durch offshore Windräder, (verwendet: 0.005)
    - 0.02    kg CO2e / kWh durch Pumpspeicherkraftwerke, (nicht verwendet)
    - 0.005   kg CO2e / kWh durch Wasserkraftwerke, (verwendet: 0.02)
    - 0.9     kg CO2e / kWh durch Kohlekraftwerke, (verwendet: 0.835 für Stein-, bzw. 1.137 für Braunkohle)
    - 0.005   kg CO2e / kWh durch Kernkraftwerke,

    TODO: #78 Diverse Punkte:
    - Diskrepanzen zur Quelle klären.
    - Diskrepanz zu ${G(ie)} klären, z.B. Gas.
    - Quellen für Stein-.und Braunkohle.
    - Korrekter Wert und Quelle für Biomasse. (Aktuelle Annahme: Zwischen Wind- und Solarstrom.)

    ${G(J)}: 258.043 as MioTons in 2019.

    TODO: #72 Tatsächliche Summe ist derzeit 152.7 MioTons. Sollte laut Quelle oben 258.043 MioTons sein.
  `}),ze=new ge({unit:"MioTons",valueGetter:e=>e.co2emissionsEnergy+e.co2emissionsIndustry+e.co2emissionsMobility+e.co2emissionsBuildings+e.co2emissionsAgriculture+e.co2emissionsOthers,details:fe`

  `,internals:fe`
Hier sind ein paar Referenzen gelistet, die interessant sind, und noch nicht verarbeitet wurden.
  `,citations:[Z]}),Ve=new he({unit:"TWh",initialValue:480.54,citations:[I],details:fe`

  `,internals:fe`

  `}),Te=new he({unit:"Percent",initialValue:50,citations:[],details:fe`
    Ein qualitatives Maß für den Ausbau des Stromnetzes, der notwendig ist,
    um as auf dezentrale und neue (z.B. off-shore) Standorte der Stromerzeugung
    vorzubereiten.

    50% steht für die initiale Situation. 100% ist der ideale notwenidge
    Ausbausstand für 100% regenerativ/dezentral erzeugten Strom.
  `,internals:fe`

  `}),Le=new he({unit:"TWh",initialValue:51.42,citations:[I],details:fe`

  `,internals:fe`

  `}),Ce=new he({unit:"TWh",initialValue:131.85,citations:[I],details:fe`

  `,internals:fe`

  `});const Oe=new ge({unit:"TWh",valueGetter(e){const t=Ce.initialValue,i=e.electricityGridQuality,n=function(e,t){const i=e.value-t.value;return n=>e.result*(n-t.value)/i-t.result*(n-e.value)/i}({value:50,result:t},{value:100,result:e.electricityDemand})(i);return Math.min(n,e.electricityWind)},shouldInitiallyBe:Ce.initialValue,citations:[],details:fe`The electrical energy produced by wind and not impaired by poor quality of the grid.`,internals:fe`

  `}),Ee=new he({unit:"TWh",initialValue:6,citations:[I],details:fe`

  `,internals:fe`

  `}),Be=new he({unit:"TWh",initialValue:14.99,citations:[I],details:fe`

  `,internals:fe`

  `}),Me=new he({unit:"TWh",initialValue:43.19,citations:[I],details:fe`

  `,internals:fe`

  `}),Fe=new he({unit:"TWh",initialValue:60.91,citations:[I],details:fe`

  `,internals:fe`

  `}),Ue=new he({unit:"TWh",initialValue:35.46,citations:[I],details:fe`

  `,internals:fe`

  `}),Ge=new he({unit:"TWh",initialValue:82.13,citations:[I],details:fe`

  `,internals:fe`

  `}),xe=new ge({unit:"TWh",valueGetter:e=>e.electricityHardCoal+e.electricityBrownCoal,details:fe`

  `,internals:fe`

  `}),Ie=new ge({unit:"TWh",valueGetter:e=>e.electricityDemand-e.electricitySolar-e.electricityWindUsable-e.electricityWater-e.electricityHardCoal-e.electricityBrownCoal-e.electricityBiomass-e.electricityNuclear,details:fe`

  `,internals:fe`
    Mit Gaskraftwerken wird derzeit der benötigte Strom produziert,
    der nicht über andere Wege erzeugt wird.
  `}),_e=new he({unit:"GramPerPsgrKm",initialValue:160,citations:[$],details:fe`

  `,internals:fe`
    ${G($)} Seite 11 ergibt ca. 160 g/Pkm.
  `}),Ne=new he({unit:"MioPsgrKm",initialValue:917e3,citations:[q],details:fe`

  `,internals:fe`

  `}),Ke=new he({unit:"Percent",initialValue:.5,citations:[ne],details:fe`

  `,internals:fe`
    Die verschiedenen Zahlen in ${G(ne)}
    liefern einen Anteil Elektro-/Hybrid-Fahrzeugen von unter 1%.
    Welcher Anteil davon als erneuerbar angesehen werden kann ist unklar.

    TODO: #78 Bessere Quelle und besseren Wert. KBA könnte besser Zahlen haben.
  `}),He=new he({unit:"MioPsgrKm",initialValue:112600,citations:[q],details:fe`

  `,internals:fe`

  `}),je=new he({unit:"MioPsgrKm",initialValue:112600,citations:[q],details:fe`

  `,internals:fe`
    Kapazität wird nicht als die Anzahl der Sitzplätze o.ä. definiert,
    sondern es wird definiert, dass die aktuelle Auslastungslage 100% entspricht.
    Also ist die anfängliche Kapazität gleich der Nutzung.

    Auf diese Weise ist es leichter, die Qualität, das Gedränge
    zu beurteilen:

    - \`publicLocalUsage > publicLocalCapacity \` bedeutet, es ist enger als jetzt.
    - \`publicLocalUsage < publicLocalCapacity \` bedeutet, es ist mehr Platz.
  `}),Je=new he({unit:"MioPsgrKm",initialValue:67300,citations:[q],details:fe`

  `,internals:fe`
    # Berechnung aus der Quelle

    public - local - air = 251700 - 71800 - 112600 = 67300 MioPsgrKm
  `}),Ze=new he({unit:"MioPsgrKm",initialValue:67300,citations:[q],details:fe`

  `,internals:fe`
Siehe \`publicLocalCapacity\`.
  `}),$e=new he({unit:"MioPsgrKm",initialValue:10100,citations:[q],details:fe`

  `,internals:fe`

  `}),Re=new he({unit:"MioPsgrKm",initialValue:61700,citations:[q],details:fe`

  `,internals:fe`

  `}),Qe=new ge({unit:"MioPsgrKm",valueGetter:e=>e.carUsage+e.publicLocalUsage+e.publicNationalUsage+e.airDomesticUsage+e.airIntlUsage,shouldInitiallyBe:1168700,citations:[q],details:fe`

  `,internals:fe`

  `}),qe=new he({unit:"TWh",initialValue:226,citations:[],details:fe`

  `,internals:fe`
TODO: #78 Quelle für Anfangswert 226 TWh.
  `}),Ye=new he({unit:"TWh",initialValue:544,citations:[],details:fe`

  `,internals:fe`
TODO: #78 Quelle für Anfangswert 544 TWh.
  `}),Xe=new ge({unit:"TWh",valueGetter:e=>e.buildingsPrivateDemand+e.buildingsIndustryDemand,details:fe`

  `,internals:fe`

  `}),et=new he({unit:"TWh",initialValue:130,citations:[],details:fe`

  `,internals:fe`
TODO: #78 Quelle für Anfangswert 130 TWh.
  `}),tt=new he({unit:"TWh",initialValue:219,citations:[],details:fe`

  `,internals:fe`
TODO: #78 Quelle für Anfangswert 219 TWh.
  `}),it=new he({unit:"TWh",initialValue:58,citations:[],details:fe`

  `,internals:fe`
TODO: #78 Quelle für Anfangswert 58 TWh.
  `}),nt=new ge({unit:"TWh",valueGetter:e=>e.buildingsDemand-(e.buildingsSourceBio+e.buildingsSourceOil+e.buildingsSourceTele),details:fe`

  `,internals:fe`
TODO: #78 Anfangswert mit Quelle.
  `}),rt=new he({unit:"Percent",initialValue:50,citations:[],details:fe`
Prozentsatz der Bevölkerung, der Dich als Kanzler akzeptiert.
  `,internals:fe`

  `}),at=new he({unit:"TsdPeople",initialValue:83155.031,citations:[re],details:fe`

  `,internals:fe`
Anfangswert ist der Stand 31.12.2020.
  `}),st=new he({unit:"TsdPeople",initialValue:2695,citations:[ae],details:fe`

  `,internals:fe`
Anfangswert ist der Jahresdurchschnitt der Arbeitslosenzahlen in 2020.
  `}),lt=new he({unit:"MrdEuro",initialValue:3332,citations:[se],details:fe`

  `,internals:fe`
Anfangswert ist das BIP 2020.
  `}),ot=new he({unit:"MrdEuro",initialValue:1899,citations:[],details:fe`

  `,internals:fe`
Anfangswert ist die deutsche Staatsverschuldung 2019.
  `}),ut={co2budget:we,co2emissionsIndustry:ye,co2emissionsStreetVehicles:ke,co2emissionsMobility:Se,co2emissionsAgriculture:Pe,co2emissionsBuildings:Ae,co2emissionsOthers:De,co2emissionsEnergy:We,co2emissions:ze,electricityDemand:Ve,electricityGridQuality:Te,electricitySolar:Le,electricityWind:Ce,electricityWindUsable:Oe,electricityWindOnshoreMaxNew:Ee,electricityWater:Be,electricityBiomass:Me,electricityNuclear:Fe,electricityHardCoal:Ue,electricityBrownCoal:Ge,electricityCoal:xe,electricityGas:Ie,carEmissionFactor:_e,carUsage:Ne,carRenewablePercentage:Ke,publicLocalUsage:He,publicLocalCapacity:je,publicNationalUsage:Je,publicNationalCapacity:Ze,airDomesticUsage:$e,airIntlUsage:Re,passengerTransportUsage:Qe,buildingsIndustryDemand:qe,buildingsPrivateDemand:Ye,buildingsDemand:Xe,buildingsSourceBio:et,buildingsSourceOil:tt,buildingsSourceTele:it,buildingsSourceGas:nt,popularity:rt,numberOfCitizens:at,unemployment:st,gdp:lt,stateDebt:ot},ct=Object.entries(ut).filter((e=>e[1]instanceof he)).map((e=>e)).reduce(((e,t)=>(e[t[0]]=t[1],e)),{}),dt=Object.entries(ut).filter((e=>e[1]instanceof ge)).map((e=>e)).reduce(((e,t)=>(e[t[0]]=t[1],e)),{});class ht extends he{constructor(e,t){super(e),this.name=t}}const gt=Object.entries(ct).map((e=>new ht(e[1],e[0])));class mt extends ge{constructor(e,t){super(e),this.name=t}}Object.entries(dt).map((e=>new mt(e[1],e[0])));const bt=Object.entries(ut).map((e=>e[1]instanceof he?new ht(e[1],e[0]):new mt(e[1],e[0]))),pt=gt.reduce(((e,t)=>o(l({},e),{[t.name]:t.initialValue})),{});function ft(e){const t=l({},e);return Object.entries(dt).forEach((e=>Object.defineProperty(t,e[0],{get:()=>e[1].valueGetter(t)}))),t}function vt(e){return{name:e,value:0,percent:0,absolute:void 0,condition:!0,byPercent(e){return this.percent=e,this},byValue(e){return this.value=e,this},setValue(e){return this.absolute=e,this},if(e){return this.condition=e,this},getOldNew(e){const t=this.name,i=e[t];if(!this.condition)return{oldVal:i,newVal:i};const n=ut[t],r=null!=this.absolute?this.absolute:i+(this.value||i*this.percent/100);return{oldVal:i,newVal:n.applyBounds(r)}},getChange(e){if(!this.condition)return 0;const{oldVal:t,newVal:i}=this.getOldNew(e);return i-t},getNewVal(e){return this.condition?this.getOldNew(e).newVal:e[this.name]}}}function wt(e,t){return t.filter((e=>e.condition)).forEach((t=>{e[t.name]=t.getNewVal(e)})),e}var yt={title:"Kohleverstromung einstellen",description:"Die Verbrennung von Kohle zur Erzeugung von Strom wird verboten.",effects(e,t,i){const n=i-t,r=n<18?4.3/18:0,a=(10-n)/55,s=Math.max(50*a,0);return[vt("electricityHardCoal").setValue(0),vt("electricityBrownCoal").setValue(0),vt("stateDebt").byValue(2.5-r),vt("unemployment").byValue(s)]},priority:e=>e.values.electricityCoal/e.values.electricityDemand<=.1?0:mi(1e4,0,e.values.unemployment),citations:[],details:fe`

  `,internals:fe`
    # Happy Path 5

    Muss nicht als erstes gewählt werden, weil es sich sofort auswirkt. Andere vorbereitende Maßnahmen sind ggf wichtiger.

    # Folgen

    - [x] Ab Inkrafttreten geht jährliche Braun- und Steinkohle Stromproduktion auf 0 TWh.
    - [ ] Ab dem Zeitpunkt, zu dem das Gesetz in Kraft tritt, werden pro Jahr 200 Mio t CO2 weniger ausgestoßen. (Das sollte sich indirekt ergeben.)
    - [x] Der fehlende Strom wird im Zweifel mit Gas erzeugt.
      - Wenn keine Alternative dann? (Gas oder doch Ausland?)
      - Abhängig vom Ausbau der erneuerbaren Energien wird durch Gas ersetzt oder durch mehr Strom aus dem Ausland kompensiert.
    - [x] Aufgrund der erteilten Lizenzen muss den Kraftwerksbetreibern eine Entschädigung von 4.3 Mrd € über 18 Jahre verteilt gezahlt werden.
    - [x] Kohlesubvention vn 2.5 Mrd € wird abgeschafft. (TODO #78: Quellen?)
    - [x] Über die nächsten 10 Jahre werden 50000 Arbeitsplätze abgebaut.
      - 20000 Arbeitsplätze in der Kohleindustrie
      - Die Hälfte von 60.000 indirekt betroffenen Arbeitsplätzen (TODO #78: (Quellen?)
    - [x] Beliebtheit unverändert
      - Aufteilen in Gruppen? Kaum Mehrkosten für Endverbraucher, Berücksichtigung der öffentlichen Diskussion, Freude bei Klimaaktivisten
    - [x] Versteckte Faktoren: Arbeitsplätze, Verärgerung der alten Industrie

    # Vorbedingungen

    - Kohle liefert mehr als 10% des Stroms.
    - Arbeitslosigkeit < 10 000 000.

    # Priorität

    - Arbeitslosigkeit 10 000 000 => 0%. (Aktuell 2 695 999 => 73%)
    - Arbeitslosigkeit 0 => 100%
    - linear dazwischen
  `},kt={title:"Energiemix regelt der Markt",description:"Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",effects:()=>[vt("stateDebt").byValue(-37),vt("electricityHardCoal").byPercent(-10),vt("electricityBrownCoal").byPercent(-5),vt("electricityWind").byValue(5),vt("electricitySolar").byValue(3),vt("electricityWater").byValue(.5)],priority:e=>mi(2050,2021,e.currentYear)};const St=ft(pt).electricityGas;var At={title:"Kernenergienutzung verlängern",description:"Kernkraftwerke länger nutzen, wieder in Betrieb nehmen und neu bauen.",removeLawsWithLabels:["Kernenergie"],effects:()=>[vt("electricityNuclear").setValue(104.3),vt("stateDebt").byValue(-2.5),vt("popularity").byValue(-4)],priority:e=>mi(St,1.1*St,e.values.electricityGas)},Pt={title:"Initial: Atomausstieg",description:"Atomausstieg finded wie beschlossen 2022 statt",labels:["hidden","initial","Kernenergie"],effects(e,t,i){const n={2021:60.45,2022:30.21}[i]||0;return[vt("electricityNuclear").setValue(n)]},priority:e=>0},Dt={title:"Netzausbau erleichtern",description:"Vereinfachung und Beschleunigung von Planungsverfahren für den Ausbau des Stromnetzes",effects:(e,t,i)=>[vt("popularity").byValue(-3).if(t===i),vt("electricityGridQuality").byValue(1)],priority:e=>mi(70,30,fi(e)),citations:[],details:fe`

  `,internals:fe`
    # Happy Path 1

    # Folgen

    - [x] Im ersten Jahr machen BIs schlechte Stimmung: 3% Popularität weniger.
    - [x] Die Netzqualität steigt jährlich um 1%.

    # Voraussetzungen

    - Priorität > 0

    # Priorität

    - 0% bei einem Anteil von nutzbarem Windstrom von 70%. (Zu Beginn: 27%)
    - 100% bei einem Anteil von nutzbarem Windstrom von 30%.
    - linear interpoliert
  `},Wt={title:"Stromspeicherung erleichtern",description:"Bürokratische Hürden für den Bau von Speicheranlagen und Einspeisung von gespeichertem Strom werden abgeschafft.",effects:(e,t,i)=>[vt("electricityGridQuality").byValue(.2)],priority:e=>mi(70,30,e.values.electricityGridQuality),citations:[],details:fe`

  `,internals:fe`
    # Happy Path 1.7

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen werden.

    - [x] Die Netzqualität steigt jährlich um 0.2%.

    # Voraussetzungen

    - Priorität > 0

    # Priorität

    - 0% bei einer Netzqualität von 80%. (Zu Beginn: 50%)
    - 100% bei einer Netzqualität von 40%.
    - linear interpoliert
  `},zt={title:"Stromspeicherung fördern",description:"Bau von Speicheranlagen und Einspeisung von gespeichertem Strom mit Steuermitteln fördern",effects:(e,t,i)=>pi(e,"StromspeicherungErleichtern")?[vt("popularity").byValue(.2),vt("stateDebt").byValue(2),vt("electricityGridQuality").byValue(1)]:[vt("stateDebt").byValue(1)],priority:e=>mi(70,30,e.values.electricityGridQuality),citations:[],details:fe`

  `,internals:fe`
    # Happy Path 8.5

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen werden.

    - [x] Wenn nicht "StromspeicherungErleichtern" ausgewählt wurde, kostet das 1 MrdEuro im Jahr, sonst:
    - [x] Viele verdienen Geld mit kleinen Batteriespeichern: Popularität steigt um 0,2% pro Jahr.
    - [x] Die Netzqualität steigt jährlich um 2%.
    - [x] Konsten: 2 Mrd Euro pro Jahr.

    # Voraussetzungen

    - Priorität > 0

    # Priorität

    - 0% bei einer Netzqualität von 80%. (Zu Beginn: 50%)
    - 100% bei einer Netzqualität von 40%.
    - linear interpoliert
  `},Vt={title:"Dämmung von Wohngebäuden fördern",description:"Die nachträgliche Dämmung von Wohngebäuden wird mit vergünstigten Krediten gefördert.",effects(e,t,i){const n=i-t>2;return[vt("stateDebt").byValue(.5),vt("buildingsSourceBio").byPercent(-1).if(n),vt("buildingsSourceOil").byPercent(-1).if(n),vt("buildingsSourceTele").byPercent(-1).if(n),vt("buildingsPrivateDemand").byPercent(-1).if(n)]},priority:e=>mi(15,25,e.values.co2emissionsBuildings/e.values.co2emissions*100)},Tt={title:"Dämmung von Wohngebäuden fördern",description:"Die nachträgliche Dämmung von Wohngebäuden wird mit einem zinslosen Kredit und einem Zuschuss von 20% der Kosten gefördert.",effects(e,t,i){const n=i-t>2;return[vt("stateDebt").byValue(1),vt("buildingsSourceBio").byPercent(-2).if(n),vt("buildingsSourceOil").byPercent(-2).if(n),vt("buildingsSourceTele").byPercent(-2).if(n),vt("buildingsPrivateDemand").byPercent(-2).if(n),vt("popularity").byValue(5).if(n)]},priority:e=>mi(15,25,e.values.co2emissionsBuildings/e.values.co2emissions*100)},Lt={title:"Dämmung von Wohngebäuden sehr stark fördern",description:"Die nachträgliche Dämmung von Wohngebäuden wird mit 50% der Kosten bezuschusst. Gleichzeitig werden Ausbildungsplätze im Handwerk geschaffen durch einen Zuschuss von 500€ pro Monat, damit der zu erwartende Bauboom bewältigt werden kann.",effects(e,t,i){const n=i-t,r=n>=2;return[vt("stateDebt").byValue(3),vt("buildingsSourceBio").byPercent(-4).if(r),vt("buildingsSourceOil").byPercent(-4).if(r),vt("buildingsSourceTele").byPercent(-4).if(r),vt("buildingsPrivateDemand").byPercent(-4).if(r),vt("popularity").byValue(10).if(1===n),vt("popularity").byValue(5).if(r)]},priority:e=>mi(15,25,e.values.co2emissionsBuildings/e.values.co2emissions*100),citations:[],details:fe`

  `,internals:fe`
    # Happy Path 6

    # Folgen

    # Vorbedingungen

    # Priorität
  `},Ct={title:"Dämmung von Wohngebäuden abschaffen",description:"Wir geben den Bürgern die Freiheit zurück, selbst zu entscheiden, ob sie ihr Haus dämmen wollen und lassen die Förderung auslaufen",effects:()=>[vt("stateDebt").byValue(-.5),vt("buildingsSourceBio").byPercent(-.5),vt("buildingsSourceOil").byPercent(-.5),vt("buildingsSourceTele").byPercent(-.5),vt("buildingsPrivateDemand").byPercent(-.5)],priority(e){const t=function(e,t){const i=e.sort(((e,t)=>t.effectiveSince-e.effectiveSince)).find((e=>t.test(e.lawId)));return null==i?void 0:i.lawId}(e.acceptedLaws,/^DaemmungAltbau/);if(!t||"DaemmungAltbauAbschaffen"===t)return 0;return mi(15,25,e.values.co2emissionsBuildings/e.values.co2emissions*100)}},Ot={title:"Nahverkehr Ausbauen",description:"Der Ausbau des Nahverkehrs wird bundesweit stärker bezuschusst.",effects(e,t,i){const n=e.values.publicLocalCapacity/e.values.publicLocalUsage*100,r=vt("carUsage").byValue(-.01*e.values.publicLocalUsage).if(n>=105),a=r.getChange(e.values),s=i-t;return[vt("stateDebt").byValue(3),vt("publicLocalCapacity").byPercent(1),vt("publicLocalUsage").byValue(-a),r,vt("popularity").byValue(2).if(s>=5)]},priority:e=>mi(20,35,e.values.co2emissionsMobility/e.values.co2emissions*100),citations:[Y],details:fe`

  `,internals:fe`
    # Happy Path 18

    # Folgen

    - Der Staatshaushalt wird jährlich mit 3 Mrd € mehr belastet. (${G(Y)})
    - Nahverkehr Kapazität steigt jährlich um 1%
    - (Umstieg von individual Verkehr auf ÖPNV wird vereinfacht)
        - (Geringere Verkehrsbelastung in städtischen Gebieten / auf Kurzstrecken)
        - Nahverkehr Nutzung steigt jährlich um 1%, sobald die relative Kapazität 105% erreicht hat.
        - PKW Nutzung sinkt um denselben Wert.
    - Langfristig: 5 Jahre nach Inkrafttreten:
        - (CO2 Emissionen des Mobilitätssektors sinken um 2 Mio t pro Jahr.) (Indirekt)
        - Beliebtheit steigt um 2% pro Jahr.

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität:

    - 0 bei 20% Anteil an den CO2 Emissionen. (Zu Beginn: knapp 25%)
    - 100 bei 35% Anteil
    - linear interpoliert
  `},Et={title:"Förderung für Tierhaltung abschaffen",description:"Subventionen für Tierhaltung werden ersatzlos gestrichen",effects:(e,t,i)=>[vt("stateDebt").byValue(-10),vt("co2emissionsAgriculture").byValue(-10).if(t===i),vt("popularity").byValue(-20).if(t===i)],priority:e=>mi(1e4,0,e.values.unemployment)},Bt={title:"Nahverkehr Kostenlos",description:"Die Kosten für den Nahverkehr werden bundesweit bezuschusst, so dass keine Tickets mehr benötigt werden.",effects(e,t,i){const n=t===i?10:1,r=vt("carUsage").byValue(-n/100*e.values.publicLocalUsage),a=r.getChange(e.values);return[vt("stateDebt").byValue(10),vt("publicLocalUsage").byValue(-a),r,vt("popularity").byValue(10).if(t===i),vt("unemployment").byValue(20).if(t===i)]},priority:e=>mi(0,10,e.values.co2emissionsMobility/e.values.co2emissions*100),citations:[R],details:fe`

  `,internals:fe`
    # Happy Path 19

    # Folgen

    - Der Staatshaushalt wird jährlich mit 10 Mrd € stärker belastet.
        - 13.3 Mrd € Ticketeinnahmen pro Jahr (${G(R)})
        - Annahme: Einsparung durch Ticketverkauf und Personal.
    - (CO2 Emissionen für Mobilität singenk jährlich um 2 MioTonnen) (indirekt)
    - Umstieg von individual Verkehr auf ÖPNV lohnt sich mehr
        - Geringere Verkehrsbelastung in gut angeschlossenen Gebieten.
        - CO2 Emissionen werden indirekt verbessert.
        - Nahverkehr Nutzung steigt im ersten Jahr um 10%, danach um 1% jährlich.
        - Auto Nutzung sinkt entsprechend.
    - Arbeitslosigkeit steigt im ersten Jahr um 20 000 Menschen.
    - Popularität steigt im ersten Jah um 10%
        - (Sozial benachteiligte Personen profitieren)

    # Vorbedingungen:

    - Priorität über 0%.

    # Priorität

    - 0 bei 0% Anteil an den CO2 Emissionen. (Zu Beginn: knapp 25%)
    - 100 bei 10% Anteil
    - linear interpoliert
  `},Mt={title:"Autos in Innenstädten verbieten",description:"Die Innenstädte der großen Städte werden zu Autofreien Zonen erklärt und begrünt, sowie Fahrrad und Fußgängerzonen eingerichtet.",effects(e,t,i){var n=-2;e.values.publicLocalCapacity>1.2*e.values.publicLocalUsage&&(n=-1,t+2<i&&(n=2));const r=vt("carUsage").byValue(-.1*e.values.publicLocalUsage).if(t===i),a=r.getChange(e.values);return[vt("popularity").byValue(n),r,vt("publicLocalUsage").byValue(-a)]},priority:e=>mi(90,120,e.values.publicLocalCapacity/e.values.publicLocalUsage*100)},Ft={title:"Fernverkehr Verbindungen ausbauen",description:"Der Ausbau des öffentlichen Fernverkehrs wird bundesweit stärker Bezuschusst und Vorangetrieben",effects(e){const t=e.values.publicNationalCapacity/e.values.publicNationalUsage*100,i=vt("carUsage").byValue(.015*e.values.publicNationalUsage).if(t>=105),n=i.getChange(e.values);return[vt("stateDebt").byValue(6),vt("publicNationalCapacity").byPercent(1),i,vt("publicNationalUsage").byValue(.667*-n),vt("publicLocalUsage").byValue(.333*-n),vt("popularity").byValue(2)]},priority:e=>mi(150,80,e.values.publicNationalCapacity/e.values.publicNationalUsage*100)},Ut={title:"Wasserstofftechnologie fördern",description:"Forschung und Entwicklung von wasserstoffbasierter Antriebs- und Produktionstechnologie wird stark gefördert.",effects:(e,t,i)=>[vt("stateDebt").byValue(3),vt("carRenewablePercentage").byValue(1).if(t+5<=i)],priority(e){const t=e.values;return mi(40,90,t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100)}},Gt={title:"Abschaffung der Mineralölsteuer",description:"Die Steuer auf sämtliche erdölbasierten Treibstoffe wird abgeschafft.",effects(e,t,i){const n=vt("publicLocalUsage").byPercent(-20).if(t===i),r=vt("publicNationalUsage").byPercent(-20).if(t===i),a=n.getChange(e.values),s=r.getChange(e.values);return[vt("stateDebt").byValue(41),vt("popularity").byValue(5).if(t===i),vt("popularity").byValue(-3).if(t<i),vt("carUsage").byValue(-a-s).if(t===i),n,r]},priority(e){const t=e.values;return mi(60,100,t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100)},citations:[N],details:"",internals:fe`
    # Folgen

    Staatsschulden steigen um 41 Mrd € pro Jahr ${G(N)}
    Im ersten Jahr steigen 20% der Nutzer von öffentlichen Verkehrsmitteln aufs Auto um.
    Popularität steigt im ersten Jahr um 5% und sinkt danach um 3% pro Jahr.

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 60%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `},xt={title:"Ausbau von Straßen",description:"Autobahnen und Straßen werden intensiver ausgebaut.",effects(e){const t=vt("publicLocalUsage").byPercent(-1),i=vt("publicNationalUsage").byPercent(-1),n=t.getChange(e.values),r=i.getChange(e.values);return[vt("stateDebt").byValue(5),vt("popularity").byValue(.5),vt("carUsage").byValue(-n-r),t,i]},priority(e){const t=e.values;return mi(60,100,t.carUsage/t.passengerTransportUsage*100)}},It={title:"Diesel Privileg abgeschaffen",description:"Diesel wird jetzt genauso besteuert wie Benzin.",effects:(e,t,i)=>[vt("stateDebt").byValue(-7.35),vt("popularity").byValue(-1).if(t===i)],priority(e){const t=e.values;return mi(10,100,t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100)}},_t={title:"Dienstwagen Privileg abgeschaffen",description:"Steuererleichterungen für Dienstwagen werden abgeschafft.",effects(e,t,i){const n=vt("carUsage").byPercent(-.05),r=n.getChange(e.values);return[vt("stateDebt").byValue(-18),vt("popularity").byValue(-1).if(t===i),n,vt("publicLocalUsage").byValue(-r)]},priority(e){const t=e.values;return mi(50,100,t.carUsage*(1-t.carRenewablePercentage/100)/t.passengerTransportUsage*100)},citations:[K,le],details:fe`

  `,internals:fe`
    # Happy Path 20

    Zunächst sollte Nah- und Fernverkehr attraktiver gemacht werden.
    TODO: Folgen sollten davon abhängen, ob es attraktive Alternativen gibt.

    # Folgen

    - Steuermehreinnahmen: 18 mrd€ / Jahr (${G(K)})
    - -0.05% Fahleistung pro Jahr (Anreiz für Auto fällt weg Gebrauchte Wagen werden teuerer).
        - ${G(le)} sagt es gibt keine echte Schätzung dafür.
    - Entsprechend mehr Nahverkehrnutzung
    - Zufriedenheit sinkt einmalig um 1%

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 50%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `},Nt={title:"Tempolimit 130 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 130 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(e){const t=vt("carEmissionFactor").byValue(157.9),i=t.getChange(e.values);return[vt("popularity").byValue(2).if(i<0),t]},priority(e){if(!pi(e,"Tempolimit100AufAutobahnen"))return 0;const t=e.values;return mi(10,60,t.carUsage/t.passengerTransportUsage*100)}},Kt={title:"Tempolimit 120 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 120 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(e){const t=vt("carEmissionFactor").byValue(157.1),i=t.getChange(e.values);return[vt("popularity").byValue(2).if(i<0),t]},priority(e){if(!pi(e,"Tempolimit130AufAutobahnen"))return 0;const t=e.values;return mi(10,60,t.carUsage/t.passengerTransportUsage*100)}},Ht={title:"Tempolimit 100 auf Autobahnen",description:"Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 100 km/h.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects(e){const t=vt("carEmissionFactor").byValue(154.1),i=t.getChange(e.values);return[vt("popularity").byValue(-1).if(i<0),t]},priority(e){if(!pi(e,"Tempolimit120AufAutobahnen"))return 0;const t=e.values;return mi(10,60,t.carUsage/t.passengerTransportUsage*100)}},jt={title:"Generelles Tempolimit nicht umsetzen",description:"Die EU hat das generelle Tempolkmit zwar beschlossen, wir setzen es aber nicht um. Das könnte zwar Strafen oder gar Zwangsmaßnahmen bewirken, aber das Risiko der gefährdeten Wiederwahl ist zu groß.",labels:["TempolimitAutobahn"],removeLawsWithLabels:["TempolimitAutobahn"],effects:()=>[vt("stateDebt").byValue(-10),vt("popularity").byValue(-2)],priority(e){const t=e.values;return mi(10,60,t.carUsage/t.passengerTransportUsage*100)}},Jt={title:"Windkraft vereinfachen",description:"Genehmigungen für Windkraftanlagen werden vereinfacht und beschleunigt.",labels:[],removeLawsWithLabels:[],effects:(e,t,i)=>[],priority:e=>mi(80,40,fi(e)),citations:[],details:fe`

  `,internals:fe`
    # Happy Path 1.3

    # Folgen

    - Popularität unverändert: Einige freuen sich, andere ärgern die Windräder.
    - Kostenneutral.
    - Änderungen in den Ausschreibungsverfahren und Abstandsregeln wirken sich schneller aus.

    # Priorität

    - 0% bei einem Anteil von Windstrom von 80%. (Zu Beginn: 27%)
    - 100% bei einem Anteil von Windstrom von 40%.
    - linear interpoliert
  `},Zt={title:"Abstandsregeln für Windkraft wie zu Beginn",description:"Das Land / Die Kommune bestimmem über Abstände zwischen den Windkraftanlagen und Wohngebäuden.",labels:["initial","WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=pi(e,"WindkraftVereinfachen")?0:5;return[vt("electricityWindOnshoreMaxNew").setValue(6).if(i>=t+n)]},priority:e=>pi(e,"AbstandsregelnFuerWindkraftLockern")?mi(30,100,fi(e)):pi(e,"AbstandsregelnFuerWindkraftVerschaerfen")?mi(70,30,fi(e)):0},$t={title:"Abstandsregeln für Windkraft lockern",description:"Bundesweite gelockerte Abstandsregeln für Windkraftanlagen sowie Bauerlaubniss in Wäldern. Ja auch Bayern wird jetzt gezwungen Windkraftanlagen zuzulassen, sowie andere nicht bauwillige Kommunen.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=pi(e,"WindkraftVereinfachen")?0:5;return[vt("popularity").byValue(-3).if(t===i),vt("electricityWindOnshoreMaxNew").setValue(30).if(i>=t+n)]},priority:e=>pi(e,"AbstandsregelnFuerWindkraftWieBisher")?mi(70,30,fi(e)):pi(e,"AbstandsregelnFuerWindkraftAbschaffen")?mi(30,100,fi(e)):0,citations:[],details:fe`

  `,internals:fe`
    # Happy Path 2

    # Priorität

    Zu Beginn und wenn "WieBisher" ausgewählt:

    - 0% bei einem Anteil von Windstrom von 70%. (Zu Beginn: 27%)
    - 100% bei einem Anteil von Windstrom von 30%.
    - linear interpoliert

    Wenn Abstandsregeln abgeschafft wurden:

    - 0% bei einem Anteil von Windstrom von 30%.
    - 100% bei einem Anteil von Windstrom von 100%.
  `},Rt={title:"Abstandsregeln für Windkraft abschaffen",description:"Jeder der Land besitzt kann seine Windkraftanlage dahin bauen wo er will.",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=pi(e,"WindkraftVereinfachen")?0:5;return[vt("popularity").byValue(-40).if(t===i),vt("electricityWindOnshoreMaxNew").setValue(1e3).if(i>=t+n)]},priority:e=>pi(e,"AbstandsregelnFuerWindkraftLockern")?mi(80,40,fi(e)):0},Qt={title:"Abstandsregeln für Windkraft verschärfen",description:"Der Mindestabstand zwischen Wind Energie Anlagen und Wohngebäuden im Innenbereich muss das Zehnfache der Gesamthöhe der Wind Energie Anlagen betragen (10H-Regel)",labels:["WindkraftAbstandsregel"],removeLawsWithLabels:["WindkraftAbstandsregel"],effects:(e,t,i)=>[vt("popularity").byValue(5).if(t===i),vt("electricityWindOnshoreMaxNew").setValue(.42)],priority:e=>pi(e,"AbstandsregelnFuerWindkraftWieBisher")?mi(0,100,fi(e)):0},qt={title:"Ausschreibungsverfahren für Windkraft wie zu Beginn",description:"Windkraft Betreiber können sich mehrmals im Jahr auf ein eine bestimte Leistung von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag. Insgesamt werden 8,1 TWh pro Jahr ausgeschrieben.",labels:["initial","hidden","WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=pi(e,"WindkraftVereinfachen")?0:5,r=Math.min(6.9,e.values.electricityWindOnshoreMaxNew);return[vt("electricityWind").byValue(r+1.2).if(i>=t+n)]},priority:e=>pi(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?mi(60,100,vi(e)):0},Yt={title:"Ausschreibungsverfahren für Windkraft verdoppeln",description:"Der jährlich ausgeschriebene Windstrom-Zubau wird auf 16,2TWh verdoppelt.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=pi(e,"WindkraftVereinfachen")?0:5,r=Math.min(13.8,e.values.electricityWindOnshoreMaxNew);return[vt("popularity").byValue(-1).if(t===i),vt("unemployment").byValue(-20).if(t===i),vt("electricityWind").byValue(r+2.4).if(i>=t+n)]},priority:e=>pi(e,"AusschreibungsverfahrenfuerWindkraftWieBisher")?mi(100,50,vi(e)):pi(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?mi(40,100,vi(e)):0},Xt={title:"Ausschreibungsverfahren für Windkraft vervierfachen",description:"Der jährlich ausgeschriebene Windstrom-Zubau wird auf 32,4TWh vervierfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=pi(e,"WindkraftVereinfachen")?0:5,r=Math.min(27.6,e.values.electricityWindOnshoreMaxNew);return[vt("popularity").byValue(-2).if(t===i),vt("unemployment").byValue(-100).if(t===i),vt("electricityWind").byValue(r+4.8).if(i>=t+n)]},priority:e=>pi(e,"AusschreibungsverfahrenfuerWindkraftVerdoppeln")?mi(100,40,vi(e)):pi(e,"AusschreibungsverfahrenfuerWindkraftVerachtfachen")?mi(0,100,vi(e)):0,citations:[],details:fe`
    Windkraft Betreiber können sich mehrmals im Jahr auf ein eine bestimte Leistung
    von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstmöglichen
    Subventionierung umsetzen kann bekommt den Zuschlag.
  `,internals:fe`
    # Happy Path 3

    # Folgen

    - [x] Schulden +-0
    - [x] Popularität: -2%
    - [x] Arbeitsplätze: 500.000 also Arbeitslosigkeit -100 Tausend Menschen im ersten Jahr
    - [ ] Abhängigkeit, ob das Budget ausgeschöpft wird, ist schwierig.)
    - [x] CO2 Emissionen: Zubau Windkraftonshore +27,6 TWh (es sei den gedeckelt durch Abstandsregeln), Windkraftoffshore + 4,8 TWh.

    # Vorbedingungen

    - Nur wenn "verdoppeln" schon beschlossen wurde.
    - Priorität über 0%.

    # Priorität

    Wenn bisher "verdoppeln":

    - 0% bei einem Anteil der erneuerbaren Stromquellen von 100%. (Zu Beginn: 50%)
    - 100% bei einem Anteil der erneuerbaren Stromquellen von 40%.
      Wenn bisher "verachtfachen:
    - 0% bei einem Anteil der erneuerbaren Stromquellen von 0%. (Zu Beginn: 50%)
    - 100% bei einem Anteil der erneuerbaren Stromquellen von 100%.
    - linear interpoliert
  `},ei={title:"Ausschreibungsverfahren für Windkraft verachtfachen",description:"Der jährlich ausgeschriebene Windstrom-Zubau wird auf 64,8TWh verachtfacht.",labels:["WindkraftSubvention"],removeLawsWithLabels:["WindkraftSubvention"],treatAfterLabels:["WindkraftAbstandsregel"],effects(e,t,i){const n=pi(e,"WindkraftVereinfachen")?0:5,r=Math.min(55.2,e.values.electricityWindOnshoreMaxNew);return[vt("popularity").byValue(-20).if(t===i),vt("unemployment").byValue(-100).if(t===i),vt("electricityWind").byValue(r+9.6).if(i>=t+n)]},priority:e=>pi(e,"AusschreibungsverfahrenfuerWindkraftVervierfachen")?mi(100,0,vi(e)):0},ti={title:"CO2 Preis Erhöhen",description:"Die Preise werden schneller erhöht, als bisher geplant. Eine Tonne CO2 kostet in 2 Jahren 70 Euro und in 4 Jahren 100 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effects(e,t,i){const n=bi(50,0,vi(e),-1),r=bi(50,0,e.values.carRenewablePercentage,-1),a=-.5,s=vt("electricityBrownCoal").byPercent(a),l=vt("electricityHardCoal").byPercent(a),o=s.getChange(e.values)+l.getChange(e.values),u=vt("buildingsSourceOil").byPercent(a),c=u.getChange(e.values),d=vt("carUsage").byPercent(a),h=d.getChange(e.values);return[vt("stateDebt").byValue(-45e6*e.values.co2emissions).if(i>=t+2),vt("stateDebt").byValue(-3e7*e.values.co2emissions).if(i>=t+4),vt("popularity").byValue(n+r),vt("co2emissionsIndustry").byPercent(a),vt("co2emissionsAgriculture").byPercent(a),vt("co2emissionsOthers").byPercent(a),s,l,vt("electricityWind").byValue(.7*-o),vt("electricitySolar").byValue(.3*-o),u,vt("buildingsSourceBio").byValue(-c),d,vt("publicNationalUsage").byValue(.5*-h),vt("publicLocalUsage").byValue(.5*-h)]},priority:e=>100,citations:[ue],details:fe`

  `,internals:fe`
    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen werden.

    ## Staatsschulden

    sinken um die zusätzlich eingenommene CO2-Steuer: Nach 2 Jahren um 45€, nach 4 Jahren um 75€ pro emittierter Tonne CO2.

    ## Popularität

    - [x] Popularität sinkt jährlich abhängig vom Anteil der Erneuerbaren an der Stromerzeugung.
    - [x] Popularität sinkt jährlich abhängig vom Anteil der Erneuerbaren am Straßenverkehr.

    Abhängigkeit vom jeweiligen Anteil der Erneuerbaren wie folgt:

    - Anteil >= 50%: Popularität sinkt nicht.
    - Anteil = 25%: Popularität sinkt um 0.5% pro Jahr.
    - Anteil = 0%: Pooularität sinkt um 1% pro Jahr.
      (dazwischen linear interpoliert.)

    ## Fossile

    - [x] Nutzungen, die fossile Energieträger verwenden, reduzieren sich jährlich um 0,5%.

    - Es werden 0,5% von allen CO2 Emissionen bzw. emittierenden Größen abgezogen.
    - Nicht mehr erzeugter Kohlestrom wird zu 70% aus Windkraft udn 30% Solar erzeugt.
    - Erdöl wird ersetzt durch biologische Quellen.
    - KFZ wird je zur Hälfte durch Fernverkehr und Nahverkehr ersetzt.

    TODO #78: Dies ist ein sehr grobes Modell.

    # Voraussetzungen

    - Priorität > 0

    # Priorität

    - 100%
  `},ii={title:"Wirksamer CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 150 Euro.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effects(e,t,i){const n=bi(80,50,vi(e),-3),r=bi(80,50,e.values.carRenewablePercentage,-3),a=-2,s=vt("electricityBrownCoal").byPercent(a),l=vt("electricityHardCoal").byPercent(a),o=s.getChange(e.values)+l.getChange(e.values),u=vt("buildingsSourceOil").byPercent(a),c=u.getChange(e.values),d=vt("carUsage").byPercent(a),h=d.getChange(e.values);return[vt("stateDebt").byValue(-125e6*e.values.co2emissions),vt("popularity").byValue(n+r),vt("co2emissionsIndustry").byPercent(a),vt("co2emissionsAgriculture").byPercent(a),vt("co2emissionsOthers").byPercent(a),s,l,vt("electricityWind").byValue(.7*-o),vt("electricitySolar").byValue(.3*-o),u,vt("buildingsSourceBio").byValue(-c),d,vt("publicNationalUsage").byValue(.5*-h),vt("publicLocalUsage").byValue(.5*-h)]},priority:e=>100,citations:[ue],details:fe`

  `,internals:fe`
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

    - Priorität > 0

    # Priorität

    - 100%
  `},ni={title:"Voller CO2 Preis",description:"Eine Tonne CO2 kostet ab jetzt 3000 Euro. Das deckt die derzeit prognostizierten Klimafolgekosten.",labels:["CO2Preis"],removeLawsWithLabels:["CO2Preis"],effects(e,t,i){const n=bi(90,50,vi(e),-10),r=bi(90,50,e.values.carRenewablePercentage,-10),a=-5,s=vt("electricityBrownCoal").byPercent(a),l=vt("electricityHardCoal").byPercent(a),o=s.getChange(e.values)+l.getChange(e.values),u=vt("buildingsSourceOil").byPercent(a),c=u.getChange(e.values),d=vt("carUsage").byPercent(a),h=d.getChange(e.values);return[vt("stateDebt").byValue(-3e9*e.values.co2emissions),vt("popularity").byValue(n+r),vt("co2emissionsIndustry").byPercent(a),vt("co2emissionsAgriculture").byPercent(a),vt("co2emissionsOthers").byPercent(a),s,l,vt("electricityWind").byValue(.7*-o),vt("electricitySolar").byValue(.3*-o),u,vt("buildingsSourceBio").byValue(-c),d,vt("publicNationalUsage").byValue(.5*-h),vt("publicLocalUsage").byValue(.5*-h)]},priority:e=>100,citations:[oe],details:fe`

  `,internals:fe`
    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen werden.

    ## Staatsschulden

    sinken um die eingenommene CO2-Steuer von 150€ pro Tonne CO2.

    ## Popularität

    - [x] Popularität sinkt jährlich abhängig vom Anteil der Erneuerbaren an der Stromerzeugung.
    - [x] Popularität sinkt jährlich abhängig vom Anteil der Erneuerbaren am Straßenverkehr.

    Abhängigkeit vom jeweiligen Anteil der Erneuerbaren wie folgt:

    - Anteil >= 90%: Popularität sinkt nicht.
    - Anteil = 70%: Popularität sinkt um 5% pro Jahr.
    - Anteil = 50%: Popularität sinkt um 10% pro Jahr.
    - Anteil = 10%: Pooularität sinkt um 20% pro Jahr.
      (dazwischen linear interpoliert.)

    ## Fossile

    - [x] Nutzungen, die fossile Energieträger verwenden, reduzieren sich jährlich um 5%.

    - Es werden 5% von allen CO2 Emissionen bzw. emittierenden Größen abgezogen.
    - Nicht mehr erzeugter Kohlestrom wird zu 70% aus Windkraft udn 30% Solar erzeugt.
    - Erdöl wird ersetzt durch biologische Quellen.
    - KFZ wird je zur Hälfte durch Fernverkehr und Nahverkehr ersetzt.

    TODO #78: Dies ist ein sehr grobes Modell.

    # Voraussetzungen

    - Priorität > 0

    # Priorität

    - 100%
  `},ri={title:"Solarstrom Förderung einstellen",description:"Mittlere bis große Solaranlagen sollten sich selbst tragen. Die Förderung wird abgeschafft.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:()=>[vt("electricitySolar").byValue(2)],priority:e=>pi(e,"SolarstromFoerderungBeibehalten")?mi(0,100,vi(e)):0,details:fe`

  `},ai={title:"Solarstrom Förderung beibehalten",description:"Subventionierung für mittlere bis große Solaranlagen wie bisher",labels:["initial","SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:()=>[vt("electricitySolar").byValue(5)],priority:e=>mi(70,100,vi(e)),details:fe`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `},si={title:"Solarstrom Förderung x2",description:"Subventionierung für mittlere bis große Solaranlagen verdoppeln",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:(e,t,i)=>[vt("popularity").byValue(10).if(t===i),vt("unemployment").byValue(-31e3).if(t===i),vt("electricitySolar").byValue(10)],priority:e=>pi(e,"SolarstromFoerderungBeibehalten")?mi(100,30,vi(e)):0,details:fe`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.`},li={title:"Solarstrom Förderung x4",description:"Subventionierung für mittlere bis große Solaranlagen vervierfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:(e,t,i)=>[vt("popularity").byValue(20).if(t===i),vt("unemployment").byValue(-89e3).if(t===i),vt("electricitySolar").byValue(20)],priority:e=>pi(e,"SolarstromFoerdernx2")?mi(100,30,vi(e)):0,details:fe`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für besonders geeignete Gebäude, moderater Zuwachs der Freiflächen Photovoltaik mit Doppeltbewirtschaftung von Energieerzeugung und Landwirtschaft #AgroPV.
  `,internals:fe`
    # Happy path 10

    ${G(H)}
  `,citations:[H]},oi={title:"Solarstrom Förderung x8",description:"Subventionierung für mittlere bis große Solaranlagen verachtfachen",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:(e,t,i)=>[vt("popularity").byValue(-10).if(t===i),vt("unemployment").byValue(-209e3).if(t===i),vt("electricitySolar").byValue(40)],priority:e=>pi(e,"SolarstromFoerdernx4")?mi(100,30,vi(e)):0,details:fe`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für alle Gebäude, auch bei moderater Ausbäute.
    Umwandlung vieler Landwirtschaftlicher flächen in Freiflächen PV.`},ui={title:"Solar auf neuen Dächern verpflichtend",description:"Alle Neubauten bekommen PV Anlagen auf die Dächer.",labels:["SolarFoerderung"],removeLawsWithLabels:["SolarFoerderung"],treatAfterLabels:[],effects:(e,t,i)=>[vt("popularity").byValue(-3).if(t===i),vt("electricitySolar").byValue(2)],priority:e=>pi(e,"SolarstromFoerderungBeibehalten")?mi(100,30,vi(e)):0,details:fe`

  `,internals:fe`
    # Happy Path 11

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - Popularität sinkt um 3 Prozent im ersten Jahr, weil das als Zwang empfunden wird.
    - Zusätzlicher Ausbau um 2TWh pro Jahr.
  `};const ci=E({AllesBleibtBeimAlten:M,InitialAtomausstieg:Pt,KohleverstromungEinstellen:yt,EnergiemixRegeltDerMarkt:kt,KernenergienutzungVerlaengern:At,NetzausbauErleichtern:Dt,StromspeicherungErleichtern:Wt,StromspeicherungFoerdern:zt,WindkraftVereinfachen:Jt,AbstandsregelnFuerWindkraftVerschaerfen:Qt,AbstandsregelnFuerWindkraftWieBisher:Zt,AbstandsregelnFuerWindkraftLockern:$t,AbstandsregelnFuerWindkraftAbschaffen:Rt,AusschreibungsverfahrenfuerWindkraftWieBisher:qt,AusschreibungsverfahrenfuerWindkraftVerdoppeln:Yt,AusschreibungsverfahrenfuerWindkraftVervierfachen:Xt,AusschreibungsverfahrenfuerWindkraftVerachtfachen:ei,SolarstromFoerderungAbschaffen:ri,SolarstromFoerderungBeibehalten:ai,SolarstromFoerdernx2:si,SolarstromFoerdernx4:li,SolarstromFoerdernx8:oi,SolarAufAllenDaechernVerpflichtend:ui,DaemmungAltbau1Percent:Vt,DaemmungAltbau2Percent:Tt,DaemmungAltbau4Percent:Lt,DaemmungAltbauAbschaffen:Ct,NahverkehrKostenlos:Bt,AutosInInnenstaedtenVerbieten:Mt,WasserstofftechnologieFoerdern:Ut,NahverkehrAusbauen:Ot,FernverkehrVerbindungenAusbauen:Ft,AusbauVonStrassen:xt,AbschaffungDerMineraloelsteuer:Gt,DieselPrivilegAbgeschaffen:It,DienstwagenPrivilegAbgeschaffen:_t,Tempolimit130AufAutobahnen:Nt,Tempolimit120AufAutobahnen:Kt,Tempolimit100AufAutobahnen:Ht,TempolimitAufAutobahnenAussitzen:jt,FoerderungFuerTierhaltungAbschaffen:Et,CO2PreisErhoehen:ti,WirksamerCO2Preis:ii,VollerCO2Preis:ni});function di(e){const t=ci.find((t=>t.id===e));if(t)return t;throw Error(`Law #${e} not found`)}function hi(e){const t=di(e.lawId);if(t)return o(l({},t),{effectiveSince:e.effectiveSince});throw Error(`Law #${e.lawId} not found`)}function gi(e){return e.map((e=>{const t=ci.find((t=>t.id===e));return t||console.error(`Inconsistency: Proposed law #${e} not found`),t})).filter((e=>e))}function mi(e,t,i){const n=i-e,r=t-e;if(0===r)throw new Error("Linear interpolation requested with the same value for zero and hundred: "+e);return n/r*100}function bi(e,t,i,n){return Math.max(0,mi(e,t,i))/100*n}function pi(e,t){if(!ci.map((e=>e.id)).includes(t))throw new Error("Unknown law ID "+t+" used in a law.");return e.acceptedLaws.some((i=>i.lawId===t&&i.effectiveSince<=e.currentYear))}function fi(e){const t=e.values;return t.electricityWindUsable/t.electricityDemand*100}function vi(e){return(e.values.electricityWindUsable+e.values.electricitySolar+e.values.electricityWater+e.values.electricityBiomass)/e.values.electricityDemand*100}function wi(e){return e.find((e=>e.title.match(/subvention/i)&&e.title.match(/abbau/i)))}const yi=2,ki=3,Si=4,Ai=5,Pi=6;const Di=E({AbstandsregelnWindkraft:B,Altbausanierung:{title:"Gesetzesinitiative zur Sanierung von Altbauten",description:"Zur Einhaltung der Pariser Klimaschutzvereinbarung halten Experten es für unausweichlich, dass in die Sanierung von Altbauten investiert werden muss. Die konkrete Ausgestaltung wird kontrovers diskutiert.",laws:["DaemmungAltbauAbschaffen","AllesBleibtBeimAlten","DaemmungAltbau1Percent","DaemmungAltbau2Percent","DaemmungAltbau4Percent"],apply(){},probability(e){const t=e.values.co2emissionsBuildings/e.values.co2emissions*100;return Math.max(1,mi(15,25,t)/100)}},Bestechung:{title:"Anruf von befreundetem Unternehmer",description:"Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und möchte dich in seine\n    Ferienvilla auf Sardinien einladen. Er verlässt sich natürlich darauf, dass du dem Gesetzentwurf zum Abbau von Subventionen\n    nicht zustimmen wirst.\n  ",apply(e){const t=e.state.game;if(!t)return;const i=wi(gi(t.proposedLaws));i&&e.dispatch("rejectLaw",{lawId:i.id})},probability:e=>wi(gi(e.proposedLaws))?Math.random():0},EnergieStrategie:{title:"Grundsatzdebatte zur Stromerzeugung",description:"Der Bundestag debattierte heute über die Strategie zur Stromerzeugung in Deutschland. Die Meinungen der Parteien gingen dabei stark auseinander.",laws:["KohleverstromungEinstellen","EnergiemixRegeltDerMarkt","KernenergienutzungVerlaengern"],apply(){},probability:()=>Math.random()},FinanzKollaps:{title:"Zusammenbruch des Finanzsystems",description:"Deine Staatsfinanzen sind desaströs. Kein Land der Welt, keine Institutionen oder Privatpersonen trauen dir zu, dass du deine Schulden\n    jemals wieder wirst zurückahlen können. Daher gibt dir auch niemand mehr Geld, mit dem du die Staatsangestellten oder die offenen Verpflichtungen zahlen\n    könntest. Das Spiel ist damit leider beendet.\n  ",apply(e){e.dispatch("gameOver")},probability:e=>e.values.stateDebt>2*pt.stateDebt?Si:0},"Hitzehölle":{title:"Hitzehölle",description:"Die CO2-Werte sind soweit gestiegen, dass die Erde nur noch an wenigen Orten bewohnbar ist. Die ehemaligen Küstenregionen\n  stehen unter Wasser, ganze Landstriche sind verschwunden. In den trockeneren Gebieten ist die Temperatur so hoch, dass nichts mehr wächst.\n  Um die verbleibdenden Teile sind erbitterte Kämpfe ausgebrochen.\n  ",apply(e){e.dispatch("gameOver")},probability:e=>e.values.co2budget<=0?Pi:0},NewYear:{title:"Happy New Year!",description:"Mal wieder geht ein ereignisreiches Jahr zuende. Die Regierung hat eine Bilanz ihrer bisherigen Tätigkeit aufgestellt\n    und kommt zu dem nicht weiter überraschenden Ergebnis, dass sie sehr wirkungsvolle Gesetze beschlossen hat. Die Opposition -\n    ebenfalls nicht überraschend - sieht die Sache anders und verurteilt die Regierungserklärung als haltlos.\n  ",apply(e){e.dispatch("advanceYear")},probability(e){const t=null==e?void 0:e.acceptedLaws.map(hi).filter((t=>{var i;return!(null==(i=t.labels)?void 0:i.includes("initial"))&&t.effectiveSince==e.currentYear+1})),i=t&&t.length||0;if(i<3)return 0;if(i>=5)return yi;const n=Math.round(33.3*(i-2))/100;return Math.min(1,n)}},SocialMedia:{title:"Social Media Alarm!",description:"Deine Wahlkampfberaterin ruft dich völlig aufgelöst an. Ob denn an den Geschichten was dran sein, die da im\n    Netz kursieren, dass du vor einigen Jahren bei einer Demo dabei warst, bei der die Gewalt eskaliert ist.\n    Die Zeitungen haben die Meldung schon aufgegriffen und es gibt Spekulationen, ob man dir das Misstrauen aussprechen wird.\n  ",apply(e){e.dispatch("applyEffects",[vt("popularity").byPercent(-20)])},probability:()=>Math.random()},TempolimitAufAutobahnen:{title:"Generelles Tempolimit beschlossen",description:"Die EU hat ein einheitliches, generelles Tempolimit von 120km/h auf Autobahnen beschlossen. Bis auf Deutschland müssen die Mitgliedsstaaten ihr bereits bestehendes generelles Tempolimit nur noch anpassen.",laws:["Tempolimit130AufAutobahnen","Tempolimit120AufAutobahnen","Tempolimit100AufAutobahnen","TempolimitAufAutobahnenAussitzen"],apply(){},probability:()=>Math.random()},TimesUp:{title:"Du hast durchgehalten",description:"Es ist vielleicht nicht alles optimal nach deiner inzwischen sehr langen Amtszeit, aber du hast es geschafft,\n    bis hierhin durchzuhalten! Das ist wunderbar, denn noch immer ist der Planet bewohnbar, deine Maßnahmen waren zu finanzieren\n    und die Menschen hast du auf diesem Weg auch mitgenommen. Gratulation!\n  ",apply(e){e.dispatch("gameOver")},probability:e=>2050===e.currentYear?ki:0},WahlVerloren:{title:"Wahl verloren",description:"Deine Beliebtheit in der Bevölkerung ist katastrophal, lieber würde man Mao Zedong wählen als dich.\n    Deine Partei hat daher bei der Wahl gerade mal 1.3% erreicht (weil wohl manche nicht wussten, zu welcher Partei du gehörst) und ist damit unter\n    die 5% Marke gerutscht. An eine weitere Kanzlerschaft hat schon länger kein vernünftiger Mensch mehr geglaubt.\n  ",apply(e){e.dispatch("gameOver")},probability:e=>e.values.popularity<=0?Ai:0},WindkraftAusschreibung:{title:"Abstimmung zur Ausschreibung von Windkraftanlagen",description:"Heute findet die Abstimmung im Bundestag zur weiteren Ausschreibung von Kindkraftanlagen statt. Die Meinungen der Parteien sind sehr unterschiedlich.",laws:["AusschreibungsverfahrenfuerWindkraftWieBisher","AusschreibungsverfahrenfuerWindkraftVerdoppeln","AusschreibungsverfahrenfuerWindkraftVervierfachen","AusschreibungsverfahrenfuerWindkraftVerachtfachen"],apply(){},probability:()=>Math.random(),citations:[],details:fe`
    # Bauarbeiten

    Leider gibt es hier noch keine genaueren Informationen.

    # Mitarbeit gewünscht!

    Gerne kannst Du selber etwas beitragen. Was fehlt hier? Kennst Du Quellen, die Hintergrund liefern oder Aussagen belegen?

    In unserem git repo unter [\`src/events/\`](https://github.com/neustartklima/ich-kann-klima/tree/main/src/events) findest Du die zugehörige Datei.
  `,internals:fe`
    # Platz für interne Kommentare

    Dies wird der Spieler nie sehen. **Zitate** können so eingefügt werden: \${cite(uba2020DeutscheTreibhausgasEmissionen)}.
    Einfach den _backslash_ entfernen, und die richtige Quelle verwenden natürlich... ;-)
  `},SolarstromFoerderung:{title:"Bürgerinitiative fordert stärkere Solarförderung",description:"",laws:["SolarstromFoerderungAbschaffen","SolarstromFoerderungBeibehalten","SolarstromFoerdernx2","SolarstromFoerdernx4","SolarstromFoerdernx8"],apply(){},probability(e){const t=pi(e,"SolarstromFoerderungAbschaffen"),i=pi(e,"SolarstromFoerderungBeibehalten"),n=pi(e,"SolarstromFoerdernx2");return t||i||n?Math.random():0},citations:[_],details:fe`

  `,internals:fe`
    Installierte Leistung 2020 54GW entspricht Jährlich ~51,42TWh.
    ${G(_)}
    Ausgeschrieben sind 5-6GW PV Leistung
  `}}),Wi={currentYear:2021,values:pt,acceptedLaws:[],proposedLaws:[],rejectedLaws:[]};function zi(e=Wi,t=c()){return{id:t,currentYear:e.currentYear,acceptedLaws:e.acceptedLaws,proposedLaws:e.proposedLaws,rejectedLaws:e.rejectedLaws,values:ft(e.values),events:[],over:!1}}function Vi(e,t=ci,i=Di,n=Math.random){const r=function(e,t,i){const n=function(e,t){return t.map((t=>o(l({},t),{prob:t.probability(e)}))).filter((e=>e.prob>0))}(e,t),r=function(e){return e.filter((e=>e.prob>1)).reduce(((e,t)=>t.prob>((null==e?void 0:e.prob)||0)?t:e),void 0)}(n);if(r)return r;return function(e,t){for(const i of e)if((t-=i.prob)<0)return i;return}(function(e){const t=e.map((e=>e.prob)).reduce(((e,t)=>e+t),0),i=.6/t;return e.map((e=>o(l({},e),{prob:e.prob*i})))}(n),i())}(e,i,n);r&&e.events.unshift(r);const a=function(e,t,i){const n=t=>{var i;return null==(i=e.acceptedLaws)?void 0:i.some((e=>e.lawId===t.id))},r=t=>{var i;return null==(i=e.rejectedLaws)?void 0:i.includes(t.id)},a=e=>{var t;return(null==(t=e.labels)?void 0:t.includes("hidden"))||!1},s=t=>({law:t,priority:t.priority(e)}),l=e=>({law:e.law,priority:e.priority+(i.includes(e.law.id)?100:0)});return t.filter(ve(n)).filter(ve(r)).filter(ve(a)).map(s).filter((e=>e.priority>0)).map(l).sort(((e,t)=>t.priority-e.priority)).map((e=>e.law.id)).slice(0,6)}(e,t,(null==r?void 0:r.laws)?r.laws:[]);return e.proposedLaws=function(e,t){const i=[...e],n=t.filter((e=>i.includes(e))),r=t.filter((e=>!n.includes(e)));var a=0;for(;a<i.length;)n.includes(i[a])?a++:0!==r.length?(i[a]=r.shift(),a++):i.splice(a,1);return i.push(...r.slice(0,6-i.length)),i}(e.proposedLaws,a),r}function Ti(e){return Math.max(0,Math.min(100,e))}var Li=d({props:{law:{type:Object,required:!0},selectable:{type:Boolean,required:!0},numCards:{type:Number,required:!0}},setup:()=>({store:cr()}),data:()=>({accepted:!1}),computed:o(l({},h(["proposedLaws"])),{zIndex(){return this.law.zIndex},transform(){return`rotate(${2*(this.law.pos-this.numCards/2)}deg) translate(${20*Math.abs(this.numCards/2-this.law.pos)}px, -50%)`}}),methods:{select(){this.$emit("selected")},accept(){this.accepted=!0},sendAccept(e){e.animationName.match(/^twistOut-/)&&this.$emit("accepted",this.law.id)}}});const Ci=w("data-v-c57832f8");g("data-v-c57832f8");const Oi={key:0,type:"radio"},Ei={key:0,class:"button-bar"};m();const Bi=Ci(((e,t,i,n,r,a)=>(y(),b("div",{class:["Law",{accepted:e.accepted}],style:{zIndex:e.zIndex},onClick:t[2]||(t[2]=(...t)=>e.select&&e.select(...t)),onAnimationend:t[3]||(t[3]=(...t)=>e.sendAccept&&e.sendAccept(...t))},[p("label",null,[e.selectable?(y(),b("input",Oi)):f("",!0),p("div",null,[p("h3",null,v(e.law.title),1),p("div",null,v(e.law.description),1),e.selectable?(y(),b("div",Ei,[p("button",{class:"accept",onClick:t[1]||(t[1]=(...t)=>e.accept&&e.accept(...t))},"✓")])):f("",!0)])])],38))));Li.render=Bi,Li.__scopeId="data-v-c57832f8";var Mi=d({components:{LawCard:Li},setup:()=>({store:cr()}),data:()=>({zIndexes:[],poppedUp:!1}),computed:o(l({},h(["proposedLaws"])),{lawsToShow(){return this.zIndexes.length||(this.zIndexes=pe(this.proposedLaws.length,0)),this.proposedLaws.map(((e,t)=>o(l({},e),{zIndex:this.zIndexes[t],pos:t})))}}),methods:{accept(e){this.store.dispatch("acceptLaw",{lawId:e})},select(e){this.zIndexes=pe(this.proposedLaws.length,e)}}});const Fi=w("data-v-d34c798a")(((e,t,i,n,r,a)=>{const s=A("LawCard");return y(),b("div",{class:["ProposedLaws",{poppedUp:e.poppedUp}],onClick:t[1]||(t[1]=t=>e.poppedUp=!0)},[(y(!0),b(k,null,S(e.lawsToShow,((t,i)=>(y(),b(s,{key:t.id,law:t,selectable:e.poppedUp,numCards:e.lawsToShow.length,onAccepted:()=>e.accept(t.id),onSelected:()=>e.select(i)},null,8,["law","selectable","numCards","onAccepted","onSelected"])))),128))],2)}));Mi.render=Fi,Mi.__scopeId="data-v-d34c798a";var Ui=d({props:{title:String,text:String},methods:{acknowledge(){this.$emit("acknowledge")}}});const Gi=w("data-v-2df6be4d");g("data-v-2df6be4d");const xi={key:0};m();const Ii=Gi(((e,t,i,n,r,a)=>e.text?(y(),b("div",{key:0,onClick:t[1]||(t[1]=(...t)=>e.acknowledge&&e.acknowledge(...t))},[e.title?(y(),b("h2",xi,v(e.title),1)):f("",!0),p("p",null,v(e.text),1)])):f("",!0)));Ui.render=Ii,Ui.__scopeId="data-v-2df6be4d";var _i=d({props:{value:{type:Number,required:!0}},computed:{isShort(){return this.value<20},isLess(){return this.value>=20&&this.value<50},isMore(){return this.value>=50&&this.value<80},isMuch(){return this.value>=80}}});const Ni=w("data-v-df0e905e");g("data-v-df0e905e");const Ki={id:"finances"},Hi={key:0,src:"/assets/money-short.7ce9dbed.png",id:"short"},ji={key:1,src:"/assets/money-less.c10d45f8.png",id:"less"},Ji={key:2,src:"/assets/money-more.a1c17d8d.png",id:"more"},Zi={key:3,src:"/assets/money-much.ad651475.png",id:"much"};m();const $i=Ni(((e,t,i,n,r,a)=>(y(),b("div",Ki,[e.isShort?(y(),b("img",Hi)):f("",!0),e.isLess?(y(),b("img",ji)):f("",!0),e.isMore?(y(),b("img",Ji)):f("",!0),e.isMuch?(y(),b("img",Zi)):f("",!0)]))));_i.render=$i,_i.__scopeId="data-v-df0e905e";var Ri=d({props:{value:{type:Number,required:!0}},computed:{areHappy(){return this.value>=50},areAngry(){return this.value<50}}});const Qi=w("data-v-a375dc26");g("data-v-a375dc26");const qi={id:"popularity"},Yi={key:0,src:"/assets/people-happy.1e9e529c.png",id:"happy"},Xi={key:1,src:"/assets/people-angry.495e0425.png",id:"angry"};m();const en=Qi(((e,t,i,n,r,a)=>(y(),b("div",qi,[e.areHappy?(y(),b("img",Yi)):f("",!0),e.areAngry?(y(),b("img",Xi)):f("",!0)]))));Ri.render=en,Ri.__scopeId="data-v-a375dc26";var tn=d({data:()=>({levels:{healthy:"/assets/plant-healthy.1c912fd2.png",sick:"/assets/plant-sick.05726ebf.png",withered:"/assets/plant-withered.2d8ffb21.png"}}),props:{value:{type:Number,required:!0}},computed:{status(){return this.value>66?"healthy":this.value>33?"sick":"withered"},imgSrc(){return this.levels[this.status]}}});const nn=w("data-v-c0f87ac2");g("data-v-c0f87ac2");const rn={id:"plant"};m();const an=nn(((e,t,i,n,r,a)=>(y(),b("div",rn,[p("img",{src:e.imgSrc,id:e.status},null,8,["src","id"])]))));tn.render=an,tn.__scopeId="data-v-c0f87ac2";var sn=d({props:{year:Number}});const ln=w("data-v-38fe5c52");g("data-v-38fe5c52");const on={id:"calendar"};m();const un=ln(((e,t,i,n,r,a)=>(y(),b("div",on,v(e.year),1))));sn.render=un,sn.__scopeId="data-v-38fe5c52";var cn=d({});const dn=w("data-v-5952ab5a");g("data-v-5952ab5a");const hn={id:"heater"},gn=p("img",{src:"/assets/heater.5a77e425.png"},null,-1);m();const mn=dn(((e,t,i,n,r,a)=>(y(),b("div",hn,[gn]))));cn.render=mn,cn.__scopeId="data-v-5952ab5a";var bn=d({});const pn=w("data-v-3902beeb");g("data-v-3902beeb");const fn={id:"table"},vn=p("img",{src:"/assets/table-top.c87bd2fd.png",id:"table-top"},null,-1),wn=p("img",{src:"/assets/table-front.78c0f8c6.png",id:"table-front"},null,-1),yn=p("img",{src:"/assets/table-front.78c0f8c6.png",id:"table-back"},null,-1),kn=p("img",{src:"/assets/table-side.49774a53.png",id:"table-left-side"},null,-1),Sn=p("img",{src:"/assets/table-side.49774a53.png",id:"table-right-side"},null,-1);m();const An=pn(((e,t,i,n,r,a)=>(y(),b("div",fn,[vn,wn,yn,kn,Sn]))));bn.render=An,bn.__scopeId="data-v-3902beeb";var Pn=d({props:{withNews:Boolean}}),Dn="/assets/board-side.d7181ded.png",Wn="/assets/tvset-legs.78b387df.png";const zn=w("data-v-118e7bdf");g("data-v-118e7bdf");const Vn={id:"tvset"},Tn=p("div",{id:"board"},[p("img",{id:"board-front",src:"/assets/board-front.41330f02.png"}),p("img",{id:"board-left",src:Dn}),p("img",{id:"board-right",src:Dn}),p("div",{id:"board-top"})],-1),Ln={id:"tv"},Cn=p("img",{id:"tv-front",src:"/assets/tv-front.82df5c0c.png"},null,-1),On={key:0,id:"news",src:"/assets/news.c4bbc2d0.png"},En=p("div",{id:"legs"},[p("img",{id:"legs-front",src:Wn}),p("img",{id:"legs-back",src:Wn})],-1);m();const Bn=zn(((e,t,i,n,r,a)=>(y(),b("div",Vn,[Tn,p("div",Ln,[Cn,e.withNews?(y(),b("img",On)):f("",!0)]),En]))));Pn.render=Bn,Pn.__scopeId="data-v-118e7bdf";const Mn=[{id:"start",title:"Stell dir vor...",text:fe`
      ### ... du bist Politiker.

      Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl!

      Du hast vier Jahre Zeit um...

      - der Klimakatastrophe entgegenzusteuern
      - Deine Beliebtheit in der Bevölkerung zu erhalten
      - und dabei nicht zu viel Geld auszugeben
    `},{id:"room",title:"Dein Arbeitszimmer",text:"Dies ist das Zimmer, in dem Du arbeitest und Entscheidungen triffst."},{id:"desk",title:"Dein Schreibtisch",text:"Du sitzt an Deinem Schreibtisch und findest dort immer wieder Gesetzesvorhaben, unter denen du auswählen musst.",highlight:"table"},{id:"finances",title:"Die Staatsfinanzen",text:"Auf Deinem Schreibtisch siehst Du, wie viel Geld der Staat noch hat, um Deine Entscheidungen umzusetzen.",highlight:"finances"},{id:"popularity",title:"Die Wähler",text:"Wenn Du aus dem Fenster schaust, siehst Du, in welcher Stimmung Deine Wähler sind.",highlight:"popularity"},{id:"climate",title:"Das Klima",text:"Die Pflanze in der Ecke zeigt Dir, wie sich das Klima entwickelt.",highlight:"plant"}];var Fn={};const Un=w("data-v-2419943a");g("data-v-2419943a");const Gn={class:"dialog"},xn={class:"buttons"};m();const In=Un(((e,t,i,n,r,a)=>(y(),b("div",Gn,[P(e.$slots,"default",{},void 0,!0),p("div",xn,[P(e.$slots,"buttons",{},void 0,!0)])]))));Fn.render=In,Fn.__scopeId="data-v-2419943a";var _n=d({setup(){const e=cr();return e.dispatch("setupTour"),{store:e}},components:{Dialog:Fn},mounted(){this.setHighlight(this.currentStep)},computed:{currentStep(){return Mn.find((e=>e.id===this.$store.state.tour.step))},title(){var e;return null==(e=this.currentStep)?void 0:e.title},text(){var e;return null==(e=this.currentStep)?void 0:e.text}},watch:{currentStep(e){this.setHighlight(e)}},methods:{setHighlight(e){var t;const i=document.querySelector(".highlighted");i&&i.classList.remove("highlighted"),e&&e.highlight&&(null==(t=document.querySelector(`#${e.highlight}`))||t.classList.add("highlighted"))},next(){this.$store.dispatch("nextTourStep")},stop(){this.$store.dispatch("stopTour")}}});_n.render=function(e,t,i,n,r,a){const s=A("Dialog");return e.title&&e.text?(y(),b(s,{key:0},{buttons:D((()=>[p("button",{onClick:t[1]||(t[1]=(...t)=>e.stop&&e.stop(...t))},"Tour beenden"),p("button",{onClick:t[2]||(t[2]=(...t)=>e.next&&e.next(...t))},"Weiter")])),default:D((()=>[p("h2",null,v(e.title),1),p("div",{innerHTML:e.text},null,8,["innerHTML"])])),_:1})):f("",!0)};var Nn=d({components:{Calendar:sn,ClimateIndicator:tn,Heater:cn,LawProposals:Mi,SpeechBubble:Ui,FinanceIndicator:_i,PopularityIndicator:Ri,Table:bn,Tour:_n,TVSet:Pn},data:()=>({store:cr()}),computed:{eventTitle(){var e;return(null==(e=this.eventToShow())?void 0:e.title)||""},eventText(){var e;return(null==(e=this.eventToShow())?void 0:e.description)||""},currentYear(){var e;return(null==(e=this.store.state.game)?void 0:e.currentYear)||2021},finance(){const e=this.store.state.game;return e?function(e){return Ti(100-e.values.stateDebt/pt.stateDebt*50)}(e):0},popularity(){var e;return(null==(e=this.store.state.game)?void 0:e.values.popularity)||100},climate(){const e=this.store.state.game;return e?function(e){return 0===e.values.co2emissions?100:Ti(e.values.co2budget*ft(pt).co2emissions/pt.co2budget/e.values.co2emissions*50)}(e):0}},methods:{eventToShow(){var e;const t=null==(e=this.$store.state.game)?void 0:e.events[0];return t&&!t.acknowledged?t:null},acknowledge(){this.$store.dispatch("acknowledgeEvent",this.eventToShow())}}});const Kn={class:"game-setup"},Hn=p("h1",null,"#ich-kann-klima",-1),jn=p("div",{id:"walls"},[p("div",{id:"wall-back"}),p("div",{id:"wall-left"}),p("div",{id:"wall-right"})],-1);Nn.render=function(e,t,i,n,r,a){const s=A("Calendar"),l=A("Heater"),o=A("PopularityIndicator"),u=A("TVSet"),c=A("ClimateIndicator"),d=A("Table"),h=A("FinanceIndicator"),g=A("LawProposals"),m=A("SpeechBubble"),f=A("Tour");return y(),b("div",Kn,[Hn,jn,p(s,{year:e.currentYear},null,8,["year"]),p(l),p(o,{value:e.popularity},null,8,["value"]),p(u,{"with-news":!!e.eventText},null,8,["with-news"]),p(c,{value:e.climate},null,8,["value"]),p(d),p(h,{value:e.finance},null,8,["value"]),p(g),p(m,{title:e.eventTitle,text:e.eventText,onAcknowledge:e.acknowledge},null,8,["title","text","onAcknowledge"]),p(f)])};var Jn=d({setup(){const e=cr();return{store:e,acceptedLaws:W((()=>{var t;return null==(t=e.state.game)?void 0:t.acceptedLaws}))}},data:()=>({opened:void 0}),computed:{visibleAccepted(){return ci.filter((e=>{var t,i;return(null==(t=this.acceptedLaws)?void 0:t.some((t=>t.lawId===e.id)))&&!(null==(i=e.labels)?void 0:i.includes("hidden"))}))}},methods:{toggleOpen(e){this.opened=this.opened===e?void 0:e}}});const Zn=w("data-v-aace6332")(((e,t,i,n,r,a)=>(y(!0),b(k,null,S(e.visibleAccepted,((t,i)=>(y(),b("div",{key:i,class:["Law",{opened:i===e.opened}],onClick:t=>e.toggleOpen(i)},[p("h3",null,v(t.title),1),p("div",null,v(t.description),1)],10,["onClick"])))),128))));Jn.render=Zn,Jn.__scopeId="data-v-aace6332";var $n=d({components:{GameSetup:Nn,AcceptedLaws:Jn},setup:()=>({store:cr()}),methods:{startGame(e){e?this.store.dispatch("loadGame",{gameId:e}):this.store.dispatch("startGame",void 0)}},beforeRouteEnter(e,t,i){i((t=>t.startGame(e.params.id)))}});const Rn=w("data-v-3637ce73")(((e,t,i,n,r,a)=>{const s=A("GameSetup");return y(),b(s)}));$n.render=Rn,$n.__scopeId="data-v-3637ce73";var Qn=d({components:{Dialog:Fn},setup:()=>({store:cr()}),computed:{co2(){var e,t;const i=null==(e=this.store.state.game)?void 0:e.values.co2budget;return(null==(t=this.store.state.game)?void 0:t.values.co2emissions)>0?i>0?"sind weiterhin vorhanden, aber zumindest ist das Budget noch nicht aufgebraucht, dein:e Nachfolger:in hat vielleicht noch eine Chance.":"sind explodiert, das Budget ist aufgebraucht. Hätte die AfD nicht besser hinbekommen.":i>0?"hast du im Griff! Es verbleibt sogar noch ein Rest-CO2-Budget, Gratulation!":"hast du gerade noch rechtzeitig ausreichend senken können. Punktlandung."},debt(){var e;return(null==(e=this.store.state.game)?void 0:e.values.stateDebt)<1e3?"sind ausgeglichen. Die Stabilitätskriterien werden eingehalten.":"sind dir leider aus dem Ruder gelaufen."},popularity(){var e;const t=null==(e=this.store.state.game)?void 0:e.values.popularity;return t<20?"entspricht dem, was man von einem langhährigen Diktator erwarten kann.":t<50?"ist nicht berauschend, wiedergewählt würdest du wohl eher nicht.":t<80?"reicht aus, dass du noch länger am Ruder bleiben könntest. Gratulation!":"ist völlig unglaubwürdig - war das wirklich eine freie Wahl?"}},methods:{loadGame(e){this.store.dispatch("loadGame",{gameId:e})},newGame(){this.$router.push("/games")}},beforeRouteEnter(e,t,i){i((t=>{t.loadGame(e.params.id)}))}});const qn=p("h2",null,"Das Spiel ist leider zu Ende",-1),Yn=p("p",null,"Deine Entscheidungen haben etwas verändert - soviel kann man sagen.",-1),Xn=p("p",null,"Gar nicht so einfach, Politiker zu sein, oder?",-1),er={class:"button-bar"};Qn.render=function(e,t,i,n,r,a){const s=A("Dialog");return y(),b(s,null,{default:D((()=>[qn,Yn,p("ul",null,[p("li",null,"Die CO2-Emmissionen "+v(e.co2),1),p("li",null,"Die Staatsfinanzen "+v(e.debt),1),p("li",null,"Deine Beliebtheit "+v(e.popularity),1)]),Xn,p("div",er,[p("button",{onClick:t[1]||(t[1]=(...t)=>e.newGame&&e.newGame(...t))},"Neuer Versuch")])])),_:1})};const tr=[{path:"/",redirect:"/games"},{path:"/games",component:$n},{path:"/games/:id",component:$n},{path:"/games/:id/over",component:Qn}],ir=z({history:V(),routes:tr});const nr=function(e,t){let i,n=[];async function r(){if(i&&(clearTimeout(i),i=void 0),n.length){const{method:s,path:l,data:o,retry:u,resolve:c,reject:d}=n[0];try{if((null==t?void 0:t.navigator)&&!(null==t?void 0:t.navigator.onLine))throw Error("Browser is offline");const i=await e(s,l,o);n.shift(),c(i)}catch(a){u?n[0].retry=Math.max(-1,u-1):(n.shift(),d(a))}n.length&&(i=setTimeout(r,(null==t?void 0:t.timeout)||1e4))}}return{add:(e,t,a,s=-1)=>new Promise(((l,o)=>{n.push({method:e,path:t,data:a,retry:s,resolve:l,reject:o}),i||r()})),remove(e,t){n=n.filter((i=>i.method.toLowerCase()!==e.toLowerCase()||i.path!==t))},callsPending:()=>n.length>0}}(function(e,t,i=console){return async function(n,r,a){var s;try{const i={method:n};["post","put","patch"].includes(n)&&(i.body=JSON.stringify(a),i.headers={"content-type":"application/json"});const l=await t(e+r,i),o=(null==(s=l.headers.get("Content-Type"))?void 0:s.match(/json/))?await l.json():await l.text();if(l.ok)return o;throw Error(o.message||o)}catch(l){throw i.error(l),l}}}("https://api.ich-kann-klima.de/api",fetch));var rr;const ar=function({api:e,logger:t=console,storage:i=localStorage}){return{async createGame(n){i.setItem("game",JSON.stringify(n));try{e.createGame(n)}catch(r){t.warn("Cannot save new game - trying again later",r)}return n},async loadGame(t){const n=i.getItem("game");if(n){const e=JSON.parse(n);if(e.id===t)return zi(e,t)}return zi(await e.loadGame(t),t)},async saveGame(n){i.setItem("game",JSON.stringify(n));try{e.saveGame(n)}catch(r){t.warn("save on server failed - at least the game is saved in localStorage, so you can save it maybe next time",r)}},async decisionMade(t,i,n){e.decisionMade(t.id,i.id,n)},async eventOccurred(t,i){e.eventOccurred(t.id,i.id)}}}({api:(rr=nr,{createGame:e=>rr.add("post","/games",e),loadGame:e=>rr.add("get","/games/"+e,void 0,0),saveGame:e=>(rr.remove("put","/games/"+e.id),rr.add("put","/games/"+e.id,e)),decisionMade:(e,t,i)=>rr.add("post","/games/"+e+"/decisions/"+t,{accepted:i}),eventOccurred:(e,t)=>rr.add("post","/games/"+e+"/events/"+t)})}),sr={async startGame(e){const t=function(e=ci,t=Wi){const i=zi(t);return i.acceptedLaws=e.filter((e=>{var t;return null==(t=e.labels)?void 0:t.includes("initial")})).map((e=>({lawId:e.id,effectiveSince:i.currentYear}))),i}(),i=Vi(t);await ar.createGame(t),e.commit("setGameState",{game:t}),e.dispatch("applyEvent",{event:i}),ir.push("/games/"+t.id)},async loadGame(e,t){try{const i=await ar.loadGame(t.gameId);await ar.saveGame(i),ir.push("/games/"+i.id),e.commit("setGameState",{game:i})}catch(i){e.dispatch("error",{error:i})}},gameOver(e){var t;e.commit("gameOver",void 0),ir.push("/games/"+(null==(t=e.state.game)?void 0:t.id)+"/over")},async acceptLaw(e,t){const i=l({},e.state.game),n={lawId:t.lawId,effectiveSince:i.currentYear+1},r=hi(n),a=r.removeLawsWithLabels,s=i.acceptedLaws.map(hi).filter((e=>!(null==a?void 0:a.some((t=>{var i;return null==(i=e.labels)?void 0:i.includes(t)}))))).map((e=>({lawId:e.id,effectiveSince:e.effectiveSince})));i.acceptedLaws=[...s,n];const o=Vi(i);await ar.saveGame(i),e.commit("setGameState",{game:i}),e.dispatch("applyEvent",{event:o}),await ar.decisionMade(i,r,!0)},async rejectLaw(e,t){const i=l({},e.state.game);i.rejectedLaws=[...i.rejectedLaws,t.lawId],await ar.decisionMade(i,di(t.lawId),!1),await ar.saveGame(i),e.commit("setGameState",{game:i})},async advanceYear(e){const t=l({},e.state.game),i=t.acceptedLaws.map(hi);t.currentYear++,t.values=function(e,t,i){const n=ft(e.values);return t.sort(((e,t)=>{var i,n;return(null==(i=e.treatAfterLabels)?void 0:i.some((e=>{var i;return null==(i=t.labels)?void 0:i.includes(e)})))?1:(null==(n=t.treatAfterLabels)?void 0:n.some((t=>{var i;return null==(i=e.labels)?void 0:i.includes(t)})))?-1:0})).forEach((t=>{const r=t.effects(o(l({},e),{values:n}),t.effectiveSince,i);wt(n,r)})),n.co2budget-=n.co2emissions,n}(t,i,t.currentYear),await ar.saveGame(t),e.commit("setGameState",{game:t})},async applyEvent(e,t){if(!t.event)return;const i=l({},e.state.game);await ar.eventOccurred(i,t.event),t.event.apply(e)},acknowledgeEvent(e,t){const i=l({},e.state.game);i.events.find((e=>e.id===t.id)).acknowledged=!0,ar.saveGame(i),e.commit("setGameState",{game:i})},applyEffects(e,t){var i;const n=wt(l({},null==(i=e.state.game)?void 0:i.values),t),r=o(l({},e.state.game),{values:n});ar.saveGame(r),e.commit("setGameState",{game:r})},setupTour(e){const t=localStorage.getItem("tour")||Mn[0].id,i=Mn.find((e=>t===e.id));i?e.commit("setTour",{step:i.id,active:!0}):sr.stopTour(e)},nextTourStep(e){const t=Mn.findIndex((t=>e.state.tour.step===t.id));if(t<0||t==Mn.length-1)sr.stopTour(e);else{const i=Mn[t+1];e.commit("setTour",{step:i.id,active:!0}),localStorage.setItem("tour",i.id)}},stopTour(e){e.commit("setTour",{step:"",active:!1}),localStorage.setItem("tour","completed")},async error(e,t){e.commit("error",t)}},lr={setGameState(e,t){e.game=t.game},gameOver(e){e.game=o(l({},e.game),{over:!0})},setTour(e,t){e.tour=t},error(e,t){console.error(t.error),alert(t.error.message)}},or={proposedLaws:e=>e.game&&e.game.proposedLaws?gi(e.game.proposedLaws):[]},ur=Symbol();function cr(){return T(ur)}const dr=L({state:{game:void 0,tour:{active:!0,step:"start"}},mutations:lr,actions:sr,getters:or});function hr(e,t){return e<t?-1:e>t?1:0}function gr(e,t){const i=ft(e.values);function n(e){return(e>0?"+":"")+e.toFixed(2)}function r(r){const a=function(e){const i=t.find((t=>t.name===e));return i&&i.condition?i.value:0}(r),s=i[r]-e.values[r];return a&&Math.abs(a-s)<.001?n(a):a?n(a)+" / "+n(s):0!=s?n(s):""}wt(i,t);return bt.map((t=>{return{id:t.name,unit:t.unit,value:(i=t.name,e.values[i].toFixed(2)),effect:r(t.name),class:t.writable?"writable":"calculated"};var i}))}var mr=d({props:{citation:{type:Object,required:!0},showInternals:{type:Boolean,default:!1}},computed:{href(){return this.citation.url.toString()},title(){return this.citation.title||this.citation.url.toString()}}});const br={key:0},pr=C(". "),fr={key:1},vr={key:2},wr=C("Bemerkung: "),yr=C(". "),kr={key:3},Sr=C("Internes: "),Ar=C(". "),Pr={key:4},Dr=C(". "),Wr={key:5},zr=C(". "),Vr={key:6},Tr=C(". ");mr.render=function(e,t,i,n,r,a){return y(),b("p",null,[e.citation.authors?(y(),b("span",br,v(e.citation.authors+e.citation.dateString())+". ",1)):f("",!0),p("a",{target:"_blank",rel:"noreferrer noopener",href:e.href},'"'+v(e.title)+'"',9,["href"]),pr,e.citation.publisher?(y(),b("span",fr,v(e.citation.publisher)+". ",1)):f("",!0),e.citation.comment?(y(),b("span",vr,[wr,p("span",{innerHTML:e.citation.comment},null,8,["innerHTML"]),yr])):f("",!0),e.showInternals&&e.citation.internalComment?(y(),b("span",kr,[Sr,p("span",{innerHTML:e.citation.internalComment},null,8,["innerHTML"]),Ar])):f("",!0),e.citation.referringUrl?(y(),b("span",Pr,[p("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.referringUrl.toString()},"Hier gefunden",8,["href"]),Dr])):f("",!0),e.citation.archiveUrl?(y(),b("span",Wr,[p("a",{target:"_blank",rel:"noreferrer noopener",href:e.citation.archiveUrl.toString()},"Web Archiv Kopie",8,["href"]),zr])):f("",!0),e.citation.localCopy?(y(),b("span",Vr,[p("a",{target:"_blank",rel:"noreferrer noopener",href:"/sources/"+e.citation.localCopy},"Kopie",8,["href"]),Tr])):f("",!0)])};var Lr=d({components:{Citation:mr},setup(){const e=cr();return{store:e,game:W((()=>e.state.game))}},data:()=>({selectedTable:"laws",lawsSortCol:"state",lawsSortDir:1,eventsSortCol:"probability",eventsSortDir:-1,lawSelected:void 0,eventSelected:void 0,paramSelected:void 0}),methods:{sortLaws(e){e===this.lawsSortCol?this.lawsSortDir=this.lawsSortDir>0?-1:1:this.lawsSortDir=1,this.lawsSortCol=e},sortEvents(e){e===this.eventsSortCol?this.eventsSortDir=this.eventsSortDir>0?-1:1:this.eventsSortDir=1,this.eventsSortCol=e},selectLaw(e){this.unselect(),this.lawSelected=e},selectEvent(e){this.unselect(),this.eventSelected=e},selectParam(e){this.unselect(),this.paramSelected=e},unselect(){this.lawSelected=void 0,this.eventSelected=void 0,this.paramSelected=void 0}},computed:{startYearOfSelected(){if(!this.lawSelected||!this.game)return 2021;const e=this.game.acceptedLaws.find((e=>e.lawId===this.lawSelected));return e?e.effectiveSince:2021},selectedLaw(){return ci.find((e=>e.id===this.lawSelected))},selectedEvent(){return Di.find((e=>e.id===this.eventSelected))},selectedParam(){return this.paramSelected?ut[this.paramSelected]:void 0},wParam(){const e=this.selectedParam;return e instanceof he?e:void 0},cParam(){const e=this.selectedParam;return e instanceof ge?e:void 0},citationsOfLaw(){return this.selectedLaw&&this.selectedLaw.citations?this.selectedLaw.citations:[]},effectsOfSelected(){if(!this.lawSelected||!this.game)return[];this.game;const e=this.selectedLaw;return e?e.effects(this.game,this.startYearOfSelected,this.game.currentYear):[]},sortedValues(){return this.game?gr(this.game,this.effectsOfSelected):[]},sortedLaws(){return this.game?function(e,t,i,n){const r=e.proposedLaws,a=e.acceptedLaws.map((e=>e.lawId)),s=e.rejectedLaws;return n.map((t=>{return{id:t.id,priority:t.priority(e),state:(i=t.id,a.includes(i)?"a":r.includes(i)?"p":s.includes(i)?"r":"x")};var i})).sort(((e,n)=>hr(e[t],n[t])*i)).map((e=>o(l({},e),{priority:e.priority.toFixed(2)})))}(this.game,this.lawsSortCol,this.lawsSortDir,ci):[]},sortedEvents(){return this.game?(e=this.game,t=this.eventsSortCol,i=this.eventsSortDir,Di.map((t=>({id:t.id,probability:t.probability(e)}))).sort(((e,n)=>hr(e[t],n[t])*i)).map((e=>o(l({},e),{probability:(100*e.probability).toFixed(2)})))):[];var e,t,i}}});const Cr=w("data-v-4d8096da");g("data-v-4d8096da");const Or={class:"peekData"},Er={key:0,class:"Details"},Br={class:"Title"},Mr={class:"Description"},Fr=p("div",{class:"SectionHead"},"Details:",-1),Ur=p("div",{class:"SectionHead"},"Internes:",-1),Gr=p("div",{class:"SectionHead"},"Referenzen:",-1),xr={key:1,class:"Details"},Ir={class:"Title"},_r={class:"Description"},Nr=p("div",{class:"SectionHead"},"Details:",-1),Kr=p("div",{class:"SectionHead"},"Internes:",-1),Hr=p("div",{class:"SectionHead"},"Referenzen:",-1),jr={key:2,class:"Details"},Jr={class:"Title"},Zr={key:0},$r={key:1},Rr={key:2},Qr=p("div",{class:"SectionHead"},"Details:",-1),qr=p("div",{class:"SectionHead"},"Internes:",-1),Yr=p("div",{class:"SectionHead"},"Referenzen:",-1),Xr={class:"paramsList"},ea={class:"numbercol"},ta={class:"effcol"},ia={class:"buttonlist"},na={key:0,class:"lawlist"},ra={class:"priocol"},aa={key:1,class:"lawlist"},sa={class:"priocol"};m();const la=Cr(((e,t,i,n,r,a)=>{var s;const l=A("Citation");return y(),b("details",Or,[p("summary",{onClick:t[1]||(t[1]=t=>e.unselect()),class:"clickable"},"Peek"),e.selectedLaw?(y(),b("div",Er,[p("div",Br,v(e.selectedLaw.title),1),p("div",Mr,v(e.selectedLaw.description),1),Fr,p("div",{class:"Section",innerHTML:e.selectedLaw.details},null,8,["innerHTML"]),Ur,p("div",{class:"Section",innerHTML:e.selectedLaw.internals},null,8,["innerHTML"]),Gr,(y(!0),b(k,null,S(e.citationsOfLaw,((e,t)=>(y(),b(l,{class:"Section",key:t,citation:e},null,8,["citation"])))),128))])):f("",!0),e.selectedEvent?(y(),b("div",xr,[p("div",Ir,v(e.selectedEvent.title),1),p("div",_r,v(e.selectedEvent.description),1),Nr,p("div",{class:"Section",innerHTML:e.selectedEvent.details},null,8,["innerHTML"]),Kr,p("div",{class:"Section",innerHTML:e.selectedEvent.internals},null,8,["innerHTML"]),Hr,(y(!0),b(k,null,S(null==(s=e.selectedEvent)?void 0:s.citations,((e,t)=>(y(),b(l,{class:"Section",key:t,citation:e},null,8,["citation"])))),128))])):f("",!0),e.selectedParam?(y(),b("div",jr,[p("div",Jr,v(e.paramSelected)+" ["+v(e.selectedParam.unit)+"]",1),e.wParam?(y(),b("div",Zr,"Initial value: "+v(e.wParam.initialValue)+" "+v(e.wParam.unit),1)):f("",!0),e.cParam&&e.cParam.shouldInitiallyBe?(y(),b("div",$r," Should initially be: "+v(e.cParam.shouldInitiallyBe)+" "+v(e.cParam.unit),1)):f("",!0),e.cParam?(y(),b("div",Rr," Calculation: "+v(e.cParam.valueGetter),1)):f("",!0),Qr,p("div",{class:"Section",innerHTML:e.selectedParam.details},null,8,["innerHTML"]),qr,p("div",{class:"Section",innerHTML:e.selectedParam.internals},null,8,["innerHTML"]),Yr,(y(!0),b(k,null,S(e.selectedParam.citations,((e,t)=>(y(),b(l,{class:"Section",key:t,citation:e},null,8,["citation"])))),128))])):f("",!0),p("table",Xr,[(y(!0),b(k,null,S(e.sortedValues,(t=>(y(),b("tr",{key:t.id,class:["clickable",t.class],onClick:i=>e.selectParam(t.id)},[p("td",null,v(t.id),1),p("td",ea,v(t.value),1),p("td",ta,v(t.effect),1),p("td",null,v(t.unit),1)],10,["onClick"])))),128))]),p("div",null,[p("table",ia,[p("tr",null,[p("td",{class:["clickable lawButton",e.selectedTable],onClick:t[2]||(t[2]=t=>e.selectedTable="laws")},"Laws",2),p("td",{class:["clickable eventButton",e.selectedTable],onClick:t[3]||(t[3]=t=>e.selectedTable="events")},"Events",2)])]),"laws"===e.selectedTable?(y(),b("table",na,[p("tr",null,[p("th",{onClick:t[4]||(t[4]=t=>e.sortLaws("state")),class:"clickable"},"S"),p("th",{onClick:t[5]||(t[5]=t=>e.sortLaws("id")),class:"clickable"},"ID"),p("th",{onClick:t[6]||(t[6]=t=>e.sortLaws("priority")),class:"clickable priocol"},"Priority")]),(y(!0),b(k,null,S(e.sortedLaws,(t=>(y(),b("tr",{key:t.id,class:["clickable",t.state],onClick:i=>e.selectLaw(t.id)},[p("td",null,v(t.state),1),p("td",null,v(t.id),1),p("td",ra,v(t.priority),1)],10,["onClick"])))),128))])):f("",!0),"events"===e.selectedTable?(y(),b("table",aa,[p("tr",null,[p("th",{onClick:t[7]||(t[7]=t=>e.sortEvents("id")),class:"clickable"},"ID"),p("th",{onClick:t[8]||(t[8]=t=>e.sortEvents("probability")),class:"clickable priocol"},"Probability")]),(y(!0),b(k,null,S(e.sortedEvents,(t=>(y(),b("tr",{key:t.id,class:"clickable",onClick:i=>e.selectEvent(t.id)},[p("td",null,v(t.id),1),p("td",sa,v(t.probability),1)],8,["onClick"])))),128))])):f("",!0)])])}));Lr.render=la,Lr.__scopeId="data-v-4d8096da";var oa=d({components:{PeekInside:Lr},setup:()=>({store:cr(),devMode:"true"===localStorage.getItem("devMode")}),methods:{updateStyle(){const e=window.innerHeight,t=window.innerWidth,i=Math.min(e/800,t/1e3),n=(t-1e3*i)/2;document.documentElement.style.setProperty("--scale",`${i}`),document.documentElement.style.setProperty("--translateX",`${n}px`)}},mounted(){setTimeout(this.updateStyle,0),window.addEventListener("resize",this.updateStyle)}});const ua={class:"perspective"},ca={class:"peek"};oa.render=function(e,t,i,n,r,a){const s=A("router-view"),l=A("PeekInside");return y(),b(k,null,[p("div",ua,[p(s)]),p("div",ca,[e.devMode?(y(),b(l,{key:0})):f("",!0)])],64)};const da=O(oa);da.use(dr,ur),da.use(ir),da.mount("#app");
