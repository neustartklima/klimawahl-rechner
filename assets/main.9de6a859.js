var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,l=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&s(e,a,t[a]);if(n)for(var a of n(t))r.call(t,a)&&s(e,a,t[a]);return e},o=(e,n)=>t(e,a(n));import{d as c,c as d,a as u,F as p,o as m,r as v,b as h,w as g,p as w,e as A,f,v as b,t as y,g as L,h as k,m as I,i as E,j as S,k as G,l as C,n as K,u as D,q as x}from"./vendor.111cde7e.js";var B=c({});const M=u("h1",null,"#ich-kann-klima",-1),O=u("details",{class:"attribution"},[u("summary",null,"Attribution"),u("ul",null,[u("li",null,"CO2 symbol: Tommaso.sansone91, CC0 1.0, via Wikimedia commons"),u("li",null,"Euro coin: Verdy_p, Public domain, via Wikimedia commons"),u("li",null,"Clapping hands: pngimg.com, CC 4.0 BY-NC")])],-1);B.render=function(e,t,a,n,i,r){const s=v("router-view");return m(),d(p,null,[M,u(s),O],64)};var Q=c({props:{value:{type:Number,required:!0},color:{type:String,required:!0},img:{type:String}},computed:{emptyCircles(){return 10-this.value},filledCircles(){return this.value},style(){return e=>"empty"===e?"border-color: "+this.color:this.$props.img?"background-image: url("+this.$props.img+")":"background: "+this.color}}});const T=g();w("data-v-bff676d6");const j={class:"Indicator"};A();const V=T(((e,t,a,n,i,r)=>(m(),d("div",j,[(m(!0),d(p,null,h(e.emptyCircles,(t=>(m(),d("div",{class:"circle",style:e.style("empty")},null,4)))),256)),(m(!0),d(p,null,h(e.value,(t=>(m(),d("div",{class:"circle",style:e.style("filled")},null,4)))),256))]))));Q.render=V,Q.__scopeId="data-v-bff676d6";var z=c({setup(){const e=nt();return{store:e,currentYear:f((()=>{var t;return null==(t=e.state.game)?void 0:t.currentYear}))}},computed:{timespan:()=>29,years(){return this.currentYear-2020},height(){return"height: "+this.years/this.timespan*100+"%"}}});const U=g();w("data-v-ad8363c2");const N={class:"container"},P=u("div",{class:"arrow-head"},null,-1);A();const R=U(((e,t,a,n,i,r)=>(m(),d("div",N,[P,u("div",{class:"indicator",style:e.height},null,4)]))));z.render=R,z.__scopeId="data-v-ad8363c2";const J={co2budget:6700,stateDebt:1899,popularity:50,co2emissions:805,unemployment:2695,gdp:3332,electricityDemand:484.22,electricitySolar:51.42,electricityWind:131.85,electricityWater:18.4,electricityCoal:117.72,electricityBiomass:47.15,electricityNuclear:60.92},X={currentYear:2021,values:J,acceptedLaws:[],proposedLaws:[],rejectedLaws:[]};function Y(e=X){var t;return{id:b(),currentYear:e.currentYear,acceptedLaws:e.acceptedLaws,proposedLaws:e.proposedLaws,rejectedLaws:e.rejectedLaws,values:(t=e.values,o(l({},t),{get electricityGas(){return this.electricityDemand-this.electricitySolar-this.electricityWind-this.electricityWater-this.electricityCoal-this.electricityBiomass-this.electricityNuclear}}))}}function W(e,t,a){const n=l({},e);return t.forEach((e=>{const t=e.effects(n,e.effectiveSince,a);!function(e,t){Object.keys(t).forEach((a=>{e[a]+=t[a]||0}))}(n,t)})),n.co2budget-=n.co2emissions,n}function Z(e){return Math.max(0,Math.min(100,e))}function F(e){if(0===e.values.co2emissions)return 100;return Z(50*(e.values.co2budget*J.co2emissions/J.co2budget/e.values.co2emissions))}function H(e){return Z(100-50*(e.values.stateDebt/J.stateDebt))}function q(e,t){return e?Math.round(t(e)/10):0}var _=c({components:{TimeIndicator:z,Indicator:Q},setup:()=>({store:nt(),co2:"data:image/png;base64,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",coin:"/assets/euro.4b74462e.svg",hands:"/assets/clapping-hands.2a0f82d4.png"}),computed:{game(){return this.store.state.game},co2value(){return q(this.game,F)},financeValue(){return q(this.game,H)},popularityValue(){return q(this.game,(e=>e.values.popularity))}}});const $=g();w("data-v-3c9c1507");const ee={class:"CurrentIndicators"};A();const te=$(((e,t,a,n,i,r)=>{const s=v("Indicator"),l=v("TimeIndicator");return m(),d("div",ee,[u(s,{value:e.co2value,color:"#EE8AC1",img:e.co2},null,8,["value","img"]),u(s,{value:e.financeValue,color:"#A9D18E",img:e.coin},null,8,["value","img"]),u(s,{value:e.popularityValue,color:"#8FAADC",img:e.hands},null,8,["value","img"]),u(l)])}));_.render=te,_.__scopeId="data-v-3c9c1507";var ae=c({setup(){const e=nt();return{store:e,event:f((()=>e.state.visibleEvent))}},methods:{close(){this.store.dispatch("eventAcknowledged",void 0)}}});const ne=g();w("data-v-7bf64da5");const ie={key:0,class:"dialog"},re=u("header",null," Breaking News! ",-1);A();const se=ne(((e,t,a,n,i,r)=>e.event?(m(),d("div",ie,[u("div",null,[re,u("main",null,[u("h2",null,y(e.event.title),1),u("p",null,y(e.event.description),1)]),u("footer",null,[u("button",{onClick:t[1]||(t[1]=(...t)=>e.close&&e.close(...t))},"Ok")])])])):L("",!0)));ae.render=se,ae.__scopeId="data-v-7bf64da5";var le=c({components:{CurrentIndicators:_,EventOccurred:ae}});const oe={class:"game-setup"},ce={class:"wrapper"};le.render=function(e,t,a,n,i,r){const s=v("CurrentIndicators"),l=v("EventOccurred");return m(),d(p,null,[u("div",oe,[u("div",ce,[k(e.$slots,"default")]),u(s)]),u(l)],64)};var de=c({setup(){const e=nt();return{store:e,allLaws:f((()=>e.state.allLaws)),acceptedLaws:f((()=>{var t;return null==(t=e.state.game)?void 0:t.acceptedLaws}))}},data:()=>({opened:void 0}),computed:{visibleAccepted(){return this.allLaws.filter((e=>{var t,a;return(null==(t=this.acceptedLaws)?void 0:t.some((t=>t.lawId===e.id)))&&!(null==(a=e.labels)?void 0:a.includes("hidden"))}))}},methods:{toggleOpen(e){this.opened=this.opened===e?void 0:e}}});const ue=g()(((e,t,a,n,i,r)=>(m(!0),d(p,null,h(e.visibleAccepted,((t,a)=>(m(),d("div",{key:a,class:["Law",{opened:a===e.opened}],onClick:t=>e.toggleOpen(a)},[u("h3",null,y(t.title),1),u("div",null,y(t.description),1)],10,["onClick"])))),128))));de.render=ue,de.__scopeId="data-v-5f028f12";var pe=c({setup:()=>({store:nt()}),props:{proposedLaws:Array},methods:{accept(e){this.store.dispatch("acceptLaw",{lawId:e})},decline(e){this.store.dispatch("rejectLaw",{lawId:e})}}});const me=g();w("data-v-0a2a92c3");const ve={class:"ProposedLaws"},he={class:"button-bar"};A();const ge=me(((e,t,a,n,i,r)=>(m(),d("div",ve,[(m(!0),d(p,null,h(e.proposedLaws,((t,a)=>(m(),d("div",{key:a,class:"Law"},[u("h3",null,y(t.title),1),u("div",null,y(t.description),1),u("div",he,[u("button",{class:"accept",onClick:a=>e.accept(t.id)},"✓",8,["onClick"]),u("button",{class:"decline",onClick:a=>e.decline(t.id)},"✗",8,["onClick"])])])))),128))]))));function we(e){return e.find((e=>e.title.match(/subvention/i)&&e.title.match(/abbau/i)))}pe.render=ge,pe.__scopeId="data-v-0a2a92c3";const Ae=[{title:"Social Media Alarm!",description:"Deine Wahlkampfberaterin ruft dich völlig aufgelöst an. Ob denn an den Geschichten was dran sein, die da im\n    Netz kursieren, dass du vor einigen Jahren bei einer Demo dabei warst, bei der die Gewalt eskaliert ist.\n    Die Zeitungen haben die Meldung schon aufgegriffen und es gibt Spekulationen, ob man dir das Misstrauen aussprechen wird.\n  ",apply(e){e.state.game&&(e.state.game.values.popularity-=20)},probability:()=>Math.random()},{title:"Anruf von befreundetem Unternehmer",description:"Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und möchte dich in seine\n    Ferienvilla auf Sardinien einladen. Er verlässt sich natürlich darauf, dass du dem Gesetzentwurf zum Abbau von Subventionen\n    nicht zustimmen wirst.\n  ",apply(e){const t=we(e.getters.proposedLaws);t&&e.dispatch("rejectLaw",{lawId:t.id})},probability:e=>we(e.getters.proposedLaws)?Math.random():0}];var fe=c({components:{GameSetup:le,LawProposals:pe,AcceptedLaws:de},setup(){const e=nt();return{store:e,allLaws:f((()=>e.state.allLaws)),acceptedLaws:f((()=>{var t;return null==(t=e.state.game)?void 0:t.acceptedLaws}))}},data:()=>({eventOccured:!1}),computed:l({},I(["proposedLaws"])),mounted(){setTimeout(this.initiateEvent,2e4)},methods:{startGame(e){e?this.store.dispatch("loadGame",{gameId:e}):this.store.dispatch("startGame",void 0)},initiateEvent(){if(this.store.state.game){const e=function(e,t){const a=t.map((t=>o(l({},t),{priority:t.probability(e)*Math.random()}))).filter((e=>e.priority)).sort(((e,t)=>t.priority-e.priority));return a.length?a[0]:null}(this.store,Ae);e&&this.store.dispatch("applyEvent",{event:e})}},advanceYear(){this.store.dispatch("advanceYear",void 0)}},beforeRouteEnter(e,t,a){a((t=>t.startGame(e.params.id)))}});const be=g();w("data-v-50f7f6df");const ye=u("h2",null,"Beschlossene Gesetze",-1),Le=u("p",null,"Wenn Du fertig bist, wechsle zum nächsten Jahr und sieh' Dir die Auswirkungen an.",-1),ke={class:"button-bar"};A();const Ie=be(((e,t,a,n,i,r)=>{const s=v("LawProposals"),l=v("AcceptedLaws"),o=v("GameSetup");return m(),d(o,null,{default:be((()=>[u(s,{"proposed-laws":e.proposedLaws},null,8,["proposed-laws"]),ye,u(l),Le,u("div",ke,[u("button",{onClick:t[1]||(t[1]=(...t)=>e.advanceYear&&e.advanceYear(...t))},"Jahr abschließen")])])),_:1})}));fe.render=Ie,fe.__scopeId="data-v-50f7f6df";var Ee=c({components:{GameSetup:le},methods:{newGame(){this.$router.push("/games")}}});const Se=u("h2",null,"Deine erste Entscheidung steht bevor...",-1),Ge=u("p",null,[S("Wähle weise, denn "),u("u",null,"alles hat Einfluss"),S(" auf deine Beliebtheit, das Klimaziel sowie den Finanzhaushalt.")],-1),Ce=u("p",null,[S(" Durch manche Entscheidungen entstehen neue Möglichkeiten."),u("br"),S(" Es kann aber auch sein, dass du dir durch bestimmte Entscheidungen andere Möglichkeiten nimmst. ")],-1),Ke=S(" Gar nicht so einfach, Politiker zu sein, oder? "),De={class:"button-bar"};Ee.render=function(e,t,a,n,i,r){const s=v("o"),l=v("GameSetup");return m(),d(l,null,{default:E((()=>[Se,Ge,Ce,u(s,null,{default:E((()=>[Ke])),_:1}),u("div",De,[u("button",{onClick:t[1]||(t[1]=(...t)=>e.newGame&&e.newGame(...t))},"Leg' los")])])),_:1})};var xe=c({methods:{start(){this.$router.push("/start")}}});const Be={class:"wrapper"},Me=u("h2",null,"Stell dir vor...",-1),Oe=u("h3",null,"... du bist Politiker.",-1),Qe=u("p",null," Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl! ",-1),Te=u("p",null," Du hast vier Jahre Zeit um... ",-1),je=u("ul",null,[u("li",null,"Beliebtheit in der Bevölkerung zu erlangen"),u("li",null,"der Klimakatastrophe entgegenzusteuern"),u("li",null,"das Soll des Bundeshaushaltes zu erreichen/nicht zu übersteigen")],-1),Ve={class:"button-bar"};xe.render=function(e,t,a,n,i,r){return m(),d("div",Be,[Me,Oe,Qe,Te,je,u("div",Ve,[u("button",{onClick:t[1]||(t[1]=(...t)=>e.start&&e.start(...t))},"Starte das Spiel!")])])};const ze=[{path:"/",component:xe},{path:"/start",component:Ee},{path:"/games",component:fe},{path:"/games/:id",component:fe}],Ue=G({history:C(),routes:ze});var Ne={title:"Kohleverstromung einstellen",description:"Die Verbrennung von Kohle zur Erzeugung von Strom wird verboten.",effects(e,t,a){const n=a-t,i=n<18?4300/18:0,r=(10-n)/10,s=Math.max(50*r,0);return{co2emmissions:.399*-e.electricityCoal,stateDebt:2500-i,unemployment:s,electricityCoal:-e.electricityCoal,electricityGas:e.electricityGas+e.electricityCoal}},priority:e=>100-e.values.unemployment/100},Pe={title:"Energiemix regelt der Markt",description:"Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",effects:(e,t,a)=>({co2emmissions:-100,stateDebt:-1e3}),priority:e=>(2050-e.currentYear)/29*100},Re={title:"Kernenergienutzung verlängern",description:"Kernkraftwerke länger nutzen, wieder in Betrieb nehmen und neu bauen.",removeLawsWithLabels:["Kernenergie"],effects:(e,t,a)=>({electricityNuclear:104.3-e.electricityNuclear,stateDebt:2500,popularity:.1*-e.popularity}),priority:e=>1e3*(e.values.electricityGas-56.77)/56.77},Je={title:"Windkraft fördern",description:"Garantierte Einspeisevergütung für neue und erneuterte Windanlagen",effects:(e,t,a)=>({co2emmissions:-100,stateDebt:-1e3}),priority:e=>100*((e.values.electricityDemand-e.values.electricityWind-e.values.electricitySolar-e.values.electricityWater-e.values.electricityBiomass)/e.values.electricityDemand)},Xe={title:"Atomausstieg finded wie beschlossen 2022 statt",description:"",labels:["hidden","initial","Kernenergie"],effects:(e,t,a)=>({electricityNuclear:({2021:60.45,2022:30.21}[a]||0)-e.electricityNuclear}),priority:e=>0},Ye={title:"Förderung für Tierhaltung abschaffen",description:"Subventionen für Tierhaltung werden insgesamt eingestellt.",effects:(e,t,a)=>({co2emmissions:-100,stateDebt:-1e3,popularity:.1*-e.popularity}),priority:e=>100-e.values.unemployment/100};const We=Object.entries({Kohleverstromung:Ne,EnergiemixDurchMarktGeregelt:Pe,KernenergieVerlaengern:Re,WindenergieSubventionieren:Je,KeineFoerderungFuerTierhaltung:Ye,InitialAtomausstieg:Xe}).map((([e,t])=>function(e,t){const a=e.replace(/\.[tj]s(\?.*)?$/,"").split(/[\\/]/).pop();return o(l({},t),{id:a})}(e,t)));function Ze(e,t){const a=6-e.proposedLaws.length;if(a>0){const n=t.filter((t=>!e.proposedLaws.includes(t.id))).filter((t=>{var a;return!(null==(a=e.acceptedLaws)?void 0:a.some((e=>e.lawId===t.id)))})).filter((t=>{var a;return!(null==(a=e.rejectedLaws)?void 0:a.includes(t.id))})).filter((e=>{var t;return!(null==(t=e.labels)?void 0:t.includes("hidden"))})).map((t=>({law:t,priority:t.priority?t.priority(e):1}))).filter((e=>e.priority>0)).sort(((e,t)=>e.priority-t.priority)).slice(0,a);e.proposedLaws=e.proposedLaws.concat(n.map((e=>e.law.id)))}}function Fe(e,t){e.proposedLaws=e.proposedLaws.filter((e=>e!==t)),Ze(e,We)}function He(e){const t=function(e){const t=We.find((t=>t.id===e));if(t)return t;throw Error(`Law #${e} not found`)}(e.lawId);if(t)return o(l({},t),{effectiveSince:e.effectiveSince});throw Error(`Law #${e.lawId} not found`)}const qe={loadGame(e){const t=localStorage.getItem("game");if(!t)throw Error("Game not found");const a=Y(JSON.parse(t));return a.id=e,a},saveGame(e){localStorage.setItem("game",JSON.stringify(e))}},_e={startGame(e){const t=Y();t.acceptedLaws=e.state.allLaws.filter((e=>{var t;return null==(t=e.labels)?void 0:t.includes("initial")})).map((e=>({lawId:e.id,effectiveSince:t.currentYear}))),Ze(t,e.state.allLaws),qe.saveGame(t),Ue.push("/games/"+t.id)},loadGame(e,t){const a=qe.loadGame(t.gameId);qe.saveGame(a),e.commit("gameLoaded",{game:a})},acceptLaw(e,t){const a=l({},e.state.game),n={lawId:t.lawId,effectiveSince:a.currentYear+1},i=He(n).removeLawsWithLabels,r=a.acceptedLaws.map(He).filter((e=>!(null==i?void 0:i.some((t=>{var a;return null==(a=e.labels)?void 0:a.includes(t)}))))).map((e=>({lawId:e.id,effectiveSince:e.effectiveSince})));a.acceptedLaws=[...r,n],Fe(a,t.lawId),qe.saveGame(a),e.commit("gameLoaded",{game:a})},rejectLaw(e,t){const a=l({},e.state.game);a.rejectedLaws=[...a.rejectedLaws,t.lawId],Fe(a,t.lawId),qe.saveGame(a),e.commit("gameLoaded",{game:a})},advanceYear(e){const t=l({},e.state.game),a=t.acceptedLaws.map(He);t.currentYear++,t.values=W(t.values,a,t.currentYear),qe.saveGame(t),e.commit("gameLoaded",{game:t})},applyEvent(e,t){const a=l({},e.state.game);t.event.apply(e),e.commit("showEvent",t),qe.saveGame(a),e.commit("gameLoaded",{game:a})},eventAcknowledged(e){e.commit("hideEvent",void 0)}},$e={gameLoaded(e,t){e.game=t.game},showEvent(e,t){e.visibleEvent=t.event},hideEvent(e){e.visibleEvent=null}},et={proposedLaws:e=>e.game&&e.game.proposedLaws?e.game.proposedLaws.map((t=>{const a=e.allLaws.find((e=>e.id===t));return a||console.error(`Inconsistency: Proposed law #${t} not found`),a})).filter((e=>e)):[]},tt={allLaws:We,game:void 0,visibleEvent:null},at=Symbol();function nt(){return D(at)}const it=K({state:tt,mutations:$e,actions:_e,getters:et}),rt=x(B);rt.use(it,at),rt.use(Ue),rt.mount("#app");
