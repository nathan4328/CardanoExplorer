"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/token/[policy]",{

/***/ "./src/pages/token/[policy].js":
/*!*************************************!*\
  !*** ./src/pages/token/[policy].js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _policyData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../policyData */ \"./src/pages/policyData.js\");\n/* harmony import */ var _searchbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../searchbar */ \"./src/pages/searchbar.js\");\n/* harmony import */ var _tokenData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tokenData */ \"./src/pages/tokenData.js\");\n/* harmony import */ var _walletButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../walletButton */ \"./src/pages/walletButton.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_walletButton__WEBPACK_IMPORTED_MODULE_6__]);\n_walletButton__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Policy() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { policy , stake  } = router.query;\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (policy != null) {\n            console.log(policy);\n            console.log(stake);\n            if (policy.length == 56) {\n                setDisplay(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_policyData__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    policy: policy,\n                    stake: stake\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/token/[policy].js\",\n                    lineNumber: 20,\n                    columnNumber: 22\n                }, this));\n            } else if (policy.length < 56) {\n                setDisplay(\"invalid policy Id or assetID\");\n            } else {\n                // is asset + policy = assetId\n                setDisplay(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tokenData__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    assetId: policy,\n                    stake: stake\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/token/[policy].js\",\n                    lineNumber: 27,\n                    columnNumber: 22\n                }, this));\n            }\n        }\n    }, [\n        policy,\n        stake\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"main-label\",\n                        children: \"✥ Explorer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/token/[policy].js\",\n                        lineNumber: 35,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_searchbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/token/[policy].js\",\n                        lineNumber: 36,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_walletButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        stake: \"Connect\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/token/[policy].js\",\n                        lineNumber: 37,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/token/[policy].js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            display\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/token/[policy].js\",\n        lineNumber: 33,\n        columnNumber: 12\n    }, this);\n}\n_s(Policy, \"QwpqdVIyUyXDpaiua4RlvmihU2E=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Policy;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Policy);\nvar _c;\n$RefreshReg$(_c, \"Policy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdG9rZW4vW3BvbGljeV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNJO0FBQ0w7QUFDRjtBQUNBO0FBQ007QUFFM0MsU0FBU08sU0FBUTs7SUFFYixNQUFNQyxTQUFTUixzREFBU0E7SUFFeEIsTUFBTSxFQUFDUyxPQUFNLEVBQUVDLE1BQUssRUFBQyxHQUFHRixPQUFPRyxLQUFLO0lBQ3BDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUE7SUFFdENELGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFHUSxVQUFVLElBQUksRUFBQztZQUNoQkssUUFBUUMsR0FBRyxDQUFDTjtZQUNaSyxRQUFRQyxHQUFHLENBQUNMO1lBQ1osSUFBR0QsT0FBT08sTUFBTSxJQUFJLElBQUc7Z0JBQ3JCSCx5QkFBVyw4REFBQ1YsbURBQVVBO29CQUFDTSxRQUFRQTtvQkFBUUMsT0FBU0E7Ozs7OztZQUNsRCxPQUNLLElBQUdELE9BQU9PLE1BQU0sR0FBRyxJQUFHO2dCQUN6QkgsV0FBVztZQUNiLE9BQ0k7Z0JBQ0YsOEJBQThCO2dCQUM5QkEseUJBQVcsOERBQUNSLGtEQUFTQTtvQkFBQ1ksU0FBV1I7b0JBQVFDLE9BQVFBOzs7Ozs7WUFDbkQsQ0FBQztRQUNILENBQUM7SUFFSCxHQUFHO1FBQUNEO1FBQVFDO0tBQU07SUFFbEIscUJBQU8sOERBQUNROzswQkFDTiw4REFBQ0M7O2tDQUNELDhEQUFDQzt3QkFBTUMsV0FBVTtrQ0FBYTs7Ozs7O2tDQUM5Qiw4REFBQ2pCLGtEQUFTQTs7Ozs7a0NBQ1YsOERBQUNFLHFEQUFZQTt3QkFBQ0ksT0FBUzs7Ozs7Ozs7Ozs7O1lBQ2ZFOzs7Ozs7O0FBRWQ7R0FoQ1NMOztRQUVVUCxrREFBU0E7OztLQUZuQk87O0FBd0RULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy90b2tlbi9bcG9saWN5XS5qcz84NmM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBvbGljeURhdGEgZnJvbSBcIi4uL3BvbGljeURhdGFcIjtcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4uL3NlYXJjaGJhclwiO1xuaW1wb3J0IFRva2VuRGF0YSBmcm9tIFwiLi4vdG9rZW5EYXRhXCI7XG5pbXBvcnQgV2FsbGV0QnV0dG9uIGZyb20gXCIuLi93YWxsZXRCdXR0b25cIjtcblxuZnVuY3Rpb24gUG9saWN5KCl7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IHtwb2xpY3ksIHN0YWtlfSA9IHJvdXRlci5xdWVyeTtcbiAgICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmKHBvbGljeSAhPSBudWxsKXtcbiAgICAgICAgY29uc29sZS5sb2cocG9saWN5KTtcbiAgICAgICAgY29uc29sZS5sb2coc3Rha2UpO1xuICAgICAgICBpZihwb2xpY3kubGVuZ3RoID09IDU2KXtcbiAgICAgICAgICBzZXREaXNwbGF5KDxQb2xpY3lEYXRhIHBvbGljeT17cG9saWN5fSBzdGFrZSA9IHtzdGFrZX0vPik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihwb2xpY3kubGVuZ3RoIDwgNTYpe1xuICAgICAgICAgIHNldERpc3BsYXkoJ2ludmFsaWQgcG9saWN5IElkIG9yIGFzc2V0SUQnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIC8vIGlzIGFzc2V0ICsgcG9saWN5ID0gYXNzZXRJZFxuICAgICAgICAgIHNldERpc3BsYXkoPFRva2VuRGF0YSBhc3NldElkID0ge3BvbGljeX0gc3Rha2U9IHtzdGFrZX0vPik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0sIFtwb2xpY3ksIHN0YWtlXSlcblxuICAgIHJldHVybig8ZGl2PiAgICAgIFxuICAgICAgPGhlYWRlcj5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYWluLWxhYmVsXCI+4pylIEV4cGxvcmVyPC9sYWJlbD5cbiAgICAgIDxTZWFyY2hCYXIgLz5cbiAgICAgIDxXYWxsZXRCdXR0b24gc3Rha2UgPSB7J0Nvbm5lY3QnfS8+XG4gICAgPC9oZWFkZXI+e2Rpc3BsYXl9XG4gICAgPC9kaXY+KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gICAgLy8gVGhpcyBmdW5jdGlvbiBjcmVhdGVzIHRoZSBkeW5hbWljIHBhdGhzIGZvciB0aGUgcGFnZS5cbiAgICAvLyBJbiB0aGlzIGNhc2UsIHdlIGhhdmUgYSBsaXN0IG9mIGFsbCBwb3NzaWJsZSBudW1iZXJzIGJldHdlZW4gMSBhbmQgNSB0aGF0IHdlIGNhbiB1c2UgdG8gY3JlYXRlIHRoZSBwYXRoc1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICBwYXRoczogW10sXG4gICAgICBmYWxsYmFjazogdHJ1ZVxuICAgIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gICAgLy8gVGhpcyBmdW5jdGlvbiBmZXRjaGVzIHRoZSBkYXRhIGZvciB0aGUgcGFnZS5cbiAgICAvLyBJbiB0aGlzIGNhc2UsIHdlIGRvbid0IG5lZWQgdG8gZmV0Y2ggYW55IGRhdGEgYmVjYXVzZSB0aGUgbnVtYmVyIGlzIGFscmVhZHkgYXZhaWxhYmxlIGluIHRoZSBwYXJhbXMgb2JqZWN0LlxuICAgIGNvbnN0IHBvbGljeT0gcGFyYW1zLnBvbGljeTtcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBwb2xpY3lcbiAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvbGljeTsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQb2xpY3lEYXRhIiwiU2VhcmNoQmFyIiwiVG9rZW5EYXRhIiwiV2FsbGV0QnV0dG9uIiwiUG9saWN5Iiwicm91dGVyIiwicG9saWN5Iiwic3Rha2UiLCJxdWVyeSIsImRpc3BsYXkiLCJzZXREaXNwbGF5IiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImFzc2V0SWQiLCJkaXYiLCJoZWFkZXIiLCJsYWJlbCIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/token/[policy].js\n"));

/***/ })

});