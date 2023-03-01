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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection */ \"./src/pages/collection.js\");\n/* harmony import */ var _nftGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nftGrid */ \"./src/pages/nftGrid.js\");\n/* harmony import */ var _policy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./policy */ \"./src/pages/policy.js\");\n/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prices */ \"./src/pages/prices.js\");\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction PolicyData(props) {\n    _s();\n    const [policy, setPolicy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [tokens, setTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getPolicyData = async ()=>{\n            if (props.stake == null) {\n                console.log(\"stake was undefined\");\n            } else if (props.policy == null) {\n                console.log(\"policy undefined\");\n            } else {\n                console.log(props.stake + \"- \" + props.policy);\n                let stakeAddress = props.stake;\n                if (stakeAddress.startsWith(\"$\")) {\n                    let stake = await getAddressFromHandle(stakeAddress.slice(1));\n                    if (stake != null) {\n                        stakeAddress = stake;\n                        console.log(stakeAddress);\n                    } else {\n                        console.log(\"wallet error\");\n                    }\n                }\n                let tokens = [];\n                let assets = await getAssetsOfPolicyFromKoios(stakeAddress, props.policy);\n                for(let i = 0; i < assets.length; i++){\n                    let token = new _token__WEBPACK_IMPORTED_MODULE_6__[\"default\"](assets[i].asset_name, assets[i].policy_id, assets[i].quantity);\n                    token.metadata = await token.getMetadata();\n                    if (token.metadata != null) {\n                        let ipfs = token.getIpfsFromMetadata();\n                        token.ipfs = ipfs;\n                    }\n                    tokens.push(token);\n                }\n                setTokens(tokens);\n            }\n        };\n        getPolicyData();\n    }, [\n        props\n    ]);\n    // used when fetching handle address\n    async function getStakeFromAddressKoios(address) {\n        try {\n            const req = await fetch(\"https://api.koios.rest/api/v0/address_info\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    \"_addresses\": [\n                        address\n                    ]\n                })\n            });\n            const res = await req.json();\n            return res[0].stake_address;\n        } catch (error) {\n            return null;\n        }\n    }\n    // returns base address from handle\n    const getAddressFromHandle = async (handle)=>{\n        console.log(handle);\n        try {\n            let policyID = \"f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a\";\n            // A blank Handle name should always be ignored.\n            if (handle.length === 0) {\n                return null;\n            }\n            // Convert handleName to hex encoding.\n            let assetName = Buffer.from(handle).toString(\"hex\");\n            let data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\" + policyID + assetName + \"/addresses\", {\n                headers: {\n                    // Your Blockfrost API key\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\"\n                }\n            });\n            let res = await data.json();\n            console.log(res);\n            let stake = await getStakeFromAddressKoios(res[0].address);\n            return stake;\n        } catch (error) {\n            console.log(error);\n            return null;\n        }\n    };\n    // no asset limit on how many assets gets returned on one request\n    // koios, blockfrost is limited by 100 results per page\n    async function getAssetsOfPolicyFromKoios(stakeAddress, policy) {\n        console.log(stakeAddress);\n        if (stakeAddress.startsWith(\"$\")) {\n            stakeAddress = await getAddressFromHandle(props.stake);\n        }\n        console.log(stakeAddress);\n        let assets = [];\n        try {\n            const req = await fetch(\"https://api.koios.rest/api/v0/account_assets\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    \"_stake_addresses\": [\n                        stakeAddress\n                    ]\n                })\n            });\n            const res = await req.json();\n            for(let i = 0; i < res[0].asset_list.length; i++){\n                let token = res[0].asset_list[i];\n                if (token.policy_id == policy) {\n                    assets.push(token);\n                }\n            }\n            return assets;\n        } catch (error) {\n            return null;\n        }\n    }\n    function setPriceData(data) {\n        setPrices(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prices__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                data: setPriceData\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 162,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Policy Info\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 163,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_policy__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                policy: props.policy,\n                prices: prices\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 164,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Your Wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 165,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nftGrid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                nfts: tokens,\n                stake: props.stake\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 166,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_collection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                policy: props.policy,\n                stake: props.stake\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 167,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n        lineNumber: 161,\n        columnNumber: 12\n    }, this);\n}\n_s(PolicyData, \"uIGw6mgM49RNAgXiLVr2r4ER/t8=\");\n_c = PolicyData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PolicyData);\nvar _c;\n$RefreshReg$(_c, \"PolicyData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UjtnQkFDZCxDQUFDO1lBQ0g7WUFDQSxPQUFPSjtRQUNULEVBQUMsT0FBTXlCLE9BQU07WUFDWCxPQUFPLElBQUk7UUFDYjtJQUVGO0lBRUUsU0FBU1UsYUFBYUgsSUFBSSxFQUFDO1FBQ3pCekMsVUFBVXlDO0lBQ1o7SUFFQSxxQkFBTyw4REFBQ0k7OzBCQUNKLDhEQUFDdEQsK0NBQU1BO2dCQUFDa0QsTUFBUUc7Ozs7OzswQkFDaEIsOERBQUNFOzBCQUFNOzs7Ozs7MEJBQ1AsOERBQUN4RCwrQ0FBTUE7Z0JBQUNLLFFBQVVELE1BQU1DLE1BQU07Z0JBQUVJLFFBQVFBOzs7Ozs7MEJBQ3hDLDhEQUFDK0M7MEJBQU07Ozs7OzswQkFDUCw4REFBQ3pELGdEQUFPQTtnQkFBQzBELE1BQVFsRDtnQkFBUUssT0FBT1IsTUFBTVEsS0FBSzs7Ozs7OzBCQUMzQyw4REFBQ2QsbURBQVVBO2dCQUFDTyxRQUFVRCxNQUFNQyxNQUFNO2dCQUFFTyxPQUFPUixNQUFNUSxLQUFLOzs7Ozs7Ozs7Ozs7QUFFOUQ7R0FqS1NUO0tBQUFBO0FBa0tULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wb2xpY3lEYXRhLmpzP2YzNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbGxlY3Rpb24gZnJvbSBcIi4vY29sbGVjdGlvblwiO1xuaW1wb3J0IE5mdEdyaWQgZnJvbSBcIi4vbmZ0R3JpZFwiO1xuaW1wb3J0IFBvbGljeSBmcm9tIFwiLi9wb2xpY3lcIjtcbmltcG9ydCBQcmljZXMgZnJvbSBcIi4vcHJpY2VzXCI7XG5pbXBvcnQgVG9rZW4gZnJvbSBcIi4vdG9rZW5cIjtcblxuZnVuY3Rpb24gUG9saWN5RGF0YSAocHJvcHMpIHtcblxuICAgIGNvbnN0IFtwb2xpY3ksIHNldFBvbGljeV0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFt0b2tlbnMsIHNldFRva2Vuc10gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtwcmljZXMsIHNldFByaWNlc10gPSB1c2VTdGF0ZSgpO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRQb2xpY3lEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGlmKHByb3BzLnN0YWtlID09IG51bGwpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0YWtlIHdhcyB1bmRlZmluZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZihwcm9wcy5wb2xpY3kgPT0gbnVsbCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncG9saWN5IHVuZGVmaW5lZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvcHMuc3Rha2UgKyAnLSAnICtwcm9wcy5wb2xpY3kpO1xuICAgICAgICAgICAgbGV0IHN0YWtlQWRkcmVzcyA9IHByb3BzLnN0YWtlO1xuICAgICAgICAgICAgaWYoc3Rha2VBZGRyZXNzLnN0YXJ0c1dpdGgoJyQnKSl7XG4gICAgICAgICAgICAgIGxldCBzdGFrZSA9IGF3YWl0IGdldEFkZHJlc3NGcm9tSGFuZGxlKHN0YWtlQWRkcmVzcy5zbGljZSgxKSk7XG4gICAgICAgICAgICAgIGlmKHN0YWtlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIHN0YWtlQWRkcmVzcyA9IHN0YWtlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YWtlQWRkcmVzcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnd2FsbGV0IGVycm9yJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IHRva2VucyA9IFtdO1xuXG4gICAgICAgICAgICBsZXQgYXNzZXRzID0gYXdhaXQgZ2V0QXNzZXRzT2ZQb2xpY3lGcm9tS29pb3Moc3Rha2VBZGRyZXNzLCBwcm9wcy5wb2xpY3kpO1xuXG4gICAgICAgICAgICBmb3IobGV0IGkgPTA7aTxhc3NldHMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgIGxldCB0b2tlbiA9IG5ldyBUb2tlbihhc3NldHNbaV0uYXNzZXRfbmFtZSwgYXNzZXRzW2ldLnBvbGljeV9pZCwgYXNzZXRzW2ldLnF1YW50aXR5KTtcbiAgICAgICAgICAgICAgdG9rZW4ubWV0YWRhdGEgPSBhd2FpdCB0b2tlbi5nZXRNZXRhZGF0YSgpO1xuXG4gICAgICAgICAgICAgIGlmKHRva2VuLm1ldGFkYXRhICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGxldCBpcGZzID0gdG9rZW4uZ2V0SXBmc0Zyb21NZXRhZGF0YSgpO1xuICAgICAgICAgICAgICAgIHRva2VuLmlwZnMgPSBpcGZzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFRva2Vucyh0b2tlbnMpO1xuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldFBvbGljeURhdGEoKTtcbiAgICAgIH0sIFtwcm9wc10pXG5cbiAgICAgICAgLy8gdXNlZCB3aGVuIGZldGNoaW5nIGhhbmRsZSBhZGRyZXNzXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFN0YWtlRnJvbUFkZHJlc3NLb2lvcyhhZGRyZXNzKXtcbiAgICB0cnl7XG4gICAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkua29pb3MucmVzdC9hcGkvdjAvYWRkcmVzc19pbmZvJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIFwiX2FkZHJlc3Nlc1wiOiBbIGFkZHJlc3NcbiAgICAgICAgICBdXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCByZXEuanNvbigpO1xuICAgICAgcmV0dXJuIHJlc1swXS5zdGFrZV9hZGRyZXNzO1xuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIHJldHVybnMgYmFzZSBhZGRyZXNzIGZyb20gaGFuZGxlXG4gIGNvbnN0IGdldEFkZHJlc3NGcm9tSGFuZGxlID0gYXN5bmMgKGhhbmRsZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGhhbmRsZSk7XG4gICAgdHJ5e1xuICAgICAgbGV0IHBvbGljeUlEID0gJ2YwZmY0OGJiYjdiYmU5ZDU5YTQwZjFjZTkwZTllOWQwZmY1MDAyZWM0OGYyMzJiNDljYTBmYjlhJztcbiAgICBcbiAgICAgIC8vIEEgYmxhbmsgSGFuZGxlIG5hbWUgc2hvdWxkIGFsd2F5cyBiZSBpZ25vcmVkLlxuICAgICAgaWYgKGhhbmRsZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgXG4gICAgICAvLyBDb252ZXJ0IGhhbmRsZU5hbWUgdG8gaGV4IGVuY29kaW5nLlxuICAgICAgbGV0IGFzc2V0TmFtZSA9IEJ1ZmZlci5mcm9tKGhhbmRsZSkudG9TdHJpbmcoJ2hleCcpO1xuICAgIFxuICAgICAgbGV0IGRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vY2FyZGFuby1tYWlubmV0LmJsb2NrZnJvc3QuaW8vYXBpL3YwL2Fzc2V0cy9gK3BvbGljeUlEK2Fzc2V0TmFtZSsnL2FkZHJlc3NlcycsXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAvLyBZb3VyIEJsb2NrZnJvc3QgQVBJIGtleVxuICAgICAgICAgICAgcHJvamVjdF9pZDogJ21haW5uZXRvVzYxWVlTaU9vTFNhTlE2ZHpUcmtBRzRhelhWSXJ2aCd9XG4gICAgICAgIH0pO1xuXG4gICAgICBsZXQgcmVzID0gYXdhaXQgZGF0YS5qc29uKCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICBcbiAgICAgIGxldCBzdGFrZSA9IGF3YWl0IGdldFN0YWtlRnJvbUFkZHJlc3NLb2lvcyhyZXNbMF0uYWRkcmVzcyk7XG4gICAgICByZXR1cm4gc3Rha2U7XG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICB9XG5cbiAgLy8gbm8gYXNzZXQgbGltaXQgb24gaG93IG1hbnkgYXNzZXRzIGdldHMgcmV0dXJuZWQgb24gb25lIHJlcXVlc3RcbiAgLy8ga29pb3MsIGJsb2NrZnJvc3QgaXMgbGltaXRlZCBieSAxMDAgcmVzdWx0cyBwZXIgcGFnZVxuICBhc3luYyBmdW5jdGlvbiBnZXRBc3NldHNPZlBvbGljeUZyb21Lb2lvcyhzdGFrZUFkZHJlc3MsIHBvbGljeSl7XG5cbiAgICBjb25zb2xlLmxvZyhzdGFrZUFkZHJlc3MpO1xuXG4gICAgaWYoc3Rha2VBZGRyZXNzLnN0YXJ0c1dpdGgoJyQnKSl7XG4gICAgICBzdGFrZUFkZHJlc3MgPSBhd2FpdCBnZXRBZGRyZXNzRnJvbUhhbmRsZShwcm9wcy5zdGFrZSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coc3Rha2VBZGRyZXNzKTtcblxuICAgIGxldCBhc3NldHMgPSBbXTtcbiAgICB0cnl7XG4gICAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkua29pb3MucmVzdC9hcGkvdjAvYWNjb3VudF9hc3NldHMnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgXCJfc3Rha2VfYWRkcmVzc2VzXCI6IFtcbiAgICAgICAgICAgIHN0YWtlQWRkcmVzc1xuICAgICAgICAgIF1cbiAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCByZXEuanNvbigpO1xuXG4gICAgICBmb3IobGV0IGk9MDtpPHJlc1swXS5hc3NldF9saXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IHRva2VuID0gcmVzWzBdLmFzc2V0X2xpc3RbaV07XG5cbiAgICAgICAgaWYodG9rZW4ucG9saWN5X2lkID09IHBvbGljeSl7XG4gICAgICAgICAgYXNzZXRzLnB1c2godG9rZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYXNzZXRzO1xuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgfVxuXG4gICAgZnVuY3Rpb24gc2V0UHJpY2VEYXRhKGRhdGEpe1xuICAgICAgc2V0UHJpY2VzKGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybig8ZGl2PlxuICAgICAgICA8UHJpY2VzIGRhdGEgPSB7c2V0UHJpY2VEYXRhfS8+XG4gICAgICAgIDxsYWJlbD5Qb2xpY3kgSW5mbzwvbGFiZWw+XG4gICAgICAgIDxQb2xpY3kgcG9saWN5ID0ge3Byb3BzLnBvbGljeX0gcHJpY2VzPXtwcmljZXN9Lz5cbiAgICAgICAgPGxhYmVsPllvdXIgV2FsbGV0PC9sYWJlbD5cbiAgICAgICAgPE5mdEdyaWQgbmZ0cyA9IHt0b2tlbnN9IHN0YWtlPXtwcm9wcy5zdGFrZX0vPlxuICAgICAgICA8Q29sbGVjdGlvbiBwb2xpY3kgPSB7cHJvcHMucG9saWN5fSBzdGFrZT17cHJvcHMuc3Rha2V9Lz5cbiAgICA8L2Rpdj4pXG59XG5leHBvcnQgZGVmYXVsdCBQb2xpY3lEYXRhO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29sbGVjdGlvbiIsIk5mdEdyaWQiLCJQb2xpY3kiLCJQcmljZXMiLCJUb2tlbiIsIlBvbGljeURhdGEiLCJwcm9wcyIsInBvbGljeSIsInNldFBvbGljeSIsInRva2VucyIsInNldFRva2VucyIsInByaWNlcyIsInNldFByaWNlcyIsImdldFBvbGljeURhdGEiLCJzdGFrZSIsImNvbnNvbGUiLCJsb2ciLCJzdGFrZUFkZHJlc3MiLCJzdGFydHNXaXRoIiwiZ2V0QWRkcmVzc0Zyb21IYW5kbGUiLCJzbGljZSIsImFzc2V0cyIsImdldEFzc2V0c09mUG9saWN5RnJvbUtvaW9zIiwiaSIsImxlbmd0aCIsInRva2VuIiwiYXNzZXRfbmFtZSIsInBvbGljeV9pZCIsInF1YW50aXR5IiwibWV0YWRhdGEiLCJnZXRNZXRhZGF0YSIsImlwZnMiLCJnZXRJcGZzRnJvbU1ldGFkYXRhIiwicHVzaCIsImdldFN0YWtlRnJvbUFkZHJlc3NLb2lvcyIsImFkZHJlc3MiLCJyZXEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImpzb24iLCJzdGFrZV9hZGRyZXNzIiwiZXJyb3IiLCJoYW5kbGUiLCJwb2xpY3lJRCIsImFzc2V0TmFtZSIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsImRhdGEiLCJwcm9qZWN0X2lkIiwiYXNzZXRfbGlzdCIsInNldFByaWNlRGF0YSIsImRpdiIsImxhYmVsIiwibmZ0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/policyData.js\n"));

/***/ })

});