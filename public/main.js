/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/const.ts":
/*!****************************!*\
  !*** ./src/utils/const.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATA": () => (/* binding */ DATA)
/* harmony export */ });
var DATA = {
    sections: [
        {
            "featured": "true",
            "id": "technology-intro",
            "class": "section-intro",
            "message": "Been a developer for a few years now, and have been fortunate enough to work with some of the most widely adopted technologies in the world. My code is running on all types of devices, and it has rendered on the screen of thousands of users. I understand that saying that I am a software developer does not give a full picture of what I have been working with so below are some of the technologies I work with the most professionally:",
            "order": 0,
            "title": "What technologies do I work with?"
        },
        {
            "featured": true,
            "id": "react-native",
            "list": [
                "iOS",
                "TVOS",
                "Android",
                "AndroidTV",
                "FireTV",
                "WebOS",
                "Tizen",
                "Web"
            ],
            "message": "One of the technologies I am spending the most time with these days is React Native. React Native is an impressive framework that lets you use languages like JavaScript, TypeScript, Kotlin, Swift, and couples them with React so that you could render web like apps on native platforms. The last few years has been all about working on codebases that leverage the strengths of React Native. Like creating apps that can take React Native and scale it across multiple platforms. The versatility of this framework has given me the opportunity to develop on systems or platforms like:",
            "order": 1,
            "title": "React Native",
            "logo": "./assets/react-icon.svg"
        },
        {
            "featured": true,
            "id": "react-native-continued",
            "list": [
                "JavaScript",
                "TypeScript",
                "Kotlin",
                "Swift",
                "Jest",
                "Ramda",
                "Eslint",
                "EJS",
                "Node",
                "NPM",
                "Yarn",
                "Lerna",
                "Webpack",
                "Babel",
                "BASH",
                "Python",
                "CircleCI",
                "Azure CI",
                "Appium",
                "AppleScript",
                "Android Studio",
                "Xcode",
                "VSCode",
                "Vim",
                "AWS S3",
                "Google Analytics",
                "Firebase",
                "Ruby",
                "Tizen Studio",
                "Docker",
                "Git"
            ],
            "message": "React Native has been one of the most powerful frameworks in my toolbelt. It has helped me speed up the development process by allowing me to work on various platforms at the same time, but it takes a village to build apps, and below are some of the tools and technologies I have to utilize every day to be able to work with React Native.",
            "order": 2
        }
    ],
    social: {
        "email": "sherwino",
        "github": "sherwino",
        "instagram": "sherwinoh",
        "linkedin": "sherwino",
        "stackoverflow": 3591284,
        "twitter": "sherwinoh_"
    }
};


/***/ }),

/***/ "./src/version/vanillajs/create.ts":
/*!*****************************************!*\
  !*** ./src/version/vanillajs/create.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createList": () => (/* binding */ createList),
/* harmony export */   "createMessage": () => (/* binding */ createMessage),
/* harmony export */   "createSection": () => (/* binding */ createSection),
/* harmony export */   "createTitle": () => (/* binding */ createTitle)
/* harmony export */ });
// These files are being merged into to the index.js file in public
var createList = function (sectionData, id) {
    var list = document.createElement("ul");
    list.id = id + "-list";
    list.className = "section-list";
    sectionData.list.forEach(function (listItem) {
        var item = document.createElement("li");
        item.className = "section-item";
        item.innerHTML = listItem;
        list.appendChild(item);
    });
    return list;
};
var createTitle = function (sectionData, id) {
    var title = document.createElement("h4");
    title.id = id + "-title";
    title.className = "section-title";
    title.innerHTML = sectionData.title;
    return title;
};
var mainBody = document.getElementById("main");
var createSection = function (sectionData) {
    if (sectionData && sectionData.featured) {
        var id = sectionData === null || sectionData === void 0 ? void 0 : sectionData.id;
        var section = document.createElement("section");
        var title = sectionData.title && createTitle(sectionData, id);
        var message = sectionData.message && createMessage(sectionData, id);
        var list = sectionData.list && createList(sectionData, id);
        section.id = id;
        section.className = "floating-section";
        title && section.appendChild(title);
        message && section.appendChild(message);
        list && section.appendChild(list);
        mainBody.appendChild(section);
    }
};
// These files are being merged into to the index.js file in public
var createMessage = function (sectionData, id) {
    var message = document.createElement("p");
    message.id = id + "-message";
    message.className = "section-message";
    message.innerHTML = sectionData.message;
    return message;
};


