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

/***/ "./src/pages/[stake].js":
/*!******************************!*\
  !*** ./src/pages/[stake].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _walletButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./walletButton */ \"./src/pages/walletButton.js\");\n/* harmony import */ var _walletData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./walletData */ \"./src/pages/walletData.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_walletButton__WEBPACK_IMPORTED_MODULE_3__, _walletData__WEBPACK_IMPORTED_MODULE_4__]);\n([_walletButton__WEBPACK_IMPORTED_MODULE_3__, _walletData__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction StakePage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { stake  } = router.query;\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleSearch = async (event)=>{\n        event.preventDefault();\n        // Use the `router.push` method to navigate to the dynamic page with the entered number as the URL parameter.\n        if (searchQuery.startsWith(\"add\")) {\n            let stakeAddress = await getStakeFromAddressKoios(searchQuery);\n            router.push(\"/\".concat(stakeAddress));\n        } else if (searchQuery.startsWith(\"stake\") || searchQuery.startsWith(\"$\")) {\n            router.push(\"/\".concat(searchQuery));\n        } else {\n            router.push(\"/token/\".concat(searchQuery));\n        }\n    };\n    async function getStakeFromAddressKoios(address) {\n        const req = await fetch(\"https://api.koios.rest/api/v0/address_info\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"_addresses\": [\n                    address\n                ]\n            })\n        });\n        const res = await req.json();\n        return res[0].stake_address;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"main-label\",\n                        children: \"✥ Explorer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/[stake].js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"searchForm\",\n                        onSubmit: handleSearch,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"search-input\",\n                                placeholder: \"Search for an address or a specific token...\",\n                                value: searchQuery,\n                                onChange: (event)=>setSearchQuery(event.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/[stake].js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"search-button\",\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/[stake].js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/[stake].js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_walletButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        stake: stake\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/[stake].js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/[stake].js\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"tokenList\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_walletData__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    stakeAddress: stake\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/[stake].js\",\n                    lineNumber: 54,\n                    columnNumber: 36\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/[stake].js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/[stake].js\",\n        lineNumber: 45,\n        columnNumber: 7\n    }, this);\n}\n_s(StakePage, \"JbivL2BM6NmsD/1Vf3SyNbZjqaM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = StakePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StakePage);\nvar _c;\n$RefreshReg$(_c, \"StakePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW3N0YWtlXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNQO0FBQ1M7QUFDSjtBQUd0QyxTQUFTSSxZQUFZOztJQUVqQixNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFTSxNQUFLLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUM5QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBLENBQUM7SUFFL0MsTUFBTVMsZUFBZSxPQUFRQyxRQUFVO1FBQ3JDQSxNQUFNQyxjQUFjO1FBQ3BCLDZHQUE2RztRQUM3RyxJQUFHSixZQUFZSyxVQUFVLENBQUMsUUFBTztZQUMvQixJQUFJQyxlQUFlLE1BQU1DLHlCQUF5QlA7WUFDbERILE9BQU9XLElBQUksQ0FBQyxJQUFpQixPQUFiRjtRQUNsQixPQUNLLElBQUlOLFlBQVlLLFVBQVUsQ0FBQyxZQUFZTCxZQUFZSyxVQUFVLENBQUMsTUFBSztZQUN0RVIsT0FBT1csSUFBSSxDQUFDLElBQWdCLE9BQVpSO1FBQ2xCLE9BQ0k7WUFDRkgsT0FBT1csSUFBSSxDQUFDLFVBQTJCLE9BQVpSO1FBQzdCLENBQUM7SUFDSDtJQUVBLGVBQWVPLHlCQUF5QkUsT0FBTyxFQUFDO1FBQzlDLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSw4Q0FBOEM7WUFDcEVDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNuQixjQUFjO29CQUFFUDtpQkFDZjtZQUNIO1FBQ0Y7UUFFQSxNQUFNUSxNQUFNLE1BQU1QLElBQUlRLElBQUk7UUFDMUIsT0FBT0QsR0FBRyxDQUFDLEVBQUUsQ0FBQ0UsYUFBYTtJQUM3QjtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDOztrQ0FDRCw4REFBQ0M7d0JBQU1DLFdBQVU7a0NBQWE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLRCxXQUFVO3dCQUFhRSxVQUFVdkI7OzBDQUNyQyw4REFBQ3dCO2dDQUFNQyxNQUFLO2dDQUFPSixXQUFZO2dDQUFlSyxhQUFZO2dDQUErQ0MsT0FBTzdCO2dDQUFhOEIsVUFBVSxDQUFDM0IsUUFBVUYsZUFBZUUsTUFBTTRCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7OzBDQUNuTCw4REFBQ0c7Z0NBQU9MLE1BQUs7Z0NBQVNKLFdBQVU7MENBQWdCOzs7Ozs7Ozs7Ozs7a0NBRWxELDhEQUFDN0IscURBQVlBO3dCQUFDSSxPQUFTQTs7Ozs7Ozs7Ozs7OzBCQUV2Qiw4REFBQ3NCO2dCQUFJRyxXQUFVOzBCQUFZLDRFQUFDNUIsbURBQVVBO29CQUFDVyxjQUFjUjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHN0Q7R0FsRFNGOztRQUVVSixrREFBU0E7OztLQUZuQkk7O0FBNkVQLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9bc3Rha2VdLmpzPzJkOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFdhbGxldEJ1dHRvbiBmcm9tIFwiLi93YWxsZXRCdXR0b25cIjtcbmltcG9ydCBXYWxsZXREYXRhIGZyb20gXCIuL3dhbGxldERhdGFcIjtcblxuXG5mdW5jdGlvbiBTdGFrZVBhZ2UoKSB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IHN0YWtlIH0gPSByb3V0ZXIucXVlcnk7XG4gICAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gVXNlIHRoZSBgcm91dGVyLnB1c2hgIG1ldGhvZCB0byBuYXZpZ2F0ZSB0byB0aGUgZHluYW1pYyBwYWdlIHdpdGggdGhlIGVudGVyZWQgbnVtYmVyIGFzIHRoZSBVUkwgcGFyYW1ldGVyLlxuICAgICAgaWYoc2VhcmNoUXVlcnkuc3RhcnRzV2l0aCgnYWRkJykpe1xuICAgICAgICBsZXQgc3Rha2VBZGRyZXNzID0gYXdhaXQgZ2V0U3Rha2VGcm9tQWRkcmVzc0tvaW9zKHNlYXJjaFF1ZXJ5KTtcbiAgICAgICAgcm91dGVyLnB1c2goYC8ke3N0YWtlQWRkcmVzc31gKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHNlYXJjaFF1ZXJ5LnN0YXJ0c1dpdGgoJ3N0YWtlJykgfHwgc2VhcmNoUXVlcnkuc3RhcnRzV2l0aCgnJCcpKXtcbiAgICAgICAgcm91dGVyLnB1c2goYC8ke3NlYXJjaFF1ZXJ5fWApO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgcm91dGVyLnB1c2goYC8keyd0b2tlbid9LyR7c2VhcmNoUXVlcnl9YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0U3Rha2VGcm9tQWRkcmVzc0tvaW9zKGFkZHJlc3Mpe1xuICAgICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmtvaW9zLnJlc3QvYXBpL3YwL2FkZHJlc3NfaW5mbycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBcIl9hZGRyZXNzZXNcIjogWyBhZGRyZXNzXG4gICAgICAgICAgXVxuICAgICAgICB9KVxuICAgICAgfSk7XG4gIFxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICAgIHJldHVybiByZXNbMF0uc3Rha2VfYWRkcmVzcztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1haW4tbGFiZWxcIj7inKUgRXhwbG9yZXI8L2xhYmVsPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzZWFyY2hGb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVNlYXJjaH0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lID0gXCJzZWFyY2gtaW5wdXRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgYW4gYWRkcmVzcyBvciBhIHNwZWNpZmljIHRva2VuLi4uXCIgdmFsdWU9e3NlYXJjaFF1ZXJ5fSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTZWFyY2hRdWVyeShldmVudC50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwic2VhcmNoLWJ1dHRvblwiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxXYWxsZXRCdXR0b24gc3Rha2UgPSB7c3Rha2V9Lz5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuTGlzdFwiPjxXYWxsZXREYXRhIHN0YWtlQWRkcmVzcz17c3Rha2V9Lz48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gICAgLy8gVGhpcyBmdW5jdGlvbiBjcmVhdGVzIHRoZSBkeW5hbWljIHBhdGhzIGZvciB0aGUgcGFnZS5cbiAgICAvLyBJbiB0aGlzIGNhc2UsIHdlIGhhdmUgYSBsaXN0IG9mIGFsbCBwb3NzaWJsZSBudW1iZXJzIGJldHdlZW4gMSBhbmQgNSB0aGF0IHdlIGNhbiB1c2UgdG8gY3JlYXRlIHRoZSBwYXRoc1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICBwYXRoczogW10sXG4gICAgICBmYWxsYmFjazogdHJ1ZVxuICAgIH07XG4gIH1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGZldGNoZXMgdGhlIGRhdGEgZm9yIHRoZSBwYWdlLlxuICAgIC8vIEluIHRoaXMgY2FzZSwgd2UgZG9uJ3QgbmVlZCB0byBmZXRjaCBhbnBueSBkYXRhIGJlY2F1c2UgdGhlIG51bWJlciBpcyBhbHJlYWR5IGF2YWlsYWJsZSBpbiB0aGUgcGFyYW1zIG9iamVjdC5cbiAgICBsZXQgc3Rha2UgPSBwYXJhbXMuc3Rha2U7XG4gIFxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBzdGFrZVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgU3Rha2VQYWdlOyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIldhbGxldEJ1dHRvbiIsIldhbGxldERhdGEiLCJTdGFrZVBhZ2UiLCJyb3V0ZXIiLCJzdGFrZSIsInF1ZXJ5Iiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsImhhbmRsZVNlYXJjaCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdGFydHNXaXRoIiwic3Rha2VBZGRyZXNzIiwiZ2V0U3Rha2VGcm9tQWRkcmVzc0tvaW9zIiwicHVzaCIsImFkZHJlc3MiLCJyZXEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImpzb24iLCJzdGFrZV9hZGRyZXNzIiwiZGl2IiwiaGVhZGVyIiwibGFiZWwiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/[stake].js\n"));

/***/ })

});