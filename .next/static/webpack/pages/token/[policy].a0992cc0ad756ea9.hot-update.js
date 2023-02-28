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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection */ \"./src/pages/collection.js\");\n/* harmony import */ var _nftGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nftGrid */ \"./src/pages/nftGrid.js\");\n/* harmony import */ var _policy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./policy */ \"./src/pages/policy.js\");\n/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prices */ \"./src/pages/prices.js\");\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction PolicyData(props) {\n    _s();\n    const [policy, setPolicy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [tokens, setTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getPolicyData = async ()=>{\n            if (props.stake == null) {\n                console.log(\"stake was undefined\");\n            } else if (props.policy == null) {\n                console.log(\"policy undefined\");\n            } else {\n                console.log(props.stake + \"- \" + props.policy);\n                let tokens = [];\n                let assets = await getAssetsOfPolicyFromKoios(props.stake, props.policy);\n                for(let i = 0; i < assets.length; i++){\n                    let token = new _token__WEBPACK_IMPORTED_MODULE_6__[\"default\"](assets[i].asset_name, assets[i].policy_id, assets[i].quantity);\n                    token.metadata = await token.getMetadata();\n                    if (token.metadata != null) {\n                        let ipfs = token.getIpfsFromMetadata();\n                        token.ipfs = ipfs;\n                    }\n                    tokens.push(token);\n                }\n                setTokens(tokens);\n            }\n        };\n        getPolicyData();\n    }, [\n        props\n    ]);\n    // used when fetching handle address\n    async function getStakeFromAddressKoios(address) {\n        try {\n            const req = await fetch(\"https://api.koios.rest/api/v0/address_info\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    \"_addresses\": [\n                        address\n                    ]\n                })\n            });\n            const res = await req.json();\n            return res[0].stake_address;\n        } catch (error) {\n            return null;\n        }\n    }\n    // returns base address from handle\n    const getAddressFromHandle = async (handle)=>{\n        try {\n            let policyID = \"f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a\";\n            // A blank Handle name should always be ignored.\n            if (handle.length === 0) {\n            // Handle error.\n            }\n            // Convert handleName to hex encoding.\n            let assetName = Buffer.from(handle).toString(\"hex\");\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\".concat(policyID).concat(assetName, \"/addresses\"), {\n                headers: {\n                    // Your Blockfrost API key\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"Content-Type\": \"application/json\"\n                }\n            }).then((res)=>res.json());\n            console.log(data);\n            let stake = await getStakeFromAddressKoios(data[0].address);\n            return stake;\n        } catch (error) {\n            console.log(error);\n            return null;\n        }\n    };\n    // no asset limit on how many assets gets returned on one request\n    // koios, blockfrost is limited by 100 results per page\n    async function getAssetsOfPolicyFromKoios(stakeAddress, policy) {\n        console.log(stakeAddress);\n        if (stakeAddress.startsWith(\"$\")) {\n            stakeAddress = await getAddressFromHandle(props.stake);\n        }\n        console.log(stakeAddress);\n        let assets = [];\n        try {\n            const req = await fetch(\"https://api.koios.rest/api/v0/account_assets\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    \"_stake_addresses\": [\n                        stakeAddress\n                    ]\n                })\n            });\n            const res = await req.json();\n            for(let i = 0; i < res[0].asset_list.length; i++){\n                let token = res[0].asset_list[i];\n                if (token.policy_id == policy) {\n                    assets.push(token);\n                }\n            }\n            return assets;\n        } catch (error) {\n            return null;\n        }\n    }\n    function setPriceData(data) {\n        setPrices(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prices__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                data: setPriceData\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 150,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Policy Info\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 151,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_policy__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                policy: props.policy,\n                prices: prices\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 152,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Your Wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 153,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nftGrid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                nfts: tokens,\n                stake: props.stake\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 154,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_collection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                policy: props.policy,\n                stake: props.stake\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 155,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n        lineNumber: 149,\n        columnNumber: 12\n    }, this);\n}\n_s(PolicyData, \"uIGw6mgM49RNAgXiLVr2r4ER/t8=\");\n_c = PolicyData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PolicyData);\nvar _c;\n$RefreshReg$(_c, \"PolicyData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDeEQsK0NBQU1BO2dCQUFDSyxRQUFVRCxNQUFNQyxNQUFNO2dCQUFFSSxRQUFRQTs7Ozs7OzBCQUN4Qyw4REFBQytDOzBCQUFNOzs7Ozs7MEJBQ1AsOERBQUN6RCxnREFBT0E7Z0JBQUMwRCxNQUFRbEQ7Z0JBQVFLLE9BQU9SLE1BQU1RLEtBQUs7Ozs7OzswQkFDM0MsOERBQUNkLG1EQUFVQTtnQkFBQ08sUUFBVUQsTUFBTUMsTUFBTTtnQkFBRU8sT0FBT1IsTUFBTVEsS0FBSzs7Ozs7Ozs7Ozs7O0FBRTlEO0dBckpTVDtLQUFBQTtBQXNKVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcG9saWN5RGF0YS5qcz9mMzZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb2xsZWN0aW9uIGZyb20gXCIuL2NvbGxlY3Rpb25cIjtcbmltcG9ydCBOZnRHcmlkIGZyb20gXCIuL25mdEdyaWRcIjtcbmltcG9ydCBQb2xpY3kgZnJvbSBcIi4vcG9saWN5XCI7XG5pbXBvcnQgUHJpY2VzIGZyb20gXCIuL3ByaWNlc1wiO1xuaW1wb3J0IFRva2VuIGZyb20gXCIuL3Rva2VuXCI7XG5cbmZ1bmN0aW9uIFBvbGljeURhdGEgKHByb3BzKSB7XG5cbiAgICBjb25zdCBbcG9saWN5LCBzZXRQb2xpY3ldID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbdG9rZW5zLCBzZXRUb2tlbnNdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbcHJpY2VzLCBzZXRQcmljZXNdID0gdXNlU3RhdGUoKTtcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0UG9saWN5RGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICBpZihwcm9wcy5zdGFrZSA9PSBudWxsKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGFrZSB3YXMgdW5kZWZpbmVkJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYocHJvcHMucG9saWN5ID09IG51bGwpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3BvbGljeSB1bmRlZmluZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb3BzLnN0YWtlICsgJy0gJyArcHJvcHMucG9saWN5KTtcbiAgICAgICAgICAgIGxldCB0b2tlbnMgPSBbXTtcblxuICAgICAgICAgICAgbGV0IGFzc2V0cyA9IGF3YWl0IGdldEFzc2V0c09mUG9saWN5RnJvbUtvaW9zKHByb3BzLnN0YWtlLCBwcm9wcy5wb2xpY3kpO1xuXG4gICAgICAgICAgICBmb3IobGV0IGkgPTA7aTxhc3NldHMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgIGxldCB0b2tlbiA9IG5ldyBUb2tlbihhc3NldHNbaV0uYXNzZXRfbmFtZSwgYXNzZXRzW2ldLnBvbGljeV9pZCwgYXNzZXRzW2ldLnF1YW50aXR5KTtcbiAgICAgICAgICAgICAgdG9rZW4ubWV0YWRhdGEgPSBhd2FpdCB0b2tlbi5nZXRNZXRhZGF0YSgpO1xuXG4gICAgICAgICAgICAgIGlmKHRva2VuLm1ldGFkYXRhICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGxldCBpcGZzID0gdG9rZW4uZ2V0SXBmc0Zyb21NZXRhZGF0YSgpO1xuICAgICAgICAgICAgICAgIHRva2VuLmlwZnMgPSBpcGZzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFRva2Vucyh0b2tlbnMpO1xuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldFBvbGljeURhdGEoKTtcbiAgICAgIH0sIFtwcm9wc10pXG5cbiAgICAgICAgLy8gdXNlZCB3aGVuIGZldGNoaW5nIGhhbmRsZSBhZGRyZXNzXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFN0YWtlRnJvbUFkZHJlc3NLb2lvcyhhZGRyZXNzKXtcbiAgICB0cnl7XG4gICAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkua29pb3MucmVzdC9hcGkvdjAvYWRkcmVzc19pbmZvJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIFwiX2FkZHJlc3Nlc1wiOiBbIGFkZHJlc3NcbiAgICAgICAgICBdXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCByZXEuanNvbigpO1xuICAgICAgcmV0dXJuIHJlc1swXS5zdGFrZV9hZGRyZXNzO1xuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIHJldHVybnMgYmFzZSBhZGRyZXNzIGZyb20gaGFuZGxlXG4gIGNvbnN0IGdldEFkZHJlc3NGcm9tSGFuZGxlID0gYXN5bmMgKGhhbmRsZSkgPT4ge1xuICAgIHRyeXtcbiAgICAgIGxldCBwb2xpY3lJRCA9ICdmMGZmNDhiYmI3YmJlOWQ1OWE0MGYxY2U5MGU5ZTlkMGZmNTAwMmVjNDhmMjMyYjQ5Y2EwZmI5YSc7XG4gICAgXG4gICAgICAvLyBBIGJsYW5rIEhhbmRsZSBuYW1lIHNob3VsZCBhbHdheXMgYmUgaWdub3JlZC5cbiAgICAgIGlmIChoYW5kbGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIEhhbmRsZSBlcnJvci5cbiAgICAgIH1cbiAgICBcbiAgICAgIC8vIENvbnZlcnQgaGFuZGxlTmFtZSB0byBoZXggZW5jb2RpbmcuXG4gICAgICBsZXQgYXNzZXROYW1lID0gQnVmZmVyLmZyb20oaGFuZGxlKS50b1N0cmluZygnaGV4Jyk7XG4gICAgXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2NhcmRhbm8tbWFpbm5ldC5ibG9ja2Zyb3N0LmlvL2FwaS92MC9hc3NldHMvJHtwb2xpY3lJRH0ke2Fzc2V0TmFtZX0vYWRkcmVzc2VzYCxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIC8vIFlvdXIgQmxvY2tmcm9zdCBBUEkga2V5XG4gICAgICAgICAgICBwcm9qZWN0X2lkOiAnbWFpbm5ldG9XNjFZWVNpT29MU2FOUTZkelRya0FHNGF6WFZJcnZoJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgXG4gICAgICBsZXQgc3Rha2UgPSBhd2FpdCBnZXRTdGFrZUZyb21BZGRyZXNzS29pb3MoZGF0YVswXS5hZGRyZXNzKTtcbiAgICAgIHJldHVybiBzdGFrZTtcbiAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gIH1cblxuICAvLyBubyBhc3NldCBsaW1pdCBvbiBob3cgbWFueSBhc3NldHMgZ2V0cyByZXR1cm5lZCBvbiBvbmUgcmVxdWVzdFxuICAvLyBrb2lvcywgYmxvY2tmcm9zdCBpcyBsaW1pdGVkIGJ5IDEwMCByZXN1bHRzIHBlciBwYWdlXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEFzc2V0c09mUG9saWN5RnJvbUtvaW9zKHN0YWtlQWRkcmVzcywgcG9saWN5KXtcblxuICAgIGNvbnNvbGUubG9nKHN0YWtlQWRkcmVzcyk7XG5cbiAgICBpZihzdGFrZUFkZHJlc3Muc3RhcnRzV2l0aCgnJCcpKXtcbiAgICAgIHN0YWtlQWRkcmVzcyA9IGF3YWl0IGdldEFkZHJlc3NGcm9tSGFuZGxlKHByb3BzLnN0YWtlKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhzdGFrZUFkZHJlc3MpO1xuXG4gICAgbGV0IGFzc2V0cyA9IFtdO1xuICAgIHRyeXtcbiAgICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5rb2lvcy5yZXN0L2FwaS92MC9hY2NvdW50X2Fzc2V0cycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBcIl9zdGFrZV9hZGRyZXNzZXNcIjogW1xuICAgICAgICAgICAgc3Rha2VBZGRyZXNzXG4gICAgICAgICAgXVxuICAgICAgICB9KVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgICAgIGZvcihsZXQgaT0wO2k8cmVzWzBdLmFzc2V0X2xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgdG9rZW4gPSByZXNbMF0uYXNzZXRfbGlzdFtpXTtcblxuICAgICAgICBpZih0b2tlbi5wb2xpY3lfaWQgPT0gcG9saWN5KXtcbiAgICAgICAgICBhc3NldHMucHVzaCh0b2tlbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhc3NldHM7XG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQcmljZURhdGEoZGF0YSl7XG4gICAgICBzZXRQcmljZXMoZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuKDxkaXY+XG4gICAgICAgIDxQcmljZXMgZGF0YSA9IHtzZXRQcmljZURhdGF9Lz5cbiAgICAgICAgPGxhYmVsPlBvbGljeSBJbmZvPC9sYWJlbD5cbiAgICAgICAgPFBvbGljeSBwb2xpY3kgPSB7cHJvcHMucG9saWN5fSBwcmljZXM9e3ByaWNlc30vPlxuICAgICAgICA8bGFiZWw+WW91ciBXYWxsZXQ8L2xhYmVsPlxuICAgICAgICA8TmZ0R3JpZCBuZnRzID0ge3Rva2Vuc30gc3Rha2U9e3Byb3BzLnN0YWtlfS8+XG4gICAgICAgIDxDb2xsZWN0aW9uIHBvbGljeSA9IHtwcm9wcy5wb2xpY3l9IHN0YWtlPXtwcm9wcy5zdGFrZX0vPlxuICAgIDwvZGl2Pilcbn1cbmV4cG9ydCBkZWZhdWx0IFBvbGljeURhdGE7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb2xsZWN0aW9uIiwiTmZ0R3JpZCIsIlBvbGljeSIsIlByaWNlcyIsIlRva2VuIiwiUG9saWN5RGF0YSIsInByb3BzIiwicG9saWN5Iiwic2V0UG9saWN5IiwidG9rZW5zIiwic2V0VG9rZW5zIiwicHJpY2VzIiwic2V0UHJpY2VzIiwiZ2V0UG9saWN5RGF0YSIsInN0YWtlIiwiY29uc29sZSIsImxvZyIsImFzc2V0cyIsImdldEFzc2V0c09mUG9saWN5RnJvbUtvaW9zIiwiaSIsImxlbmd0aCIsInRva2VuIiwiYXNzZXRfbmFtZSIsInBvbGljeV9pZCIsInF1YW50aXR5IiwibWV0YWRhdGEiLCJnZXRNZXRhZGF0YSIsImlwZnMiLCJnZXRJcGZzRnJvbU1ldGFkYXRhIiwicHVzaCIsImdldFN0YWtlRnJvbUFkZHJlc3NLb2lvcyIsImFkZHJlc3MiLCJyZXEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImpzb24iLCJzdGFrZV9hZGRyZXNzIiwiZXJyb3IiLCJnZXRBZGRyZXNzRnJvbUhhbmRsZSIsImhhbmRsZSIsInBvbGljeUlEIiwiYXNzZXROYW1lIiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwiZGF0YSIsInByb2plY3RfaWQiLCJ0aGVuIiwic3Rha2VBZGRyZXNzIiwic3RhcnRzV2l0aCIsImFzc2V0X2xpc3QiLCJzZXRQcmljZURhdGEiLCJkaXYiLCJsYWJlbCIsIm5mdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/policyData.js\n"));

/***/ })

});