var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&r(e,a,t[a]);if(s)for(var a of s(t))n.call(t,a)&&r(e,a,t[a]);return e},l=(e,s)=>t(e,a(s));import{d as c,c as u,a as d,F as p,o as h,r as m,b as g,w as v,p as b,e as w,f,v as y,t as A,g as k,h as T,m as L,i as C,j as S,k as U,l as D,n as I,u as M,q as G}from"./vendor.8ae850bd.js";var E=c({});const z=d("details",{class:"attribution"},[d("summary",null,"Attribution"),d("ul",null,[d("li",null,"CO2 symbol: Tommaso.sansone91, CC0 1.0, via Wikimedia commons"),d("li",null,"Euro coin: Verdy_p, Public domain, via Wikimedia commons"),d("li",null,"Clapping hands: pngimg.com, CC 4.0 BY-NC")])],-1);E.render=function(e,t,a,s,i,n){const r=m("router-view");return h(),u(p,null,[d(r),z],64)};var P=c({props:{value:{type:Number,required:!0},color:{type:String,required:!0},img:{type:String}},computed:{emptyCircles(){return 10-this.value},filledCircles(){return this.value},style(){return e=>"empty"===e?"border-color: "+this.color:this.$props.img?"background-image: url("+this.$props.img+")":"background: "+this.color}}});const B=v();b("data-v-67d546a5");const K={class:"Indicator"};w();const O=B(((e,t,a,s,i,n)=>(h(),u("div",K,[(h(!0),u(p,null,g(e.emptyCircles,(t=>(h(),u("div",{class:"circle",style:e.style("empty")},null,4)))),256)),(h(!0),u(p,null,g(e.value,(t=>(h(),u("div",{class:"circle",style:e.style(1===t?"filled":"empty")},null,4)))),256))]))));P.render=O,P.__scopeId="data-v-67d546a5";var W=c({setup(){const e=It();return{store:e,currentYear:f((()=>{var t;return null==(t=e.state.game)?void 0:t.currentYear}))}},data:()=>({orientation:"portrait"}),computed:{timespan:()=>29,years(){return this.currentYear-2021+1},size(){return(this.orientation.match(/landscape/)?"height":"width")+": "+this.years/this.timespan*100+"%"}},mounted(){window.addEventListener("orientationchange",this.setOrientation),this.setOrientation()},methods:{setOrientation(){screen.orientation?this.orientation=screen.orientation.type||screen.mozOrientation||screen.msOrientation:this.orientation=window.innerWidth>window.innerHeight?"landscape":"portrait"}}});const x=v()(((e,t,a,s,i,n)=>(h(),u("div",{class:"Indicator",style:e.size},null,4))));W.render=x,W.__scopeId="data-v-55ce16e8";const V={co2budget:6700,stateDebt:1899,popularity:50,numberOfCitizens:83157,unemployment:2695,gdp:3332,carUsage:917e3,carRenewablePercentage:1,localTransportUsage:112600,localTransportCapacity:112600,longdistanceTransportUsage:67300,longdistanceTransportCapacity:67300,airDomesticUsage:10100,airIntlUsage:61700,publicTransportUsage:10400,publicTransportRidesPerCitizen:138,publicTransportRevenue:13.3,publicTransportSubventions:9.4,publicTransportInvestmentsPerCitizen:19.3,flightsPassengersDomestic:23100,flightsPassengersNonDomestic:101300,flightsCargo:4.7,electricityDemand:480.54,electricitySolar:51.42,electricityWind:131.85,electricityWater:14.99,electricityHardCoal:35.46,electricityBrownCoal:82.13,electricityBiomass:43.19,electricityNuclear:60.91,co2emissionsIndustry:186.793,co2emissionsBuildings:123.461,co2emissionsAgriculture:67.936,co2emissionsOthers:9.243},N={currentYear:2021,values:V,acceptedLaws:[],proposedLaws:[],rejectedLaws:[]};function R(e){return l(o({},e),{get electricityCoal(){return this.electricityHardCoal+this.electricityBrownCoal},get electricityGas(){return this.electricityDemand-this.electricitySolar-this.electricityWind-this.electricityWater-this.electricityHardCoal-this.electricityBrownCoal-this.electricityBiomass-this.electricityNuclear},get co2emissionsEnergy(){return.399*this.electricityGas+.058*this.electricitySolar+.005*this.electricityWind+.02*this.electricityWater+.835*this.electricityHardCoal+1.137*this.electricityBrownCoal+0*this.electricityBiomass+.005*this.electricityNuclear},get passengerTransportUsage(){return this.carUsage+this.localTransportUsage+this.longdistanceTransportUsage+this.airDomesticUsage+this.airIntlUsage},get co2emissionsStreetVehicles(){return 160*(this.carUsage*(1-this.carRenewablePercentage/100))/1e6+14.4},get co2emissionsMobility(){return this.co2emissionsStreetVehicles+65*this.localTransportCapacity/1e6+32*this.longdistanceTransportCapacity/1e6+222*this.airDomesticUsage/1e6+1.641},get co2emissions(){return this.co2emissionsEnergy+this.co2emissionsIndustry+this.co2emissionsMobility+this.co2emissionsBuildings+this.co2emissionsAgriculture+this.co2emissionsOthers}})}function j(e=N){return{id:y(),currentYear:e.currentYear,acceptedLaws:e.acceptedLaws,proposedLaws:e.proposedLaws,rejectedLaws:e.rejectedLaws,values:R(e.values),events:[],over:!1}}function Q(e,t){return Object.keys(t).forEach((a=>{e[a]+=t[a]||0})),e}function H(e){return Math.max(0,Math.min(100,e))}function Y(e){if(0===e.values.co2emissions)return 100;return H(50*(e.values.co2budget*R(V).co2emissions/V.co2budget/e.values.co2emissions))}function F(e){return H(100-50*(e.values.stateDebt/V.stateDebt))}function J(e,t){return e?Math.round(t(e)/10):0}var X=c({components:{TimeIndicator:W,Indicator:P},setup:()=>({store:It(),co2:"data:image/png;base64,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",coin:"/assets/euro.4b74462e.svg",hands:"/assets/clapping-hands.2a0f82d4.png"}),computed:{game(){return this.store.state.game},co2value(){return J(this.game,Y)},financeValue(){return J(this.game,F)},popularityValue(){return J(this.game,(e=>e.values.popularity))}}});const Z=v();b("data-v-c937a0d2");const q={class:"CurrentIndicators"};w();const _=Z(((e,t,a,s,i,n)=>{const r=m("TimeIndicator"),o=m("Indicator");return h(),u("div",q,[d(r),d(o,{value:e.co2value,color:"#EE8AC1",img:e.co2},null,8,["value","img"]),d(o,{value:e.financeValue,color:"#A9D18E",img:e.coin},null,8,["value","img"]),d(o,{value:e.popularityValue,color:"#8FAADC",img:e.hands},null,8,["value","img"])])}));X.render=_,X.__scopeId="data-v-c937a0d2";var $=c({props:{event:{type:Object,required:!0}},data:()=>({open:!1}),methods:{toggle(){const e=this.$refs.p;e.style.setProperty("--max-height",e.scrollHeight+"px"),this.open=!this.open}}});$.render=function(e,t,a,s,i,n){return h(),u("li",{class:{new:!e.event.acknowledged,open:e.open}},[d("title",{onClick:t[1]||(t[1]=(...t)=>e.toggle&&e.toggle(...t))},A(e.event.title),1),d("p",{ref:"p"},A(e.event.description),513)],2)};var ee=c({components:{EventItem:$},setup(){const e=It();return{store:e,events:f((()=>{var t;return null==(t=e.state.game)?void 0:t.events}))}},data:()=>({visible:!1}),methods:{close(){var e;this.visible=!1,null==(e=this.events)||e.filter((e=>!e.acknowledged)).forEach((e=>e.acknowledged=!0))},show(){this.visible=!0}}});const te=v();b("data-v-6e882f0b");const ae={key:0},se=d("header",null," News Ticker ",-1),ie={key:0},ne={key:1};w();const re=te(((e,t,a,s,i,n)=>{var r;const o=m("EventItem");return e.visible?(h(),u("div",ae,[se,(null==(r=e.events)?void 0:r.length)?(h(),u("ul",ie,[(h(!0),u(p,null,g(e.events,(e=>(h(),u(o,{key:e.title,event:e},null,8,["event"])))),128))])):(h(),u("p",ne," Keine Nachrichten bisher ")),d("footer",null,[d("button",{onClick:t[1]||(t[1]=(...t)=>e.close&&e.close(...t))},"Ok")])])):(h(),u("button",{key:1,onClick:t[2]||(t[2]=(...t)=>e.show&&e.show(...t))}," News "))}));ee.render=re,ee.__scopeId="data-v-6e882f0b";const oe=(e,t)=>({unit:e,writable:t}),le={co2budget:oe("MioTons",!0),co2emissionsIndustry:oe("MioTons",!0),co2emissionsStreetVehicles:oe("MioTons",!1),co2emissionsMobility:oe("MioTons",!1),co2emissionsBuildings:oe("MioTons",!0),co2emissionsAgriculture:oe("MioTons",!0),co2emissionsOthers:oe("MioTons",!0),co2emissionsEnergy:oe("MioTons",!1),co2emissions:oe("MioTons",!1),electricityDemand:oe("TWh/a",!0),electricitySolar:oe("TWh/a",!0),electricityWind:oe("TWh/a",!0),electricityWater:oe("TWh/a",!0),electricityBiomass:oe("TWh/a",!0),electricityNuclear:oe("TWh/a",!0),electricityHardCoal:oe("TWh/a",!0),electricityBrownCoal:oe("TWh/a",!0),electricityCoal:oe("TWh/a",!1),electricityGas:oe("TWh/a",!1),carUsage:oe("MrdPsgrKm",!0),carRenewablePercentage:oe("Percent",!0),localTransportUsage:oe("MioPsgrKm",!0),localTransportCapacity:oe("MioPsgrKm",!0),longdistanceTransportUsage:oe("MioPsgrKm",!0),longdistanceTransportCapacity:oe("MioPsgrKm",!0),airDomesticUsage:oe("MioPsgrKm",!0),airIntlUsage:oe("MioPsgrKm",!0),passengerTransportUsage:oe("MioPsgrKm",!1),publicTransportUsage:oe("MioRides",!0),publicTransportRidesPerCitizen:oe("count",!0),publicTransportRevenue:oe("MrdEuro",!0),publicTransportSubventions:oe("MrdEuro",!0),publicTransportInvestmentsPerCitizen:oe("Euro",!0),flightsPassengersDomestic:oe("TsdPeople",!0),flightsPassengersNonDomestic:oe("TsdPeople",!0),flightsCargo:oe("MioTons",!0),stateDebt:oe("MrdEuro",!0),popularity:oe("Percent",!0),numberOfCitizens:oe("TsdPeople",!0),unemployment:oe("TsdPeople",!0),gdp:oe("MrdEuro",!0)};var ce=c({setup(){const e=It();return{store:e,allLaws:e.state.allLaws,game:f((()=>e.state.game))}},data:()=>({lawsSortCol:"state",lawsSortDir:1,lawSelected:void 0}),methods:{sortLaws(e){e===this.lawsSortCol&&(this.lawsSortDir=this.lawsSortDir>0?-1:1),this.lawsSortCol=e},selectLaw(e){this.lawSelected=e}},computed:{startYearOfSelected(){if(!this.lawSelected||!this.game)return 2021;const e=this.game.acceptedLaws.find((e=>e.lawId===this.lawSelected));return e?e.effectiveSince:2021},effectsOfSelected(){if(!this.lawSelected||!this.game)return{};this.game;const e=this.allLaws.find((e=>e.id===this.lawSelected));return e?e.effects(this.game.values,this.startYearOfSelected,this.game.currentYear):{}},sortedValues(){return this.game?function(e,t){const a=R(e);function s(t){return e[t].toFixed(2)}function i(e){return(e>0?"+":"")+e.toFixed(2)}function n(s){const n=t[s],r=a[s]-e[s];return n&&Math.abs(n-r)<.001?i(n):n?i(n)+" / "+i(r):0!=r?i(r):""}return Q(a,t),Object.keys(le).map((e=>({id:e,unit:le[e].unit,value:s(e),effect:n(e),class:le[e].writable?"writable":"calculated"})))}(this.game.values,this.effectsOfSelected):[]},sortedLaws(){return this.game?function(e,t,a,s){const i=e.proposedLaws,n=e.acceptedLaws.map((e=>e.lawId)),r=e.rejectedLaws;return s.map((t=>{return{id:t.id,priority:t.priority(e),state:(a=t.id,n.includes(a)?"a":i.includes(a)?"p":r.includes(a)?"r":"x")};var a})).sort(((e,s)=>function(e,t){return e<t?-1:e>t?1:0}(e[t],s[t])*a)).map((e=>l(o({},e),{priority:e.priority.toFixed(2)})))}(this.game,this.lawsSortCol,this.lawsSortDir,this.allLaws):[]}}});const ue=v();b("data-v-5bcd46ba");const de={class:"peekData"},pe=d("summary",null,"Peek",-1),he={class:"numbercol"},me={class:"effcol"},ge={class:"numbercol"};w();const ve=ue(((e,t,a,s,i,n)=>(h(),u("details",de,[pe,d("table",null,[(h(!0),u(p,null,g(e.sortedValues,(e=>(h(),u("tr",{key:e.id,class:e.class},[d("td",null,A(e.id),1),d("td",null,A(e.unit),1),d("td",he,A(e.value),1),d("td",me,A(e.effect),1)],2)))),128))]),d("table",null,[d("tr",null,[d("th",{onClick:t[1]||(t[1]=t=>e.sortLaws("state"))},"S"),d("th",{onClick:t[2]||(t[2]=t=>e.sortLaws("id"))},"ID"),d("th",{onClick:t[3]||(t[3]=t=>e.sortLaws("priority")),class:"numbercol"},"Priority")]),(h(!0),u(p,null,g(e.sortedLaws,(a=>(h(),u("tr",{key:a.id,class:a.state,onMouseenter:t=>e.selectLaw(a.id),onMouseleave:t[4]||(t[4]=t=>e.selectLaw(void 0))},[d("td",null,A(a.state),1),d("td",null,A(a.id),1),d("td",ge,A(a.priority),1)],42,["onMouseenter"])))),128))])]))));ce.render=ve,ce.__scopeId="data-v-5bcd46ba";var be=c({components:{CurrentIndicators:X,EventList:ee,PeekInside:ce},data:()=>({devMode:"true"===localStorage.getItem("devMode")})});const we={class:"game-setup"},fe={class:"wrapper"},ye=d("h1",null,"#ich-kann-klima",-1),Ae={class:"indicators"},ke={class:"peek"};be.render=function(e,t,a,s,i,n){const r=m("EventList"),o=m("CurrentIndicators"),l=m("PeekInside");return h(),u(p,null,[d("div",we,[d("div",fe,[ye,d(r),k(e.$slots,"default")]),d("div",Ae,[d(o)])]),d("div",ke,[e.devMode?(h(),u(l,{key:0})):T("",!0)])],64)};var Te=c({setup(){const e=It();return{store:e,allLaws:f((()=>e.state.allLaws)),acceptedLaws:f((()=>{var t;return null==(t=e.state.game)?void 0:t.acceptedLaws}))}},data:()=>({opened:void 0}),computed:{visibleAccepted(){return this.allLaws.filter((e=>{var t,a;return(null==(t=this.acceptedLaws)?void 0:t.some((t=>t.lawId===e.id)))&&!(null==(a=e.labels)?void 0:a.includes("hidden"))}))}},methods:{toggleOpen(e){this.opened=this.opened===e?void 0:e}}});const Le=v()(((e,t,a,s,i,n)=>(h(!0),u(p,null,g(e.visibleAccepted,((t,a)=>(h(),u("div",{key:a,class:["Law",{opened:a===e.opened}],onClick:t=>e.toggleOpen(a)},[d("h3",null,A(t.title),1),d("div",null,A(t.description),1)],10,["onClick"])))),128))));Te.render=Le,Te.__scopeId="data-v-5f028f12";var Ce=c({setup:()=>({store:It()}),data:()=>({selectedLaw:void 0}),props:{proposedLaws:Array},methods:{select(e){this.selectedLaw=e},accept(e){this.store.dispatch("acceptLaw",{lawId:e})},decline(e){this.store.dispatch("rejectLaw",{lawId:e})}}});const Se=v();b("data-v-0b6efcd1");const Ue={class:"ProposedLaws"},De={class:"button-bar"};w();const Ie=Se(((e,t,a,s,i,n)=>(h(),u("div",Ue,[(h(!0),u(p,null,g(e.proposedLaws,((t,a)=>(h(),u("div",{key:a,class:["Law",{selected:t.id===e.selectedLaw}]},[d("div",{onClick:a=>e.select(t.id)},[d("h3",null,A(t.title),1),d("div",null,A(t.description),1),d("div",De,[d("button",{class:"accept",onClick:a=>e.accept(t.id)},"✓",8,["onClick"]),d("button",{class:"decline",onClick:a=>e.decline(t.id)},"✗",8,["onClick"])])],8,["onClick"])],2)))),128))]))));Ce.render=Ie,Ce.__scopeId="data-v-0b6efcd1";var Me=c({components:{GameSetup:be,LawProposals:Ce,AcceptedLaws:Te},setup(){const e=It();return{store:e,allLaws:f((()=>e.state.allLaws)),acceptedLaws:f((()=>{var t;return null==(t=e.state.game)?void 0:t.acceptedLaws}))}},computed:o({},L(["proposedLaws"])),methods:{startGame(e){e?this.store.dispatch("loadGame",{gameId:e}):this.store.dispatch("startGame",void 0)},advanceYear(){this.store.dispatch("advanceYear",void 0)}},beforeRouteEnter(e,t,a){a((t=>t.startGame(e.params.id)))}});const Ge=v();b("data-v-418e0cea");const Ee=d("h2",null,"Beschlossene Gesetze",-1),ze=d("p",null,"Wenn Du fertig bist, wechsle zum nächsten Jahr und sieh' Dir die Auswirkungen an.",-1),Pe={class:"button-bar"};w();const Be=Ge(((e,t,a,s,i,n)=>{const r=m("LawProposals"),o=m("AcceptedLaws"),l=m("GameSetup");return h(),u(l,null,{default:Ge((()=>[d(r,{"proposed-laws":e.proposedLaws},null,8,["proposed-laws"]),Ee,d(o),ze,d("div",Pe,[d("button",{onClick:t[1]||(t[1]=(...t)=>e.advanceYear&&e.advanceYear(...t))},"Jahr abschließen")])])),_:1})}));Me.render=Be,Me.__scopeId="data-v-418e0cea";var Ke=c({components:{GameSetup:be},methods:{newGame(){this.$router.push("/games")}}});const Oe=d("h2",null,"Deine erste Entscheidung steht bevor...",-1),We=d("p",null,[S("Wähle weise, denn "),d("u",null,"alles hat Einfluss"),S(" auf deine Beliebtheit, das Klimaziel sowie den Finanzhaushalt.")],-1),xe=d("p",null,[S(" Durch manche Entscheidungen entstehen neue Möglichkeiten."),d("br"),S(" Es kann aber auch sein, dass du dir durch bestimmte Entscheidungen andere Möglichkeiten nimmst. ")],-1),Ve=d("p",null,"Gar nicht so einfach, Politiker zu sein, oder?",-1),Ne={class:"button-bar"};Ke.render=function(e,t,a,s,i,n){const r=m("GameSetup");return h(),u(r,null,{default:C((()=>[Oe,We,xe,Ve,d("div",Ne,[d("button",{onClick:t[1]||(t[1]=(...t)=>e.newGame&&e.newGame(...t))},"Leg' los")])])),_:1})};var Re=c({methods:{start(){this.$router.push("/start")}}});const je={class:"wrapper"},Qe=d("h2",null,"Stell dir vor...",-1),He=d("h3",null,"... du bist Politiker.",-1),Ye=d("p",null," Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl! ",-1),Fe=d("p",null," Du hast vier Jahre Zeit um... ",-1),Je=d("ul",null,[d("li",null,"Beliebtheit in der Bevölkerung zu erlangen"),d("li",null,"der Klimakatastrophe entgegenzusteuern"),d("li",null,"das Soll des Bundeshaushaltes zu erreichen/nicht zu übersteigen")],-1),Xe={class:"button-bar"};Re.render=function(e,t,a,s,i,n){return h(),u("div",je,[Qe,He,Ye,Fe,Je,d("div",Xe,[d("button",{onClick:t[1]||(t[1]=(...t)=>e.start&&e.start(...t))},"Starte das Spiel!")])])};var Ze=c({components:{GameSetup:be},setup:()=>({store:It()}),computed:{co2(){var e,t;const a=null==(e=this.store.state.game)?void 0:e.values.co2budget;return(null==(t=this.store.state.game)?void 0:t.values.co2emissions)>0?a>0?"sind weiterhin vorhanden, aber zumindest ist das Budget noch nicht aufgebraucht, dein:e Nachfolger:in hat vielleicht noch eine Chance.":"sind explodiert, das Budget ist aufgebraucht. Hätte die AfD nicht besser hinbekommen.":a>0?"hast du im Griff! Es verbleibt sogar noch ein Rest-CO2-Budget, Gratulation!":"hast du gerade noch rechtzeitig ausreichend senken können. Punktlandung."},debt(){var e;return(null==(e=this.store.state.game)?void 0:e.values.stateDebt)<1e3?"sind ausgeglichen. Die Stabilitätskriterien werden eingehalten.":"sind dir leider aus dem Ruder gelaufen."},popularity(){var e;const t=null==(e=this.store.state.game)?void 0:e.values.popularity;return t<20?"entspricht dem, was man von einem langhährigen Diktator erwarten kann.":t<50?"ist nicht berauschend, wiedergewählt würdest du wohl eher nicht.":t<80?"reicht aus, dass du noch länger am Ruder bleiben könntest. Gratulation!":"ist völlig unglaubwürdig - war das wirklich eine freie Wahl?"}},methods:{loadGame(e){this.store.dispatch("loadGame",{gameId:e})},newGame(){this.$router.push("/games")}},beforeRouteEnter(e,t,a){a((t=>{t.loadGame(e.params.id)}))}});const qe={class:"wrapper"},_e=d("h2",null,"Das Spiel ist leider zu Ende",-1),$e=d("p",null,"Deine Entscheidungen haben etwas verändert - soviel kann man sagen.",-1),et=d("p",null,"Gar nicht so einfach, Politiker zu sein, oder?",-1),tt={class:"button-bar"};Ze.render=function(e,t,a,s,i,n){const r=m("GameSetup");return h(),u(r,null,{default:C((()=>[d("div",qe,[_e,$e,d("ul",null,[d("li",null,"Die CO2-Emmissionen "+A(e.co2),1),d("li",null,"Die Staatsfinanzen "+A(e.debt),1),d("li",null,"Deine Beliebtheit "+A(e.popularity),1)]),et,d("div",tt,[d("button",{onClick:t[1]||(t[1]=(...t)=>e.newGame&&e.newGame(...t))},"Neuer Versuch")])])])),_:1})};const at=[{path:"/",component:Re},{path:"/start",component:Ke},{path:"/games",component:Me},{path:"/games/:id",component:Me},{path:"/games/:id/over",component:Ze}],st=U({history:D(),routes:at});function it(e){return Object.entries(e).map((([e,t])=>l(o({},t),{id:e.replace(/\W/g,"_")})))}function nt(e,t){const a=void 0===e?(e,t)=>t:(t,a)=>Math.max(a,e-t),s=void 0===t?(e,t)=>t:(e,a)=>Math.min(a,t-e);return(e,t)=>t>0?s(e,t):a(e,t)}const rt=nt(0,100),ot=nt(0,void 0),lt=nt(0,void 0),ct=nt(0,void 0);function ut(e,t,a){const s=a-e,i=t-e;if(0===i)throw new Error("Linear interpolation requested with the same value for zero and hundred: "+e);return s/i*100}var dt={title:"Kohleverstromung einstellen",description:"Die Verbrennung von Kohle zur Erzeugung von Strom wird verboten.",effects(e,t,a){const s=a-t,i=s<18?4.3/18:0,n=(10-s)/55,r=Math.max(50*n,0);return{electricityHardCoal:-e.electricityHardCoal,electricityBrownCoal:-e.electricityBrownCoal,stateDebt:2.5-i,unemployment:r}},priority:e=>e.values.electricityCoal/e.values.electricityDemand<=.1?0:ut(1e4,0,e.values.unemployment)},pt={title:"Energiemix regelt der Markt",description:"Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",effects:(e,t,a)=>({stateDebt:-37,electricityHardCoal:lt(e.electricityHardCoal,-.1*V.electricityHardCoal),electricityBrownCoal:lt(e.electricityBrownCoal,-.05*V.electricityBrownCoal),electricityWind:5,electricitySolar:3,electricityWater:.5}),priority:e=>ut(2050,2021,e.currentYear)};const ht=R(V).electricityGas;const mt=it({KohleverstromungEinstellen:dt,EnergiemixRegeltDerMarkt:pt,KernenergienutzungVerlaengern:{title:"Kernenergienutzung verlängern",description:"Kernkraftwerke länger nutzen, wieder in Betrieb nehmen und neu bauen.",removeLawsWithLabels:["Kernenergie"],effects:(e,t,a)=>({electricityNuclear:104.3-e.electricityNuclear,stateDebt:-2.5,popularity:rt(e.popularity,-4)}),priority:e=>ut(ht,1.1*ht,e.values.electricityGas)},InitialAtomausstieg:{title:"Initial: Atomausstieg",description:"Atomausstieg finded wie beschlossen 2022 statt",labels:["hidden","initial","Kernenergie"],effects:(e,t,a)=>({electricityNuclear:({2021:60.45,2022:30.21}[a]||0)-e.electricityNuclear}),priority:e=>0},WindenergieSubventionieren:{title:"Windenergie subventionieren",description:"Garantierte Einspeisevergütung für neue und erneuterte Windanlagen",effects:(e,t,a)=>({electricityWind:20,stateDebt:1}),priority:e=>ut(0,100,(e.values.electricityDemand-e.values.electricityWind-e.values.electricitySolar-e.values.electricityWater-e.values.electricityBiomass)/e.values.electricityDemand*100)},DaemmungVonWohngebaeudenFoerdern:{title:"Dämmung von Wohngebäuden fördern",description:"Die nachträgliche Dämmung von Wohngebäuden wird mit günstigen Krediten gefördert.",effects:(e,t,a)=>a-t>=2?{stateDebt:1,co2emissionsBuildings:ot(e.co2emissionsBuildings,-2)}:{stateDebt:1},priority:e=>ut(15,25,e.values.co2emissionsBuildings/e.values.co2emissions*100)},NahverkehrAusbauen:{title:"Nahverkehr Ausbauen",description:"Der Ausbau des Nahverkehrs wird bundesweit stärker bezuschusst.",effects(e,t,a){const s=e.localTransportCapacity/e.localTransportUsage*100>=105?.01*e.localTransportUsage:0,i=-ct(e.carUsage,-s),n={stateDebt:3,localTransportCapacity:.01*e.localTransportCapacity,localTransportUsage:i,carUsage:-i};return a-t>=5?l(o({},n),{popularity:rt(e.popularity,2)}):o({},n)},priority:e=>ut(20,35,e.values.co2emissionsMobility/e.values.co2emissions*100)},FoerderungFuerTierhaltungAbschaffen:{title:"Förderung für Tierhaltung abschaffen",description:"Subventionen für Tierhaltung werden ersatzlos gestrichen",effects:(e,t,a)=>t===a?{co2emissionsAgriculture:ot(e.co2emissionsAgriculture,-10),stateDebt:-10,popularity:rt(e.popularity,-20)}:{stateDebt:-10},priority:e=>ut(1e4,0,e.values.unemployment)},NahverkehrKostenlos:{title:"Nahverkehr Kostenlos",description:"Die Kosten für den Nahverkehr werden bundesweit bezuschusst, so dass keine Tickets mehr benötigt werden.",effects(e,t,a){const s=(t===a?10:1)/100*e.localTransportUsage,i=-ct(e.carUsage,-s),n={stateDebt:10,localTransportUsage:i,carUsage:-i};return t===a?l(o({},n),{unemployment:20,popularity:rt(e.popularity,10)}):n},priority:e=>ut(0,10,e.values.co2emissionsMobility/e.values.co2emissions*100)},AutosInInnenstaedtenVerbieten:{title:"Autos in Innenstädten verbieten",description:"Die Innenstädte der großen Städte werden zu Autofreien Zonen erklärt und begrünt, sowie Fahrrad und Fußgängerzonen eingerichtet.",effects(e,t,a){var s=rt(e.popularity,-2);e.localTransportCapacity>1.2*e.localTransportUsage&&(s=rt(e.popularity,-1),t+2<a&&(s=rt(e.popularity,2)));const i=t===a?.1*e.localTransportUsage:0,n=-ct(e.carUsage,-i);return{popularity:s,carUsage:-n,localTransportUsage:n}},priority:e=>ut(90,120,e.values.localTransportCapacity/e.values.localTransportUsage*100)},FernverkehrVerbindungenAusbauen:{title:"Fernverkehr Verbindungen ausbauen",description:"Der Ausbau des öffentlichen Fernverkehrs wird bundesweit stärker Bezuschusst und Vorangetrieben",effects(e,t,a){const s=e.longdistanceTransportCapacity/e.longdistanceTransportUsage*100>=105?.015*e.longdistanceTransportUsage:0,i=-ct(e.carUsage,-s);return{stateDebt:6,longdistanceTransportCapacity:.01*e.longdistanceTransportCapacity,longdistanceTransportUsage:.667*i,carUsage:-i,localTransportUsage:.333*i,popularity:rt(e.popularity,2)}},priority:e=>ut(150,80,e.values.longdistanceTransportCapacity/e.values.longdistanceTransportUsage*100)},WasserstofftechnologieFoerdern:{title:"Wasserstofftechnologie fördern",description:"Forschung und Entwicklung von wasserstoffbasierter Antriebs- und Produktionstechnologie wird stark gefördert.",effects(e,t,a){const s=t+5<=a?1:0;return{stateDebt:3,carRenewablePercentage:rt(e.carRenewablePercentage,s)}},priority(e){const t=e.values,a=t.localTransportUsage+t.longdistanceTransportUsage+t.carUsage;return ut(40,90,t.carUsage/a*100)}},AbschaffungDerMineraloelsteuer:{title:"Abschaffung der Mineralölsteuer",description:"Die Steuer auf sämtliche erdölbasierten Treibstoffe wird abgeschafft.",effects(e,t,a){const s={stateDebt:41,popularity:rt(e.popularity,t===a?5:-3)},i=ct(e.localTransportUsage,-.2*e.localTransportUsage),n=ct(e.longdistanceTransportUsage,-.2*e.longdistanceTransportUsage);return a===t?l(o({},s),{carUsage:-i-n,localTransportUsage:i,longdistanceTransportUsage:n}):s},priority(e){const t=e.values,a=t.localTransportUsage+t.longdistanceTransportUsage+t.carUsage;return ut(70,100,t.carUsage/a*100)}},AusbauVonStrassen:{title:"Ausbau von Straßen",description:"Autobahnen und Straßen werden intensiver ausgebaut.",effects(e,t,a){const s=ct(e.localTransportUsage,-.01*e.localTransportUsage),i=ct(e.longdistanceTransportUsage,-.01*e.longdistanceTransportUsage);return{stateDebt:5,popularity:rt(e.popularity,.5),carUsage:-s-i,localTransportUsage:s,longdistanceTransportUsage:i}},priority(e){const t=e.values,a=t.localTransportUsage+t.longdistanceTransportUsage+t.carUsage;return ut(70,100,t.carUsage/a*100)}}});function gt(e,t){const a=6-e.proposedLaws.length;if(a>0){const s=t.filter((t=>!e.proposedLaws.includes(t.id))).filter((t=>{var a;return!(null==(a=e.acceptedLaws)?void 0:a.some((e=>e.lawId===t.id)))})).filter((t=>{var a;return!(null==(a=e.rejectedLaws)?void 0:a.includes(t.id))})).filter((e=>{var t;return!(null==(t=e.labels)?void 0:t.includes("hidden"))})).map((t=>({law:t,priority:t.priority?t.priority(e):1}))).filter((e=>e.priority>0)).sort(((e,t)=>t.priority-e.priority)).slice(0,a);e.proposedLaws=e.proposedLaws.concat(s.map((e=>e.law.id)))}}function vt(e,t){e.proposedLaws=e.proposedLaws.filter((e=>e!==t)),gt(e,mt)}function bt(e){const t=function(e){const t=mt.find((t=>t.id===e));if(t)return t;throw Error(`Law #${e} not found`)}(e.lawId);if(t)return l(o({},t),{effectiveSince:e.effectiveSince});throw Error(`Law #${e.lawId} not found`)}function wt(e,t){let a;function s(){if(e.state.game){const a=t.map((t=>l(o({},t),{priority:t.probability(e)*Math.random()}))).filter((e=>e.priority)).sort(((e,t)=>t.priority-e.priority));a.length&&e.dispatch("applyEvent",{event:a[0]})}}return{start(){this.pause(),a=setTimeout(s,6e4*Math.random())},pause(){a&&clearTimeout(a),a=0},initiateEvent:s}}function ft(e){return e.find((e=>e.title.match(/subvention/i)&&e.title.match(/abbau/i)))}const yt=it({SocialMedia:{title:"Social Media Alarm!",description:"Deine Wahlkampfberaterin ruft dich völlig aufgelöst an. Ob denn an den Geschichten was dran sein, die da im\n    Netz kursieren, dass du vor einigen Jahren bei einer Demo dabei warst, bei der die Gewalt eskaliert ist.\n    Die Zeitungen haben die Meldung schon aufgegriffen und es gibt Spekulationen, ob man dir das Misstrauen aussprechen wird.\n  ",apply(e){const t=e.state.game;t&&(t.values.popularity+=Math.max(-t.values.popularity,-20))},probability:()=>Math.random()},Bestechung:{title:"Anruf von befreundetem Unternehmer",description:"Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und möchte dich in seine\n    Ferienvilla auf Sardinien einladen. Er verlässt sich natürlich darauf, dass du dem Gesetzentwurf zum Abbau von Subventionen\n    nicht zustimmen wirst.\n  ",apply(e){const t=ft(e.getters.proposedLaws);t&&e.dispatch("rejectLaw",{lawId:t.id})},probability:e=>ft(e.getters.proposedLaws)?Math.random():0},WahlVerloren:{title:"Wahl verloren",description:"Deine Beliebtheit in der Bevölkerung ist katastrophal, lieber würde man Mao Zedong wählen als dich.\n    Deine Partei hat daher bei der Wahl gerade mal 1.3% erreicht (weil wohl manche nicht wussten, zu welcher Partei du gehörst) und ist damit unter\n    die 5% Marke gerutscht. An eine weitere Kanzlerschaft hat schon länger kein vernünftiger Mensch mehr geglaubt.\n  ",apply(e){e.dispatch("gameOver")},probability:e=>e.state.game&&e.state.game.values.popularity<=0?1:0},FinanzKollaps:{title:"Zusammenbruch des Finanzsystems",description:"Deine Staatsfinanzen sind desaströs. Kein Land der Welt, keine Institutionen oder Privatpersonen trauen dir zu, dass du deine Schulden\n    jemals wieder wirst zurückahlen können. Daher gibt dir auch niemand mehr Geld, mit dem du die Staatsangestellten oder die offenen Verpflichtungen zahlen\n    könntest. Das Spiel ist damit leider beendet.\n  ",apply(e){e.dispatch("gameOver")},probability:e=>e.state.game&&e.state.game.values.stateDebt>2*V.stateDebt?1:0},TimesUp:{title:"Du hast durchgehalten",description:"Es ist vielleicht nicht alles optimal nach deiner inzwischen sehr langen Amtszeit, aber du hast es geschafft,\n    bis hierhin durchzuhalten! Das ist wunderbar, denn noch immer ist der Planet bewohnbar, deine Maßnahmen waren zu finanzieren\n    und die Menschen hast du auf diesem Weg auch mitgenommen. Gratulation!\n  ",apply(e){e.dispatch("gameOver")},probability:e=>e.state.game&&2050===e.state.game.currentYear?1:0},"Hitzehölle":{title:"Hitzehölle",description:"Die CO2-Werte sind soweit gestiegen, dass die Erde nur noch an wenigen Orten bewohnbar ist. Die ehemaligen Küstenregionen\n  stehen unter Wasser, ganze Landstriche sind verschwunden. In den trockeneren Gebieten ist die Temperatur so hoch, dass nichts mehr wächst.\n  Um die verbleibdenden Teile sind erbitterte Kämpfe ausgebrochen.\n  ",apply(e){e.dispatch("gameOver")},probability:e=>e.state.game&&e.state.game.values.co2budget<=0?1:0}}),At={loadGame(e){const t=localStorage.getItem("game");if(!t)throw Error("Game not found");const a=j(JSON.parse(t));return a.id=e,a},saveGame(e){localStorage.setItem("game",JSON.stringify(e))}};let kt;function Tt(){return kt||(kt=wt(Mt,yt))}const Lt={startGame(e){const t=j();t.acceptedLaws=e.state.allLaws.filter((e=>{var t;return null==(t=e.labels)?void 0:t.includes("initial")})).map((e=>({lawId:e.id,effectiveSince:t.currentYear}))),gt(t,e.state.allLaws),At.saveGame(t),Tt().start(),st.push("/games/"+t.id)},loadGame(e,t){const a=At.loadGame(t.gameId);At.saveGame(a),Tt().start(),e.commit("setGameState",{game:a})},gameOver(e){var t;e.commit("gameOver",void 0),st.push("/games/"+(null==(t=e.state.game)?void 0:t.id)+"/over")},acceptLaw(e,t){const a=o({},e.state.game),s={lawId:t.lawId,effectiveSince:a.currentYear+1},i=bt(s).removeLawsWithLabels,n=a.acceptedLaws.map(bt).filter((e=>!(null==i?void 0:i.some((t=>{var a;return null==(a=e.labels)?void 0:a.includes(t)}))))).map((e=>({lawId:e.id,effectiveSince:e.effectiveSince})));a.acceptedLaws=[...n,s],vt(a,t.lawId),At.saveGame(a),e.commit("setGameState",{game:a})},rejectLaw(e,t){const a=o({},e.state.game);a.rejectedLaws=[...a.rejectedLaws,t.lawId],vt(a,t.lawId),At.saveGame(a),e.commit("setGameState",{game:a})},advanceYear(e){const t=o({},e.state.game),a=t.acceptedLaws.map(bt);t.currentYear++,t.values=function(e,t,a){const s=R(e);return t.forEach((e=>{const t=e.effects(s,e.effectiveSince,a);Q(s,t)})),s.co2budget-=s.co2emissions,s}(t.values,a,t.currentYear),At.saveGame(t),e.commit("setGameState",{game:t}),Tt().start()},applyEvent(e,t){t.event.apply(e);const a=o({},e.state.game);a.events.unshift(t.event),e.commit("setGameState",{game:a}),At.saveGame(e.state.game)}},Ct={setGameState(e,t){e.game=t.game},gameOver(e){e.game=l(o({},e.game),{over:!0})}},St={proposedLaws:e=>e.game&&e.game.proposedLaws?e.game.proposedLaws.map((t=>{const a=e.allLaws.find((e=>e.id===t));return a||console.error(`Inconsistency: Proposed law #${t} not found`),a})).filter((e=>e)):[]},Ut={allLaws:mt,game:void 0,visibleEvent:null},Dt=Symbol();function It(){return M(Dt)}const Mt=I({state:Ut,mutations:Ct,actions:Lt,getters:St}),Gt=G(E);Gt.use(Mt,Dt),Gt.use(st),Gt.mount("#app");
