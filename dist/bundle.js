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

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://card-game/./style.css?");

/***/ }),

/***/ "./components/end-game-components.ts":
/*!*******************************************!*\
  !*** ./components/end-game-components.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderingLoseGame: () => (/* binding */ renderingLoseGame),\n/* harmony export */   renderingWinGame: () => (/* binding */ renderingWinGame)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./index.ts\");\n/* harmony import */ var _render_difficulty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-difficulty */ \"./components/render-difficulty.ts\");\n\n\nfunction renderingWinGame() {\n    _index__WEBPACK_IMPORTED_MODULE_0__.globalData.appElement.innerHTML = \"\\n<section class=\\\"difficulty\\\">\\n<h1 class=\\\"difficulty__win\\\"></h1>\\n<h2 class=\\\"difficulty__title-win\\\">\\u0412\\u044B \\u0432\\u044B\\u0438\\u0433\\u0440\\u0430\\u043B\\u0438!</h2>\\n<p class=\\\"difficulty__text\\\">\\u0417\\u0430\\u0442\\u0440\\u0430\\u0447\\u0435\\u043D\\u043D\\u043E\\u0435 \\u0432\\u0440\\u0435\\u043C\\u044F:</p>\\n<p class=\\\"difficulty__timer\\\">\".concat(_index__WEBPACK_IMPORTED_MODULE_0__.globalData.timer, \"</p>\\n<button class=\\\"difficulty__buttonStart\\\">\\u0418\\u0433\\u0440\\u0430\\u0442\\u044C \\u0441\\u043D\\u043E\\u0432\\u0430</button>\\n</section>\\n\");\n    checkButtonEnd();\n}\nfunction renderingLoseGame() {\n    _index__WEBPACK_IMPORTED_MODULE_0__.globalData.appElement.innerHTML = \"\\n<section class=\\\"difficulty\\\">\\n<h1 class=\\\"difficulty__lose\\\"></h1>\\n<h2 class=\\\"difficulty__title-win\\\">\\u0412\\u044B \\u043F\\u0440\\u043E\\u0438\\u0433\\u0440\\u0430\\u043B\\u0438!</h2>\\n<p class=\\\"difficulty__text\\\">\\u0417\\u0430\\u0442\\u0440\\u0430\\u0447\\u0435\\u043D\\u043D\\u043E\\u0435 \\u0432\\u0440\\u0435\\u043C\\u044F:</p>\\n<p class=\\\"difficulty__timer\\\">\".concat(_index__WEBPACK_IMPORTED_MODULE_0__.globalData.timer, \"</p>\\n<button class=\\\"difficulty__buttonStart\\\">\\u0418\\u0433\\u0440\\u0430\\u0442\\u044C \\u0441\\u043D\\u043E\\u0432\\u0430</button>\\n</section>\\n\");\n    checkButtonEnd();\n}\nfunction checkButtonEnd() {\n    var startButtonElement = document.querySelector('.difficulty__buttonStart');\n    startButtonElement.addEventListener('click', function () {\n        _index__WEBPACK_IMPORTED_MODULE_0__.globalData.selectedCard = 'clear';\n        _index__WEBPACK_IMPORTED_MODULE_0__.globalData.index = 0;\n        (0,_render_difficulty__WEBPACK_IMPORTED_MODULE_1__.renderDifficulty)();\n    });\n}\n\n\n//# sourceURL=webpack://card-game/./components/end-game-components.ts?");

/***/ }),

