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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Fts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Fts(props) {\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const getData = async ()=>{\n            if (props.tokens != null) {\n                let fts = props.tokens.fts;\n                displayTokens(fts);\n            }\n        };\n        getData();\n    }, [\n        props\n    ]);\n    const displayTokens = async (fts)=>{\n        if (fts == null || props.prices == null) {\n        //base\n        } else {\n            let _display = [];\n            let policies = Object.keys(fts);\n            _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                className: \"grid-item-ft\",\n                style: {\n                    color: \"white\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Coin\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Ticker\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 30,\n                        columnNumber: 24\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Quantity\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 30,\n                        columnNumber: 39\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Price\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 30,\n                        columnNumber: 56\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"24h\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 30,\n                        columnNumber: 70\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Value\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 30,\n                        columnNumber: 82\n                    }, this)\n                ]\n            }, \"keyregular\", true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 29,\n                columnNumber: 23\n            }, this));\n            let stakeData = await getAccountInfoFromKoios(props.tokens.stake);\n            let currency = props.prices.currency;\n            let _balance = (stakeData[0].total_balance / 1000000).toFixed(2);\n            let value = (currency.value * _balance).toFixed(2);\n            _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                className: \"grid-item-ft\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/cardano.png\",\n                            className: \"ft-img\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 36,\n                            columnNumber: 71\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 36,\n                        columnNumber: 67\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"ADA\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: [\n                            _balance,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: [\n                            currency.symbol,\n                            \" \",\n                            currency.value\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"-\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 38,\n                        columnNumber: 52\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: [\n                            currency.symbol,\n                            \" \",\n                            value,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 38,\n                        columnNumber: 62\n                    }, this)\n                ]\n            }, \"ada-ft\", true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 36,\n                columnNumber: 23\n            }, this));\n            for (const policy of policies){\n                let token = fts[policy][0];\n                let name = token.metadata.ticker;\n                if (token.metadata.ticker == null) {\n                    if (token.metadata.name != null) {\n                        name = token.metadata.name.toUpperCase();\n                    } else {\n                        name = \"unknown\";\n                    }\n                }\n                let currency = props.prices.currency;\n                let price = (token.currentPrice * currency.value).toFixed(2);\n                let value = (price * (token.quantity / 1000000)).toFixed(2);\n                let _change24 = 0;\n                if (token.prices != null) {\n                    let usd24Change = token.prices.change24 / 100;\n                    _change24 = usd24Change * currency.value * 100;\n                }\n                _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    className: \"grid-item-ft\",\n                    onClick: ()=>router.push(\"/token/\" + token.policy_id + token.asset_name),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"ft-img\",\n                                src: token.ipfs\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                                lineNumber: 69,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: token.quantity / 1000000\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 70,\n                            columnNumber: 28\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: [\n                                currency.symbol,\n                                \" \",\n                                price,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 70,\n                            columnNumber: 64\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: [\n                                _change24,\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: [\n                                currency.symbol,\n                                \" \",\n                                value\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, token.asset_name + \"ftunpriced\", true, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 67,\n                    columnNumber: 25\n                }, this));\n            }\n            let table = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"ft-table\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: _display\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 74,\n                    columnNumber: 49\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 74,\n                columnNumber: 21\n            }, this);\n            setDisplay(table);\n        }\n    };\n    async function getAccountInfoFromKoios(stakeAddress) {\n        const req = await fetch(\"https://api.koios.rest/api/v0/account_info\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"_stake_addresses\": [\n                    stakeAddress\n                ]\n            })\n        });\n        const res = await req.json();\n        return res;\n    }\n    //returns a grid view of all NFTs grouped by policy\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid-ft\",\n        children: display\n    }, void 0, false, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n        lineNumber: 101,\n        columnNumber: 9\n    }, this);\n}\n_s(Fts, \"TdQcjU6l/UJHsbfeJC//FZ+coQc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Fts;\nvar _c;\n$RefreshReg$(_c, \"Fts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQzFCLE9BQU9EO0lBQ1g7SUFJRSxtREFBbUQ7SUFDbkQscUJBQ0ksOERBQUNFO1FBQUkzQyxXQUFVO2tCQUFXZDs7Ozs7O0FBRWxDLENBQUM7R0FsR3VCRjs7UUFHTEgsa0RBQVNBOzs7S0FISkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Z0cy5qcz9kYjNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZ0cyAocHJvcHMpe1xuXG4gICAgY29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cbiAgICB1c2VFZmZlY3QoICgpID0+IHtcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT57XG4gICAgICBpZihwcm9wcy50b2tlbnMgIT0gbnVsbCl7XG5cbiAgICAgICAgbGV0IGZ0cyA9IHByb3BzLnRva2Vucy5mdHM7XG4gICAgICAgIGRpc3BsYXlUb2tlbnMoZnRzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2V0RGF0YSgpO1xuICAgIH0sIFtwcm9wc10pO1xuXG4gICAgY29uc3QgZGlzcGxheVRva2VucyA9IGFzeW5jIChmdHMpID0+IHtcbiAgICAgIGlmKGZ0cz09IG51bGwgfHwgcHJvcHMucHJpY2VzID09IG51bGwpe1xuICAgICAgICAvL2Jhc2VcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGxldCBfZGlzcGxheSA9IFtdO1xuICAgICAgICBsZXQgcG9saWNpZXMgPSBPYmplY3Qua2V5cyhmdHMpO1xuICAgICAgICBfZGlzcGxheS5wdXNoKDx0ciBrZXkgPSAna2V5cmVndWxhcicgY2xhc3NOYW1lID0gXCJncmlkLWl0ZW0tZnRcIiBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCJ9fT5cbiAgICAgICAgICA8dGQ+Q29pbjwvdGQ+PHRkPlRpY2tlcjwvdGQ+PHRkPlF1YW50aXR5PC90ZD48dGQ+UHJpY2U8L3RkPjx0ZD4yNGg8L3RkPjx0ZD5WYWx1ZTwvdGQ+PC90cj4pXG5cbiAgICAgICAgbGV0IHN0YWtlRGF0YSA9IGF3YWl0IGdldEFjY291bnRJbmZvRnJvbUtvaW9zKHByb3BzLnRva2Vucy5zdGFrZSk7XG4gICAgICAgIGxldCBjdXJyZW5jeSA9IHByb3BzLnByaWNlcy5jdXJyZW5jeTtcbiAgICAgICAgbGV0IF9iYWxhbmNlID0gKHN0YWtlRGF0YVswXS50b3RhbF9iYWxhbmNlLzEwMDAwMDApLnRvRml4ZWQoMik7XG4gICAgICAgIGxldCB2YWx1ZSA9IChjdXJyZW5jeS52YWx1ZSpfYmFsYW5jZSkudG9GaXhlZCgyKTtcbiAgICAgICAgX2Rpc3BsYXkucHVzaCg8dHIga2V5ID0gJ2FkYS1mdCcgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtLWZ0XCI+PHRkPjxpbWcgc3JjPVwiL2NhcmRhbm8ucG5nXCIgY2xhc3NOYW1lPVwiZnQtaW1nXCI+PC9pbWc+PC90ZD5cbiAgICAgICAgPHRkPkFEQTwvdGQ+PHRkPntfYmFsYW5jZX0gPC90ZD5cbiAgICAgICAgPHRkPntjdXJyZW5jeS5zeW1ib2x9IHtjdXJyZW5jeS52YWx1ZX08L3RkPjx0ZD4tPC90ZD48dGQ+e2N1cnJlbmN5LnN5bWJvbH0ge3ZhbHVlfSA8L3RkPlxuICAgICAgICA8L3RyPilcblxuXG4gICAgICAgIGZvcihjb25zdCBwb2xpY3kgb2YgcG9saWNpZXMpe1xuICAgICAgICAgIGxldCB0b2tlbiA9IGZ0c1twb2xpY3ldWzBdO1xuICAgICAgICAgIGxldCBuYW1lID0gdG9rZW4ubWV0YWRhdGEudGlja2VyO1xuICAgICAgICAgIGlmKHRva2VuLm1ldGFkYXRhLnRpY2tlciA9PSBudWxsKXtcbiAgICAgICAgICAgIGlmKHRva2VuLm1ldGFkYXRhLm5hbWUgIT0gbnVsbCl7XG4gICAgICAgICAgICAgIG5hbWUgPSAodG9rZW4ubWV0YWRhdGEubmFtZSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgIG5hbWUgPSAndW5rbm93bic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IGN1cnJlbmN5ID0gcHJvcHMucHJpY2VzLmN1cnJlbmN5O1xuICAgICAgICAgIGxldCBwcmljZSA9ICgodG9rZW4uY3VycmVudFByaWNlKSAqIGN1cnJlbmN5LnZhbHVlKS50b0ZpeGVkKDIpO1xuICAgICAgICAgIGxldCB2YWx1ZSA9IChwcmljZSoodG9rZW4ucXVhbnRpdHkvMTAwMDAwMCkpLnRvRml4ZWQoMik7XG5cblxuICAgICAgICAgIGxldCBfY2hhbmdlMjQgPSAwO1xuICAgICAgICAgIGlmKHRva2VuLnByaWNlcyAhPSBudWxsKXtcbiAgICAgICAgICAgIGxldCB1c2QyNENoYW5nZSA9IHRva2VuLnByaWNlcy5jaGFuZ2UyNC8xMDA7XG4gICAgICAgICAgICBfY2hhbmdlMjQgPSAodXNkMjRDaGFuZ2UgKiBjdXJyZW5jeS52YWx1ZSkqMTAwO1xuICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICBfZGlzcGxheS5wdXNoKDx0ciBrZXkgPSB7dG9rZW4uYXNzZXRfbmFtZSArICdmdHVucHJpY2VkJ30gY2xhc3NOYW1lID0gXCJncmlkLWl0ZW0tZnRcIiBcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvdG9rZW4vJyt0b2tlbi5wb2xpY3lfaWQrdG9rZW4uYXNzZXRfbmFtZSl9PlxuICAgICAgICAgICAgPHRkPjxpbWcgY2xhc3NOYW1lPSdmdC1pbWcnIHNyYz17dG9rZW4uaXBmc30+PC9pbWc+PC90ZD5cbiAgICAgICAgICAgIDx0ZD57bmFtZX08L3RkPjx0ZD57KHRva2VuLnF1YW50aXR5LyAxMDAwMDAwKX08L3RkPjx0ZD57Y3VycmVuY3kuc3ltYm9sfSB7cHJpY2V9IDwvdGQ+XG4gICAgICAgICAgICA8dGQ+e19jaGFuZ2UyNH0lPC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y3VycmVuY3kuc3ltYm9sfSB7dmFsdWV9PC90ZD48L3RyPik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRhYmxlID0gPHRhYmxlIGNsYXNzTmFtZT1cImZ0LXRhYmxlXCI+PHRib2R5PntfZGlzcGxheX08L3Rib2R5PjwvdGFibGU+XG4gICAgICAgIHNldERpc3BsYXkodGFibGUpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0QWNjb3VudEluZm9Gcm9tS29pb3Moc3Rha2VBZGRyZXNzKXtcbiAgICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5rb2lvcy5yZXN0L2FwaS92MC9hY2NvdW50X2luZm8nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgXCJfc3Rha2VfYWRkcmVzc2VzXCI6IFtcbiAgICAgICAgICAgICAgICBzdGFrZUFkZHJlc3NcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KTtcbiAgICAgIFxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICAgIHJldHVybiByZXM7XG4gIH1cblxuXG5cbiAgICAvL3JldHVybnMgYSBncmlkIHZpZXcgb2YgYWxsIE5GVHMgZ3JvdXBlZCBieSBwb2xpY3lcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZnRcIj57ZGlzcGxheX08L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRnRzIiwicHJvcHMiLCJkaXNwbGF5Iiwic2V0RGlzcGxheSIsInJvdXRlciIsImdldERhdGEiLCJ0b2tlbnMiLCJmdHMiLCJkaXNwbGF5VG9rZW5zIiwicHJpY2VzIiwiX2Rpc3BsYXkiLCJwb2xpY2llcyIsIk9iamVjdCIsImtleXMiLCJwdXNoIiwidHIiLCJjbGFzc05hbWUiLCJzdHlsZSIsImNvbG9yIiwidGQiLCJzdGFrZURhdGEiLCJnZXRBY2NvdW50SW5mb0Zyb21Lb2lvcyIsInN0YWtlIiwiY3VycmVuY3kiLCJfYmFsYW5jZSIsInRvdGFsX2JhbGFuY2UiLCJ0b0ZpeGVkIiwidmFsdWUiLCJpbWciLCJzcmMiLCJzeW1ib2wiLCJwb2xpY3kiLCJ0b2tlbiIsIm5hbWUiLCJtZXRhZGF0YSIsInRpY2tlciIsInRvVXBwZXJDYXNlIiwicHJpY2UiLCJjdXJyZW50UHJpY2UiLCJxdWFudGl0eSIsIl9jaGFuZ2UyNCIsInVzZDI0Q2hhbmdlIiwiY2hhbmdlMjQiLCJvbkNsaWNrIiwicG9saWN5X2lkIiwiYXNzZXRfbmFtZSIsImlwZnMiLCJ0YWJsZSIsInRib2R5Iiwic3Rha2VBZGRyZXNzIiwicmVxIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJqc29uIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/fts.js\n"));

/***/ })

});