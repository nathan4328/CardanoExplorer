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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Summary; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Summary(props) {\n    _s();\n    const [walletData, setWalletData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        balance: null,\n        total_rewards: null,\n        available_rewards: null,\n        projects: null,\n        tokens: null,\n        nfts: null,\n        fts: null\n    });\n    const [currency, setCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"ada\",\n        value: 1,\n        symbol: \"₳\"\n    });\n    const [adaBalance, setAdaBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [tokenBalance, setTokenBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getBalance = async ()=>{\n            if (props.tokens.stake != null) {\n                let stakeAddress = props.tokens.stake;\n                let stakeData = await getAccountInfoFromKoios(stakeAddress);\n                setWalletData({\n                    balance: stakeData[0].total_balance,\n                    projects: props.tokens.projectNumber,\n                    tokens: props.tokens.tokenNumber,\n                    nfts: props.tokens.nfts.length,\n                    fts: props.tokens.fts.length\n                });\n                if (props.prices != null) {\n                    setCurrency(props.prices.currency);\n                    let currency = props.prices.currency.value;\n                    let _balance = stakeData[0].total_balance / 1000000;\n                    let value = (currency * _balance).toFixed(2);\n                    let tokenBalance = getTokenBalance(props.tokens.fts);\n                    let tokenValue = (currency * tokenBalance).toFixed(2);\n                    setAdaBalance(value);\n                    setTokenBalance(tokenValue);\n                }\n            }\n        };\n        getBalance();\n    }, [\n        props\n    ]);\n    function getTokenBalance(fts) {\n        let total = 0;\n        for (const element of fts){\n            let token = element[0];\n            console.log(token.current);\n            if (token.currency != -1) {\n                let price = token.current * (1 / props.prices.adaUSD);\n                let value = 0;\n                if (price != -1) {\n                    value = price * (token.quantity / 1000000);\n                }\n                total = total + value;\n            }\n        }\n        return total;\n    }\n    async function getAccountInfoFromKoios(stakeAddress) {\n        const req = await fetch(\"https://api.koios.rest/api/v0/account_info\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"_stake_addresses\": [\n                    stakeAddress\n                ]\n            })\n        });\n        const res = await req.json();\n        return res;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"summary\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-item\",\n                children: [\n                    \"Ada Value: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"currency\",\n                                children: currency.symbol\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                                lineNumber: 73,\n                                columnNumber: 51\n                            }, this),\n                            \" \",\n                            adaBalance\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                        lineNumber: 73,\n                        columnNumber: 28\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-item\",\n                children: [\n                    \"Token Value: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"currency\",\n                                children: currency.symbol\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                                lineNumber: 76,\n                                columnNumber: 53\n                            }, this),\n                            \" \",\n                            tokenBalance\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                        lineNumber: 76,\n                        columnNumber: 30\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-item\",\n                children: [\n                    \"Tokens:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: walletData.tokens\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                        lineNumber: 79,\n                        columnNumber: 24\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-item\",\n                children: [\n                    \"Projects:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: [\n                            \" \",\n                            walletData.projects\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                        lineNumber: 82,\n                        columnNumber: 26\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-item\",\n                children: [\n                    \"NFTs:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: [\n                            \" \",\n                            walletData.nfts\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                        lineNumber: 85,\n                        columnNumber: 22\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-item\",\n                children: [\n                    \"FTs:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: [\n                            \" \",\n                            walletData.fts\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                        lineNumber: 88,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/summary.js\",\n        lineNumber: 71,\n        columnNumber: 9\n    }, this);\n}\n_s(Summary, \"dOPgxNhU4VO1BMFzV6fG79ifwho=\");\n_c = Summary;\nvar _c;\n$RefreshReg$(_c, \"Summary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsQ0FBQztnQkFDbkIsb0JBQW9CO29CQUNsQjNCO2lCQUNEO1lBQ0g7UUFDRjtRQUVKLE1BQU00QixNQUFNLE1BQU1QLElBQUlRLElBQUk7UUFDMUIsT0FBT0Q7SUFDWDtJQUVBLHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O29CQUFlO2tDQUNmLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQVEsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUFZMUMsU0FBU0ksTUFBTTs7Ozs7OzRCQUFPOzRCQUFFQzs7Ozs7Ozs7Ozs7OzswQkFFekYsOERBQUNvQztnQkFBSUMsV0FBVTs7b0JBQWU7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FBUSw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQVkxQyxTQUFTSSxNQUFNOzs7Ozs7NEJBQU87NEJBQUVHOzs7Ozs7Ozs7Ozs7OzBCQUUzRiw4REFBQ2tDO2dCQUFJQyxXQUFVOztvQkFBZTtrQ0FDbkIsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUFTbkQsV0FBV00sTUFBTTs7Ozs7Ozs7Ozs7OzBCQUVwRCw4REFBQzRDO2dCQUFJQyxXQUFVOztvQkFBZTtrQ0FDakIsOERBQUNEO3dCQUFJQyxXQUFVOzs0QkFBUTs0QkFBRW5ELFdBQVdLLFFBQVE7Ozs7Ozs7Ozs7Ozs7MEJBRXpELDhEQUFDNkM7Z0JBQUlDLFdBQVU7O29CQUFlO2tDQUNyQiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzRCQUFROzRCQUFFbkQsV0FBV08sSUFBSTs7Ozs7Ozs7Ozs7OzswQkFFakQsOERBQUMyQztnQkFBSUMsV0FBVTs7b0JBQWU7a0NBQ3RCLDhEQUFDRDt3QkFBSUMsV0FBVTs7NEJBQVE7NEJBQUVuRCxXQUFXUSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTNELENBQUM7R0F6RnVCVjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvc3VtbWFyeS5qcz9mZmI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdW1tYXJ5KHByb3BzKXtcblxuICAgIGNvbnN0IFt3YWxsZXREYXRhLCBzZXRXYWxsZXREYXRhXSA9IHVzZVN0YXRlKHtiYWxhbmNlOiBudWxsLCB0b3RhbF9yZXdhcmRzOiBudWxsLCAgYXZhaWxhYmxlX3Jld2FyZHM6IG51bGwsIHByb2plY3RzOiBudWxsLCB0b2tlbnM6IG51bGwsIG5mdHM6IG51bGwsIGZ0czpudWxsfSk7XG4gICAgY29uc3QgW2N1cnJlbmN5LCBzZXRDdXJyZW5jeV0gPSB1c2VTdGF0ZSh7bmFtZTogJ2FkYScsIHZhbHVlOiAxLCBzeW1ib2w6ICfigrMnfSlcbiAgICBjb25zdCBbYWRhQmFsYW5jZSwgc2V0QWRhQmFsYW5jZV0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFt0b2tlbkJhbGFuY2UsIHNldFRva2VuQmFsYW5jZV0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0QmFsYW5jZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGlmKHByb3BzLnRva2Vucy5zdGFrZSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICBsZXQgc3Rha2VBZGRyZXNzID0gcHJvcHMudG9rZW5zLnN0YWtlO1xuICAgICAgICAgICAgICAgIGxldCBzdGFrZURhdGEgPSBhd2FpdCBnZXRBY2NvdW50SW5mb0Zyb21Lb2lvcyhzdGFrZUFkZHJlc3MpO1xuICAgICAgICAgICAgICAgIHNldFdhbGxldERhdGEoe2JhbGFuY2U6IHN0YWtlRGF0YVswXS50b3RhbF9iYWxhbmNlLCBwcm9qZWN0czogcHJvcHMudG9rZW5zLnByb2plY3ROdW1iZXIsIFxuICAgICAgICAgICAgICAgICAgICAgdG9rZW5zOiBwcm9wcy50b2tlbnMudG9rZW5OdW1iZXIsIG5mdHM6IHByb3BzLnRva2Vucy5uZnRzLmxlbmd0aCwgZnRzOiBwcm9wcy50b2tlbnMuZnRzLmxlbmd0aH0pXG4gICAgICAgICAgICAgICAgaWYocHJvcHMucHJpY2VzICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW5jeShwcm9wcy5wcmljZXMuY3VycmVuY3kpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVuY3kgPSBwcm9wcy5wcmljZXMuY3VycmVuY3kudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCBfYmFsYW5jZSA9IHN0YWtlRGF0YVswXS50b3RhbF9iYWxhbmNlLzEwMDAwMDA7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IChjdXJyZW5jeSpfYmFsYW5jZSkudG9GaXhlZCgyKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9rZW5CYWxhbmNlID0gZ2V0VG9rZW5CYWxhbmNlKHByb3BzLnRva2Vucy5mdHMpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG9rZW5WYWx1ZSA9IChjdXJyZW5jeSAqIHRva2VuQmFsYW5jZSkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0QWRhQmFsYW5jZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRva2VuQmFsYW5jZSh0b2tlblZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2V0QmFsYW5jZSgpO1xuICAgIH0sW3Byb3BzXSlcblxuICAgIGZ1bmN0aW9uIGdldFRva2VuQmFsYW5jZShmdHMpe1xuICAgICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgICBmb3IoY29uc3QgZWxlbWVudCBvZiBmdHMpe1xuXG4gICAgICAgICAgICBsZXQgdG9rZW4gPSBlbGVtZW50WzBdO1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9rZW4uY3VycmVudCk7XG4gICAgICAgICAgICBpZih0b2tlbi5jdXJyZW5jeSAhPSAtMSl7XG4gICAgICAgICAgICAgICAgbGV0IHByaWNlID0gdG9rZW4uY3VycmVudCAqICgxL3Byb3BzLnByaWNlcy5hZGFVU0QpO1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgaWYocHJpY2UgIT0gLTEpe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IChwcmljZSkqICh0b2tlbi5xdWFudGl0eS8xMDAwMDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdG90YWwgPSB0b3RhbCArIHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdG90YWw7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0QWNjb3VudEluZm9Gcm9tS29pb3Moc3Rha2VBZGRyZXNzKXtcbiAgICAgICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmtvaW9zLnJlc3QvYXBpL3YwL2FjY291bnRfaW5mbycsIHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBcIl9zdGFrZV9hZGRyZXNzZXNcIjogW1xuICAgICAgICAgICAgICAgICAgc3Rha2VBZGRyZXNzXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXEuanNvbigpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBBZGEgVmFsdWU6IDxkaXYgY2xhc3NOYW1lPVwidmFsdWVcIj48ZGl2IGNsYXNzTmFtZT1cImN1cnJlbmN5XCI+e2N1cnJlbmN5LnN5bWJvbH08L2Rpdj4ge2FkYUJhbGFuY2V9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgVG9rZW4gVmFsdWU6IDxkaXYgY2xhc3NOYW1lPVwidmFsdWVcIj48ZGl2IGNsYXNzTmFtZT1cImN1cnJlbmN5XCI+e2N1cnJlbmN5LnN5bWJvbH08L2Rpdj4ge3Rva2VuQmFsYW5jZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBUb2tlbnM6PGRpdiBjbGFzc05hbWU9XCJ2YWx1ZVwiPnt3YWxsZXREYXRhLnRva2Vuc308L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBQcm9qZWN0czo8ZGl2IGNsYXNzTmFtZT1cInZhbHVlXCI+IHt3YWxsZXREYXRhLnByb2plY3RzfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnktaXRlbVwiPlxuICAgICAgICAgICAgICAgIE5GVHM6PGRpdiBjbGFzc05hbWU9XCJ2YWx1ZVwiPiB7d2FsbGV0RGF0YS5uZnRzfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnktaXRlbVwiPlxuICAgICAgICAgICAgICAgIEZUczo8ZGl2IGNsYXNzTmFtZT1cInZhbHVlXCI+IHt3YWxsZXREYXRhLmZ0c308L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3VtbWFyeSIsInByb3BzIiwid2FsbGV0RGF0YSIsInNldFdhbGxldERhdGEiLCJiYWxhbmNlIiwidG90YWxfcmV3YXJkcyIsImF2YWlsYWJsZV9yZXdhcmRzIiwicHJvamVjdHMiLCJ0b2tlbnMiLCJuZnRzIiwiZnRzIiwiY3VycmVuY3kiLCJzZXRDdXJyZW5jeSIsIm5hbWUiLCJ2YWx1ZSIsInN5bWJvbCIsImFkYUJhbGFuY2UiLCJzZXRBZGFCYWxhbmNlIiwidG9rZW5CYWxhbmNlIiwic2V0VG9rZW5CYWxhbmNlIiwiZ2V0QmFsYW5jZSIsInN0YWtlIiwic3Rha2VBZGRyZXNzIiwic3Rha2VEYXRhIiwiZ2V0QWNjb3VudEluZm9Gcm9tS29pb3MiLCJ0b3RhbF9iYWxhbmNlIiwicHJvamVjdE51bWJlciIsInRva2VuTnVtYmVyIiwibGVuZ3RoIiwicHJpY2VzIiwiX2JhbGFuY2UiLCJ0b0ZpeGVkIiwiZ2V0VG9rZW5CYWxhbmNlIiwidG9rZW5WYWx1ZSIsInRvdGFsIiwiZWxlbWVudCIsInRva2VuIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJwcmljZSIsImFkYVVTRCIsInF1YW50aXR5IiwicmVxIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJqc29uIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/summary.js\n"));

/***/ })

});