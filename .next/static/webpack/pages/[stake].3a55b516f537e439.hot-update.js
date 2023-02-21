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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Fts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Fts(props) {\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const getData = async ()=>{\n            if (props.tokens != null) {\n                let fts = props.tokens.fts;\n                displayTokens(fts);\n            }\n        };\n        getData();\n    }, [\n        props\n    ]);\n    const displayTokens = async (fts)=>{\n        if (fts == null || props.prices == null) {\n        //base\n        } else {\n            let _display = [];\n            let policies = Object.keys(fts);\n            _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                className: \"grid-item-ft\",\n                style: {\n                    color: \"white\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Coin\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Ticker\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 30,\n                        columnNumber: 24\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Quantity\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 30,\n                        columnNumber: 39\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Price\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 30,\n                        columnNumber: 56\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"24h\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 30,\n                        columnNumber: 70\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"Value\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 30,\n                        columnNumber: 82\n                    }, this)\n                ]\n            }, \"keyregular\", true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 29,\n                columnNumber: 23\n            }, this));\n            let stakeData = await getAccountInfoFromKoios(props.tokens.stake);\n            let currency = props.prices.currency;\n            let _balance = (stakeData[0].total_balance / 1000000).toFixed(2);\n            let value = (currency.value * _balance).toFixed(2);\n            _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                className: \"grid-item-ft\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/cardano.png\",\n                            className: \"ft-img\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 36,\n                            columnNumber: 71\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 36,\n                        columnNumber: 67\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"ADA\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: [\n                            _balance,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: [\n                            currency.symbol,\n                            \" \",\n                            currency.value\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: \"-\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 38,\n                        columnNumber: 52\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                        children: [\n                            currency.symbol,\n                            \" \",\n                            value,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                        lineNumber: 38,\n                        columnNumber: 62\n                    }, this)\n                ]\n            }, \"ada-ft\", true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 36,\n                columnNumber: 23\n            }, this));\n            for (const policy of policies){\n                let token = fts[policy][0];\n                let name = token.metadata.ticker;\n                if (token.metadata.ticker == null) {\n                    if (token.metadata.name != null) {\n                        name = token.metadata.name.toUpperCase();\n                    } else {\n                        name = \"unknown\";\n                    }\n                }\n                let currency = props.prices.currency;\n                let price = (token.currentPrice * currency.value).toFixed(2);\n                let value = (price * (token.quantity / 1000000)).toFixed(2);\n                let _change24 = 0;\n                if (token.prices != null) {\n                    let usd24Change = token.prices.change24 / 100;\n                    _change24 = (usd24Change * currency.value * 100).toFixed(2);\n                }\n                _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    className: \"grid-item-ft\",\n                    onClick: ()=>router.push(\"/token/\" + token.policy_id + token.asset_name),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"ft-img\",\n                                src: token.ipfs\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                                lineNumber: 69,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: token.quantity / 1000000\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 70,\n                            columnNumber: 28\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: [\n                                currency.symbol,\n                                \" \",\n                                price,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 70,\n                            columnNumber: 64\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: [\n                                _change24,\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            children: [\n                                currency.symbol,\n                                \" \",\n                                value\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, token.asset_name + \"ftunpriced\", true, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 67,\n                    columnNumber: 25\n                }, this));\n            }\n            let table = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"ft-table\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: _display\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                    lineNumber: 74,\n                    columnNumber: 49\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n                lineNumber: 74,\n                columnNumber: 21\n            }, this);\n            setDisplay(table);\n        }\n    };\n    async function getAccountInfoFromKoios(stakeAddress) {\n        const req = await fetch(\"https://api.koios.rest/api/v0/account_info\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"_stake_addresses\": [\n                    stakeAddress\n                ]\n            })\n        });\n        const res = await req.json();\n        return res;\n    }\n    //returns a grid view of all NFTs grouped by policy\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid-ft\",\n        children: display\n    }, void 0, false, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/fts.js\",\n        lineNumber: 101,\n        columnNumber: 9\n    }, this);\n}\n_s(Fts, \"TdQcjU6l/UJHsbfeJC//FZ+coQc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Fts;\nvar _c;\n$RefreshReg$(_c, \"Fts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNUSxNQUFNLE1BQU1QLElBQUlRLElBQUk7UUFDMUIsT0FBT0Q7SUFDWDtJQUlFLG1EQUFtRDtJQUNuRCxxQkFDSSw4REFBQ0U7UUFBSTNDLFdBQVU7a0JBQVdkOzs7Ozs7QUFFbEMsQ0FBQztHQWxHdUJGOztRQUdMSCxrREFBU0E7OztLQUhKRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZnRzLmpzP2RiM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRnRzIChwcm9wcyl7XG5cbiAgICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblxuICAgIHVzZUVmZmVjdCggKCkgPT4ge1xuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PntcbiAgICAgIGlmKHByb3BzLnRva2VucyAhPSBudWxsKXtcblxuICAgICAgICBsZXQgZnRzID0gcHJvcHMudG9rZW5zLmZ0cztcbiAgICAgICAgZGlzcGxheVRva2VucyhmdHMpO1xuICAgICAgfVxuICAgIH1cbiAgICBnZXREYXRhKCk7XG4gICAgfSwgW3Byb3BzXSk7XG5cbiAgICBjb25zdCBkaXNwbGF5VG9rZW5zID0gYXN5bmMgKGZ0cykgPT4ge1xuICAgICAgaWYoZnRzPT0gbnVsbCB8fCBwcm9wcy5wcmljZXMgPT0gbnVsbCl7XG4gICAgICAgIC8vYmFzZVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgbGV0IF9kaXNwbGF5ID0gW107XG4gICAgICAgIGxldCBwb2xpY2llcyA9IE9iamVjdC5rZXlzKGZ0cyk7XG4gICAgICAgIF9kaXNwbGF5LnB1c2goPHRyIGtleSA9ICdrZXlyZWd1bGFyJyBjbGFzc05hbWUgPSBcImdyaWQtaXRlbS1mdFwiIHN0eWxlPXt7Y29sb3I6IFwid2hpdGVcIn19PlxuICAgICAgICAgIDx0ZD5Db2luPC90ZD48dGQ+VGlja2VyPC90ZD48dGQ+UXVhbnRpdHk8L3RkPjx0ZD5QcmljZTwvdGQ+PHRkPjI0aDwvdGQ+PHRkPlZhbHVlPC90ZD48L3RyPilcblxuICAgICAgICBsZXQgc3Rha2VEYXRhID0gYXdhaXQgZ2V0QWNjb3VudEluZm9Gcm9tS29pb3MocHJvcHMudG9rZW5zLnN0YWtlKTtcbiAgICAgICAgbGV0IGN1cnJlbmN5ID0gcHJvcHMucHJpY2VzLmN1cnJlbmN5O1xuICAgICAgICBsZXQgX2JhbGFuY2UgPSAoc3Rha2VEYXRhWzBdLnRvdGFsX2JhbGFuY2UvMTAwMDAwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgbGV0IHZhbHVlID0gKGN1cnJlbmN5LnZhbHVlKl9iYWxhbmNlKS50b0ZpeGVkKDIpO1xuICAgICAgICBfZGlzcGxheS5wdXNoKDx0ciBrZXkgPSAnYWRhLWZ0JyBjbGFzc05hbWU9XCJncmlkLWl0ZW0tZnRcIj48dGQ+PGltZyBzcmM9XCIvY2FyZGFuby5wbmdcIiBjbGFzc05hbWU9XCJmdC1pbWdcIj48L2ltZz48L3RkPlxuICAgICAgICA8dGQ+QURBPC90ZD48dGQ+e19iYWxhbmNlfSA8L3RkPlxuICAgICAgICA8dGQ+e2N1cnJlbmN5LnN5bWJvbH0ge2N1cnJlbmN5LnZhbHVlfTwvdGQ+PHRkPi08L3RkPjx0ZD57Y3VycmVuY3kuc3ltYm9sfSB7dmFsdWV9IDwvdGQ+XG4gICAgICAgIDwvdHI+KVxuXG5cbiAgICAgICAgZm9yKGNvbnN0IHBvbGljeSBvZiBwb2xpY2llcyl7XG4gICAgICAgICAgbGV0IHRva2VuID0gZnRzW3BvbGljeV1bMF07XG4gICAgICAgICAgbGV0IG5hbWUgPSB0b2tlbi5tZXRhZGF0YS50aWNrZXI7XG4gICAgICAgICAgaWYodG9rZW4ubWV0YWRhdGEudGlja2VyID09IG51bGwpe1xuICAgICAgICAgICAgaWYodG9rZW4ubWV0YWRhdGEubmFtZSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgbmFtZSA9ICh0b2tlbi5tZXRhZGF0YS5uYW1lKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgbmFtZSA9ICd1bmtub3duJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgY3VycmVuY3kgPSBwcm9wcy5wcmljZXMuY3VycmVuY3k7XG4gICAgICAgICAgbGV0IHByaWNlID0gKCh0b2tlbi5jdXJyZW50UHJpY2UpICogY3VycmVuY3kudmFsdWUpLnRvRml4ZWQoMik7XG4gICAgICAgICAgbGV0IHZhbHVlID0gKHByaWNlKih0b2tlbi5xdWFudGl0eS8xMDAwMDAwKSkudG9GaXhlZCgyKTtcblxuXG4gICAgICAgICAgbGV0IF9jaGFuZ2UyNCA9IDA7XG4gICAgICAgICAgaWYodG9rZW4ucHJpY2VzICE9IG51bGwpe1xuICAgICAgICAgICAgbGV0IHVzZDI0Q2hhbmdlID0gdG9rZW4ucHJpY2VzLmNoYW5nZTI0LzEwMDtcbiAgICAgICAgICAgIF9jaGFuZ2UyNCA9ICgodXNkMjRDaGFuZ2UgKiBjdXJyZW5jeS52YWx1ZSkqMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICBfZGlzcGxheS5wdXNoKDx0ciBrZXkgPSB7dG9rZW4uYXNzZXRfbmFtZSArICdmdHVucHJpY2VkJ30gY2xhc3NOYW1lID0gXCJncmlkLWl0ZW0tZnRcIiBcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvdG9rZW4vJyt0b2tlbi5wb2xpY3lfaWQrdG9rZW4uYXNzZXRfbmFtZSl9PlxuICAgICAgICAgICAgPHRkPjxpbWcgY2xhc3NOYW1lPSdmdC1pbWcnIHNyYz17dG9rZW4uaXBmc30+PC9pbWc+PC90ZD5cbiAgICAgICAgICAgIDx0ZD57bmFtZX08L3RkPjx0ZD57KHRva2VuLnF1YW50aXR5LyAxMDAwMDAwKX08L3RkPjx0ZD57Y3VycmVuY3kuc3ltYm9sfSB7cHJpY2V9IDwvdGQ+XG4gICAgICAgICAgICA8dGQ+e19jaGFuZ2UyNH0lPC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y3VycmVuY3kuc3ltYm9sfSB7dmFsdWV9PC90ZD48L3RyPik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRhYmxlID0gPHRhYmxlIGNsYXNzTmFtZT1cImZ0LXRhYmxlXCI+PHRib2R5PntfZGlzcGxheX08L3Rib2R5PjwvdGFibGU+XG4gICAgICAgIHNldERpc3BsYXkodGFibGUpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0QWNjb3VudEluZm9Gcm9tS29pb3Moc3Rha2VBZGRyZXNzKXtcbiAgICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5rb2lvcy5yZXN0L2FwaS92MC9hY2NvdW50X2luZm8nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgXCJfc3Rha2VfYWRkcmVzc2VzXCI6IFtcbiAgICAgICAgICAgICAgICBzdGFrZUFkZHJlc3NcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KTtcbiAgICAgIFxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICAgIHJldHVybiByZXM7XG4gIH1cblxuXG5cbiAgICAvL3JldHVybnMgYSBncmlkIHZpZXcgb2YgYWxsIE5GVHMgZ3JvdXBlZCBieSBwb2xpY3lcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZnRcIj57ZGlzcGxheX08L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRnRzIiwicHJvcHMiLCJkaXNwbGF5Iiwic2V0RGlzcGxheSIsInJvdXRlciIsImdldERhdGEiLCJ0b2tlbnMiLCJmdHMiLCJkaXNwbGF5VG9rZW5zIiwicHJpY2VzIiwiX2Rpc3BsYXkiLCJwb2xpY2llcyIsIk9iamVjdCIsImtleXMiLCJwdXNoIiwidHIiLCJjbGFzc05hbWUiLCJzdHlsZSIsImNvbG9yIiwidGQiLCJzdGFrZURhdGEiLCJnZXRBY2NvdW50SW5mb0Zyb21Lb2lvcyIsInN0YWtlIiwiY3VycmVuY3kiLCJfYmFsYW5jZSIsInRvdGFsX2JhbGFuY2UiLCJ0b0ZpeGVkIiwidmFsdWUiLCJpbWciLCJzcmMiLCJzeW1ib2wiLCJwb2xpY3kiLCJ0b2tlbiIsIm5hbWUiLCJtZXRhZGF0YSIsInRpY2tlciIsInRvVXBwZXJDYXNlIiwicHJpY2UiLCJjdXJyZW50UHJpY2UiLCJxdWFudGl0eSIsIl9jaGFuZ2UyNCIsInVzZDI0Q2hhbmdlIiwiY2hhbmdlMjQiLCJvbkNsaWNrIiwicG9saWN5X2lkIiwiYXNzZXRfbmFtZSIsImlwZnMiLCJ0YWJsZSIsInRib2R5Iiwic3Rha2VBZGRyZXNzIiwicmVxIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJqc29uIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/fts.js\n"));

/***/ })

});