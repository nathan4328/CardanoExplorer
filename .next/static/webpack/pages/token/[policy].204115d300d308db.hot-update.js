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

/***/ "./src/pages/tokenData.js":
/*!********************************!*\
  !*** ./src/pages/tokenData.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next.config */ \"./next.config.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _metadataTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metadataTable */ \"./src/pages/metadataTable.js\");\n/* harmony import */ var _policy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./policy */ \"./src/pages/policy.js\");\n/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prices */ \"./src/pages/prices.js\");\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction TokenData(props) {\n    _s();\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [metadata, setMetadata] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        name: \"\",\n        policy: \"\",\n        created: \"\",\n        assetName: \"\",\n        fingerprint: \"\",\n        rarityRank: \"\",\n        rarityScore: \"\",\n        statisticalRank: \"\",\n        statisticalScore: \"\"\n    });\n    const [policy, setPolicy] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [tokenInfo, setTokenInfo] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const getTokenData = async ()=>{\n            if (props.assetId == null) {\n                console.log(\"asset ID was undefined\");\n            } else {\n                // from url in [token].jsx\n                let assetId = props.assetId;\n                // fetch asset data from blockfrost\n                let assetData = await loadTokenData(assetId);\n                if (assetData == null) {\n                    setDisplay(\"invalid asset id\");\n                } else {\n                    let token = await createToken(assetData);\n                    setTokenInfo(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Asset name:\",\n                            token.asset_name,\n                            \" Policy ID: \",\n                            token.policy_id\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 35,\n                        columnNumber: 30\n                    }, this));\n                    setPolicy(token.policy_id);\n                    let _assetData = await getCnftAssetData(props.assetId);\n                    let createdData = _assetData.created_at.substring(0, 10);\n                    let fingerprint = _assetData.fingerprint.substring(0, 10);\n                    let name = _assetData.name;\n                    let rarityRank = _assetData.rarity_rank;\n                    let rarityScore = _assetData.rarity_score;\n                    let statisticalRank = _assetData.statistical_rank;\n                    let statisticalScore = _assetData.statistical_score;\n                    let obj = {\n                        name: name,\n                        policy: token.policy_id,\n                        created: createdData,\n                        assetName: token.asset_name,\n                        fingerprint: fingerprint,\n                        rarityRank: rarityRank,\n                        rarityScore: rarityScore,\n                        statisticalRank: statisticalRank,\n                        statisticalScore\n                    };\n                    setData(obj);\n                    let price = prices;\n                    let ipfs = \"\";\n                    if (token.metadata != null) {\n                        ipfs = token.getIpfsFromMetadata();\n                        token.ipfs = ipfs;\n                        console.log(token.ipfs);\n                    }\n                    let txs = await getPrevTxs(assetId);\n                    // metadata displayed in table\n                    setMetadata(JSON.stringify(token.metadata));\n                    if (token.ipfs != null) {\n                        // nft image\n                        setImage(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"main-img\",\n                            alt: \"no image\",\n                            src: ipfs,\n                            width: 500,\n                            height: 500\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                            lineNumber: 70,\n                            columnNumber: 28\n                        }, this));\n                    }\n                }\n            }\n        };\n        getTokenData();\n    }, [\n        props\n    ]);\n    async function createToken(assetData) {\n        let assetName = assetData.asset_name;\n        let policy = assetData.policy_id;\n        let quantity = assetData.quantity;\n        let token = new _token__WEBPACK_IMPORTED_MODULE_7__[\"default\"](assetName, policy, quantity);\n        let tokenMetadata = await token.getMetadata();\n        token.metadata = tokenMetadata;\n        return token;\n    }\n    // fetch token metadata from blockfrost\n    async function loadTokenData(assetId) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\" + assetId, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    async function getCnftAssetData(asset) {\n        try {\n            const data = await fetch(\"https://api.opencnft.io/1/asset/\" + asset, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    // fetch token metadata from blockfrost\n    async function getPrevTxs(assetId) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\" + assetId + \"/transactions\", {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    function setPriceData(data) {\n        setPrices(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"token-main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prices__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                data: setPriceData\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 146,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_policy__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                policy: policy,\n                prices: prices\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 147,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"token-box\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"token-image\",\n                        children: image\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 149,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"token-data\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Name: \",\n                                    data.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 151,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Created: \",\n                                    data.created\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 154,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Fingerprint: \",\n                                    data.fingerprint\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 157,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Rarity Rank: \",\n                                    data.rarityRank\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 160,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Statistical Rank: \",\n                                    data.statisticalRank\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 163,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Asset Name: \",\n                                    data.assetName\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 166,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 150,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 148,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"metadata\",\n                children: [\n                    \"Metadata: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 171,\n                        columnNumber: 45\n                    }, this),\n                    metadata\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 171,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n        lineNumber: 145,\n        columnNumber: 7\n    }, this);\n}\n_s(TokenData, \"ezYOd6N8iUFtBt2/1Q6CbzxzyhQ=\");\n_c = TokenData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TokenData);\nvar _c;\n$RefreshReg$(_c, \"TokenData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdG9rZW5EYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNYO0FBQ3dDO0FBQzNCO0FBQ2Q7QUFDQTtBQUNGO0FBRTVCLFNBQVNVLFVBQVdDLEtBQUssRUFBRTs7SUFFekIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQTtJQUNsQyxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBO0lBQ3hDLE1BQU0sQ0FBQ1ksTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBQztRQUFDYyxNQUFNO1FBQUlDLFFBQU87UUFBR0MsU0FBUTtRQUFJQyxXQUFVO1FBQUlDLGFBQVk7UUFBSUMsWUFBVztRQUFHQyxhQUFZO1FBQzlGQyxpQkFBZ0I7UUFBSUMsa0JBQWlCO0lBQUU7SUFDbkUsTUFBTSxDQUFDUCxRQUFRUSxVQUFVLEdBQUd2QiwrQ0FBUUE7SUFDcEMsTUFBTSxDQUFDd0IsUUFBUUMsVUFBVSxHQUFHekIsK0NBQVFBO0lBQ3BDLE1BQU0sQ0FBQzBCLFdBQVdDLGFBQWEsR0FBRzNCLCtDQUFRQTtJQUV4Q0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLE1BQU02QixlQUFlLFVBQVk7WUFDL0IsSUFBR3JCLE1BQU1zQixPQUFPLElBQUksSUFBSSxFQUFDO2dCQUN2QkMsUUFBUUMsR0FBRyxDQUFDO1lBQ2QsT0FDSTtnQkFDRCwwQkFBMEI7Z0JBQzFCLElBQUlGLFVBQVV0QixNQUFNc0IsT0FBTztnQkFFM0IsbUNBQW1DO2dCQUNuQyxJQUFJRyxZQUFZLE1BQU1DLGNBQWNKO2dCQUNwQyxJQUFHRyxhQUFhLElBQUksRUFBQztvQkFDbkJFLFdBQVc7Z0JBQ2IsT0FDSTtvQkFDRCxJQUFJQyxRQUFRLE1BQU1DLFlBQVlKO29CQUM5QkwsMkJBQWEsOERBQUNVOzs0QkFBTTs0QkFBWUYsTUFBTUcsVUFBVTs0QkFBQzs0QkFBYUgsTUFBTUksU0FBUzs7Ozs7OztvQkFDN0VoQixVQUFVWSxNQUFNSSxTQUFTO29CQUV6QixJQUFJQyxhQUFhLE1BQU1DLGlCQUFpQmxDLE1BQU1zQixPQUFPO29CQUNyRCxJQUFJYSxjQUFjLFdBQVlDLFVBQVUsQ0FBRUMsU0FBUyxDQUFDLEdBQUU7b0JBQ3RELElBQUkxQixjQUFjLFdBQVlBLFdBQVcsQ0FBRTBCLFNBQVMsQ0FBQyxHQUFFO29CQUN2RCxJQUFJOUIsT0FBTzBCLFdBQVcxQixJQUFJO29CQUMxQixJQUFJSyxhQUFhcUIsV0FBV0ssV0FBVztvQkFDdkMsSUFBSXpCLGNBQWNvQixXQUFXTSxZQUFZO29CQUN6QyxJQUFJekIsa0JBQWtCbUIsV0FBV08sZ0JBQWdCO29CQUNqRCxJQUFJekIsbUJBQW1Ca0IsV0FBV1EsaUJBQWlCO29CQUVuRCxJQUFJQyxNQUFNO3dCQUFDbkMsTUFBTUE7d0JBQU1DLFFBQVFvQixNQUFNSSxTQUFTO3dCQUFFdkIsU0FBUzBCO3dCQUFhekIsV0FBV2tCLE1BQU1HLFVBQVU7d0JBQy9GcEIsYUFBYUE7d0JBQWFDLFlBQVlBO3dCQUFZQyxhQUFjQTt3QkFDbEVDLGlCQUFpQkE7d0JBQWlCQztvQkFBZ0I7b0JBRWxEVCxRQUFRb0M7b0JBRVIsSUFBSUMsUUFBUTFCO29CQUNaLElBQUkyQixPQUFPO29CQUNYLElBQUdoQixNQUFNekIsUUFBUSxJQUFJLElBQUksRUFBQzt3QkFDeEJ5QyxPQUFPaEIsTUFBTWlCLG1CQUFtQjt3QkFDaENqQixNQUFNZ0IsSUFBSSxHQUFHQTt3QkFDYnJCLFFBQVFDLEdBQUcsQ0FBQ0ksTUFBTWdCLElBQUk7b0JBRXhCLENBQUM7b0JBRUQsSUFBSUUsTUFBTSxNQUFNQyxXQUFXekI7b0JBRTNCLDhCQUE4QjtvQkFDOUJsQixZQUFZNEMsS0FBS0MsU0FBUyxDQUFDckIsTUFBTXpCLFFBQVE7b0JBR3pDLElBQUd5QixNQUFNZ0IsSUFBSSxJQUFJLElBQUksRUFBQzt3QkFDcEIsWUFBWTt3QkFDWjFDLHVCQUFTLDhEQUFDWixtREFBS0E7NEJBQUM0RCxXQUFZOzRCQUFXQyxLQUFLOzRCQUFXQyxLQUFPUjs0QkFBTVMsT0FBUzs0QkFBS0MsUUFBVTs7Ozs7O29CQUM5RixDQUFDO2dCQUVKLENBQUM7WUFFSixDQUFDO1FBQ0g7UUFDQWpDO0lBQ0YsR0FBRztRQUFDckI7S0FBTTtJQUlaLGVBQWU2QixZQUFZSixTQUFTLEVBQUM7UUFDbkMsSUFBSWYsWUFBWWUsVUFBVU0sVUFBVTtRQUNwQyxJQUFJdkIsU0FBU2lCLFVBQVVPLFNBQVM7UUFDaEMsSUFBSXVCLFdBQVc5QixVQUFVOEIsUUFBUTtRQUVqQyxJQUFJM0IsUUFBUSxJQUFJOUIsOENBQUtBLENBQUNZLFdBQVdGLFFBQVErQztRQUN6QyxJQUFJQyxnQkFBZ0IsTUFBTTVCLE1BQU02QixXQUFXO1FBQzNDN0IsTUFBTXpCLFFBQVEsR0FBR3FEO1FBSWpCLE9BQU81QjtJQUNUO0lBRUEsdUNBQXVDO0lBQ3ZDLGVBQWVGLGNBQWNKLE9BQU8sRUFBQztRQUNuQyxJQUFHO1lBQ0QsTUFBTWpCLE9BQU8sTUFBTXFELE1BQU0seURBQXVEcEMsU0FDaEY7Z0JBQUNxQyxTQUFRO29CQUFDQyxZQUFZO29CQUEyQyxpQkFBaUI7Z0JBQWtCO1lBQUM7WUFDckcsTUFBTUMsTUFBTSxNQUFNeEQsS0FBS3lELElBQUk7WUFDM0IsSUFBR3pELEtBQUswRCxNQUFNLElBQUksS0FBSTtnQkFDcEIsT0FBTyxJQUFJO1lBQ2IsQ0FBQztZQUNELE9BQU9GO1FBQ1QsRUFBQyxPQUFNRyxPQUFNO1lBQ1gsT0FBTyxJQUFJO1FBQ2I7SUFDRjtJQUVBLGVBQWU5QixpQkFBaUIrQixLQUFLLEVBQUM7UUFDcEMsSUFBRztZQUNELE1BQU01RCxPQUFPLE1BQU1xRCxNQUFNLHFDQUFtQ08sT0FDNUQ7Z0JBQUNOLFNBQVE7b0JBQUNDLFlBQVk7b0JBQTJDLGlCQUFpQjtnQkFBa0I7WUFBQztZQUNyRyxNQUFNQyxNQUFNLE1BQU14RCxLQUFLeUQsSUFBSTtZQUMzQixJQUFHekQsS0FBSzBELE1BQU0sSUFBRyxLQUFJO2dCQUNuQixPQUFPLElBQUk7WUFDYixDQUFDO1lBQ0QsT0FBT0Y7UUFDVCxFQUFDLE9BQU1HLE9BQU07WUFDWCxPQUFPLElBQUk7UUFDYjtJQUNGO0lBRUEsdUNBQXVDO0lBQ3ZDLGVBQWVqQixXQUFXekIsT0FBTyxFQUFDO1FBQ2hDLElBQUc7WUFDRCxNQUFNakIsT0FBTyxNQUFNcUQsTUFBTSx5REFBdURwQyxVQUFRLGlCQUN4RjtnQkFBQ3FDLFNBQVE7b0JBQUNDLFlBQVk7b0JBQTJDLGlCQUFpQjtnQkFBa0I7WUFBQztZQUNyRyxNQUFNQyxNQUFNLE1BQU14RCxLQUFLeUQsSUFBSTtZQUMzQixJQUFHekQsS0FBSzBELE1BQU0sSUFBSSxLQUFJO2dCQUNwQixPQUFPLElBQUk7WUFDYixDQUFDO1lBQ0QsT0FBT0Y7UUFDVCxFQUFDLE9BQU1HLE9BQU07WUFDWCxPQUFPLElBQUk7UUFDYjtJQUNGO0lBRUEsU0FBU0UsYUFBYTdELElBQUksRUFBQztRQUN6QmEsVUFBVWI7SUFDWjtJQUVBLHFCQUNFLDhEQUFDOEQ7UUFBSWpCLFdBQVU7OzBCQUNiLDhEQUFDckQsK0NBQU1BO2dCQUFDUSxNQUFRNkQ7Ozs7OzswQkFDaEIsOERBQUN0RSwrQ0FBTUE7Z0JBQUNZLFFBQVVBO2dCQUFRUyxRQUFVQTs7Ozs7OzBCQUNsQyw4REFBQ2tEO2dCQUFJakIsV0FBVTs7a0NBQ1gsOERBQUNpQjt3QkFBSWpCLFdBQVU7a0NBQWVqRDs7Ozs7O2tDQUM5Qiw4REFBQ2tFO3dCQUFJakIsV0FBVTs7MENBQ2IsOERBQUNpQjtnQ0FBSWpCLFdBQVU7O29DQUFrQjtvQ0FDMUI3QyxLQUFLRSxJQUFJOzs7Ozs7OzBDQUVoQiw4REFBQzREO2dDQUFJakIsV0FBVTs7b0NBQWtCO29DQUN2QjdDLEtBQUtJLE9BQU87Ozs7Ozs7MENBRXRCLDhEQUFDMEQ7Z0NBQUlqQixXQUFVOztvQ0FBa0I7b0NBQ25CN0MsS0FBS00sV0FBVzs7Ozs7OzswQ0FFOUIsOERBQUN3RDtnQ0FBSWpCLFdBQVU7O29DQUFrQjtvQ0FDbkI3QyxLQUFLTyxVQUFVOzs7Ozs7OzBDQUU3Qiw4REFBQ3VEO2dDQUFJakIsV0FBVTs7b0NBQWtCO29DQUNkN0MsS0FBS1MsZUFBZTs7Ozs7OzswQ0FFdkMsOERBQUNxRDtnQ0FBSWpCLFdBQVU7O29DQUFrQjtvQ0FDcEI3QyxLQUFLSyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUluQyw4REFBQ3lEO2dCQUFJakIsV0FBVTs7b0JBQVc7a0NBQVUsOERBQUNrQjs7Ozs7b0JBQUtqRTs7Ozs7Ozs7Ozs7OztBQUlsRDtHQXRLU0o7S0FBQUE7QUF1S1QsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Rva2VuRGF0YS5qcz82ZjVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFzc2V0UHJlZml4IH0gZnJvbSBcIm5leHQuY29uZmlnXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlU3luY0V4dGVybmFsU3RvcmUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNZXRhZGF0YVRhYmxlIGZyb20gXCIuL21ldGFkYXRhVGFibGVcIjtcbmltcG9ydCBQb2xpY3kgZnJvbSBcIi4vcG9saWN5XCI7XG5pbXBvcnQgUHJpY2VzIGZyb20gXCIuL3ByaWNlc1wiO1xuaW1wb3J0IFRva2VuIGZyb20gXCIuL3Rva2VuXCI7XG5cbmZ1bmN0aW9uIFRva2VuRGF0YSAocHJvcHMpIHtcblxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFttZXRhZGF0YSwgc2V0TWV0YWRhdGFdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe25hbWU6ICcnLCBwb2xpY3k6JycsY3JlYXRlZDonJywgYXNzZXROYW1lOicnLCBmaW5nZXJwcmludDonJywgcmFyaXR5UmFuazonJyxyYXJpdHlTY29yZTonJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpc3RpY2FsUmFuazonJywgc3RhdGlzdGljYWxTY29yZTonJ30pO1xuICBjb25zdCBbcG9saWN5LCBzZXRQb2xpY3ldID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3ByaWNlcywgc2V0UHJpY2VzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt0b2tlbkluZm8sIHNldFRva2VuSW5mb10gPSB1c2VTdGF0ZSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0VG9rZW5EYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGlmKHByb3BzLmFzc2V0SWQgPT0gbnVsbCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYXNzZXQgSUQgd2FzIHVuZGVmaW5lZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgIC8vIGZyb20gdXJsIGluIFt0b2tlbl0uanN4XG4gICAgICAgICAgICAgbGV0IGFzc2V0SWQgPSBwcm9wcy5hc3NldElkO1xuXG4gICAgICAgICAgICAgLy8gZmV0Y2ggYXNzZXQgZGF0YSBmcm9tIGJsb2NrZnJvc3RcbiAgICAgICAgICAgICBsZXQgYXNzZXREYXRhID0gYXdhaXQgbG9hZFRva2VuRGF0YShhc3NldElkKTtcbiAgICAgICAgICAgICBpZihhc3NldERhdGEgPT0gbnVsbCl7XG4gICAgICAgICAgICAgICBzZXREaXNwbGF5KCdpbnZhbGlkIGFzc2V0IGlkJylcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBhd2FpdCBjcmVhdGVUb2tlbihhc3NldERhdGEpOyBcbiAgICAgICAgICAgICAgICBzZXRUb2tlbkluZm8oPGxhYmVsPkFzc2V0IG5hbWU6e3Rva2VuLmFzc2V0X25hbWV9IFBvbGljeSBJRDoge3Rva2VuLnBvbGljeV9pZH08L2xhYmVsPik7XG4gICAgICAgICAgICAgICAgc2V0UG9saWN5KHRva2VuLnBvbGljeV9pZCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgX2Fzc2V0RGF0YSA9IGF3YWl0IGdldENuZnRBc3NldERhdGEocHJvcHMuYXNzZXRJZCk7XG4gICAgICAgICAgICAgICAgbGV0IGNyZWF0ZWREYXRhID0gKF9hc3NldERhdGEuY3JlYXRlZF9hdCkuc3Vic3RyaW5nKDAsMTApO1xuICAgICAgICAgICAgICAgIGxldCBmaW5nZXJwcmludCA9IChfYXNzZXREYXRhLmZpbmdlcnByaW50KS5zdWJzdHJpbmcoMCwxMCk7XG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBfYXNzZXREYXRhLm5hbWU7XG4gICAgICAgICAgICAgICAgbGV0IHJhcml0eVJhbmsgPSBfYXNzZXREYXRhLnJhcml0eV9yYW5rO1xuICAgICAgICAgICAgICAgIGxldCByYXJpdHlTY29yZSA9IF9hc3NldERhdGEucmFyaXR5X3Njb3JlO1xuICAgICAgICAgICAgICAgIGxldCBzdGF0aXN0aWNhbFJhbmsgPSBfYXNzZXREYXRhLnN0YXRpc3RpY2FsX3Jhbms7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXRpc3RpY2FsU2NvcmUgPSBfYXNzZXREYXRhLnN0YXRpc3RpY2FsX3Njb3JlO1xuXG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtuYW1lOiBuYW1lLCBwb2xpY3k6IHRva2VuLnBvbGljeV9pZCwgY3JlYXRlZDogY3JlYXRlZERhdGEsIGFzc2V0TmFtZTogdG9rZW4uYXNzZXRfbmFtZSxcbiAgICAgICAgICAgICAgICAgIGZpbmdlcnByaW50OiBmaW5nZXJwcmludCwgcmFyaXR5UmFuazogcmFyaXR5UmFuaywgcmFyaXR5U2NvcmU6ICByYXJpdHlTY29yZSxcbiAgICAgICAgICAgICAgICBzdGF0aXN0aWNhbFJhbms6IHN0YXRpc3RpY2FsUmFuaywgc3RhdGlzdGljYWxTY29yZX1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzZXREYXRhKG9iaik7XG5cbiAgICAgICAgICAgICAgICBsZXQgcHJpY2UgPSBwcmljZXM7XG4gICAgICAgICAgICAgICAgbGV0IGlwZnMgPSAnJztcbiAgICAgICAgICAgICAgICBpZih0b2tlbi5tZXRhZGF0YSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgIGlwZnMgPSB0b2tlbi5nZXRJcGZzRnJvbU1ldGFkYXRhKCk7XG4gICAgICAgICAgICAgICAgICB0b2tlbi5pcGZzID0gaXBmcztcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRva2VuLmlwZnMpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IHR4cyA9IGF3YWl0IGdldFByZXZUeHMoYXNzZXRJZCk7XG5cbiAgICAgICAgICAgICAgICAvLyBtZXRhZGF0YSBkaXNwbGF5ZWQgaW4gdGFibGVcbiAgICAgICAgICAgICAgICBzZXRNZXRhZGF0YShKU09OLnN0cmluZ2lmeSh0b2tlbi5tZXRhZGF0YSkpO1xuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgaWYodG9rZW4uaXBmcyAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgIC8vIG5mdCBpbWFnZVxuICAgICAgICAgICAgICAgICAgc2V0SW1hZ2UoPEltYWdlIGNsYXNzTmFtZSA9IFwibWFpbi1pbWdcIiBhbHQ9ICdubyBpbWFnZScgc3JjID0ge2lwZnN9IHdpZHRoID0gezUwMH0gaGVpZ2h0ID0gezUwMH0vPik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldFRva2VuRGF0YSgpO1xuICAgICAgfSwgW3Byb3BzXSlcbiAgICAgIFxuXG5cbiAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVUb2tlbihhc3NldERhdGEpe1xuICAgICAgbGV0IGFzc2V0TmFtZSA9IGFzc2V0RGF0YS5hc3NldF9uYW1lO1xuICAgICAgbGV0IHBvbGljeSA9IGFzc2V0RGF0YS5wb2xpY3lfaWQ7XG4gICAgICBsZXQgcXVhbnRpdHkgPSBhc3NldERhdGEucXVhbnRpdHk7XG5cbiAgICAgIGxldCB0b2tlbiA9IG5ldyBUb2tlbihhc3NldE5hbWUsIHBvbGljeSwgcXVhbnRpdHkpO1xuICAgICAgbGV0IHRva2VuTWV0YWRhdGEgPSBhd2FpdCB0b2tlbi5nZXRNZXRhZGF0YSgpO1xuICAgICAgdG9rZW4ubWV0YWRhdGEgPSB0b2tlbk1ldGFkYXRhO1xuXG5cblxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cblxuICAgIC8vIGZldGNoIHRva2VuIG1ldGFkYXRhIGZyb20gYmxvY2tmcm9zdFxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRUb2tlbkRhdGEoYXNzZXRJZCl7XG4gICAgICB0cnl7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9jYXJkYW5vLW1haW5uZXQuYmxvY2tmcm9zdC5pby9hcGkvdjAvYXNzZXRzLycrYXNzZXRJZCxcbiAgICAgICAge2hlYWRlcnM6e3Byb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnLCAnY2FjaGUtY29udHJvbCc6ICdtYXgtYWdlPTMxNTM2MDAwJ319KTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gICAgICAgIGlmKGRhdGEuc3RhdHVzICE9IDIwMCl7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldENuZnRBc3NldERhdGEoYXNzZXQpe1xuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm9wZW5jbmZ0LmlvLzEvYXNzZXQvJythc3NldCxcbiAgICAgICAge2hlYWRlcnM6e3Byb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnLCAnY2FjaGUtY29udHJvbCc6ICdtYXgtYWdlPTMxNTM2MDAwJ319KTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gICAgICAgIGlmKGRhdGEuc3RhdHVzIT0gMjAwKXtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZmV0Y2ggdG9rZW4gbWV0YWRhdGEgZnJvbSBibG9ja2Zyb3N0XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UHJldlR4cyhhc3NldElkKXtcbiAgICAgIHRyeXtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2NhcmRhbm8tbWFpbm5ldC5ibG9ja2Zyb3N0LmlvL2FwaS92MC9hc3NldHMvJythc3NldElkKycvdHJhbnNhY3Rpb25zJyxcbiAgICAgICAge2hlYWRlcnM6e3Byb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnLCAnY2FjaGUtY29udHJvbCc6ICdtYXgtYWdlPTMxNTM2MDAwJ319KTtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gICAgICAgIGlmKGRhdGEuc3RhdHVzICE9IDIwMCl7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFByaWNlRGF0YShkYXRhKXtcbiAgICAgIHNldFByaWNlcyhkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuLW1haW5cIj5cbiAgICAgICAgPFByaWNlcyBkYXRhID0ge3NldFByaWNlRGF0YX0vPlxuICAgICAgICA8UG9saWN5IHBvbGljeSA9IHtwb2xpY3l9IHByaWNlcyA9IHtwcmljZXN9Lz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuLWJveFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuLWltYWdlXCI+e2ltYWdlfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuLWRhdGFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuLWRhdGEtaXRlbVwiPlxuICAgICAgICAgICAgICAgIE5hbWU6IHtkYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1kYXRhLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBDcmVhdGVkOiB7ZGF0YS5jcmVhdGVkfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW4tZGF0YS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgRmluZ2VycHJpbnQ6IHtkYXRhLmZpbmdlcnByaW50fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW4tZGF0YS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgUmFyaXR5IFJhbms6IHtkYXRhLnJhcml0eVJhbmt9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1kYXRhLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBTdGF0aXN0aWNhbCBSYW5rOiB7ZGF0YS5zdGF0aXN0aWNhbFJhbmt9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1kYXRhLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBBc3NldCBOYW1lOiB7ZGF0YS5hc3NldE5hbWV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhZGF0YVwiPk1ldGFkYXRhOiA8YnIvPnttZXRhZGF0YX08L2Rpdj5cblxuXG4gICAgPC9kaXY+KVxufVxuZXhwb3J0IGRlZmF1bHQgVG9rZW5EYXRhO1xuIl0sIm5hbWVzIjpbImFzc2V0UHJlZml4IiwiSW1hZ2UiLCJ1c2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVN5bmNFeHRlcm5hbFN0b3JlIiwiTWV0YWRhdGFUYWJsZSIsIlBvbGljeSIsIlByaWNlcyIsIlRva2VuIiwiVG9rZW5EYXRhIiwicHJvcHMiLCJpbWFnZSIsInNldEltYWdlIiwibWV0YWRhdGEiLCJzZXRNZXRhZGF0YSIsImRhdGEiLCJzZXREYXRhIiwibmFtZSIsInBvbGljeSIsImNyZWF0ZWQiLCJhc3NldE5hbWUiLCJmaW5nZXJwcmludCIsInJhcml0eVJhbmsiLCJyYXJpdHlTY29yZSIsInN0YXRpc3RpY2FsUmFuayIsInN0YXRpc3RpY2FsU2NvcmUiLCJzZXRQb2xpY3kiLCJwcmljZXMiLCJzZXRQcmljZXMiLCJ0b2tlbkluZm8iLCJzZXRUb2tlbkluZm8iLCJnZXRUb2tlbkRhdGEiLCJhc3NldElkIiwiY29uc29sZSIsImxvZyIsImFzc2V0RGF0YSIsImxvYWRUb2tlbkRhdGEiLCJzZXREaXNwbGF5IiwidG9rZW4iLCJjcmVhdGVUb2tlbiIsImxhYmVsIiwiYXNzZXRfbmFtZSIsInBvbGljeV9pZCIsIl9hc3NldERhdGEiLCJnZXRDbmZ0QXNzZXREYXRhIiwiY3JlYXRlZERhdGEiLCJjcmVhdGVkX2F0Iiwic3Vic3RyaW5nIiwicmFyaXR5X3JhbmsiLCJyYXJpdHlfc2NvcmUiLCJzdGF0aXN0aWNhbF9yYW5rIiwic3RhdGlzdGljYWxfc2NvcmUiLCJvYmoiLCJwcmljZSIsImlwZnMiLCJnZXRJcGZzRnJvbU1ldGFkYXRhIiwidHhzIiwiZ2V0UHJldlR4cyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjbGFzc05hbWUiLCJhbHQiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsInF1YW50aXR5IiwidG9rZW5NZXRhZGF0YSIsImdldE1ldGFkYXRhIiwiZmV0Y2giLCJoZWFkZXJzIiwicHJvamVjdF9pZCIsInJlcyIsImpzb24iLCJzdGF0dXMiLCJlcnJvciIsImFzc2V0Iiwic2V0UHJpY2VEYXRhIiwiZGl2IiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/tokenData.js\n"));

/***/ })

});