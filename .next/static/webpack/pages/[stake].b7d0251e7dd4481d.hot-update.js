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

/***/ "./src/pages/fts.js":
/*!**************************!*\
  !*** ./src/pages/fts.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Fts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Fts(props) {\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const getData = async ()=>{\n            if (props.tokens != null) {\n                let fts = props.tokens.fts;\n                displayTokens(fts);\n            }\n        };\n        getData();\n    }, [\n        props\n    ]);\n    const displayTokens = async (fts)=>{\n        if (fts == null || props.prices == null) {\n        //base\n        } else {\n            let _display = [];\n            let policies = Object.keys(fts);\n            _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                className: \"grid-item-ft\",\n                style: {\n                    color: \"white\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Coin\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Ticker\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 30,\n                        columnNumber: 24\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Quantity\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 30,\n                        columnNumber: 39\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Price\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"24h\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 31,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"7d\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 31,\n                        columnNumber: 37\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"30d\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 31,\n                        columnNumber: 48\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"1y\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 31,\n                        columnNumber: 60\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Value\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, \"keyregular\", true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 29,\n                columnNumber: 23\n            }, this));\n            let stakeData = await getAccountInfoFromKoios(props.tokens.stake);\n            let currency = props.prices.currency;\n            let _balance = (stakeData[0].total_balance / 1000000).toFixed(2);\n            let value = (currency.value * _balance).toFixed(2);\n            _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                className: \"grid-item-ft\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/cardano.png\",\n                            className: \"ft-img\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 38,\n                            columnNumber: 71\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 38,\n                        columnNumber: 67\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"ADA\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: [\n                            _balance,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: [\n                            currency.symbol,\n                            \" \",\n                            currency.value\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"-\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 40,\n                        columnNumber: 52\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: [\n                            currency.symbol,\n                            \" \",\n                            value,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 40,\n                        columnNumber: 62\n                    }, this)\n                ]\n            }, \"ada-ft\", true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 38,\n                columnNumber: 23\n            }, this));\n            for (const policy of policies){\n                let token = fts[policy][0];\n                let name = token.metadata.ticker;\n                if (token.metadata.ticker == null) {\n                    if (token.metadata.name != null) {\n                        name = token.metadata.name.toUpperCase();\n                    } else {\n                        name = \"unknown\";\n                    }\n                }\n                let currency = props.prices.currency;\n                let price = 0;\n                let value = 0;\n                let _change24h = 0;\n                let _change7d = 0;\n                let _change30d = 0;\n                let _change1y = 0;\n                if (token.prices != null) {\n                    price = (token.prices.current * currency.value).toFixed(2);\n                    value = (price * (token.quantity / 1000000)).toFixed(2);\n                    letusd24hChange = token.prices.change24h / 100;\n                    _change24h = (usd24hChange * currency.value * 100).toFixed(2);\n                    let usd7dChange = token.prices.change7d / 100;\n                    _change7d = (usd7dChange * currency.value * 100).toFixed(2);\n                    let usd30dChange = token.prices.change30d / 100;\n                    _change24 = (usd30dChange * currency.value * 100).toFixed(2);\n                    let usd1yChange = token.prices.change1y / 100;\n                    _change1y = (usd1yChange * currency.value * 100).toFixed(2);\n                }\n                _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    className: \"grid-item-ft\",\n                    onClick: ()=>router.push(\"/token/\" + token.policy_id + token.asset_name),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"ft-img\",\n                                src: token.ipfs\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                                lineNumber: 89,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: token.quantity / 1000000\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 90,\n                            columnNumber: 28\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: [\n                                currency.symbol,\n                                \" \",\n                                price,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 90,\n                            columnNumber: 64\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: [\n                                _change24h,\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: [\n                                _change7d,\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 91,\n                            columnNumber: 35\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: [\n                                _change30d,\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 91,\n                            columnNumber: 56\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: [\n                                _change1y,\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 91,\n                            columnNumber: 78\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: [\n                                currency.symbol,\n                                \" \",\n                                value\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, token.asset_name + \"ftunpriced\", true, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 87,\n                    columnNumber: 25\n                }, this));\n            }\n            let table = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"ft-table\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: _display\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 94,\n                    columnNumber: 49\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 94,\n                columnNumber: 21\n            }, this);\n            setDisplay(table);\n        }\n    };\n    async function getAccountInfoFromKoios(stakeAddress) {\n        const req = await fetch(\"https://api.koios.rest/api/v0/account_info\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"_stake_addresses\": [\n                    stakeAddress\n                ]\n            })\n        });\n        const res = await req.json();\n        return res;\n    }\n    //returns a grid view of all NFTs grouped by policy\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid-ft\",\n        children: display\n    }, void 0, false, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n        lineNumber: 121,\n        columnNumber: 9\n    }, this);\n}\n_s(Fts, \"TdQcjU6l/UJHsbfeJC//FZ+coQc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Fts;\nvar _c;\n$RefreshReg$(_c, \"Fts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7c0NBQVUsOERBQUNkO3NDQUFLYSxNQUFNVyxRQUFRLEdBQUU7Ozs7OztzQ0FBYyw4REFBQ3hCOztnQ0FBSUksU0FBU08sTUFBTTtnQ0FBQztnQ0FBRU87Z0NBQU07Ozs7Ozs7c0NBQ2hGLDhEQUFDbEI7O2dDQUFJbUI7Z0NBQVc7Ozs7Ozs7c0NBQU0sOERBQUNuQjs7Z0NBQUlvQjtnQ0FBVTs7Ozs7OztzQ0FBTSw4REFBQ3BCOztnQ0FBSXFCO2dDQUFXOzs7Ozs7O3NDQUFNLDhEQUFDckI7O2dDQUFJc0I7Z0NBQVU7Ozs7Ozs7c0NBQ2hGLDhEQUFDdEI7O2dDQUFJSSxTQUFTTyxNQUFNO2dDQUFDO2dDQUFFSDs7Ozs7Ozs7bUJBTEFLLE1BQU13QixVQUFVLEdBQUc7Ozs7O1lBTTlDO1lBQ0EsSUFBSUUsc0JBQVEsOERBQUNBO2dCQUFNMUMsV0FBVTswQkFBVyw0RUFBQzJDOzhCQUFPakQ7Ozs7Ozs7Ozs7O1lBQ2hEUCxXQUFXdUQ7UUFDYixDQUFDO0lBRUg7SUFFQSxlQUFlckMsd0JBQXdCdUMsWUFBWSxFQUFDO1FBQ2xELE1BQU1DLE1BQU0sTUFBTUMsTUFBTSw4Q0FBOEM7WUFDaEVDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNuQixvQkFBb0I7b0JBQ2xCUDtpQkFDRDtZQUNIO1FBQ0Y7UUFFSixNQUFNUSxNQUFNLE1BQU1QLElBQUlRLElBQUk7UUFDMUIsT0FBT0Q7SUFDWDtJQUlFLG1EQUFtRDtJQUNuRCxxQkFDSSw4REFBQ0U7UUFBSXRELFdBQVU7a0JBQVdkOzs7Ozs7QUFFbEMsQ0FBQztHQXRIdUJGOztRQUdMSCxrREFBU0E7OztLQUhKRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZnRzLmpzP2RiM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRnRzIChwcm9wcyl7XG5cbiAgICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PntcbiAgICAgIGlmKHByb3BzLnRva2VucyAhPSBudWxsKXtcblxuICAgICAgICBsZXQgZnRzID0gcHJvcHMudG9rZW5zLmZ0cztcbiAgICAgICAgZGlzcGxheVRva2VucyhmdHMpO1xuICAgICAgfVxuICAgIH1cbiAgICBnZXREYXRhKCk7XG4gICAgfSwgW3Byb3BzXSk7XG5cbiAgICBjb25zdCBkaXNwbGF5VG9rZW5zID0gYXN5bmMgKGZ0cykgPT4ge1xuICAgICAgaWYoZnRzPT0gbnVsbCB8fCBwcm9wcy5wcmljZXMgPT0gbnVsbCl7XG4gICAgICAgIC8vYmFzZVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgbGV0IF9kaXNwbGF5ID0gW107XG4gICAgICAgIGxldCBwb2xpY2llcyA9IE9iamVjdC5rZXlzKGZ0cyk7XG4gICAgICAgIF9kaXNwbGF5LnB1c2goPHRyIGtleSA9ICdrZXlyZWd1bGFyJyBjbGFzc05hbWUgPSBcImdyaWQtaXRlbS1mdFwiIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIn19PlxuICAgICAgICAgIDx0ZD5Db2luPC90ZD48dGQ+VGlja2VyPC90ZD48dGQ+UXVhbnRpdHk8L3RkPlxuICAgICAgICAgIDx0ZD5QcmljZTwvdGQ+PHRkPjI0aDwvdGQ+PHRkPjdkPC90ZD48dGQ+MzBkPC90ZD48dGQ+MXk8L3RkPlxuICAgICAgICAgIDx0ZD5WYWx1ZTwvdGQ+PC90cj4pXG5cbiAgICAgICAgbGV0IHN0YWtlRGF0YSA9IGF3YWl0IGdldEFjY291bnRJbmZvRnJvbUtvaW9zKHByb3BzLnRva2Vucy5zdGFrZSk7XG4gICAgICAgIGxldCBjdXJyZW5jeSA9IHByb3BzLnByaWNlcy5jdXJyZW5jeTtcbiAgICAgICAgbGV0IF9iYWxhbmNlID0gKHN0YWtlRGF0YVswXS50b3RhbF9iYWxhbmNlLzEwMDAwMDApLnRvRml4ZWQoMik7XG4gICAgICAgIGxldCB2YWx1ZSA9IChjdXJyZW5jeS52YWx1ZSpfYmFsYW5jZSkudG9GaXhlZCgyKTtcbiAgICAgICAgX2Rpc3BsYXkucHVzaCg8dHIga2V5ID0gJ2FkYS1mdCcgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtLWZ0XCI+PHRkPjxpbWcgc3JjPVwiL2NhcmRhbm8ucG5nXCIgY2xhc3NOYW1lPVwiZnQtaW1nXCI+PC9pbWc+PC90ZD5cbiAgICAgICAgPHRkPkFEQTwvdGQ+PHRkPntfYmFsYW5jZX0gPC90ZD5cbiAgICAgICAgPHRkPntjdXJyZW5jeS5zeW1ib2x9IHtjdXJyZW5jeS52YWx1ZX08L3RkPjx0ZD4tPC90ZD48dGQ+e2N1cnJlbmN5LnN5bWJvbH0ge3ZhbHVlfSA8L3RkPlxuICAgICAgICA8L3RyPilcblxuXG4gICAgICAgIGZvcihjb25zdCBwb2xpY3kgb2YgcG9saWNpZXMpe1xuICAgICAgICAgIGxldCB0b2tlbiA9IGZ0c1twb2xpY3ldWzBdO1xuICAgICAgICAgIGxldCBuYW1lID0gdG9rZW4ubWV0YWRhdGEudGlja2VyO1xuICAgICAgICAgIGlmKHRva2VuLm1ldGFkYXRhLnRpY2tlciA9PSBudWxsKXtcbiAgICAgICAgICAgIGlmKHRva2VuLm1ldGFkYXRhLm5hbWUgIT0gbnVsbCl7XG4gICAgICAgICAgICAgIG5hbWUgPSAodG9rZW4ubWV0YWRhdGEubmFtZSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgIG5hbWUgPSAndW5rbm93bic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IGN1cnJlbmN5ID0gcHJvcHMucHJpY2VzLmN1cnJlbmN5O1xuXG4gICAgICAgICAgbGV0IHByaWNlID0gMDtcbiAgICAgICAgICBsZXQgdmFsdWUgPSAwO1xuXG4gICAgICAgICAgbGV0IF9jaGFuZ2UyNGggPSAwO1xuICAgICAgICAgIGxldCBfY2hhbmdlN2QgPSAwO1xuICAgICAgICAgIGxldCBfY2hhbmdlMzBkID0gMDtcbiAgICAgICAgICBsZXQgX2NoYW5nZTF5ID0gMDtcbiAgICAgICAgICBpZih0b2tlbi5wcmljZXMgIT0gbnVsbCl7XG5cbiAgICAgICAgICAgIHByaWNlID0gKCh0b2tlbi5wcmljZXMuY3VycmVudCkgKiBjdXJyZW5jeS52YWx1ZSkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgIHZhbHVlID0gKHByaWNlKih0b2tlbi5xdWFudGl0eS8xMDAwMDAwKSkudG9GaXhlZCgyKTtcblxuICAgICAgICAgICAgbGV0dXNkMjRoQ2hhbmdlID0gdG9rZW4ucHJpY2VzLmNoYW5nZTI0aC8xMDA7XG4gICAgICAgICAgICBfY2hhbmdlMjRoID0gKCh1c2QyNGhDaGFuZ2UgKiBjdXJyZW5jeS52YWx1ZSkqMTAwKS50b0ZpeGVkKDIpO1xuXG4gICAgICAgICAgICBsZXQgdXNkN2RDaGFuZ2UgPSB0b2tlbi5wcmljZXMuY2hhbmdlN2QvMTAwO1xuICAgICAgICAgICAgX2NoYW5nZTdkID0gKCh1c2Q3ZENoYW5nZSAqIGN1cnJlbmN5LnZhbHVlKSoxMDApLnRvRml4ZWQoMik7XG5cbiAgICAgICAgICAgIGxldCB1c2QzMGRDaGFuZ2UgPSB0b2tlbi5wcmljZXMuY2hhbmdlMzBkLzEwMDtcbiAgICAgICAgICAgIF9jaGFuZ2UyNCA9ICgodXNkMzBkQ2hhbmdlICogY3VycmVuY3kudmFsdWUpKjEwMCkudG9GaXhlZCgyKTtcblxuICAgICAgICAgICAgbGV0IHVzZDF5Q2hhbmdlID0gdG9rZW4ucHJpY2VzLmNoYW5nZTF5LzEwMDtcbiAgICAgICAgICAgIF9jaGFuZ2UxeSA9ICgodXNkMXlDaGFuZ2UgKiBjdXJyZW5jeS52YWx1ZSkqMTAwKS50b0ZpeGVkKDIpO1xuXG5cbiAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgX2Rpc3BsYXkucHVzaCg8dHIga2V5ID0ge3Rva2VuLmFzc2V0X25hbWUgKyAnZnR1bnByaWNlZCd9IGNsYXNzTmFtZSA9IFwiZ3JpZC1pdGVtLWZ0XCIgXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3Rva2VuLycrdG9rZW4ucG9saWN5X2lkK3Rva2VuLmFzc2V0X25hbWUpfT5cbiAgICAgICAgICAgIDx0ZD48aW1nIGNsYXNzTmFtZT0nZnQtaW1nJyBzcmM9e3Rva2VuLmlwZnN9PjwvaW1nPjwvdGQ+XG4gICAgICAgICAgICA8dGQ+e25hbWV9PC90ZD48dGQ+eyh0b2tlbi5xdWFudGl0eS8gMTAwMDAwMCl9PC90ZD48dGQ+e2N1cnJlbmN5LnN5bWJvbH0ge3ByaWNlfSA8L3RkPlxuICAgICAgICAgICAgPHRkPntfY2hhbmdlMjRofSU8L3RkPjx0ZD57X2NoYW5nZTdkfSU8L3RkPjx0ZD57X2NoYW5nZTMwZH0lPC90ZD48dGQ+e19jaGFuZ2UxeX0lPC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y3VycmVuY3kuc3ltYm9sfSB7dmFsdWV9PC90ZD48L3RyPik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRhYmxlID0gPHRhYmxlIGNsYXNzTmFtZT1cImZ0LXRhYmxlXCI+PHRib2R5PntfZGlzcGxheX08L3Rib2R5PjwvdGFibGU+XG4gICAgICAgIHNldERpc3BsYXkodGFibGUpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0QWNjb3VudEluZm9Gcm9tS29pb3Moc3Rha2VBZGRyZXNzKXtcbiAgICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5rb2lvcy5yZXN0L2FwaS92MC9hY2NvdW50X2luZm8nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgXCJfc3Rha2VfYWRkcmVzc2VzXCI6IFtcbiAgICAgICAgICAgICAgICBzdGFrZUFkZHJlc3NcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KTtcbiAgICAgIFxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICAgIHJldHVybiByZXM7XG4gIH1cblxuXG5cbiAgICAvL3JldHVybnMgYSBncmlkIHZpZXcgb2YgYWxsIE5GVHMgZ3JvdXBlZCBieSBwb2xpY3lcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZnRcIj57ZGlzcGxheX08L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRnRzIiwicHJvcHMiLCJkaXNwbGF5Iiwic2V0RGlzcGxheSIsInJvdXRlciIsImdldERhdGEiLCJ0b2tlbnMiLCJmdHMiLCJkaXNwbGF5VG9rZW5zIiwicHJpY2VzIiwiX2Rpc3BsYXkiLCJwb2xpY2llcyIsIk9iamVjdCIsImtleXMiLCJwdXNoIiwidHIiLCJjbGFzc05hbWUiLCJzdHlsZSIsImNvbG9yIiwidGQiLCJzdGFrZURhdGEiLCJnZXRBY2NvdW50SW5mb0Zyb21Lb2lvcyIsInN0YWtlIiwiY3VycmVuY3kiLCJfYmFsYW5jZSIsInRvdGFsX2JhbGFuY2UiLCJ0b0ZpeGVkIiwidmFsdWUiLCJpbWciLCJzcmMiLCJzeW1ib2wiLCJwb2xpY3kiLCJ0b2tlbiIsIm5hbWUiLCJtZXRhZGF0YSIsInRpY2tlciIsInRvVXBwZXJDYXNlIiwicHJpY2UiLCJfY2hhbmdlMjRoIiwiX2NoYW5nZTdkIiwiX2NoYW5nZTMwZCIsIl9jaGFuZ2UxeSIsImN1cnJlbnQiLCJxdWFudGl0eSIsImxldHVzZDI0aENoYW5nZSIsImNoYW5nZTI0aCIsInVzZDI0aENoYW5nZSIsInVzZDdkQ2hhbmdlIiwiY2hhbmdlN2QiLCJ1c2QzMGRDaGFuZ2UiLCJjaGFuZ2UzMGQiLCJfY2hhbmdlMjQiLCJ1c2QxeUNoYW5nZSIsImNoYW5nZTF5Iiwib25DbGljayIsInBvbGljeV9pZCIsImFzc2V0X25hbWUiLCJpcGZzIiwidGFibGUiLCJ0Ym9keSIsInN0YWtlQWRkcmVzcyIsInJlcSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwianNvbiIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/fts.js\n"));

/***/ })

});