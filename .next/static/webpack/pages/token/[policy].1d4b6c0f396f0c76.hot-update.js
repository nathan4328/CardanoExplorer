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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection */ \"./src/pages/collection.js\");\n/* harmony import */ var _nftGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nftGrid */ \"./src/pages/nftGrid.js\");\n/* harmony import */ var _policy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./policy */ \"./src/pages/policy.js\");\n/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prices */ \"./src/pages/prices.js\");\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction PolicyData(props) {\n    _s();\n    const [policy, setPolicy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [tokens, setTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getPolicyData = async ()=>{\n            if (props == null) {\n                console.log(\"policy was undefined\");\n            } else {\n                let tokens = [];\n                let assets = await getAssetsOfPolicyFromKoios(props.stake, props.policy);\n                for(let i = 0; i < assets.length; i++){\n                    let token = new _token__WEBPACK_IMPORTED_MODULE_6__[\"default\"](assets[i].asset_name, assets[i].policy_id, assets[i].quantity);\n                    token.metadata = await token.getMetadata();\n                    if (token.metadata != null) {\n                        let ipfs = token.getIpfsFromMetadata();\n                        token.ipfs = ipfs;\n                    }\n                    tokens.push(token);\n                }\n                setTokens(tokens);\n                console.log(tokens);\n            }\n        };\n        getPolicyData();\n    }, [\n        props\n    ]);\n    // no asset limit on how many assets gets returned on one request\n    // koios, blockfrost is limited by 100 results per page\n    async function getAssetsOfPolicyFromKoios(stakeAddress, policy) {\n        let assets = [];\n        console.log(stakeAddress, policy);\n        try {\n            const req = await fetch(\"https://api.koios.rest/api/v0/account_assets\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    \"_stake_addresses\": [\n                        stakeAddress\n                    ]\n                })\n            });\n            const res = await req.json();\n            for(let i = 0; i < res[0].asset_list.length; i++){\n                let token = res[0].asset_list[i];\n                if (token.policy_id == policy) {\n                    assets.push(token);\n                }\n            }\n            return assets;\n        } catch (error) {\n            return null;\n        }\n    }\n    function setPriceData(data) {\n        setPrices(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prices__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                data: setPriceData\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 83,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_policy__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                policy: props.policy,\n                prices: prices\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 84,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nftGrid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                nfts: tokens,\n                stake: props.stake\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 85,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_collection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                policy: props.policy\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 86,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n        lineNumber: 82,\n        columnNumber: 12\n    }, this);\n}\n_s(PolicyData, \"uIGw6mgM49RNAgXiLVr2r4ER/t8=\");\n_c = PolicyData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PolicyData);\nvar _c;\n$RefreshReg$(_c, \"PolicyData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcG9saWN5RGF0YS5qcz9mMzZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb2xsZWN0aW9uIGZyb20gXCIuL2NvbGxlY3Rpb25cIjtcbmltcG9ydCBOZnRHcmlkIGZyb20gXCIuL25mdEdyaWRcIjtcbmltcG9ydCBQb2xpY3kgZnJvbSBcIi4vcG9saWN5XCI7XG5pbXBvcnQgUHJpY2VzIGZyb20gXCIuL3ByaWNlc1wiO1xuaW1wb3J0IFRva2VuIGZyb20gXCIuL3Rva2VuXCI7XG5cbmZ1bmN0aW9uIFBvbGljeURhdGEgKHByb3BzKSB7XG5cbiAgICBjb25zdCBbcG9saWN5LCBzZXRQb2xpY3ldID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbdG9rZW5zLCBzZXRUb2tlbnNdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbcHJpY2VzLCBzZXRQcmljZXNdID0gdXNlU3RhdGUoKTtcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0UG9saWN5RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICBpZihwcm9wcyA9PW51bGwpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3BvbGljeSB3YXMgdW5kZWZpbmVkJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICBsZXQgdG9rZW5zID0gW107XG5cbiAgICAgICAgICAgIGxldCBhc3NldHMgPSBhd2FpdCBnZXRBc3NldHNPZlBvbGljeUZyb21Lb2lvcyhwcm9wcy5zdGFrZSwgcHJvcHMucG9saWN5KTtcblxuICAgICAgICAgICAgZm9yKGxldCBpID0wO2k8YXNzZXRzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBuZXcgVG9rZW4oYXNzZXRzW2ldLmFzc2V0X25hbWUsIGFzc2V0c1tpXS5wb2xpY3lfaWQsIGFzc2V0c1tpXS5xdWFudGl0eSk7XG4gICAgICAgICAgICAgIHRva2VuLm1ldGFkYXRhID0gYXdhaXQgdG9rZW4uZ2V0TWV0YWRhdGEoKTtcblxuICAgICAgICAgICAgICBpZih0b2tlbi5tZXRhZGF0YSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICBsZXQgaXBmcyA9IHRva2VuLmdldElwZnNGcm9tTWV0YWRhdGEoKTtcbiAgICAgICAgICAgICAgICB0b2tlbi5pcGZzID0gaXBmcztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRUb2tlbnModG9rZW5zKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2codG9rZW5zKTtcblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnZXRQb2xpY3lEYXRhKCk7XG4gICAgICB9LCBbcHJvcHNdKVxuXG4gIC8vIG5vIGFzc2V0IGxpbWl0IG9uIGhvdyBtYW55IGFzc2V0cyBnZXRzIHJldHVybmVkIG9uIG9uZSByZXF1ZXN0XG4gIC8vIGtvaW9zLCBibG9ja2Zyb3N0IGlzIGxpbWl0ZWQgYnkgMTAwIHJlc3VsdHMgcGVyIHBhZ2VcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0QXNzZXRzT2ZQb2xpY3lGcm9tS29pb3Moc3Rha2VBZGRyZXNzLCBwb2xpY3kpe1xuICAgIGxldCBhc3NldHMgPSBbXTtcbiAgICBjb25zb2xlLmxvZyhzdGFrZUFkZHJlc3MsIHBvbGljeSk7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmtvaW9zLnJlc3QvYXBpL3YwL2FjY291bnRfYXNzZXRzJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIFwiX3N0YWtlX2FkZHJlc3Nlc1wiOiBbXG4gICAgICAgICAgICBzdGFrZUFkZHJlc3NcbiAgICAgICAgICBdXG4gICAgICAgIH0pXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcblxuICAgICAgZm9yKGxldCBpPTA7aTxyZXNbMF0uYXNzZXRfbGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCB0b2tlbiA9IHJlc1swXS5hc3NldF9saXN0W2ldO1xuXG4gICAgICAgIGlmKHRva2VuLnBvbGljeV9pZCA9PSBwb2xpY3kpe1xuICAgICAgICAgIGFzc2V0cy5wdXNoKHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFzc2V0cztcbiAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gIH1cblxuICAgIGZ1bmN0aW9uIHNldFByaWNlRGF0YShkYXRhKXtcbiAgICAgIHNldFByaWNlcyhkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4oPGRpdj5cbiAgICAgICAgPFByaWNlcyBkYXRhID0ge3NldFByaWNlRGF0YX0vPlxuICAgICAgICA8UG9saWN5IHBvbGljeSA9IHtwcm9wcy5wb2xpY3l9IHByaWNlcz17cHJpY2VzfS8+XG4gICAgICAgIDxOZnRHcmlkIG5mdHMgPSB7dG9rZW5zfSBzdGFrZT17cHJvcHMuc3Rha2V9Lz5cbiAgICAgICAgPENvbGxlY3Rpb24gcG9saWN5ID0ge3Byb3BzLnBvbGljeX0vPlxuICAgIDwvZGl2Pilcbn1cbmV4cG9ydCBkZWZhdWx0IFBvbGljeURhdGE7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb2xsZWN0aW9uIiwiTmZ0R3JpZCIsIlBvbGljeSIsIlByaWNlcyIsIlRva2VuIiwiUG9saWN5RGF0YSIsInByb3BzIiwicG9saWN5Iiwic2V0UG9saWN5IiwidG9rZW5zIiwic2V0VG9rZW5zIiwicHJpY2VzIiwic2V0UHJpY2VzIiwiZ2V0UG9saWN5RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJhc3NldHMiLCJnZXRBc3NldHNPZlBvbGljeUZyb21Lb2lvcyIsInN0YWtlIiwiaSIsImxlbmd0aCIsInRva2VuIiwiYXNzZXRfbmFtZSIsInBvbGljeV9pZCIsInF1YW50aXR5IiwibWV0YWRhdGEiLCJnZXRNZXRhZGF0YSIsImlwZnMiLCJnZXRJcGZzRnJvbU1ldGFkYXRhIiwicHVzaCIsInN0YWtlQWRkcmVzcyIsInJlcSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwianNvbiIsImFzc2V0X2xpc3QiLCJlcnJvciIsInNldFByaWNlRGF0YSIsImRhdGEiLCJkaXYiLCJuZnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/policyData.js\n"));

/***/ })

});