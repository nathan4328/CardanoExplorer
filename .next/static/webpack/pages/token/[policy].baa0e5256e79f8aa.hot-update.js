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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next.config */ \"./next.config.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _metadataTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metadataTable */ \"./src/pages/metadataTable.js\");\n/* harmony import */ var _policy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./policy */ \"./src/pages/policy.js\");\n/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prices */ \"./src/pages/prices.js\");\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction TokenData(props) {\n    _s();\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [metadata, setMetadata] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        name: \"\",\n        policy: \"\",\n        created: \"\",\n        assetName: \"\",\n        fingerprint: \"\",\n        rarityRank: \"\",\n        rarityScore: \"\",\n        statisticalRank: \"\",\n        statisticalScore: \"\"\n    });\n    const [policy, setPolicy] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [tokenInfo, setTokenInfo] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const getTokenData = async ()=>{\n            if (props.assetId == null) {\n                console.log(\"asset ID was undefined\");\n            } else {\n                // from url in [token].jsx\n                let assetId = props.assetId;\n                // fetch asset data from blockfrost\n                let assetData = await loadTokenData(assetId);\n                if (assetData == null) {\n                    setDisplay(\"invalid asset id\");\n                } else {\n                    let token = await createToken(assetData);\n                    setTokenInfo(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Asset name:\",\n                            token.asset_name,\n                            \" Policy ID: \",\n                            token.policy_id\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 35,\n                        columnNumber: 30\n                    }, this));\n                    setPolicy(token.policy_id);\n                    let _assetData = await getCnftAssetData(props.assetId);\n                    let createdData = _assetData.created_at.substring(0, 10);\n                    let fingerprint = _assetData.fingerprint.substring(0, 10);\n                    let name = _assetData.name;\n                    let rarityRank = _assetData.rarity_rank;\n                    let rarityScore = _assetData.rarity_score;\n                    let statisticalRank = _assetData.statistical_rank;\n                    let statisticalScore = _assetData.statistical_score;\n                    let obj = {\n                        name: name,\n                        policy: token.policy_id,\n                        created: createdData,\n                        assetName: token.asset_name,\n                        fingerprint: fingerprint,\n                        rarityRank: rarityRank,\n                        rarityScore: rarityScore,\n                        statisticalRank: statisticalRank,\n                        statisticalScore\n                    };\n                    setData(obj);\n                    let price = prices;\n                    console.log(token.ipfs);\n                    let txs = await getPrevTxs(assetId);\n                    // metadata displayed in table\n                    setMetadata(JSON.stringify(token.metadata));\n                    // nft image\n                    setImage(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: \"main-img\",\n                        alt: \"no image\",\n                        src: token.ipfs,\n                        width: 500,\n                        height: 500\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 63,\n                        columnNumber: 26\n                    }, this));\n                }\n            }\n        };\n        getTokenData();\n    }, [\n        props\n    ]);\n    async function createToken(assetData) {\n        let assetName = assetData.asset_name;\n        let policy = assetData.policy_id;\n        let quantity = assetData.quantity;\n        let token = new _token__WEBPACK_IMPORTED_MODULE_7__[\"default\"](assetName, policy, quantity);\n        let tokenMetadata = await token.getMetadata();\n        token.metadata = tokenMetadata;\n        return token;\n    }\n    // fetch token metadata from blockfrost\n    async function loadTokenData(assetId) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\" + assetId, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    async function getCnftAssetData(asset) {\n        try {\n            const data = await fetch(\"https://api.opencnft.io/1/asset/\" + asset, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    // fetch token metadata from blockfrost\n    async function getPrevTxs(assetId) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\" + assetId + \"/transactions\", {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    function setPriceData(data) {\n        setPrices(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"token-main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prices__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                data: setPriceData\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 134,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_policy__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                policy: policy,\n                prices: prices\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 135,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"token-box\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"token-image\",\n                        children: image\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 137,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"token-data\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Name: \",\n                                    data.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 139,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Created: \",\n                                    data.created\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 142,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Fingerprint: \",\n                                    data.fingerprint\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 145,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Rarity Rank: \",\n                                    data.rarityRank\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 148,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Statistical Rank: \",\n                                    data.statisticalRank\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 151,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Asset Name: \",\n                                    data.assetName\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 154,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 138,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 136,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"metadata\",\n                children: [\n                    \"Metadata: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 159,\n                        columnNumber: 45\n                    }, this),\n                    metadata\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 159,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n        lineNumber: 133,\n        columnNumber: 7\n    }, this);\n}\n_s(TokenData, \"ezYOd6N8iUFtBt2/1Q6CbzxzyhQ=\");\n_c = TokenData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TokenData);\nvar _c;\n$RefreshReg$(_c, \"TokenData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJbEQ7R0ExSlNKO0tBQUFBO0FBMkpULCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy90b2tlbkRhdGEuanM/NmY1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhc3NldFByZWZpeCB9IGZyb20gXCJuZXh0LmNvbmZpZ1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2UsIHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVN5bmNFeHRlcm5hbFN0b3JlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTWV0YWRhdGFUYWJsZSBmcm9tIFwiLi9tZXRhZGF0YVRhYmxlXCI7XG5pbXBvcnQgUG9saWN5IGZyb20gXCIuL3BvbGljeVwiO1xuaW1wb3J0IFByaWNlcyBmcm9tIFwiLi9wcmljZXNcIjtcbmltcG9ydCBUb2tlbiBmcm9tIFwiLi90b2tlblwiO1xuXG5mdW5jdGlvbiBUb2tlbkRhdGEgKHByb3BzKSB7XG5cbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbbWV0YWRhdGEsIHNldE1ldGFkYXRhXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHtuYW1lOiAnJywgcG9saWN5OicnLGNyZWF0ZWQ6JycsIGFzc2V0TmFtZTonJywgZmluZ2VycHJpbnQ6JycsIHJhcml0eVJhbms6JycscmFyaXR5U2NvcmU6JycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aXN0aWNhbFJhbms6JycsIHN0YXRpc3RpY2FsU2NvcmU6Jyd9KTtcbiAgY29uc3QgW3BvbGljeSwgc2V0UG9saWN5XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtwcmljZXMsIHNldFByaWNlc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdG9rZW5JbmZvLCBzZXRUb2tlbkluZm9dID0gdXNlU3RhdGUoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdldFRva2VuRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICBpZihwcm9wcy5hc3NldElkID09IG51bGwpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Fzc2V0IElEIHdhcyB1bmRlZmluZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAvLyBmcm9tIHVybCBpbiBbdG9rZW5dLmpzeFxuICAgICAgICAgICAgIGxldCBhc3NldElkID0gcHJvcHMuYXNzZXRJZDtcblxuICAgICAgICAgICAgIC8vIGZldGNoIGFzc2V0IGRhdGEgZnJvbSBibG9ja2Zyb3N0XG4gICAgICAgICAgICAgbGV0IGFzc2V0RGF0YSA9IGF3YWl0IGxvYWRUb2tlbkRhdGEoYXNzZXRJZCk7XG4gICAgICAgICAgICAgaWYoYXNzZXREYXRhID09IG51bGwpe1xuICAgICAgICAgICAgICAgc2V0RGlzcGxheSgnaW52YWxpZCBhc3NldCBpZCcpXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbGV0IHRva2VuID0gYXdhaXQgY3JlYXRlVG9rZW4oYXNzZXREYXRhKTsgXG4gICAgICAgICAgICAgICAgc2V0VG9rZW5JbmZvKDxsYWJlbD5Bc3NldCBuYW1lOnt0b2tlbi5hc3NldF9uYW1lfSBQb2xpY3kgSUQ6IHt0b2tlbi5wb2xpY3lfaWR9PC9sYWJlbD4pO1xuICAgICAgICAgICAgICAgIHNldFBvbGljeSh0b2tlbi5wb2xpY3lfaWQpO1xuXG4gICAgICAgICAgICAgICAgbGV0IF9hc3NldERhdGEgPSBhd2FpdCBnZXRDbmZ0QXNzZXREYXRhKHByb3BzLmFzc2V0SWQpO1xuICAgICAgICAgICAgICAgIGxldCBjcmVhdGVkRGF0YSA9IChfYXNzZXREYXRhLmNyZWF0ZWRfYXQpLnN1YnN0cmluZygwLDEwKTtcbiAgICAgICAgICAgICAgICBsZXQgZmluZ2VycHJpbnQgPSAoX2Fzc2V0RGF0YS5maW5nZXJwcmludCkuc3Vic3RyaW5nKDAsMTApO1xuICAgICAgICAgICAgICAgIGxldCBuYW1lID0gX2Fzc2V0RGF0YS5uYW1lO1xuICAgICAgICAgICAgICAgIGxldCByYXJpdHlSYW5rID0gX2Fzc2V0RGF0YS5yYXJpdHlfcmFuaztcbiAgICAgICAgICAgICAgICBsZXQgcmFyaXR5U2NvcmUgPSBfYXNzZXREYXRhLnJhcml0eV9zY29yZTtcbiAgICAgICAgICAgICAgICBsZXQgc3RhdGlzdGljYWxSYW5rID0gX2Fzc2V0RGF0YS5zdGF0aXN0aWNhbF9yYW5rO1xuICAgICAgICAgICAgICAgIGxldCBzdGF0aXN0aWNhbFNjb3JlID0gX2Fzc2V0RGF0YS5zdGF0aXN0aWNhbF9zY29yZTtcblxuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7bmFtZTogbmFtZSwgcG9saWN5OiB0b2tlbi5wb2xpY3lfaWQsIGNyZWF0ZWQ6IGNyZWF0ZWREYXRhLCBhc3NldE5hbWU6IHRva2VuLmFzc2V0X25hbWUsXG4gICAgICAgICAgICAgICAgICBmaW5nZXJwcmludDogZmluZ2VycHJpbnQsIHJhcml0eVJhbms6IHJhcml0eVJhbmssIHJhcml0eVNjb3JlOiAgcmFyaXR5U2NvcmUsXG4gICAgICAgICAgICAgICAgc3RhdGlzdGljYWxSYW5rOiBzdGF0aXN0aWNhbFJhbmssIHN0YXRpc3RpY2FsU2NvcmV9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2V0RGF0YShvYmopO1xuXG4gICAgICAgICAgICAgICAgbGV0IHByaWNlID0gcHJpY2VzO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRva2VuLmlwZnMpO1xuXG4gICAgICAgICAgICAgICAgbGV0IHR4cyA9IGF3YWl0IGdldFByZXZUeHMoYXNzZXRJZCk7XG5cbiAgICAgICAgICAgICAgICAvLyBtZXRhZGF0YSBkaXNwbGF5ZWQgaW4gdGFibGVcbiAgICAgICAgICAgICAgICBzZXRNZXRhZGF0YShKU09OLnN0cmluZ2lmeSh0b2tlbi5tZXRhZGF0YSkpO1xuXG5cbiAgICAgICAgICAgICAgICAvLyBuZnQgaW1hZ2VcbiAgICAgICAgICAgICAgICBzZXRJbWFnZSg8SW1hZ2UgY2xhc3NOYW1lID0gXCJtYWluLWltZ1wiIGFsdD0gJ25vIGltYWdlJyBzcmMgPSB7dG9rZW4uaXBmc30gd2lkdGggPSB7NTAwfSBoZWlnaHQgPSB7NTAwfS8+KTtcbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2V0VG9rZW5EYXRhKCk7XG4gICAgICB9LCBbcHJvcHNdKVxuXG5cbiAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVUb2tlbihhc3NldERhdGEpe1xuICAgICAgbGV0IGFzc2V0TmFtZSA9IGFzc2V0RGF0YS5hc3NldF9uYW1lO1xuICAgICAgbGV0IHBvbGljeSA9IGFzc2V0RGF0YS5wb2xpY3lfaWQ7XG4gICAgICBsZXQgcXVhbnRpdHkgPSBhc3NldERhdGEucXVhbnRpdHk7XG5cbiAgICAgIGxldCB0b2tlbiA9IG5ldyBUb2tlbihhc3NldE5hbWUsIHBvbGljeSwgcXVhbnRpdHkpO1xuICAgICAgbGV0IHRva2VuTWV0YWRhdGEgPSBhd2FpdCB0b2tlbi5nZXRNZXRhZGF0YSgpO1xuICAgICAgdG9rZW4ubWV0YWRhdGEgPSB0b2tlbk1ldGFkYXRhO1xuXG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfVxuXG4gICAgLy8gZmV0Y2ggdG9rZW4gbWV0YWRhdGEgZnJvbSBibG9ja2Zyb3N0XG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZFRva2VuRGF0YShhc3NldElkKXtcbiAgICAgIHRyeXtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2NhcmRhbm8tbWFpbm5ldC5ibG9ja2Zyb3N0LmlvL2FwaS92MC9hc3NldHMvJythc3NldElkLFxuICAgICAgICB7aGVhZGVyczp7cHJvamVjdF9pZDogJ21haW5uZXRvVzYxWVlTaU9vTFNhTlE2ZHpUcmtBRzRhelhWSXJ2aCcsICdjYWNoZS1jb250cm9sJzogJ21heC1hZ2U9MzE1MzYwMDAnfX0pO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgICAgICAgaWYoZGF0YS5zdGF0dXMgIT0gMjAwKXtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0Q25mdEFzc2V0RGF0YShhc3NldCl7XG4gICAgICB0cnl7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkub3BlbmNuZnQuaW8vMS9hc3NldC8nK2Fzc2V0LFxuICAgICAgICB7aGVhZGVyczp7cHJvamVjdF9pZDogJ21haW5uZXRvVzYxWVlTaU9vTFNhTlE2ZHpUcmtBRzRhelhWSXJ2aCcsICdjYWNoZS1jb250cm9sJzogJ21heC1hZ2U9MzE1MzYwMDAnfX0pO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgICAgICAgaWYoZGF0YS5zdGF0dXMhPSAyMDApe1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBmZXRjaCB0b2tlbiBtZXRhZGF0YSBmcm9tIGJsb2NrZnJvc3RcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRQcmV2VHhzKGFzc2V0SWQpe1xuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vY2FyZGFuby1tYWlubmV0LmJsb2NrZnJvc3QuaW8vYXBpL3YwL2Fzc2V0cy8nK2Fzc2V0SWQrJy90cmFuc2FjdGlvbnMnLFxuICAgICAgICB7aGVhZGVyczp7cHJvamVjdF9pZDogJ21haW5uZXRvVzYxWVlTaU9vTFNhTlE2ZHpUcmtBRzRhelhWSXJ2aCcsICdjYWNoZS1jb250cm9sJzogJ21heC1hZ2U9MzE1MzYwMDAnfX0pO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgICAgICAgaWYoZGF0YS5zdGF0dXMgIT0gMjAwKXtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0UHJpY2VEYXRhKGRhdGEpe1xuICAgICAgc2V0UHJpY2VzKGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW4tbWFpblwiPlxuICAgICAgICA8UHJpY2VzIGRhdGEgPSB7c2V0UHJpY2VEYXRhfS8+XG4gICAgICAgIDxQb2xpY3kgcG9saWN5ID0ge3BvbGljeX0gcHJpY2VzID0ge3ByaWNlc30vPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW4tYm94XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW4taW1hZ2VcIj57aW1hZ2V9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW4tZGF0YVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW4tZGF0YS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgTmFtZToge2RhdGEubmFtZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuLWRhdGEtaXRlbVwiPlxuICAgICAgICAgICAgICAgIENyZWF0ZWQ6IHtkYXRhLmNyZWF0ZWR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1kYXRhLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBGaW5nZXJwcmludDoge2RhdGEuZmluZ2VycHJpbnR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1kYXRhLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBSYXJpdHkgUmFuazoge2RhdGEucmFyaXR5UmFua31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuLWRhdGEtaXRlbVwiPlxuICAgICAgICAgICAgICAgIFN0YXRpc3RpY2FsIFJhbms6IHtkYXRhLnN0YXRpc3RpY2FsUmFua31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuLWRhdGEtaXRlbVwiPlxuICAgICAgICAgICAgICAgIEFzc2V0IE5hbWU6IHtkYXRhLmFzc2V0TmFtZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFkYXRhXCI+TWV0YWRhdGE6IDxici8+e21ldGFkYXRhfTwvZGl2PlxuXG5cbiAgICA8L2Rpdj4pXG59XG5leHBvcnQgZGVmYXVsdCBUb2tlbkRhdGE7XG4iXSwibmFtZXMiOlsiYXNzZXRQcmVmaXgiLCJJbWFnZSIsInVzZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU3luY0V4dGVybmFsU3RvcmUiLCJNZXRhZGF0YVRhYmxlIiwiUG9saWN5IiwiUHJpY2VzIiwiVG9rZW4iLCJUb2tlbkRhdGEiLCJwcm9wcyIsImltYWdlIiwic2V0SW1hZ2UiLCJtZXRhZGF0YSIsInNldE1ldGFkYXRhIiwiZGF0YSIsInNldERhdGEiLCJuYW1lIiwicG9saWN5IiwiY3JlYXRlZCIsImFzc2V0TmFtZSIsImZpbmdlcnByaW50IiwicmFyaXR5UmFuayIsInJhcml0eVNjb3JlIiwic3RhdGlzdGljYWxSYW5rIiwic3RhdGlzdGljYWxTY29yZSIsInNldFBvbGljeSIsInByaWNlcyIsInNldFByaWNlcyIsInRva2VuSW5mbyIsInNldFRva2VuSW5mbyIsImdldFRva2VuRGF0YSIsImFzc2V0SWQiLCJjb25zb2xlIiwibG9nIiwiYXNzZXREYXRhIiwibG9hZFRva2VuRGF0YSIsInNldERpc3BsYXkiLCJ0b2tlbiIsImNyZWF0ZVRva2VuIiwibGFiZWwiLCJhc3NldF9uYW1lIiwicG9saWN5X2lkIiwiX2Fzc2V0RGF0YSIsImdldENuZnRBc3NldERhdGEiLCJjcmVhdGVkRGF0YSIsImNyZWF0ZWRfYXQiLCJzdWJzdHJpbmciLCJyYXJpdHlfcmFuayIsInJhcml0eV9zY29yZSIsInN0YXRpc3RpY2FsX3JhbmsiLCJzdGF0aXN0aWNhbF9zY29yZSIsIm9iaiIsInByaWNlIiwiaXBmcyIsInR4cyIsImdldFByZXZUeHMiLCJKU09OIiwic3RyaW5naWZ5IiwiY2xhc3NOYW1lIiwiYWx0Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJxdWFudGl0eSIsInRva2VuTWV0YWRhdGEiLCJnZXRNZXRhZGF0YSIsImZldGNoIiwiaGVhZGVycyIsInByb2plY3RfaWQiLCJyZXMiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiLCJhc3NldCIsInNldFByaWNlRGF0YSIsImRpdiIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/tokenData.js\n"));

/***/ })

});