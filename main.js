(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto:ital,wght@1,700&display=swap);"]),i.push([e.id,".header-content-container { \n   display: flex;\n   justify-content: center;\n   align-items: center;\n   text-align: center;\n   color: red;\n   line-height: 2;\n   font-size: 3rem;\n   background-color: black;\n   font-family: 'Permanent Marker', cursive;\n   font-size: 4rem;\n   padding: 50px; \n   border: 7mm ridge red;\n}  \n\n.header-btn-div { \n   color: white; \n}\n\n\n\n.main-content-div-container { \n   display: flex; \n   justify-content: space-between;\n   /* position: relative; */\n   background-color: black;\n}\n\n.burger-pics { \n   width: 30%; \n   border: 7mm ridge black;\n} \n\n.text-over-image-styles { \n   width: 30%;\n   color: red; \n   text-align: center;\n   font-size: 3.5rem;\n   font-family: 'Permanent Marker', cursive;\n} \n\n\n.footer-content-div { \n   border: 7mm ridge red;\n   background-color: black;\n   color: red; \n   text-align: center;\n   height: 8em; \n   font-family: 'Permanent Marker', cursive;\n   font-size: 2rem;\n}\n\n/* .main-content-burger-img2 { \n   width: 35%; \n   border: 20px solid red; \n} */ \n\n.header-btns { \n   color: white; \n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),m=t(426),f={};function v(){const e=document.getElementById("content");return{headerContent:()=>{const n=document.createElement("div");n.classList.add("header-content-container"),n.innerHTML="Alec's House of Burgers <br> The Best In The City!";const t=document.createElement("button"),r=document.createElement("button"),o=document.createElement("button");t.textContent="Home",r.textContent="Menu",o.textContent="Contact",n.append(t),n.append(r),n.append(o),e.append(n),document.body.append(e)},mainContent:()=>{let e=document.getElementById("content");console.log(e);const n=document.createElement("div"),t=document.createElement("div");t.classList.add("text-over-image-styles"),t.innerHTML="Welcome! <br> <br> Experience the Tradition <br> <br> Since 1994 we have been proudly serving the community. <br> <br> We take pride in our work and cannot wait to serve you and create wonderful memories",n.classList.add("main-content-div-container");const r=new Image,o=new Image;r.classList.add("burger-pics"),o.classList.add("burger-pics"),r.src="../burger-picture-medium-size.jpg",o.src="../angelo-pantazis-gMCO0iXeo_c-unsplash.jpg",n.append(r),n.append(t),n.append(o),e.append(n),document.body.append(e)},footerContent:()=>{let e=document.getElementById("content"),n=document.createElement("div");n.classList.add("footer-content-div"),n.innerHTML="<br> Address: 1234 South Broad Street, Philadelphia PA <br> <br> Phone: 666-666-666",e.append(n),document.body.append(e)}}}f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,v().headerContent(),v().mainContent(),v().footerContent()})()})();