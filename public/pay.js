!function e(t,r,i){function n(s,a){if(!r[s]){if(!t[s]){var h="function"==typeof require&&require;if(!a&&h)return h(s,!0);if(o)return o(s,!0);var f=new Error("Cannot find module '"+s+"'");throw f.code="MODULE_NOT_FOUND",f}var m=r[s]={exports:{}};t[s][0].call(m.exports,(function(e){return n(t[s][1][e]||e)}),m,m.exports,e,t,r,i)}return r[s].exports}for(var o="function"==typeof require&&require,s=0;s<i.length;s++)n(i[s]);return n}({1:[function(e,t,r){const i=new class{init(){this.origin="https://twetch-pay.now.sh",this.iframe=document.createElement("iframe"),this.iframe.style.border="none",this.iframe.style.overflow="hidden",this.iframe.style.width="0px",this.iframe.style.height="0px",this.iframe.style.position="fixed",this.iframe.style.top=0,this.iframe.style.left=0,this.iframe.setAttribute("src",this.origin),document.body.appendChild(this.iframe)}displayIframe(){this.iframe.style.height="100vh",this.iframe.style.width="100vw"}hideIframe(){this.iframe.style.width="0px",this.iframe.style.height="0px"}async pay(e){let t,r,i;if(e.moneybuttonProps&&e.moneybuttonProps.onCryptoOperations&&(t=e.moneybuttonProps.onCryptoOperations,delete e.moneybuttonProps.onCryptoOperations),e.onPayment&&(i=e.onPayment,delete e.onPayment),e.onError&&(r=e.onError,delete e.onError),!this.iframe.contentWindow)return;this.iframe.contentWindow.postMessage({from:"twetch-pay",props:e},this.origin),this.displayIframe();const n=this;return new Promise((e,o)=>{window.addEventListener("message",(function s(a){window.removeEventListener("message",s);const h=a.data;if(h&&"object"==typeof h&&h.action){const s={closeTwetchPay:()=>(n.hideIframe(),e()),paymentTwetchPay:()=>(n.hideIframe(),i&&i(h.payment),e(h.payment)),errorTwetchPay:()=>(n.hideIframe(),r&&r(h.error),o(h.error)),cryptoOperationsTwetchPay:()=>(n.hideIframe(),t&&t(h.cryptoOperations))}[h.action];s&&s()}}))})}};window.addEventListener("load",(function(){i.init()})),window.twetchPay=i},{}]},{},[1]);