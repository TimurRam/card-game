/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/render-difficulty.js":
/*!*****************************************!*\
  !*** ./components/render-difficulty.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderDifficulty: () => (/* binding */ renderDifficulty)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./index.js\");\n\n\nfunction renderDifficulty() {\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.appElement.innerHTML = `<div class=\"difficulty\">\n    <h2 class=\"difficulty__text\">Выбери <br> \n        сложность\n    </h2>\n         <form class=\"difficulty__buttons\">\n         \n            <input id=\"easy\" type=\"radio\" name=\"difficult\" value=\"easy\">\n            <label class=\"difficulty__item\" for=\"easy\">1</label>\n            <input id=\"medium\" type=\"radio\" name=\"difficult\" value=\"medium\"> \n            <label class=\"difficulty__item\" for=\"medium\">2</label>\n            <input id=\"hard\" type=\"radio\" name=\"difficult\" value=\"hard\">\n            <label class=\"difficulty__item\" for=\"hard\">3</label>\n        </form>\n         <div class=\"start\">\n            <button class=\"start__button\">Старт</button>\n        </div>\n            \n</div>\n</div>`;\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.checkButtonsDifficulty)();\n}\n\n\n//# sourceURL=webpack://card-game/./components/render-difficulty.js?");

/***/ }),

/***/ "./components/render-presents-card.js":
/*!********************************************!*\
  !*** ./components/render-presents-card.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderPresentsCard: () => (/* binding */ renderPresentsCard)\n/* harmony export */ });\n/* harmony import */ var _render_difficulty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-difficulty.js */ \"./components/render-difficulty.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ \"./index.js\");\n\n\nconst gameTitleElement = ` <div class=\"game__title\">\n<div class=\"game__time-box\">\n    <div class=\"game__text-box\">\n        <p class=\"game__text\">min</p>\n        <p class=\"game__text\">sek</p>\n    </div>\n    <p class=\"game__time\">00.00</p>\n</div>\n<div class=\"game__again-button\">Начать заново</div>\n</div>`;\nconst presentClosedCards = `<div class=\"game\">\n  ${gameTitleElement}\n<div class=\"game__cards\">\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n    <div class=\"game__cards-item\"></div>\n</div>\n</div>\n`;\nconst presentOpenCards = `<div class=\"game\">\n      ${gameTitleElement}\n<div class=\"game__cards\">\n<div class=\"game__cards-item\"><img src=\"./img/front/туз пики.png\" alt=\"туз пики\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/король пики.png\" alt=\"король пики\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/дама пики.png\" alt=\"дама пики\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/валет пики.png\" alt=\"валет пики\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/10 пики.png\" alt=\"10 пики\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/9 пики.png\" alt=\"9 пики\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/8 пики.png\" alt=\"8 пики\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/7 пики.png\" alt=\"7 пики\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/6 пики.png\" alt=\"6 пики\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/туз черви.png\" alt=\"туз черви\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/король черви.png\" alt=\"король черви\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/дама черви.png\" alt=\"дама черви\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/валет черви.png\" alt=\"валет черви\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/10 черви.png\" alt=\"10 черви\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/9 черви.png\" alt=\"9 черви\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/8 черви.png\" alt=\"8 черви\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/7 черви.png\" alt=\"7 черви\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/6 черви.png\" alt=\"6 черви\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/туз бубны.png\" alt=\"туз бубны\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/король бубны.png\" alt=\"король бубны\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/дама бубны.png\" alt=\"дама бубны\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/валет бубны.png\" alt=\"валет бубны\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/10 бубны.png\" alt=\"10 бубны\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/9 бубны.png\" alt=\"9 бубны\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/8 бубны.png\" alt=\"8 бубны\"></div>\n<div class=\"game__cards-item\"><img src=\"img/front/7 бубны.png\" alt=\"7 бубны\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/6 бубны.png\" alt=\"6 бубны\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/туз крести.png\" alt=\"туз крести\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/король крести.png\" alt=\"король крести\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/дама крести.png\" alt=\"дама крести\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/валет крести.png\" alt=\"валет крести\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/10 крести.png\" alt=\"10 крести\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/9 крести.png\" alt=\"9 крести\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/8 крести.png\" alt=\"8 крести\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/7 крести.png\" alt=\"7 крести\"></div>\n<div class=\"game__cards-item\"><img src=\"./img/front/6 крести.png\" alt=\"6 крести\"></div>\n</div>\n</div>`;\n\nfunction renderPresentsCard() {\n    switch (_index_js__WEBPACK_IMPORTED_MODULE_1__.globalData.difficulty) {\n        case 'easy':\n            _index_js__WEBPACK_IMPORTED_MODULE_1__.appElement.innerHTML = presentClosedCards;\n            break;\n        case 'medium':\n            _index_js__WEBPACK_IMPORTED_MODULE_1__.appElement.innerHTML = presentOpenCards;\n            break;\n        case 'hard':\n            _index_js__WEBPACK_IMPORTED_MODULE_1__.appElement.innerHTML = presentOpenCards;\n\n            break;\n        default:\n            break;\n    }\n    document\n        .querySelector('.game__again-button')\n        .addEventListener('click', () => {\n            (0,_render_difficulty_js__WEBPACK_IMPORTED_MODULE_0__.renderDifficulty)();\n        });\n}\n\n\n//# sourceURL=webpack://card-game/./components/render-presents-card.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appElement: () => (/* binding */ appElement),\n/* harmony export */   checkButtonsDifficulty: () => (/* binding */ checkButtonsDifficulty),\n/* harmony export */   globalData: () => (/* binding */ globalData)\n/* harmony export */ });\n/* harmony import */ var _components_render_difficulty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/render-difficulty.js */ \"./components/render-difficulty.js\");\n/* harmony import */ var _components_render_presents_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/render-presents-card.js */ \"./components/render-presents-card.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n\n\n\nconst appElement = document.querySelector('.container');\nconst globalData = {\n    difficulty: '',\n    cards: '',\n};\n\n(0,_components_render_difficulty_js__WEBPACK_IMPORTED_MODULE_0__.renderDifficulty)();\n\nfunction checkButtonsDifficulty() {\n    const difficultyButtons = document.getElementsByName('difficult');\n    console.log(difficultyButtons);\n    const buttonStart = document.querySelector('.start__button');\n    difficultyButtons.forEach((el) => {\n        console.log(el);\n        el.addEventListener('click', () => {\n            globalData.difficulty = el.value;\n            console.log(globalData.difficulty);\n\n            switch (globalData.difficulty) {\n                case 'easy':\n                    globalData.difficulty = 'easy';\n                    globalData.cards = '6 карточек (3 пары)';\n                    break;\n                case 'medium':\n                    globalData.difficulty = 'medium';\n                    globalData.cards = '12 карточек (6 пар)';\n                    break;\n                case 'hard':\n                    globalData.difficulty = 'hard';\n                    globalData.cards = '18 карточек (9 пар)';\n                    break;\n                default:\n                    break;\n            }\n        });\n    });\n    buttonStart.addEventListener('click', () => {\n        if (!globalData.difficulty) {\n            alert('С начало выберете сложность');\n            return;\n        }\n        (0,_components_render_presents_card_js__WEBPACK_IMPORTED_MODULE_1__.renderPresentsCard)();\n    });\n}\n\n\n//# sourceURL=webpack://card-game/./index.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://card-game/./style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;