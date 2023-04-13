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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Summary; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Summary(props) {\n    _s();\n    // current selected currency\n    // ada balance\n    const [adaBalance, setAdaBalance] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [stakePool, setStakePool] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [totalValue, setTotalValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [nftValue, setNftValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [tokenValue, setTokenValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function getSummaryInfo() {\n            if (props.data.stake && props.currency) {\n                let stakeInfo = await getStakeInfo(props.data.stake);\n                setAdaBalance(stakeInfo[0].total_balance / 1000000);\n                let pool = await getPoolInfo(stakeInfo[0].delegated_pool);\n                let poolTicker = pool[0].meta_json.ticker;\n                setStakePool(poolTicker);\n                console.log(props.currency);\n                // get total value of fungible tokens\n                let tokenBalance = getTokenBalance(props.data.fts) * props.currency.value.price;\n                setTokenValue(tokenBalance.toFixed(2));\n                //get total value of nfts\n                let nftBalance = getNftValue(props.data.nfts) * props.currency.value.price;\n                setNftValue(nftBalance.toFixed(2));\n                let adaBalanceCurrency = adaBalance * props.currency.value.price;\n                let total = adaBalanceCurrency + tokenBalance + nftBalance;\n                setTotalValue(total.toFixed(2));\n            // get top 5 nfts by value\n            // get top 5 coins by value\n            }\n        }\n        getSummaryInfo();\n    }, [\n        props.data,\n        props.currency\n    ]);\n    function getNftValue(nfts) {\n        let total = 0;\n        for (const element of nfts){\n            for (const nft of element){\n                if (nft.floor_price != null) {\n                    total += nft.floor_price;\n                }\n            }\n        }\n        return total;\n    }\n    // returns estimated total value of fungible tokens from coingecko prices in ADA\n    function getTokenBalance(fts) {\n        let total = 0;\n        for (const element of fts){\n            var _token_prices;\n            let token = element[0];\n            if (((_token_prices = token.prices) === null || _token_prices === void 0 ? void 0 : _token_prices.current) != null) {\n                total += token.prices.current * token.quantity;\n            }\n        }\n        return total;\n    }\n    function getTotalNfts(nfts) {\n        let total = 0;\n        for (const element of nfts){\n            total += element.length;\n        }\n        return total;\n    }\n    // requests account info from stake address from koios api -- ada balance used\n    async function getStakeInfo(stakeAddress) {\n        try {\n            const req = await fetch(\"https://api.koios.rest/api/v0/account_info\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    \"_stake_addresses\": [\n                        stakeAddress\n                    ]\n                })\n            });\n            const res = await req.json();\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    // requests account info from stake address from koios api -- ada balance used\n    async function getPoolInfo(pool) {\n        try {\n            const req = await fetch(\"https://api.koios.rest/api/v0/pool_info\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    \"_pool_bech32_ids\": [\n                        pool\n                    ]\n                })\n            });\n            const res = await req.json();\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"summary\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-title\",\n                children: \"Your Wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                lineNumber: 133,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-general\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"summary-general-item\",\n                        children: [\n                            \"Stake Address: \",\n                            props.data.stake\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                        lineNumber: 135,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"summary-general-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"summary-general-item\",\n                                children: [\n                                    \"ADA Balance: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"green\"\n                                        },\n                                        children: [\n                                            \" \",\n                                            adaBalance,\n                                            \" ADA \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                        lineNumber: 137,\n                                        columnNumber: 70\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                lineNumber: 137,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"summary-general-item\",\n                                children: [\n                                    \"Wallet Value: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"currency\",\n                                        children: props.currency.symbol\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                        lineNumber: 138,\n                                        columnNumber: 71\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"green\"\n                                        },\n                                        children: totalValue\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                        lineNumber: 138,\n                                        columnNumber: 128\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                lineNumber: 138,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"summary-general-item\",\n                                children: [\n                                    \"Delegated Stake Pool: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"orange\"\n                                        },\n                                        children: stakePool\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                        lineNumber: 139,\n                                        columnNumber: 79\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                lineNumber: 139,\n                                columnNumber: 19\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                        lineNumber: 136,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                lineNumber: 134,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary-tokens\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"summary-tokens-item\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"summary-tokens-title\",\n                                children: \"Non-Fungible Tokens\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                lineNumber: 144,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"summary-tokens-text\",\n                                children: [\n                                    \"Total NFTs:\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"red\"\n                                        },\n                                        children: getTotalNfts(props.data.nfts)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                        lineNumber: 145,\n                                        columnNumber: 69\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                lineNumber: 145,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"summary-tokens-text\",\n                                children: [\n                                    \"Unique Policy IDs:\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"yellow\"\n                                        },\n                                        children: props.data.nfts.length\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                        lineNumber: 146,\n                                        columnNumber: 76\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                lineNumber: 146,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"summary-tokens-text\",\n                                children: [\n                                    \"Total Value of NFTs:\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"currency\",\n                                        children: props.currency.symbol\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                        lineNumber: 147,\n                                        columnNumber: 78\n                                    }, this),\n                                    \" \",\n                                    nftValue\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                lineNumber: 147,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                        lineNumber: 143,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"summary-tokens-item\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"summary-tokens-title\",\n                                children: \"Fungible Tokens\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                lineNumber: 150,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"summary-tokens-text\",\n                                children: [\n                                    \"Coins:\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"#ccffcc\"\n                                        },\n                                        children: props.data.fts.length\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                        lineNumber: 151,\n                                        columnNumber: 64\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                lineNumber: 151,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"summary-tokens-text\",\n                                children: [\n                                    \"Total Coin Value:\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"currency\",\n                                        children: props.currency.symbol\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                        lineNumber: 152,\n                                        columnNumber: 75\n                                    }, this),\n                                    \" \",\n                                    tokenValue\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                                lineNumber: 152,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                        lineNumber: 149,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n                lineNumber: 142,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer-new/pages/summary.js\",\n        lineNumber: 132,\n        columnNumber: 9\n    }, this);\n}\n_s(Summary, \"fSNlozdjtuU0Pb2QyfaEusOjYWY=\");\n_c = Summary;\nvar _c;\n$RefreshReg$(_c, \"Summary\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdW1tYXJ5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQjtBQUNZO0FBRTVCLFNBQVNHLFFBQVFDLEtBQUssRUFBQzs7SUFFbEMsNEJBQTRCO0lBRTVCLGNBQWM7SUFDZCxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0osK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDSyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFDLElBQUk7SUFFL0MsTUFBTSxDQUFDTyxZQUFZQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNXLFlBQVlDLGNBQWMsR0FBR1osK0NBQVFBLENBQUM7SUFFN0NELGdEQUFTQSxDQUFDLElBQU07UUFDWixlQUFlYyxpQkFBaUI7WUFDOUIsSUFBSVgsTUFBTVksSUFBSSxDQUFDQyxLQUFLLElBQUliLE1BQU1jLFFBQVEsRUFBRTtnQkFDdEMsSUFBSUMsWUFBWSxNQUFNQyxhQUFhaEIsTUFBTVksSUFBSSxDQUFDQyxLQUFLO2dCQUNuRFgsY0FBY2EsU0FBUyxDQUFDLEVBQUUsQ0FBQ0UsYUFBYSxHQUFHO2dCQUMzQyxJQUFJQyxPQUFPLE1BQU1DLFlBQVlKLFNBQVMsQ0FBQyxFQUFFLENBQUNLLGNBQWM7Z0JBQ3hELElBQUlDLGFBQWFILElBQUksQ0FBQyxFQUFFLENBQUNJLFNBQVMsQ0FBQ0MsTUFBTTtnQkFDekNuQixhQUFhaUI7Z0JBQ2JHLFFBQVFDLEdBQUcsQ0FBQ3pCLE1BQU1jLFFBQVE7Z0JBRTFCLHFDQUFxQztnQkFDckMsSUFBSVksZUFBZUMsZ0JBQWdCM0IsTUFBTVksSUFBSSxDQUFDZ0IsR0FBRyxJQUFJNUIsTUFBTWMsUUFBUSxDQUFDZSxLQUFLLENBQUNDLEtBQUs7Z0JBQy9FcEIsY0FBYyxhQUFlcUIsT0FBTyxDQUFDO2dCQUVyQyx5QkFBeUI7Z0JBQ3pCLElBQUlDLGFBQWFDLFlBQVlqQyxNQUFNWSxJQUFJLENBQUNzQixJQUFJLElBQUlsQyxNQUFNYyxRQUFRLENBQUNlLEtBQUssQ0FBQ0MsS0FBSztnQkFDMUV0QixZQUFZd0IsV0FBV0QsT0FBTyxDQUFDO2dCQUUvQixJQUFJSSxxQkFBcUJsQyxhQUFhRCxNQUFNYyxRQUFRLENBQUNlLEtBQUssQ0FBQ0MsS0FBSztnQkFFaEUsSUFBSU0sUUFBUUQscUJBQXFCVCxlQUFlTTtnQkFDaEQxQixjQUFjOEIsTUFBTUwsT0FBTyxDQUFDO1lBRzVCLDBCQUEwQjtZQUUxQiwyQkFBMkI7WUFFN0IsQ0FBQztRQUNIO1FBRUFwQjtJQUNGLEdBQUc7UUFBQ1gsTUFBTVksSUFBSTtRQUFFWixNQUFNYyxRQUFRO0tBQUM7SUFJakMsU0FBU21CLFlBQVlDLElBQUksRUFBQztRQUN4QixJQUFJRSxRQUFRO1FBQ1osS0FBSSxNQUFNQyxXQUFXSCxLQUFLO1lBQ3hCLEtBQUksTUFBTUksT0FBT0QsUUFBUTtnQkFDdkIsSUFBR0MsSUFBSUMsV0FBVyxJQUFJLElBQUksRUFBQztvQkFDekJILFNBQVNFLElBQUlDLFdBQVc7Z0JBQzFCLENBQUM7WUFDSDtRQUNGO1FBQ0EsT0FBT0g7SUFDVDtJQUdBLGdGQUFnRjtJQUNoRixTQUFTVCxnQkFBZ0JDLEdBQUcsRUFBQztRQUN6QixJQUFJUSxRQUFRO1FBQ1osS0FBSSxNQUFNQyxXQUFXVCxJQUFJO2dCQUdsQlk7WUFESCxJQUFJQSxRQUFRSCxPQUFPLENBQUMsRUFBRTtZQUN0QixJQUFHRyxDQUFBQSxDQUFBQSxnQkFBQUEsTUFBTUMsTUFBTSxjQUFaRCwyQkFBQUEsS0FBQUEsSUFBQUEsY0FBY0UsT0FBTyxLQUFJLElBQUksRUFBQztnQkFDN0JOLFNBQVNJLE1BQU1DLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHRixNQUFNRyxRQUFRO1lBQ2xELENBQUM7UUFDTDtRQUNBLE9BQU9QO0lBQ1g7SUFFQSxTQUFTUSxhQUFhVixJQUFJLEVBQUM7UUFDdkIsSUFBSUUsUUFBUTtRQUNaLEtBQUksTUFBTUMsV0FBV0gsS0FBSztZQUN0QkUsU0FBU0MsUUFBUVEsTUFBTTtRQUMzQjtRQUNBLE9BQU9UO0lBQ1g7SUFFQSw4RUFBOEU7SUFDOUUsZUFBZXBCLGFBQWE4QixZQUFZLEVBQUM7UUFDckMsSUFBRztZQUNELE1BQU1DLE1BQU0sTUFBTUMsTUFBTSw4Q0FBOEM7Z0JBQ3BFQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFDbkIsb0JBQW9CO3dCQUNsQlA7cUJBQ0Q7Z0JBQ0g7WUFDRjtZQUVBLE1BQU1RLE1BQU0sTUFBTVAsSUFBSVEsSUFBSTtZQUMxQixPQUFPRDtRQUNULEVBQUMsT0FBTUUsT0FBTTtZQUNYLE9BQU8sSUFBSTtRQUNiO0lBQ0Y7SUFHSSw4RUFBOEU7SUFDcEYsZUFBZXJDLFlBQVlELElBQUksRUFBQztRQUM5QixJQUFHO1lBQ0QsTUFBTTZCLE1BQU0sTUFBTUMsTUFBTSwyQ0FBMkM7Z0JBQ2pFQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFDbkIsb0JBQW9CO3dCQUNsQm5DO3FCQUNEO2dCQUNIO1lBQ0Y7WUFFQSxNQUFNb0MsTUFBTSxNQUFNUCxJQUFJUSxJQUFJO1lBQzFCLE9BQU9EO1FBQ1QsRUFBQyxPQUFNRSxPQUFNO1lBQ1gsT0FBTyxJQUFJO1FBQ2I7SUFDRjtJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVk7MEJBQWdCOzs7Ozs7MEJBQ2pDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVOzs0QkFBdUI7NEJBQWdCMUQsTUFBTVksSUFBSSxDQUFDQyxLQUFLOzs7Ozs7O2tDQUN0RSw4REFBQzRDO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O29DQUF1QjtrREFBYSw4REFBQ0M7d0NBQUtDLE9BQU87NENBQUNDLE9BQU87d0NBQU87OzRDQUFHOzRDQUFFNUQ7NENBQVc7Ozs7Ozs7Ozs7Ozs7MENBQy9GLDhEQUFDd0Q7Z0NBQUlDLFdBQVU7O29DQUF1QjtrREFBYyw4REFBQ0M7d0NBQUtELFdBQVU7a0RBQVkxRCxNQUFNYyxRQUFRLENBQUNnRCxNQUFNOzs7Ozs7a0RBQVEsOERBQUNIO3dDQUFLQyxPQUFPOzRDQUFDQyxPQUFPO3dDQUFPO2tEQUFJeEQ7Ozs7Ozs7Ozs7OzswQ0FDN0ksOERBQUNvRDtnQ0FBSUMsV0FBVTs7b0NBQXVCO2tEQUFzQiw4REFBQ0M7d0NBQUtDLE9BQU87NENBQUNDLE9BQU87d0NBQVE7a0RBQUkxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUduRyw4REFBQ3NEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FBdUI7Ozs7OzswQ0FDdEMsOERBQUNEO2dDQUFJQyxXQUFVOztvQ0FBc0I7a0RBQVcsOERBQUNDO3dDQUFLQyxPQUFPOzRDQUFDQyxPQUFPO3dDQUFLO2tEQUFJakIsYUFBYTVDLE1BQU1ZLElBQUksQ0FBQ3NCLElBQUk7Ozs7Ozs7Ozs7OzswQ0FDMUcsOERBQUN1QjtnQ0FBSUMsV0FBVTs7b0NBQXNCO2tEQUFrQiw4REFBQ0M7d0NBQUtDLE9BQU87NENBQUNDLE9BQU87d0NBQVE7a0RBQUk3RCxNQUFNWSxJQUFJLENBQUNzQixJQUFJLENBQUNXLE1BQU07Ozs7Ozs7Ozs7OzswQ0FDOUcsOERBQUNZO2dDQUFJQyxXQUFVOztvQ0FBc0I7a0RBQW9CLDhEQUFDQzt3Q0FBS0QsV0FBVTtrREFBWTFELE1BQU1jLFFBQVEsQ0FBQ2dELE1BQU07Ozs7OztvQ0FBUTtvQ0FBRXZEOzs7Ozs7Ozs7Ozs7O2tDQUV4SCw4REFBQ2tEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQXVCOzs7Ozs7MENBQ3RDLDhEQUFDRDtnQ0FBSUMsV0FBVTs7b0NBQXNCO2tEQUFNLDhEQUFDQzt3Q0FBS0MsT0FBTzs0Q0FBQ0MsT0FBTzt3Q0FBUztrREFBSTdELE1BQU1ZLElBQUksQ0FBQ2dCLEdBQUcsQ0FBQ2lCLE1BQU07Ozs7Ozs7Ozs7OzswQ0FDbEcsOERBQUNZO2dDQUFJQyxXQUFVOztvQ0FBc0I7a0RBQWlCLDhEQUFDQzt3Q0FBS0QsV0FBVTtrREFBWTFELE1BQU1jLFFBQVEsQ0FBQ2dELE1BQU07Ozs7OztvQ0FBUTtvQ0FBRXJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JJLENBQUM7R0F6SnVCVjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zdW1tYXJ5LmpzPzFjYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VtbWFyeShwcm9wcyl7XG5cbiAgICAvLyBjdXJyZW50IHNlbGVjdGVkIGN1cnJlbmN5XG5cbiAgICAvLyBhZGEgYmFsYW5jZVxuICAgIGNvbnN0IFthZGFCYWxhbmNlLCBzZXRBZGFCYWxhbmNlXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtzdGFrZVBvb2wsIHNldFN0YWtlUG9vbF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIGNvbnN0IFt0b3RhbFZhbHVlLCBzZXRUb3RhbFZhbHVlXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtuZnRWYWx1ZSwgc2V0TmZ0VmFsdWVdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3Rva2VuVmFsdWUsIHNldFRva2VuVmFsdWVdID0gdXNlU3RhdGUoMCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRTdW1tYXJ5SW5mbygpIHtcbiAgICAgICAgICBpZiAocHJvcHMuZGF0YS5zdGFrZSAmJiBwcm9wcy5jdXJyZW5jeSkge1xuICAgICAgICAgICAgbGV0IHN0YWtlSW5mbyA9IGF3YWl0IGdldFN0YWtlSW5mbyhwcm9wcy5kYXRhLnN0YWtlKTtcbiAgICAgICAgICAgIHNldEFkYUJhbGFuY2Uoc3Rha2VJbmZvWzBdLnRvdGFsX2JhbGFuY2UgLyAxMDAwMDAwKTtcbiAgICAgICAgICAgIGxldCBwb29sID0gYXdhaXQgZ2V0UG9vbEluZm8oc3Rha2VJbmZvWzBdLmRlbGVnYXRlZF9wb29sKTtcbiAgICAgICAgICAgIGxldCBwb29sVGlja2VyID0gcG9vbFswXS5tZXRhX2pzb24udGlja2VyO1xuICAgICAgICAgICAgc2V0U3Rha2VQb29sKHBvb2xUaWNrZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvcHMuY3VycmVuY3kpXG5cbiAgICAgICAgICAgIC8vIGdldCB0b3RhbCB2YWx1ZSBvZiBmdW5naWJsZSB0b2tlbnNcbiAgICAgICAgICAgIGxldCB0b2tlbkJhbGFuY2UgPSBnZXRUb2tlbkJhbGFuY2UocHJvcHMuZGF0YS5mdHMpICogcHJvcHMuY3VycmVuY3kudmFsdWUucHJpY2U7XG4gICAgICAgICAgICBzZXRUb2tlblZhbHVlKCh0b2tlbkJhbGFuY2UpLnRvRml4ZWQoMikpO1xuXG4gICAgICAgICAgICAvL2dldCB0b3RhbCB2YWx1ZSBvZiBuZnRzXG4gICAgICAgICAgICBsZXQgbmZ0QmFsYW5jZSA9IGdldE5mdFZhbHVlKHByb3BzLmRhdGEubmZ0cykgKiBwcm9wcy5jdXJyZW5jeS52YWx1ZS5wcmljZTtcbiAgICAgICAgICAgIHNldE5mdFZhbHVlKG5mdEJhbGFuY2UudG9GaXhlZCgyKSk7XG5cbiAgICAgICAgICAgIGxldCBhZGFCYWxhbmNlQ3VycmVuY3kgPSBhZGFCYWxhbmNlICogcHJvcHMuY3VycmVuY3kudmFsdWUucHJpY2U7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCB0b3RhbCA9IGFkYUJhbGFuY2VDdXJyZW5jeSArIHRva2VuQmFsYW5jZSArIG5mdEJhbGFuY2U7XG4gICAgICAgICAgICBzZXRUb3RhbFZhbHVlKHRvdGFsLnRvRml4ZWQoMikpO1xuXG5cbiAgICAgICAgICAgIC8vIGdldCB0b3AgNSBuZnRzIGJ5IHZhbHVlXG5cbiAgICAgICAgICAgIC8vIGdldCB0b3AgNSBjb2lucyBieSB2YWx1ZVxuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgZ2V0U3VtbWFyeUluZm8oKTtcbiAgICAgIH0sIFtwcm9wcy5kYXRhLCBwcm9wcy5jdXJyZW5jeV0pO1xuXG4gICAgXG4gICAgXG4gICAgZnVuY3Rpb24gZ2V0TmZ0VmFsdWUobmZ0cyl7XG4gICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgbmZ0cyl7XG4gICAgICAgIGZvcihjb25zdCBuZnQgb2YgZWxlbWVudCl7XG4gICAgICAgICAgaWYobmZ0LmZsb29yX3ByaWNlICE9IG51bGwpe1xuICAgICAgICAgICAgdG90YWwgKz0gbmZ0LmZsb29yX3ByaWNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRvdGFsO1xuICAgIH1cbiAgICBcblxuICAgIC8vIHJldHVybnMgZXN0aW1hdGVkIHRvdGFsIHZhbHVlIG9mIGZ1bmdpYmxlIHRva2VucyBmcm9tIGNvaW5nZWNrbyBwcmljZXMgaW4gQURBXG4gICAgZnVuY3Rpb24gZ2V0VG9rZW5CYWxhbmNlKGZ0cyl7XG4gICAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICAgIGZvcihjb25zdCBlbGVtZW50IG9mIGZ0cyl7XG5cbiAgICAgICAgICAgIGxldCB0b2tlbiA9IGVsZW1lbnRbMF07XG4gICAgICAgICAgICBpZih0b2tlbi5wcmljZXM/LmN1cnJlbnQgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgdG90YWwgKz0gdG9rZW4ucHJpY2VzLmN1cnJlbnQgKiB0b2tlbi5xdWFudGl0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG90YWw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VG90YWxOZnRzKG5mdHMpe1xuICAgICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgICBmb3IoY29uc3QgZWxlbWVudCBvZiBuZnRzKXtcbiAgICAgICAgICAgIHRvdGFsICs9IGVsZW1lbnQubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b3RhbDtcbiAgICB9XG5cbiAgICAvLyByZXF1ZXN0cyBhY2NvdW50IGluZm8gZnJvbSBzdGFrZSBhZGRyZXNzIGZyb20ga29pb3MgYXBpIC0tIGFkYSBiYWxhbmNlIHVzZWRcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRTdGFrZUluZm8oc3Rha2VBZGRyZXNzKXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5rb2lvcy5yZXN0L2FwaS92MC9hY2NvdW50X2luZm8nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgXCJfc3Rha2VfYWRkcmVzc2VzXCI6IFtcbiAgICAgICAgICAgICAgICBzdGFrZUFkZHJlc3NcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KTtcbiAgICAgIFxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgICAgICAvLyByZXF1ZXN0cyBhY2NvdW50IGluZm8gZnJvbSBzdGFrZSBhZGRyZXNzIGZyb20ga29pb3MgYXBpIC0tIGFkYSBiYWxhbmNlIHVzZWRcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRQb29sSW5mbyhwb29sKXtcbiAgICAgIHRyeXtcbiAgICAgICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmtvaW9zLnJlc3QvYXBpL3YwL3Bvb2xfaW5mbycsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBcIl9wb29sX2JlY2gzMl9pZHNcIjogW1xuICAgICAgICAgICAgICBwb29sXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ3N1bW1hcnktdGl0bGUnPllvdXIgV2FsbGV0PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnktZ2VuZXJhbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS1nZW5lcmFsLWl0ZW1cIj5TdGFrZSBBZGRyZXNzOiB7cHJvcHMuZGF0YS5zdGFrZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnktZ2VuZXJhbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS1nZW5lcmFsLWl0ZW1cIj5BREEgQmFsYW5jZTogPHNwYW4gc3R5bGU9e3tjb2xvcjogJ2dyZWVuJ319PiB7YWRhQmFsYW5jZX0gQURBIDwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS1nZW5lcmFsLWl0ZW1cIj5XYWxsZXQgVmFsdWU6IDxzcGFuIGNsYXNzTmFtZT1cImN1cnJlbmN5XCI+e3Byb3BzLmN1cnJlbmN5LnN5bWJvbH08L3NwYW4+PHNwYW4gc3R5bGU9e3tjb2xvcjogJ2dyZWVuJ319Pnt0b3RhbFZhbHVlfTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS1nZW5lcmFsLWl0ZW1cIj5EZWxlZ2F0ZWQgU3Rha2UgUG9vbDogPHNwYW4gc3R5bGU9e3tjb2xvcjogXCJvcmFuZ2VcIn19PntzdGFrZVBvb2x9PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnktdG9rZW5zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5LXRva2Vucy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS10b2tlbnMtdGl0bGVcIj5Ob24tRnVuZ2libGUgVG9rZW5zPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS10b2tlbnMtdGV4dFwiPlRvdGFsIE5GVHM6PHNwYW4gc3R5bGU9e3tjb2xvcjogJ3JlZCd9fT57Z2V0VG90YWxOZnRzKHByb3BzLmRhdGEubmZ0cyl9PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnktdG9rZW5zLXRleHRcIj5VbmlxdWUgUG9saWN5IElEczo8c3BhbiBzdHlsZT17e2NvbG9yOiAneWVsbG93J319Pntwcm9wcy5kYXRhLm5mdHMubGVuZ3RofTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5LXRva2Vucy10ZXh0XCI+VG90YWwgVmFsdWUgb2YgTkZUczo8c3BhbiBjbGFzc05hbWU9XCJjdXJyZW5jeVwiPntwcm9wcy5jdXJyZW5jeS5zeW1ib2x9PC9zcGFuPiB7bmZ0VmFsdWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5LXRva2Vucy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS10b2tlbnMtdGl0bGVcIj5GdW5naWJsZSBUb2tlbnM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5LXRva2Vucy10ZXh0XCI+Q29pbnM6PHNwYW4gc3R5bGU9e3tjb2xvcjogJyNjY2ZmY2MnfX0+e3Byb3BzLmRhdGEuZnRzLmxlbmd0aH08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeS10b2tlbnMtdGV4dFwiPlRvdGFsIENvaW4gVmFsdWU6PHNwYW4gY2xhc3NOYW1lPVwiY3VycmVuY3lcIj57cHJvcHMuY3VycmVuY3kuc3ltYm9sfTwvc3Bhbj4ge3Rva2VuVmFsdWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3VtbWFyeSIsInByb3BzIiwiYWRhQmFsYW5jZSIsInNldEFkYUJhbGFuY2UiLCJzdGFrZVBvb2wiLCJzZXRTdGFrZVBvb2wiLCJ0b3RhbFZhbHVlIiwic2V0VG90YWxWYWx1ZSIsIm5mdFZhbHVlIiwic2V0TmZ0VmFsdWUiLCJ0b2tlblZhbHVlIiwic2V0VG9rZW5WYWx1ZSIsImdldFN1bW1hcnlJbmZvIiwiZGF0YSIsInN0YWtlIiwiY3VycmVuY3kiLCJzdGFrZUluZm8iLCJnZXRTdGFrZUluZm8iLCJ0b3RhbF9iYWxhbmNlIiwicG9vbCIsImdldFBvb2xJbmZvIiwiZGVsZWdhdGVkX3Bvb2wiLCJwb29sVGlja2VyIiwibWV0YV9qc29uIiwidGlja2VyIiwiY29uc29sZSIsImxvZyIsInRva2VuQmFsYW5jZSIsImdldFRva2VuQmFsYW5jZSIsImZ0cyIsInZhbHVlIiwicHJpY2UiLCJ0b0ZpeGVkIiwibmZ0QmFsYW5jZSIsImdldE5mdFZhbHVlIiwibmZ0cyIsImFkYUJhbGFuY2VDdXJyZW5jeSIsInRvdGFsIiwiZWxlbWVudCIsIm5mdCIsImZsb29yX3ByaWNlIiwidG9rZW4iLCJwcmljZXMiLCJjdXJyZW50IiwicXVhbnRpdHkiLCJnZXRUb3RhbE5mdHMiLCJsZW5ndGgiLCJzdGFrZUFkZHJlc3MiLCJyZXEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImpzb24iLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJzdHlsZSIsImNvbG9yIiwic3ltYm9sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/summary.js\n"));

/***/ })

});