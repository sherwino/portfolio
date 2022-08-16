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

/***/ "./src/const.ts":
/*!**********************!*\
  !*** ./src/const.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DATA\": () => (/* binding */ DATA)\n/* harmony export */ });\nvar DATA = {\n    sections: [\n        {\n            \"featured\": \"true\",\n            \"id\": \"technology-intro\",\n            \"class\": \"section-intro\",\n            \"message\": \"Been a developer for a few years now, and have been fortunate enough to work with some of the most widely adopted technologies in the world. My code is running on all types of devices, and it has rendered on the screen of thousands of users. I understand that saying that I am a software developer does not give a full picture of what I have been working with so below are some of the technologies I work with the most professionally:\",\n            \"order\": 0,\n            \"title\": \"What technologies do I work with?\"\n        },\n        {\n            \"featured\": true,\n            \"id\": \"react-native\",\n            \"list\": [\n                \"iOS\",\n                \"TVOS\",\n                \"Android\",\n                \"AndroidTV\",\n                \"FireTV\",\n                \"WebOS\",\n                \"Tizen\",\n                \"Web\"\n            ],\n            \"message\": \"One of the technologies I am spending the most time with these days is React Native. React Native is an impressive framework that lets you use languages like JavaScript, TypeScript, Kotlin, Swift, and couples them with React so that you could render web like apps on native platforms. The last few years has been all about working on codebases that leverage the strengths of React Native. Like creating apps that can take React Native and scale it across multiple platforms. The versatility of this framework has given me the opportunity to develop on systems or platforms like:\",\n            \"order\": 1,\n            \"title\": \"React Native\",\n            \"logo\": \"./assets/react-icon.svg\"\n        },\n        {\n            \"featured\": true,\n            \"id\": \"react-native-continued\",\n            \"list\": [\n                \"JavaScript\",\n                \"TypeScript\",\n                \"Kotlin\",\n                \"Swift\",\n                \"Jest\",\n                \"Ramda\",\n                \"Eslint\",\n                \"EJS\",\n                \"Node\",\n                \"NPM\",\n                \"Yarn\",\n                \"Lerna\",\n                \"Webpack\",\n                \"Babel\",\n                \"BASH\",\n                \"Python\",\n                \"CircleCI\",\n                \"Azure CI\",\n                \"Appium\",\n                \"AppleScript\",\n                \"Android Studio\",\n                \"Xcode\",\n                \"VSCode\",\n                \"Vim\",\n                \"AWS S3\",\n                \"Google Analytics\",\n                \"Firebase\",\n                \"Ruby\",\n                \"Tizen Studio\",\n                \"Docker\",\n                \"Git\"\n            ],\n            \"message\": \"React Native has been one of the most powerful frameworks in my toolbelt. It has helped me speed up the development process by allowing me to work on various platforms at the same time, but it takes a village to build apps, and below are some of the tools and technologies I have to utilize every day to be able to work with React Native.\",\n            \"order\": 2\n        }\n    ],\n    social: {\n        \"email\": \"sherwino\",\n        \"github\": \"sherwino\",\n        \"instagram\": \"sherwinoh\",\n        \"linkedin\": \"sherwino\",\n        \"stackoverflow\": 3591284,\n        \"twitter\": \"sherwinoh_\"\n    }\n};\n\n\n//# sourceURL=webpack://portfolio/./src/const.ts?");

/***/ }),

/***/ "./src/create.ts":
/*!***********************!*\
  !*** ./src/create.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createList\": () => (/* binding */ createList),\n/* harmony export */   \"createMessage\": () => (/* binding */ createMessage),\n/* harmony export */   \"createSection\": () => (/* binding */ createSection),\n/* harmony export */   \"createTitle\": () => (/* binding */ createTitle)\n/* harmony export */ });\n// These files are being merged into to the index.js file in public\nvar createList = function (sectionData, id) {\n    var list = document.createElement(\"ul\");\n    list.id = id + \"-list\";\n    list.className = \"section-list\";\n    sectionData.list.forEach(function (listItem) {\n        var item = document.createElement(\"li\");\n        item.className = \"section-item\";\n        item.innerHTML = listItem;\n        list.appendChild(item);\n    });\n    return list;\n};\nvar createTitle = function (sectionData, id) {\n    var title = document.createElement(\"h4\");\n    title.id = id + \"-title\";\n    title.className = \"section-title\";\n    title.innerHTML = sectionData.title;\n    return title;\n};\nvar mainBody = document.getElementById(\"main\");\nvar createSection = function (sectionData) {\n    if (sectionData && sectionData.featured) {\n        var id = sectionData === null || sectionData === void 0 ? void 0 : sectionData.id;\n        var section = document.createElement(\"section\");\n        var title = sectionData.title && createTitle(sectionData, id);\n        var message = sectionData.message && createMessage(sectionData, id);\n        var list = sectionData.list && createList(sectionData, id);\n        section.id = id;\n        section.className = \"floating-section\";\n        title && section.appendChild(title);\n        message && section.appendChild(message);\n        list && section.appendChild(list);\n        mainBody.appendChild(section);\n    }\n};\n// These files are being merged into to the index.js file in public\nvar createMessage = function (sectionData, id) {\n    var message = document.createElement(\"p\");\n    message.id = id + \"-message\";\n    message.className = \"section-message\";\n    message.innerHTML = sectionData.message;\n    return message;\n};\n\n\n//# sourceURL=webpack://portfolio/./src/create.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./src/create.ts\");\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ \"./src/const.ts\");\n\n\nvar renderSections = function (sections) {\n    sections.forEach(function (section) {\n        (0,_create__WEBPACK_IMPORTED_MODULE_0__.createSection)(section);\n    });\n};\nif (_const__WEBPACK_IMPORTED_MODULE_1__.DATA && (_const__WEBPACK_IMPORTED_MODULE_1__.DATA === null || _const__WEBPACK_IMPORTED_MODULE_1__.DATA === void 0 ? void 0 : _const__WEBPACK_IMPORTED_MODULE_1__.DATA.sections)) {\n    renderSections(_const__WEBPACK_IMPORTED_MODULE_1__.DATA.sections);\n}\nelse {\n    console.info(\"Missing some data to render this page\");\n}\n\n\n//# sourceURL=webpack://portfolio/./src/index.ts?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;