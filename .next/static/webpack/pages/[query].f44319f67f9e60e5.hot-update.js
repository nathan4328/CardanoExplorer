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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Summary; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Summary(props) {\n    _s();\n    // current selected currency\n    const [currency, setCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"ADA\",\n        value: {\n            price: 1,\n            change24hr: 0\n        },\n        symbol: \"₳\"\n    });\n    // ada balance\n    const [adaBalance, setAdaBalance] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [stakePool, setStakePool] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [ftValue, setFtValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [nftValue, setNftValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [totalValue, setTotalValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [displayedNft, setDisplayedNft] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        ipfs: \"/black.jpeg\",\n        name: \"\"\n    });\n    const [displayedFt, setDisplayedFt] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        ipfs: \"/black.jpeg\",\n        name: \"\"\n    });\n    const [nftDisplayText, setNftDisplayText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [ftDisplayText, setFtDisplayText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function getSummaryInfo() {\n            if (props.data.stake && props.currency) {\n                let stakeInfo = await getStakeInfo(props.data.stake);\n                setAdaBalance(stakeInfo[0].total_balance / 1000000);\n                let pool = await getPoolInfo(stakeInfo[0].delegated_pool);\n                let poolTicker = pool[0].meta_json.ticker;\n                setStakePool(poolTicker);\n            }\n        }\n        getSummaryInfo();\n    }, [\n        props.data,\n        props.currency\n    ]);\n    // returns estimated total value of fungible tokens from coingecko prices in ADA\n    function getTokenBalance(fts) {\n        let total = 0;\n        for (const element of fts){\n            var _token_prices;\n            let token = element[0];\n            if (((_token_prices = token.prices) === null || _token_prices === void 0 ? void 0 : _token_prices.current) != null) {\n                total += token.prices.current * token.quantity;\n            }\n        }\n        return total;\n    }\n    function getTotalNfts(nfts) {\n        let total = 0;\n        for (const element of nfts){\n            total += element.length;\n        }\n        return total;\n    }\n    // requests account info from stake address from koios api -- ada balance used\n    async function getStakeInfo(stakeAddress) {\n        try {\n            const req = await fetch(\"https://api.koios.rest/api/v0/account_info\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    \"_stake_addresses\": [\n                        stakeAddress\n                    ]\n                })\n            });\n            const res = await req.json();\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    // requests account info from stake address from koios api -- ada balance used\n    async function getPoolInfo(pool) {\n        try {\n            const req = await fetch(\"https://api.koios.rest/api/v0/pool_info\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    \"_pool_bech32_ids\": [\n                        pool\n                    ]\n                })\n            });\n            const res = await req.json();\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"summary\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-title\",\n                children: \"Your Wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                lineNumber: 108,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-general\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"summary-general-item\",\n                        children: [\n                            \"Stake Address: \",\n                            props.data.stake\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                        lineNumber: 110,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"summary-general-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"summary-general-item\",\n                                children: [\n                                    \"ADA Balance: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"green\"\n                                        },\n                                        children: [\n                                            \" \",\n                                            adaBalance,\n                                            \" ADA \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                        lineNumber: 112,\n                                        columnNumber: 70\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                lineNumber: 112,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"summary-general-item\",\n                                children: [\n                                    \"Wallet Value: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"currency\",\n                                        children: props.currency.symbol\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                        lineNumber: 113,\n                                        columnNumber: 71\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"green\"\n                                        },\n                                        children: totalValue\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                        lineNumber: 113,\n                                        columnNumber: 128\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                lineNumber: 113,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"summary-general-item\",\n                                children: [\n                                    \"Delegated Stake Pool: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"orange\"\n                                        },\n                                        children: stakePool\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                        lineNumber: 114,\n                                        columnNumber: 79\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                lineNumber: 114,\n                                columnNumber: 19\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                        lineNumber: 111,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-tokens\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"summary-tokens-item\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"summary-tokens-title\",\n                                children: \"Non-Fungible Tokens\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                lineNumber: 119,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"summary-tokens-text\",\n                                children: [\n                                    \"Total NFTs:\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"red\"\n                                        },\n                                        children: getTotalNfts(props.data.nfts)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                        lineNumber: 120,\n                                        columnNumber: 69\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                lineNumber: 120,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"summary-tokens-text\",\n                                children: [\n                                    \"Unique Policy IDs:\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"yellow\"\n                                        },\n                                        children: props.data.nfts.length\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                        lineNumber: 121,\n                                        columnNumber: 76\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                lineNumber: 121,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                        lineNumber: 118,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"summary-tokens-item\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"summary-tokens-title\",\n                                children: \"Fungible Tokens\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                lineNumber: 124,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"summary-tokens-text\",\n                                children: [\n                                    \"Coins:\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"#ccffcc\"\n                                        },\n                                        children: props.data.fts.length\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                        lineNumber: 125,\n                                        columnNumber: 64\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                lineNumber: 125,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                        lineNumber: 123,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                lineNumber: 117,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n        lineNumber: 107,\n        columnNumber: 9\n    }, this);\n}\n_s(Summary, \"uK50fVZ2nom4mK1EUrEV7zJCglI=\");\n_c = Summary;\nvar _c;\n$RefreshReg$(_c, \"Summary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHbkcsOERBQUNtRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQXVCOzs7Ozs7MENBQ3RDLDhEQUFDRDtnQ0FBSUMsV0FBVTs7b0NBQXNCO2tEQUFXLDhEQUFDQzt3Q0FBS0MsT0FBTzs0Q0FBQ0MsT0FBTzt3Q0FBSztrREFBSWxCLGFBQWEvQyxNQUFNNEIsSUFBSSxDQUFDb0IsSUFBSTs7Ozs7Ozs7Ozs7OzBDQUMxRyw4REFBQ2E7Z0NBQUlDLFdBQVU7O29DQUFzQjtrREFBa0IsOERBQUNDO3dDQUFLQyxPQUFPOzRDQUFDQyxPQUFPO3dDQUFRO2tEQUFJakUsTUFBTTRCLElBQUksQ0FBQ29CLElBQUksQ0FBQ0MsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUVsSCw4REFBQ1k7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FBdUI7Ozs7OzswQ0FDdEMsOERBQUNEO2dDQUFJQyxXQUFVOztvQ0FBc0I7a0RBQU0sOERBQUNDO3dDQUFLQyxPQUFPOzRDQUFDQyxPQUFPO3dDQUFTO2tEQUFJakUsTUFBTTRCLElBQUksQ0FBQ1ksR0FBRyxDQUFDUyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEgsQ0FBQztHQTlIdUJsRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zdW1tYXJ5LmpzPzFjYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VtbWFyeShwcm9wcyl7XG5cbiAgICAvLyBjdXJyZW50IHNlbGVjdGVkIGN1cnJlbmN5XG4gICAgY29uc3QgW2N1cnJlbmN5LCBzZXRDdXJyZW5jeV0gPSB1c2VTdGF0ZSh7bmFtZTogJ0FEQScsIHZhbHVlOiB7cHJpY2U6IDEsIGNoYW5nZTI0aHI6IDB9LCBzeW1ib2w6ICfigrMnfSlcblxuICAgIC8vIGFkYSBiYWxhbmNlXG4gICAgY29uc3QgW2FkYUJhbGFuY2UsIHNldEFkYUJhbGFuY2VdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3N0YWtlUG9vbCwgc2V0U3Rha2VQb29sXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc3QgW2Z0VmFsdWUsIHNldEZ0VmFsdWVdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW25mdFZhbHVlLCBzZXROZnRWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbdG90YWxWYWx1ZSwgc2V0VG90YWxWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIGNvbnN0IFtkaXNwbGF5ZWROZnQsIHNldERpc3BsYXllZE5mdF0gPSB1c2VTdGF0ZSh7aXBmczogJy9ibGFjay5qcGVnJywgbmFtZTogJyd9KTtcblxuICAgIGNvbnN0IFtkaXNwbGF5ZWRGdCwgc2V0RGlzcGxheWVkRnRdID0gdXNlU3RhdGUoe2lwZnM6ICcvYmxhY2suanBlZycsIG5hbWU6ICcnfSk7XG5cbiAgICBjb25zdCBbbmZ0RGlzcGxheVRleHQsIHNldE5mdERpc3BsYXlUZXh0XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZnREaXNwbGF5VGV4dCwgc2V0RnREaXNwbGF5VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRTdW1tYXJ5SW5mbygpIHtcbiAgICAgICAgICBpZiAocHJvcHMuZGF0YS5zdGFrZSAmJiBwcm9wcy5jdXJyZW5jeSkge1xuICAgICAgICAgICAgbGV0IHN0YWtlSW5mbyA9IGF3YWl0IGdldFN0YWtlSW5mbyhwcm9wcy5kYXRhLnN0YWtlKTtcbiAgICAgICAgICAgIHNldEFkYUJhbGFuY2Uoc3Rha2VJbmZvWzBdLnRvdGFsX2JhbGFuY2UgLyAxMDAwMDAwKTtcbiAgICAgICAgICAgIGxldCBwb29sID0gYXdhaXQgZ2V0UG9vbEluZm8oc3Rha2VJbmZvWzBdLmRlbGVnYXRlZF9wb29sKTtcbiAgICAgICAgICAgIGxldCBwb29sVGlja2VyID0gcG9vbFswXS5tZXRhX2pzb24udGlja2VyO1xuICAgICAgICAgICAgc2V0U3Rha2VQb29sKHBvb2xUaWNrZXIpO1xuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgZ2V0U3VtbWFyeUluZm8oKTtcbiAgICAgIH0sIFtwcm9wcy5kYXRhLCBwcm9wcy5jdXJyZW5jeV0pO1xuICAgIFxuXG4gICAgLy8gcmV0dXJucyBlc3RpbWF0ZWQgdG90YWwgdmFsdWUgb2YgZnVuZ2libGUgdG9rZW5zIGZyb20gY29pbmdlY2tvIHByaWNlcyBpbiBBREFcbiAgICBmdW5jdGlvbiBnZXRUb2tlbkJhbGFuY2UoZnRzKXtcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgZnRzKXtcblxuICAgICAgICAgICAgbGV0IHRva2VuID0gZWxlbWVudFswXTtcbiAgICAgICAgICAgIGlmKHRva2VuLnByaWNlcz8uY3VycmVudCAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICB0b3RhbCArPSB0b2tlbi5wcmljZXMuY3VycmVudCAqIHRva2VuLnF1YW50aXR5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b3RhbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUb3RhbE5mdHMobmZ0cyl7XG4gICAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICAgIGZvcihjb25zdCBlbGVtZW50IG9mIG5mdHMpe1xuICAgICAgICAgICAgdG90YWwgKz0gZWxlbWVudC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvdGFsO1xuICAgIH1cblxuICAgIC8vIHJlcXVlc3RzIGFjY291bnQgaW5mbyBmcm9tIHN0YWtlIGFkZHJlc3MgZnJvbSBrb2lvcyBhcGkgLS0gYWRhIGJhbGFuY2UgdXNlZFxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFN0YWtlSW5mbyhzdGFrZUFkZHJlc3Mpe1xuICAgICAgICB0cnl7XG4gICAgICAgICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmtvaW9zLnJlc3QvYXBpL3YwL2FjY291bnRfaW5mbycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICBcIl9zdGFrZV9hZGRyZXNzZXNcIjogW1xuICAgICAgICAgICAgICAgIHN0YWtlQWRkcmVzc1xuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pO1xuICAgICAgXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgICAgIC8vIHJlcXVlc3RzIGFjY291bnQgaW5mbyBmcm9tIHN0YWtlIGFkZHJlc3MgZnJvbSBrb2lvcyBhcGkgLS0gYWRhIGJhbGFuY2UgdXNlZFxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFBvb2xJbmZvKHBvb2wpe1xuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkua29pb3MucmVzdC9hcGkvdjAvcG9vbF9pbmZvJywge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIFwiX3Bvb2xfYmVjaDMyX2lkc1wiOiBbXG4gICAgICAgICAgICAgIHBvb2xcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAnc3VtbWFyeS10aXRsZSc+WW91ciBXYWxsZXQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS1nZW5lcmFsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5LWdlbmVyYWwtaXRlbVwiPlN0YWtlIEFkZHJlc3M6IHtwcm9wcy5kYXRhLnN0YWtlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS1nZW5lcmFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5LWdlbmVyYWwtaXRlbVwiPkFEQSBCYWxhbmNlOiA8c3BhbiBzdHlsZT17e2NvbG9yOiAnZ3JlZW4nfX0+IHthZGFCYWxhbmNlfSBBREEgPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5LWdlbmVyYWwtaXRlbVwiPldhbGxldCBWYWx1ZTogPHNwYW4gY2xhc3NOYW1lPVwiY3VycmVuY3lcIj57cHJvcHMuY3VycmVuY3kuc3ltYm9sfTwvc3Bhbj48c3BhbiBzdHlsZT17e2NvbG9yOiAnZ3JlZW4nfX0+e3RvdGFsVmFsdWV9PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5LWdlbmVyYWwtaXRlbVwiPkRlbGVnYXRlZCBTdGFrZSBQb29sOiA8c3BhbiBzdHlsZT17e2NvbG9yOiBcIm9yYW5nZVwifX0+e3N0YWtlUG9vbH08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS10b2tlbnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnktdG9rZW5zLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5LXRva2Vucy10aXRsZVwiPk5vbi1GdW5naWJsZSBUb2tlbnM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5LXRva2Vucy10ZXh0XCI+VG90YWwgTkZUczo8c3BhbiBzdHlsZT17e2NvbG9yOiAncmVkJ319PntnZXRUb3RhbE5mdHMocHJvcHMuZGF0YS5uZnRzKX08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS10b2tlbnMtdGV4dFwiPlVuaXF1ZSBQb2xpY3kgSURzOjxzcGFuIHN0eWxlPXt7Y29sb3I6ICd5ZWxsb3cnfX0+e3Byb3BzLmRhdGEubmZ0cy5sZW5ndGh9PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS10b2tlbnMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnktdG9rZW5zLXRpdGxlXCI+RnVuZ2libGUgVG9rZW5zPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS10b2tlbnMtdGV4dFwiPkNvaW5zOjxzcGFuIHN0eWxlPXt7Y29sb3I6ICcjY2NmZmNjJ319Pntwcm9wcy5kYXRhLmZ0cy5sZW5ndGh9PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlN1bW1hcnkiLCJwcm9wcyIsImN1cnJlbmN5Iiwic2V0Q3VycmVuY3kiLCJuYW1lIiwidmFsdWUiLCJwcmljZSIsImNoYW5nZTI0aHIiLCJzeW1ib2wiLCJhZGFCYWxhbmNlIiwic2V0QWRhQmFsYW5jZSIsInN0YWtlUG9vbCIsInNldFN0YWtlUG9vbCIsImZ0VmFsdWUiLCJzZXRGdFZhbHVlIiwibmZ0VmFsdWUiLCJzZXROZnRWYWx1ZSIsInRvdGFsVmFsdWUiLCJzZXRUb3RhbFZhbHVlIiwiZGlzcGxheWVkTmZ0Iiwic2V0RGlzcGxheWVkTmZ0IiwiaXBmcyIsImRpc3BsYXllZEZ0Iiwic2V0RGlzcGxheWVkRnQiLCJuZnREaXNwbGF5VGV4dCIsInNldE5mdERpc3BsYXlUZXh0IiwiZnREaXNwbGF5VGV4dCIsInNldEZ0RGlzcGxheVRleHQiLCJnZXRTdW1tYXJ5SW5mbyIsImRhdGEiLCJzdGFrZSIsInN0YWtlSW5mbyIsImdldFN0YWtlSW5mbyIsInRvdGFsX2JhbGFuY2UiLCJwb29sIiwiZ2V0UG9vbEluZm8iLCJkZWxlZ2F0ZWRfcG9vbCIsInBvb2xUaWNrZXIiLCJtZXRhX2pzb24iLCJ0aWNrZXIiLCJnZXRUb2tlbkJhbGFuY2UiLCJmdHMiLCJ0b3RhbCIsImVsZW1lbnQiLCJ0b2tlbiIsInByaWNlcyIsImN1cnJlbnQiLCJxdWFudGl0eSIsImdldFRvdGFsTmZ0cyIsIm5mdHMiLCJsZW5ndGgiLCJzdGFrZUFkZHJlc3MiLCJyZXEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImpzb24iLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJzdHlsZSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/summary.js\n"));

/***/ })

});