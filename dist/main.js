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

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ \"./src/js/components/Header.js\");\n\n\nvar header = new _components_Header__WEBPACK_IMPORTED_MODULE_1__.default('main-header');\n\n//# sourceURL=webpack://portfolio/./src/js/app.js?");

/***/ }),

/***/ "./src/js/components/Header.js":
/*!*************************************!*\
  !*** ./src/js/components/Header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _default)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/js/utils.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar _default = /*#__PURE__*/function () {\n  function _default(headerId) {\n    _classCallCheck(this, _default);\n\n    this.headerId = headerId;\n    this.toggledClass = 'open';\n    this.init();\n  }\n\n  _createClass(_default, [{\n    key: \"init\",\n    value: function init() {\n      this.header = document.getElementById(this.headerId);\n      this.toggler = this.header.querySelector('.toggler');\n      this.nav = this.header.querySelector('.nav');\n      this.logo = this.header.querySelector('.logo');\n      this.setListeners();\n    }\n  }, {\n    key: \"setListeners\",\n    value: function setListeners() {\n      this.toggler.addEventListener('click', this.handleTogglerClick.bind(this));\n    }\n  }, {\n    key: \"handleTogglerClick\",\n    value: function handleTogglerClick() {\n      console.log('Clicked');\n      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toggleClasses)([this.toggler, this.nav, this.logo], this.toggledClass);\n    }\n  }]);\n\n  return _default;\n}();\n\n\n\n//# sourceURL=webpack://portfolio/./src/js/components/Header.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleClasses\": () => (/* binding */ toggleClasses),\n/* harmony export */   \"removeClasses\": () => (/* binding */ removeClasses),\n/* harmony export */   \"addClass\": () => (/* binding */ addClass),\n/* harmony export */   \"removeClass\": () => (/* binding */ removeClass),\n/* harmony export */   \"scaleValue\": () => (/* binding */ scaleValue),\n/* harmony export */   \"setSectionElsTranslate\": () => (/* binding */ setSectionElsTranslate)\n/* harmony export */ });\nfunction toggleClasses(els, classNames) {\n  els.forEach(function (el) {\n    classNames.split(' ').forEach(function (className) {\n      el.classList.toggle(className);\n    });\n  });\n}\nvar removeClasses = function removeClasses(els, classNames) {\n  els.forEach(function (el) {\n    classNames.split(' ').forEach(function (className) {\n      el.classList.remove(className);\n    });\n  });\n};\nvar addClass = function addClass(el, className) {\n  return el.classList.add(className);\n};\nvar removeClass = function removeClass(el, className) {\n  return el.classList.remove(className);\n};\nfunction scaleValue(value, from, to) {\n  var scale = (to[1] - to[0]) / (from[1] - from[0]);\n  var capped = Math.min(from[1], Math.max(from[0], value)) - from[0];\n  return capped * scale + to[0];\n}\nfunction setSectionElsTranslate() {\n  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;\n  var jsSlideLeftEls = parent.querySelectorAll('.js-slide-left');\n  var jsSlideRightEls = parent.querySelectorAll('.js-slide-right');\n  var jsSlideBot = parent.querySelectorAll('.js-slide-bot');\n  var layers = parent.querySelectorAll('.layer-item');\n  jsSlideLeftEls.forEach(function (el) {\n    el.style.transform = 'translateX(-150%)';\n  });\n  jsSlideRightEls.forEach(function (el) {\n    el.style.transform = 'translateX(150%)';\n  });\n  jsSlideBot.forEach(function (el) {\n    el.style.transform = 'translateY(150%)';\n  });\n  layers.forEach(function (el, idx) {\n    if (idx % 2 === 0) el.style.transform = 'translateX(150%) translateY(-150%)';else {\n      el.style.transform = 'translateX(-150%) translateY(150%)';\n    } // el.style.opacity = 0;\n  });\n}\n\n//# sourceURL=webpack://portfolio/./src/js/utils.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/sass/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;