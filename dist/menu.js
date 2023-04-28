/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Menu/components/Color.tsx":
/*!***************************************!*\
  !*** ./src/Menu/components/Color.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "underlineColors": () => (/* binding */ underlineColors),
/* harmony export */   "wordsToUnderline": () => (/* binding */ wordsToUnderline)
/* harmony export */ });
const wordsToUnderline = ['bug', 'develuper', 'high-quality'];
const underlineColors = ['green', '#ff0000', '#ff0000'];


/***/ }),

/***/ "./src/Menu/components/Magic.tsx":
/*!***************************************!*\
  !*** ./src/Menu/components/Magic.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Magic": () => (/* binding */ Magic)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// Magic.tsx

const Magic = ({ text, words, colors }) => {
    const highlightWords = (inputText, wordsToHighlight, highlightColors) => {
        return inputText.split(" ").map((word, index) => {
            const highlightIndex = wordsToHighlight.indexOf(word);
            if (highlightIndex !== -1) {
                const textDecoration = highlightColors[highlightIndex] === '#ff0000' ? 'line-through' : 'none';
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), { key: index },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { style: {
                            color: highlightColors[highlightIndex],
                            textDecoration: textDecoration,
                        } }, word),
                    " "));
            }
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), { key: index },
                word,
                " ");
        });
    };
    const highlightedText = highlightWords(text, words, colors);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, highlightedText);
};


/***/ }),

/***/ "./src/Menu/index.tsx":
/*!****************************!*\
  !*** ./src/Menu/index.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/Menu/menu.tsx");



function init() {
    const appContainer = document.createElement('div');
    document.body.appendChild(appContainer);
    if (!appContainer) {
        throw new Error('Can not find AppContainer');
    }
    react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_menu__WEBPACK_IMPORTED_MODULE_2__["default"], null), appContainer);
}
init();


/***/ }),

/***/ "./src/Menu/menu.tsx":
/*!***************************!*\
  !*** ./src/Menu/menu.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/tailwind.css */ "./src/assets/tailwind.css");
/* harmony import */ var _components_Magic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Magic */ "./src/Menu/components/Magic.tsx");
/* harmony import */ var _components_Color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Color */ "./src/Menu/components/Color.tsx");




const menu = () => {
    const [selectedText, setSelectedText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [textboxText, setTextboxText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        chrome.runtime.sendMessage({ type: 'getSelectedText' }, (response) => {
            setSelectedText(response.selectedText || '');
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        chrome.runtime.sendMessage({ type: 'getTextboxText' }, (response) => {
            setTextboxText(response.textboxText || '');
        });
    }, []);
    const text = textboxText;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'w-full h-screen' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fixed top-0 left-0 w-full h-16 bg-white" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white h-full flex items-center ml-4" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "bg-white border-2 text-white py-2 px-4 mb-2 hover:bg-gray-300 flex items-center justify-center", title: "Rewrite" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: "rewrite.png", alt: "icon 1", className: "h-3" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "bg-white border-2 text-white py-2 px-4 mb-2 hover:bg-gray-300 flex items-center justify-center", title: "Casual tone" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: "sneakers.png", alt: "icon 2", className: "h-3" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "bg-white border-2 text-white py-2 px-4 mb-2 hover:bg-gray-300 flex items-center justify-center", title: "Formal tone" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: "suitcase.png", alt: "icon 3", className: "h-3" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "bg-white border-2 text-white py-2 px-4 mb-2 hover:bg-gray-300 flex items-center justify-center", title: "Shorten" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: "collapse.png", alt: "icon 4", className: "h-3" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "bg-white border-2 text-white py-2 px-4 mb-2 hover:bg-gray-300 flex items-center justify-center", title: "Expand" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: "scalability.png", alt: "icon 5", className: "h-3" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "bg-white border-2 text-white py-2 px-4 mb-2 hover:bg-gray-300 flex items-center justify-center", title: "Grammer" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: "book.png", alt: "icon 6", className: "h-3" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "bg-white border-2 text-white py-2 px-4 mb-2 hover:bg-gray-300 flex items-center justify-center", title: "settings" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: "settings.png", alt: "icon 6", className: "h-3" })))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "h-80vh overflow-y-auto" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-gray-700 font-medium text-base p-4 pt-16 text-justify " },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Magic__WEBPACK_IMPORTED_MODULE_2__.Magic, { text: text, words: _components_Color__WEBPACK_IMPORTED_MODULE_3__.wordsToUnderline, colors: _components_Color__WEBPACK_IMPORTED_MODULE_3__.underlineColors }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "fixed bottom-0 left-0 w-full h-16 bg-white" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex justify-between items-center py-4 px-6" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "bg-white border-2 text-white py-2 px-4 mb-2 hover:bg-gray-300 flex items-center justify-center", title: "previous" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: "left-arrow.png", alt: "icon 1", className: "h-3" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: 'text-black px-4' }, "Prev")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "bg-white border-2 text-white py-2 px-4 mb-2 hover:bg-gray-300 flex items-center justify-center", title: "next" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: 'text-black px-4 ' }, "Next"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: "next.png", alt: "icon 1", className: "h-3" })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"menu": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkreact_js_chrome_extension"] = self["webpackChunkreact_js_chrome_extension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react-dom_index_js","src_assets_tailwind_css"], () => (__webpack_require__("./src/Menu/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=menu.js.map