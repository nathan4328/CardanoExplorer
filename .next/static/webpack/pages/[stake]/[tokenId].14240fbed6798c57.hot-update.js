"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[stake]/[tokenId]",{

/***/ "./src/pages/[stake]/[tokenId].js":
/*!****************************************!*\
  !*** ./src/pages/[stake]/[tokenId].js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header */ \"./src/pages/header.js\");\n/* harmony import */ var _tokenData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tokenData */ \"./src/pages/tokenData.js\");\n/* harmony import */ var _walletButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../walletButton */ \"./src/pages/walletButton.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_header__WEBPACK_IMPORTED_MODULE_3__, _walletButton__WEBPACK_IMPORTED_MODULE_5__]);\n([_header__WEBPACK_IMPORTED_MODULE_3__, _walletButton__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction TokenPage() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { stake , tokenId  } = router.query;\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleSearch = async (event)=>{\n        event.preventDefault();\n        // Use the `router.push` method to navigate to the dynamic page with the entered number as the URL parameter.\n        if (searchQuery.startsWith(\"add\")) {\n            let stakeAddress = await getStakeFromAddressKoios(searchQuery);\n            router.push(\"/\".concat(stakeAddress));\n        } else if (searchQuery.startsWith(\"stake\") || searchQuery.startsWith(\"$\")) {\n            router.push(\"/\".concat(searchQuery));\n        } else {\n            router.push(\"/token/\".concat(searchQuery));\n        }\n    };\n    async function getStakeFromAddressKoios(address) {\n        const req = await fetch(\"https://api.koios.rest/api/v0/address_info\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"_addresses\": [\n                    address\n                ]\n            })\n        });\n        const res = await req.json();\n        return res[0].stake_address;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"main-label\",\n                        children: \"Explorer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/[stake]/[tokenId].js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"searchForm\",\n                        onSubmit: handleSearch,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"search-input\",\n                                placeholder: \"Search for an address or a specific token...\",\n                                alt: \"no image\",\n                                value: searchQuery,\n                                onChange: (event)=>setSearchQuery(event.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/[stake]/[tokenId].js\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"search-button\",\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/[stake]/[tokenId].js\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/[stake]/[tokenId].js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_walletButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        stake: stake\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/[stake]/[tokenId].js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/[stake]/[tokenId].js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tokenData__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                tokenId: tokenId\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/[stake]/[tokenId].js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/[stake]/[tokenId].js\",\n        lineNumber: 48,\n        columnNumber: 7\n    }, this);\n}\n_s(TokenPage, \"JbivL2BM6NmsD/1Vf3SyNbZjqaM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = TokenPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TokenPage);\nvar _c;\n$RefreshReg$(_c, \"TokenPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW3N0YWtlXS9bdG9rZW5JZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0k7QUFDYjtBQUNNO0FBQ007QUFHM0MsU0FBU00sWUFBWTs7SUFFakIsTUFBTUMsU0FBU1Asc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVEsTUFBSyxFQUFFQyxRQUFPLEVBQUUsR0FBR0YsT0FBT0csS0FBSztJQUN2QyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1YsK0NBQVFBLENBQUM7SUFHL0MsTUFBTVcsZUFBZSxPQUFRQyxRQUFVO1FBQ3JDQSxNQUFNQyxjQUFjO1FBQ3BCLDZHQUE2RztRQUM3RyxJQUFHSixZQUFZSyxVQUFVLENBQUMsUUFBTztZQUMvQixJQUFJQyxlQUFlLE1BQU1DLHlCQUF5QlA7WUFDbERKLE9BQU9ZLElBQUksQ0FBQyxJQUFpQixPQUFiRjtRQUNsQixPQUNLLElBQUlOLFlBQVlLLFVBQVUsQ0FBQyxZQUFZTCxZQUFZSyxVQUFVLENBQUMsTUFBSztZQUN0RVQsT0FBT1ksSUFBSSxDQUFDLElBQWdCLE9BQVpSO1FBQ2xCLE9BQ0k7WUFDRkosT0FBT1ksSUFBSSxDQUFDLFVBQXNCLE9BQVpSO1FBQ3hCLENBQUM7SUFDSDtJQUVBLGVBQWVPLHlCQUF5QkUsT0FBTyxFQUFDO1FBQzlDLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSw4Q0FBOEM7WUFDcEVDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNuQixjQUFjO29CQUFFUDtpQkFDZjtZQUNIO1FBQ0Y7UUFFQSxNQUFNUSxNQUFNLE1BQU1QLElBQUlRLElBQUk7UUFDMUIsT0FBT0QsR0FBRyxDQUFDLEVBQUUsQ0FBQ0UsYUFBYTtJQUM3QjtJQUdBLHFCQUNFLDhEQUFDQzs7MEJBQ0QsOERBQUNDOztrQ0FDQyw4REFBQ0M7d0JBQU1DLFdBQVU7a0NBQWE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLRCxXQUFVO3dCQUFhRSxVQUFVdkI7OzBDQUNyQyw4REFBQ3dCO2dDQUFNQyxNQUFLO2dDQUFPSixXQUFZO2dDQUFlSyxhQUFZO2dDQUErQ0MsS0FBSztnQ0FBV0MsT0FBTzlCO2dDQUFhK0IsVUFBVSxDQUFDNUIsUUFBVUYsZUFBZUUsTUFBTTZCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7OzBDQUNuTSw4REFBQ0c7Z0NBQU9OLE1BQUs7Z0NBQVNKLFdBQVU7MENBQWdCOzs7Ozs7Ozs7Ozs7a0NBRWxELDhEQUFDN0IscURBQVlBO3dCQUFDRyxPQUFTQTs7Ozs7Ozs7Ozs7OzBCQUV2Qiw4REFBQ0osa0RBQVNBO2dCQUFDSyxTQUFXQTs7Ozs7Ozs7Ozs7O0FBRzVCO0dBcERPSDs7UUFFVU4sa0RBQVNBOzs7S0FGbkJNOztBQTRFUCwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvW3N0YWtlXS9bdG9rZW5JZF0uanM/ZTQ1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2hlYWRlclwiO1xuaW1wb3J0IFRva2VuRGF0YSBmcm9tIFwiLi4vdG9rZW5EYXRhXCI7XG5pbXBvcnQgV2FsbGV0QnV0dG9uIGZyb20gXCIuLi93YWxsZXRCdXR0b25cIjtcblxuXG5mdW5jdGlvbiBUb2tlblBhZ2UoKSB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IHN0YWtlLCB0b2tlbklkIH0gPSByb3V0ZXIucXVlcnk7XG4gICAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG5cblxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jICAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAvLyBVc2UgdGhlIGByb3V0ZXIucHVzaGAgbWV0aG9kIHRvIG5hdmlnYXRlIHRvIHRoZSBkeW5hbWljIHBhZ2Ugd2l0aCB0aGUgZW50ZXJlZCBudW1iZXIgYXMgdGhlIFVSTCBwYXJhbWV0ZXIuXG4gICAgICBpZihzZWFyY2hRdWVyeS5zdGFydHNXaXRoKCdhZGQnKSl7XG4gICAgICAgIGxldCBzdGFrZUFkZHJlc3MgPSBhd2FpdCBnZXRTdGFrZUZyb21BZGRyZXNzS29pb3Moc2VhcmNoUXVlcnkpO1xuICAgICAgICByb3V0ZXIucHVzaChgLyR7c3Rha2VBZGRyZXNzfWApO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoc2VhcmNoUXVlcnkuc3RhcnRzV2l0aCgnc3Rha2UnKSB8fCBzZWFyY2hRdWVyeS5zdGFydHNXaXRoKCckJykpe1xuICAgICAgICByb3V0ZXIucHVzaChgLyR7c2VhcmNoUXVlcnl9YCk7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICByb3V0ZXIucHVzaChgL3Rva2VuLyR7c2VhcmNoUXVlcnl9YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0U3Rha2VGcm9tQWRkcmVzc0tvaW9zKGFkZHJlc3Mpe1xuICAgICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmtvaW9zLnJlc3QvYXBpL3YwL2FkZHJlc3NfaW5mbycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBcIl9hZGRyZXNzZXNcIjogWyBhZGRyZXNzXG4gICAgICAgICAgXVxuICAgICAgICB9KVxuICAgICAgfSk7XG4gIFxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICAgIHJldHVybiByZXNbMF0uc3Rha2VfYWRkcmVzcztcbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1haW4tbGFiZWxcIj5FeHBsb3JlcjwvbGFiZWw+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNlYXJjaEZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU2VhcmNofT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWUgPSBcInNlYXJjaC1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBhbiBhZGRyZXNzIG9yIGEgc3BlY2lmaWMgdG9rZW4uLi5cIiBhbHQ9ICdubyBpbWFnZScgdmFsdWU9e3NlYXJjaFF1ZXJ5fSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTZWFyY2hRdWVyeShldmVudC50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwic2VhcmNoLWJ1dHRvblwiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxXYWxsZXRCdXR0b24gc3Rha2UgPSB7c3Rha2V9Lz5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8VG9rZW5EYXRhIHRva2VuSWQgPSB7dG9rZW5JZH0vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gICAgLy8gVGhpcyBmdW5jdGlvbiBjcmVhdGVzIHRoZSBkeW5hbWljIHBhdGhzIGZvciB0aGUgcGFnZS5cbiAgICAvLyBJbiB0aGlzIGNhc2UsIHdlIGhhdmUgYSBsaXN0IG9mIGFsbCBwb3NzaWJsZSBudW1iZXJzIGJldHdlZW4gMSBhbmQgNSB0aGF0IHdlIGNhbiB1c2UgdG8gY3JlYXRlIHRoZSBwYXRoc1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICBwYXRoczogW10sXG4gICAgICBmYWxsYmFjazogdHJ1ZVxuICAgIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gICAgLy8gVGhpcyBmdW5jdGlvbiBmZXRjaGVzIHRoZSBkYXRhIGZvciB0aGUgcGFnZS5cbiAgICAvLyBJbiB0aGlzIGNhc2UsIHdlIGRvbid0IG5lZWQgdG8gZmV0Y2ggYW55IGRhdGEgYmVjYXVzZSB0aGUgbnVtYmVyIGlzIGFscmVhZHkgYXZhaWxhYmxlIGluIHRoZSBwYXJhbXMgb2JqZWN0LlxuICAgIGNvbnN0IHRva2VuSWQgPSBwYXJhbXMudG9rZW5JZDtcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICB0b2tlbklkXG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBUb2tlblBhZ2U7Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZGVyIiwiVG9rZW5EYXRhIiwiV2FsbGV0QnV0dG9uIiwiVG9rZW5QYWdlIiwicm91dGVyIiwic3Rha2UiLCJ0b2tlbklkIiwicXVlcnkiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwiaGFuZGxlU2VhcmNoIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0YXJ0c1dpdGgiLCJzdGFrZUFkZHJlc3MiLCJnZXRTdGFrZUZyb21BZGRyZXNzS29pb3MiLCJwdXNoIiwiYWRkcmVzcyIsInJlcSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwianNvbiIsInN0YWtlX2FkZHJlc3MiLCJkaXYiLCJoZWFkZXIiLCJsYWJlbCIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYWx0IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/[stake]/[tokenId].js\n"));

/***/ })

});