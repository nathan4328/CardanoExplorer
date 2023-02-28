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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next.config */ \"./next.config.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _metadataTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metadataTable */ \"./src/pages/metadataTable.js\");\n/* harmony import */ var _policy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./policy */ \"./src/pages/policy.js\");\n/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prices */ \"./src/pages/prices.js\");\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction TokenData(props) {\n    _s();\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [metadata, setMetadata] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        name: \"\",\n        policy: \"\",\n        created: \"\",\n        assetName: \"\",\n        fingerprint: \"\",\n        rarityRank: \"\",\n        rarityScore: \"\",\n        statisticalRank: \"\",\n        statisticalScore: \"\"\n    });\n    const [policy, setPolicy] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [tokenInfo, setTokenInfo] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const getTokenData = async ()=>{\n            if (props.assetId == null) {\n                console.log(\"asset ID was undefined\");\n            } else {\n                // from url in [token].jsx\n                let assetId = props.assetId;\n                // fetch asset data from blockfrost\n                let assetData = await loadTokenData(assetId);\n                if (assetData == null) {\n                    setDisplay(\"invalid asset id\");\n                } else {\n                    let token = await createToken(assetData);\n                    setTokenInfo(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Asset name:\",\n                            token.asset_name,\n                            \" Policy ID: \",\n                            token.policy_id\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 35,\n                        columnNumber: 30\n                    }, this));\n                    setPolicy(token.policy_id);\n                    let _assetData = await getCnftAssetData(props.assetId);\n                    let createdData = _assetData.created_at.substring(0, 10);\n                    let fingerprint = _assetData.fingerprint.substring(0, 10);\n                    let name = _assetData.name;\n                    let rarityRank = _assetData.rarity_rank;\n                    let rarityScore = _assetData.rarity_score;\n                    let statisticalRank = _assetData.statistical_rank;\n                    let statisticalScore = _assetData.statistical_score;\n                    let obj = {\n                        name: name,\n                        policy: token.policy_id,\n                        created: createdData,\n                        assetName: token.asset_name,\n                        fingerprint: fingerprint,\n                        rarityRank: rarityRank,\n                        rarityScore: rarityScore,\n                        statisticalRank: statisticalRank,\n                        statisticalScore\n                    };\n                    setData(obj);\n                    let price = prices;\n                    console.log(price);\n                    // metadata displayed in table\n                    setMetadata(JSON.stringify(token.metadata));\n                    // nft image\n                    setImage(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: \"main-img\",\n                        alt: \"no image\",\n                        src: token.ipfs,\n                        width: 500,\n                        height: 500\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 62,\n                        columnNumber: 26\n                    }, this));\n                }\n            }\n        };\n        getTokenData();\n    }, [\n        props\n    ]);\n    async function createToken(assetData) {\n        let assetName = assetData.asset_name;\n        let policy = assetData.policy_id;\n        let quantity = assetData.quantity;\n        let token = new _token__WEBPACK_IMPORTED_MODULE_7__[\"default\"](assetName, policy, quantity);\n        let tokenMetadata = await token.getMetadata();\n        token.metadata = tokenMetadata;\n        if (tokenMetadata != null) {\n            let ipfs = token.getIpfsFromMetadata();\n            token.ipfs = ipfs;\n        }\n        return token;\n    }\n    // fetch token metadata from blockfrost\n    async function loadTokenData(assetId) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\" + assetId, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    async function getCnftAssetData(asset) {\n        try {\n            const data = await fetch(\"https://api.opencnft.io/1/asset/\" + asset, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    // fetch token metadata from blockfrost\n    async function getPrevTxs(assetId) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\" + assetId + \"/transactions\", {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    function setPriceData(data) {\n        setPrices(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"token-main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prices__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                data: setPriceData\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 138,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_policy__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                policy: policy,\n                prices: prices\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 139,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"token-box\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"token-image\",\n                        children: image\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 141,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"token-data\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Name: \",\n                                    data.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 143,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Created: \",\n                                    data.created\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 146,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Fingerprint: \",\n                                    data.fingerprint\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 149,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Rarity Rank: \",\n                                    data.rarityRank\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 152,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Statistical Rank: \",\n                                    data.statisticalRank\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 155,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Asset Name: \",\n                                    data.assetName\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 158,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 142,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 140,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"metadata\",\n                children: [\n                    \"Metadata: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 163,\n                        columnNumber: 45\n                    }, this),\n                    metadata\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 163,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n        lineNumber: 137,\n        columnNumber: 7\n    }, this);\n}\n_s(TokenData, \"ezYOd6N8iUFtBt2/1Q6CbzxzyhQ=\");\n_c = TokenData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TokenData);\nvar _c;\n$RefreshReg$(_c, \"TokenData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEIsV0FBVTs7b0JBQVc7a0NBQVUsOERBQUNxQjs7Ozs7b0JBQUtoRTs7Ozs7Ozs7Ozs7OztBQUlsRDtHQTlKU0o7S0FBQUE7QUErSlQsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Rva2VuRGF0YS5qcz82ZjVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFzc2V0UHJlZml4IH0gZnJvbSBcIm5leHQuY29uZmlnXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlU3luY0V4dGVybmFsU3RvcmUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNZXRhZGF0YVRhYmxlIGZyb20gXCIuL21ldGFkYXRhVGFibGVcIjtcbmltcG9ydCBQb2xpY3kgZnJvbSBcIi4vcG9saWN5XCI7XG5pbXBvcnQgUHJpY2VzIGZyb20gXCIuL3ByaWNlc1wiO1xuaW1wb3J0IFRva2VuIGZyb20gXCIuL3Rva2VuXCI7XG5cbmZ1bmN0aW9uIFRva2VuRGF0YSAocHJvcHMpIHtcblxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFttZXRhZGF0YSwgc2V0TWV0YWRhdGFdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe25hbWU6ICcnLCBwb2xpY3k6JycsY3JlYXRlZDonJywgYXNzZXROYW1lOicnLCBmaW5nZXJwcmludDonJywgcmFyaXR5UmFuazonJyxyYXJpdHlTY29yZTonJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpc3RpY2FsUmFuazonJywgc3RhdGlzdGljYWxTY29yZTonJ30pO1xuICBjb25zdCBbcG9saWN5LCBzZXRQb2xpY3ldID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3ByaWNlcywgc2V0UHJpY2VzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt0b2tlbkluZm8sIHNldFRva2VuSW5mb10gPSB1c2VTdGF0ZSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0VG9rZW5EYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGlmKHByb3BzLmFzc2V0SWQgPT0gbnVsbCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYXNzZXQgSUQgd2FzIHVuZGVmaW5lZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgIC8vIGZyb20gdXJsIGluIFt0b2tlbl0uanN4XG4gICAgICAgICAgICAgbGV0IGFzc2V0SWQgPSBwcm9wcy5hc3NldElkO1xuXG4gICAgICAgICAgICAgLy8gZmV0Y2ggYXNzZXQgZGF0YSBmcm9tIGJsb2NrZnJvc3RcbiAgICAgICAgICAgICBsZXQgYXNzZXREYXRhID0gYXdhaXQgbG9hZFRva2VuRGF0YShhc3NldElkKTtcbiAgICAgICAgICAgICBpZihhc3NldERhdGEgPT0gbnVsbCl7XG4gICAgICAgICAgICAgICBzZXREaXNwbGF5KCdpbnZhbGlkIGFzc2V0IGlkJylcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBhd2FpdCBjcmVhdGVUb2tlbihhc3NldERhdGEpOyBcbiAgICAgICAgICAgICAgICBzZXRUb2tlbkluZm8oPGxhYmVsPkFzc2V0IG5hbWU6e3Rva2VuLmFzc2V0X25hbWV9IFBvbGljeSBJRDoge3Rva2VuLnBvbGljeV9pZH08L2xhYmVsPik7XG4gICAgICAgICAgICAgICAgc2V0UG9saWN5KHRva2VuLnBvbGljeV9pZCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgX2Fzc2V0RGF0YSA9IGF3YWl0IGdldENuZnRBc3NldERhdGEocHJvcHMuYXNzZXRJZCk7XG4gICAgICAgICAgICAgICAgbGV0IGNyZWF0ZWREYXRhID0gKF9hc3NldERhdGEuY3JlYXRlZF9hdCkuc3Vic3RyaW5nKDAsMTApO1xuICAgICAgICAgICAgICAgIGxldCBmaW5nZXJwcmludCA9IChfYXNzZXREYXRhLmZpbmdlcnByaW50KS5zdWJzdHJpbmcoMCwxMCk7XG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBfYXNzZXREYXRhLm5hbWU7XG4gICAgICAgICAgICAgICAgbGV0IHJhcml0eVJhbmsgPSBfYXNzZXREYXRhLnJhcml0eV9yYW5rO1xuICAgICAgICAgICAgICAgIGxldCByYXJpdHlTY29yZSA9IF9hc3NldERhdGEucmFyaXR5X3Njb3JlO1xuICAgICAgICAgICAgICAgIGxldCBzdGF0aXN0aWNhbFJhbmsgPSBfYXNzZXREYXRhLnN0YXRpc3RpY2FsX3Jhbms7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXRpc3RpY2FsU2NvcmUgPSBfYXNzZXREYXRhLnN0YXRpc3RpY2FsX3Njb3JlO1xuXG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtuYW1lOiBuYW1lLCBwb2xpY3k6IHRva2VuLnBvbGljeV9pZCwgY3JlYXRlZDogY3JlYXRlZERhdGEsIGFzc2V0TmFtZTogdG9rZW4uYXNzZXRfbmFtZSxcbiAgICAgICAgICAgICAgICAgIGZpbmdlcnByaW50OiBmaW5nZXJwcmludCwgcmFyaXR5UmFuazogcmFyaXR5UmFuaywgcmFyaXR5U2NvcmU6ICByYXJpdHlTY29yZSxcbiAgICAgICAgICAgICAgICBzdGF0aXN0aWNhbFJhbms6IHN0YXRpc3RpY2FsUmFuaywgc3RhdGlzdGljYWxTY29yZX1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzZXREYXRhKG9iaik7XG5cbiAgICAgICAgICAgICAgICBsZXQgcHJpY2UgPSBwcmljZXM7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJpY2UpO1xuXG5cbiAgICAgICAgICAgICAgICAvLyBtZXRhZGF0YSBkaXNwbGF5ZWQgaW4gdGFibGVcbiAgICAgICAgICAgICAgICBzZXRNZXRhZGF0YShKU09OLnN0cmluZ2lmeSh0b2tlbi5tZXRhZGF0YSkpO1xuXG5cbiAgICAgICAgICAgICAgICAvLyBuZnQgaW1hZ2VcbiAgICAgICAgICAgICAgICBzZXRJbWFnZSg8SW1hZ2UgY2xhc3NOYW1lID0gXCJtYWluLWltZ1wiIGFsdD0gJ25vIGltYWdlJyBzcmMgPSB7dG9rZW4uaXBmc30gd2lkdGggPSB7NTAwfSBoZWlnaHQgPSB7NTAwfS8+KTtcbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2V0VG9rZW5EYXRhKCk7XG4gICAgICB9LCBbcHJvcHNdKVxuXG5cbiAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVUb2tlbihhc3NldERhdGEpe1xuICAgICAgbGV0IGFzc2V0TmFtZSA9IGFzc2V0RGF0YS5hc3NldF9uYW1lO1xuICAgICAgbGV0IHBvbGljeSA9IGFzc2V0RGF0YS5wb2xpY3lfaWQ7XG4gICAgICBsZXQgcXVhbnRpdHkgPSBhc3NldERhdGEucXVhbnRpdHk7XG5cbiAgICAgIGxldCB0b2tlbiA9IG5ldyBUb2tlbihhc3NldE5hbWUsIHBvbGljeSwgcXVhbnRpdHkpO1xuICAgICAgbGV0IHRva2VuTWV0YWRhdGEgPSBhd2FpdCB0b2tlbi5nZXRNZXRhZGF0YSgpO1xuICAgICAgdG9rZW4ubWV0YWRhdGEgPSB0b2tlbk1ldGFkYXRhO1xuXG4gICAgICBpZih0b2tlbk1ldGFkYXRhICE9IG51bGwpe1xuICAgICAgICBsZXQgaXBmcyA9IHRva2VuLmdldElwZnNGcm9tTWV0YWRhdGEoKTtcbiAgICAgICAgdG9rZW4uaXBmcyA9IGlwZnM7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9XG5cbiAgICAvLyBmZXRjaCB0b2tlbiBtZXRhZGF0YSBmcm9tIGJsb2NrZnJvc3RcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkVG9rZW5EYXRhKGFzc2V0SWQpe1xuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vY2FyZGFuby1tYWlubmV0LmJsb2NrZnJvc3QuaW8vYXBpL3YwL2Fzc2V0cy8nK2Fzc2V0SWQsXG4gICAgICAgIHtoZWFkZXJzOntwcm9qZWN0X2lkOiAnbWFpbm5ldG9XNjFZWVNpT29MU2FOUTZkelRya0FHNGF6WFZJcnZoJywgJ2NhY2hlLWNvbnRyb2wnOiAnbWF4LWFnZT0zMTUzNjAwMCd9fSk7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRhdGEuanNvbigpO1xuICAgICAgICBpZihkYXRhLnN0YXR1cyAhPSAyMDApe1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRDbmZ0QXNzZXREYXRhKGFzc2V0KXtcbiAgICAgIHRyeXtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5vcGVuY25mdC5pby8xL2Fzc2V0LycrYXNzZXQsXG4gICAgICAgIHtoZWFkZXJzOntwcm9qZWN0X2lkOiAnbWFpbm5ldG9XNjFZWVNpT29MU2FOUTZkelRya0FHNGF6WFZJcnZoJywgJ2NhY2hlLWNvbnRyb2wnOiAnbWF4LWFnZT0zMTUzNjAwMCd9fSk7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRhdGEuanNvbigpO1xuICAgICAgICBpZihkYXRhLnN0YXR1cyE9IDIwMCl7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGZldGNoIHRva2VuIG1ldGFkYXRhIGZyb20gYmxvY2tmcm9zdFxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFByZXZUeHMoYXNzZXRJZCl7XG4gICAgICB0cnl7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9jYXJkYW5vLW1haW5uZXQuYmxvY2tmcm9zdC5pby9hcGkvdjAvYXNzZXRzLycrYXNzZXRJZCsnL3RyYW5zYWN0aW9ucycsXG4gICAgICAgIHtoZWFkZXJzOntwcm9qZWN0X2lkOiAnbWFpbm5ldG9XNjFZWVNpT29MU2FOUTZkelRya0FHNGF6WFZJcnZoJywgJ2NhY2hlLWNvbnRyb2wnOiAnbWF4LWFnZT0zMTUzNjAwMCd9fSk7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRhdGEuanNvbigpO1xuICAgICAgICBpZihkYXRhLnN0YXR1cyAhPSAyMDApe1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQcmljZURhdGEoZGF0YSl7XG4gICAgICBzZXRQcmljZXMoZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1tYWluXCI+XG4gICAgICAgIDxQcmljZXMgZGF0YSA9IHtzZXRQcmljZURhdGF9Lz5cbiAgICAgICAgPFBvbGljeSBwb2xpY3kgPSB7cG9saWN5fSBwcmljZXMgPSB7cHJpY2VzfS8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1ib3hcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1pbWFnZVwiPntpbWFnZX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1kYXRhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1kYXRhLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBOYW1lOiB7ZGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW4tZGF0YS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgQ3JlYXRlZDoge2RhdGEuY3JlYXRlZH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuLWRhdGEtaXRlbVwiPlxuICAgICAgICAgICAgICAgIEZpbmdlcnByaW50OiB7ZGF0YS5maW5nZXJwcmludH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuLWRhdGEtaXRlbVwiPlxuICAgICAgICAgICAgICAgIFJhcml0eSBSYW5rOiB7ZGF0YS5yYXJpdHlSYW5rfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW4tZGF0YS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgU3RhdGlzdGljYWwgUmFuazoge2RhdGEuc3RhdGlzdGljYWxSYW5rfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW4tZGF0YS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgQXNzZXQgTmFtZToge2RhdGEuYXNzZXROYW1lfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YWRhdGFcIj5NZXRhZGF0YTogPGJyLz57bWV0YWRhdGF9PC9kaXY+XG5cblxuICAgIDwvZGl2Pilcbn1cbmV4cG9ydCBkZWZhdWx0IFRva2VuRGF0YTtcbiJdLCJuYW1lcyI6WyJhc3NldFByZWZpeCIsIkltYWdlIiwidXNlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTeW5jRXh0ZXJuYWxTdG9yZSIsIk1ldGFkYXRhVGFibGUiLCJQb2xpY3kiLCJQcmljZXMiLCJUb2tlbiIsIlRva2VuRGF0YSIsInByb3BzIiwiaW1hZ2UiLCJzZXRJbWFnZSIsIm1ldGFkYXRhIiwic2V0TWV0YWRhdGEiLCJkYXRhIiwic2V0RGF0YSIsIm5hbWUiLCJwb2xpY3kiLCJjcmVhdGVkIiwiYXNzZXROYW1lIiwiZmluZ2VycHJpbnQiLCJyYXJpdHlSYW5rIiwicmFyaXR5U2NvcmUiLCJzdGF0aXN0aWNhbFJhbmsiLCJzdGF0aXN0aWNhbFNjb3JlIiwic2V0UG9saWN5IiwicHJpY2VzIiwic2V0UHJpY2VzIiwidG9rZW5JbmZvIiwic2V0VG9rZW5JbmZvIiwiZ2V0VG9rZW5EYXRhIiwiYXNzZXRJZCIsImNvbnNvbGUiLCJsb2ciLCJhc3NldERhdGEiLCJsb2FkVG9rZW5EYXRhIiwic2V0RGlzcGxheSIsInRva2VuIiwiY3JlYXRlVG9rZW4iLCJsYWJlbCIsImFzc2V0X25hbWUiLCJwb2xpY3lfaWQiLCJfYXNzZXREYXRhIiwiZ2V0Q25mdEFzc2V0RGF0YSIsImNyZWF0ZWREYXRhIiwiY3JlYXRlZF9hdCIsInN1YnN0cmluZyIsInJhcml0eV9yYW5rIiwicmFyaXR5X3Njb3JlIiwic3RhdGlzdGljYWxfcmFuayIsInN0YXRpc3RpY2FsX3Njb3JlIiwib2JqIiwicHJpY2UiLCJKU09OIiwic3RyaW5naWZ5IiwiY2xhc3NOYW1lIiwiYWx0Iiwic3JjIiwiaXBmcyIsIndpZHRoIiwiaGVpZ2h0IiwicXVhbnRpdHkiLCJ0b2tlbk1ldGFkYXRhIiwiZ2V0TWV0YWRhdGEiLCJnZXRJcGZzRnJvbU1ldGFkYXRhIiwiZmV0Y2giLCJoZWFkZXJzIiwicHJvamVjdF9pZCIsInJlcyIsImpzb24iLCJzdGF0dXMiLCJlcnJvciIsImFzc2V0IiwiZ2V0UHJldlR4cyIsInNldFByaWNlRGF0YSIsImRpdiIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/tokenData.js\n"));

/***/ })

});