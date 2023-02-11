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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Prices; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Prices() {\n    _s();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [granularity, setGranularity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"24hr\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getPrices = async ()=>{\n            let req = await fetch(\"https://api.coingecko.com/api/v3/coins/cardano?localization=false&tickers=false&developer_data=false\");\n            let res = await req.json();\n            let adaUSD = res.market_data.current_price.usd.toFixed(2);\n            let adaGBP = res.market_data.current_price.gbp.toFixed(2);\n            let adaBTC = res.market_data.current_price.btc.toFixed(5);\n            let adaUsdChange = \"\";\n            let adaGbpChange = \"\";\n            let adaBtcChange = \"\";\n            if (granularity == \"24hr\") {\n                adaUsdChange = res.market_data.price_change_percentage_ + granularity + _in_currency.usd;\n                adaGbpChange = res.market_data.price_change_percentage_24h_in_currency.gbp;\n                adaBtcChange = res.market_data.price_change_percentage_24h_in_currency.btc;\n            } else if (granularity == \"7d\") {} else if (granularity == \"30d\") {}\n            setPrices(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"sort-button\",\n                        children: [\n                            \"ADA/USD $\",\n                            adaUSD,\n                            \" \",\n                            ada24USD\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 38,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"sort-button\",\n                        children: [\n                            \"ADA/GBP \\xa3\",\n                            adaGBP,\n                            \" \",\n                            ada24GBP\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"sort-button\",\n                        children: [\n                            \"ADA/BTC ₿\",\n                            adaBTC,\n                            \" \",\n                            ada24BTC\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"sort-button\",\n                        children: granularity\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                        lineNumber: 41,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n                lineNumber: 37,\n                columnNumber: 17\n            }, this));\n        };\n        getPrices();\n    }, [\n        granularity\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: prices\n    }, void 0, false, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/prices.js\",\n        lineNumber: 49,\n        columnNumber: 12\n    }, this);\n}\n_s(Prices, \"kl5i0A9cgbX9XOJOaQ1pYGTWBcg=\");\n_c = Prices;\nvar _c;\n$RefreshReg$(_c, \"Prices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJpY2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMkM7QUFFNUIsU0FBU0UsU0FBVTs7SUFFOUIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdILCtDQUFRQTtJQUNwQyxNQUFNLENBQUNJLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUM7SUFFL0NELGdEQUFTQSxDQUFDLElBQU07UUFDWixNQUFNTyxZQUFZLFVBQVk7WUFDMUIsSUFBSUMsTUFBTSxNQUFNQyxNQUFNO1lBQ3RCLElBQUlDLE1BQU0sTUFBTUYsSUFBSUcsSUFBSTtZQUV4QixJQUFJQyxTQUFTLElBQUtDLFdBQVcsQ0FBQ0MsYUFBYSxDQUFDQyxHQUFHLENBQUVDLE9BQU8sQ0FBQztZQUN6RCxJQUFJQyxTQUFTLElBQUtKLFdBQVcsQ0FBQ0MsYUFBYSxDQUFDSSxHQUFHLENBQUVGLE9BQU8sQ0FBQztZQUN6RCxJQUFJRyxTQUFTLElBQUtOLFdBQVcsQ0FBQ0MsYUFBYSxDQUFDTSxHQUFHLENBQUVKLE9BQU8sQ0FBQztZQUV6RCxJQUFJSyxlQUFlO1lBQ25CLElBQUlDLGVBQWU7WUFDbkIsSUFBSUMsZUFBZTtZQUVuQixJQUFHbEIsZUFBZSxRQUFPO2dCQUNyQmdCLGVBQWVYLElBQUlHLFdBQVcsQ0FBQ1csd0JBQXdCLEdBQUNuQixjQUFZb0IsYUFBYVYsR0FBRztnQkFDcEZPLGVBQWVaLElBQUlHLFdBQVcsQ0FBQ2EsdUNBQXVDLENBQUNSLEdBQUc7Z0JBQzFFSyxlQUFlYixJQUFJRyxXQUFXLENBQUNhLHVDQUF1QyxDQUFDTixHQUFHO1lBQzlFLE9BQ0ssSUFBSWYsZUFBZSxNQUFLLENBRTdCLE9BQ0ssSUFBSUEsZUFBZSxPQUFNLENBRTlCLENBQUM7WUFLREQsd0JBQ0ksOERBQUN1Qjs7a0NBQ0csOERBQUNDO3dCQUFPQyxXQUFVOzs0QkFBYzs0QkFBVWpCOzRCQUFPOzRCQUFFa0I7Ozs7Ozs7a0NBQ25ELDhEQUFDRjt3QkFBT0MsV0FBVTs7NEJBQWM7NEJBQVVaOzRCQUFPOzRCQUFFYzs7Ozs7OztrQ0FDbkQsOERBQUNIO3dCQUFPQyxXQUFVOzs0QkFBYzs0QkFBVVY7NEJBQU87NEJBQUVhOzs7Ozs7O2tDQUNuRCw4REFBQ0o7d0JBQU9DLFdBQVU7a0NBQWV4Qjs7Ozs7Ozs7Ozs7O1FBSTdDO1FBQ0FFO0lBQ0osR0FBRztRQUFDRjtLQUFZO0lBRWhCLHFCQUFPLDhEQUFDNEI7a0JBQUs5Qjs7Ozs7O0FBRWpCLENBQUM7R0FoRHVCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJpY2VzLmpzP2EwMTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaWNlcyAoKSB7XG5cbiAgICBjb25zdCBbcHJpY2VzLCBzZXRQcmljZXNdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbZ3JhbnVsYXJpdHksIHNldEdyYW51bGFyaXR5XSA9IHVzZVN0YXRlKCcyNGhyJylcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdldFByaWNlcyA9IGFzeW5jICgpID0+IHsgXG4gICAgICAgICAgICBsZXQgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmNvaW5nZWNrby5jb20vYXBpL3YzL2NvaW5zL2NhcmRhbm8/bG9jYWxpemF0aW9uPWZhbHNlJnRpY2tlcnM9ZmFsc2UmZGV2ZWxvcGVyX2RhdGE9ZmFsc2UnKTtcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCByZXEuanNvbigpO1xuXG4gICAgICAgICAgICBsZXQgYWRhVVNEID0gKHJlcy5tYXJrZXRfZGF0YS5jdXJyZW50X3ByaWNlLnVzZCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgIGxldCBhZGFHQlAgPSAocmVzLm1hcmtldF9kYXRhLmN1cnJlbnRfcHJpY2UuZ2JwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgbGV0IGFkYUJUQyA9IChyZXMubWFya2V0X2RhdGEuY3VycmVudF9wcmljZS5idGMpLnRvRml4ZWQoNSk7XG5cbiAgICAgICAgICAgIGxldCBhZGFVc2RDaGFuZ2UgPSAnJztcbiAgICAgICAgICAgIGxldCBhZGFHYnBDaGFuZ2UgPSAnJztcbiAgICAgICAgICAgIGxldCBhZGFCdGNDaGFuZ2UgPSAnJztcblxuICAgICAgICAgICAgaWYoZ3JhbnVsYXJpdHkgPT0gJzI0aHInKXtcbiAgICAgICAgICAgICAgICBhZGFVc2RDaGFuZ2UgPSByZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfK2dyYW51bGFyaXR5K19pbl9jdXJyZW5jeS51c2Q7XG4gICAgICAgICAgICAgICAgYWRhR2JwQ2hhbmdlID0gcmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aF9pbl9jdXJyZW5jeS5nYnA7XG4gICAgICAgICAgICAgICAgYWRhQnRjQ2hhbmdlID0gcmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aF9pbl9jdXJyZW5jeS5idGM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChncmFudWxhcml0eSA9PSAnN2QnKXtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZ3JhbnVsYXJpdHkgPT0gJzMwZCcpe1xuXG4gICAgICAgICAgICB9XG5cblxuXG5cbiAgICAgICAgICAgIHNldFByaWNlcyhcbiAgICAgICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNvcnQtYnV0dG9uXCI+QURBL1VTRCAke2FkYVVTRH0ge2FkYTI0VVNEfTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNvcnQtYnV0dG9uXCI+QURBL0dCUCDCo3thZGFHQlB9IHthZGEyNEdCUH08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzb3J0LWJ1dHRvblwiPkFEQS9CVEMg4oK/e2FkYUJUQ30ge2FkYTI0QlRDfTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNvcnQtYnV0dG9uXCI+e2dyYW51bGFyaXR5fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgZ2V0UHJpY2VzKCk7XG4gICAgfSwgW2dyYW51bGFyaXR5XSlcblxuICAgIHJldHVybig8ZGl2PntwcmljZXN9PC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByaWNlcyIsInByaWNlcyIsInNldFByaWNlcyIsImdyYW51bGFyaXR5Iiwic2V0R3JhbnVsYXJpdHkiLCJnZXRQcmljZXMiLCJyZXEiLCJmZXRjaCIsInJlcyIsImpzb24iLCJhZGFVU0QiLCJtYXJrZXRfZGF0YSIsImN1cnJlbnRfcHJpY2UiLCJ1c2QiLCJ0b0ZpeGVkIiwiYWRhR0JQIiwiZ2JwIiwiYWRhQlRDIiwiYnRjIiwiYWRhVXNkQ2hhbmdlIiwiYWRhR2JwQ2hhbmdlIiwiYWRhQnRjQ2hhbmdlIiwicHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfIiwiX2luX2N1cnJlbmN5IiwicHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoX2luX2N1cnJlbmN5IiwibmF2IiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwiYWRhMjRVU0QiLCJhZGEyNEdCUCIsImFkYTI0QlRDIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/prices.js\n"));

/***/ })

});