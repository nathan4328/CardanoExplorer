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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nftGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nftGrid */ \"./src/pages/nftGrid.js\");\n/* harmony import */ var _policy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./policy */ \"./src/pages/policy.js\");\n/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prices */ \"./src/pages/prices.js\");\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction PolicyData(props) {\n    _s();\n    const [policy, setPolicy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [tokens, setTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getPolicyData = async ()=>{\n            if (props.policy == null || props.stake != null) {\n                console.log(\"policy was undefined\");\n            } else {\n                let tokens = [];\n                let assets = await getAssetsFromKoios(props.stake);\n                console.log(assets);\n                // fetch asset data from blockfrost\n                let policyData = await loadTokenData(props.policy);\n                if (policyData != null) {\n                    for (const element of policyData){\n                        let data = element;\n                        let assetID = data.asset;\n                        let policy = assetID.substring(0, 56);\n                        let assetName = assetID.substring(56);\n                        let quantity = data.quantity;\n                        setPolicy(policy);\n                        if (policy != null && assetName != null) {\n                            let token = new _token__WEBPACK_IMPORTED_MODULE_5__[\"default\"](assetName, policy, quantity);\n                            let metadata = await token.getMetadata();\n                            token.metadata = metadata;\n                            if (metadata != null) {\n                                let ipfs = token.getIpfsFromMetadata();\n                                token.ipfs = ipfs;\n                            }\n                            tokens.push(token);\n                        }\n                    }\n                } else {\n                    setPolicy(\"couldnt fetch data\");\n                }\n                setTokens(tokens);\n            }\n        };\n        getPolicyData();\n    }, [\n        props\n    ]);\n    // no asset limit on how many assets gets returned on one request\n    // koios, blockfrost is limited by 100 results per page\n    async function getAssetsFromKoios(stakeAddress) {\n        try {\n            const req = await fetch(\"https://api.koios.rest/api/v0/account_assets\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    \"_stake_addresses\": [\n                        stakeAddress\n                    ]\n                })\n            });\n            const res = await req.json();\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    // fetch token metadata from blockfrost\n    async function loadTokenData(policy) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/policy/\" + policy + \"?count=20\", {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    function setPriceData(data) {\n        setPrices(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prices__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                data: setPriceData\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 107,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_policy__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                policy: policy,\n                prices: prices\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 108,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n        lineNumber: 106,\n        columnNumber: 12\n    }, this);\n}\n_s(PolicyData, \"uIGw6mgM49RNAgXiLVr2r4ER/t8=\");\n_c = PolicyData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PolicyData);\nvar _c;\n$RefreshReg$(_c, \"PolicyData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVVTtJQUNaO0lBRUEscUJBQU8sOERBQUMwQjs7MEJBQ0osOERBQUM3QywrQ0FBTUE7Z0JBQUNtQixNQUFReUI7Ozs7OzswQkFDaEIsOERBQUM3QywrQ0FBTUE7Z0JBQUNLLFFBQVVBO2dCQUFRSSxRQUFRQTs7Ozs7Ozs7Ozs7O0FBRTFDO0dBdkdTTjtLQUFBQTtBQXdHVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcG9saWN5RGF0YS5qcz9mMzZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOZnRHcmlkIGZyb20gXCIuL25mdEdyaWRcIjtcbmltcG9ydCBQb2xpY3kgZnJvbSBcIi4vcG9saWN5XCI7XG5pbXBvcnQgUHJpY2VzIGZyb20gXCIuL3ByaWNlc1wiO1xuaW1wb3J0IFRva2VuIGZyb20gXCIuL3Rva2VuXCI7XG5cbmZ1bmN0aW9uIFBvbGljeURhdGEgKHByb3BzKSB7XG5cbiAgICBjb25zdCBbcG9saWN5LCBzZXRQb2xpY3ldID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbdG9rZW5zLCBzZXRUb2tlbnNdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbcHJpY2VzLCBzZXRQcmljZXNdID0gdXNlU3RhdGUoKTtcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0UG9saWN5RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICBpZihwcm9wcy5wb2xpY3kgPT0gbnVsbCB8fCBwcm9wcy5zdGFrZSAhPSBudWxsKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwb2xpY3kgd2FzIHVuZGVmaW5lZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgbGV0IHRva2VucyA9IFtdO1xuICAgICAgICAgICAgbGV0IGFzc2V0cyA9IGF3YWl0IGdldEFzc2V0c0Zyb21Lb2lvcyhwcm9wcy5zdGFrZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhc3NldHMpO1xuXG4gICAgICAgICAgICAvLyBmZXRjaCBhc3NldCBkYXRhIGZyb20gYmxvY2tmcm9zdFxuICAgICAgICAgICAgbGV0IHBvbGljeURhdGEgPSBhd2FpdCBsb2FkVG9rZW5EYXRhKHByb3BzLnBvbGljeSk7XG5cbiAgICAgICAgICAgIGlmKHBvbGljeURhdGEgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgcG9saWN5RGF0YSl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFzc2V0SUQgPSBkYXRhLmFzc2V0O1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9saWN5ID0gKGFzc2V0SUQpLnN1YnN0cmluZygwLDU2KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFzc2V0TmFtZSA9IChhc3NldElEKS5zdWJzdHJpbmcoNTYpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcXVhbnRpdHkgPSBkYXRhLnF1YW50aXR5O1xuXG4gICAgICAgICAgICAgICAgICAgIHNldFBvbGljeShwb2xpY3kpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKHBvbGljeSAhPSBudWxsICYmIGFzc2V0TmFtZSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IG5ldyBUb2tlbihhc3NldE5hbWUsIHBvbGljeSwgcXVhbnRpdHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1ldGFkYXRhID0gYXdhaXQgdG9rZW4uZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuLm1ldGFkYXRhID0gbWV0YWRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1ldGFkYXRhICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpcGZzID0gdG9rZW4uZ2V0SXBmc0Zyb21NZXRhZGF0YSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuLmlwZnMgPSBpcGZzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBzZXRQb2xpY3koJ2NvdWxkbnQgZmV0Y2ggZGF0YScpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXRUb2tlbnModG9rZW5zKTtcblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnZXRQb2xpY3lEYXRhKCk7XG4gICAgICB9LCBbcHJvcHNdKVxuXG4gIC8vIG5vIGFzc2V0IGxpbWl0IG9uIGhvdyBtYW55IGFzc2V0cyBnZXRzIHJldHVybmVkIG9uIG9uZSByZXF1ZXN0XG4gIC8vIGtvaW9zLCBibG9ja2Zyb3N0IGlzIGxpbWl0ZWQgYnkgMTAwIHJlc3VsdHMgcGVyIHBhZ2VcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0QXNzZXRzRnJvbUtvaW9zKHN0YWtlQWRkcmVzcyl7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmtvaW9zLnJlc3QvYXBpL3YwL2FjY291bnRfYXNzZXRzJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIFwiX3N0YWtlX2FkZHJlc3Nlc1wiOiBbXG4gICAgICAgICAgICBzdGFrZUFkZHJlc3NcbiAgICAgICAgICBdXG4gICAgICAgIH0pXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICB9XG5cblxuICAgIC8vIGZldGNoIHRva2VuIG1ldGFkYXRhIGZyb20gYmxvY2tmcm9zdFxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRUb2tlbkRhdGEocG9saWN5KXtcbiAgICAgIHRyeXtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2NhcmRhbm8tbWFpbm5ldC5ibG9ja2Zyb3N0LmlvL2FwaS92MC9hc3NldHMvcG9saWN5LycrcG9saWN5Kyc/Y291bnQ9MjAnLFxuICAgICAgICB7aGVhZGVyczp7cHJvamVjdF9pZDogJ21haW5uZXRvVzYxWVlTaU9vTFNhTlE2ZHpUcmtBRzRhelhWSXJ2aCcsICdjYWNoZS1jb250cm9sJzogJ21heC1hZ2U9MzE1MzYwMDAnfX0pO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgICAgICAgaWYoZGF0YS5zdGF0dXMgIT0gMjAwKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQcmljZURhdGEoZGF0YSl7XG4gICAgICBzZXRQcmljZXMoZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuKDxkaXY+XG4gICAgICAgIDxQcmljZXMgZGF0YSA9IHtzZXRQcmljZURhdGF9Lz5cbiAgICAgICAgPFBvbGljeSBwb2xpY3kgPSB7cG9saWN5fSBwcmljZXM9e3ByaWNlc30vPlxuICAgIDwvZGl2Pilcbn1cbmV4cG9ydCBkZWZhdWx0IFBvbGljeURhdGE7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJOZnRHcmlkIiwiUG9saWN5IiwiUHJpY2VzIiwiVG9rZW4iLCJQb2xpY3lEYXRhIiwicHJvcHMiLCJwb2xpY3kiLCJzZXRQb2xpY3kiLCJ0b2tlbnMiLCJzZXRUb2tlbnMiLCJwcmljZXMiLCJzZXRQcmljZXMiLCJnZXRQb2xpY3lEYXRhIiwic3Rha2UiLCJjb25zb2xlIiwibG9nIiwiYXNzZXRzIiwiZ2V0QXNzZXRzRnJvbUtvaW9zIiwicG9saWN5RGF0YSIsImxvYWRUb2tlbkRhdGEiLCJlbGVtZW50IiwiZGF0YSIsImFzc2V0SUQiLCJhc3NldCIsInN1YnN0cmluZyIsImFzc2V0TmFtZSIsInF1YW50aXR5IiwidG9rZW4iLCJtZXRhZGF0YSIsImdldE1ldGFkYXRhIiwiaXBmcyIsImdldElwZnNGcm9tTWV0YWRhdGEiLCJwdXNoIiwic3Rha2VBZGRyZXNzIiwicmVxIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJqc29uIiwiZXJyb3IiLCJwcm9qZWN0X2lkIiwic3RhdHVzIiwic2V0UHJpY2VEYXRhIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/policyData.js\n"));

/***/ })

});