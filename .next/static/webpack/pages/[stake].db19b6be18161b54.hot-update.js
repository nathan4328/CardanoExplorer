"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[stake]",{

/***/ "./src/pages/tokens.js":
/*!*****************************!*\
  !*** ./src/pages/tokens.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tokens; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fts */ \"./src/pages/fts.js\");\n/* harmony import */ var _nfts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nfts */ \"./src/pages/nfts.js\");\n/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prices */ \"./src/pages/prices.js\");\n/* harmony import */ var _summary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./summary */ \"./src/pages/summary.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fts__WEBPACK_IMPORTED_MODULE_2__]);\n_fts__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Tokens(param) {\n    let { tokens  } = param;\n    _s();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [showNfts, setShowNfts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [nftActive, setNftActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [ftActive, setFtActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    function setPriceData(data) {\n        setPrices(data);\n    }\n    function displayNfts() {\n        setFtActive(false);\n        setNftActive(true);\n        setShowNfts(true);\n    }\n    function displayFts() {\n        setNftActive(false);\n        setFtActive(true);\n        setShowNfts(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"wallet\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prices__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                data: setPriceData\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokens.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_summary__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                tokens: tokens,\n                prices: prices\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokens.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"setting-nav\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: nftActive ? \"active\" : \"inactive\",\n                                onClick: displayNfts,\n                                children: \"NFTs\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokens.js\",\n                                lineNumber: 38,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: ftActive ? \"active\" : \"inactive\",\n                                onClick: displayFts,\n                                children: \"FTs\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokens.js\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokens.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"setting-button\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokens.js\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokens.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"setting-button\",\n                            children: \"Filter\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokens.js\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokens.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokens.js\",\n                lineNumber: 36,\n                columnNumber: 14\n            }, this),\n            showNfts ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nfts__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                tokens: tokens\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokens.js\",\n                lineNumber: 48,\n                columnNumber: 26\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                tokens: tokens,\n                prices: prices\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokens.js\",\n                lineNumber: 48,\n                columnNumber: 55\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokens.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, this);\n}\n_s(Tokens, \"ZJckaYkhLCOppS0wpBDclKnmfZw=\");\n_c = Tokens;\nvar _c;\n$RefreshReg$(_c, \"Tokens\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdG9rZW5zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ1Q7QUFDRTtBQUNJO0FBQ0U7QUFFakIsU0FBU0ssT0FBUSxLQUFRLEVBQUU7UUFBVixFQUFDQyxPQUFNLEVBQUMsR0FBUjs7SUFFNUIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQTtJQUNwQyxNQUFNLENBQUNTLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQUMsS0FBSztJQUM5QyxNQUFNLENBQUNXLFdBQVdDLGFBQWEsR0FBR1osK0NBQVFBLENBQUMsS0FBSztJQUNoRCxNQUFNLENBQUNhLFVBQVVDLFlBQVksR0FBR2QsK0NBQVFBLENBQUMsSUFBSTtJQUU3QyxTQUFTZSxhQUFhQyxJQUFJLEVBQUM7UUFDdkJSLFVBQVVRO0lBQ2Q7SUFFQSxTQUFTQyxjQUFhO1FBQ2xCSCxZQUFZLEtBQUs7UUFDakJGLGFBQWEsSUFBSTtRQUNqQkYsWUFBWSxJQUFJO0lBQ3BCO0lBRUEsU0FBU1EsYUFBWTtRQUNqQk4sYUFBYSxLQUFLO1FBQ2xCRSxZQUFZLElBQUk7UUFDaEJKLFlBQVksS0FBSztJQUNyQjtJQUlBLHFCQUNJLDhEQUFDUztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ2pCLCtDQUFNQTtnQkFBQ2EsTUFBT0Q7Ozs7OzswQkFDZiw4REFBQ1gsZ0RBQU9BO2dCQUFDRSxRQUFVQTtnQkFBUUMsUUFBVUE7Ozs7OzswQkFDcEMsOERBQUNjO2dCQUFJRCxXQUFVOztrQ0FDWiw4REFBQ0Q7OzBDQUNHLDhEQUFDRztnQ0FBT0YsV0FBWVQsWUFBWSxXQUFXLFVBQVU7Z0NBQUdZLFNBQVNOOzBDQUFhOzs7Ozs7MENBQzlFLDhEQUFDSztnQ0FBT0YsV0FBWVAsV0FBVyxXQUFXLFVBQVU7Z0NBQUVVLFNBQVNMOzBDQUFZOzs7Ozs7Ozs7Ozs7a0NBRS9FLDhEQUFDQztrQ0FDRyw0RUFBQ0c7NEJBQU9GLFdBQVU7c0NBQWtCOzs7Ozs7Ozs7OztrQ0FFeEMsOERBQUNEO2tDQUNHLDRFQUFDRzs0QkFBT0YsV0FBVTtzQ0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR3pDWCx5QkFBVyw4REFBQ1AsNkNBQUlBO2dCQUFDSSxRQUFVQTs7Ozs7cUNBQWEsOERBQUNMLDRDQUFHQTtnQkFBQ0ssUUFBVUE7Z0JBQVFDLFFBQVVBOzs7OztvQkFBUzs7Ozs7OztBQUdoRyxDQUFDO0dBNUN1QkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Rva2Vucy5qcz8xZTc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRnRzIGZyb20gXCIuL2Z0c1wiO1xuaW1wb3J0IE5mdHMgZnJvbSBcIi4vbmZ0c1wiO1xuaW1wb3J0IFByaWNlcyBmcm9tIFwiLi9wcmljZXNcIjtcbmltcG9ydCBTdW1tYXJ5IGZyb20gXCIuL3N1bW1hcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9rZW5zICh7dG9rZW5zfSkge1xuXG4gICAgY29uc3QgW3ByaWNlcywgc2V0UHJpY2VzXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW3Nob3dOZnRzLCBzZXRTaG93TmZ0c10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW25mdEFjdGl2ZSwgc2V0TmZ0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZnRBY3RpdmUsIHNldEZ0QWN0aXZlXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gICAgZnVuY3Rpb24gc2V0UHJpY2VEYXRhKGRhdGEpe1xuICAgICAgICBzZXRQcmljZXMoZGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheU5mdHMoKXtcbiAgICAgICAgc2V0RnRBY3RpdmUoZmFsc2UpO1xuICAgICAgICBzZXROZnRBY3RpdmUodHJ1ZSk7XG4gICAgICAgIHNldFNob3dOZnRzKHRydWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlGdHMoKXtcbiAgICAgICAgc2V0TmZ0QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgc2V0RnRBY3RpdmUodHJ1ZSk7XG4gICAgICAgIHNldFNob3dOZnRzKGZhbHNlKTtcbiAgICB9XG5cblxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbGV0XCI+XG4gICAgICAgICAgICA8UHJpY2VzIGRhdGEgPXtzZXRQcmljZURhdGF9Lz5cbiAgICAgICAgICAgIDxTdW1tYXJ5IHRva2VucyA9IHt0b2tlbnN9IHByaWNlcyA9IHtwcmljZXN9Lz5cbiAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInNldHRpbmctbmF2XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9IHtuZnRBY3RpdmUgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZSd9ICBvbkNsaWNrPXtkaXNwbGF5TmZ0c30+TkZUczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ge2Z0QWN0aXZlID8gJ2FjdGl2ZScgOiAnaW5hY3RpdmUnfSBvbkNsaWNrPXtkaXNwbGF5RnRzfT5GVHM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNldHRpbmctYnV0dG9uXCIgPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2V0dGluZy1idXR0b25cIj5GaWx0ZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICB7c2hvd05mdHMgPyA8TmZ0cyB0b2tlbnMgPSB7dG9rZW5zfSAvPiA6IDxGdHMgdG9rZW5zID0ge3Rva2Vuc30gcHJpY2VzID0ge3ByaWNlc30vPn1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkZ0cyIsIk5mdHMiLCJQcmljZXMiLCJTdW1tYXJ5IiwiVG9rZW5zIiwidG9rZW5zIiwicHJpY2VzIiwic2V0UHJpY2VzIiwic2hvd05mdHMiLCJzZXRTaG93TmZ0cyIsIm5mdEFjdGl2ZSIsInNldE5mdEFjdGl2ZSIsImZ0QWN0aXZlIiwic2V0RnRBY3RpdmUiLCJzZXRQcmljZURhdGEiLCJkYXRhIiwiZGlzcGxheU5mdHMiLCJkaXNwbGF5RnRzIiwiZGl2IiwiY2xhc3NOYW1lIiwibmF2IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/tokens.js\n"));

/***/ })

});