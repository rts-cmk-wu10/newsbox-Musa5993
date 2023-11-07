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
;// CONCATENATED MODULE: ./src/images/aubergine-feta.png
const aubergine_feta_namespaceObject = "data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiaW1hZ2VzL2F1YmVyZ2luZS1mZXRhLnBuZyI7";
;// CONCATENATED MODULE: ./src/images/OST3.jpg
const OST3_namespaceObject = "data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiaW1hZ2VzL09TVDMuanBnIjs=";
;// CONCATENATED MODULE: ./src/index.js





/******/ })()
;
//# sourceMappingURL=main.js.map