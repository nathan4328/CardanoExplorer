"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/address/[address]",{

/***/ "./src/pages/prices.js":
/*!*****************************!*\
  !*** ./src/pages/prices.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Prices; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Prices() {\n    _s();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [granularity, setGranularity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"24h\");\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"red\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getPrices = async ()=>{\n            let req = await fetch(\"https://api.coingecko.com/api/v3/coins/cardano?localization=false&tickers=false&developer_data=false\");\n            let res = await req.json();\n            let adaUSD = res.market_data.current_price.usd.toFixed(2);\n            let adaGBP = res.market_data.current_price.gbp.toFixed(2);\n            let adaBTC = res.market_data.current_price.btc.toFixed(5);\n            let adaETH = res.market_data.current_price.eth.toFixed(5);\n            let adaUsdChange = \"\";\n            let adaGbpChange = \"\";\n            let adaBtcChange = \"\";\n            let adaEthChange = \"\";\n            if (granularity == \"24h\") {\n                adaUsdChange = res.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2);\n                adaGbpChange = res.market_data.price_change_percentage_24h_in_currency.gbp.toFixed(2);\n                adaBtcChange = res.market_data.price_change_percentage_24h_in_currency.btc.toFixed(2);\n                adaEthChange = res.market_data.price_change_percentage_24h_in_currency.eth.toFixed(2);\n            } else if (granularity == \"7d\") {\n                adaUsdChange = res.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2);\n                adaGbpChange = res.market_data.price_change_percentage_7d_in_currency.gbp.toFixed(2);\n                adaBtcChange = res.market_data.price_change_percentage_7d_in_currency.btc.toFixed(2);\n                adaEthChange = res.market_data.price_change_percentage_7d_in_currency.eth.toFixed(2);\n            } else if (granularity == \"30d\") {\n                adaUsdChange = res.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2);\n                adaGbpChange = res.market_data.price_change_percentage_30d_in_currency.gbp.toFixed(2);\n                adaBtcChange = res.market_data.price_change_percentage_30d_in_currency.btc.toFixed(2);\n                adaEthChange = res.market_data.price_change_percentage_30d_in_currency.eth.toFixed(2);\n            } else if (granularity == \"60d\") {\n                adaUsdChange = res.market_data.price_change_percentage_60d_in_currency.usd.toFixed(2);\n                adaGbpChange = res.market_data.price_change_percentage_60d_in_currency.gbp.toFixed(2);\n                adaBtcChange = res.market_data.price_change_percentage_60d_in_currency.btc.toFixed(2);\n                adaEthChange = res.market_data.price_change_percentage_60d_in_currency.eth.toFixed(2);\n            } else if (granularity == \"1y\") {\n                adaUsdChange = res.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2);\n                adaGbpChange = res.market_data.price_change_percentage_1y_in_currency.gbp.toFixed(2);\n                adaBtcChange = res.market_data.price_change_percentage_1y_in_currency.btc.toFixed(2);\n                adaEthChange = res.market_data.price_change_percentage_1y_in_currency.eth.toFixed(2);\n            }\n            let color = \"black\";\n            if (adaUsdChange <= 0) {\n                color = \"red\";\n            } else if (adaUsdChange == 0) {\n                color = \"grey\";\n            } else {\n                color = \"#7FFF00\";\n            }\n            setPrices(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"price-label\",\n                        children: [\n                            \"ADA/USD $\",\n                            adaUSD\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 72,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"price-label\",\n                        style: {\n                            color: color\n                        },\n                        children: [\n                            \"(\",\n                            adaUsdChange,\n                            \"%)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 73,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"price-label\",\n                        children: [\n                            \"ADA/GBP \\xa3\",\n                            adaGBP\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 74,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"price-label\",\n                        style: {\n                            color: color\n                        },\n                        children: [\n                            \"(\",\n                            adaGbpChange,\n                            \"%)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 75,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"price-label\",\n                        children: [\n                            \"ADA/ETH Ξ\",\n                            adaETH\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 77,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"price-label\",\n                        style: {\n                            color: color\n                        },\n                        children: [\n                            \"(\",\n                            adaEthChange,\n                            \"%)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 78,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"price-label\",\n                        children: [\n                            \"ADA/BTC ₿\",\n                            adaBTC\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 80,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"price-label\",\n                        style: {\n                            color: color\n                        },\n                        children: [\n                            \"(\",\n                            adaBtcChange,\n                            \"%)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 81,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"setting-label\",\n                        onClick: ()=>increaseGranularity(granularity),\n                        children: granularity\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 83,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                lineNumber: 71,\n                columnNumber: 17\n            }, this));\n        };\n        getPrices();\n    }, [\n        granularity\n    ]);\n    const increaseGranularity = (granularity)=>{\n        if (granularity == \"24h\") {\n            setGranularity(\"7d\");\n        }\n        if (granularity == \"7d\") {\n            setGranularity(\"30d\");\n        }\n        if (granularity == \"30d\") {\n            setGranularity(\"60d\");\n        }\n        if (granularity == \"60d\") {\n            setGranularity(\"1y\");\n        }\n        if (granularity == \"1y\") {\n            setGranularity(\"24h\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: prices\n    }, void 0, false, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n        lineNumber: 109,\n        columnNumber: 12\n    }, this);\n}\n_s(Prices, \"EePLhk08g23YGllL7NmpstCFlNc=\");\n_c = Prices;\nvar _c;\n$RefreshReg$(_c, \"Prices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dkMsOERBQUNjO3dCQUFJQyxXQUFVO3dCQUFjQyxPQUFPOzRCQUFDOUIsT0FBT0E7d0JBQUs7OzRCQUFHOzRCQUFFb0I7NEJBQWE7Ozs7Ozs7a0NBRW5FLDhEQUFDVzt3QkFBT0YsV0FBVTt3QkFBZ0JHLFNBQVMsSUFBTUMsb0JBQW9CbkM7a0NBQWVBOzs7Ozs7Ozs7Ozs7UUFJaEc7UUFDQUk7SUFDSixHQUFHO1FBQUNKO0tBQVk7SUFFaEIsTUFBTW1DLHNCQUFzQixDQUFDbkMsY0FBZ0I7UUFDekMsSUFBR0EsZUFBZSxPQUFNO1lBQ3BCQyxlQUFlO1FBQ25CLENBQUM7UUFDRCxJQUFHRCxlQUFlLE1BQUs7WUFDbkJDLGVBQWU7UUFDbkIsQ0FBQztRQUNELElBQUdELGVBQWUsT0FBTTtZQUNwQkMsZUFBZTtRQUNuQixDQUFDO1FBQ0QsSUFBR0QsZUFBZSxPQUFNO1lBQ3BCQyxlQUFlO1FBQ25CLENBQUM7UUFDRCxJQUFHRCxlQUFlLE1BQUs7WUFDbkJDLGVBQWU7UUFDbkIsQ0FBQztJQUNMO0lBRUEscUJBQU8sOERBQUM2QjtrQkFBS2hDOzs7Ozs7QUFFakIsQ0FBQztHQTVHdUJEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcmljZXMuanM/YTAxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpY2VzICgpIHtcblxuICAgIGNvbnN0IFtwcmljZXMsIHNldFByaWNlc10gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtncmFudWxhcml0eSwgc2V0R3JhbnVsYXJpdHldID0gdXNlU3RhdGUoJzI0aCcpO1xuICAgIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoJ3JlZCcpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0UHJpY2VzID0gYXN5bmMgKCkgPT4geyBcbiAgICAgICAgICAgIGxldCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuY29pbmdlY2tvLmNvbS9hcGkvdjMvY29pbnMvY2FyZGFubz9sb2NhbGl6YXRpb249ZmFsc2UmdGlja2Vycz1mYWxzZSZkZXZlbG9wZXJfZGF0YT1mYWxzZScpO1xuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgICAgICAgICAgIGxldCBhZGFVU0QgPSAocmVzLm1hcmtldF9kYXRhLmN1cnJlbnRfcHJpY2UudXNkKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgbGV0IGFkYUdCUCA9IChyZXMubWFya2V0X2RhdGEuY3VycmVudF9wcmljZS5nYnApLnRvRml4ZWQoMik7XG4gICAgICAgICAgICBsZXQgYWRhQlRDID0gKHJlcy5tYXJrZXRfZGF0YS5jdXJyZW50X3ByaWNlLmJ0YykudG9GaXhlZCg1KTtcbiAgICAgICAgICAgIGxldCBhZGFFVEggPSAocmVzLm1hcmtldF9kYXRhLmN1cnJlbnRfcHJpY2UuZXRoKS50b0ZpeGVkKDUpO1xuXG4gICAgICAgICAgICBsZXQgYWRhVXNkQ2hhbmdlID0gJyc7XG4gICAgICAgICAgICBsZXQgYWRhR2JwQ2hhbmdlID0gJyc7XG4gICAgICAgICAgICBsZXQgYWRhQnRjQ2hhbmdlID0gJyc7XG4gICAgICAgICAgICBsZXQgYWRhRXRoQ2hhbmdlID0gJyc7XG5cbiAgICAgICAgICAgIGlmKGdyYW51bGFyaXR5ID09ICcyNGgnKXtcbiAgICAgICAgICAgICAgICBhZGFVc2RDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aF9pbl9jdXJyZW5jeS51c2QpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgYWRhR2JwQ2hhbmdlID0gKHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGhfaW5fY3VycmVuY3kuZ2JwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGFkYUJ0Y0NoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoX2luX2N1cnJlbmN5LmJ0YykudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICBhZGFFdGhDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aF9pbl9jdXJyZW5jeS5ldGgpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChncmFudWxhcml0eSA9PSAnN2QnKXtcbiAgICAgICAgICAgICAgICBhZGFVc2RDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzdkX2luX2N1cnJlbmN5LnVzZCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICBhZGFHYnBDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzdkX2luX2N1cnJlbmN5LmdicCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICBhZGFCdGNDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzdkX2luX2N1cnJlbmN5LmJ0YykudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICBhZGFFdGhDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzdkX2luX2N1cnJlbmN5LmV0aCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGdyYW51bGFyaXR5ID09ICczMGQnKXtcbiAgICAgICAgICAgICAgICBhZGFVc2RDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzMwZF9pbl9jdXJyZW5jeS51c2QpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgYWRhR2JwQ2hhbmdlID0gKHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8zMGRfaW5fY3VycmVuY3kuZ2JwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGFkYUJ0Y0NoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMzBkX2luX2N1cnJlbmN5LmJ0YykudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICBhZGFFdGhDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzMwZF9pbl9jdXJyZW5jeS5ldGgpLnRvRml4ZWQoMik7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGdyYW51bGFyaXR5ID09ICc2MGQnKXtcbiAgICAgICAgICAgICAgICBhZGFVc2RDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzYwZF9pbl9jdXJyZW5jeS51c2QpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgYWRhR2JwQ2hhbmdlID0gKHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV82MGRfaW5fY3VycmVuY3kuZ2JwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGFkYUJ0Y0NoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfNjBkX2luX2N1cnJlbmN5LmJ0YykudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICBhZGFFdGhDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzYwZF9pbl9jdXJyZW5jeS5ldGgpLnRvRml4ZWQoMik7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoZ3JhbnVsYXJpdHkgPT0gJzF5Jyl7XG4gICAgICAgICAgICAgICAgYWRhVXNkQ2hhbmdlID0gKHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8xeV9pbl9jdXJyZW5jeS51c2QpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgYWRhR2JwQ2hhbmdlID0gKHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8xeV9pbl9jdXJyZW5jeS5nYnApLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgYWRhQnRjQ2hhbmdlID0gKHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8xeV9pbl9jdXJyZW5jeS5idGMpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgYWRhRXRoQ2hhbmdlID0gKHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8xeV9pbl9jdXJyZW5jeS5ldGgpLnRvRml4ZWQoMik7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGNvbG9yID0gJ2JsYWNrJztcblxuICAgICAgICAgICAgaWYoYWRhVXNkQ2hhbmdlIDw9MCApe1xuICAgICAgICAgICAgICAgIGNvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhZGFVc2RDaGFuZ2UgPT0gMCl7XG4gICAgICAgICAgICAgICAgY29sb3IgPSAnZ3JleSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGNvbG9yID0gJyM3RkZGMDAnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXRQcmljZXMoXG4gICAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS1sYWJlbFwiPkFEQS9VU0QgJHthZGFVU0R9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2UtbGFiZWxcIiBzdHlsZT17e2NvbG9yOiBjb2xvcn19Pih7YWRhVXNkQ2hhbmdlfSUpPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2UtbGFiZWxcIj5BREEvR0JQIMKje2FkYUdCUH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS1sYWJlbFwiIHN0eWxlPXt7Y29sb3I6IGNvbG9yfX0+KHthZGFHYnBDaGFuZ2V9JSk8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlLWxhYmVsXCI+QURBL0VUSCDOnnthZGFFVEh9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2UtbGFiZWxcIiBzdHlsZT17e2NvbG9yOiBjb2xvcn19Pih7YWRhRXRoQ2hhbmdlfSUpPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS1sYWJlbFwiPkFEQS9CVEMg4oK/e2FkYUJUQ308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS1sYWJlbFwiIHN0eWxlPXt7Y29sb3I6IGNvbG9yfX0+KHthZGFCdGNDaGFuZ2V9JSk8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNldHRpbmctbGFiZWxcIiBvbkNsaWNrPXsoKSA9PiBpbmNyZWFzZUdyYW51bGFyaXR5KGdyYW51bGFyaXR5KX0+e2dyYW51bGFyaXR5fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgZ2V0UHJpY2VzKCk7XG4gICAgfSwgW2dyYW51bGFyaXR5XSlcblxuICAgIGNvbnN0IGluY3JlYXNlR3JhbnVsYXJpdHkgPSAoZ3JhbnVsYXJpdHkpID0+IHtcbiAgICAgICAgaWYoZ3JhbnVsYXJpdHkgPT0gJzI0aCcpe1xuICAgICAgICAgICAgc2V0R3JhbnVsYXJpdHkoJzdkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoZ3JhbnVsYXJpdHkgPT0gJzdkJyl7XG4gICAgICAgICAgICBzZXRHcmFudWxhcml0eSgnMzBkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoZ3JhbnVsYXJpdHkgPT0gJzMwZCcpe1xuICAgICAgICAgICAgc2V0R3JhbnVsYXJpdHkoJzYwZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGdyYW51bGFyaXR5ID09ICc2MGQnKXtcbiAgICAgICAgICAgIHNldEdyYW51bGFyaXR5KCcxeScpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGdyYW51bGFyaXR5ID09ICcxeScpe1xuICAgICAgICAgICAgc2V0R3JhbnVsYXJpdHkoJzI0aCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuKDxkaXY+e3ByaWNlc308L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJpY2VzIiwicHJpY2VzIiwic2V0UHJpY2VzIiwiZ3JhbnVsYXJpdHkiLCJzZXRHcmFudWxhcml0eSIsImNvbG9yIiwic2V0Q29sb3IiLCJnZXRQcmljZXMiLCJyZXEiLCJmZXRjaCIsInJlcyIsImpzb24iLCJhZGFVU0QiLCJtYXJrZXRfZGF0YSIsImN1cnJlbnRfcHJpY2UiLCJ1c2QiLCJ0b0ZpeGVkIiwiYWRhR0JQIiwiZ2JwIiwiYWRhQlRDIiwiYnRjIiwiYWRhRVRIIiwiZXRoIiwiYWRhVXNkQ2hhbmdlIiwiYWRhR2JwQ2hhbmdlIiwiYWRhQnRjQ2hhbmdlIiwiYWRhRXRoQ2hhbmdlIiwicHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoX2luX2N1cnJlbmN5IiwicHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfN2RfaW5fY3VycmVuY3kiLCJwcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8zMGRfaW5fY3VycmVuY3kiLCJwcmljZV9jaGFuZ2VfcGVyY2VudGFnZV82MGRfaW5fY3VycmVuY3kiLCJwcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8xeV9pbl9jdXJyZW5jeSIsIm5hdiIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYnV0dG9uIiwib25DbGljayIsImluY3JlYXNlR3JhbnVsYXJpdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/prices.js\n"));

/***/ })

});