(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(81),o=n.n(r),a=n(645),c=n.n(a),i=n(667),s=n.n(i),d=new URL(n(359),n.b),u=new URL(n(380),n.b),l=c()(o()),p=s()(d),f=s()(u);l.push([e.id,`* {\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    flex-flow: column;\n    height: 100vh;\n    width: 100vw;\n    background-image: url(${p});\n    background-size: 100vw 100vh;\n    background-repeat: no-repeat;\n}\n\nh3 {\n    margin-bottom: 5px;\n}\n\n.main-content {\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n    height: 50%;\n}\n\n.search-bar {\n    border: 0px;\n    border-bottom: 5px;\n    border-style: solid;\n    border-color: white;\n}\n\n.search {\n    padding: 6px;\n    border: 0px;\n    margin-top: 8px;\n    margin-right: 1px;\n    font-size: 17px;\n    background-color: transparent;\n    color: white;\n}\n\n::placeholder {\n    color: white;\n}\n\n.search-button {\n    background-image: url(${f});\n    background-size: 30px;\n    background-repeat: no-repeat;\n    background-color: transparent;\n    padding: 6px 10px;\n    margin-top: 8px;\n    margin-right: 16px;\n    font-size: 17px;\n    border: none;\n    cursor: pointer;\n    width: 30px;\n    height: 30px;\n}\n\ninput:focus {\n    outline: none;\n}\n\n.feels-like {\n    display: flex;\n    align-items: center;\n\n}\n\n.condition-img {\n    all: unset;\n    height: 100px;\n    width: 100px;\n    border: 0px;\n    outline: 0;\n    background-color: transparent;\n    background-size: 100px;\n    background-repeat: no-repeat;\n}\n\n.other-day-condi-img {\n    height: 50px;\n    width: 60%;\n    background: no-repeat;\n}\n\n.first-half {\n    display: flex;\n    flex-flow: column;\n    color: white;\n    gap: 10px;\n    justify-content: center;\n}\n\n.condition {\n    font-size: 50px;\n}\n\n.location {\n    font-size: 30px;\n}\n\n.temperature {\n    font-size: 50px;\n}\n\n.display-button {\n    all: unset;\n    text-align: left;\n    cursor: pointer;\n    width: 100px;\n}\n\n.second-half {\n    display: flex;\n    flex-flow: column;\n    color: white;\n    justify-content: center;\n    font-size: 20px;\n}\n\n\n.other-days {\n    display: flex;\n    justify-content: space-around;\n    height: 50%;\n    width: 100%;\n    color: white;\n}`,""]);const h=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=n(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=o(f,r);r.byIndex=i,t.splice(i,0,{identifier:l,updater:h,references:1})}c.push(l)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=r(e,o),d=0;d<a.length;d++){var u=n(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},380:(e,t,n)=>{e.exports=n.p+"5e577dab97d0ad7fd0e8.png"},359:(e,t,n)=>{e.exports=n.p+"5d96fadbb00946b225a4.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),c=n.n(a),i=n(565),s=n.n(i),d=n(216),u=n.n(d),l=n(589),p=n.n(l),f=n(426),h={};async function m(e){const t=await fetch("https://api.weatherapi.com/v1/forecast.json?key=3aa654fe53e441b690942131240801&q="+e+"&days=1&aqi=no&alerts=no",{mode:"cors"}),n=await t.json();document.querySelector(".condition").textContent=n.current.condition.text,document.querySelector(".location").textContent=n.location.name,document.querySelector(".time").textContent=n.location.localtime,document.querySelector(".temperature").textContent=Math.round(n.current.temp_f)+" ℉",document.querySelector(".condition-img").style.backgroundImage="url("+n.current.condition.icon+")",document.querySelector(".feels-temp").textContent=n.current.feelslike_f+" ℉",document.querySelector(".humidity-percentage").textContent=n.current.humidity+"%",document.querySelector(".rain-percentage").textContent=n.forecast.forecastday[0].day.daily_chance_of_rain+"%",document.querySelector(".speed").textContent=n.current.wind_mph+" mph"}function y(e){return function(e){const t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new e.constructor(+e):"number"==typeof e||"[object Number]"===t||"string"==typeof e||"[object String]"===t?new Date(e):new Date(NaN)}(e).getDay()}async function x(e,t){const n=await fetch("https://api.weatherapi.com/v1/forecast.json?key=3aa654fe53e441b690942131240801&q="+e+"&days=8&aqi=no&alerts=no",{mode:"cors"}),r=await n.json();for(let e=1;e<r.forecast.forecastday.length;e++){let n=r.forecast.forecastday[e].date,o=y(new Date(n));6==o?o=0:o++;const a=document.querySelector(".other-days"),c=document.createElement("div");c.className="day-container";const i=document.createElement("h1"),s=document.createElement("h2"),d=document.createElement("h3"),u=document.createElement("div");switch(u.className="other-day-condi-img","Fahrenheit"==t?(s.textContent=Math.round(r.forecast.forecastday[e].day.maxtemp_f)+"℉",d.textContent=Math.round(r.forecast.forecastday[e].day.mintemp_f)+"℉"):"Celsius"==t&&(s.textContent=Math.round(r.forecast.forecastday[e].day.maxtemp_c)+"℃",d.textContent=Math.round(r.forecast.forecastday[e].day.mintemp_c)+"℃"),u.style.backgroundImage="url("+r.forecast.forecastday[e].day.condition.icon+")",o){case 0:i.textContent="Sunday";break;case 1:i.textContent="Monday";break;case 2:i.textContent="Tuesday";break;case 3:i.textContent="Wednesday";break;case 4:i.textContent="Thursday";break;case 5:i.textContent="Friday";break;case 6:i.textContent="Saturday"}i.appendChild(s),i.appendChild(d),i.appendChild(u),c.appendChild(i),a.appendChild(c)}}h.styleTagTransform=p(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const g=document.querySelector(".display-button"),b=document.querySelector(".search");let v="London";b.addEventListener("keydown",(function(e){if("Enter"===e.key){const e=document.querySelector(".other-days");for(v=b.value,b.value="";e.firstChild;)e.removeChild(e.firstChild);m(v),x(v,"Fahrenheit")}})),g.addEventListener("click",(()=>{!async function(e){const t=await fetch("https://api.weatherapi.com/v1/forecast.json?key=3aa654fe53e441b690942131240801&q="+e+"&days=1&aqi=no&alerts=no",{mode:"cors"}),n=await t.json(),r=document.querySelector(".display-button"),o=document.querySelector(".temperature"),a=document.querySelector(".feels-temp"),c=document.querySelector(".speed"),i=document.querySelector(".other-days");for(;i.firstChild;)i.removeChild(i.firstChild);r.textContent.includes("℃")?(r.textContent="Display ℉",o.textContent=Math.round(n.current.temp_c)+" ℃",a.textContent=Math.round(n.current.feelslike_c)+" ℃",c.textContent=n.current.wind_kph+" kph",x(e,"Celsius")):r.textContent.includes("℉")&&(r.textContent="Display ℃",o.textContent=Math.round(n.current.temp_f)+" ℉",a.textContent=Math.round(n.current.feelslike_f)+" ℉",c.textContent=n.current.wind_mph+" mph",x(e,"Fahrenheit"))}(v)})),x(v,"Fahrenheit"),m(v)})()})();