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

/***/ "./pages/summary.js":
/*!**************************!*\
  !*** ./pages/summary.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Summary; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Summary(props) {\n    _s();\n    // current selected currency\n    // ada balance\n    const [adaBalance, setAdaBalance] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [stakePool, setStakePool] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [totalValue, setTotalValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [nftValue, setNftValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [tokenValue, setTokenValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function getSummaryInfo() {\n            if (props.data.stake && props.currency) {\n                let stakeInfo = await getStakeInfo(props.data.stake);\n                setAdaBalance(stakeInfo[0].total_balance / 1000000);\n                let pool = await getPoolInfo(stakeInfo[0].delegated_pool);\n                let poolTicker = pool[0].meta_json.ticker;\n                setStakePool(poolTicker);\n                console.log(props.currency);\n                // get total value of fungible tokens\n                let tokenBalance = getTokenBalance(props.data.fts);\n                setTokenValue(tokenBalance);\n                //get total value of nfts\n                let nftBalance = getNftValue(props.data.nfts);\n                setNftValue(nftBalance);\n            // get top 5 nfts by value\n            // get top 5 coins by value\n            }\n        }\n        getSummaryInfo();\n    }, [\n        props.data,\n        props.currency\n    ]);\n    function getNftValue(nfts) {\n        let total = 0;\n        for (const element of nfts){\n            for (const nft of element){\n                if (nft.floor_price != null) {\n                    total += nft.floor_price;\n                }\n            }\n        }\n        return total;\n    }\n    // returns estimated total value of fungible tokens from coingecko prices in ADA\n    function getTokenBalance(fts) {\n        let total = 0;\n        for (const element of fts){\n            var _token_prices;\n            let token = element[0];\n            if (((_token_prices = token.prices) === null || _token_prices === void 0 ? void 0 : _token_prices.current) != null) {\n                total += token.prices.current * token.quantity;\n            }\n        }\n        return total;\n    }\n    function getTotalNfts(nfts) {\n        let total = 0;\n        for (const element of nfts){\n            total += element.length;\n        }\n        return total;\n    }\n    // requests account info from stake address from koios api -- ada balance used\n    async function getStakeInfo(stakeAddress) {\n        try {\n            const req = await fetch(\"https://api.koios.rest/api/v0/account_info\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    \"_stake_addresses\": [\n                        stakeAddress\n                    ]\n                })\n            });\n            const res = await req.json();\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    // requests account info from stake address from koios api -- ada balance used\n    async function getPoolInfo(pool) {\n        try {\n            const req = await fetch(\"https://api.koios.rest/api/v0/pool_info\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    \"_pool_bech32_ids\": [\n                        pool\n                    ]\n                })\n            });\n            const res = await req.json();\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"summary\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-title\",\n                children: \"Your Wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                lineNumber: 127,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-general\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"summary-general-item\",\n                        children: [\n                            \"Stake Address: \",\n                            props.data.stake\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                        lineNumber: 129,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"summary-general-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"summary-general-item\",\n                                children: [\n                                    \"ADA Balance: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"green\"\n                                        },\n                                        children: [\n                                            \" \",\n                                            adaBalance,\n                                            \" ADA \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                        lineNumber: 131,\n                                        columnNumber: 70\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                lineNumber: 131,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"summary-general-item\",\n                                children: [\n                                    \"Wallet Value: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"currency\",\n                                        children: props.currency.symbol\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                        lineNumber: 132,\n                                        columnNumber: 71\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"green\"\n                                        },\n                                        children: totalValue\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                        lineNumber: 132,\n                                        columnNumber: 128\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                lineNumber: 132,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"summary-general-item\",\n                                children: [\n                                    \"Delegated Stake Pool: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"orange\"\n                                        },\n                                        children: stakePool\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                        lineNumber: 133,\n                                        columnNumber: 79\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                lineNumber: 133,\n                                columnNumber: 19\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                        lineNumber: 130,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                lineNumber: 128,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-tokens\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"summary-tokens-item\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"summary-tokens-title\",\n                                children: \"Non-Fungible Tokens\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                lineNumber: 138,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"summary-tokens-text\",\n                                children: [\n                                    \"Total NFTs:\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"red\"\n                                        },\n                                        children: getTotalNfts(props.data.nfts)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                        lineNumber: 139,\n                                        columnNumber: 69\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                lineNumber: 139,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"summary-tokens-text\",\n                                children: [\n                                    \"Unique Policy IDs:\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"yellow\"\n                                        },\n                                        children: props.data.nfts.length\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                        lineNumber: 140,\n                                        columnNumber: 76\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                lineNumber: 140,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"summary-tokens-text\",\n                                children: [\n                                    \"Total Value of NFTs: \",\n                                    nftValue\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                lineNumber: 141,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                        lineNumber: 137,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"summary-tokens-item\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"summary-tokens-title\",\n                                children: \"Fungible Tokens\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                lineNumber: 144,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"summary-tokens-text\",\n                                children: [\n                                    \"Coins:\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"#ccffcc\"\n                                        },\n                                        children: props.data.fts.length\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                        lineNumber: 145,\n                                        columnNumber: 64\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                lineNumber: 145,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"summary-tokens-text\",\n                                children: [\n                                    \"Total Coin Value: \",\n                                    tokenValue\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                lineNumber: 146,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                        lineNumber: 143,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                lineNumber: 136,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n        lineNumber: 126,\n        columnNumber: 9\n    }, this);\n}\n_s(Summary, \"fSNlozdjtuU0Pb2QyfaEusOjYWY=\");\n_c = Summary;\nvar _c;\n$RefreshReg$(_c, \"Summary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLQyxPQUFPOzRDQUFDQyxPQUFPO3dDQUFRO2tEQUFJdEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHbkcsOERBQUNrRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQXVCOzs7Ozs7MENBQ3RDLDhEQUFDRDtnQ0FBSUMsV0FBVTs7b0NBQXNCO2tEQUFXLDhEQUFDQzt3Q0FBS0MsT0FBTzs0Q0FBQ0MsT0FBTzt3Q0FBSztrREFBSWpCLGFBQWF4QyxNQUFNWSxJQUFJLENBQUNtQixJQUFJOzs7Ozs7Ozs7Ozs7MENBQzFHLDhEQUFDc0I7Z0NBQUlDLFdBQVU7O29DQUFzQjtrREFBa0IsOERBQUNDO3dDQUFLQyxPQUFPOzRDQUFDQyxPQUFPO3dDQUFRO2tEQUFJekQsTUFBTVksSUFBSSxDQUFDbUIsSUFBSSxDQUFDVSxNQUFNOzs7Ozs7Ozs7Ozs7MENBQzlHLDhEQUFDWTtnQ0FBSUMsV0FBVTs7b0NBQXNCO29DQUFzQi9DOzs7Ozs7Ozs7Ozs7O2tDQUUvRCw4REFBQzhDO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQXVCOzs7Ozs7MENBQ3RDLDhEQUFDRDtnQ0FBSUMsV0FBVTs7b0NBQXNCO2tEQUFNLDhEQUFDQzt3Q0FBS0MsT0FBTzs0Q0FBQ0MsT0FBTzt3Q0FBUztrREFBSXpELE1BQU1ZLElBQUksQ0FBQ2dCLEdBQUcsQ0FBQ2EsTUFBTTs7Ozs7Ozs7Ozs7OzBDQUNsRyw4REFBQ1k7Z0NBQUlDLFdBQVU7O29DQUFzQjtvQ0FBbUI3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs1RSxDQUFDO0dBbkp1QlY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3VtbWFyeS5qcz8xY2M0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1bW1hcnkocHJvcHMpe1xuXG4gICAgLy8gY3VycmVudCBzZWxlY3RlZCBjdXJyZW5jeVxuXG4gICAgLy8gYWRhIGJhbGFuY2VcbiAgICBjb25zdCBbYWRhQmFsYW5jZSwgc2V0QWRhQmFsYW5jZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbc3Rha2VQb29sLCBzZXRTdGFrZVBvb2xdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICBjb25zdCBbdG90YWxWYWx1ZSwgc2V0VG90YWxWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbbmZ0VmFsdWUsIHNldE5mdFZhbHVlXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFt0b2tlblZhbHVlLCBzZXRUb2tlblZhbHVlXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0U3VtbWFyeUluZm8oKSB7XG4gICAgICAgICAgaWYgKHByb3BzLmRhdGEuc3Rha2UgJiYgcHJvcHMuY3VycmVuY3kpIHtcbiAgICAgICAgICAgIGxldCBzdGFrZUluZm8gPSBhd2FpdCBnZXRTdGFrZUluZm8ocHJvcHMuZGF0YS5zdGFrZSk7XG4gICAgICAgICAgICBzZXRBZGFCYWxhbmNlKHN0YWtlSW5mb1swXS50b3RhbF9iYWxhbmNlIC8gMTAwMDAwMCk7XG4gICAgICAgICAgICBsZXQgcG9vbCA9IGF3YWl0IGdldFBvb2xJbmZvKHN0YWtlSW5mb1swXS5kZWxlZ2F0ZWRfcG9vbCk7XG4gICAgICAgICAgICBsZXQgcG9vbFRpY2tlciA9IHBvb2xbMF0ubWV0YV9qc29uLnRpY2tlcjtcbiAgICAgICAgICAgIHNldFN0YWtlUG9vbChwb29sVGlja2VyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb3BzLmN1cnJlbmN5KVxuXG4gICAgICAgICAgICAvLyBnZXQgdG90YWwgdmFsdWUgb2YgZnVuZ2libGUgdG9rZW5zXG4gICAgICAgICAgICBsZXQgdG9rZW5CYWxhbmNlID0gZ2V0VG9rZW5CYWxhbmNlKHByb3BzLmRhdGEuZnRzKTtcbiAgICAgICAgICAgIHNldFRva2VuVmFsdWUodG9rZW5CYWxhbmNlKTtcblxuICAgICAgICAgICAgLy9nZXQgdG90YWwgdmFsdWUgb2YgbmZ0c1xuICAgICAgICAgICAgbGV0IG5mdEJhbGFuY2UgPSBnZXROZnRWYWx1ZShwcm9wcy5kYXRhLm5mdHMpO1xuICAgICAgICAgICAgc2V0TmZ0VmFsdWUobmZ0QmFsYW5jZSk7XG5cbiAgICAgICAgICAgIC8vIGdldCB0b3AgNSBuZnRzIGJ5IHZhbHVlXG5cbiAgICAgICAgICAgIC8vIGdldCB0b3AgNSBjb2lucyBieSB2YWx1ZVxuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgZ2V0U3VtbWFyeUluZm8oKTtcbiAgICAgIH0sIFtwcm9wcy5kYXRhLCBwcm9wcy5jdXJyZW5jeV0pO1xuXG4gICAgXG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0TmZ0VmFsdWUobmZ0cyl7XG4gICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgbmZ0cyl7XG4gICAgICAgIGZvcihjb25zdCBuZnQgb2YgZWxlbWVudCl7XG4gICAgICAgICAgaWYobmZ0LmZsb29yX3ByaWNlICE9IG51bGwpe1xuICAgICAgICAgICAgdG90YWwgKz0gbmZ0LmZsb29yX3ByaWNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRvdGFsO1xuICAgIH1cbiAgICBcblxuICAgIC8vIHJldHVybnMgZXN0aW1hdGVkIHRvdGFsIHZhbHVlIG9mIGZ1bmdpYmxlIHRva2VucyBmcm9tIGNvaW5nZWNrbyBwcmljZXMgaW4gQURBXG4gICAgZnVuY3Rpb24gZ2V0VG9rZW5CYWxhbmNlKGZ0cyl7XG4gICAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICAgIGZvcihjb25zdCBlbGVtZW50IG9mIGZ0cyl7XG5cbiAgICAgICAgICAgIGxldCB0b2tlbiA9IGVsZW1lbnRbMF07XG4gICAgICAgICAgICBpZih0b2tlbi5wcmljZXM/LmN1cnJlbnQgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgdG90YWwgKz0gdG9rZW4ucHJpY2VzLmN1cnJlbnQgKiB0b2tlbi5xdWFudGl0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG90YWw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VG90YWxOZnRzKG5mdHMpe1xuICAgICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgICBmb3IoY29uc3QgZWxlbWVudCBvZiBuZnRzKXtcbiAgICAgICAgICAgIHRvdGFsICs9IGVsZW1lbnQubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b3RhbDtcbiAgICB9XG5cbiAgICAvLyByZXF1ZXN0cyBhY2NvdW50IGluZm8gZnJvbSBzdGFrZSBhZGRyZXNzIGZyb20ga29pb3MgYXBpIC0tIGFkYSBiYWxhbmNlIHVzZWRcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRTdGFrZUluZm8oc3Rha2VBZGRyZXNzKXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5rb2lvcy5yZXN0L2FwaS92MC9hY2NvdW50X2luZm8nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgXCJfc3Rha2VfYWRkcmVzc2VzXCI6IFtcbiAgICAgICAgICAgICAgICBzdGFrZUFkZHJlc3NcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KTtcbiAgICAgIFxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgICAgICAvLyByZXF1ZXN0cyBhY2NvdW50IGluZm8gZnJvbSBzdGFrZSBhZGRyZXNzIGZyb20ga29pb3MgYXBpIC0tIGFkYSBiYWxhbmNlIHVzZWRcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRQb29sSW5mbyhwb29sKXtcbiAgICAgIHRyeXtcbiAgICAgICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmtvaW9zLnJlc3QvYXBpL3YwL3Bvb2xfaW5mbycsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBcIl9wb29sX2JlY2gzMl9pZHNcIjogW1xuICAgICAgICAgICAgICBwb29sXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ3N1bW1hcnktdGl0bGUnPllvdXIgV2FsbGV0PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnktZ2VuZXJhbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS1nZW5lcmFsLWl0ZW1cIj5TdGFrZSBBZGRyZXNzOiB7cHJvcHMuZGF0YS5zdGFrZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnktZ2VuZXJhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS1nZW5lcmFsLWl0ZW1cIj5BREEgQmFsYW5jZTogPHNwYW4gc3R5bGU9e3tjb2xvcjogJ2dyZWVuJ319PiB7YWRhQmFsYW5jZX0gQURBIDwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS1nZW5lcmFsLWl0ZW1cIj5XYWxsZXQgVmFsdWU6IDxzcGFuIGNsYXNzTmFtZT1cImN1cnJlbmN5XCI+e3Byb3BzLmN1cnJlbmN5LnN5bWJvbH08L3NwYW4+PHNwYW4gc3R5bGU9e3tjb2xvcjogJ2dyZWVuJ319Pnt0b3RhbFZhbHVlfTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS1nZW5lcmFsLWl0ZW1cIj5EZWxlZ2F0ZWQgU3Rha2UgUG9vbDogPHNwYW4gc3R5bGU9e3tjb2xvcjogXCJvcmFuZ2VcIn19PntzdGFrZVBvb2x9PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnktdG9rZW5zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5LXRva2Vucy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS10b2tlbnMtdGl0bGVcIj5Ob24tRnVuZ2libGUgVG9rZW5zPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS10b2tlbnMtdGV4dFwiPlRvdGFsIE5GVHM6PHNwYW4gc3R5bGU9e3tjb2xvcjogJ3JlZCd9fT57Z2V0VG90YWxOZnRzKHByb3BzLmRhdGEubmZ0cyl9PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnktdG9rZW5zLXRleHRcIj5VbmlxdWUgUG9saWN5IElEczo8c3BhbiBzdHlsZT17e2NvbG9yOiAneWVsbG93J319Pntwcm9wcy5kYXRhLm5mdHMubGVuZ3RofTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5LXRva2Vucy10ZXh0XCI+VG90YWwgVmFsdWUgb2YgTkZUczoge25mdFZhbHVlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS10b2tlbnMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnktdG9rZW5zLXRpdGxlXCI+RnVuZ2libGUgVG9rZW5zPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS10b2tlbnMtdGV4dFwiPkNvaW5zOjxzcGFuIHN0eWxlPXt7Y29sb3I6ICcjY2NmZmNjJ319Pntwcm9wcy5kYXRhLmZ0cy5sZW5ndGh9PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnktdG9rZW5zLXRleHRcIj5Ub3RhbCBDb2luIFZhbHVlOiB7dG9rZW5WYWx1ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTdW1tYXJ5IiwicHJvcHMiLCJhZGFCYWxhbmNlIiwic2V0QWRhQmFsYW5jZSIsInN0YWtlUG9vbCIsInNldFN0YWtlUG9vbCIsInRvdGFsVmFsdWUiLCJzZXRUb3RhbFZhbHVlIiwibmZ0VmFsdWUiLCJzZXROZnRWYWx1ZSIsInRva2VuVmFsdWUiLCJzZXRUb2tlblZhbHVlIiwiZ2V0U3VtbWFyeUluZm8iLCJkYXRhIiwic3Rha2UiLCJjdXJyZW5jeSIsInN0YWtlSW5mbyIsImdldFN0YWtlSW5mbyIsInRvdGFsX2JhbGFuY2UiLCJwb29sIiwiZ2V0UG9vbEluZm8iLCJkZWxlZ2F0ZWRfcG9vbCIsInBvb2xUaWNrZXIiLCJtZXRhX2pzb24iLCJ0aWNrZXIiLCJjb25zb2xlIiwibG9nIiwidG9rZW5CYWxhbmNlIiwiZ2V0VG9rZW5CYWxhbmNlIiwiZnRzIiwibmZ0QmFsYW5jZSIsImdldE5mdFZhbHVlIiwibmZ0cyIsInRvdGFsIiwiZWxlbWVudCIsIm5mdCIsImZsb29yX3ByaWNlIiwidG9rZW4iLCJwcmljZXMiLCJjdXJyZW50IiwicXVhbnRpdHkiLCJnZXRUb3RhbE5mdHMiLCJsZW5ndGgiLCJzdGFrZUFkZHJlc3MiLCJyZXEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImpzb24iLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJzdHlsZSIsImNvbG9yIiwic3ltYm9sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/summary.js\n"));

/***/ })

});