/***/ "./components/help-components.ts":
/*!***************************************!*\
  !*** ./components/help-components.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   randomItemElements: () => (/* binding */ randomItemElements),\n/* harmony export */   randomSuitAndRank: () => (/* binding */ randomSuitAndRank),\n/* harmony export */   startTime: () => (/* binding */ startTime)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./index.ts\");\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\n\nfunction randomSuitAndRank(numb) {\n    var randomPreset = new Array(numb);\n    for (var i = 0; i < numb; i++) {\n        if (_index__WEBPACK_IMPORTED_MODULE_0__.globalData.suit.length === 0) {\n            _index__WEBPACK_IMPORTED_MODULE_0__.globalData.suit = ['spades', 'hearts', 'diamonds', 'clubs'];\n        }\n        if (_index__WEBPACK_IMPORTED_MODULE_0__.globalData.rank.length === 0) {\n            _index__WEBPACK_IMPORTED_MODULE_0__.globalData.rank = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6'];\n        }\n        var randomSuit = Math.floor(Math.random() * _index__WEBPACK_IMPORTED_MODULE_0__.globalData.suit.length);\n        var randomRank = Math.floor(Math.random() * _index__WEBPACK_IMPORTED_MODULE_0__.globalData.rank.length);\n        randomPreset[i] =\n            _index__WEBPACK_IMPORTED_MODULE_0__.globalData.suit[randomSuit] + _index__WEBPACK_IMPORTED_MODULE_0__.globalData.rank[randomRank];\n        _index__WEBPACK_IMPORTED_MODULE_0__.globalData.suit.splice(randomSuit, 1);\n        _index__WEBPACK_IMPORTED_MODULE_0__.globalData.rank.splice(randomRank, 1);\n    }\n    _index__WEBPACK_IMPORTED_MODULE_0__.globalData.randomPreset = __spreadArray(__spreadArray([], randomPreset, true), randomPreset, true);\n    return;\n}\nfunction randomItemElements(numb) {\n    _index__WEBPACK_IMPORTED_MODULE_0__.globalData.index = numb;\n    var randomItemElement = new Array();\n    for (var i = 0; i < numb; i++) {\n        var randomI = Math.floor(Math.random() * _index__WEBPACK_IMPORTED_MODULE_0__.globalData.randomPreset.length);\n        randomItemElement[i] = \"\\n        <div data-preset=\\\"\".concat(_index__WEBPACK_IMPORTED_MODULE_0__.globalData.randomPreset[randomI], \"\\\" class=\\\"game__cards-item preset__\").concat(_index__WEBPACK_IMPORTED_MODULE_0__.globalData.randomPreset[randomI], \"\\\"></div>\\n        \");\n        _index__WEBPACK_IMPORTED_MODULE_0__.globalData.randomPreset.splice(randomI, 1);\n    }\n    return randomItemElement.join('');\n}\nfunction startTime() {\n    var timerElement = document.getElementById('timer');\n    var sec = 0;\n    var min = 0;\n    var t;\n    function tick() {\n        sec++;\n        if (sec >= 60) {\n            sec = 0;\n            min++;\n            if (min >= 60) {\n                min = 0;\n            }\n        }\n        return;\n    }\n    function add() {\n        if (_index__WEBPACK_IMPORTED_MODULE_0__.globalData.timerCheck === 'on') {\n            clearTimeout(t);\n            return;\n        }\n        tick();\n        timerElement.innerHTML =\n            (min > 9 ? min : '0' + min) + ':' + (sec > 9 ? sec : '0' + sec);\n        _index__WEBPACK_IMPORTED_MODULE_0__.globalData.timer = timerElement.innerHTML;\n        console.log(_index__WEBPACK_IMPORTED_MODULE_0__.globalData.timer);\n        timer();\n        return;\n    }\n    function timer() {\n        t = setTimeout(add, 1000);\n        return;\n    }\n    timer();\n}\n\n\n//# sourceURL=webpack://card-game/./components/help-components.ts?");

/***/ }),

