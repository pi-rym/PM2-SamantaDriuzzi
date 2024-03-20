/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/createNewMovie/btnClear.js":
/*!********************************************!*\
  !*** ./scripts/createNewMovie/btnClear.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const clearInputs = __webpack_require__(/*! ./clearInputs */ \"./scripts/createNewMovie/clearInputs.js\");\r\n\r\nconst btnClear = document.getElementById(\"btnClear\");\r\nbtnClear.addEventListener(\"click\", clearInputs);\r\n\n\n//# sourceURL=webpack://front/./scripts/createNewMovie/btnClear.js?");

/***/ }),

/***/ "./scripts/createNewMovie/clearInputs.js":
/*!***********************************************!*\
  !*** ./scripts/createNewMovie/clearInputs.js ***!
  \***********************************************/
/***/ ((module) => {

eval("function clearInputs() {\r\n  document.getElementById(\"title\").value = \"\";\r\n  document.getElementById(\"year\").value = \"\";\r\n  document.getElementById(\"director\").value = \"\";\r\n  document.getElementById(\"duration\").value = \"\";\r\n  document.getElementById(\"genre\").value = \"\";\r\n  document.getElementById(\"rate\").value = \"\";\r\n  document.getElementById(\"poster\").value = \"\";\r\n}\r\nmodule.exports = clearInputs;\r\n\n\n//# sourceURL=webpack://front/./scripts/createNewMovie/clearInputs.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/createNewMovie/btnClear.js");
/******/ 	
/******/ })()
;