/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/scripts/headline.js
/* harmony default export */ const headline = ((function headline() {
	const headline = "Welcome to the webpage"
	document.querySelector("h1").innerText = headline
})());

;// CONCATENATED MODULE: ./src/scripts/burgermenu.js
/* harmony default export */ const burgermenu = ((function burgermenu() {
	const button = document.querySelector(".menuButton")
	const menu = document.querySelector(".primaryMenu")

	button.addEventListener("click", clickHandler)

	function clickHandler() {
		menu.style.right = menu.style.right == "-19em" ? "0" : "-19em"
	}
})());
;// CONCATENATED MODULE: ./src/scripts/api.js
const URL = new URLSearchParams(window.location.search)
/* harmony default export */ const api = ((function() {
    fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=F7Q16NruiZVUiGVH934NpdQgCBkkIz2s')
      .then(response => response.json())
      .then(data => {
       
        console.log(data);
      });
    })());
;// CONCATENATED MODULE: ./src/index.js




/******/ })()
;
//# sourceMappingURL=main.js.map