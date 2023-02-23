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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Summary; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Summary(props) {\n    _s();\n    const [walletData, setWalletData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        balance: null,\n        total_rewards: null,\n        available_rewards: null,\n        projects: null,\n        tokens: null,\n        nfts: null,\n        fts: null\n    });\n    const [currency, setCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"ada\",\n        value: 1,\n        symbol: \"₳\"\n    });\n    const [adaBalance, setAdaBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [tokenBalance, setTokenBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getBalance = async ()=>{\n            if (props.tokens.stake != null) {\n                let stakeAddress = props.tokens.stake;\n                let stakeData = await getAccountInfoFromKoios(stakeAddress);\n                setWalletData({\n                    balance: stakeData[0].total_balance,\n                    projects: props.tokens.projectNumber,\n                    tokens: props.tokens.tokenNumber,\n                    nfts: props.tokens.nfts.length,\n                    fts: props.tokens.fts.length\n                });\n                if (props.prices != null) {\n                    setCurrency(props.prices.currency);\n                    let currency = props.prices.currency.value;\n                    let _balance = stakeData[0].total_balance / 1000000;\n                    let value = (currency * _balance).toFixed(2);\n                    let tokenBalance = getTokenBalance(props.tokens.fts);\n                    let tokenValue = tokenBalance * (1 / props.prices.adaUSD);\n                    tokenValue = (currency * tokenBalance).toFixed(2);\n                    setAdaBalance(value);\n                    setTokenBalance(tokenValue);\n                }\n            }\n        };\n        getBalance();\n    }, [\n        props\n    ]);\n    function getTokenBalance(fts) {\n        let total = 0;\n        for (const element of fts){\n            console.log(token);\n            let token = element[0];\n            let price = token.current;\n            let value = 0;\n            if (price != -1) {\n                value = price * (token.quantity / 1000000);\n            }\n            total = total + value;\n        }\n        return total;\n    }\n    async function getAccountInfoFromKoios(stakeAddress) {\n        const req = await fetch(\"https://api.koios.rest/api/v0/account_info\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"_stake_addresses\": [\n                    stakeAddress\n                ]\n            })\n        });\n        const res = await req.json();\n        return res;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"summary\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-item\",\n                children: [\n                    \"Ada Value: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"currency\",\n                                children: currency.symbol\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                                lineNumber: 71,\n                                columnNumber: 51\n                            }, this),\n                            \" \",\n                            adaBalance\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                        lineNumber: 71,\n                        columnNumber: 28\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-item\",\n                children: [\n                    \"Token Value: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"currency\",\n                                children: currency.symbol\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                                lineNumber: 74,\n                                columnNumber: 53\n                            }, this),\n                            \" \",\n                            tokenBalance\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                        lineNumber: 74,\n                        columnNumber: 30\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-item\",\n                children: [\n                    \"Tokens:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: walletData.tokens\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                        lineNumber: 77,\n                        columnNumber: 24\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-item\",\n                children: [\n                    \"Projects:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: [\n                            \" \",\n                            walletData.projects\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                        lineNumber: 80,\n                        columnNumber: 26\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-item\",\n                children: [\n                    \"NFTs:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: [\n                            \" \",\n                            walletData.nfts\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                        lineNumber: 83,\n                        columnNumber: 22\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-item\",\n                children: [\n                    \"FTs:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: [\n                            \" \",\n                            walletData.fts\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                        lineNumber: 86,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, this);\n}\n_s(Summary, \"dOPgxNhU4VO1BMFzV6fG79ifwho=\");\n_c = Summary;\nvar _c;\n$RefreshReg$(_c, \"Summary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUosTUFBTTRCLE1BQU0sTUFBTVAsSUFBSVEsSUFBSTtRQUMxQixPQUFPRDtJQUNYO0lBRUEscUJBQ0ksOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTs7b0JBQWU7a0NBQ2YsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FBUSw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQVkxQyxTQUFTSSxNQUFNOzs7Ozs7NEJBQU87NEJBQUVDOzs7Ozs7Ozs7Ozs7OzBCQUV6Riw4REFBQ29DO2dCQUFJQyxXQUFVOztvQkFBZTtrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUFRLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FBWTFDLFNBQVNJLE1BQU07Ozs7Ozs0QkFBTzs0QkFBRUc7Ozs7Ozs7Ozs7Ozs7MEJBRTNGLDhEQUFDa0M7Z0JBQUlDLFdBQVU7O29CQUFlO2tDQUNuQiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQVNuRCxXQUFXTSxNQUFNOzs7Ozs7Ozs7Ozs7MEJBRXBELDhEQUFDNEM7Z0JBQUlDLFdBQVU7O29CQUFlO2tDQUNqQiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzRCQUFROzRCQUFFbkQsV0FBV0ssUUFBUTs7Ozs7Ozs7Ozs7OzswQkFFekQsOERBQUM2QztnQkFBSUMsV0FBVTs7b0JBQWU7a0NBQ3JCLDhEQUFDRDt3QkFBSUMsV0FBVTs7NEJBQVE7NEJBQUVuRCxXQUFXTyxJQUFJOzs7Ozs7Ozs7Ozs7OzBCQUVqRCw4REFBQzJDO2dCQUFJQyxXQUFVOztvQkFBZTtrQ0FDdEIsOERBQUNEO3dCQUFJQyxXQUFVOzs0QkFBUTs0QkFBRW5ELFdBQVdRLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0QsQ0FBQztHQXZGdUJWO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9zdW1tYXJ5LmpzP2ZmYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1bW1hcnkocHJvcHMpe1xuXG4gICAgY29uc3QgW3dhbGxldERhdGEsIHNldFdhbGxldERhdGFdID0gdXNlU3RhdGUoe2JhbGFuY2U6IG51bGwsIHRvdGFsX3Jld2FyZHM6IG51bGwsICBhdmFpbGFibGVfcmV3YXJkczogbnVsbCwgcHJvamVjdHM6IG51bGwsIHRva2VuczogbnVsbCwgbmZ0czogbnVsbCwgZnRzOm51bGx9KTtcbiAgICBjb25zdCBbY3VycmVuY3ksIHNldEN1cnJlbmN5XSA9IHVzZVN0YXRlKHtuYW1lOiAnYWRhJywgdmFsdWU6IDEsIHN5bWJvbDogJ+KCsyd9KVxuICAgIGNvbnN0IFthZGFCYWxhbmNlLCBzZXRBZGFCYWxhbmNlXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW3Rva2VuQmFsYW5jZSwgc2V0VG9rZW5CYWxhbmNlXSA9IHVzZVN0YXRlKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgaWYocHJvcHMudG9rZW5zLnN0YWtlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGxldCBzdGFrZUFkZHJlc3MgPSBwcm9wcy50b2tlbnMuc3Rha2U7XG4gICAgICAgICAgICAgICAgbGV0IHN0YWtlRGF0YSA9IGF3YWl0IGdldEFjY291bnRJbmZvRnJvbUtvaW9zKHN0YWtlQWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgc2V0V2FsbGV0RGF0YSh7YmFsYW5jZTogc3Rha2VEYXRhWzBdLnRvdGFsX2JhbGFuY2UsIHByb2plY3RzOiBwcm9wcy50b2tlbnMucHJvamVjdE51bWJlciwgXG4gICAgICAgICAgICAgICAgICAgICB0b2tlbnM6IHByb3BzLnRva2Vucy50b2tlbk51bWJlciwgbmZ0czogcHJvcHMudG9rZW5zLm5mdHMubGVuZ3RoLCBmdHM6IHByb3BzLnRva2Vucy5mdHMubGVuZ3RofSlcbiAgICAgICAgICAgICAgICBpZihwcm9wcy5wcmljZXMgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbmN5KHByb3BzLnByaWNlcy5jdXJyZW5jeSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW5jeSA9IHByb3BzLnByaWNlcy5jdXJyZW5jeS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IF9iYWxhbmNlID0gc3Rha2VEYXRhWzBdLnRvdGFsX2JhbGFuY2UvMTAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gKGN1cnJlbmN5Kl9iYWxhbmNlKS50b0ZpeGVkKDIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbkJhbGFuY2UgPSBnZXRUb2tlbkJhbGFuY2UocHJvcHMudG9rZW5zLmZ0cyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2tlblZhbHVlID0gdG9rZW5CYWxhbmNlICogKDEvcHJvcHMucHJpY2VzLmFkYVVTRCk7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuVmFsdWUgPSAoY3VycmVuY3kgKiB0b2tlbkJhbGFuY2UpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgICAgIHNldEFkYUJhbGFuY2UodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUb2tlbkJhbGFuY2UodG9rZW5WYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldEJhbGFuY2UoKTtcbiAgICB9LFtwcm9wc10pXG5cbiAgICBmdW5jdGlvbiBnZXRUb2tlbkJhbGFuY2UoZnRzKXtcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgZnRzKXtcblxuICAgICAgICAgICAgY29uc29sZS5sb2codG9rZW4pO1xuICAgICAgICAgICAgbGV0IHRva2VuID0gZWxlbWVudFswXTtcbiAgICAgICAgICAgIGxldCBwcmljZSA9IHRva2VuLmN1cnJlbnQ7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSAwO1xuICAgICAgICAgICAgaWYocHJpY2UgIT0gLTEpe1xuICAgICAgICAgICAgICAgIHZhbHVlID0gKHByaWNlKSogKHRva2VuLnF1YW50aXR5LzEwMDAwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG90YWwgPSB0b3RhbCArIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRvdGFsO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEFjY291bnRJbmZvRnJvbUtvaW9zKHN0YWtlQWRkcmVzcyl7XG4gICAgICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5rb2lvcy5yZXN0L2FwaS92MC9hY2NvdW50X2luZm8nLCB7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgXCJfc3Rha2VfYWRkcmVzc2VzXCI6IFtcbiAgICAgICAgICAgICAgICAgIHN0YWtlQWRkcmVzc1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgQWRhIFZhbHVlOiA8ZGl2IGNsYXNzTmFtZT1cInZhbHVlXCI+PGRpdiBjbGFzc05hbWU9XCJjdXJyZW5jeVwiPntjdXJyZW5jeS5zeW1ib2x9PC9kaXY+IHthZGFCYWxhbmNlfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnktaXRlbVwiPlxuICAgICAgICAgICAgICAgIFRva2VuIFZhbHVlOiA8ZGl2IGNsYXNzTmFtZT1cInZhbHVlXCI+PGRpdiBjbGFzc05hbWU9XCJjdXJyZW5jeVwiPntjdXJyZW5jeS5zeW1ib2x9PC9kaXY+IHt0b2tlbkJhbGFuY2V9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgVG9rZW5zOjxkaXYgY2xhc3NOYW1lPVwidmFsdWVcIj57d2FsbGV0RGF0YS50b2tlbnN9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgUHJvamVjdHM6PGRpdiBjbGFzc05hbWU9XCJ2YWx1ZVwiPiB7d2FsbGV0RGF0YS5wcm9qZWN0c308L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBORlRzOjxkaXYgY2xhc3NOYW1lPVwidmFsdWVcIj4ge3dhbGxldERhdGEubmZ0c308L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBGVHM6PGRpdiBjbGFzc05hbWU9XCJ2YWx1ZVwiPiB7d2FsbGV0RGF0YS5mdHN9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlN1bW1hcnkiLCJwcm9wcyIsIndhbGxldERhdGEiLCJzZXRXYWxsZXREYXRhIiwiYmFsYW5jZSIsInRvdGFsX3Jld2FyZHMiLCJhdmFpbGFibGVfcmV3YXJkcyIsInByb2plY3RzIiwidG9rZW5zIiwibmZ0cyIsImZ0cyIsImN1cnJlbmN5Iiwic2V0Q3VycmVuY3kiLCJuYW1lIiwidmFsdWUiLCJzeW1ib2wiLCJhZGFCYWxhbmNlIiwic2V0QWRhQmFsYW5jZSIsInRva2VuQmFsYW5jZSIsInNldFRva2VuQmFsYW5jZSIsImdldEJhbGFuY2UiLCJzdGFrZSIsInN0YWtlQWRkcmVzcyIsInN0YWtlRGF0YSIsImdldEFjY291bnRJbmZvRnJvbUtvaW9zIiwidG90YWxfYmFsYW5jZSIsInByb2plY3ROdW1iZXIiLCJ0b2tlbk51bWJlciIsImxlbmd0aCIsInByaWNlcyIsIl9iYWxhbmNlIiwidG9GaXhlZCIsImdldFRva2VuQmFsYW5jZSIsInRva2VuVmFsdWUiLCJhZGFVU0QiLCJ0b3RhbCIsImVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJwcmljZSIsImN1cnJlbnQiLCJxdWFudGl0eSIsInJlcSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwianNvbiIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/summary.js\n"));

/***/ })

});