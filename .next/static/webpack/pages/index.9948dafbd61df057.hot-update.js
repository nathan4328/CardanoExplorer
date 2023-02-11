"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/prices.js":
/*!*****************************!*\
  !*** ./src/pages/prices.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Prices; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Prices() {\n    _s();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [granularity, setGranularity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"24h\");\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getPrices = async ()=>{\n            let req = await fetch(\"https://api.coingecko.com/api/v3/coins/cardano?localization=false&tickers=false&developer_data=false\");\n            let res = await req.json();\n            let adaUSD = res.market_data.current_price.usd.toFixed(2);\n            let adaGBP = res.market_data.current_price.gbp.toFixed(2);\n            let adaBTC = res.market_data.current_price.btc.toFixed(5);\n            let adaETH = res.market_data.current_price.eth.toFixed(5);\n            let adaUsdChange = \"\";\n            let adaGbpChange = \"\";\n            let adaBtcChange = \"\";\n            let adaEthChange = \"\";\n            if (granularity == \"24h\") {\n                adaUsdChange = res.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2);\n                adaGbpChange = res.market_data.price_change_percentage_24h_in_currency.gbp.toFixed(2);\n                adaBtcChange = res.market_data.price_change_percentage_24h_in_currency.btc.toFixed(2);\n                adaEthChange = res.market_data.price_change_percentage_24h_in_currency.eth.toFixed(2);\n            } else if (granularity == \"7d\") {\n                adaUsdChange = res.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2);\n                adaGbpChange = res.market_data.price_change_percentage_7d_in_currency.gbp.toFixed(2);\n                adaBtcChange = res.market_data.price_change_percentage_7d_in_currency.btc.toFixed(2);\n                adaEthChange = res.market_data.price_change_percentage_7d_in_currency.eth.toFixed(2);\n            } else if (granularity == \"30d\") {\n                adaUsdChange = res.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2);\n                adaGbpChange = res.market_data.price_change_percentage_30d_in_currency.gbp.toFixed(2);\n                adaBtcChange = res.market_data.price_change_percentage_30d_in_currency.btc.toFixed(2);\n                adaEthChange = res.market_data.price_change_percentage_30d_in_currency.eth.toFixed(2);\n            } else if (granularity == \"60d\") {\n                adaUsdChange = res.market_data.price_change_percentage_60d_in_currency.usd.toFixed(2);\n                adaGbpChange = res.market_data.price_change_percentage_60d_in_currency.gbp.toFixed(2);\n                adaBtcChange = res.market_data.price_change_percentage_60d_in_currency.btc.toFixed(2);\n                adaEthChange = res.market_data.price_change_percentage_60d_in_currency.eth.toFixed(2);\n            } else if (granularity == \"1y\") {\n                adaUsdChange = res.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2);\n                adaGbpChange = res.market_data.price_change_percentage_1y_in_currency.gbp.toFixed(2);\n                adaBtcChange = res.market_data.price_change_percentage_1y_in_currency.btc.toFixed(2);\n                adaEthChange = res.market_data.price_change_percentage_1y_in_currency.eth.toFixed(2);\n            }\n            setPrices(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"price-label\",\n                        children: [\n                            \"ADA/USD $\",\n                            adaUSD\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 61,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"price-label\",\n                        children: [\n                            \"(\",\n                            adaUsdChange,\n                            \"%)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 62,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"price-label\",\n                        children: [\n                            \"ADA/GBP \\xa3\",\n                            adaGBP,\n                            \" (\",\n                            adaGbpChange,\n                            \"%)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 63,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"price-label\",\n                        children: [\n                            \"ADA/ETH Ξ\",\n                            adaETH,\n                            \" (\",\n                            adaEthChange,\n                            \"%)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 64,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"price-label\",\n                        children: [\n                            \"ADA/BTC ₿\",\n                            adaBTC,\n                            \" (\",\n                            adaBtcChange,\n                            \"%)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 65,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"price-label\",\n                        onClick: ()=>increaseGranularity(granularity),\n                        children: granularity\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 66,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                lineNumber: 60,\n                columnNumber: 17\n            }, this));\n        };\n        getPrices();\n    }, [\n        granularity\n    ]);\n    const increaseGranularity = (granularity)=>{\n        if (granularity == \"24h\") {\n            setGranularity(\"7d\");\n        }\n        if (granularity == \"7d\") {\n            setGranularity(\"30d\");\n        }\n        if (granularity == \"30d\") {\n            setGranularity(\"60d\");\n        }\n        if (granularity == \"60d\") {\n            setGranularity(\"1y\");\n        }\n        if (granularity == \"1y\") {\n            setGranularity(\"24h\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: prices\n    }, void 0, false, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n        lineNumber: 92,\n        columnNumber: 12\n    }, this);\n}\n_s(Prices, \"RnSnyDwGgu0xBVg0UsyXOrxNUu4=\");\n_c = Prices;\nvar _c;\n$RefreshReg$(_c, \"Prices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxlQUFlLE9BQU07WUFDcEJDLGVBQWU7UUFDbkIsQ0FBQztRQUNELElBQUdELGVBQWUsTUFBSztZQUNuQkMsZUFBZTtRQUNuQixDQUFDO0lBQ0w7SUFFQSxxQkFBTyw4REFBQzZCO2tCQUFLaEM7Ozs7OztBQUVqQixDQUFDO0dBM0Z1QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3ByaWNlcy5qcz9hMDEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmljZXMgKCkge1xuXG4gICAgY29uc3QgW3ByaWNlcywgc2V0UHJpY2VzXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2dyYW51bGFyaXR5LCBzZXRHcmFudWxhcml0eV0gPSB1c2VTdGF0ZSgnMjRoJyk7XG4gICAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRQcmljZXMgPSBhc3luYyAoKSA9PiB7IFxuICAgICAgICAgICAgbGV0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5jb2luZ2Vja28uY29tL2FwaS92My9jb2lucy9jYXJkYW5vP2xvY2FsaXphdGlvbj1mYWxzZSZ0aWNrZXJzPWZhbHNlJmRldmVsb3Blcl9kYXRhPWZhbHNlJyk7XG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcblxuICAgICAgICAgICAgbGV0IGFkYVVTRCA9IChyZXMubWFya2V0X2RhdGEuY3VycmVudF9wcmljZS51c2QpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICBsZXQgYWRhR0JQID0gKHJlcy5tYXJrZXRfZGF0YS5jdXJyZW50X3ByaWNlLmdicCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgIGxldCBhZGFCVEMgPSAocmVzLm1hcmtldF9kYXRhLmN1cnJlbnRfcHJpY2UuYnRjKS50b0ZpeGVkKDUpO1xuICAgICAgICAgICAgbGV0IGFkYUVUSCA9IChyZXMubWFya2V0X2RhdGEuY3VycmVudF9wcmljZS5ldGgpLnRvRml4ZWQoNSk7XG5cbiAgICAgICAgICAgIGxldCBhZGFVc2RDaGFuZ2UgPSAnJztcbiAgICAgICAgICAgIGxldCBhZGFHYnBDaGFuZ2UgPSAnJztcbiAgICAgICAgICAgIGxldCBhZGFCdGNDaGFuZ2UgPSAnJztcbiAgICAgICAgICAgIGxldCBhZGFFdGhDaGFuZ2UgPSAnJztcblxuICAgICAgICAgICAgaWYoZ3JhbnVsYXJpdHkgPT0gJzI0aCcpe1xuICAgICAgICAgICAgICAgIGFkYVVzZENoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoX2luX2N1cnJlbmN5LnVzZCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICBhZGFHYnBDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aF9pbl9jdXJyZW5jeS5nYnApLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgYWRhQnRjQ2hhbmdlID0gKHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGhfaW5fY3VycmVuY3kuYnRjKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGFkYUV0aENoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoX2luX2N1cnJlbmN5LmV0aCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGdyYW51bGFyaXR5ID09ICc3ZCcpe1xuICAgICAgICAgICAgICAgIGFkYVVzZENoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfN2RfaW5fY3VycmVuY3kudXNkKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGFkYUdicENoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfN2RfaW5fY3VycmVuY3kuZ2JwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGFkYUJ0Y0NoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfN2RfaW5fY3VycmVuY3kuYnRjKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGFkYUV0aENoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfN2RfaW5fY3VycmVuY3kuZXRoKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZ3JhbnVsYXJpdHkgPT0gJzMwZCcpe1xuICAgICAgICAgICAgICAgIGFkYVVzZENoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMzBkX2luX2N1cnJlbmN5LnVzZCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICBhZGFHYnBDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzMwZF9pbl9jdXJyZW5jeS5nYnApLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgYWRhQnRjQ2hhbmdlID0gKHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8zMGRfaW5fY3VycmVuY3kuYnRjKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGFkYUV0aENoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMzBkX2luX2N1cnJlbmN5LmV0aCkudG9GaXhlZCgyKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZ3JhbnVsYXJpdHkgPT0gJzYwZCcpe1xuICAgICAgICAgICAgICAgIGFkYVVzZENoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfNjBkX2luX2N1cnJlbmN5LnVzZCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICBhZGFHYnBDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzYwZF9pbl9jdXJyZW5jeS5nYnApLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgYWRhQnRjQ2hhbmdlID0gKHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV82MGRfaW5fY3VycmVuY3kuYnRjKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGFkYUV0aENoYW5nZSA9IChyZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfNjBkX2luX2N1cnJlbmN5LmV0aCkudG9GaXhlZCgyKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihncmFudWxhcml0eSA9PSAnMXknKXtcbiAgICAgICAgICAgICAgICBhZGFVc2RDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzF5X2luX2N1cnJlbmN5LnVzZCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICBhZGFHYnBDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzF5X2luX2N1cnJlbmN5LmdicCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICBhZGFCdGNDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzF5X2luX2N1cnJlbmN5LmJ0YykudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICBhZGFFdGhDaGFuZ2UgPSAocmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzF5X2luX2N1cnJlbmN5LmV0aCkudG9GaXhlZCgyKTtcblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIHNldFByaWNlcyhcbiAgICAgICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlLWxhYmVsXCI+QURBL1VTRCAke2FkYVVTRH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS1sYWJlbFwiID4oe2FkYVVzZENoYW5nZX0lKTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlLWxhYmVsXCI+QURBL0dCUCDCo3thZGFHQlB9ICh7YWRhR2JwQ2hhbmdlfSUpPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2UtbGFiZWxcIj5BREEvRVRIIM6ee2FkYUVUSH0gKHthZGFFdGhDaGFuZ2V9JSk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS1sYWJlbFwiPkFEQS9CVEMg4oK/e2FkYUJUQ30gKHthZGFCdGNDaGFuZ2V9JSk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcmljZS1sYWJlbFwiIG9uQ2xpY2s9eygpID0+IGluY3JlYXNlR3JhbnVsYXJpdHkoZ3JhbnVsYXJpdHkpfT57Z3JhbnVsYXJpdHl9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBnZXRQcmljZXMoKTtcbiAgICB9LCBbZ3JhbnVsYXJpdHldKVxuXG4gICAgY29uc3QgaW5jcmVhc2VHcmFudWxhcml0eSA9IChncmFudWxhcml0eSkgPT4ge1xuICAgICAgICBpZihncmFudWxhcml0eSA9PSAnMjRoJyl7XG4gICAgICAgICAgICBzZXRHcmFudWxhcml0eSgnN2QnKTtcbiAgICAgICAgfVxuICAgICAgICBpZihncmFudWxhcml0eSA9PSAnN2QnKXtcbiAgICAgICAgICAgIHNldEdyYW51bGFyaXR5KCczMGQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZihncmFudWxhcml0eSA9PSAnMzBkJyl7XG4gICAgICAgICAgICBzZXRHcmFudWxhcml0eSgnNjBkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoZ3JhbnVsYXJpdHkgPT0gJzYwZCcpe1xuICAgICAgICAgICAgc2V0R3JhbnVsYXJpdHkoJzF5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoZ3JhbnVsYXJpdHkgPT0gJzF5Jyl7XG4gICAgICAgICAgICBzZXRHcmFudWxhcml0eSgnMjRoJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4oPGRpdj57cHJpY2VzfTwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcmljZXMiLCJwcmljZXMiLCJzZXRQcmljZXMiLCJncmFudWxhcml0eSIsInNldEdyYW51bGFyaXR5IiwiY29sb3IiLCJzZXRDb2xvciIsImdldFByaWNlcyIsInJlcSIsImZldGNoIiwicmVzIiwianNvbiIsImFkYVVTRCIsIm1hcmtldF9kYXRhIiwiY3VycmVudF9wcmljZSIsInVzZCIsInRvRml4ZWQiLCJhZGFHQlAiLCJnYnAiLCJhZGFCVEMiLCJidGMiLCJhZGFFVEgiLCJldGgiLCJhZGFVc2RDaGFuZ2UiLCJhZGFHYnBDaGFuZ2UiLCJhZGFCdGNDaGFuZ2UiLCJhZGFFdGhDaGFuZ2UiLCJwcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGhfaW5fY3VycmVuY3kiLCJwcmljZV9jaGFuZ2VfcGVyY2VudGFnZV83ZF9pbl9jdXJyZW5jeSIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzMwZF9pbl9jdXJyZW5jeSIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzYwZF9pbl9jdXJyZW5jeSIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzF5X2luX2N1cnJlbmN5IiwibmF2IiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsImluY3JlYXNlR3JhbnVsYXJpdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/prices.js\n"));

/***/ })

});