/***/ }),

/***/ "./src/version/vanillajs/index.ts":
/*!****************************************!*\
  !*** ./src/version/vanillajs/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vanillaJs": () => (/* binding */ vanillaJs)
/* harmony export */ });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./src/version/vanillajs/create.ts");
/* harmony import */ var _utils_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/const */ "./src/utils/const.ts");


var renderSections = function (sections) {
    console.log("renderSections", sections);
    sections.forEach(function (section) {
        (0,_create__WEBPACK_IMPORTED_MODULE_0__.createSection)(section);
    });
};
var vanillaJs = function () {
    if (_utils_const__WEBPACK_IMPORTED_MODULE_1__.DATA && (_utils_const__WEBPACK_IMPORTED_MODULE_1__.DATA === null || _utils_const__WEBPACK_IMPORTED_MODULE_1__.DATA === void 0 ? void 0 : _utils_const__WEBPACK_IMPORTED_MODULE_1__.DATA.sections)) {
        renderSections(_utils_const__WEBPACK_IMPORTED_MODULE_1__.DATA.sections);
    }
    else {
        console.info("Missing some data to render this page");
    }
};


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_vanillajs_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version/vanillajs/index */ "./src/version/vanillajs/index.ts");

var toolSelect = document.getElementById("tool-select");
var handleToolSelect = function (e) {
    console.log("handleToolSelect", e.target.value);
    var value = e.target.value;
    switch (value) {
        case "vanillajs":
            (0,_version_vanillajs_index__WEBPACK_IMPORTED_MODULE_0__.vanillaJs)();
            break;
        case "vuejs":
            console.log("load vuejs page");
            break;
        case "reactjs":
            console.log("load reactjs page");
            break;
        case "angular":
            console.log("load angular page");
            break;
        case "handlebars":
            console.log("load handlebars page");
            break;
        case "next":
            console.log("load next page");
            break;
        case "remix":
            console.log("load remix page");
            break;
        case "svelte":
            console.log("load svelte page");
            break;
        case "mithrill":
            console.log("load mithrill page");
            break;
        case "erb":
            console.log("load erb page");
            break;
        default:
            console.log("load default page", value);
            renderDefault();
            break;
    }
};
var renderDefault = function () {
    (0,_version_vanillajs_index__WEBPACK_IMPORTED_MODULE_0__.vanillaJs)();
};
var onLoad = function () {
    renderDefault();
    registerEventListeners();
};
var onUnload = function () {
    unregisterEventListeners();
};
var registerEventListeners = function () {
    console.log("register");
    toolSelect.addEventListener("change", handleToolSelect);
};
var unregisterEventListeners = function () {
    toolSelect.removeEventListener("change", handleToolSelect);
};
window.onload = onLoad;
window.onunload = onUnload;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzNDeUM7QUFDQTtBQUN6QztBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFhO0FBQ3JCLEtBQUs7QUFDTDtBQUNPO0FBQ1AsUUFBUSw4Q0FBSSxLQUFLLDhDQUFJLGFBQWEsOENBQUksdUJBQXVCLHVEQUFhO0FBQzFFLHVCQUF1Qix1REFBYTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05zRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1FQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1FQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy91dGlscy9jb25zdC50cyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvdmVyc2lvbi92YW5pbGxhanMvY3JlYXRlLnRzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy92ZXJzaW9uL3ZhbmlsbGFqcy9pbmRleC50cyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBEQVRBID0ge1xuICAgIHNlY3Rpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiZmVhdHVyZWRcIjogXCJ0cnVlXCIsXG4gICAgICAgICAgICBcImlkXCI6IFwidGVjaG5vbG9neS1pbnRyb1wiLFxuICAgICAgICAgICAgXCJjbGFzc1wiOiBcInNlY3Rpb24taW50cm9cIixcbiAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcIkJlZW4gYSBkZXZlbG9wZXIgZm9yIGEgZmV3IHllYXJzIG5vdywgYW5kIGhhdmUgYmVlbiBmb3J0dW5hdGUgZW5vdWdoIHRvIHdvcmsgd2l0aCBzb21lIG9mIHRoZSBtb3N0IHdpZGVseSBhZG9wdGVkIHRlY2hub2xvZ2llcyBpbiB0aGUgd29ybGQuIE15IGNvZGUgaXMgcnVubmluZyBvbiBhbGwgdHlwZXMgb2YgZGV2aWNlcywgYW5kIGl0IGhhcyByZW5kZXJlZCBvbiB0aGUgc2NyZWVuIG9mIHRob3VzYW5kcyBvZiB1c2Vycy4gSSB1bmRlcnN0YW5kIHRoYXQgc2F5aW5nIHRoYXQgSSBhbSBhIHNvZnR3YXJlIGRldmVsb3BlciBkb2VzIG5vdCBnaXZlIGEgZnVsbCBwaWN0dXJlIG9mIHdoYXQgSSBoYXZlIGJlZW4gd29ya2luZyB3aXRoIHNvIGJlbG93IGFyZSBzb21lIG9mIHRoZSB0ZWNobm9sb2dpZXMgSSB3b3JrIHdpdGggdGhlIG1vc3QgcHJvZmVzc2lvbmFsbHk6XCIsXG4gICAgICAgICAgICBcIm9yZGVyXCI6IDAsXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiV2hhdCB0ZWNobm9sb2dpZXMgZG8gSSB3b3JrIHdpdGg/XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJmZWF0dXJlZFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJpZFwiOiBcInJlYWN0LW5hdGl2ZVwiLFxuICAgICAgICAgICAgXCJsaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImlPU1wiLFxuICAgICAgICAgICAgICAgIFwiVFZPU1wiLFxuICAgICAgICAgICAgICAgIFwiQW5kcm9pZFwiLFxuICAgICAgICAgICAgICAgIFwiQW5kcm9pZFRWXCIsXG4gICAgICAgICAgICAgICAgXCJGaXJlVFZcIixcbiAgICAgICAgICAgICAgICBcIldlYk9TXCIsXG4gICAgICAgICAgICAgICAgXCJUaXplblwiLFxuICAgICAgICAgICAgICAgIFwiV2ViXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJPbmUgb2YgdGhlIHRlY2hub2xvZ2llcyBJIGFtIHNwZW5kaW5nIHRoZSBtb3N0IHRpbWUgd2l0aCB0aGVzZSBkYXlzIGlzIFJlYWN0IE5hdGl2ZS4gUmVhY3QgTmF0aXZlIGlzIGFuIGltcHJlc3NpdmUgZnJhbWV3b3JrIHRoYXQgbGV0cyB5b3UgdXNlIGxhbmd1YWdlcyBsaWtlIEphdmFTY3JpcHQsIFR5cGVTY3JpcHQsIEtvdGxpbiwgU3dpZnQsIGFuZCBjb3VwbGVzIHRoZW0gd2l0aCBSZWFjdCBzbyB0aGF0IHlvdSBjb3VsZCByZW5kZXIgd2ViIGxpa2UgYXBwcyBvbiBuYXRpdmUgcGxhdGZvcm1zLiBUaGUgbGFzdCBmZXcgeWVhcnMgaGFzIGJlZW4gYWxsIGFib3V0IHdvcmtpbmcgb24gY29kZWJhc2VzIHRoYXQgbGV2ZXJhZ2UgdGhlIHN0cmVuZ3RocyBvZiBSZWFjdCBOYXRpdmUuIExpa2UgY3JlYXRpbmcgYXBwcyB0aGF0IGNhbiB0YWtlIFJlYWN0IE5hdGl2ZSBhbmQgc2NhbGUgaXQgYWNyb3NzIG11bHRpcGxlIHBsYXRmb3Jtcy4gVGhlIHZlcnNhdGlsaXR5IG9mIHRoaXMgZnJhbWV3b3JrIGhhcyBnaXZlbiBtZSB0aGUgb3Bwb3J0dW5pdHkgdG8gZGV2ZWxvcCBvbiBzeXN0ZW1zIG9yIHBsYXRmb3JtcyBsaWtlOlwiLFxuICAgICAgICAgICAgXCJvcmRlclwiOiAxLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlJlYWN0IE5hdGl2ZVwiLFxuICAgICAgICAgICAgXCJsb2dvXCI6IFwiLi9hc3NldHMvcmVhY3QtaWNvbi5zdmdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcImZlYXR1cmVkXCI6IHRydWUsXG4gICAgICAgICAgICBcImlkXCI6IFwicmVhY3QtbmF0aXZlLWNvbnRpbnVlZFwiLFxuICAgICAgICAgICAgXCJsaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcIkphdmFTY3JpcHRcIixcbiAgICAgICAgICAgICAgICBcIlR5cGVTY3JpcHRcIixcbiAgICAgICAgICAgICAgICBcIktvdGxpblwiLFxuICAgICAgICAgICAgICAgIFwiU3dpZnRcIixcbiAgICAgICAgICAgICAgICBcIkplc3RcIixcbiAgICAgICAgICAgICAgICBcIlJhbWRhXCIsXG4gICAgICAgICAgICAgICAgXCJFc2xpbnRcIixcbiAgICAgICAgICAgICAgICBcIkVKU1wiLFxuICAgICAgICAgICAgICAgIFwiTm9kZVwiLFxuICAgICAgICAgICAgICAgIFwiTlBNXCIsXG4gICAgICAgICAgICAgICAgXCJZYXJuXCIsXG4gICAgICAgICAgICAgICAgXCJMZXJuYVwiLFxuICAgICAgICAgICAgICAgIFwiV2VicGFja1wiLFxuICAgICAgICAgICAgICAgIFwiQmFiZWxcIixcbiAgICAgICAgICAgICAgICBcIkJBU0hcIixcbiAgICAgICAgICAgICAgICBcIlB5dGhvblwiLFxuICAgICAgICAgICAgICAgIFwiQ2lyY2xlQ0lcIixcbiAgICAgICAgICAgICAgICBcIkF6dXJlIENJXCIsXG4gICAgICAgICAgICAgICAgXCJBcHBpdW1cIixcbiAgICAgICAgICAgICAgICBcIkFwcGxlU2NyaXB0XCIsXG4gICAgICAgICAgICAgICAgXCJBbmRyb2lkIFN0dWRpb1wiLFxuICAgICAgICAgICAgICAgIFwiWGNvZGVcIixcbiAgICAgICAgICAgICAgICBcIlZTQ29kZVwiLFxuICAgICAgICAgICAgICAgIFwiVmltXCIsXG4gICAgICAgICAgICAgICAgXCJBV1MgUzNcIixcbiAgICAgICAgICAgICAgICBcIkdvb2dsZSBBbmFseXRpY3NcIixcbiAgICAgICAgICAgICAgICBcIkZpcmViYXNlXCIsXG4gICAgICAgICAgICAgICAgXCJSdWJ5XCIsXG4gICAgICAgICAgICAgICAgXCJUaXplbiBTdHVkaW9cIixcbiAgICAgICAgICAgICAgICBcIkRvY2tlclwiLFxuICAgICAgICAgICAgICAgIFwiR2l0XCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJSZWFjdCBOYXRpdmUgaGFzIGJlZW4gb25lIG9mIHRoZSBtb3N0IHBvd2VyZnVsIGZyYW1ld29ya3MgaW4gbXkgdG9vbGJlbHQuIEl0IGhhcyBoZWxwZWQgbWUgc3BlZWQgdXAgdGhlIGRldmVsb3BtZW50IHByb2Nlc3MgYnkgYWxsb3dpbmcgbWUgdG8gd29yayBvbiB2YXJpb3VzIHBsYXRmb3JtcyBhdCB0aGUgc2FtZSB0aW1lLCBidXQgaXQgdGFrZXMgYSB2aWxsYWdlIHRvIGJ1aWxkIGFwcHMsIGFuZCBiZWxvdyBhcmUgc29tZSBvZiB0aGUgdG9vbHMgYW5kIHRlY2hub2xvZ2llcyBJIGhhdmUgdG8gdXRpbGl6ZSBldmVyeSBkYXkgdG8gYmUgYWJsZSB0byB3b3JrIHdpdGggUmVhY3QgTmF0aXZlLlwiLFxuICAgICAgICAgICAgXCJvcmRlclwiOiAyXG4gICAgICAgIH1cbiAgICBdLFxuICAgIHNvY2lhbDoge1xuICAgICAgICBcImVtYWlsXCI6IFwic2hlcndpbm9cIixcbiAgICAgICAgXCJnaXRodWJcIjogXCJzaGVyd2lub1wiLFxuICAgICAgICBcImluc3RhZ3JhbVwiOiBcInNoZXJ3aW5vaFwiLFxuICAgICAgICBcImxpbmtlZGluXCI6IFwic2hlcndpbm9cIixcbiAgICAgICAgXCJzdGFja292ZXJmbG93XCI6IDM1OTEyODQsXG4gICAgICAgIFwidHdpdHRlclwiOiBcInNoZXJ3aW5vaF9cIlxuICAgIH1cbn07XG4iLCIvLyBUaGVzZSBmaWxlcyBhcmUgYmVpbmcgbWVyZ2VkIGludG8gdG8gdGhlIGluZGV4LmpzIGZpbGUgaW4gcHVibGljXG5leHBvcnQgdmFyIGNyZWF0ZUxpc3QgPSBmdW5jdGlvbiAoc2VjdGlvbkRhdGEsIGlkKSB7XG4gICAgdmFyIGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgbGlzdC5pZCA9IGlkICsgXCItbGlzdFwiO1xuICAgIGxpc3QuY2xhc3NOYW1lID0gXCJzZWN0aW9uLWxpc3RcIjtcbiAgICBzZWN0aW9uRGF0YS5saXN0LmZvckVhY2goZnVuY3Rpb24gKGxpc3RJdGVtKSB7XG4gICAgICAgIHZhciBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBpdGVtLmNsYXNzTmFtZSA9IFwic2VjdGlvbi1pdGVtXCI7XG4gICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gbGlzdEl0ZW07XG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGxpc3Q7XG59O1xuZXhwb3J0IHZhciBjcmVhdGVUaXRsZSA9IGZ1bmN0aW9uIChzZWN0aW9uRGF0YSwgaWQpIHtcbiAgICB2YXIgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgdGl0bGUuaWQgPSBpZCArIFwiLXRpdGxlXCI7XG4gICAgdGl0bGUuY2xhc3NOYW1lID0gXCJzZWN0aW9uLXRpdGxlXCI7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gc2VjdGlvbkRhdGEudGl0bGU7XG4gICAgcmV0dXJuIHRpdGxlO1xufTtcbnZhciBtYWluQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbmV4cG9ydCB2YXIgY3JlYXRlU2VjdGlvbiA9IGZ1bmN0aW9uIChzZWN0aW9uRGF0YSkge1xuICAgIGlmIChzZWN0aW9uRGF0YSAmJiBzZWN0aW9uRGF0YS5mZWF0dXJlZCkge1xuICAgICAgICB2YXIgaWQgPSBzZWN0aW9uRGF0YSA9PT0gbnVsbCB8fCBzZWN0aW9uRGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VjdGlvbkRhdGEuaWQ7XG4gICAgICAgIHZhciBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgIHZhciB0aXRsZSA9IHNlY3Rpb25EYXRhLnRpdGxlICYmIGNyZWF0ZVRpdGxlKHNlY3Rpb25EYXRhLCBpZCk7XG4gICAgICAgIHZhciBtZXNzYWdlID0gc2VjdGlvbkRhdGEubWVzc2FnZSAmJiBjcmVhdGVNZXNzYWdlKHNlY3Rpb25EYXRhLCBpZCk7XG4gICAgICAgIHZhciBsaXN0ID0gc2VjdGlvbkRhdGEubGlzdCAmJiBjcmVhdGVMaXN0KHNlY3Rpb25EYXRhLCBpZCk7XG4gICAgICAgIHNlY3Rpb24uaWQgPSBpZDtcbiAgICAgICAgc2VjdGlvbi5jbGFzc05hbWUgPSBcImZsb2F0aW5nLXNlY3Rpb25cIjtcbiAgICAgICAgdGl0bGUgJiYgc2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIG1lc3NhZ2UgJiYgc2VjdGlvbi5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgICAgICAgbGlzdCAmJiBzZWN0aW9uLmFwcGVuZENoaWxkKGxpc3QpO1xuICAgICAgICBtYWluQm9keS5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgICB9XG59O1xuLy8gVGhlc2UgZmlsZXMgYXJlIGJlaW5nIG1lcmdlZCBpbnRvIHRvIHRoZSBpbmRleC5qcyBmaWxlIGluIHB1YmxpY1xuZXhwb3J0IHZhciBjcmVhdGVNZXNzYWdlID0gZnVuY3Rpb24gKHNlY3Rpb25EYXRhLCBpZCkge1xuICAgIHZhciBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbWVzc2FnZS5pZCA9IGlkICsgXCItbWVzc2FnZVwiO1xuICAgIG1lc3NhZ2UuY2xhc3NOYW1lID0gXCJzZWN0aW9uLW1lc3NhZ2VcIjtcbiAgICBtZXNzYWdlLmlubmVySFRNTCA9IHNlY3Rpb25EYXRhLm1lc3NhZ2U7XG4gICAgcmV0dXJuIG1lc3NhZ2U7XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlU2VjdGlvbiB9IGZyb20gXCIuL2NyZWF0ZVwiO1xuaW1wb3J0IHsgREFUQSB9IGZyb20gXCIuLi8uLi91dGlscy9jb25zdFwiO1xudmFyIHJlbmRlclNlY3Rpb25zID0gZnVuY3Rpb24gKHNlY3Rpb25zKSB7XG4gICAgY29uc29sZS5sb2coXCJyZW5kZXJTZWN0aW9uc1wiLCBzZWN0aW9ucyk7XG4gICAgc2VjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoc2VjdGlvbikge1xuICAgICAgICBjcmVhdGVTZWN0aW9uKHNlY3Rpb24pO1xuICAgIH0pO1xufTtcbmV4cG9ydCB2YXIgdmFuaWxsYUpzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChEQVRBICYmIChEQVRBID09PSBudWxsIHx8IERBVEEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IERBVEEuc2VjdGlvbnMpKSB7XG4gICAgICAgIHJlbmRlclNlY3Rpb25zKERBVEEuc2VjdGlvbnMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5pbmZvKFwiTWlzc2luZyBzb21lIGRhdGEgdG8gcmVuZGVyIHRoaXMgcGFnZVwiKTtcbiAgICB9XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB2YW5pbGxhSnMgfSBmcm9tIFwiLi92ZXJzaW9uL3ZhbmlsbGFqcy9pbmRleFwiO1xudmFyIHRvb2xTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvb2wtc2VsZWN0XCIpO1xudmFyIGhhbmRsZVRvb2xTZWxlY3QgPSBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlVG9vbFNlbGVjdFwiLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgdmFyIHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICBjYXNlIFwidmFuaWxsYWpzXCI6XG4gICAgICAgICAgICB2YW5pbGxhSnMoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwidnVlanNcIjpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9hZCB2dWVqcyBwYWdlXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJyZWFjdGpzXCI6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvYWQgcmVhY3RqcyBwYWdlXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJhbmd1bGFyXCI6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvYWQgYW5ndWxhciBwYWdlXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJoYW5kbGViYXJzXCI6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvYWQgaGFuZGxlYmFycyBwYWdlXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJuZXh0XCI6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvYWQgbmV4dCBwYWdlXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJyZW1peFwiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2FkIHJlbWl4IHBhZ2VcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInN2ZWx0ZVwiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2FkIHN2ZWx0ZSBwYWdlXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJtaXRocmlsbFwiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2FkIG1pdGhyaWxsIHBhZ2VcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImVyYlwiOlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2FkIGVyYiBwYWdlXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvYWQgZGVmYXVsdCBwYWdlXCIsIHZhbHVlKTtcbiAgICAgICAgICAgIHJlbmRlckRlZmF1bHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn07XG52YXIgcmVuZGVyRGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YW5pbGxhSnMoKTtcbn07XG52YXIgb25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIHJlbmRlckRlZmF1bHQoKTtcbiAgICByZWdpc3RlckV2ZW50TGlzdGVuZXJzKCk7XG59O1xudmFyIG9uVW5sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIHVucmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xufTtcbnZhciByZWdpc3RlckV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJcIik7XG4gICAgdG9vbFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhhbmRsZVRvb2xTZWxlY3QpO1xufTtcbnZhciB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdG9vbFNlbGVjdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhhbmRsZVRvb2xTZWxlY3QpO1xufTtcbndpbmRvdy5vbmxvYWQgPSBvbkxvYWQ7XG53aW5kb3cub251bmxvYWQgPSBvblVubG9hZDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==