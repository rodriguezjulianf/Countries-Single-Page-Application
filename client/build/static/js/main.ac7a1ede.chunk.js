(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(t,e,n){t.exports={countriesPage:"Pages_countriesPage__1dUCY",activityPage:"Pages_activityPage__1-vPE",landingTitleAndButton:"Pages_landingTitleAndButton__3SnAI",landingTitle1:"Pages_landingTitle1__1gfv_",landingTitle2:"Pages_landingTitle2__3wWoQ",landingTitle3:"Pages_landingTitle3__1bXTY",landingPage:"Pages_landingPage__2zoq6"}},15:function(t,e,n){t.exports={countryList:"CountryList_countryList__UpjC9",countryMap:"CountryList_countryMap__1QcTN",title:"CountryList_title__33BpY",titleWrap:"CountryList_titleWrap__bbHTm",buttons:"CountryList_buttons__25nqP",pageButtons:"CountryList_pageButtons__Qr09s",filterButtons:"CountryList_filterButtons__2h3Sm",pageButtonsAndMapWrapper:"CountryList_pageButtonsAndMapWrapper__1Ylgh"}},17:function(t,e,n){t.exports={countryPage:"CountryPage_countryPage__jSn5m",countryName:"CountryPage_countryName__1h3wV",countryData:"CountryPage_countryData__1A5Go",countryTextData:"CountryPage_countryTextData__bTJ7p",countryFlag:"CountryPage_countryFlag__2DehV",countryActivitiesChart:"CountryPage_countryActivitiesChart__3BNG6",countryActivities:"CountryPage_countryActivities__cS9eU",mainButton:"CountryPage_mainButton__HvF81"}},18:function(t,e,n){t.exports={searchBar:"Forms_searchBar__21tXX",activityForm:"Forms_activityForm__3LOVl",inputs:"Forms_inputs__3Rspz",submit:"Forms_submit__ZQRv4",selectedCountries:"Forms_selectedCountries__S1_lR"}},19:function(t,e,n){t.exports={listItem:"ListItem_listItem__3Fr_2",itemText:"ListItem_itemText__tmdAa",countryName:"ListItem_countryName__3NSFF",countryRegion:"ListItem_countryRegion__2F0M9",countryFlag:"ListItem_countryFlag__2CqBb"}},2:function(t,e,n){t.exports={buttons:"Buttons_buttons__3_2yn",dropdown:"Buttons_dropdown__CGtHX",dropdownContent:"Buttons_dropdownContent__15dfq",dropbtn:"Buttons_dropbtn__xkto_"}},22:function(t,e,n){t.exports={activityItem:"ActivityItem_activityItem__18Jbr",activityItem1:"ActivityItem_activityItem1__3mYhf",activityItem2:"ActivityItem_activityItem2__32wGt",activityItem3:"ActivityItem_activityItem3__1WaCh",activityItem4:"ActivityItem_activityItem4__3eQLS"}},42:function(t,e,n){t.exports={navBar:"NavBar_navBar__3VM8x"}},49:function(t,e,n){},50:function(t,e,n){},79:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(25),r=n.n(i),o=n(12),s=(n(49),n(50),n(2)),u=n.n(s),l=n(0);function j(){return Object(l.jsx)("div",{children:Object(l.jsx)(o.b,{exact:!0,to:"/countries",children:Object(l.jsx)("button",{className:u.a.buttons,children:"Home"})})})}var d=n(26),b=n(16),h=n(3),f=n(13),v=n(4),O=n(21),p=n.n(O);function m(t){return{type:"filterByRegion",payload:t}}function y(t){return{type:"filterByActivity",payload:t}}var x=n(18),g=n.n(x);var _=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(o.b,{exact:!0,to:"/activity",children:Object(l.jsx)("button",{className:u.a.buttons,children:"Add activity"})})})};var C=function(t){var e=t.handleInputChange,n=Object(v.c)((function(t){return t.countries}));return Object(l.jsxs)("div",{className:"".concat(u.a.dropdown),children:[Object(l.jsx)("label",{for:"country",children:"Country: "}),Object(l.jsxs)("select",{required:!0,id:"country",name:"country",onChange:function(t){return e(t)},children:[Object(l.jsx)("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"Please Choose..."}),n.map((function(t){return Object(l.jsx)("option",{value:"".concat(t.name),children:"".concat(t.name)})}))]})]})};var N=function(t){var e=t.handleInputChange;return Object(l.jsxs)("div",{className:"".concat(u.a.dropdown),children:[Object(l.jsx)("label",{for:"difficulty",children:"Difficulty: "}),Object(l.jsxs)("select",{required:!0,id:"difficulty",name:"difficulty",onChange:function(t){return e(t)},children:[Object(l.jsx)("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"Please Choose..."}),Object(l.jsx)("option",{value:1,children:"1"}),Object(l.jsx)("option",{value:2,children:"2"}),Object(l.jsx)("option",{value:3,children:"3"}),Object(l.jsx)("option",{value:4,children:"4"}),Object(l.jsx)("option",{value:5,children:"5"})]})]})};var A=function(t){var e=t.handleInputChange;return Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{for:"duration",children:"Duration in hours: "}),Object(l.jsx)("input",{required:!0,type:"number",id:"duration",name:"duration",min:"1",max:"1000",onChange:function(t){return e(t)}})]})};var P=function(t){var e=t.handleInputChange;return Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{for:"name",children:"Name: "}),Object(l.jsx)("input",{required:!0,className:"".concat(u.a.form),id:"name",type:"text",name:"name",onChange:e})]})};var I=function(t){var e=t.handleInputChange;return Object(l.jsxs)("div",{className:"".concat(u.a.dropdown),children:[Object(l.jsx)("label",{for:"season",children:"Season: "}),Object(l.jsxs)("select",{required:!0,id:"season",name:"season",onChange:function(t){return e(t)},children:[Object(l.jsx)("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"Please Choose..."}),Object(l.jsx)("option",{value:"atumn",children:"Atumn"}),Object(l.jsx)("option",{value:"winter",children:"Winter"}),Object(l.jsx)("option",{value:"summer",children:"Summer"}),Object(l.jsx)("option",{value:"spring",children:"Spring"})]})]})};var B=function(){var t=Object(c.useState)({name:"",duration:"",difficulty:"",season:"",country:[]}),e=Object(f.a)(t,2),n=e[0],a=e[1],i=Object(v.b)(),r=function(t){if("country"!==t.target.name)a(Object(h.a)(Object(h.a)({},n),{},Object(d.a)({},t.target.name,t.target.value)));else if(-1===n.country.indexOf(t.target.value)){var e=n.country;e.push(t.target.value),a(Object(h.a)(Object(h.a)({},n),{},{country:e}))}};return Object(l.jsxs)("form",{className:"".concat(g.a.activityForm),onSubmit:function(t){var e;t.preventDefault(),i((e=n,function(){p()({method:"post",url:"http://localhost:3001/activity",headers:{},data:{activity:e}})})),window.alert("Activity created successfully")},children:[Object(l.jsxs)("span",{className:"".concat(g.a.inputs),children:[Object(l.jsx)(P,{handleInputChange:r}),Object(l.jsx)(N,{handleInputChange:r}),Object(l.jsx)(A,{handleInputChange:r}),Object(l.jsx)(I,{handleInputChange:r}),Object(l.jsx)(C,{handleInputChange:r}),Object(l.jsx)("div",{id:"selectedCountries",className:"".concat(g.a.selectedCountries),children:n.country.length>=1?n.country.map((function(t){return Object(l.jsx)("div",{onClick:function(){!function(t){a(Object(h.a)(Object(h.a)({},n),{},{country:Object(b.a)(n.country).filter((function(e){return e!==t}))}))}(t)},children:t})})):Object(l.jsx)("div",{children:"No country selected"})})]}),Object(l.jsx)("input",{className:"".concat(u.a.buttons," ").concat(g.a.submit," "),type:"submit",value:"Submit"})]})},w=n(14),T=n.n(w);var F=function(){return Object(l.jsxs)("div",{className:T.a.activityPage,children:[Object(l.jsx)(j,{}),Object(l.jsx)(B,{})]})};function S(){var t=Object(c.useState)(""),e=Object(f.a)(t,2),n=e[0],a=e[1],i=Object(v.b)();return Object(l.jsxs)("form",{onSubmit:function(t){var e;t.preventDefault(),i((e=n,function(t){p.a.get("http://localhost:3001/countries?name=".concat(e)).then((function(t){return t.data})).then((function(e){t({type:"searchCountry",payload:e})})).catch((function(t){return console.log(t)}))}))},children:[Object(l.jsx)("input",{className:"".concat(g.a.searchBar),type:"text",id:"navSearch",placeholder:"Search a country...",autoComplete:"off",onChange:function(t){return a(t.target.value)}}),Object(l.jsx)("button",{className:"".concat(u.a.buttons),type:"submit",children:"Search"})]})}var L=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(o.b,{exact:!0,to:"/",children:Object(l.jsx)("button",{className:u.a.buttons,children:"Landing page"})})})},D=n(42),k=n.n(D);var R=function(){return Object(l.jsxs)("div",{className:"".concat(k.a.navBar),children:[Object(l.jsx)(L,{}),Object(l.jsx)(S,{}),Object(l.jsx)(_,{})]})},W=n(19),E=n.n(W);var M=function(t){return Object(l.jsxs)("div",{className:"".concat(E.a.listItem),children:[Object(l.jsxs)("span",{className:"".concat(E.a.itemText),children:[Object(l.jsx)("span",{className:"".concat(E.a.countryName),children:t.name}),Object(l.jsx)("span",{className:"".concat(E.a.countryRegion),children:t.region})]}),Object(l.jsx)("img",{className:"".concat(E.a.countryFlag),src:t.flag,alt:"".concat(E.a.countryFlag)})]})};var q=function(t){var e=t.setActivePage,n=Object(v.c)((function(t){return t.activities})),c=Object(v.b)();return Object(l.jsxs)("div",{className:"".concat(u.a.dropdown),children:[Object(l.jsx)("button",{className:"".concat(u.a.buttons),children:"Filter by activities"}),Object(l.jsx)("div",{className:"".concat(u.a.dropdownContent),children:Array.isArray(n)?n.map((function(t){return Object(l.jsx)("a",{href:"javascript:void(0)",onClick:function(){c(y(t.name)),e(0)},children:"".concat(t.name)})})):Object(l.jsx)("a",{href:"javascript:void(0)",onClick:function(){c(y(n.name)),e(0)},children:"".concat(n.name)})})]})};var H=function(t){var e=t.setActivePage,n=Object(v.b)();return Object(l.jsxs)("div",{className:"".concat(u.a.dropdown),children:[Object(l.jsx)("button",{className:"".concat(u.a.buttons),children:"Filter by region"}),Object(l.jsxs)("div",{className:"".concat(u.a.dropdownContent),children:[Object(l.jsx)("a",{href:"javascript:void(0)",onClick:function(){n(m("Africa")),e(0)},children:"Africa"}),Object(l.jsx)("a",{href:"javascript:void(0)",onClick:function(){n(m("Americas")),e(0)},children:"Americas"}),Object(l.jsx)("a",{href:"javascript:void(0)",onClick:function(){n(m("Asia")),e(0)},children:"Asia"}),Object(l.jsx)("a",{href:"javascript:void(0)",onClick:function(){n(m("Europe")),e(0)},children:"Europe"}),Object(l.jsx)("a",{href:"javascript:void(0)",onClick:function(){n(m("Oceania")),e(0)},children:"Oceania"}),Object(l.jsx)("a",{href:"javascript:void(0)",onClick:function(){n(m("Polar")),e(0)},children:"Polar"})]})]})};var J=function(t){var e=t.setActivePage,n=Object(v.c)((function(t){return t.filteredCountries}));return Object(l.jsx)("button",{className:u.a.buttons,onClick:function(){e((function(t){return n[0]?10*(t+1)<n.length-1?t+1:t:t<24?t+1:t})),window.scrollTo({top:100,left:100,behavior:"smooth"})},children:"Next"})};var Q=function(t){var e=t.setActivePage,n=Object(c.useState)("Descendant (Z>A)"),a=Object(f.a)(n,2),i=a[0],r=a[1],o=Object(v.b)(),s=Object(v.c)((function(t){return t.filteredCountries}));return Object(c.useEffect)((function(){var t,e;(null===(t=s[0])||void 0===t?void 0:t.name)>(null===(e=s[1])||void 0===e?void 0:e.name)?r("Ascendant (A>Z)"):r("Descendant (Z>A)")}),[s]),Object(l.jsx)("button",{className:u.a.buttons,onClick:function(){o({type:"orderAlphabetically"}),e(0)},children:i||r("Descendant (Z>A)")})};var Y=function(t){var e=t.setActivePage,n=Object(c.useState)("Highest population"),a=Object(f.a)(n,2),i=a[0],r=a[1],o=Object(v.b)(),s=Object(v.c)((function(t){return t.filteredCountries}));return Object(c.useEffect)((function(){var t,e;(null===(t=s[0])||void 0===t?void 0:t.population)>(null===(e=s[2])||void 0===e?void 0:e.population)?r("Lowest population"):r("Highest population")}),[s]),Object(l.jsx)("button",{className:u.a.buttons,onClick:function(){o({type:"orderByPopulation"}),e(0)},children:i})};var Z=function(t){var e=t.setActivePage;return Object(l.jsx)("button",{className:u.a.buttons,onClick:function(){e((function(t){return t>0?t-1:t})),window.scrollTo({top:100,left:100,behavior:"smooth"})},children:"Prev"})};var G=function(t){var e=t.setActivePage,n=Object(v.b)();return Object(l.jsx)("button",{className:u.a.buttons,onClick:function(){n({type:"filterReset"}),e(0)},children:"Remove filters"})},V=n(15),X=n.n(V);function z(){var t=Object(c.useState)(0),e=Object(f.a)(t,2),n=e[0],a=e[1],i=Object(v.b)(),r=Object(v.c)((function(t){return t.activeCountries})),s=Object(v.c)((function(t){return t.countries}));return Object(c.useEffect)((function(){i((function(t){p.a.get("http://localhost:3001/countries").then((function(t){return t.data})).then((function(e){t(function(t){return{type:"firstLoad",payload:t}}(e))})).catch((function(t){return console.log(t)}))})),i((function(t){p.a.get("http://localhost:3001/activity/").then((function(t){return t.data})).then((function(e){t({type:"loadActivities",payload:e})})).catch((function(t){return console.log(t)}))}))}),[i]),Object(c.useEffect)((function(){s[0]&&i({type:"changePage",payload:n})}),[n,s,i]),Object(l.jsxs)("div",{className:"".concat(X.a.countryList),children:[Object(l.jsx)("div",{className:"".concat(X.a.titleWrap),children:Object(l.jsx)("h1",{className:"".concat(X.a.title),children:"Henry Countries"})}),Object(l.jsx)("div",{className:"".concat(X.a.buttons),children:Object(l.jsxs)("span",{className:"".concat(X.a.filterButtons),children:[Object(l.jsx)(H,{setActivePage:a}),Object(l.jsx)(q,{setActivePage:a}),Object(l.jsx)(G,{setActivePage:a}),Object(l.jsx)(Q,{setActivePage:a}),Object(l.jsx)(Y,{setActivePage:a})]})}),Object(l.jsxs)("section",{className:"".concat(X.a.pageButtonsAndMapWrapper),children:[Object(l.jsxs)("span",{className:"".concat(X.a.pageButtons),children:[Object(l.jsx)(Z,{setActivePage:a}),10===(null===r||void 0===r?void 0:r.length)?Object(l.jsx)(J,{setActivePage:a}):null]}),Object(l.jsx)("div",{className:"".concat(X.a.countryMap),children:Array.isArray(r)?r.map((function(t){return Object(l.jsx)(o.b,{exact:!0,to:"/countries/".concat(t.alpha3code),style:{textDecoration:"none"},children:Object(l.jsx)(M,{name:t.name||r.name,flag:t.flag||r.flag,region:t.region||r.region},t.id||r.id)})})):null}),Object(l.jsxs)("span",{className:"".concat(X.a.pageButtons),children:[Object(l.jsx)(Z,{setActivePage:a}),10===(null===r||void 0===r?void 0:r.length)?Object(l.jsx)(J,{setActivePage:a}):null]})]})]})}function U(){return Object(l.jsxs)("div",{className:T.a.countriesPage,children:[Object(l.jsx)(R,{}),Object(l.jsx)(z,{})]})}var K=n(22),$=n.n(K);var tt=function(t){return Object(l.jsxs)("div",{className:"".concat($.a.activityItem),children:[Object(l.jsxs)("span",{className:"".concat($.a.activityItem1),children:[" ",t.name," "]}),Object(l.jsxs)("span",{className:"".concat($.a.activityItem2),children:[" ",t.difficulty,"/5 "]}),Object(l.jsxs)("span",{className:"".concat($.a.activityItem3),children:[" ",t.duration," hours"]}),Object(l.jsxs)("span",{className:"".concat($.a.activityItem4),children:[" ",t.season," "]})]})},et=n(17),nt=n.n(et);var ct=function(t){var e=t.country.slice(t.country.length-3),n=Object(v.b)(),a=Object(v.c)((function(t){return t.currentCountryPage})),i=Object(v.c)((function(t){return t.activities}));return Object(c.useEffect)((function(){var t;n((t=e,function(e){p.a.get("http://localhost:3001/countries/".concat(t)).then((function(t){return t.data})).then((function(t){e({type:"loadCountryPage",payload:t})})).catch((function(t){return console.log(t)}))})),window.scrollTo(0,0)}),[e,n]),Object(l.jsxs)("div",{className:"".concat(nt.a.countryPage),children:[Object(l.jsx)("div",{className:nt.a.mainButton,children:Object(l.jsx)(j,{})}),Object(l.jsx)("h1",{className:"".concat(nt.a.countryName),children:a.name}),Object(l.jsxs)("div",{className:"".concat(nt.a.countryData),children:[Object(l.jsxs)("div",{className:"".concat(nt.a.countryTextData),children:[Object(l.jsxs)("span",{children:["Region: ",a.region]}),Object(l.jsxs)("span",{children:["Capital: ",a.capital]}),Object(l.jsxs)("span",{children:["Subregion: ",a.subregion]}),Object(l.jsxs)("span",{children:["Population: ",a.population]}),Object(l.jsxs)("span",{children:["Area: ",a.area," km2"]})]}),Object(l.jsx)("img",{src:a.flag,alt:a.flag,className:"".concat(nt.a.countryFlag)}),Array.isArray(i)&&(null===i||void 0===i?void 0:i.some((function(t){return t.countries.some((function(t){return t.name===a.name}))})))?Object(l.jsxs)("section",{children:[Object(l.jsxs)("div",{className:"".concat(nt.a.countryActivitiesChart),children:[Object(l.jsx)("span",{children:"Activity:"}),Object(l.jsx)("span",{children:"Difficulty:"}),Object(l.jsx)("span",{children:"Duration:"}),Object(l.jsx)("span",{children:"Season:"})]}),Object(l.jsx)("div",{className:"".concat(nt.a.countryActivities),children:i.map((function(t){return Object(l.jsx)(tt,{name:t.name||i.name,difficulty:t.difficulty||i.difficulty,duration:t.duration||i.duration,season:t.season||i.season})}))})]}):null]})]})};var at=function(){return Object(l.jsxs)("div",{className:"".concat(T.a.landingPage),children:[Object(l.jsxs)("span",{className:"".concat(T.a.landingTitleAndButton),children:[Object(l.jsx)("h1",{className:"".concat(T.a.landingTitle1),children:"Welcome to"}),Object(l.jsx)("h1",{className:"".concat(T.a.landingTitle2),children:"Henry Countries"}),Object(l.jsx)(j,{})]}),Object(l.jsx)("h5",{className:"".concat(T.a.landingTitle3),children:"made by Julian Federico Rodriguez"})]})},it=n(6);var rt=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(it.a,{exact:!0,path:"/",children:Object(l.jsx)(at,{})}),Object(l.jsx)(it.a,{exact:!0,path:"/countries",children:Object(l.jsx)(U,{})}),Object(l.jsx)(it.a,{path:"/countries/:alpha3code",render:function(t){return Object(l.jsx)(ct,{country:t.match.url})}}),Object(l.jsx)(it.a,{exact:!0,path:"/activity",children:Object(l.jsx)(F,{})})]})},ot=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),i(t),r(t)}))},st=n(28),ut={countries:[],activeCountries:[],filteredCountries:[],currentCountryPage:[],activities:[]};var lt=n(43),jt=n(44),dt=Object(jt.composeWithDevTools)({trace:!0,traceLimit:155}),bt=Object(st.createStore)((function(){var t,e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"firstLoad":return Object(h.a)(Object(h.a)({},n),{},{countries:c.payload});case"changePage":return n.filteredCountries[0]?Object(h.a)(Object(h.a)({},n),{},{activeCountries:n.filteredCountries.slice(10*c.payload,10*(c.payload+1))}):Object(h.a)(Object(h.a)({},n),{},{activeCountries:n.countries.slice(10*c.payload,10*(c.payload+1))});case"searchCountry":return Object(h.a)(Object(h.a)({},n),{},{activeCountries:c.payload});case"loadCountryPage":return Object(h.a)(Object(h.a)({},n),{},{currentCountryPage:c.payload});case"loadActivities":return Object(h.a)(Object(h.a)({},n),{},{activities:c.payload});case"filterByRegion":return n.filteredCountries=n.countries.filter((function(t){return t.region===c.payload})),Object(h.a)(Object(h.a)({},n),{},{activeCountries:n.filteredCountries.slice(0,10)});case"filterByActivity":return n.filteredCountries=[],n.activities.find((function(t){return t.name===c.payload})).countries.forEach((function(t){return n.filteredCountries.push(t)})),Object(h.a)(Object(h.a)({},n),{},{activeCountries:n.filteredCountries.slice(0,10)});case"filterReset":return n.filteredCountries=[],Object(h.a)(Object(h.a)({},n),{},{activeCountries:n.countries.slice(0,10)});case"orderAlphabetically":var a=[];return n.countries[0].name<n.countries[1].name?(n.filteredCountries[0]?(a=Object(b.a)(n.filteredCountries),n.filteredCountries=a.sort((function(t,e){return e-t}))):(a=Object(b.a)(n.countries),n.filteredCountries=a.sort((function(t,e){return e-t}))),Object(h.a)(Object(h.a)({},n),{},{activeCountries:n.filteredCountries.slice(0,10)})):(n.filteredCountries[0]&&(a=Object(b.a)(n.filteredCountries),n.filteredCountries=a.sort((function(t,e){return t-e}))),Object(h.a)(Object(h.a)({},n),{},{activeCountries:n.filteredCountries.slice(0,10)}));case"orderByPopulation":return(null===(t=n.filteredCountries[0])||void 0===t?void 0:t.population)<(null===(e=n.filteredCountries[2])||void 0===e?void 0:e.population)?(n.filteredCountries[0]&&(a=Object(b.a)(n.filteredCountries),n.filteredCountries=a.sort((function(t,e){return e.population-t.population}))),Object(h.a)(Object(h.a)({},n),{},{activeCountries:n.filteredCountries.slice(0,10)})):(n.filteredCountries[0]?(a=Object(b.a)(n.filteredCountries),n.filteredCountries=a.sort((function(t,e){return t.population-e.population}))):(a=Object(b.a)(n.countries),n.filteredCountries=a.sort((function(t,e){return t.population-e.population}))),Object(h.a)(Object(h.a)({},n),{},{activeCountries:n.filteredCountries.slice(0,10)}));default:return n}}),dt(Object(st.applyMiddleware)(lt.a)));r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(v.a,{store:bt,children:Object(l.jsx)(o.a,{children:Object(l.jsx)(rt,{})})})}),document.getElementById("root")),ot()}},[[79,1,2]]]);
//# sourceMappingURL=main.ac7a1ede.chunk.js.map