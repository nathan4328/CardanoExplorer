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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nftGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nftGrid */ \"./src/pages/nftGrid.js\");\n/* harmony import */ var _policy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./policy */ \"./src/pages/policy.js\");\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction PolicyData(props) {\n    _s();\n    const [policy, setPolicy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [tokens, setTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getPolicyData = async ()=>{\n            if (props.policy == null) {\n                console.log(\"policy was undefined\");\n            } else {\n                let tokens = [];\n                console.log(props.stake);\n                // fetch asset data from blockfrost\n                let policyData = await loadTokenData(props.policy);\n                if (policyData != null) {\n                    for (const element of policyData){\n                        let data = element;\n                        let assetID = data.asset;\n                        let policy = assetID.substring(0, 56);\n                        let assetName = assetID.substring(56);\n                        let quantity = data.quantity;\n                        setPolicy(policy);\n                        if (policy != null && assetName != null) {\n                            let token = new _token__WEBPACK_IMPORTED_MODULE_4__[\"default\"](assetName, policy, quantity);\n                            let metadata = await token.getMetadata();\n                            token.metadata = metadata;\n                            if (metadata != null) {\n                                let ipfs = token.getIpfsFromMetadata();\n                                token.ipfs = ipfs;\n                            }\n                            tokens.push(token);\n                        }\n                    }\n                } else {\n                    setPolicy(\"couldnt fetch data\");\n                }\n                setTokens(tokens);\n            }\n        };\n        getPolicyData();\n    }, [\n        props\n    ]);\n    // fetch token metadata from blockfrost\n    async function loadTokenData(policy) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/policy/\" + policy + \"?count=20\", {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Prices, {\n                data: setPriceData\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_policy__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                policy: policy\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nftGrid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                nfts: tokens\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n        lineNumber: 73,\n        columnNumber: 12\n    }, this);\n}\n_s(PolicyData, \"V1BqigiZToBn1n9RCcMeEDUKznM=\");\n_c = PolicyData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PolicyData);\nvar _c;\n$RefreshReg$(_c, \"PolicyData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9saWN5RGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRDO0FBQ1o7QUFDRjtBQUNGO0FBRTVCLFNBQVNLLFdBQVlDLEtBQUssRUFBRTs7SUFFeEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQTtJQUNwQyxNQUFNLENBQUNRLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBO0lBR3BDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osTUFBTVcsZ0JBQWdCLFVBQVk7WUFDaEMsSUFBR0wsTUFBTUMsTUFBTSxJQUFJLElBQUksRUFBQztnQkFDdEJLLFFBQVFDLEdBQUcsQ0FBQztZQUNkLE9BQ0k7Z0JBQ0YsSUFBSUosU0FBUyxFQUFFO2dCQUNmRyxRQUFRQyxHQUFHLENBQUNQLE1BQU1RLEtBQUs7Z0JBQ3ZCLG1DQUFtQztnQkFDbkMsSUFBSUMsYUFBYSxNQUFNQyxjQUFjVixNQUFNQyxNQUFNO2dCQUVqRCxJQUFHUSxjQUFjLElBQUksRUFBQztvQkFDbEIsS0FBSSxNQUFNRSxXQUFXRixXQUFXO3dCQUM1QixJQUFJRyxPQUFPRDt3QkFDWCxJQUFJRSxVQUFVRCxLQUFLRSxLQUFLO3dCQUN4QixJQUFJYixTQUFTLFFBQVVjLFNBQVMsQ0FBQyxHQUFFO3dCQUNuQyxJQUFJQyxZQUFZLFFBQVVELFNBQVMsQ0FBQzt3QkFDcEMsSUFBSUUsV0FBV0wsS0FBS0ssUUFBUTt3QkFFNUJmLFVBQVVEO3dCQUVWLElBQUdBLFVBQVUsSUFBSSxJQUFJZSxhQUFhLElBQUksRUFBQzs0QkFDbkMsSUFBSUUsUUFBUSxJQUFJcEIsOENBQUtBLENBQUNrQixXQUFXZixRQUFRZ0I7NEJBQ3pDLElBQUlFLFdBQVcsTUFBTUQsTUFBTUUsV0FBVzs0QkFDdENGLE1BQU1DLFFBQVEsR0FBR0E7NEJBRWpCLElBQUdBLFlBQVksSUFBSSxFQUFDO2dDQUNoQixJQUFJRSxPQUFPSCxNQUFNSSxtQkFBbUI7Z0NBQ3BDSixNQUFNRyxJQUFJLEdBQUdBOzRCQUNqQixDQUFDOzRCQUNEbEIsT0FBT29CLElBQUksQ0FBQ0w7d0JBQ2hCLENBQUM7b0JBQ0w7Z0JBQ0osT0FDSTtvQkFDQWhCLFVBQVU7Z0JBRWQsQ0FBQztnQkFFREUsVUFBVUQ7WUFFWixDQUFDO1FBQ0g7UUFDQUU7SUFDRixHQUFHO1FBQUNMO0tBQU07SUFFWix1Q0FBdUM7SUFDdkMsZUFBZVUsY0FBY1QsTUFBTSxFQUFDO1FBQ2xDLElBQUc7WUFDRCxNQUFNVyxPQUFPLE1BQU1ZLE1BQU0sZ0VBQThEdkIsU0FBTyxhQUM5RjtnQkFBQ3dCLFNBQVE7b0JBQUNDLFlBQVk7b0JBQTJDLGlCQUFpQjtnQkFBa0I7WUFBQztZQUNyRyxNQUFNQyxNQUFNLE1BQU1mLEtBQUtnQixJQUFJO1lBQzNCLElBQUdoQixLQUFLaUIsTUFBTSxJQUFJLEtBQUk7Z0JBQ2xCLE9BQU8sSUFBSTtZQUNmLENBQUM7WUFDRCxPQUFPRjtRQUNULEVBQUMsT0FBTUcsT0FBTTtZQUNYLE9BQU8sSUFBSTtRQUNiO0lBQ0Y7SUFFQSxxQkFBTyw4REFBQ0M7OzBCQUNKLDhEQUFDQztnQkFBT3BCLE1BQVFxQjs7Ozs7OzBCQUNoQiw4REFBQ3BDLCtDQUFNQTtnQkFBQ0ksUUFBVUE7Ozs7OzswQkFDbEIsOERBQUNMLGdEQUFPQTtnQkFBQ3NDLE1BQVEvQjs7Ozs7Ozs7Ozs7O0FBRXpCO0dBeEVTSjtLQUFBQTtBQXlFVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcG9saWN5RGF0YS5qcz9mMzZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOZnRHcmlkIGZyb20gXCIuL25mdEdyaWRcIjtcbmltcG9ydCBQb2xpY3kgZnJvbSBcIi4vcG9saWN5XCI7XG5pbXBvcnQgVG9rZW4gZnJvbSBcIi4vdG9rZW5cIjtcblxuZnVuY3Rpb24gUG9saWN5RGF0YSAocHJvcHMpIHtcblxuICAgIGNvbnN0IFtwb2xpY3ksIHNldFBvbGljeV0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFt0b2tlbnMsIHNldFRva2Vuc10gPSB1c2VTdGF0ZSgpO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRQb2xpY3lEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGlmKHByb3BzLnBvbGljeSA9PSBudWxsKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwb2xpY3kgd2FzIHVuZGVmaW5lZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgbGV0IHRva2VucyA9IFtdO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvcHMuc3Rha2UpO1xuICAgICAgICAgICAgLy8gZmV0Y2ggYXNzZXQgZGF0YSBmcm9tIGJsb2NrZnJvc3RcbiAgICAgICAgICAgIGxldCBwb2xpY3lEYXRhID0gYXdhaXQgbG9hZFRva2VuRGF0YShwcm9wcy5wb2xpY3kpO1xuXG4gICAgICAgICAgICBpZihwb2xpY3lEYXRhICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGZvcihjb25zdCBlbGVtZW50IG9mIHBvbGljeURhdGEpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhc3NldElEID0gZGF0YS5hc3NldDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvbGljeSA9IChhc3NldElEKS5zdWJzdHJpbmcoMCw1Nik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhc3NldE5hbWUgPSAoYXNzZXRJRCkuc3Vic3RyaW5nKDU2KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHF1YW50aXR5ID0gZGF0YS5xdWFudGl0eTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRQb2xpY3kocG9saWN5KTtcblxuICAgICAgICAgICAgICAgICAgICBpZihwb2xpY3kgIT0gbnVsbCAmJiBhc3NldE5hbWUgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBuZXcgVG9rZW4oYXNzZXROYW1lLCBwb2xpY3ksIHF1YW50aXR5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXRhZGF0YSA9IGF3YWl0IHRva2VuLmdldE1ldGFkYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbi5tZXRhZGF0YSA9IG1ldGFkYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihtZXRhZGF0YSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXBmcyA9IHRva2VuLmdldElwZnNGcm9tTWV0YWRhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbi5pcGZzID0gaXBmcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgc2V0UG9saWN5KCdjb3VsZG50IGZldGNoIGRhdGEnKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0VG9rZW5zKHRva2Vucyk7XG5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2V0UG9saWN5RGF0YSgpO1xuICAgICAgfSwgW3Byb3BzXSlcblxuICAgIC8vIGZldGNoIHRva2VuIG1ldGFkYXRhIGZyb20gYmxvY2tmcm9zdFxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRUb2tlbkRhdGEocG9saWN5KXtcbiAgICAgIHRyeXtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2NhcmRhbm8tbWFpbm5ldC5ibG9ja2Zyb3N0LmlvL2FwaS92MC9hc3NldHMvcG9saWN5LycrcG9saWN5Kyc/Y291bnQ9MjAnLFxuICAgICAgICB7aGVhZGVyczp7cHJvamVjdF9pZDogJ21haW5uZXRvVzYxWVlTaU9vTFNhTlE2ZHpUcmtBRzRhelhWSXJ2aCcsICdjYWNoZS1jb250cm9sJzogJ21heC1hZ2U9MzE1MzYwMDAnfX0pO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgICAgICAgaWYoZGF0YS5zdGF0dXMgIT0gMjAwKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4oPGRpdj5cbiAgICAgICAgPFByaWNlcyBkYXRhID0ge3NldFByaWNlRGF0YX0vPlxuICAgICAgICA8UG9saWN5IHBvbGljeSA9IHtwb2xpY3l9Lz5cbiAgICAgICAgPE5mdEdyaWQgbmZ0cyA9IHt0b2tlbnN9Lz5cbiAgICA8L2Rpdj4pXG59XG5leHBvcnQgZGVmYXVsdCBQb2xpY3lEYXRhO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTmZ0R3JpZCIsIlBvbGljeSIsIlRva2VuIiwiUG9saWN5RGF0YSIsInByb3BzIiwicG9saWN5Iiwic2V0UG9saWN5IiwidG9rZW5zIiwic2V0VG9rZW5zIiwiZ2V0UG9saWN5RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzdGFrZSIsInBvbGljeURhdGEiLCJsb2FkVG9rZW5EYXRhIiwiZWxlbWVudCIsImRhdGEiLCJhc3NldElEIiwiYXNzZXQiLCJzdWJzdHJpbmciLCJhc3NldE5hbWUiLCJxdWFudGl0eSIsInRva2VuIiwibWV0YWRhdGEiLCJnZXRNZXRhZGF0YSIsImlwZnMiLCJnZXRJcGZzRnJvbU1ldGFkYXRhIiwicHVzaCIsImZldGNoIiwiaGVhZGVycyIsInByb2plY3RfaWQiLCJyZXMiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiLCJkaXYiLCJQcmljZXMiLCJzZXRQcmljZURhdGEiLCJuZnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/policyData.js\n"));

/***/ })

});