/***/ "./components/render-difficulty.ts":
/*!*****************************************!*\
  !*** ./components/render-difficulty.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkButtonsDifficulty: () => (/* binding */ checkButtonsDifficulty),\n/* harmony export */   renderDifficulty: () => (/* binding */ renderDifficulty)\n/* harmony export */ });\n/* harmony import */ var _render_presents_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-presents-card */ \"./components/render-presents-card.ts\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./index.ts\");\n\n\nfunction renderDifficulty() {\n    _index__WEBPACK_IMPORTED_MODULE_1__.globalData.appElement.innerHTML = \"<div class=\\\"difficulty\\\">\\n    <h2 class=\\\"difficulty__title\\\">\\u0412\\u044B\\u0431\\u0435\\u0440\\u0438 <br> \\n        \\u0441\\u043B\\u043E\\u0436\\u043D\\u043E\\u0441\\u0442\\u044C\\n    </h2>\\n         <form class=\\\"difficulty__buttons\\\">\\n         \\n            <input id=\\\"easy\\\" type=\\\"radio\\\" name=\\\"difficult\\\" value=\\\"easy\\\">\\n            <label class=\\\"difficulty__item\\\" for=\\\"easy\\\">1</label>\\n            <input id=\\\"medium\\\" type=\\\"radio\\\" name=\\\"difficult\\\" value=\\\"medium\\\"> \\n            <label class=\\\"difficulty__item\\\" for=\\\"medium\\\">2</label>\\n            <input id=\\\"hard\\\" type=\\\"radio\\\" name=\\\"difficult\\\" value=\\\"hard\\\">\\n            <label class=\\\"difficulty__item\\\" for=\\\"hard\\\">3</label>\\n        </form>\\n         <div class=\\\"start\\\">\\n            <button class=\\\"start__button\\\">\\u0421\\u0442\\u0430\\u0440\\u0442</button>\\n        </div>\\n            \\n</div>\\n</div>\";\n    checkButtonsDifficulty();\n}\nfunction checkButtonsDifficulty() {\n    var difficultyButtons = document.querySelectorAll('input[type=\"radio\"]');\n    var buttonStart = document.querySelector('.start__button');\n    var _loop_1 = function (difficultyButton) {\n        difficultyButton.addEventListener('click', function () {\n            _index__WEBPACK_IMPORTED_MODULE_1__.globalData.difficulty = difficultyButton.value;\n        });\n    };\n    for (var _i = 0, _a = difficultyButtons; _i < _a.length; _i++) {\n        var difficultyButton = _a[_i];\n        _loop_1(difficultyButton);\n    }\n    buttonStart.addEventListener('click', function () {\n        if (!_index__WEBPACK_IMPORTED_MODULE_1__.globalData.difficulty) {\n            alert('С начало выберете сложность');\n            return;\n        }\n        (0,_render_presents_card__WEBPACK_IMPORTED_MODULE_0__.renderPresentsCard)();\n    });\n}\n\n\n//# sourceURL=webpack://card-game/./components/render-difficulty.ts?");

/***/ }),

