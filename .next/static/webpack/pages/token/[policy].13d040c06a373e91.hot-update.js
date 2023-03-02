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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection */ \"./src/pages/collection.js\");\n/* harmony import */ var _nftGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nftGrid */ \"./src/pages/nftGrid.js\");\n/* harmony import */ var _policy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./policy */ \"./src/pages/policy.js\");\n/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prices */ \"./src/pages/prices.js\");\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction PolicyData(props) {\n    _s();\n    const [policy, setPolicy] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [tokens, setTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getPolicyData = async ()=>{\n            if (props.stake == null) {\n                console.log(\"stake was undefined\");\n            } else if (props.policy == null) {\n                console.log(\"policy undefined\");\n            } else {\n                console.log(props.stake + \"- \" + props.policy);\n                let stakeAddress = props.stake;\n                if (stakeAddress.startsWith(\"$\")) {\n                    stakeAddress = await getAddressFromHandle(stakeAddress.slice(1));\n                }\n                if (stakeAddress != null) {\n                    stakeAddress = stake;\n                    console.log(stakeAddress);\n                    let tokens = [];\n                    let assets = await getAssetsOfPolicyFromKoios(stakeAddress, props.policy);\n                    for (const element of assets){\n                        let token = new _token__WEBPACK_IMPORTED_MODULE_6__[\"default\"](element.asset_name, element.policy_id, element.quantity);\n                        token.metadata = await token.getMetadata();\n                        if (token.metadata != null) {\n                            let ipfs = token.getIpfsFromMetadata();\n                            token.ipfs = ipfs;\n                        }\n                        tokens.push(token);\n                    }\n                    setTokens(tokens);\n                } else {\n                    console.log(\"wallet error\");\n                }\n            }\n        };\n        getPolicyData();\n    }, [\n        props\n    ]);\n    // used when fetching handle address\n    async function getStakeFromAddressKoios(address) {\n        try {\n            const req = await fetch(\"https://api.koios.rest/api/v0/address_info\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    \"_addresses\": [\n                        address\n                    ]\n                })\n            });\n            const res = await req.json();\n            return res[0].stake_address;\n        } catch (error) {\n            return null;\n        }\n    }\n    // returns base address from handle\n    const getAddressFromHandle = async (handle)=>{\n        console.log(handle);\n        try {\n            let policyID = \"f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a\";\n            // A blank Handle name should always be ignored.\n            if (handle.length === 0) {\n                return null;\n            }\n            // Convert handleName to hex encoding.\n            let assetName = Buffer.from(handle).toString(\"hex\");\n            let data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\" + policyID + assetName + \"/addresses\", {\n                headers: {\n                    // Your Blockfrost API key\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\"\n                }\n            });\n            let res = await data.json();\n            console.log(res);\n            let stake1 = await getStakeFromAddressKoios(res[0].address);\n            return stake1;\n        } catch (error) {\n            console.log(error);\n            return null;\n        }\n    };\n    // no asset limit on how many assets gets returned on one request\n    // koios, blockfrost is limited by 100 results per page\n    async function getAssetsOfPolicyFromKoios(stakeAddress, policy) {\n        let assets = [];\n        try {\n            const req = await fetch(\"https://api.koios.rest/api/v0/account_assets\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    \"_stake_addresses\": [\n                        stakeAddress\n                    ]\n                })\n            });\n            const res = await req.json();\n            for(let i = 0; i < res[0].asset_list.length; i++){\n                let token = res[0].asset_list[i];\n                if (token.policy_id == policy) {\n                    assets.push(token);\n                }\n            }\n            return assets;\n        } catch (error) {\n            return null;\n        }\n    }\n    function setPriceData(data) {\n        setPrices(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prices__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                data: setPriceData\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 157,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Policy Info\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 158,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_policy__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                policy: props.policy,\n                prices: prices,\n                stake: props.stake\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 159,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: \"Your Wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 160,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nftGrid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                nfts: tokens,\n                policy: props.policy,\n                stake: props.stake\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 161,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_collection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                policy: props.policy,\n                stake: props.stake\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n                lineNumber: 162,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policyData.js\",\n        lineNumber: 156,\n        columnNumber: 12\n    }, this);\n}\n_s(PolicyData, \"uIGw6mgM49RNAgXiLVr2r4ER/t8=\");\n_c = PolicyData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PolicyData);\nvar _c;\n$RefreshReg$(_c, \"PolicyData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9saWN5RGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ047QUFDTjtBQUNGO0FBQ0E7QUFDRjtBQUU1QixTQUFTTyxXQUFZQyxLQUFLLEVBQUU7O0lBRXhCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUE7SUFDcEMsTUFBTSxDQUFDVSxRQUFRQyxVQUFVLEdBQUdYLCtDQUFRQTtJQUNwQyxNQUFNLENBQUNZLFFBQVFDLFVBQVUsR0FBR2IsK0NBQVFBO0lBR3BDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osTUFBTWUsZ0JBQWdCLFVBQVk7WUFDaEMsSUFBR1AsTUFBTVEsS0FBSyxJQUFJLElBQUksRUFBQztnQkFDckJDLFFBQVFDLEdBQUcsQ0FBQztZQUNkLE9BQ0ssSUFBR1YsTUFBTUMsTUFBTSxJQUFJLElBQUksRUFBQztnQkFDM0JRLFFBQVFDLEdBQUcsQ0FBQztZQUNkLE9BQ0k7Z0JBQ0ZELFFBQVFDLEdBQUcsQ0FBQ1YsTUFBTVEsS0FBSyxHQUFHLE9BQU1SLE1BQU1DLE1BQU07Z0JBQzVDLElBQUlVLGVBQWVYLE1BQU1RLEtBQUs7Z0JBQzlCLElBQUdHLGFBQWFDLFVBQVUsQ0FBQyxNQUFLO29CQUM5QkQsZUFBZSxNQUFNRSxxQkFBcUJGLGFBQWFHLEtBQUssQ0FBQztnQkFFL0QsQ0FBQztnQkFDRCxJQUFHSCxnQkFBZ0IsSUFBSSxFQUFDO29CQUN0QkEsZUFBZUg7b0JBQ2ZDLFFBQVFDLEdBQUcsQ0FBQ0M7b0JBRWQsSUFBSVIsU0FBUyxFQUFFO29CQUVmLElBQUlZLFNBQVMsTUFBTUMsMkJBQTJCTCxjQUFjWCxNQUFNQyxNQUFNO29CQUV4RSxLQUFJLE1BQU1nQixXQUFXRixPQUFPO3dCQUMxQixJQUFJRyxRQUFRLElBQUlwQiw4Q0FBS0EsQ0FBQ21CLFFBQVFFLFVBQVUsRUFBRUYsUUFBUUcsU0FBUyxFQUFFSCxRQUFRSSxRQUFRO3dCQUM3RUgsTUFBTUksUUFBUSxHQUFHLE1BQU1KLE1BQU1LLFdBQVc7d0JBRXhDLElBQUdMLE1BQU1JLFFBQVEsSUFBSSxJQUFJLEVBQUM7NEJBQ3hCLElBQUlFLE9BQU9OLE1BQU1PLG1CQUFtQjs0QkFDcENQLE1BQU1NLElBQUksR0FBR0E7d0JBQ2YsQ0FBQzt3QkFDRHJCLE9BQU91QixJQUFJLENBQUNSO29CQUNaO29CQUNBZCxVQUFVRDtnQkFDWixPQUNJO29CQUNGTSxRQUFRQyxHQUFHLENBQUM7Z0JBQ2QsQ0FBQztZQUlILENBQUM7UUFDSDtRQUNBSDtJQUNGLEdBQUc7UUFBQ1A7S0FBTTtJQUVSLG9DQUFvQztJQUMxQyxlQUFlMkIseUJBQXlCQyxPQUFPLEVBQUM7UUFDOUMsSUFBRztZQUNELE1BQU1DLE1BQU0sTUFBTUMsTUFBTSw4Q0FBOEM7Z0JBQ3BFQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFDbkIsY0FBYzt3QkFBRVA7cUJBQ2Y7Z0JBQ0g7WUFDRjtZQUVBLE1BQU1RLE1BQU0sTUFBTVAsSUFBSVEsSUFBSTtZQUMxQixPQUFPRCxHQUFHLENBQUMsRUFBRSxDQUFDRSxhQUFhO1FBQzdCLEVBQUMsT0FBTUMsT0FBTTtZQUNYLE9BQU8sSUFBSTtRQUNiO0lBRUY7SUFFQSxtQ0FBbUM7SUFDbkMsTUFBTTFCLHVCQUF1QixPQUFPMkIsU0FBVztRQUM3Qy9CLFFBQVFDLEdBQUcsQ0FBQzhCO1FBQ1osSUFBRztZQUNELElBQUlDLFdBQVc7WUFFZixnREFBZ0Q7WUFDaEQsSUFBSUQsT0FBT0UsTUFBTSxLQUFLLEdBQUc7Z0JBQ3ZCLE9BQU8sSUFBSTtZQUNiLENBQUM7WUFFRCxzQ0FBc0M7WUFDdEMsSUFBSUMsWUFBWUMsTUFBTUEsQ0FBQ0MsSUFBSSxDQUFDTCxRQUFRTSxRQUFRLENBQUM7WUFFN0MsSUFBSUMsT0FBTyxNQUFNakIsTUFDZix5REFBdURXLFdBQVNFLFlBQVUsY0FDMUU7Z0JBQ0VYLFNBQVM7b0JBQ1AsMEJBQTBCO29CQUMxQmdCLFlBQVk7Z0JBQXlDO1lBQ3pEO1lBRUYsSUFBSVosTUFBTSxNQUFNVyxLQUFLVixJQUFJO1lBRXpCNUIsUUFBUUMsR0FBRyxDQUFDMEI7WUFFWixJQUFJNUIsU0FBUSxNQUFNbUIseUJBQXlCUyxHQUFHLENBQUMsRUFBRSxDQUFDUixPQUFPO1lBQ3pELE9BQU9wQjtRQUNULEVBQUMsT0FBTStCLE9BQU07WUFDWDlCLFFBQVFDLEdBQUcsQ0FBQzZCO1lBQ1osT0FBTyxJQUFJO1FBQ2I7SUFFRjtJQUVBLGlFQUFpRTtJQUNqRSx1REFBdUQ7SUFDdkQsZUFBZXZCLDJCQUEyQkwsWUFBWSxFQUFFVixNQUFNLEVBQUM7UUFFN0QsSUFBSWMsU0FBUyxFQUFFO1FBQ2YsSUFBRztZQUNELE1BQU1jLE1BQU0sTUFBTUMsTUFBTSxnREFBZ0Q7Z0JBQ3RFQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFDbkIsb0JBQW9CO3dCQUNsQnhCO3FCQUNEO2dCQUNIO1lBQ0Y7WUFFQSxNQUFNeUIsTUFBTSxNQUFNUCxJQUFJUSxJQUFJO1lBRTFCLElBQUksSUFBSVksSUFBRSxHQUFFQSxJQUFFYixHQUFHLENBQUMsRUFBRSxDQUFDYyxVQUFVLENBQUNSLE1BQU0sRUFBRU8sSUFBSTtnQkFDMUMsSUFBSS9CLFFBQVFrQixHQUFHLENBQUMsRUFBRSxDQUFDYyxVQUFVLENBQUNELEVBQUU7Z0JBRWhDLElBQUcvQixNQUFNRSxTQUFTLElBQUluQixRQUFPO29CQUMzQmMsT0FBT1csSUFBSSxDQUFDUjtnQkFDZCxDQUFDO1lBQ0g7WUFDQSxPQUFPSDtRQUNULEVBQUMsT0FBTXdCLE9BQU07WUFDWCxPQUFPLElBQUk7UUFDYjtJQUVGO0lBRUUsU0FBU1ksYUFBYUosSUFBSSxFQUFDO1FBQ3pCekMsVUFBVXlDO0lBQ1o7SUFFQSxxQkFBTyw4REFBQ0s7OzBCQUNKLDhEQUFDdkQsK0NBQU1BO2dCQUFDa0QsTUFBUUk7Ozs7OzswQkFDaEIsOERBQUNFOzBCQUFNOzs7Ozs7MEJBQ1AsOERBQUN6RCwrQ0FBTUE7Z0JBQUNLLFFBQVVELE1BQU1DLE1BQU07Z0JBQUVJLFFBQVFBO2dCQUFRRyxPQUFRUixNQUFNUSxLQUFLOzs7Ozs7MEJBQ25FLDhEQUFDNkM7MEJBQU07Ozs7OzswQkFDUCw4REFBQzFELGdEQUFPQTtnQkFBQzJELE1BQVFuRDtnQkFBUUYsUUFBVUQsTUFBTUMsTUFBTTtnQkFBQ08sT0FBT1IsTUFBTVEsS0FBSzs7Ozs7OzBCQUNsRSw4REFBQ2QsbURBQVVBO2dCQUFDTyxRQUFVRCxNQUFNQyxNQUFNO2dCQUFFTyxPQUFPUixNQUFNUSxLQUFLOzs7Ozs7Ozs7Ozs7QUFFOUQ7R0E1SlNUO0tBQUFBO0FBNkpULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wb2xpY3lEYXRhLmpzP2YzNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbGxlY3Rpb24gZnJvbSBcIi4vY29sbGVjdGlvblwiO1xuaW1wb3J0IE5mdEdyaWQgZnJvbSBcIi4vbmZ0R3JpZFwiO1xuaW1wb3J0IFBvbGljeSBmcm9tIFwiLi9wb2xpY3lcIjtcbmltcG9ydCBQcmljZXMgZnJvbSBcIi4vcHJpY2VzXCI7XG5pbXBvcnQgVG9rZW4gZnJvbSBcIi4vdG9rZW5cIjtcblxuZnVuY3Rpb24gUG9saWN5RGF0YSAocHJvcHMpIHtcblxuICAgIGNvbnN0IFtwb2xpY3ksIHNldFBvbGljeV0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFt0b2tlbnMsIHNldFRva2Vuc10gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtwcmljZXMsIHNldFByaWNlc10gPSB1c2VTdGF0ZSgpO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRQb2xpY3lEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGlmKHByb3BzLnN0YWtlID09IG51bGwpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0YWtlIHdhcyB1bmRlZmluZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZihwcm9wcy5wb2xpY3kgPT0gbnVsbCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncG9saWN5IHVuZGVmaW5lZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvcHMuc3Rha2UgKyAnLSAnICtwcm9wcy5wb2xpY3kpO1xuICAgICAgICAgICAgbGV0IHN0YWtlQWRkcmVzcyA9IHByb3BzLnN0YWtlO1xuICAgICAgICAgICAgaWYoc3Rha2VBZGRyZXNzLnN0YXJ0c1dpdGgoJyQnKSl7XG4gICAgICAgICAgICAgIHN0YWtlQWRkcmVzcyA9IGF3YWl0IGdldEFkZHJlc3NGcm9tSGFuZGxlKHN0YWtlQWRkcmVzcy5zbGljZSgxKSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHN0YWtlQWRkcmVzcyAhPSBudWxsKXtcbiAgICAgICAgICAgICAgc3Rha2VBZGRyZXNzID0gc3Rha2U7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YWtlQWRkcmVzcyk7XG5cbiAgICAgICAgICAgIGxldCB0b2tlbnMgPSBbXTtcblxuICAgICAgICAgICAgbGV0IGFzc2V0cyA9IGF3YWl0IGdldEFzc2V0c09mUG9saWN5RnJvbUtvaW9zKHN0YWtlQWRkcmVzcywgcHJvcHMucG9saWN5KTtcblxuICAgICAgICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgYXNzZXRzKXtcbiAgICAgICAgICAgICAgbGV0IHRva2VuID0gbmV3IFRva2VuKGVsZW1lbnQuYXNzZXRfbmFtZSwgZWxlbWVudC5wb2xpY3lfaWQsIGVsZW1lbnQucXVhbnRpdHkpO1xuICAgICAgICAgICAgICB0b2tlbi5tZXRhZGF0YSA9IGF3YWl0IHRva2VuLmdldE1ldGFkYXRhKCk7XG5cbiAgICAgICAgICAgICAgaWYodG9rZW4ubWV0YWRhdGEgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgbGV0IGlwZnMgPSB0b2tlbi5nZXRJcGZzRnJvbU1ldGFkYXRhKCk7XG4gICAgICAgICAgICAgICAgdG9rZW4uaXBmcyA9IGlwZnM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNldFRva2Vucyh0b2tlbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3dhbGxldCBlcnJvcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG5cblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnZXRQb2xpY3lEYXRhKCk7XG4gICAgICB9LCBbcHJvcHNdKVxuXG4gICAgICAgIC8vIHVzZWQgd2hlbiBmZXRjaGluZyBoYW5kbGUgYWRkcmVzc1xuICBhc3luYyBmdW5jdGlvbiBnZXRTdGFrZUZyb21BZGRyZXNzS29pb3MoYWRkcmVzcyl7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmtvaW9zLnJlc3QvYXBpL3YwL2FkZHJlc3NfaW5mbycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBcIl9hZGRyZXNzZXNcIjogWyBhZGRyZXNzXG4gICAgICAgICAgXVxuICAgICAgICB9KVxuICAgICAgfSk7XG4gIFxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICAgIHJldHVybiByZXNbMF0uc3Rha2VfYWRkcmVzcztcbiAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gIH1cblxuICAvLyByZXR1cm5zIGJhc2UgYWRkcmVzcyBmcm9tIGhhbmRsZVxuICBjb25zdCBnZXRBZGRyZXNzRnJvbUhhbmRsZSA9IGFzeW5jIChoYW5kbGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhoYW5kbGUpO1xuICAgIHRyeXtcbiAgICAgIGxldCBwb2xpY3lJRCA9ICdmMGZmNDhiYmI3YmJlOWQ1OWE0MGYxY2U5MGU5ZTlkMGZmNTAwMmVjNDhmMjMyYjQ5Y2EwZmI5YSc7XG4gICAgXG4gICAgICAvLyBBIGJsYW5rIEhhbmRsZSBuYW1lIHNob3VsZCBhbHdheXMgYmUgaWdub3JlZC5cbiAgICAgIGlmIChoYW5kbGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIFxuICAgICAgLy8gQ29udmVydCBoYW5kbGVOYW1lIHRvIGhleCBlbmNvZGluZy5cbiAgICAgIGxldCBhc3NldE5hbWUgPSBCdWZmZXIuZnJvbShoYW5kbGUpLnRvU3RyaW5nKCdoZXgnKTtcbiAgICBcbiAgICAgIGxldCBkYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2NhcmRhbm8tbWFpbm5ldC5ibG9ja2Zyb3N0LmlvL2FwaS92MC9hc3NldHMvYCtwb2xpY3lJRCthc3NldE5hbWUrJy9hZGRyZXNzZXMnLFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgLy8gWW91ciBCbG9ja2Zyb3N0IEFQSSBrZXlcbiAgICAgICAgICAgIHByb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnfVxuICAgICAgICB9KTtcblxuICAgICAgbGV0IHJlcyA9IGF3YWl0IGRhdGEuanNvbigpO1xuXG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgXG4gICAgICBsZXQgc3Rha2UgPSBhd2FpdCBnZXRTdGFrZUZyb21BZGRyZXNzS29pb3MocmVzWzBdLmFkZHJlc3MpO1xuICAgICAgcmV0dXJuIHN0YWtlO1xuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIG5vIGFzc2V0IGxpbWl0IG9uIGhvdyBtYW55IGFzc2V0cyBnZXRzIHJldHVybmVkIG9uIG9uZSByZXF1ZXN0XG4gIC8vIGtvaW9zLCBibG9ja2Zyb3N0IGlzIGxpbWl0ZWQgYnkgMTAwIHJlc3VsdHMgcGVyIHBhZ2VcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0QXNzZXRzT2ZQb2xpY3lGcm9tS29pb3Moc3Rha2VBZGRyZXNzLCBwb2xpY3kpe1xuXG4gICAgbGV0IGFzc2V0cyA9IFtdO1xuICAgIHRyeXtcbiAgICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5rb2lvcy5yZXN0L2FwaS92MC9hY2NvdW50X2Fzc2V0cycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBcIl9zdGFrZV9hZGRyZXNzZXNcIjogW1xuICAgICAgICAgICAgc3Rha2VBZGRyZXNzXG4gICAgICAgICAgXVxuICAgICAgICB9KVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgICAgIGZvcihsZXQgaT0wO2k8cmVzWzBdLmFzc2V0X2xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgdG9rZW4gPSByZXNbMF0uYXNzZXRfbGlzdFtpXTtcblxuICAgICAgICBpZih0b2tlbi5wb2xpY3lfaWQgPT0gcG9saWN5KXtcbiAgICAgICAgICBhc3NldHMucHVzaCh0b2tlbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhc3NldHM7XG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQcmljZURhdGEoZGF0YSl7XG4gICAgICBzZXRQcmljZXMoZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuKDxkaXY+XG4gICAgICAgIDxQcmljZXMgZGF0YSA9IHtzZXRQcmljZURhdGF9Lz5cbiAgICAgICAgPGxhYmVsPlBvbGljeSBJbmZvPC9sYWJlbD5cbiAgICAgICAgPFBvbGljeSBwb2xpY3kgPSB7cHJvcHMucG9saWN5fSBwcmljZXM9e3ByaWNlc30gc3Rha2UgPXtwcm9wcy5zdGFrZX0vPlxuICAgICAgICA8bGFiZWw+WW91ciBXYWxsZXQ8L2xhYmVsPlxuICAgICAgICA8TmZ0R3JpZCBuZnRzID0ge3Rva2Vuc30gcG9saWN5ID0ge3Byb3BzLnBvbGljeX1zdGFrZT17cHJvcHMuc3Rha2V9Lz5cbiAgICAgICAgPENvbGxlY3Rpb24gcG9saWN5ID0ge3Byb3BzLnBvbGljeX0gc3Rha2U9e3Byb3BzLnN0YWtlfS8+XG4gICAgPC9kaXY+KVxufVxuZXhwb3J0IGRlZmF1bHQgUG9saWN5RGF0YTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbGxlY3Rpb24iLCJOZnRHcmlkIiwiUG9saWN5IiwiUHJpY2VzIiwiVG9rZW4iLCJQb2xpY3lEYXRhIiwicHJvcHMiLCJwb2xpY3kiLCJzZXRQb2xpY3kiLCJ0b2tlbnMiLCJzZXRUb2tlbnMiLCJwcmljZXMiLCJzZXRQcmljZXMiLCJnZXRQb2xpY3lEYXRhIiwic3Rha2UiLCJjb25zb2xlIiwibG9nIiwic3Rha2VBZGRyZXNzIiwic3RhcnRzV2l0aCIsImdldEFkZHJlc3NGcm9tSGFuZGxlIiwic2xpY2UiLCJhc3NldHMiLCJnZXRBc3NldHNPZlBvbGljeUZyb21Lb2lvcyIsImVsZW1lbnQiLCJ0b2tlbiIsImFzc2V0X25hbWUiLCJwb2xpY3lfaWQiLCJxdWFudGl0eSIsIm1ldGFkYXRhIiwiZ2V0TWV0YWRhdGEiLCJpcGZzIiwiZ2V0SXBmc0Zyb21NZXRhZGF0YSIsInB1c2giLCJnZXRTdGFrZUZyb21BZGRyZXNzS29pb3MiLCJhZGRyZXNzIiwicmVxIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJqc29uIiwic3Rha2VfYWRkcmVzcyIsImVycm9yIiwiaGFuZGxlIiwicG9saWN5SUQiLCJsZW5ndGgiLCJhc3NldE5hbWUiLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJkYXRhIiwicHJvamVjdF9pZCIsImkiLCJhc3NldF9saXN0Iiwic2V0UHJpY2VEYXRhIiwiZGl2IiwibGFiZWwiLCJuZnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/policyData.js\n"));

/***/ })

});