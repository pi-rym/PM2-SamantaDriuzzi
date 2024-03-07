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

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ (() => {

eval("const movieCardsContainer = document.getElementById(\"movieCardsContainer\");\r\n\r\nconst additionalImages = [\r\n  \"../assets/number1.png\",\r\n  \"../assets/number2.png\",\r\n  \"../assets/number3.png\",\r\n  \"../assets/number4.png\",\r\n  \"../assets/number5.png\",\r\n];\r\n\r\n$.get(\"https://students-api.2.us-1.fl0.io/movies\", (data) => {\r\n  cardMovie(data);\r\n});\r\n\r\nconst cardMovie = (data) => {\r\n  data.forEach((movie, index) => {\r\n    const containerCard = document.createElement(\"div\");\r\n    containerCard.classList.add(\"containerCard\");\r\n\r\n    const card = document.createElement(\"div\");\r\n    card.classList.add(\"card\");\r\n\r\n    const img = document.createElement(\"img\");\r\n    img.src = movie.poster;\r\n    img.alt = `${movie.title} Poster`;\r\n    img.classList.add(\"poster\");\r\n    card.appendChild(img);\r\n\r\n    const nameParagraph = document.createElement(\"p\");\r\n    nameParagraph.textContent = movie.title;\r\n    nameParagraph.classList.add(\"name\");\r\n    card.appendChild(nameParagraph);\r\n\r\n    const additionalImage = document.createElement(\"img\");\r\n    additionalImage.src = additionalImages[index % additionalImages.length];\r\n    additionalImage.classList.add(\"additional-image\");\r\n    containerCard.appendChild(additionalImage);\r\n\r\n    containerCard.appendChild(card);\r\n\r\n    movieCardsContainer.appendChild(containerCard);\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://front/./scripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scripts/index.js"]();
/******/ 	
/******/ })()
;