/***/ "./components/render-presents-card.ts":
/*!********************************************!*\
  !*** ./components/render-presents-card.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderPresentsCard: () => (/* binding */ renderPresentsCard)\n/* harmony export */ });\n/* harmony import */ var _render_difficulty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-difficulty */ \"./components/render-difficulty.ts\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./index.ts\");\n/* harmony import */ var _end_game_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./end-game-components */ \"./components/end-game-components.ts\");\n/* harmony import */ var _help_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help-components */ \"./components/help-components.ts\");\n\n\n\n\nvar gameTitleElement = \" <div class=\\\"game__title\\\">\\n<div class=\\\"game__time-box\\\">\\n    <div class=\\\"game__text-box\\\">\\n        <p class=\\\"game__text\\\">min</p>\\n        <p class=\\\"game__text\\\">sek</p>\\n    </div>\\n    <span id=\\\"timer\\\" class=\\\"game__time\\\">00:00</span>\\n</div>\\n<div class=\\\"game__again-button\\\">\\u041D\\u0430\\u0447\\u0430\\u0442\\u044C \\u0437\\u0430\\u043D\\u043E\\u0432\\u043E</div>\\n</div>\";\nfunction renderPresentsCard() {\n    switch (_index__WEBPACK_IMPORTED_MODULE_1__.globalData.difficulty) {\n        case 'easy':\n            (0,_help_components__WEBPACK_IMPORTED_MODULE_3__.randomSuitAndRank)(3);\n            _index__WEBPACK_IMPORTED_MODULE_1__.globalData.appElement.innerHTML = \"\\n            <div class=\\\"game\\\">\\n                \".concat(gameTitleElement, \"\\n                <div class=\\\"game__cards\\\">\\n                    \").concat((0,_help_components__WEBPACK_IMPORTED_MODULE_3__.randomItemElements)(6), \"\\n                </div>\\n            </div>\\n            \");\n            break;\n        case 'medium':\n            (0,_help_components__WEBPACK_IMPORTED_MODULE_3__.randomSuitAndRank)(6);\n            _index__WEBPACK_IMPORTED_MODULE_1__.globalData.appElement.innerHTML = \"\\n            <div class=\\\"game\\\">\\n                \".concat(gameTitleElement, \"\\n                <div class=\\\"game__cards\\\">\\n                    \").concat((0,_help_components__WEBPACK_IMPORTED_MODULE_3__.randomItemElements)(12), \"\\n                </div>\\n            </div>\\n            \");\n            break;\n        case 'hard':\n            (0,_help_components__WEBPACK_IMPORTED_MODULE_3__.randomSuitAndRank)(9);\n            _index__WEBPACK_IMPORTED_MODULE_1__.globalData.appElement.innerHTML = \"\\n            <div class=\\\"game\\\">\\n                \".concat(gameTitleElement, \"\\n                <div class=\\\"game__cards\\\">\\n                    \").concat((0,_help_components__WEBPACK_IMPORTED_MODULE_3__.randomItemElements)(18), \"\\n                </div>\\n            </div>\\n            \");\n            break;\n        default:\n            break;\n    }\n    var againButton = document.querySelector('.game__again-button');\n    againButton.addEventListener('click', function () {\n        delete _index__WEBPACK_IMPORTED_MODULE_1__.globalData.selectedCard;\n        (0,_render_difficulty__WEBPACK_IMPORTED_MODULE_0__.renderDifficulty)();\n    });\n    checkButtonPresets();\n}\nfunction checkButtonPresets() {\n    var buttonElements = document.querySelectorAll('.game__cards-item');\n    var cardIndex = 0;\n    var timerCheck = false;\n    setTimeout(function () {\n        for (var _i = 0, _a = buttonElements; _i < _a.length; _i++) {\n            var buttonElement = _a[_i];\n            if (buttonElement instanceof HTMLElement) {\n                buttonElement.classList.remove(\"preset__\".concat(buttonElement.dataset.preset));\n            }\n        }\n        var _loop_1 = function (buttonElement) {\n            if (buttonElement instanceof HTMLElement) {\n                buttonElement.addEventListener('click', function () {\n                    buttonElement.classList.add('-button-active');\n                    buttonElement.classList.add(\"preset__\".concat(buttonElement.dataset.preset));\n                    switch (_index__WEBPACK_IMPORTED_MODULE_1__.globalData.selectedCard) {\n                        case 'clear':\n                            if (_index__WEBPACK_IMPORTED_MODULE_1__.globalData.timerCheck === 'on') {\n                                _index__WEBPACK_IMPORTED_MODULE_1__.globalData.timerCheck = 'off';\n                                (0,_help_components__WEBPACK_IMPORTED_MODULE_3__.startTime)();\n                            }\n                            _index__WEBPACK_IMPORTED_MODULE_1__.globalData.selectedCard =\n                                buttonElement.dataset.preset;\n                            buttonElement.dataset.preset = 'open';\n                            break;\n                        case 'open':\n                            _index__WEBPACK_IMPORTED_MODULE_1__.globalData.selectedCard = 'clear';\n                            break;\n                        case buttonElement.dataset.preset:\n                            cardIndex = cardIndex + 2;\n                            if (_index__WEBPACK_IMPORTED_MODULE_1__.globalData.index === cardIndex) {\n                                _index__WEBPACK_IMPORTED_MODULE_1__.globalData.timerCheck = 'on';\n                                (0,_end_game_components__WEBPACK_IMPORTED_MODULE_2__.renderingWinGame)();\n                                return;\n                            }\n                            _index__WEBPACK_IMPORTED_MODULE_1__.globalData.selectedCard = 'clear';\n                            buttonElement.dataset.preset = 'open';\n                            break;\n                        default:\n                            _index__WEBPACK_IMPORTED_MODULE_1__.globalData.timerCheck = 'on';\n                            (0,_end_game_components__WEBPACK_IMPORTED_MODULE_2__.renderingLoseGame)();\n                            break;\n                    }\n                });\n            }\n        };\n        for (var _b = 0, _c = buttonElements; _b < _c.length; _b++) {\n            var buttonElement = _c[_b];\n            _loop_1(buttonElement);\n        }\n    }, 5 * 1000);\n}\n\n\n//# sourceURL=webpack://card-game/./components/render-presents-card.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   globalData: () => (/* binding */ globalData)\n/* harmony export */ });\n/* harmony import */ var _components_render_difficulty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/render-difficulty */ \"./components/render-difficulty.ts\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n\n\nvar globalData = {\n    appElement: document.querySelector('.container'),\n    suit: ['spades', 'hearts', 'diamonds', 'clubs'],\n    rank: ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6'],\n    randomPreset: new Array(),\n    difficulty: '',\n    selectedCard: 'clear',\n    index: 0,\n    timer: '',\n    timerCheck: 'on',\n};\n(0,_components_render_difficulty__WEBPACK_IMPORTED_MODULE_0__.renderDifficulty)();\n\n\n//# sourceURL=webpack://card-game/./index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;