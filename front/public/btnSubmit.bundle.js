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

/***/ "./scripts/createMovie/btnSubmit.js":
/*!******************************************!*\
  !*** ./scripts/createMovie/btnSubmit.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const createMovie = __webpack_require__(/*! ./createMovie */ \"./scripts/createMovie/createMovie.js\");\r\n\r\nconst btnSubmit = document.getElementById(\"btnSubmit\");\r\nbtnSubmit.addEventListener(\"click\", createMovie);\r\n\n\n//# sourceURL=webpack://front/./scripts/createMovie/btnSubmit.js?");

/***/ }),

/***/ "./scripts/createMovie/createMovie.js":
/*!********************************************!*\
  !*** ./scripts/createMovie/createMovie.js ***!
  \********************************************/
/***/ ((module) => {

eval("// Implementar una función que maneje el evento de envío de formulario,\r\n//  que por el momento se encargará de seleccionar los inputs,\r\n//  y validar que todos los datos estén completos.\r\n//  Asumimos para esta actividad que todos los datos son obligatorios.\r\n\r\nfunction createMovie() {\r\n  const title = document.getElementById(\"title\").value;\r\n  const year = document.getElementById(\"year\").value;\r\n  const director = document.getElementById(\"director\").value;\r\n  const duration = document.getElementById(\"duration\").value;\r\n  const genre = document.getElementById(\"genre\").value;\r\n  const rate = document.getElementById(\"rate\").value;\r\n  const poster = document.getElementById(\"poster\").value;\r\n\r\n  if (!title || !year || !director || !duration || !genre || !rate || !poster) {\r\n    alert(\"Todos los campos son obligatorios\");\r\n  } else {\r\n    console.log(\"enviando\");\r\n  }\r\n}\r\nmodule.exports = createMovie;\r\n\n\n//# sourceURL=webpack://front/./scripts/createMovie/createMovie.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/createMovie/btnSubmit.js");
/******/ 	
/******/ })()
;