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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nftGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nftGrid */ \"./src/pages/nftGrid.js\");\n/* harmony import */ var _policy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./policy */ \"./src/pages/policy.js\");\n/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prices */ \"./src/pages/prices.js\");\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction PolicyData(props) {\n    _s();\n    const [policy, setPolicy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [tokens, setTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getPolicyData = async ()=>{\n            if (props.policy == null && props.stake != null) {\n                console.log(\"policy was undefined\");\n            } else {\n                let tokens = [];\n                let assets = await getAssetsOfPolicyFromKoios(props.stake, props.policy);\n                console.log(assets);\n                for(let i = 0; i < assets.length; i++){\n                    let token = new _token__WEBPACK_IMPORTED_MODULE_5__[\"default\"](assets[i].asset_name, assets[i].policy_id, assets[i].quantity);\n                    tokens.push(token);\n                }\n                console.log(tokens);\n            }\n        };\n        getPolicyData();\n    }, [\n        props\n    ]);\n    // no asset limit on how many assets gets returned on one request\n    // koios, blockfrost is limited by 100 results per page\n    async function getAssetsOfPolicyFromKoios(stakeAddress, policy) {\n        let assets = [];\n        try {\n            const req = await fetch(\"https://api.koios.rest/api/v0/account_assets\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    \"_stake_addresses\": [\n                        stakeAddress\n                    ]\n                })\n            });\n            const res = await req.json();\n            for(let i = 0; i < res[0].asset_list.length; i++){\n                let token = res[0].asset_list[i];\n                if (token.policy_id == policy) {\n                    assets.push(token);\n                }\n            }\n            return assets;\n        } catch (error) {\n            return null;\n        }\n    }\n    // fetch token metadata from blockfrost\n    async function loadTokenData(policy) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/policy/\" + policy + \"?count=100\", {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    function setPriceData(data) {\n        setPrices(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prices__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                data: setPriceData\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 90,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_policy__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                policy: policy,\n                prices: prices\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nftGrid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                nfts: tokens\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n        lineNumber: 89,\n        columnNumber: 12\n    }, this);\n}\n_s(PolicyData, \"uIGw6mgM49RNAgXiLVr2r4ER/t8=\");\n_c = PolicyData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PolicyData);\nvar _c;\n$RefreshReg$(_c, \"PolicyData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzswQkFDbEMsOERBQUNWLGdEQUFPQTtnQkFBQzJDLE1BQVFuQzs7Ozs7Ozs7Ozs7O0FBRXpCO0dBdkZTSjtLQUFBQTtBQXdGVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcG9saWN5RGF0YS5qcz9mMzZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOZnRHcmlkIGZyb20gXCIuL25mdEdyaWRcIjtcbmltcG9ydCBQb2xpY3kgZnJvbSBcIi4vcG9saWN5XCI7XG5pbXBvcnQgUHJpY2VzIGZyb20gXCIuL3ByaWNlc1wiO1xuaW1wb3J0IFRva2VuIGZyb20gXCIuL3Rva2VuXCI7XG5cbmZ1bmN0aW9uIFBvbGljeURhdGEgKHByb3BzKSB7XG5cbiAgICBjb25zdCBbcG9saWN5LCBzZXRQb2xpY3ldID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbdG9rZW5zLCBzZXRUb2tlbnNdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbcHJpY2VzLCBzZXRQcmljZXNdID0gdXNlU3RhdGUoKTtcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0UG9saWN5RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICBpZihwcm9wcy5wb2xpY3kgPT0gbnVsbCAmJiBwcm9wcy5zdGFrZSAhPSBudWxsKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwb2xpY3kgd2FzIHVuZGVmaW5lZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgbGV0IHRva2VucyA9IFtdO1xuICAgICAgICAgICAgbGV0IGFzc2V0cyA9IGF3YWl0IGdldEFzc2V0c09mUG9saWN5RnJvbUtvaW9zKHByb3BzLnN0YWtlLCBwcm9wcy5wb2xpY3kpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYXNzZXRzKTtcblxuICAgICAgICAgICAgZm9yKGxldCBpID0wO2k8YXNzZXRzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBuZXcgVG9rZW4oYXNzZXRzW2ldLmFzc2V0X25hbWUsIGFzc2V0c1tpXS5wb2xpY3lfaWQsIGFzc2V0c1tpXS5xdWFudGl0eSk7XG4gICAgICAgICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5sb2codG9rZW5zKTtcblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnZXRQb2xpY3lEYXRhKCk7XG4gICAgICB9LCBbcHJvcHNdKVxuXG4gIC8vIG5vIGFzc2V0IGxpbWl0IG9uIGhvdyBtYW55IGFzc2V0cyBnZXRzIHJldHVybmVkIG9uIG9uZSByZXF1ZXN0XG4gIC8vIGtvaW9zLCBibG9ja2Zyb3N0IGlzIGxpbWl0ZWQgYnkgMTAwIHJlc3VsdHMgcGVyIHBhZ2VcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0QXNzZXRzT2ZQb2xpY3lGcm9tS29pb3Moc3Rha2VBZGRyZXNzLCBwb2xpY3kpe1xuICAgIGxldCBhc3NldHMgPSBbXTtcbiAgICB0cnl7XG4gICAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkua29pb3MucmVzdC9hcGkvdjAvYWNjb3VudF9hc3NldHMnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgXCJfc3Rha2VfYWRkcmVzc2VzXCI6IFtcbiAgICAgICAgICAgIHN0YWtlQWRkcmVzc1xuICAgICAgICAgIF1cbiAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCByZXEuanNvbigpO1xuXG4gICAgICBmb3IobGV0IGk9MDtpPHJlc1swXS5hc3NldF9saXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IHRva2VuID0gcmVzWzBdLmFzc2V0X2xpc3RbaV07XG5cbiAgICAgICAgaWYodG9rZW4ucG9saWN5X2lkID09IHBvbGljeSl7XG4gICAgICAgICAgYXNzZXRzLnB1c2godG9rZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYXNzZXRzO1xuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgfVxuXG5cbiAgICAvLyBmZXRjaCB0b2tlbiBtZXRhZGF0YSBmcm9tIGJsb2NrZnJvc3RcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkVG9rZW5EYXRhKHBvbGljeSl7XG4gICAgICB0cnl7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9jYXJkYW5vLW1haW5uZXQuYmxvY2tmcm9zdC5pby9hcGkvdjAvYXNzZXRzL3BvbGljeS8nK3BvbGljeSsnP2NvdW50PTEwMCcsXG4gICAgICAgIHtoZWFkZXJzOntwcm9qZWN0X2lkOiAnbWFpbm5ldG9XNjFZWVNpT29MU2FOUTZkelRya0FHNGF6WFZJcnZoJywgJ2NhY2hlLWNvbnRyb2wnOiAnbWF4LWFnZT0zMTUzNjAwMCd9fSk7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRhdGEuanNvbigpO1xuICAgICAgICBpZihkYXRhLnN0YXR1cyAhPSAyMDApe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFByaWNlRGF0YShkYXRhKXtcbiAgICAgIHNldFByaWNlcyhkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4oPGRpdj5cbiAgICAgICAgPFByaWNlcyBkYXRhID0ge3NldFByaWNlRGF0YX0vPlxuICAgICAgICA8UG9saWN5IHBvbGljeSA9IHtwb2xpY3l9IHByaWNlcz17cHJpY2VzfS8+XG4gICAgICAgIDxOZnRHcmlkIG5mdHMgPSB7dG9rZW5zfS8+XG4gICAgPC9kaXY+KVxufVxuZXhwb3J0IGRlZmF1bHQgUG9saWN5RGF0YTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5mdEdyaWQiLCJQb2xpY3kiLCJQcmljZXMiLCJUb2tlbiIsIlBvbGljeURhdGEiLCJwcm9wcyIsInBvbGljeSIsInNldFBvbGljeSIsInRva2VucyIsInNldFRva2VucyIsInByaWNlcyIsInNldFByaWNlcyIsImdldFBvbGljeURhdGEiLCJzdGFrZSIsImNvbnNvbGUiLCJsb2ciLCJhc3NldHMiLCJnZXRBc3NldHNPZlBvbGljeUZyb21Lb2lvcyIsImkiLCJsZW5ndGgiLCJ0b2tlbiIsImFzc2V0X25hbWUiLCJwb2xpY3lfaWQiLCJxdWFudGl0eSIsInB1c2giLCJzdGFrZUFkZHJlc3MiLCJyZXEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImpzb24iLCJhc3NldF9saXN0IiwiZXJyb3IiLCJsb2FkVG9rZW5EYXRhIiwiZGF0YSIsInByb2plY3RfaWQiLCJzdGF0dXMiLCJzZXRQcmljZURhdGEiLCJkaXYiLCJuZnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/policyData.js\n"));

/***/ })

});