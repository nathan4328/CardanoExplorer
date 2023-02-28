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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next.config */ \"./next.config.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _metadataTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metadataTable */ \"./src/pages/metadataTable.js\");\n/* harmony import */ var _policy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./policy */ \"./src/pages/policy.js\");\n/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prices */ \"./src/pages/prices.js\");\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction TokenData(props) {\n    _s();\n    const [ipfs, setIpfs] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"/typhon.svg\");\n    const [metadata, setMetadata] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        name: \"\",\n        policy: \"\",\n        created: \"\",\n        assetName: \"\",\n        fingerprint: \"\",\n        rarityRank: \"\",\n        rarityScore: \"\",\n        statisticalRank: \"\",\n        statisticalScore: \"\"\n    });\n    const [policy, setPolicy] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [tokenInfo, setTokenInfo] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const getTokenData = async ()=>{\n            if (props.assetId == null) {\n                console.log(\"asset ID was undefined\");\n            } else {\n                // from url in [token].jsx\n                let assetId = props.assetId;\n                // fetch asset data from blockfrost\n                let assetData = await loadTokenData(assetId);\n                if (assetData == null) {\n                    setDisplay(\"invalid asset id\");\n                } else {\n                    let token = await createToken(assetData);\n                    setTokenInfo(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Asset name:\",\n                            token.asset_name,\n                            \" Policy ID: \",\n                            token.policy_id\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 35,\n                        columnNumber: 30\n                    }, this));\n                    setPolicy(token.policy_id);\n                    let _assetData = await getCnftAssetData(props.assetId);\n                    let createdData = _assetData.created_at.substring(0, 10);\n                    let fingerprint = _assetData.fingerprint.substring(0, 10);\n                    let name = _assetData.name;\n                    let rarityRank = _assetData.rarity_rank;\n                    let rarityScore = _assetData.rarity_score;\n                    let statisticalRank = _assetData.statistical_rank;\n                    let statisticalScore = _assetData.statistical_score;\n                    let obj = {\n                        name: name,\n                        policy: token.policy_id,\n                        created: createdData,\n                        assetName: token.asset_name,\n                        fingerprint: fingerprint,\n                        rarityRank: rarityRank,\n                        rarityScore: rarityScore,\n                        statisticalRank: statisticalRank,\n                        statisticalScore\n                    };\n                    setData(obj);\n                    let price = prices;\n                    let ipfs = \"\";\n                    if (token.metadata != null) {\n                        ipfs = token.getIpfsFromMetadata();\n                        token.ipfs = ipfs;\n                    }\n                    let txs = await getPrevTxs(assetId);\n                    // metadata displayed in table\n                    setMetadata(JSON.stringify(token.metadata));\n                    if (token.ipfs != null) {\n                        console.log(token.ipfs);\n                        // nft image\n                        setIpfs(token.ipfs);\n                    }\n                }\n            }\n        };\n        getTokenData();\n    }, [\n        props\n    ]);\n    async function createToken(assetData) {\n        let assetName = assetData.asset_name;\n        let policy = assetData.policy_id;\n        let quantity = assetData.quantity;\n        let token = new _token__WEBPACK_IMPORTED_MODULE_7__[\"default\"](assetName, policy, quantity);\n        let tokenMetadata = await token.getMetadata();\n        token.metadata = tokenMetadata;\n        return token;\n    }\n    // fetch token metadata from blockfrost\n    async function loadTokenData(assetId) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\" + assetId, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    async function getCnftAssetData(asset) {\n        try {\n            const data = await fetch(\"https://api.opencnft.io/1/asset/\" + asset, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    // fetch token metadata from blockfrost\n    async function getPrevTxs(assetId) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\" + assetId + \"/transactions\", {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    function setPriceData(data) {\n        setPrices(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"token-main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prices__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                data: setPriceData\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 145,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_policy__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                policy: policy,\n                prices: prices\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 146,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"token-box\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"token-image\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"main-img\",\n                            alt: \"no image\",\n                            src: ipfs,\n                            width: 500,\n                            height: 500\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                            lineNumber: 148,\n                            columnNumber: 44\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 148,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"token-data\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Name: \",\n                                    data.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 150,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Created: \",\n                                    data.created\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 153,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Fingerprint: \",\n                                    data.fingerprint\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 156,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Rarity Rank: \",\n                                    data.rarityRank\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 159,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Statistical Rank: \",\n                                    data.statisticalRank\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 162,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"token-data-item\",\n                                children: [\n                                    \"Asset Name: \",\n                                    data.assetName\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                                lineNumber: 165,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 149,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 147,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"metadata\",\n                children: [\n                    \"Metadata: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                        lineNumber: 170,\n                        columnNumber: 45\n                    }, this),\n                    metadata\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n                lineNumber: 170,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/tokenData.js\",\n        lineNumber: 144,\n        columnNumber: 7\n    }, this);\n}\n_s(TokenData, \"kfaiMI4m6SSlbShMPz28+KIK79E=\");\n_c = TokenData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TokenData);\nvar _c;\n$RefreshReg$(_c, \"TokenData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNkekQsS0FBS1MsZUFBZTs7Ozs7OzswQ0FFdkMsOERBQUMrQztnQ0FBSUMsV0FBVTs7b0NBQWtCO29DQUNwQnpELEtBQUtLLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSW5DLDhEQUFDbUQ7Z0JBQUlDLFdBQVU7O29CQUFXO2tDQUFVLDhEQUFDSzs7Ozs7b0JBQUtoRTs7Ozs7Ozs7Ozs7OztBQUlsRDtHQXJLU0o7S0FBQUE7QUFzS1QsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Rva2VuRGF0YS5qcz82ZjVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFzc2V0UHJlZml4IH0gZnJvbSBcIm5leHQuY29uZmlnXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1ldGFkYXRhVGFibGUgZnJvbSBcIi4vbWV0YWRhdGFUYWJsZVwiO1xuaW1wb3J0IFBvbGljeSBmcm9tIFwiLi9wb2xpY3lcIjtcbmltcG9ydCBQcmljZXMgZnJvbSBcIi4vcHJpY2VzXCI7XG5pbXBvcnQgVG9rZW4gZnJvbSBcIi4vdG9rZW5cIjtcblxuZnVuY3Rpb24gVG9rZW5EYXRhIChwcm9wcykge1xuXG4gIGNvbnN0IFtpcGZzLCBzZXRJcGZzXSA9IHVzZVN0YXRlKCcvdHlwaG9uLnN2ZycpO1xuICBjb25zdCBbbWV0YWRhdGEsIHNldE1ldGFkYXRhXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHtuYW1lOiAnJywgcG9saWN5OicnLGNyZWF0ZWQ6JycsIGFzc2V0TmFtZTonJywgZmluZ2VycHJpbnQ6JycsIHJhcml0eVJhbms6JycscmFyaXR5U2NvcmU6JycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aXN0aWNhbFJhbms6JycsIHN0YXRpc3RpY2FsU2NvcmU6Jyd9KTtcbiAgY29uc3QgW3BvbGljeSwgc2V0UG9saWN5XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtwcmljZXMsIHNldFByaWNlc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdG9rZW5JbmZvLCBzZXRUb2tlbkluZm9dID0gdXNlU3RhdGUoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdldFRva2VuRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICBpZihwcm9wcy5hc3NldElkID09IG51bGwpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Fzc2V0IElEIHdhcyB1bmRlZmluZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAvLyBmcm9tIHVybCBpbiBbdG9rZW5dLmpzeFxuICAgICAgICAgICAgIGxldCBhc3NldElkID0gcHJvcHMuYXNzZXRJZDtcblxuICAgICAgICAgICAgIC8vIGZldGNoIGFzc2V0IGRhdGEgZnJvbSBibG9ja2Zyb3N0XG4gICAgICAgICAgICAgbGV0IGFzc2V0RGF0YSA9IGF3YWl0IGxvYWRUb2tlbkRhdGEoYXNzZXRJZCk7XG4gICAgICAgICAgICAgaWYoYXNzZXREYXRhID09IG51bGwpe1xuICAgICAgICAgICAgICAgc2V0RGlzcGxheSgnaW52YWxpZCBhc3NldCBpZCcpXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbGV0IHRva2VuID0gYXdhaXQgY3JlYXRlVG9rZW4oYXNzZXREYXRhKTsgXG4gICAgICAgICAgICAgICAgc2V0VG9rZW5JbmZvKDxsYWJlbD5Bc3NldCBuYW1lOnt0b2tlbi5hc3NldF9uYW1lfSBQb2xpY3kgSUQ6IHt0b2tlbi5wb2xpY3lfaWR9PC9sYWJlbD4pO1xuICAgICAgICAgICAgICAgIHNldFBvbGljeSh0b2tlbi5wb2xpY3lfaWQpO1xuXG4gICAgICAgICAgICAgICAgbGV0IF9hc3NldERhdGEgPSBhd2FpdCBnZXRDbmZ0QXNzZXREYXRhKHByb3BzLmFzc2V0SWQpO1xuICAgICAgICAgICAgICAgIGxldCBjcmVhdGVkRGF0YSA9IChfYXNzZXREYXRhLmNyZWF0ZWRfYXQpLnN1YnN0cmluZygwLDEwKTtcbiAgICAgICAgICAgICAgICBsZXQgZmluZ2VycHJpbnQgPSAoX2Fzc2V0RGF0YS5maW5nZXJwcmludCkuc3Vic3RyaW5nKDAsMTApO1xuICAgICAgICAgICAgICAgIGxldCBuYW1lID0gX2Fzc2V0RGF0YS5uYW1lO1xuICAgICAgICAgICAgICAgIGxldCByYXJpdHlSYW5rID0gX2Fzc2V0RGF0YS5yYXJpdHlfcmFuaztcbiAgICAgICAgICAgICAgICBsZXQgcmFyaXR5U2NvcmUgPSBfYXNzZXREYXRhLnJhcml0eV9zY29yZTtcbiAgICAgICAgICAgICAgICBsZXQgc3RhdGlzdGljYWxSYW5rID0gX2Fzc2V0RGF0YS5zdGF0aXN0aWNhbF9yYW5rO1xuICAgICAgICAgICAgICAgIGxldCBzdGF0aXN0aWNhbFNjb3JlID0gX2Fzc2V0RGF0YS5zdGF0aXN0aWNhbF9zY29yZTtcblxuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7bmFtZTogbmFtZSwgcG9saWN5OiB0b2tlbi5wb2xpY3lfaWQsIGNyZWF0ZWQ6IGNyZWF0ZWREYXRhLCBhc3NldE5hbWU6IHRva2VuLmFzc2V0X25hbWUsXG4gICAgICAgICAgICAgICAgICBmaW5nZXJwcmludDogZmluZ2VycHJpbnQsIHJhcml0eVJhbms6IHJhcml0eVJhbmssIHJhcml0eVNjb3JlOiAgcmFyaXR5U2NvcmUsXG4gICAgICAgICAgICAgICAgc3RhdGlzdGljYWxSYW5rOiBzdGF0aXN0aWNhbFJhbmssIHN0YXRpc3RpY2FsU2NvcmV9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2V0RGF0YShvYmopO1xuXG4gICAgICAgICAgICAgICAgbGV0IHByaWNlID0gcHJpY2VzO1xuICAgICAgICAgICAgICAgIGxldCBpcGZzID0gJyc7XG4gICAgICAgICAgICAgICAgaWYodG9rZW4ubWV0YWRhdGEgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICBpcGZzID0gdG9rZW4uZ2V0SXBmc0Zyb21NZXRhZGF0YSgpO1xuICAgICAgICAgICAgICAgICAgdG9rZW4uaXBmcyA9IGlwZnM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IHR4cyA9IGF3YWl0IGdldFByZXZUeHMoYXNzZXRJZCk7XG5cbiAgICAgICAgICAgICAgICAvLyBtZXRhZGF0YSBkaXNwbGF5ZWQgaW4gdGFibGVcbiAgICAgICAgICAgICAgICBzZXRNZXRhZGF0YShKU09OLnN0cmluZ2lmeSh0b2tlbi5tZXRhZGF0YSkpO1xuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgaWYodG9rZW4uaXBmcyAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRva2VuLmlwZnMpO1xuICAgICAgICAgICAgICAgICAgLy8gbmZ0IGltYWdlXG4gICAgICAgICAgICAgICAgICBzZXRJcGZzKHRva2VuLmlwZnMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnZXRUb2tlbkRhdGEoKTtcbiAgICAgIH0sIFtwcm9wc10pXG4gICAgICBcblxuXG4gICAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVG9rZW4oYXNzZXREYXRhKXtcbiAgICAgIGxldCBhc3NldE5hbWUgPSBhc3NldERhdGEuYXNzZXRfbmFtZTtcbiAgICAgIGxldCBwb2xpY3kgPSBhc3NldERhdGEucG9saWN5X2lkO1xuICAgICAgbGV0IHF1YW50aXR5ID0gYXNzZXREYXRhLnF1YW50aXR5O1xuXG4gICAgICBsZXQgdG9rZW4gPSBuZXcgVG9rZW4oYXNzZXROYW1lLCBwb2xpY3ksIHF1YW50aXR5KTtcbiAgICAgIGxldCB0b2tlbk1ldGFkYXRhID0gYXdhaXQgdG9rZW4uZ2V0TWV0YWRhdGEoKTtcbiAgICAgIHRva2VuLm1ldGFkYXRhID0gdG9rZW5NZXRhZGF0YTtcblxuXG5cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9XG5cbiAgICAvLyBmZXRjaCB0b2tlbiBtZXRhZGF0YSBmcm9tIGJsb2NrZnJvc3RcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkVG9rZW5EYXRhKGFzc2V0SWQpe1xuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vY2FyZGFuby1tYWlubmV0LmJsb2NrZnJvc3QuaW8vYXBpL3YwL2Fzc2V0cy8nK2Fzc2V0SWQsXG4gICAgICAgIHtoZWFkZXJzOntwcm9qZWN0X2lkOiAnbWFpbm5ldG9XNjFZWVNpT29MU2FOUTZkelRya0FHNGF6WFZJcnZoJywgJ2NhY2hlLWNvbnRyb2wnOiAnbWF4LWFnZT0zMTUzNjAwMCd9fSk7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRhdGEuanNvbigpO1xuICAgICAgICBpZihkYXRhLnN0YXR1cyAhPSAyMDApe1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRDbmZ0QXNzZXREYXRhKGFzc2V0KXtcbiAgICAgIHRyeXtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5vcGVuY25mdC5pby8xL2Fzc2V0LycrYXNzZXQsXG4gICAgICAgIHtoZWFkZXJzOntwcm9qZWN0X2lkOiAnbWFpbm5ldG9XNjFZWVNpT29MU2FOUTZkelRya0FHNGF6WFZJcnZoJywgJ2NhY2hlLWNvbnRyb2wnOiAnbWF4LWFnZT0zMTUzNjAwMCd9fSk7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRhdGEuanNvbigpO1xuICAgICAgICBpZihkYXRhLnN0YXR1cyE9IDIwMCl7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGZldGNoIHRva2VuIG1ldGFkYXRhIGZyb20gYmxvY2tmcm9zdFxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFByZXZUeHMoYXNzZXRJZCl7XG4gICAgICB0cnl7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9jYXJkYW5vLW1haW5uZXQuYmxvY2tmcm9zdC5pby9hcGkvdjAvYXNzZXRzLycrYXNzZXRJZCsnL3RyYW5zYWN0aW9ucycsXG4gICAgICAgIHtoZWFkZXJzOntwcm9qZWN0X2lkOiAnbWFpbm5ldG9XNjFZWVNpT29MU2FOUTZkelRya0FHNGF6WFZJcnZoJywgJ2NhY2hlLWNvbnRyb2wnOiAnbWF4LWFnZT0zMTUzNjAwMCd9fSk7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRhdGEuanNvbigpO1xuICAgICAgICBpZihkYXRhLnN0YXR1cyAhPSAyMDApe1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQcmljZURhdGEoZGF0YSl7XG4gICAgICBzZXRQcmljZXMoZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1tYWluXCI+XG4gICAgICAgIDxQcmljZXMgZGF0YSA9IHtzZXRQcmljZURhdGF9Lz5cbiAgICAgICAgPFBvbGljeSBwb2xpY3kgPSB7cG9saWN5fSBwcmljZXMgPSB7cHJpY2VzfS8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1ib3hcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1pbWFnZVwiPjxJbWFnZSBjbGFzc05hbWUgPSBcIm1haW4taW1nXCIgYWx0PSAnbm8gaW1hZ2UnIHNyYyA9IHtpcGZzfSB3aWR0aCA9IHs1MDB9IGhlaWdodCA9IHs1MDB9Lz48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1kYXRhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1kYXRhLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBOYW1lOiB7ZGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW4tZGF0YS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgQ3JlYXRlZDoge2RhdGEuY3JlYXRlZH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuLWRhdGEtaXRlbVwiPlxuICAgICAgICAgICAgICAgIEZpbmdlcnByaW50OiB7ZGF0YS5maW5nZXJwcmludH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva2VuLWRhdGEtaXRlbVwiPlxuICAgICAgICAgICAgICAgIFJhcml0eSBSYW5rOiB7ZGF0YS5yYXJpdHlSYW5rfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW4tZGF0YS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgU3RhdGlzdGljYWwgUmFuazoge2RhdGEuc3RhdGlzdGljYWxSYW5rfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9rZW4tZGF0YS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgQXNzZXQgTmFtZToge2RhdGEuYXNzZXROYW1lfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YWRhdGFcIj5NZXRhZGF0YTogPGJyLz57bWV0YWRhdGF9PC9kaXY+XG5cblxuICAgIDwvZGl2Pilcbn1cbmV4cG9ydCBkZWZhdWx0IFRva2VuRGF0YTtcbiJdLCJuYW1lcyI6WyJhc3NldFByZWZpeCIsIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNZXRhZGF0YVRhYmxlIiwiUG9saWN5IiwiUHJpY2VzIiwiVG9rZW4iLCJUb2tlbkRhdGEiLCJwcm9wcyIsImlwZnMiLCJzZXRJcGZzIiwibWV0YWRhdGEiLCJzZXRNZXRhZGF0YSIsImRhdGEiLCJzZXREYXRhIiwibmFtZSIsInBvbGljeSIsImNyZWF0ZWQiLCJhc3NldE5hbWUiLCJmaW5nZXJwcmludCIsInJhcml0eVJhbmsiLCJyYXJpdHlTY29yZSIsInN0YXRpc3RpY2FsUmFuayIsInN0YXRpc3RpY2FsU2NvcmUiLCJzZXRQb2xpY3kiLCJwcmljZXMiLCJzZXRQcmljZXMiLCJ0b2tlbkluZm8iLCJzZXRUb2tlbkluZm8iLCJnZXRUb2tlbkRhdGEiLCJhc3NldElkIiwiY29uc29sZSIsImxvZyIsImFzc2V0RGF0YSIsImxvYWRUb2tlbkRhdGEiLCJzZXREaXNwbGF5IiwidG9rZW4iLCJjcmVhdGVUb2tlbiIsImxhYmVsIiwiYXNzZXRfbmFtZSIsInBvbGljeV9pZCIsIl9hc3NldERhdGEiLCJnZXRDbmZ0QXNzZXREYXRhIiwiY3JlYXRlZERhdGEiLCJjcmVhdGVkX2F0Iiwic3Vic3RyaW5nIiwicmFyaXR5X3JhbmsiLCJyYXJpdHlfc2NvcmUiLCJzdGF0aXN0aWNhbF9yYW5rIiwic3RhdGlzdGljYWxfc2NvcmUiLCJvYmoiLCJwcmljZSIsImdldElwZnNGcm9tTWV0YWRhdGEiLCJ0eHMiLCJnZXRQcmV2VHhzIiwiSlNPTiIsInN0cmluZ2lmeSIsInF1YW50aXR5IiwidG9rZW5NZXRhZGF0YSIsImdldE1ldGFkYXRhIiwiZmV0Y2giLCJoZWFkZXJzIiwicHJvamVjdF9pZCIsInJlcyIsImpzb24iLCJzdGF0dXMiLCJlcnJvciIsImFzc2V0Iiwic2V0UHJpY2VEYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiYWx0Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/tokenData.js\n"));

/***/ })

});