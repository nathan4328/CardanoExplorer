"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[query]",{

/***/ "./pages/[query].js":
/*!**************************!*\
  !*** ./pages/[query].js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _walletData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./walletData */ \"./pages/walletData.js\");\n/* harmony import */ var _searchbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./searchbar */ \"./pages/searchbar.js\");\n/* harmony import */ var _walletButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./walletButton */ \"./pages/walletButton.js\");\n/* harmony import */ var _policyData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./policyData */ \"./pages/policyData.js\");\n/* harmony import */ var _assetData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assetData */ \"./pages/assetData.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_walletData__WEBPACK_IMPORTED_MODULE_3__, _walletButton__WEBPACK_IMPORTED_MODULE_5__, _assetData__WEBPACK_IMPORTED_MODULE_7__]);\n([_walletData__WEBPACK_IMPORTED_MODULE_3__, _walletButton__WEBPACK_IMPORTED_MODULE_5__, _assetData__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Query() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { query , stake  } = router.query;\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [walletText, setWalletText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"Connect\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        function checkIfPolicyOrAsset() {\n            // Cardano stake address pattern\n            const stakeAddressPattern = /^(stake1[a-zA-Z0-9]{48,98})$/;\n            // Cardano token policy ID pattern\n            const policyIdPattern = /^[a-fA-F0-9]{56}$/;\n            // Cardano token asset ID pattern\n            const assetIdPattern = /^[a-fA-F0-9]{64}$/;\n            if (query) {\n                let item = query;\n                if (item.startsWith(\"stake\") || item.startsWith(\"$\")) {\n                    setDisplay(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_walletData__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        stake: query\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/pages/[query].js\",\n                        lineNumber: 32,\n                        columnNumber: 24\n                    }, this));\n                } else if (item.length == 56) {\n                    setDisplay(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_policyData__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        policy: query\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/pages/[query].js\",\n                        lineNumber: 35,\n                        columnNumber: 24\n                    }, this));\n                } else {\n                    setDisplay(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_assetData__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        assetId: query\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/pages/[query].js\",\n                        lineNumber: 38,\n                        columnNumber: 24\n                    }, this));\n                }\n            }\n        }\n        checkIfPolicyOrAsset();\n    }, [\n        query,\n        stake\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: display\n    }, void 0, false, {\n        fileName: \"/Users/nathan/Desktop/explorer/pages/[query].js\",\n        lineNumber: 46,\n        columnNumber: 12\n    }, this);\n}\n_s(Query, \"PxR8dQbF7trLqtULbQaH7a3OLCk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Query;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Query);\nvar _c;\n$RefreshReg$(_c, \"Query\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bcXVlcnldLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0k7QUFDTjtBQUNGO0FBQ007QUFDSjtBQUNGO0FBR3BDLFNBQVNRLFFBQU87O0lBRVosTUFBTUMsU0FBU1Qsc0RBQVNBO0lBRXhCLE1BQU0sRUFBQ1UsTUFBSyxFQUFFQyxNQUFLLEVBQUMsR0FBR0YsT0FBT0MsS0FBSztJQUNuQyxNQUFNLENBQUNFLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBO0lBQ3RDLE1BQU0sQ0FBQ1ksWUFBWUMsY0FBYyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUU3Q0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLFNBQVNlLHVCQUF1QjtZQUM5QixnQ0FBZ0M7WUFDaEMsTUFBTUMsc0JBQXNCO1lBQzVCLGtDQUFrQztZQUNsQyxNQUFNQyxrQkFBa0I7WUFDeEIsaUNBQWlDO1lBQ2pDLE1BQU1DLGlCQUFpQjtZQUV2QixJQUFJVCxPQUFPO2dCQUVULElBQUlVLE9BQU9WO2dCQUVYLElBQUdVLEtBQUtDLFVBQVUsQ0FBQyxZQUFZRCxLQUFLQyxVQUFVLENBQUMsTUFBSztvQkFDbERSLHlCQUFXLDhEQUFDVixtREFBVUE7d0JBQUNRLE9BQU9EOzs7Ozs7Z0JBQ2hDLE9BQ0ssSUFBR1UsS0FBS0UsTUFBTSxJQUFJLElBQUc7b0JBQ3hCVCx5QkFBVyw4REFBQ1AsbURBQVVBO3dCQUFDaUIsUUFBUWI7Ozs7OztnQkFDakMsT0FDSTtvQkFDRkcseUJBQVcsOERBQUNOLGtEQUFTQTt3QkFBQ2lCLFNBQVNkOzs7Ozs7Z0JBQ2pDLENBQUM7WUFDSCxDQUFDO1FBQ0g7UUFDQU07SUFDRixHQUFHO1FBQUNOO1FBQU9DO0tBQU07SUFHakIscUJBQU8sOERBQUNjO2tCQUFLYjs7Ozs7O0FBRWpCO0dBdENTSjs7UUFFVVIsa0RBQVNBOzs7S0FGbkJROztBQThEVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bcXVlcnldLmpzPzIxZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgV2FsbGV0RGF0YSBmcm9tIFwiLi93YWxsZXREYXRhXCI7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuL3NlYXJjaGJhclwiO1xuaW1wb3J0IFdhbGxldEJ1dHRvbiBmcm9tIFwiLi93YWxsZXRCdXR0b25cIjtcbmltcG9ydCBQb2xpY3lEYXRhIGZyb20gXCIuL3BvbGljeURhdGFcIjtcbmltcG9ydCBBc3NldERhdGEgZnJvbSBcIi4vYXNzZXREYXRhXCI7XG5cblxuZnVuY3Rpb24gUXVlcnkoKXtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3Qge3F1ZXJ5LCBzdGFrZX0gPSByb3V0ZXIucXVlcnk7XG4gICAgY29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbd2FsbGV0VGV4dCwgc2V0V2FsbGV0VGV4dF0gPSB1c2VTdGF0ZSgnQ29ubmVjdCcpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZnVuY3Rpb24gY2hlY2tJZlBvbGljeU9yQXNzZXQoKSB7XG4gICAgICAgIC8vIENhcmRhbm8gc3Rha2UgYWRkcmVzcyBwYXR0ZXJuXG4gICAgICAgIGNvbnN0IHN0YWtlQWRkcmVzc1BhdHRlcm4gPSAvXihzdGFrZTFbYS16QS1aMC05XXs0OCw5OH0pJC87XG4gICAgICAgIC8vIENhcmRhbm8gdG9rZW4gcG9saWN5IElEIHBhdHRlcm5cbiAgICAgICAgY29uc3QgcG9saWN5SWRQYXR0ZXJuID0gL15bYS1mQS1GMC05XXs1Nn0kLztcbiAgICAgICAgLy8gQ2FyZGFubyB0b2tlbiBhc3NldCBJRCBwYXR0ZXJuXG4gICAgICAgIGNvbnN0IGFzc2V0SWRQYXR0ZXJuID0gL15bYS1mQS1GMC05XXs2NH0kLztcbiAgICBcbiAgICAgICAgaWYgKHF1ZXJ5KSB7XG5cbiAgICAgICAgICBsZXQgaXRlbSA9IHF1ZXJ5O1xuXG4gICAgICAgICAgaWYoaXRlbS5zdGFydHNXaXRoKCdzdGFrZScpIHx8IGl0ZW0uc3RhcnRzV2l0aCgnJCcpKXtcbiAgICAgICAgICAgIHNldERpc3BsYXkoPFdhbGxldERhdGEgc3Rha2U9e3F1ZXJ5fSAvPik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoaXRlbS5sZW5ndGggPT0gNTYpe1xuICAgICAgICAgICAgc2V0RGlzcGxheSg8UG9saWN5RGF0YSBwb2xpY3k9e3F1ZXJ5fS8+KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHNldERpc3BsYXkoPEFzc2V0RGF0YSBhc3NldElkPXtxdWVyeX0gLz4pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2hlY2tJZlBvbGljeU9yQXNzZXQoKTtcbiAgICB9LCBbcXVlcnksIHN0YWtlXSk7XG4gICAgXG5cbiAgICByZXR1cm4oPGRpdj57ZGlzcGxheX1cbiAgICAgICAgICA8L2Rpdj4pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgdGhlIGR5bmFtaWMgcGF0aHMgZm9yIHRoZSBwYWdlLlxuICAgIC8vIEluIHRoaXMgY2FzZSwgd2UgaGF2ZSBhIGxpc3Qgb2YgYWxsIHBvc3NpYmxlIG51bWJlcnMgYmV0d2VlbiAxIGFuZCA1IHRoYXQgd2UgY2FuIHVzZSB0byBjcmVhdGUgdGhlIHBhdGhzXG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGhzOiBbXSxcbiAgICAgIGZhbGxiYWNrOiB0cnVlXG4gICAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGZldGNoZXMgdGhlIGRhdGEgZm9yIHRoZSBwYWdlLlxuICAgIC8vIEluIHRoaXMgY2FzZSwgd2UgZG9uJ3QgbmVlZCB0byBmZXRjaCBhbnkgZGF0YSBiZWNhdXNlIHRoZSBudW1iZXIgaXMgYWxyZWFkeSBhdmFpbGFibGUgaW4gdGhlIHBhcmFtcyBvYmplY3QuXG4gICAgY29uc3QgcXVlcnk9IHBhcmFtcy5xdWVyeTtcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBxdWVyeSxcbiAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXJ5OyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIldhbGxldERhdGEiLCJTZWFyY2hCYXIiLCJXYWxsZXRCdXR0b24iLCJQb2xpY3lEYXRhIiwiQXNzZXREYXRhIiwiUXVlcnkiLCJyb3V0ZXIiLCJxdWVyeSIsInN0YWtlIiwiZGlzcGxheSIsInNldERpc3BsYXkiLCJ3YWxsZXRUZXh0Iiwic2V0V2FsbGV0VGV4dCIsImNoZWNrSWZQb2xpY3lPckFzc2V0Iiwic3Rha2VBZGRyZXNzUGF0dGVybiIsInBvbGljeUlkUGF0dGVybiIsImFzc2V0SWRQYXR0ZXJuIiwiaXRlbSIsInN0YXJ0c1dpdGgiLCJsZW5ndGgiLCJwb2xpY3kiLCJhc3NldElkIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[query].js\n"));

/***/ })

});