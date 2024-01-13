(()=>{"use strict";var e,t,n,r,o,a,i,c,s,u,p,d,l,f,h={426:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),c=n(667),s=n.n(c),u=new URL(n(380),n.b),p=i()(o()),d=s()(u);p.push([e.id,`* {\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    flex-flow: column;\n    height: 100vh;\n    width: 100vw;\n}\n\nh3 {\n    margin-bottom: 5px;\n}\n\n.main-content {\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n    height: 50%;\n}\n\n.search {\n    padding: 6px;\n    border: none;\n    margin-top: 8px;\n    margin-right: 1px;\n    font-size: 17px;\n}\n\n.search-button {\n    background-image: url(${d});\n    background-size: 30px;\n    background-repeat: no-repeat;\n    background-color: transparent;\n    padding: 6px 10px;\n    margin-top: 8px;\n    margin-right: 16px;\n    font-size: 17px;\n    border: none;\n    cursor: pointer;\n    width: 30px;\n    height: 30px;\n}\n\n.feels-like {\n    display: flex;\n    align-items: center;\n\n}\n\n.first-half {\n    width: 50%;\n}\n\n.other-days {\n    height: 50%;\n    width: 100%;\n}`,""]);const l=p},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var p=[].concat(e[u]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],p=a[u]||0,d="".concat(u," ").concat(p);a[u]=p+1;var l=n(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)t[l].references++,t[l].updater(f);else{var h=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),u=0;u<a.length;u++){var p=n(a[u]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},380:(e,t,n)=>{e.exports=n.p+"5e577dab97d0ad7fd0e8.png"}},m={};function v(e){var t=m[e];if(void 0!==t)return t.exports;var n=m[e]={id:e,exports:{}};return h[e](n,n.exports,v),n.exports}v.m=h,v.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return v.d(t,{a:t}),t},v.d=(e,t)=>{for(var n in t)v.o(t,n)&&!v.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},v.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),v.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;v.g.importScripts&&(e=v.g.location+"");var t=v.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!e;)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),v.p=e})(),v.b=document.baseURI||self.location.href,v.nc=void 0,e=v(379),t=v.n(e),n=v(795),r=v.n(n),o=v(569),a=v.n(o),i=v(565),c=v.n(i),s=v(216),u=v.n(s),p=v(589),d=v.n(p),l=v(426),(f={}).styleTagTransform=d(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),t()(l.Z,f),l.Z&&l.Z.locals&&l.Z.locals,async function(){const e=await fetch("http://api.weatherapi.com/v1/forecast.json?key=3aa654fe53e441b690942131240801&q=London&days=1&aqi=no&alerts=no"),t=await e.json();document.querySelector(".condition").textContent=t.current.condition.text,document.querySelector(".location").textContent=t.location.name,document.querySelector(".time").textContent=t.location.localtime,document.querySelector(".temperature").textContent=t.forecast.forecastday[0].day.maxtemp_f,document.querySelector(".feels-temp").textContent=t.current.feelslike_f,document.querySelector(".humidity-percentage").textContent=t.current.humidity+"%",document.querySelector(".rain-percentage").textContent=t.forecast.forecastday[0].day.daily_chance_of_rain+"%",document.querySelector(".speed").textContent=t.current.wind_mph+" mph",console.log(t)}()})();