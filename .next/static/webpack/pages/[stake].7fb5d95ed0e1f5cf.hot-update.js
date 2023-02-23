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

/***/ "./src/pages/summary.js":
/*!******************************!*\
  !*** ./src/pages/summary.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Summary; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Summary(props) {\n    _s();\n    const [walletData, setWalletData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        balance: null,\n        total_rewards: null,\n        available_rewards: null,\n        projects: null,\n        tokens: null,\n        nfts: null,\n        fts: null\n    });\n    const [currency, setCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"ada\",\n        value: 1,\n        symbol: \"₳\"\n    });\n    const [adaBalance, setAdaBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [tokenBalance, setTokenBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getBalance = async ()=>{\n            if (props.tokens.stake != null) {\n                let stakeAddress = props.tokens.stake;\n                let stakeData = await getAccountInfoFromKoios(stakeAddress);\n                setWalletData({\n                    balance: stakeData[0].total_balance,\n                    projects: props.tokens.projectNumber,\n                    tokens: props.tokens.tokenNumber,\n                    nfts: props.tokens.nfts.length,\n                    fts: props.tokens.fts.length\n                });\n                if (props.prices != null) {\n                    setCurrency(props.prices.currency);\n                    let currency = props.prices.currency.value;\n                    let _balance = stakeData[0].total_balance / 1000000;\n                    let value = (currency * _balance).toFixed(2);\n                    let tokenBalance = getTokenBalance(props.tokens.fts);\n                    let tokenValue = (currency * tokenBalance).toFixed(2);\n                    setAdaBalance(value);\n                    setTokenBalance(tokenValue);\n                }\n            }\n        };\n        getBalance();\n    }, [\n        props\n    ]);\n    function getTokenBalance(fts) {\n        let total = 0;\n        for (const element of fts){\n            let token = element[0];\n            let price = token.prices.current * 1 / props.prices.adaUSD;\n            let value = 0;\n            if (price != -1) {\n                value = price * (token.quantity / 1000000);\n            }\n            total = total + value;\n        }\n        return total;\n    }\n    async function getAccountInfoFromKoios(stakeAddress) {\n        const req = await fetch(\"https://api.koios.rest/api/v0/account_info\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"_stake_addresses\": [\n                    stakeAddress\n                ]\n            })\n        });\n        const res = await req.json();\n        return res;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"summary\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-item\",\n                children: [\n                    \"Ada Value: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"currency\",\n                                children: currency.symbol\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                                lineNumber: 69,\n                                columnNumber: 51\n                            }, this),\n                            \" \",\n                            adaBalance\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                        lineNumber: 69,\n                        columnNumber: 28\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-item\",\n                children: [\n                    \"Token Value: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"currency\",\n                                children: currency.symbol\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                                lineNumber: 72,\n                                columnNumber: 53\n                            }, this),\n                            \" \",\n                            tokenBalance\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                        lineNumber: 72,\n                        columnNumber: 30\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-item\",\n                children: [\n                    \"Tokens:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: walletData.tokens\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                        lineNumber: 75,\n                        columnNumber: 24\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-item\",\n                children: [\n                    \"Projects:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: [\n                            \" \",\n                            walletData.projects\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                        lineNumber: 78,\n                        columnNumber: 26\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-item\",\n                children: [\n                    \"NFTs:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: [\n                            \" \",\n                            walletData.nfts\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                        lineNumber: 81,\n                        columnNumber: 22\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-item\",\n                children: [\n                    \"FTs:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: [\n                            \" \",\n                            walletData.fts\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                        lineNumber: 84,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n        lineNumber: 67,\n        columnNumber: 9\n    }, this);\n}\n_s(Summary, \"dOPgxNhU4VO1BMFzV6fG79ifwho=\");\n_c = Summary;\nvar _c;\n$RefreshReg$(_c, \"Summary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc3VtbWFyeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJDO0FBRTVCLFNBQVNFLFFBQVFDLEtBQUssRUFBQzs7SUFFbEMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdKLCtDQUFRQSxDQUFDO1FBQUNLLFNBQVMsSUFBSTtRQUFFQyxlQUFlLElBQUk7UUFBR0MsbUJBQW1CLElBQUk7UUFBRUMsVUFBVSxJQUFJO1FBQUVDLFFBQVEsSUFBSTtRQUFFQyxNQUFNLElBQUk7UUFBRUMsS0FBSSxJQUFJO0lBQUE7SUFDOUosTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdiLCtDQUFRQSxDQUFDO1FBQUNjLE1BQU07UUFBT0MsT0FBTztRQUFHQyxRQUFRO0lBQUc7SUFDNUUsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdsQiwrQ0FBUUE7SUFDNUMsTUFBTSxDQUFDbUIsY0FBY0MsZ0JBQWdCLEdBQUdwQiwrQ0FBUUE7SUFFaERELGdEQUFTQSxDQUFDLElBQU07UUFDWixNQUFNc0IsYUFBYSxVQUFZO1lBQzNCLElBQUduQixNQUFNTyxNQUFNLENBQUNhLEtBQUssSUFBSSxJQUFJLEVBQUM7Z0JBQzFCLElBQUlDLGVBQWVyQixNQUFNTyxNQUFNLENBQUNhLEtBQUs7Z0JBQ3JDLElBQUlFLFlBQVksTUFBTUMsd0JBQXdCRjtnQkFDOUNuQixjQUFjO29CQUFDQyxTQUFTbUIsU0FBUyxDQUFDLEVBQUUsQ0FBQ0UsYUFBYTtvQkFBRWxCLFVBQVVOLE1BQU1PLE1BQU0sQ0FBQ2tCLGFBQWE7b0JBQ25GbEIsUUFBUVAsTUFBTU8sTUFBTSxDQUFDbUIsV0FBVztvQkFBRWxCLE1BQU1SLE1BQU1PLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDbUIsTUFBTTtvQkFBRWxCLEtBQUtULE1BQU1PLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDa0IsTUFBTTtnQkFBQTtnQkFDbkcsSUFBRzNCLE1BQU00QixNQUFNLElBQUksSUFBSSxFQUFDO29CQUNwQmpCLFlBQVlYLE1BQU00QixNQUFNLENBQUNsQixRQUFRO29CQUNqQyxJQUFJQSxXQUFXVixNQUFNNEIsTUFBTSxDQUFDbEIsUUFBUSxDQUFDRyxLQUFLO29CQUMxQyxJQUFJZ0IsV0FBV1AsU0FBUyxDQUFDLEVBQUUsQ0FBQ0UsYUFBYSxHQUFDO29CQUMxQyxJQUFJWCxRQUFRLENBQUNILFdBQVNtQixRQUFPLEVBQUdDLE9BQU8sQ0FBQztvQkFFeEMsSUFBSWIsZUFBZWMsZ0JBQWdCL0IsTUFBTU8sTUFBTSxDQUFDRSxHQUFHO29CQUNuRCxJQUFJdUIsYUFBYSxDQUFDdEIsV0FBV08sWUFBVyxFQUFHYSxPQUFPLENBQUM7b0JBQ25EZCxjQUFjSDtvQkFDZEssZ0JBQWdCYztnQkFDcEIsQ0FBQztZQUNMLENBQUM7UUFDTDtRQUNBYjtJQUNKLEdBQUU7UUFBQ25CO0tBQU07SUFFVCxTQUFTK0IsZ0JBQWdCdEIsR0FBRyxFQUFDO1FBQ3pCLElBQUl3QixRQUFRO1FBQ1osS0FBSSxNQUFNQyxXQUFXekIsSUFBSTtZQUVyQixJQUFJMEIsUUFBUUQsT0FBTyxDQUFDLEVBQUU7WUFDdEIsSUFBSUUsUUFBUUQsTUFBTVAsTUFBTSxDQUFDUyxPQUFPLEdBQUcsSUFBRXJDLE1BQU00QixNQUFNLENBQUNVLE1BQU07WUFDeEQsSUFBSXpCLFFBQVE7WUFDWixJQUFHdUIsU0FBUyxDQUFDLEdBQUU7Z0JBQ1h2QixRQUFRLFFBQVVzQixDQUFBQSxNQUFNSSxRQUFRLEdBQUMsT0FBTTtZQUMzQyxDQUFDO1lBQ0ROLFFBQVFBLFFBQVFwQjtRQUNwQjtRQUVBLE9BQU9vQjtJQUNYO0lBRUEsZUFBZVYsd0JBQXdCRixZQUFZLEVBQUM7UUFDaEQsTUFBTW1CLE1BQU0sTUFBTUMsTUFBTSw4Q0FBOEM7WUFDaEVDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNuQixvQkFBb0I7b0JBQ2xCekI7aUJBQ0Q7WUFDSDtRQUNGO1FBRUosTUFBTTBCLE1BQU0sTUFBTVAsSUFBSVEsSUFBSTtRQUMxQixPQUFPRDtJQUNYO0lBRUEscUJBQ0ksOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTs7b0JBQWU7a0NBQ2YsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FBUSw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQVl4QyxTQUFTSSxNQUFNOzs7Ozs7NEJBQU87NEJBQUVDOzs7Ozs7Ozs7Ozs7OzBCQUV6Riw4REFBQ2tDO2dCQUFJQyxXQUFVOztvQkFBZTtrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUFRLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FBWXhDLFNBQVNJLE1BQU07Ozs7Ozs0QkFBTzs0QkFBRUc7Ozs7Ozs7Ozs7Ozs7MEJBRTNGLDhEQUFDZ0M7Z0JBQUlDLFdBQVU7O29CQUFlO2tDQUNuQiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQVNqRCxXQUFXTSxNQUFNOzs7Ozs7Ozs7Ozs7MEJBRXBELDhEQUFDMEM7Z0JBQUlDLFdBQVU7O29CQUFlO2tDQUNqQiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzRCQUFROzRCQUFFakQsV0FBV0ssUUFBUTs7Ozs7Ozs7Ozs7OzswQkFFekQsOERBQUMyQztnQkFBSUMsV0FBVTs7b0JBQWU7a0NBQ3JCLDhEQUFDRDt3QkFBSUMsV0FBVTs7NEJBQVE7NEJBQUVqRCxXQUFXTyxJQUFJOzs7Ozs7Ozs7Ozs7OzBCQUVqRCw4REFBQ3lDO2dCQUFJQyxXQUFVOztvQkFBZTtrQ0FDdEIsOERBQUNEO3dCQUFJQyxXQUFVOzs0QkFBUTs0QkFBRWpELFdBQVdRLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0QsQ0FBQztHQXJGdUJWO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9zdW1tYXJ5LmpzP2ZmYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1bW1hcnkocHJvcHMpe1xuXG4gICAgY29uc3QgW3dhbGxldERhdGEsIHNldFdhbGxldERhdGFdID0gdXNlU3RhdGUoe2JhbGFuY2U6IG51bGwsIHRvdGFsX3Jld2FyZHM6IG51bGwsICBhdmFpbGFibGVfcmV3YXJkczogbnVsbCwgcHJvamVjdHM6IG51bGwsIHRva2VuczogbnVsbCwgbmZ0czogbnVsbCwgZnRzOm51bGx9KTtcbiAgICBjb25zdCBbY3VycmVuY3ksIHNldEN1cnJlbmN5XSA9IHVzZVN0YXRlKHtuYW1lOiAnYWRhJywgdmFsdWU6IDEsIHN5bWJvbDogJ+KCsyd9KVxuICAgIGNvbnN0IFthZGFCYWxhbmNlLCBzZXRBZGFCYWxhbmNlXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW3Rva2VuQmFsYW5jZSwgc2V0VG9rZW5CYWxhbmNlXSA9IHVzZVN0YXRlKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgaWYocHJvcHMudG9rZW5zLnN0YWtlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGxldCBzdGFrZUFkZHJlc3MgPSBwcm9wcy50b2tlbnMuc3Rha2U7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWtlRGF0YSA9IGF3YWl0IGdldEFjY291bnRJbmZvRnJvbUtvaW9zKHN0YWtlQWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgc2V0V2FsbGV0RGF0YSh7YmFsYW5jZTogc3Rha2VEYXRhWzBdLnRvdGFsX2JhbGFuY2UsIHByb2plY3RzOiBwcm9wcy50b2tlbnMucHJvamVjdE51bWJlciwgXG4gICAgICAgICAgICAgICAgICAgICB0b2tlbnM6IHByb3BzLnRva2Vucy50b2tlbk51bWJlciwgbmZ0czogcHJvcHMudG9rZW5zLm5mdHMubGVuZ3RoLCBmdHM6IHByb3BzLnRva2Vucy5mdHMubGVuZ3RofSlcbiAgICAgICAgICAgICAgICBpZihwcm9wcy5wcmljZXMgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbmN5KHByb3BzLnByaWNlcy5jdXJyZW5jeSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW5jeSA9IHByb3BzLnByaWNlcy5jdXJyZW5jeS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IF9iYWxhbmNlID0gc3Rha2VEYXRhWzBdLnRvdGFsX2JhbGFuY2UvMTAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gKGN1cnJlbmN5Kl9iYWxhbmNlKS50b0ZpeGVkKDIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbkJhbGFuY2UgPSBnZXRUb2tlbkJhbGFuY2UocHJvcHMudG9rZW5zLmZ0cyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2tlblZhbHVlID0gKGN1cnJlbmN5ICogdG9rZW5CYWxhbmNlKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgICAgICBzZXRBZGFCYWxhbmNlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VG9rZW5CYWxhbmNlKHRva2VuVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnZXRCYWxhbmNlKCk7XG4gICAgfSxbcHJvcHNdKVxuXG4gICAgZnVuY3Rpb24gZ2V0VG9rZW5CYWxhbmNlKGZ0cyl7XG4gICAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICAgIGZvcihjb25zdCBlbGVtZW50IG9mIGZ0cyl7XG5cbiAgICAgICAgICAgIGxldCB0b2tlbiA9IGVsZW1lbnRbMF07XG4gICAgICAgICAgICBsZXQgcHJpY2UgPSB0b2tlbi5wcmljZXMuY3VycmVudCAqIDEvcHJvcHMucHJpY2VzLmFkYVVTRDtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IDA7XG4gICAgICAgICAgICBpZihwcmljZSAhPSAtMSl7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSAocHJpY2UpKiAodG9rZW4ucXVhbnRpdHkvMTAwMDAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b3RhbCA9IHRvdGFsICsgdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdG90YWw7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0QWNjb3VudEluZm9Gcm9tS29pb3Moc3Rha2VBZGRyZXNzKXtcbiAgICAgICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmtvaW9zLnJlc3QvYXBpL3YwL2FjY291bnRfaW5mbycsIHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBcIl9zdGFrZV9hZGRyZXNzZXNcIjogW1xuICAgICAgICAgICAgICAgICAgc3Rha2VBZGRyZXNzXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXEuanNvbigpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBBZGEgVmFsdWU6IDxkaXYgY2xhc3NOYW1lPVwidmFsdWVcIj48ZGl2IGNsYXNzTmFtZT1cImN1cnJlbmN5XCI+e2N1cnJlbmN5LnN5bWJvbH08L2Rpdj4ge2FkYUJhbGFuY2V9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgVG9rZW4gVmFsdWU6IDxkaXYgY2xhc3NOYW1lPVwidmFsdWVcIj48ZGl2IGNsYXNzTmFtZT1cImN1cnJlbmN5XCI+e2N1cnJlbmN5LnN5bWJvbH08L2Rpdj4ge3Rva2VuQmFsYW5jZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBUb2tlbnM6PGRpdiBjbGFzc05hbWU9XCJ2YWx1ZVwiPnt3YWxsZXREYXRhLnRva2Vuc308L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBQcm9qZWN0czo8ZGl2IGNsYXNzTmFtZT1cInZhbHVlXCI+IHt3YWxsZXREYXRhLnByb2plY3RzfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnktaXRlbVwiPlxuICAgICAgICAgICAgICAgIE5GVHM6PGRpdiBjbGFzc05hbWU9XCJ2YWx1ZVwiPiB7d2FsbGV0RGF0YS5uZnRzfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnktaXRlbVwiPlxuICAgICAgICAgICAgICAgIEZUczo8ZGl2IGNsYXNzTmFtZT1cInZhbHVlXCI+IHt3YWxsZXREYXRhLmZ0c308L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3VtbWFyeSIsInByb3BzIiwid2FsbGV0RGF0YSIsInNldFdhbGxldERhdGEiLCJiYWxhbmNlIiwidG90YWxfcmV3YXJkcyIsImF2YWlsYWJsZV9yZXdhcmRzIiwicHJvamVjdHMiLCJ0b2tlbnMiLCJuZnRzIiwiZnRzIiwiY3VycmVuY3kiLCJzZXRDdXJyZW5jeSIsIm5hbWUiLCJ2YWx1ZSIsInN5bWJvbCIsImFkYUJhbGFuY2UiLCJzZXRBZGFCYWxhbmNlIiwidG9rZW5CYWxhbmNlIiwic2V0VG9rZW5CYWxhbmNlIiwiZ2V0QmFsYW5jZSIsInN0YWtlIiwic3Rha2VBZGRyZXNzIiwic3Rha2VEYXRhIiwiZ2V0QWNjb3VudEluZm9Gcm9tS29pb3MiLCJ0b3RhbF9iYWxhbmNlIiwicHJvamVjdE51bWJlciIsInRva2VuTnVtYmVyIiwibGVuZ3RoIiwicHJpY2VzIiwiX2JhbGFuY2UiLCJ0b0ZpeGVkIiwiZ2V0VG9rZW5CYWxhbmNlIiwidG9rZW5WYWx1ZSIsInRvdGFsIiwiZWxlbWVudCIsInRva2VuIiwicHJpY2UiLCJjdXJyZW50IiwiYWRhVVNEIiwicXVhbnRpdHkiLCJyZXEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImpzb24iLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/summary.js\n"));

/***/ })

});