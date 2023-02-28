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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nftGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nftGrid */ \"./src/pages/nftGrid.js\");\n/* harmony import */ var _policy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./policy */ \"./src/pages/policy.js\");\n/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prices */ \"./src/pages/prices.js\");\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction PolicyData(props) {\n    _s();\n    const [policy, setPolicy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [tokens, setTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getPolicyData = async ()=>{\n            if (props == null) {\n                console.log(\"policy was undefined\");\n            } else {\n                let tokens = [];\n                let assets = await getAssetsOfPolicyFromKoios(props.stake, props.policy);\n                console.log(assets);\n                for(let i = 0; i < assets.length; i++){\n                    let token = new _token__WEBPACK_IMPORTED_MODULE_5__[\"default\"](assets[i].asset_name, assets[i].policy_id, assets[i].quantity);\n                    token.metadata = await token.getMetadata();\n                    if (token.metadata != null) {\n                        let ipfs = token.getIpfsFromMetadata();\n                        token.ipfs = ipfs;\n                    }\n                    tokens.push(token);\n                }\n                setTokens(tokens);\n                console.log(tokens);\n            }\n        };\n        getPolicyData();\n    }, [\n        props\n    ]);\n    // no asset limit on how many assets gets returned on one request\n    // koios, blockfrost is limited by 100 results per page\n    async function getAssetsOfPolicyFromKoios(stakeAddress, policy) {\n        let assets = [];\n        try {\n            const req = await fetch(\"https://api.koios.rest/api/v0/account_assets\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    \"_stake_addresses\": [\n                        stakeAddress\n                    ]\n                })\n            });\n            const res = await req.json();\n            for(let i = 0; i < res[0].asset_list.length; i++){\n                let token = res[0].asset_list[i];\n                if (token.policy_id == policy) {\n                    assets.push(token);\n                }\n            }\n            return assets;\n        } catch (error) {\n            return null;\n        }\n    }\n    // fetch token metadata from blockfrost\n    async function loadTokenData(policy) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/policy/\" + policy + \"?count=100\", {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    function setPriceData(data) {\n        setPrices(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prices__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                data: setPriceData\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 97,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_policy__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                policy: props.policy,\n                prices: prices\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 98,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nftGrid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                nfts: tokens,\n                stake: props.stake\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 100,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n        lineNumber: 96,\n        columnNumber: 12\n    }, this);\n}\n_s(PolicyData, \"uIGw6mgM49RNAgXiLVr2r4ER/t8=\");\n_c = PolicyData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PolicyData);\nvar _c;\n$RefreshReg$(_c, \"PolicyData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ekIvQixVQUFVK0I7SUFDWjtJQUVBLHFCQUFPLDhEQUFDSTs7MEJBQ0osOERBQUM1QywrQ0FBTUE7Z0JBQUN3QyxNQUFRRzs7Ozs7OzBCQUNoQiw4REFBQzVDLCtDQUFNQTtnQkFBQ0ssUUFBVUQsTUFBTUMsTUFBTTtnQkFBRUksUUFBUUE7Ozs7OzswQkFFeEMsOERBQUNWLGdEQUFPQTtnQkFBQytDLE1BQVF2QztnQkFBUVMsT0FBT1osTUFBTVksS0FBSzs7Ozs7Ozs7Ozs7O0FBRW5EO0dBL0ZTYjtLQUFBQTtBQWdHVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcG9saWN5RGF0YS5qcz9mMzZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOZnRHcmlkIGZyb20gXCIuL25mdEdyaWRcIjtcbmltcG9ydCBQb2xpY3kgZnJvbSBcIi4vcG9saWN5XCI7XG5pbXBvcnQgUHJpY2VzIGZyb20gXCIuL3ByaWNlc1wiO1xuaW1wb3J0IFRva2VuIGZyb20gXCIuL3Rva2VuXCI7XG5cbmZ1bmN0aW9uIFBvbGljeURhdGEgKHByb3BzKSB7XG5cbiAgICBjb25zdCBbcG9saWN5LCBzZXRQb2xpY3ldID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbdG9rZW5zLCBzZXRUb2tlbnNdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbcHJpY2VzLCBzZXRQcmljZXNdID0gdXNlU3RhdGUoKTtcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0UG9saWN5RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICBpZihwcm9wcyA9PW51bGwpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3BvbGljeSB3YXMgdW5kZWZpbmVkJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICBsZXQgdG9rZW5zID0gW107XG4gICAgICAgICAgICBsZXQgYXNzZXRzID0gYXdhaXQgZ2V0QXNzZXRzT2ZQb2xpY3lGcm9tS29pb3MocHJvcHMuc3Rha2UsIHByb3BzLnBvbGljeSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhc3NldHMpO1xuXG4gICAgICAgICAgICBmb3IobGV0IGkgPTA7aTxhc3NldHMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgIGxldCB0b2tlbiA9IG5ldyBUb2tlbihhc3NldHNbaV0uYXNzZXRfbmFtZSwgYXNzZXRzW2ldLnBvbGljeV9pZCwgYXNzZXRzW2ldLnF1YW50aXR5KTtcbiAgICAgICAgICAgICAgdG9rZW4ubWV0YWRhdGEgPSBhd2FpdCB0b2tlbi5nZXRNZXRhZGF0YSgpO1xuXG4gICAgICAgICAgICAgIGlmKHRva2VuLm1ldGFkYXRhICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGxldCBpcGZzID0gdG9rZW4uZ2V0SXBmc0Zyb21NZXRhZGF0YSgpO1xuICAgICAgICAgICAgICAgIHRva2VuLmlwZnMgPSBpcGZzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFRva2Vucyh0b2tlbnMpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2tlbnMpO1xuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldFBvbGljeURhdGEoKTtcbiAgICAgIH0sIFtwcm9wc10pXG5cbiAgLy8gbm8gYXNzZXQgbGltaXQgb24gaG93IG1hbnkgYXNzZXRzIGdldHMgcmV0dXJuZWQgb24gb25lIHJlcXVlc3RcbiAgLy8ga29pb3MsIGJsb2NrZnJvc3QgaXMgbGltaXRlZCBieSAxMDAgcmVzdWx0cyBwZXIgcGFnZVxuICBhc3luYyBmdW5jdGlvbiBnZXRBc3NldHNPZlBvbGljeUZyb21Lb2lvcyhzdGFrZUFkZHJlc3MsIHBvbGljeSl7XG4gICAgbGV0IGFzc2V0cyA9IFtdO1xuICAgIHRyeXtcbiAgICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5rb2lvcy5yZXN0L2FwaS92MC9hY2NvdW50X2Fzc2V0cycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBcIl9zdGFrZV9hZGRyZXNzZXNcIjogW1xuICAgICAgICAgICAgc3Rha2VBZGRyZXNzXG4gICAgICAgICAgXVxuICAgICAgICB9KVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgICAgIGZvcihsZXQgaT0wO2k8cmVzWzBdLmFzc2V0X2xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgdG9rZW4gPSByZXNbMF0uYXNzZXRfbGlzdFtpXTtcblxuICAgICAgICBpZih0b2tlbi5wb2xpY3lfaWQgPT0gcG9saWN5KXtcbiAgICAgICAgICBhc3NldHMucHVzaCh0b2tlbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhc3NldHM7XG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICB9XG5cblxuICAgIC8vIGZldGNoIHRva2VuIG1ldGFkYXRhIGZyb20gYmxvY2tmcm9zdFxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRUb2tlbkRhdGEocG9saWN5KXtcbiAgICAgIHRyeXtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2NhcmRhbm8tbWFpbm5ldC5ibG9ja2Zyb3N0LmlvL2FwaS92MC9hc3NldHMvcG9saWN5LycrcG9saWN5Kyc/Y291bnQ9MTAwJyxcbiAgICAgICAge2hlYWRlcnM6e3Byb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnLCAnY2FjaGUtY29udHJvbCc6ICdtYXgtYWdlPTMxNTM2MDAwJ319KTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gICAgICAgIGlmKGRhdGEuc3RhdHVzICE9IDIwMCl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0UHJpY2VEYXRhKGRhdGEpe1xuICAgICAgc2V0UHJpY2VzKGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybig8ZGl2PlxuICAgICAgICA8UHJpY2VzIGRhdGEgPSB7c2V0UHJpY2VEYXRhfS8+XG4gICAgICAgIDxQb2xpY3kgcG9saWN5ID0ge3Byb3BzLnBvbGljeX0gcHJpY2VzPXtwcmljZXN9Lz5cbiAgICAgICAgXG4gICAgICAgIDxOZnRHcmlkIG5mdHMgPSB7dG9rZW5zfSBzdGFrZT17cHJvcHMuc3Rha2V9Lz5cbiAgICA8L2Rpdj4pXG59XG5leHBvcnQgZGVmYXVsdCBQb2xpY3lEYXRhO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTmZ0R3JpZCIsIlBvbGljeSIsIlByaWNlcyIsIlRva2VuIiwiUG9saWN5RGF0YSIsInByb3BzIiwicG9saWN5Iiwic2V0UG9saWN5IiwidG9rZW5zIiwic2V0VG9rZW5zIiwicHJpY2VzIiwic2V0UHJpY2VzIiwiZ2V0UG9saWN5RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJhc3NldHMiLCJnZXRBc3NldHNPZlBvbGljeUZyb21Lb2lvcyIsInN0YWtlIiwiaSIsImxlbmd0aCIsInRva2VuIiwiYXNzZXRfbmFtZSIsInBvbGljeV9pZCIsInF1YW50aXR5IiwibWV0YWRhdGEiLCJnZXRNZXRhZGF0YSIsImlwZnMiLCJnZXRJcGZzRnJvbU1ldGFkYXRhIiwicHVzaCIsInN0YWtlQWRkcmVzcyIsInJlcSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwianNvbiIsImFzc2V0X2xpc3QiLCJlcnJvciIsImxvYWRUb2tlbkRhdGEiLCJkYXRhIiwicHJvamVjdF9pZCIsInN0YXR1cyIsInNldFByaWNlRGF0YSIsImRpdiIsIm5mdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/policyData.js\n"));

/***/ })

});