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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection */ \"./src/pages/collection.js\");\n/* harmony import */ var _nftGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nftGrid */ \"./src/pages/nftGrid.js\");\n/* harmony import */ var _policy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./policy */ \"./src/pages/policy.js\");\n/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prices */ \"./src/pages/prices.js\");\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction PolicyData(props) {\n    _s();\n    const [policy, setPolicy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [tokens, setTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getPolicyData = async ()=>{\n            if (props == null) {\n                console.log(\"policy was undefined\");\n            } else {\n                let tokens = [];\n                let assets = await getAssetsOfPolicyFromKoios(props.stake, props.policy);\n                for(let i = 0; i < assets.length; i++){\n                    let token = new _token__WEBPACK_IMPORTED_MODULE_6__[\"default\"](assets[i].asset_name, assets[i].policy_id, assets[i].quantity);\n                    token.metadata = await token.getMetadata();\n                    if (token.metadata != null) {\n                        let ipfs = token.getIpfsFromMetadata();\n                        token.ipfs = ipfs;\n                    }\n                    tokens.push(token);\n                }\n                setTokens(tokens);\n                console.log(tokens);\n            }\n        };\n        getPolicyData();\n    }, [\n        props\n    ]);\n    // no asset limit on how many assets gets returned on one request\n    // koios, blockfrost is limited by 100 results per page\n    async function getAssetsOfPolicyFromKoios(stakeAddress, policy) {\n        let assets = [];\n        console.log(stakeAddress, policy);\n        try {\n            const req = await fetch(\"https://api.koios.rest/api/v0/account_assets\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    \"_stake_addresses\": [\n                        stakeAddress\n                    ]\n                })\n            });\n            const res = await req.json();\n            for(let i = 0; i < res[0].asset_list.length; i++){\n                let token = res[0].asset_list[i];\n                if (token.policy_id == policy) {\n                    assets.push(token);\n                }\n            }\n            return assets;\n        } catch (error) {\n            return null;\n        }\n    }\n    function setPriceData(data) {\n        setPrices(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prices__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                data: setPriceData\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 83,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_policy__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                policy: props.policy,\n                prices: prices\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 84,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Your Wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 85,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nftGrid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                nfts: tokens,\n                stake: props.stake\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 86,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_collection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                policy: props.policy,\n                stake: props.stake\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n        lineNumber: 82,\n        columnNumber: 12\n    }, this);\n}\n_s(PolicyData, \"uIGw6mgM49RNAgXiLVr2r4ER/t8=\");\n_c = PolicyData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PolicyData);\nvar _c;\n$RefreshReg$(_c, \"PolicyData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WixNQUFNWSxLQUFLOzs7Ozs7Ozs7Ozs7QUFFOUQ7R0FqRlNiO0tBQUFBO0FBa0ZULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wb2xpY3lEYXRhLmpzP2YzNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbGxlY3Rpb24gZnJvbSBcIi4vY29sbGVjdGlvblwiO1xuaW1wb3J0IE5mdEdyaWQgZnJvbSBcIi4vbmZ0R3JpZFwiO1xuaW1wb3J0IFBvbGljeSBmcm9tIFwiLi9wb2xpY3lcIjtcbmltcG9ydCBQcmljZXMgZnJvbSBcIi4vcHJpY2VzXCI7XG5pbXBvcnQgVG9rZW4gZnJvbSBcIi4vdG9rZW5cIjtcblxuZnVuY3Rpb24gUG9saWN5RGF0YSAocHJvcHMpIHtcblxuICAgIGNvbnN0IFtwb2xpY3ksIHNldFBvbGljeV0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFt0b2tlbnMsIHNldFRva2Vuc10gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtwcmljZXMsIHNldFByaWNlc10gPSB1c2VTdGF0ZSgpO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRQb2xpY3lEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGlmKHByb3BzID09bnVsbCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncG9saWN5IHdhcyB1bmRlZmluZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGxldCB0b2tlbnMgPSBbXTtcblxuICAgICAgICAgICAgbGV0IGFzc2V0cyA9IGF3YWl0IGdldEFzc2V0c09mUG9saWN5RnJvbUtvaW9zKHByb3BzLnN0YWtlLCBwcm9wcy5wb2xpY3kpO1xuXG4gICAgICAgICAgICBmb3IobGV0IGkgPTA7aTxhc3NldHMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgIGxldCB0b2tlbiA9IG5ldyBUb2tlbihhc3NldHNbaV0uYXNzZXRfbmFtZSwgYXNzZXRzW2ldLnBvbGljeV9pZCwgYXNzZXRzW2ldLnF1YW50aXR5KTtcbiAgICAgICAgICAgICAgdG9rZW4ubWV0YWRhdGEgPSBhd2FpdCB0b2tlbi5nZXRNZXRhZGF0YSgpO1xuXG4gICAgICAgICAgICAgIGlmKHRva2VuLm1ldGFkYXRhICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGxldCBpcGZzID0gdG9rZW4uZ2V0SXBmc0Zyb21NZXRhZGF0YSgpO1xuICAgICAgICAgICAgICAgIHRva2VuLmlwZnMgPSBpcGZzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFRva2Vucyh0b2tlbnMpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2tlbnMpO1xuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldFBvbGljeURhdGEoKTtcbiAgICAgIH0sIFtwcm9wc10pXG5cbiAgLy8gbm8gYXNzZXQgbGltaXQgb24gaG93IG1hbnkgYXNzZXRzIGdldHMgcmV0dXJuZWQgb24gb25lIHJlcXVlc3RcbiAgLy8ga29pb3MsIGJsb2NrZnJvc3QgaXMgbGltaXRlZCBieSAxMDAgcmVzdWx0cyBwZXIgcGFnZVxuICBhc3luYyBmdW5jdGlvbiBnZXRBc3NldHNPZlBvbGljeUZyb21Lb2lvcyhzdGFrZUFkZHJlc3MsIHBvbGljeSl7XG4gICAgbGV0IGFzc2V0cyA9IFtdO1xuICAgIGNvbnNvbGUubG9nKHN0YWtlQWRkcmVzcywgcG9saWN5KTtcbiAgICB0cnl7XG4gICAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkua29pb3MucmVzdC9hcGkvdjAvYWNjb3VudF9hc3NldHMnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgXCJfc3Rha2VfYWRkcmVzc2VzXCI6IFtcbiAgICAgICAgICAgIHN0YWtlQWRkcmVzc1xuICAgICAgICAgIF1cbiAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCByZXEuanNvbigpO1xuXG4gICAgICBmb3IobGV0IGk9MDtpPHJlc1swXS5hc3NldF9saXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IHRva2VuID0gcmVzWzBdLmFzc2V0X2xpc3RbaV07XG5cbiAgICAgICAgaWYodG9rZW4ucG9saWN5X2lkID09IHBvbGljeSl7XG4gICAgICAgICAgYXNzZXRzLnB1c2godG9rZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYXNzZXRzO1xuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgfVxuXG4gICAgZnVuY3Rpb24gc2V0UHJpY2VEYXRhKGRhdGEpe1xuICAgICAgc2V0UHJpY2VzKGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybig8ZGl2PlxuICAgICAgICA8UHJpY2VzIGRhdGEgPSB7c2V0UHJpY2VEYXRhfS8+XG4gICAgICAgIDxQb2xpY3kgcG9saWN5ID0ge3Byb3BzLnBvbGljeX0gcHJpY2VzPXtwcmljZXN9Lz5cbiAgICAgICAgPGxhYmVsPllvdXIgV2FsbGV0PC9sYWJlbD5cbiAgICAgICAgPE5mdEdyaWQgbmZ0cyA9IHt0b2tlbnN9IHN0YWtlPXtwcm9wcy5zdGFrZX0vPlxuICAgICAgICA8Q29sbGVjdGlvbiBwb2xpY3kgPSB7cHJvcHMucG9saWN5fSBzdGFrZT17cHJvcHMuc3Rha2V9Lz5cbiAgICA8L2Rpdj4pXG59XG5leHBvcnQgZGVmYXVsdCBQb2xpY3lEYXRhO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29sbGVjdGlvbiIsIk5mdEdyaWQiLCJQb2xpY3kiLCJQcmljZXMiLCJUb2tlbiIsIlBvbGljeURhdGEiLCJwcm9wcyIsInBvbGljeSIsInNldFBvbGljeSIsInRva2VucyIsInNldFRva2VucyIsInByaWNlcyIsInNldFByaWNlcyIsImdldFBvbGljeURhdGEiLCJjb25zb2xlIiwibG9nIiwiYXNzZXRzIiwiZ2V0QXNzZXRzT2ZQb2xpY3lGcm9tS29pb3MiLCJzdGFrZSIsImkiLCJsZW5ndGgiLCJ0b2tlbiIsImFzc2V0X25hbWUiLCJwb2xpY3lfaWQiLCJxdWFudGl0eSIsIm1ldGFkYXRhIiwiZ2V0TWV0YWRhdGEiLCJpcGZzIiwiZ2V0SXBmc0Zyb21NZXRhZGF0YSIsInB1c2giLCJzdGFrZUFkZHJlc3MiLCJyZXEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImpzb24iLCJhc3NldF9saXN0IiwiZXJyb3IiLCJzZXRQcmljZURhdGEiLCJkYXRhIiwiZGl2IiwibGFiZWwiLCJuZnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/policyData.js\n"));

/***/ })

});