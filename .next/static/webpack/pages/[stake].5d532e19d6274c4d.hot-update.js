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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Fts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Fts(props) {\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const getData = async ()=>{\n            if (props.tokens != null) {\n                let fts = props.tokens.fts;\n                displayTokens(fts);\n            }\n        };\n        getData();\n    }, [\n        props\n    ]);\n    const displayTokens = async (fts)=>{\n        if (fts == null || props.prices == null) {\n        //base\n        } else {\n            let _display = [];\n            let policies = Object.keys(fts);\n            _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                className: \"grid-item-ft\",\n                style: {\n                    color: \"white\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Coin\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Ticker\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 30,\n                        columnNumber: 24\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Quantity\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 30,\n                        columnNumber: 39\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Price\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"24h\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 31,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"7d\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 31,\n                        columnNumber: 37\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"30d\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 31,\n                        columnNumber: 48\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"1y\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 31,\n                        columnNumber: 60\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Value\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, \"keyregular\", true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 29,\n                columnNumber: 23\n            }, this));\n            let stakeData = await getAccountInfoFromKoios(props.tokens.stake);\n            let currency = props.prices.currency;\n            let _balance = (stakeData[0].total_balance / 1000000).toFixed(2);\n            let value = (currency.value * _balance).toFixed(2);\n            _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                className: \"grid-item-ft\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/cardano.png\",\n                            className: \"ft-img\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 38,\n                            columnNumber: 71\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 38,\n                        columnNumber: 67\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"ADA\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: [\n                            _balance,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: [\n                            currency.symbol,\n                            \" \",\n                            currency.value\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"-\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 40,\n                        columnNumber: 52\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: [\n                            currency.symbol,\n                            \" \",\n                            value,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 40,\n                        columnNumber: 62\n                    }, this)\n                ]\n            }, \"ada-ft\", true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 38,\n                columnNumber: 23\n            }, this));\n            for (const policy of policies){\n                let token = fts[policy][0];\n                let name = token.metadata.ticker;\n                if (token.metadata.ticker == null) {\n                    if (token.metadata.name != null) {\n                        name = token.metadata.name.toUpperCase();\n                    } else {\n                        name = \"unknown\";\n                    }\n                }\n                let currency = props.prices.currency;\n                let price = \"-\";\n                let value = \"-\";\n                let _change24h = \"-\";\n                let _change7d = \"-\";\n                let _change30d = \"-\";\n                let _change1y = \"-\";\n                if (token.prices != \"\") {\n                    price = (token.prices.current * currency.value).toFixed(2);\n                    value = (price * (token.quantity / 1000000)).toFixed(2);\n                    let usd24hChange = token.prices.change24h / 100;\n                    _change24h = (usd24hChange * currency.value * 100).toFixed(2);\n                    let usd7dChange = token.prices.change7d / 100;\n                    _change7d = (usd7dChange * currency.value * 100).toFixed(2);\n                    let usd30dChange = token.prices.change30d / 100;\n                    _change30d = (usd30dChange * currency.value * 100).toFixed(2);\n                    let usd1yChange = token.prices.change1y / 100;\n                    _change1y = (usd1yChange * currency.value * 100).toFixed(2);\n                }\n                _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    className: \"grid-item-ft\",\n                    onClick: ()=>router.push(\"/token/\" + token.policy_id + token.asset_name),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"ft-img\",\n                                src: token.ipfs\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                                lineNumber: 89,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: token.quantity / 1000000\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 90,\n                            columnNumber: 28\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: [\n                                currency.symbol,\n                                \" \",\n                                price,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 90,\n                            columnNumber: 64\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: [\n                                _change24h,\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: [\n                                _change7d,\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 91,\n                            columnNumber: 35\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: [\n                                _change30d,\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 91,\n                            columnNumber: 56\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: [\n                                _change1y,\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 91,\n                            columnNumber: 78\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"value\",\n                                children: [\n                                    currency.symbol,\n                                    \" \",\n                                    value\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                                lineNumber: 92,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, token.asset_name + \"ftunpriced\", true, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 87,\n                    columnNumber: 25\n                }, this));\n            }\n            let table = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"ft-table\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: _display\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 94,\n                    columnNumber: 49\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 94,\n                columnNumber: 21\n            }, this);\n            setDisplay(table);\n        }\n    };\n    async function getAccountInfoFromKoios(stakeAddress) {\n        const req = await fetch(\"https://api.koios.rest/api/v0/account_info\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"_stake_addresses\": [\n                    stakeAddress\n                ]\n            })\n        });\n        const res = await req.json();\n        return res;\n    }\n    //returns a grid view of all NFTs grouped by policy\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid-ft\",\n        children: display\n    }, void 0, false, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n        lineNumber: 121,\n        columnNumber: 9\n    }, this);\n}\n_s(Fts, \"TdQcjU6l/UJHsbfeJC//FZ+coQc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Fts;\nvar _c;\n$RefreshReg$(_c, \"Fts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O3NDQUFVLDhEQUFDZDtzQ0FBS2EsTUFBTVcsUUFBUSxHQUFFOzs7Ozs7c0NBQWMsOERBQUN4Qjs7Z0NBQUlJLFNBQVNPLE1BQU07Z0NBQUM7Z0NBQUVPO2dDQUFNOzs7Ozs7O3NDQUNoRiw4REFBQ2xCOztnQ0FBSW1CO2dDQUFXOzs7Ozs7O3NDQUFNLDhEQUFDbkI7O2dDQUFJb0I7Z0NBQVU7Ozs7Ozs7c0NBQU0sOERBQUNwQjs7Z0NBQUlxQjtnQ0FBVzs7Ozs7OztzQ0FBTSw4REFBQ3JCOztnQ0FBSXNCO2dDQUFVOzs7Ozs7O3NDQUNoRiw4REFBQ3RCO3NDQUFHLDRFQUFDcUM7Z0NBQUl4QyxXQUFVOztvQ0FBU08sU0FBU08sTUFBTTtvQ0FBQztvQ0FBRUg7Ozs7Ozs7Ozs7Ozs7bUJBTHZCSyxNQUFNc0IsVUFBVSxHQUFHOzs7OztZQU05QztZQUNBLElBQUlHLHNCQUFRLDhEQUFDQTtnQkFBTXpDLFdBQVU7MEJBQVcsNEVBQUMwQzs4QkFBT2hEOzs7Ozs7Ozs7OztZQUNoRFAsV0FBV3NEO1FBQ2IsQ0FBQztJQUVIO0lBRUEsZUFBZXBDLHdCQUF3QnNDLFlBQVksRUFBQztRQUNsRCxNQUFNQyxNQUFNLE1BQU1DLE1BQU0sOENBQThDO1lBQ2hFQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFDbkIsb0JBQW9CO29CQUNsQlA7aUJBQ0Q7WUFDSDtRQUNGO1FBRUosTUFBTVEsTUFBTSxNQUFNUCxJQUFJUSxJQUFJO1FBQzFCLE9BQU9EO0lBQ1g7SUFJRSxtREFBbUQ7SUFDbkQscUJBQ0ksOERBQUNYO1FBQUl4QyxXQUFVO2tCQUFXZDs7Ozs7O0FBRWxDLENBQUM7R0F0SHVCRjs7UUFHTEgsa0RBQVNBOzs7S0FISkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Z0cy5qcz9kYjNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZ0cyAocHJvcHMpe1xuXG4gICAgY29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cbiAgICB1c2VFZmZlY3QoICgpID0+IHtcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT57XG4gICAgICBpZihwcm9wcy50b2tlbnMgIT0gbnVsbCl7XG5cbiAgICAgICAgbGV0IGZ0cyA9IHByb3BzLnRva2Vucy5mdHM7XG4gICAgICAgIGRpc3BsYXlUb2tlbnMoZnRzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2V0RGF0YSgpO1xuICAgIH0sIFtwcm9wc10pO1xuXG4gICAgY29uc3QgZGlzcGxheVRva2VucyA9IGFzeW5jIChmdHMpID0+IHtcbiAgICAgIGlmKGZ0cz09IG51bGwgfHwgcHJvcHMucHJpY2VzID09IG51bGwpe1xuICAgICAgICAvL2Jhc2VcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGxldCBfZGlzcGxheSA9IFtdO1xuICAgICAgICBsZXQgcG9saWNpZXMgPSBPYmplY3Qua2V5cyhmdHMpO1xuICAgICAgICBfZGlzcGxheS5wdXNoKDx0ciBrZXkgPSAna2V5cmVndWxhcicgY2xhc3NOYW1lID0gXCJncmlkLWl0ZW0tZnRcIiBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCJ9fT5cbiAgICAgICAgICA8dGQ+Q29pbjwvdGQ+PHRkPlRpY2tlcjwvdGQ+PHRkPlF1YW50aXR5PC90ZD5cbiAgICAgICAgICA8dGQ+UHJpY2U8L3RkPjx0ZD4yNGg8L3RkPjx0ZD43ZDwvdGQ+PHRkPjMwZDwvdGQ+PHRkPjF5PC90ZD5cbiAgICAgICAgICA8dGQ+VmFsdWU8L3RkPjwvdHI+KVxuXG4gICAgICAgIGxldCBzdGFrZURhdGEgPSBhd2FpdCBnZXRBY2NvdW50SW5mb0Zyb21Lb2lvcyhwcm9wcy50b2tlbnMuc3Rha2UpO1xuICAgICAgICBsZXQgY3VycmVuY3kgPSBwcm9wcy5wcmljZXMuY3VycmVuY3k7XG4gICAgICAgIGxldCBfYmFsYW5jZSA9IChzdGFrZURhdGFbMF0udG90YWxfYmFsYW5jZS8xMDAwMDAwKS50b0ZpeGVkKDIpO1xuICAgICAgICBsZXQgdmFsdWUgPSAoY3VycmVuY3kudmFsdWUqX2JhbGFuY2UpLnRvRml4ZWQoMik7XG4gICAgICAgIF9kaXNwbGF5LnB1c2goPHRyIGtleSA9ICdhZGEtZnQnIGNsYXNzTmFtZT1cImdyaWQtaXRlbS1mdFwiPjx0ZD48aW1nIHNyYz1cIi9jYXJkYW5vLnBuZ1wiIGNsYXNzTmFtZT1cImZ0LWltZ1wiPjwvaW1nPjwvdGQ+XG4gICAgICAgIDx0ZD5BREE8L3RkPjx0ZD57X2JhbGFuY2V9IDwvdGQ+XG4gICAgICAgIDx0ZD57Y3VycmVuY3kuc3ltYm9sfSB7Y3VycmVuY3kudmFsdWV9PC90ZD48dGQ+LTwvdGQ+PHRkPntjdXJyZW5jeS5zeW1ib2x9IHt2YWx1ZX0gPC90ZD5cbiAgICAgICAgPC90cj4pXG5cblxuICAgICAgICBmb3IoY29uc3QgcG9saWN5IG9mIHBvbGljaWVzKXtcbiAgICAgICAgICBsZXQgdG9rZW4gPSBmdHNbcG9saWN5XVswXTtcbiAgICAgICAgICBsZXQgbmFtZSA9IHRva2VuLm1ldGFkYXRhLnRpY2tlcjtcbiAgICAgICAgICBpZih0b2tlbi5tZXRhZGF0YS50aWNrZXIgPT0gbnVsbCl7XG4gICAgICAgICAgICBpZih0b2tlbi5tZXRhZGF0YS5uYW1lICE9IG51bGwpe1xuICAgICAgICAgICAgICBuYW1lID0gKHRva2VuLm1ldGFkYXRhLm5hbWUpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICBuYW1lID0gJ3Vua25vd24nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBjdXJyZW5jeSA9IHByb3BzLnByaWNlcy5jdXJyZW5jeTtcblxuICAgICAgICAgIGxldCBwcmljZSA9ICctJztcbiAgICAgICAgICBsZXQgdmFsdWUgPSAnLSc7XG5cbiAgICAgICAgICBsZXQgX2NoYW5nZTI0aCA9ICctJztcbiAgICAgICAgICBsZXQgX2NoYW5nZTdkID0gJy0nO1xuICAgICAgICAgIGxldCBfY2hhbmdlMzBkID0gJy0nO1xuICAgICAgICAgIGxldCBfY2hhbmdlMXkgPSAnLSc7XG5cbiAgICAgICAgICBpZih0b2tlbi5wcmljZXMgIT0gJycpe1xuXG4gICAgICAgICAgICBwcmljZSA9ICgodG9rZW4ucHJpY2VzLmN1cnJlbnQpICogY3VycmVuY3kudmFsdWUpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICB2YWx1ZSA9IChwcmljZSoodG9rZW4ucXVhbnRpdHkvMTAwMDAwMCkpLnRvRml4ZWQoMik7XG5cbiAgICAgICAgICAgIGxldCB1c2QyNGhDaGFuZ2UgPSB0b2tlbi5wcmljZXMuY2hhbmdlMjRoLzEwMDtcbiAgICAgICAgICAgIF9jaGFuZ2UyNGggPSAoKHVzZDI0aENoYW5nZSAqIGN1cnJlbmN5LnZhbHVlKSoxMDApLnRvRml4ZWQoMik7XG5cbiAgICAgICAgICAgIGxldCB1c2Q3ZENoYW5nZSA9IHRva2VuLnByaWNlcy5jaGFuZ2U3ZC8xMDA7XG4gICAgICAgICAgICBfY2hhbmdlN2QgPSAoKHVzZDdkQ2hhbmdlICogY3VycmVuY3kudmFsdWUpKjEwMCkudG9GaXhlZCgyKTtcblxuICAgICAgICAgICAgbGV0IHVzZDMwZENoYW5nZSA9IHRva2VuLnByaWNlcy5jaGFuZ2UzMGQvMTAwO1xuICAgICAgICAgICAgX2NoYW5nZTMwZCA9ICgodXNkMzBkQ2hhbmdlICogY3VycmVuY3kudmFsdWUpKjEwMCkudG9GaXhlZCgyKTtcblxuICAgICAgICAgICAgbGV0IHVzZDF5Q2hhbmdlID0gdG9rZW4ucHJpY2VzLmNoYW5nZTF5LzEwMDtcbiAgICAgICAgICAgIF9jaGFuZ2UxeSA9ICgodXNkMXlDaGFuZ2UgKiBjdXJyZW5jeS52YWx1ZSkqMTAwKS50b0ZpeGVkKDIpO1xuXG4gICAgICAgICAgfVxuXG5cblxuICAgICAgICAgIF9kaXNwbGF5LnB1c2goPHRyIGtleSA9IHt0b2tlbi5hc3NldF9uYW1lICsgJ2Z0dW5wcmljZWQnfSBjbGFzc05hbWUgPSBcImdyaWQtaXRlbS1mdFwiIFxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy90b2tlbi8nK3Rva2VuLnBvbGljeV9pZCt0b2tlbi5hc3NldF9uYW1lKX0+XG4gICAgICAgICAgICA8dGQ+PGltZyBjbGFzc05hbWU9J2Z0LWltZycgc3JjPXt0b2tlbi5pcGZzfT48L2ltZz48L3RkPlxuICAgICAgICAgICAgPHRkPntuYW1lfTwvdGQ+PHRkPnsodG9rZW4ucXVhbnRpdHkvIDEwMDAwMDApfTwvdGQ+PHRkPntjdXJyZW5jeS5zeW1ib2x9IHtwcmljZX0gPC90ZD5cbiAgICAgICAgICAgIDx0ZD57X2NoYW5nZTI0aH0lPC90ZD48dGQ+e19jaGFuZ2U3ZH0lPC90ZD48dGQ+e19jaGFuZ2UzMGR9JTwvdGQ+PHRkPntfY2hhbmdlMXl9JTwvdGQ+XG4gICAgICAgICAgICA8dGQ+PGRpdiBjbGFzc05hbWU9XCJ2YWx1ZVwiPntjdXJyZW5jeS5zeW1ib2x9IHt2YWx1ZX08L2Rpdj48L3RkPjwvdHI+KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdGFibGUgPSA8dGFibGUgY2xhc3NOYW1lPVwiZnQtdGFibGVcIj48dGJvZHk+e19kaXNwbGF5fTwvdGJvZHk+PC90YWJsZT5cbiAgICAgICAgc2V0RGlzcGxheSh0YWJsZSk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRBY2NvdW50SW5mb0Zyb21Lb2lvcyhzdGFrZUFkZHJlc3Mpe1xuICAgICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmtvaW9zLnJlc3QvYXBpL3YwL2FjY291bnRfaW5mbycsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICBcIl9zdGFrZV9hZGRyZXNzZXNcIjogW1xuICAgICAgICAgICAgICAgIHN0YWtlQWRkcmVzc1xuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pO1xuICAgICAgXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCByZXEuanNvbigpO1xuICAgICAgcmV0dXJuIHJlcztcbiAgfVxuXG5cblxuICAgIC8vcmV0dXJucyBhIGdyaWQgdmlldyBvZiBhbGwgTkZUcyBncm91cGVkIGJ5IHBvbGljeVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1mdFwiPntkaXNwbGF5fTwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGdHMiLCJwcm9wcyIsImRpc3BsYXkiLCJzZXREaXNwbGF5Iiwicm91dGVyIiwiZ2V0RGF0YSIsInRva2VucyIsImZ0cyIsImRpc3BsYXlUb2tlbnMiLCJwcmljZXMiLCJfZGlzcGxheSIsInBvbGljaWVzIiwiT2JqZWN0Iiwia2V5cyIsInB1c2giLCJ0ciIsImNsYXNzTmFtZSIsInN0eWxlIiwiY29sb3IiLCJ0ZCIsInN0YWtlRGF0YSIsImdldEFjY291bnRJbmZvRnJvbUtvaW9zIiwic3Rha2UiLCJjdXJyZW5jeSIsIl9iYWxhbmNlIiwidG90YWxfYmFsYW5jZSIsInRvRml4ZWQiLCJ2YWx1ZSIsImltZyIsInNyYyIsInN5bWJvbCIsInBvbGljeSIsInRva2VuIiwibmFtZSIsIm1ldGFkYXRhIiwidGlja2VyIiwidG9VcHBlckNhc2UiLCJwcmljZSIsIl9jaGFuZ2UyNGgiLCJfY2hhbmdlN2QiLCJfY2hhbmdlMzBkIiwiX2NoYW5nZTF5IiwiY3VycmVudCIsInF1YW50aXR5IiwidXNkMjRoQ2hhbmdlIiwiY2hhbmdlMjRoIiwidXNkN2RDaGFuZ2UiLCJjaGFuZ2U3ZCIsInVzZDMwZENoYW5nZSIsImNoYW5nZTMwZCIsInVzZDF5Q2hhbmdlIiwiY2hhbmdlMXkiLCJvbkNsaWNrIiwicG9saWN5X2lkIiwiYXNzZXRfbmFtZSIsImlwZnMiLCJkaXYiLCJ0YWJsZSIsInRib2R5Iiwic3Rha2VBZGRyZXNzIiwicmVxIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/fts.js\n"));

/***/ })

});