"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/token/[policy]",{

/***/ "./src/pages/policyData.js":
/*!*********************************!*\
  !*** ./src/pages/policyData.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nftGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nftGrid */ \"./src/pages/nftGrid.js\");\n/* harmony import */ var _policy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./policy */ \"./src/pages/policy.js\");\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction PolicyData(props) {\n    _s();\n    const [policy, setPolicy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [tokens, setTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getPolicyData = async ()=>{\n            if (props.policy == null) {\n                console.log(\"policy was undefined\");\n            } else {\n                let tokens = [];\n                console.log(props.stake);\n                // fetch asset data from blockfrost\n                let policyData = await loadTokenData(props.policy);\n                if (policyData != null) {\n                    for (const element of policyData){\n                        let data = element;\n                        let assetID = data.asset;\n                        let policy = assetID.substring(0, 56);\n                        let assetName = assetID.substring(56);\n                        let quantity = data.quantity;\n                        setPolicy(policy);\n                        if (policy != null && assetName != null) {\n                            let token = new _token__WEBPACK_IMPORTED_MODULE_4__[\"default\"](assetName, policy, quantity);\n                            let metadata = await token.getMetadata();\n                            token.metadata = metadata;\n                            if (metadata != null) {\n                                let ipfs = token.getIpfsFromMetadata();\n                                token.ipfs = ipfs;\n                            }\n                            tokens.push(token);\n                        }\n                    }\n                } else {\n                    setPolicy(\"couldnt fetch data\");\n                }\n                setTokens(tokens);\n            }\n        };\n        getPolicyData();\n    }, [\n        props\n    ]);\n    // fetch token metadata from blockfrost\n    async function loadTokenData(policy) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/policy/\" + policy + \"?count=20\", {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_policy__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                policy: props.policy\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nftGrid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                nfts: tokens\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n        lineNumber: 73,\n        columnNumber: 12\n    }, this);\n}\n_s(PolicyData, \"V1BqigiZToBn1n9RCcMeEDUKznM=\");\n_c = PolicyData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PolicyData);\nvar _c;\n$RefreshReg$(_c, \"PolicyData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9saWN5RGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRDO0FBQ1o7QUFDRjtBQUNGO0FBRTVCLFNBQVNLLFdBQVlDLEtBQUssRUFBRTs7SUFFeEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQTtJQUNwQyxNQUFNLENBQUNRLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBO0lBR3BDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osTUFBTVcsZ0JBQWdCLFVBQVk7WUFDaEMsSUFBR0wsTUFBTUMsTUFBTSxJQUFJLElBQUksRUFBQztnQkFDdEJLLFFBQVFDLEdBQUcsQ0FBQztZQUNkLE9BQ0k7Z0JBQ0YsSUFBSUosU0FBUyxFQUFFO2dCQUNmRyxRQUFRQyxHQUFHLENBQUNQLE1BQU1RLEtBQUs7Z0JBQ3ZCLG1DQUFtQztnQkFDbkMsSUFBSUMsYUFBYSxNQUFNQyxjQUFjVixNQUFNQyxNQUFNO2dCQUVqRCxJQUFHUSxjQUFjLElBQUksRUFBQztvQkFDbEIsS0FBSSxNQUFNRSxXQUFXRixXQUFXO3dCQUM1QixJQUFJRyxPQUFPRDt3QkFDWCxJQUFJRSxVQUFVRCxLQUFLRSxLQUFLO3dCQUN4QixJQUFJYixTQUFTLFFBQVVjLFNBQVMsQ0FBQyxHQUFFO3dCQUNuQyxJQUFJQyxZQUFZLFFBQVVELFNBQVMsQ0FBQzt3QkFDcEMsSUFBSUUsV0FBV0wsS0FBS0ssUUFBUTt3QkFFNUJmLFVBQVVEO3dCQUVWLElBQUdBLFVBQVUsSUFBSSxJQUFJZSxhQUFhLElBQUksRUFBQzs0QkFDbkMsSUFBSUUsUUFBUSxJQUFJcEIsOENBQUtBLENBQUNrQixXQUFXZixRQUFRZ0I7NEJBQ3pDLElBQUlFLFdBQVcsTUFBTUQsTUFBTUUsV0FBVzs0QkFDdENGLE1BQU1DLFFBQVEsR0FBR0E7NEJBRWpCLElBQUdBLFlBQVksSUFBSSxFQUFDO2dDQUNoQixJQUFJRSxPQUFPSCxNQUFNSSxtQkFBbUI7Z0NBQ3BDSixNQUFNRyxJQUFJLEdBQUdBOzRCQUNqQixDQUFDOzRCQUNEbEIsT0FBT29CLElBQUksQ0FBQ0w7d0JBQ2hCLENBQUM7b0JBQ0w7Z0JBQ0osT0FDSTtvQkFDQWhCLFVBQVU7Z0JBRWQsQ0FBQztnQkFFREUsVUFBVUQ7WUFFWixDQUFDO1FBQ0g7UUFDQUU7SUFDRixHQUFHO1FBQUNMO0tBQU07SUFFWix1Q0FBdUM7SUFDdkMsZUFBZVUsY0FBY1QsTUFBTSxFQUFDO1FBQ2xDLElBQUc7WUFDRCxNQUFNVyxPQUFPLE1BQU1ZLE1BQU0sZ0VBQThEdkIsU0FBTyxhQUM5RjtnQkFBQ3dCLFNBQVE7b0JBQUNDLFlBQVk7b0JBQTJDLGlCQUFpQjtnQkFBa0I7WUFBQztZQUNyRyxNQUFNQyxNQUFNLE1BQU1mLEtBQUtnQixJQUFJO1lBQzNCLElBQUdoQixLQUFLaUIsTUFBTSxJQUFJLEtBQUk7Z0JBQ2xCLE9BQU8sSUFBSTtZQUNmLENBQUM7WUFDRCxPQUFPRjtRQUNULEVBQUMsT0FBTUcsT0FBTTtZQUNYLE9BQU8sSUFBSTtRQUNiO0lBQ0Y7SUFFQSxxQkFBTyw4REFBQ0M7OzBCQUNKLDhEQUFDbEMsK0NBQU1BO2dCQUFDSSxRQUFVRCxNQUFNQyxNQUFNOzs7Ozs7MEJBQzlCLDhEQUFDTCxnREFBT0E7Z0JBQUNvQyxNQUFRN0I7Ozs7Ozs7Ozs7OztBQUV6QjtHQXZFU0o7S0FBQUE7QUF3RVQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BvbGljeURhdGEuanM/ZjM2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmZ0R3JpZCBmcm9tIFwiLi9uZnRHcmlkXCI7XG5pbXBvcnQgUG9saWN5IGZyb20gXCIuL3BvbGljeVwiO1xuaW1wb3J0IFRva2VuIGZyb20gXCIuL3Rva2VuXCI7XG5cbmZ1bmN0aW9uIFBvbGljeURhdGEgKHByb3BzKSB7XG5cbiAgICBjb25zdCBbcG9saWN5LCBzZXRQb2xpY3ldID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbdG9rZW5zLCBzZXRUb2tlbnNdID0gdXNlU3RhdGUoKTtcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0UG9saWN5RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICBpZihwcm9wcy5wb2xpY3kgPT0gbnVsbCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncG9saWN5IHdhcyB1bmRlZmluZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGxldCB0b2tlbnMgPSBbXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb3BzLnN0YWtlKTtcbiAgICAgICAgICAgIC8vIGZldGNoIGFzc2V0IGRhdGEgZnJvbSBibG9ja2Zyb3N0XG4gICAgICAgICAgICBsZXQgcG9saWN5RGF0YSA9IGF3YWl0IGxvYWRUb2tlbkRhdGEocHJvcHMucG9saWN5KTtcblxuICAgICAgICAgICAgaWYocG9saWN5RGF0YSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICBmb3IoY29uc3QgZWxlbWVudCBvZiBwb2xpY3lEYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXNzZXRJRCA9IGRhdGEuYXNzZXQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb2xpY3kgPSAoYXNzZXRJRCkuc3Vic3RyaW5nKDAsNTYpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXNzZXROYW1lID0gKGFzc2V0SUQpLnN1YnN0cmluZyg1Nik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBxdWFudGl0eSA9IGRhdGEucXVhbnRpdHk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0UG9saWN5KHBvbGljeSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYocG9saWN5ICE9IG51bGwgJiYgYXNzZXROYW1lICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRva2VuID0gbmV3IFRva2VuKGFzc2V0TmFtZSwgcG9saWN5LCBxdWFudGl0eSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWV0YWRhdGEgPSBhd2FpdCB0b2tlbi5nZXRNZXRhZGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW4ubWV0YWRhdGEgPSBtZXRhZGF0YTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobWV0YWRhdGEgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlwZnMgPSB0b2tlbi5nZXRJcGZzRnJvbU1ldGFkYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW4uaXBmcyA9IGlwZnM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHNldFBvbGljeSgnY291bGRudCBmZXRjaCBkYXRhJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldFRva2Vucyh0b2tlbnMpO1xuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldFBvbGljeURhdGEoKTtcbiAgICAgIH0sIFtwcm9wc10pXG5cbiAgICAvLyBmZXRjaCB0b2tlbiBtZXRhZGF0YSBmcm9tIGJsb2NrZnJvc3RcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkVG9rZW5EYXRhKHBvbGljeSl7XG4gICAgICB0cnl7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9jYXJkYW5vLW1haW5uZXQuYmxvY2tmcm9zdC5pby9hcGkvdjAvYXNzZXRzL3BvbGljeS8nK3BvbGljeSsnP2NvdW50PTIwJyxcbiAgICAgICAge2hlYWRlcnM6e3Byb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnLCAnY2FjaGUtY29udHJvbCc6ICdtYXgtYWdlPTMxNTM2MDAwJ319KTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gICAgICAgIGlmKGRhdGEuc3RhdHVzICE9IDIwMCl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuKDxkaXY+XG4gICAgICAgIDxQb2xpY3kgcG9saWN5ID0ge3Byb3BzLnBvbGljeX0vPlxuICAgICAgICA8TmZ0R3JpZCBuZnRzID0ge3Rva2Vuc30vPlxuICAgIDwvZGl2Pilcbn1cbmV4cG9ydCBkZWZhdWx0IFBvbGljeURhdGE7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJOZnRHcmlkIiwiUG9saWN5IiwiVG9rZW4iLCJQb2xpY3lEYXRhIiwicHJvcHMiLCJwb2xpY3kiLCJzZXRQb2xpY3kiLCJ0b2tlbnMiLCJzZXRUb2tlbnMiLCJnZXRQb2xpY3lEYXRhIiwiY29uc29sZSIsImxvZyIsInN0YWtlIiwicG9saWN5RGF0YSIsImxvYWRUb2tlbkRhdGEiLCJlbGVtZW50IiwiZGF0YSIsImFzc2V0SUQiLCJhc3NldCIsInN1YnN0cmluZyIsImFzc2V0TmFtZSIsInF1YW50aXR5IiwidG9rZW4iLCJtZXRhZGF0YSIsImdldE1ldGFkYXRhIiwiaXBmcyIsImdldElwZnNGcm9tTWV0YWRhdGEiLCJwdXNoIiwiZmV0Y2giLCJoZWFkZXJzIiwicHJvamVjdF9pZCIsInJlcyIsImpzb24iLCJzdGF0dXMiLCJlcnJvciIsImRpdiIsIm5mdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/policyData.js\n"));

/***/ })

});