(function(t){function e(e){for(var n,r,i=e[0],l=e[1],c=e[2],u=0,h=[];u<i.length;u++)r=i[u],a[r]&&h.push(a[r][0]),a[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(h.length)h.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,i=1;i<s.length;i++){var l=s[i];0!==a[l]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var n={},a={app:0},o=[];function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=n,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var p=l;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("64a9"),a=s.n(n);a.a},"0ea4":function(t,e,s){},3608:function(t,e,s){"use strict";var n=s("0ea4"),a=s.n(n);a.a},5490:function(t,e,s){"use strict";var n=s("bdf3"),a=s.n(n);a.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var n=s("2b0e"),a=s("8c4f"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("header",[t._m(0),t._m(1),s("nav",[s("ul",{staticClass:"menu"},[s("li",{staticClass:"menu-item"},[s("router-link",{staticClass:"menu-item-link",attrs:{to:"/"}},[t._v("Map")])],1),s("li",{staticClass:"menu-item"},[s("router-link",{staticClass:"menu-item-link",attrs:{to:"/seasons"}},[t._v("Past Seasons")])],1),t._m(2)])])]),s("span",{staticClass:"sr-only"},[t._v("Use this interactive fortnite map to find all of the weekly challenges easily and without having to search through blog posts.")]),s("router-view")],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",[s("a",{attrs:{href:"/"}},[t._v("Fortnite Interactive Challenges Map")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"social"},[s("li",[s("a",{attrs:{href:"https://www.facebook.com/sharer/sharer.php?u=https%3A//fortnite-map.net/",target:"_blank",title:"Share on Facebook"}},[s("img",{staticClass:"icon",attrs:{src:"/assets/icons/facebook.png"}}),s("span",{staticClass:"fade-text"},[t._v("Share on Facebook")])])]),s("li",[s("a",{attrs:{href:"https://twitter.com/home?status=Check%20out%20this%20interactive%20map%20of%20the%20weekly%20challenges%20on%20%40FortniteGame.%20%23fortnitemap%20%23fortnite%20%23season8%20https%3A//fortnite-map.net/",target:"_blank",title:"Share on Twitter"}},[s("img",{staticClass:"icon",attrs:{src:"/assets/icons/twitter.png"}}),s("span",{staticClass:"fade-text"},[t._v("Share on Twitter")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"menu-item"},[s("a",{staticClass:"donate",attrs:{href:"https://twitter.com/thesquatingdog",target:"_blank"}},[t._v("Challenge locations by @thesquatingdog")])])}],i={name:"app"},l=i,c=(s("034f"),s("2877")),p=Object(c["a"])(l,o,r,!1,null,null,null);p.options.__file="App.vue";var u=p.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"map"}},[s("a",{staticClass:"toggle",attrs:{href:"#"},on:{click:t.toggleControls}},[s("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","xmlns:xlink":"http://www.w3.org/1999/xlink","enable-background":"new 0 0 24 24"}},[s("g",[s("path",{attrs:{d:"M24,3c0-0.6-0.4-1-1-1H1C0.4,2,0,2.4,0,3v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V3z"}}),s("path",{attrs:{d:"M24,11c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V11z"}}),s("path",{attrs:{d:"M24,19c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V19z"}})])])]),t.lastPoint?s("div",{attrs:{id:"lastPoint"}},[s("span",[t._v(t._s(t.lastPoint.lat))]),s("span",[t._v(t._s(t.lastPoint.lng))])]):t._e(),t.controlsVisible?s("div",{staticClass:"controls-wrapper"},[s("a",{staticClass:"toggle close",attrs:{href:"#"},on:{click:t.toggleControls}},[s("svg",{staticStyle:{"enable-background":"new 0 0 357 357"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"357px",height:"357px",viewBox:"0 0 357 357","xml:space":"preserve"}},[s("g",[s("g",{attrs:{id:"close"}},[s("polygon",{attrs:{points:"357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3\n    \t\t\t214.2,178.5 \t\t"}})])]),s("g"),s("g"),s("g"),s("g"),s("g"),s("g"),s("g"),s("g"),s("g"),s("g"),s("g"),s("g"),s("g"),s("g"),s("g")])]),s("h2",[t._v("Season "+t._s(t.currentSeason)+" Challenges")]),0==t.weeks.length?s("div",{staticClass:"loading"},[t._v("Loading...")]):t._e(),t.weeks.length?s("p",{staticClass:"note"},[t._v("☆ Battle Pass challenge")]):t._e(),t._l(t.sortedArray,function(e){return s("section",{key:e.week_number,staticClass:"challenges"},[s("div",{staticClass:"week",class:{active:e.active,show:e.show,locked:!e.active},on:{click:function(t){e.show=!e.show}}},[e.active?t._e():s("p",{staticClass:"lock"},[t._v("🔒")]),s("h3",[t._v("Week "+t._s(e.week_number)+" ")]),e.show&&e.active?s("div",{staticClass:"challenges"},t._l(e.challenges,function(e,n){return s("span",{key:e.challenge_name,staticClass:"challenge",on:{click:function(t){t.stopPropagation()}}},[s("h4",[e.battle_pass_challenge?s("span",[t._v("☆")]):t._e(),t._v("\n              "+t._s(e.challenge_name)+"\n            ")]),s("p",[t._v(t._s(e.challenge_description))]),e.has_location?s("input",{directives:[{name:"model",rawName:"v-model",value:e.map_display,expression:"challenge.map_display"}],attrs:{type:"checkbox",id:n},domProps:{checked:Array.isArray(e.map_display)?t._i(e.map_display,null)>-1:e.map_display},on:{click:function(e){t.setZoom(1)},change:function(s){var n=e.map_display,a=s.target,o=!!a.checked;if(Array.isArray(n)){var r=null,i=t._i(n,r);a.checked?i<0&&t.$set(e,"map_display",n.concat([r])):i>-1&&t.$set(e,"map_display",n.slice(0,i).concat(n.slice(i+1)))}else t.$set(e,"map_display",o)}}}):t._e(),e.has_location?s("label",{attrs:{for:n}},[t._v("Show on map")]):t._e(),e.screenshot?s("a",{staticClass:"screenshot",attrs:{href:e.screenshot,target:"_blank"}},[t._v("View screenshot")]):t._e()])})):t._e()])])})],2):t._e(),s("l-map",{ref:"map",attrs:{id:"mapContainer",zoom:t.zoom,center:t.center,maxZoom:t.maxZoom,bounds:t.bounds,options:t.mapOptions},on:{click:function(e){t.getCoords(e)}}},[s("l-tile-layer",{attrs:{url:t.url,options:{noWrap:!0}}}),t._l(t.weeks,function(e){return s("div",{key:e.week_number},t._l(e.challenges,function(e){return s("span",{key:e.challenge_name},[e.map_display?s("span",t._l(e.lat_lngs,function(t){return s("span",{key:t.hint},[s("l-marker",{attrs:{"lat-lng":t.lat_lng}},[s("l-tooltip",{attrs:{content:t.hint}})],1)],1)})):t._e()])}))})],2)],1)},m=[],f=(s("55dd"),s("458e")),d=s("bc3a"),g=s.n(d);s("6cc5");delete f["L"].Icon.Default.prototype._getIconUrl,f["L"].Icon.Default.mergeOptions({iconRetinaUrl:s("584d"),iconUrl:s("6397"),shadowUrl:s("e2b9")});var _={components:{LMap:f["LMap"],LTileLayer:f["LTileLayer"],LMarker:f["LMarker"],LTooltip:f["LTooltip"]},created:function(){window&&window.innerWidth<=1024&&(this.zoom=1)},computed:{sortedArray:function(){function t(t,e){return parseInt(t.week_number)<parseInt(e.week_number)?-1:parseInt(t.week_number)>parseInt(e.week_number)?1:0}return this.weeks.slice().sort(t)}},methods:{setZoom:function(t){this.$refs.map.mapObject.setZoom(t)},getCoords:function(t){window&&window.location.href.indexOf("coordinates")>-1&&(this.lastPoint=t.latlng)},toggleControls:function(){this.controlsVisible?this.controlsVisible=!1:this.controlsVisible=!0}},data:function(){return{url:"/fortnite-map/app/assets/map/mapTiles/season8/{z}/{x}_{y}.jpg",zoom:3,maxZoom:6,center:[0,0],bounds:[[85,-180],[-85,180]],mapOptions:{},currentSeason:8,weeks:[],lastPoint:!1,controlsVisible:!1}},mounted:function(){var t=this;g.a.get("./weeks.json").then(function(e){return t.weeks=e.data}),window&&window.innerWidth>1024?this.controlsVisible=!0:this.controlsVisible=!1}},v=_,w=(s("5490"),Object(c["a"])(v,h,m,!1,null,null,null));w.options.__file="Map.vue";var k=w.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"map"}},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.selected=e.target.multiple?s:s[0]}}},t._l(t.seasons,function(e,n){return s("option",{key:e,domProps:{value:n}},[t._v("\n      Season "+t._s(n+1)+"\n    ")])})),s("div",{staticClass:"past-seasons-container"},t._l(t.seasons,function(e,n){return s("span",{key:e,attrs:{value:n}},[s("img",{directives:[{name:"show",rawName:"v-show",value:t.selected==n,expression:"selected == index"}],attrs:{src:t.seasons[n],alt:"Fortnite map  during season "+(n+1)}})])}))])},y=[],x={data:function(){return{seasons:["/assets/map/seasons/small/szn1.jpg","/assets/map/seasons/small/szn2.jpg","/assets/map/seasons/small/szn3.jpg","/assets/map/seasons/small/szn4.jpg","/assets/map/seasons/small/szn5.jpg","/assets/map/seasons/small/szn6.jpg","/assets/map/seasons/small/szn7.jpg","/assets/map/seasons/small/szn8.jpg"],selected:7}}},C=x,j=(s("3608"),Object(c["a"])(C,b,y,!1,null,"daf4c264",null));j.options.__file="Seasons.vue";var O=j.exports;n["a"].use(a["a"]);var P=[{path:"/",component:k},{path:"/map",component:k},{path:"/seasons",component:O},{path:"/coordinates",component:k},{path:"/assets"},{path:"*",redirect:"/"}],S=new a["a"]({mode:"history",routes:P});n["a"].config.productionTip=!1,new n["a"]({router:S,mounted:function(){return document.dispatchEvent(new Event("x-app-rendered"))},render:function(t){return t(u)}}).$mount("#app")},"64a9":function(t,e,s){},bdf3:function(t,e,s){}});
//# sourceMappingURL=app.f7717aac.js.map
