(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto:ital,wght@1,700&display=swap);"]),i.push([e.id,".header-content-container { \n   display: flex;\n   justify-content: center;\n   flex-direction: column;\n   align-items: center;\n   text-align: center;\n   /* color: red; */\n   color: white; \n   line-height: 2;\n   font-size: 3rem;\n   background-color: black;\n   font-family: 'Permanent Marker', cursive;\n   font-size: 4rem;\n   padding: 50px; \n   border: 7mm ridge red;\n}  \n\n.header-btn-div {  \n   width: 8em; \n   color: white; \n   display: flex;\n   justify-content: space-between;\n} \n\n.home-btn, \n.menu-btn, \n.contact-btn { \n   font-size: 2rem; \n   font-family: 'Permanent Marker', cursive;\n   background-color: white;\n}\n\n\n\n.main-content-div-container { \n   display: flex; \n   justify-content: space-between;\n   /* position: relative; */\n   background-color: black;\n}\n\n.burger-pics { \n   width: 35%; \n   /* border: 20px solid red; */\n} \n\n.text-over-image-styles { \n   width: 30%;\n   color: white; \n   text-align: center;\n   font-size: 3.5rem;\n   font-family: 'Permanent Marker', cursive;\n} \n\n\n.footer-content-div { \n   border: 7mm ridge red;\n   background-color: black;\n   color: white; \n   text-align: center;\n   height: 8em; \n   font-family: 'Permanent Marker', cursive;\n   font-size: 2rem;\n} \n\n.menu-section-div { \n   /* display: flex; */\n   background-color: yellow;\n   color: black;\n   text-align: center; \n   font-family: 'Permanent Marker', cursive;\n   font-size: 4rem; \n   /* text-decoration: underline; */\n}\n\n\n.cheese-fries-input-text { \n   /* display: inline; */\n   /* text-align: left; */\n   list-style-type: circle;\n} \n\n.cheese-fries-description-text { \n   font-size: 1rem;\n} \n\n.boneless-wings-description-text { \n   font-size: 1rem;\n} \n\n.mozzarella-stick-description-text { \n   font-size: 1rem;\n} \n\n.alec-nachos-description-text { \n   font-size: 1rem;\n}\n\n\n/* .main-content-burger-img2 { \n   width: 35%; \n   border: 20px solid red; \n} */ \n\n/* .header-btns { \n   color: white; \n} */",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),s=n.n(c),d=n(216),l=n.n(d),u=n(589),p=n.n(u),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=n.p+"e5a4782c47c6cff51102.jpg",v=n.p+"49fd9aa3b68c0add53c0.jpg",b=()=>{const e=document.createElement("div"),t=document.createElement("div");t.classList.add("text-over-image-styles"),t.innerHTML="Welcome! <br> <br> Experience the Tradition <br> <br> Since 1994 we have been proudly serving the community. <br> <br> We take pride in our work and cannot wait to serve you and create wonderful memories",e.classList.add("main-content-div-container");const n=new Image,r=new Image;return n.classList.add("burger-pics"),r.classList.add("burger-pics"),n.src=h,r.src=v,e.append(n),e.append(t),e.append(r),e};let g=document.getElementById("content");console.log(g);const y=()=>{let e=document.createElement("div");e.classList.add("menu-section-div");let t=document.createElement("div");t.textContent="Starters";let n=document.createElement("div");n.classList.add("cheese-fries-input-text"),n.textContent="Cheese-Fries";let r=document.createElement("p");r.classList.add("cheese-fries-description-text"),r.textContent="Crispy loaded cheese fries served with blue cheese or our signature sauce",n.appendChild(r);let o=document.createElement("div");o.classList.add("boneless-wings-input"),o.textContent="Boneless Wings:";let a=document.createElement("p");a.classList.add("boneless-wings-description-text"),a.textContent="5ct, 10ct, 20ct. Served with blue cheese, BBQ sauce, butter and garlic and cajun buffalo",o.appendChild(a);let i=document.createElement("div");i.classList.add("mozzarella-stick-input"),i.textContent="Mozzarella Sticks";let c=document.createElement("p");c.classList.add("mozzarella-stick-description-text"),c.textContent="Served with out marinara sauce",i.appendChild(c);let s=document.createElement("div");s.classList.add("alec-nacho-input"),s.textContent="Alec's Nachos Supreme";let d=document.createElement("p");return d.classList.add("alec-nachos-description-text"),d.textContent="Tortilla chips loaded with beans, chili, melted chedder cheese, lettuce, onions, jalapenos, tomatoes, served with sour cream and salsa",s.appendChild(d),e.appendChild(t),e.appendChild(n),e.appendChild(o),e.appendChild(i),e.appendChild(s),e},x=()=>{let e=document.createElement("div");return e.textContent="this is a contact page!!",e.style.backgroundColor="yellow",e.style.color="black",e};let w=document.getElementById("content");g.appendChild(function(){const e=document.createElement("div"),t=document.createElement("div");t.classList.add("header-btn-div"),e.classList.add("header-content-container"),e.innerHTML="Alec's House of Burgers <br> The Best In The City!";const n=document.createElement("button");n.classList.add("home-btn");const r=document.createElement("button");r.classList.add("menu-btn");const o=document.createElement("button");return o.classList.add("contact-btn"),n.textContent="Home",r.textContent="Menu",o.textContent="Contact",t.append(n),t.append(r),t.append(o),e.append(t),e}()),g.appendChild(b()),g.appendChild((()=>{let e=document.createElement("div");return e.classList.add("footer-content-div"),e.innerHTML="<br> Address: 1234 South Broad Street, Philadelphia PA <br> <br> Phone: 666-666-666",e})());let C,E=w.children,L=document.querySelector(".home-btn"),k=document.querySelector(".menu-btn"),M=document.querySelector(".contact-btn");function S(){"Home"===C?w.replaceChild(b(),E[1]):"Menu"===C?w.replaceChild(y(),E[1]):"Contact"===C&&w.replaceChild(x(),E[1])}L.addEventListener("click",(()=>{C="Home",S()})),k.addEventListener("click",(()=>{C="Menu",S()})),M.addEventListener("click",(()=>{C="Contact",S()}))})()})();