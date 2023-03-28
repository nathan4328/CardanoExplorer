"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[query]",{

/***/ "./pages/policyData.js":
/*!*****************************!*\
  !*** ./pages/policyData.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _policy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./policy */ \"./pages/policy.js\");\n/* harmony import */ var _policyCollection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./policyCollection */ \"./pages/policyCollection.js\");\n/* harmony import */ var _policyOwned__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./policyOwned */ \"./pages/policyOwned.js\");\n/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prices */ \"./pages/prices.js\");\n/* harmony import */ var _searchbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./searchbar */ \"./pages/searchbar.js\");\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./token */ \"./pages/token.js\");\n/* harmony import */ var _walletButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./walletButton */ \"./pages/walletButton.js\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_walletButton__WEBPACK_IMPORTED_MODULE_9__]);\n_walletButton__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n// this component is used to display data for a policy id\n// it returns policy information, owned token from policy, and all nfts in collection which can be searched through\nfunction PolicyData(props) {\n    _s();\n    // react hook used to store user inputed strings\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [assets, setAssets] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [displayedAssets, setDisplayedAssets] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [minIndex, setMinIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [maxIndex, setMaxIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(20);\n    const [itemPage, setItemPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(10);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function getAssetPageFromBlockfrost() {\n            if (props == null || props.policy == null) {\n            // do nothing\n            } else {\n                let policy = props.policy;\n                //setTokens(assets);\n                let assets = await loadAllTokenData(policy);\n                console.log(assets);\n                let policyData = await loadPolicyData(policy);\n                console.log(policyData);\n            }\n        }\n        getAssetPageFromBlockfrost();\n    }, [\n        props\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function func() {\n            let matches = [];\n            if (assets != null && searchQuery == \"\") {}\n            if (searchQuery.length > 0 && assets != null) {\n                let decodedAsset = \"\";\n                // find matches\n                for (const element of assets){\n                    let assetName = element.asset.substring(56);\n                    decodedAsset = Buffer.from(assetName, \"hex\").toString();\n                    let assetId = element.asset.toLowerCase();\n                    let assetNameL = assetName.toLowerCase();\n                    let decodedAssetL = decodedAsset.toLowerCase();\n                    if (assetId.includes(searchQuery) || decodedAssetL.includes(searchQuery) || assetNameL.includes(searchQuery)) {\n                        matches.push(element);\n                    }\n                }\n                // display matches\n                if (matches.length != 0) {\n                    setTotal(matches.length);\n                    setDisplayedAssets(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: [\n                            matches.length,\n                            \" matches\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/pages/policyData.js\",\n                        lineNumber: 69,\n                        columnNumber: 42\n                    }, this));\n                    let display = [];\n                    setTotal(matches.length);\n                    for (const element of matches){\n                        let assetName = element.asset.substring(56);\n                        let policy = element.asset.substring(0, 56);\n                        let decodedAsset = Buffer.from(assetName, \"hex\").toString();\n                        let token = new _token__WEBPACK_IMPORTED_MODULE_8__[\"default\"](assetName, policy, element.quantity);\n                        await token.fetchTokenData();\n                        let ipfs = \"/black.jpeg\";\n                        let path = \"asset\";\n                        display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid-item\",\n                            onClick: ()=>router.push(\"/\" + path + \"/\" + token.policy_id + token.asset_name + \"?stake=\" + props.stake),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Image, {\n                                    className: \"grid-img\",\n                                    src: ipfs,\n                                    alt: \"failed to load image\",\n                                    width: 270,\n                                    height: 270\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/pages/policyData.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 27\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"grid-item-text\",\n                                    style: {\n                                        fontWeight: \"bolder\"\n                                    },\n                                    children: decodedAsset\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/pages/policyData.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 31\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"grid-item-text\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"policy-button\",\n                                            onClick: (e)=>copyText(e, token.asset_name),\n                                            children: \"Copy\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nathan/Desktop/explorer/pages/policyData.js\",\n                                            lineNumber: 96,\n                                            columnNumber: 35\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                                            className: \"policy-button\",\n                                            href: \"https://www.jpg.store/asset/\" + element.asset,\n                                            children: \"JPG.store\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nathan/Desktop/explorer/pages/policyData.js\",\n                                            lineNumber: 97,\n                                            columnNumber: 35\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/pages/policyData.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 31\n                                }, this)\n                            ]\n                        }, token.asset_name + \"poly\", true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/pages/policyData.js\",\n                            lineNumber: 89,\n                            columnNumber: 23\n                        }, this));\n                    }\n                    setDisplayedAssets(display);\n                } else {\n                    setTotal(0);\n                    setDisplayedAssets(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"value\",\n                        children: \"No matches\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/pages/policyData.js\",\n                        lineNumber: 108,\n                        columnNumber: 42\n                    }, this));\n                }\n            } else {}\n        }\n        func();\n    }, [\n        searchQuery\n    ]);\n    async function getCnftPolicyData(policy) {\n        try {\n            const data = await fetch(\"https://api.opencnft.io/1/policy/\" + policy, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    async function loadAllTokenData(policy) {\n        let page = 1;\n        let allData = [];\n        while(true){\n            const data = await loadTokenData(policy, page);\n            if (!data) {\n                break;\n            }\n            allData = allData.concat(data);\n            if (data.length === 0) {\n                break;\n            }\n            // increment page\n            page++;\n        }\n        return allData;\n    }\n    // fetch token metadata from blockfrost\n    async function loadTokenData(policy, page) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/policy/\" + policy + \"?page=\" + page, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"home-header\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Cardano Explorer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/pages/policyData.js\",\n                        lineNumber: 177,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_searchbar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/pages/policyData.js\",\n                        lineNumber: 178,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"currency-button\",\n                        children: \"Currency: USD\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/pages/policyData.js\",\n                        lineNumber: 179,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_walletButton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/pages/policyData.js\",\n                        lineNumber: 180,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/pages/policyData.js\",\n                lineNumber: 176,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-data\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"policy-item\",\n                    children: props.policy\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/pages/policyData.js\",\n                    lineNumber: 183,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/pages/policyData.js\",\n                lineNumber: 182,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/pages/policyData.js\",\n        lineNumber: 175,\n        columnNumber: 12\n    }, this);\n}\n_s(PolicyData, \"uFatcXbSMdxKstvX9tvSnX0hIJc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = PolicyData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PolicyData);\nvar _c;\n$RefreshReg$(_c, \"PolicyData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0NBQ0osOERBQUNsRixrREFBU0E7Ozs7O2tDQUNWLDhEQUFDK0Q7d0JBQU9sQixXQUFVO2tDQUFrQjs7Ozs7O2tDQUNwQyw4REFBQzNDLHFEQUFZQTs7Ozs7Ozs7Ozs7MEJBRWYsOERBQUMwQztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQWV6QyxNQUFNaUIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHeEQ7R0E3S1NsQjs7UUFVWVYsa0RBQVNBOzs7S0FWckJVO0FBOEtULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BvbGljeURhdGEuanM/MWQ3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQb2xpY3kgZnJvbSBcIi4vcG9saWN5XCI7XG5pbXBvcnQgUG9saWN5Q29sbGVjdGlvbiBmcm9tIFwiLi9wb2xpY3lDb2xsZWN0aW9uXCI7XG5pbXBvcnQgUG9saWN5T3duZWQgZnJvbSBcIi4vcG9saWN5T3duZWRcIjtcbmltcG9ydCBQcmljZXMgZnJvbSBcIi4vcHJpY2VzXCI7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuL3NlYXJjaGJhclwiO1xuaW1wb3J0IFRva2VuIGZyb20gXCIuL3Rva2VuXCI7XG5pbXBvcnQgV2FsbGV0QnV0dG9uIGZyb20gXCIuL3dhbGxldEJ1dHRvblwiO1xuXG4vLyB0aGlzIGNvbXBvbmVudCBpcyB1c2VkIHRvIGRpc3BsYXkgZGF0YSBmb3IgYSBwb2xpY3kgaWRcbi8vIGl0IHJldHVybnMgcG9saWN5IGluZm9ybWF0aW9uLCBvd25lZCB0b2tlbiBmcm9tIHBvbGljeSwgYW5kIGFsbCBuZnRzIGluIGNvbGxlY3Rpb24gd2hpY2ggY2FuIGJlIHNlYXJjaGVkIHRocm91Z2hcbmZ1bmN0aW9uIFBvbGljeURhdGEgKHByb3BzKSB7XG5cbiAgICAgIC8vIHJlYWN0IGhvb2sgdXNlZCB0byBzdG9yZSB1c2VyIGlucHV0ZWQgc3RyaW5nc1xuICAgICAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgICBjb25zdCBbYXNzZXRzLCBzZXRBc3NldHNdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgICBjb25zdCBbZGlzcGxheWVkQXNzZXRzLCBzZXREaXNwbGF5ZWRBc3NldHNdID0gdXNlU3RhdGUoW10pO1xuICAgICAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKTtcbiAgICAgIGNvbnN0IFttaW5JbmRleCwgc2V0TWluSW5kZXhdID0gdXNlU3RhdGUoMClcbiAgICAgIGNvbnN0IFttYXhJbmRleCwgc2V0TWF4SW5kZXhdID0gdXNlU3RhdGUoMjApO1xuICAgICAgY29uc3QgW2l0ZW1QYWdlLCBzZXRJdGVtUGFnZV0gPSB1c2VTdGF0ZSgxMCk7XG4gICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgXG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRBc3NldFBhZ2VGcm9tQmxvY2tmcm9zdCgpe1xuICAgICAgICAgICAgaWYocHJvcHMgPT0gbnVsbCB8fCBwcm9wcy5wb2xpY3kgPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBsZXQgcG9saWN5ID0gcHJvcHMucG9saWN5O1xuICBcbiAgICAgICAgICAgICAgICAvL3NldFRva2Vucyhhc3NldHMpO1xuICBcbiAgICAgICAgICAgICAgbGV0IGFzc2V0cyA9IGF3YWl0IGxvYWRBbGxUb2tlbkRhdGEocG9saWN5KTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYXNzZXRzKTtcbiAgICAgICAgICAgICAgbGV0IHBvbGljeURhdGEgPSBhd2FpdCBsb2FkUG9saWN5RGF0YShwb2xpY3kpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwb2xpY3lEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnZXRBc3NldFBhZ2VGcm9tQmxvY2tmcm9zdCgpXG4gICAgfSwgW3Byb3BzXSlcbiAgXG4gICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZ1bmMoKXtcbiAgICAgICAgICAgICAgbGV0IG1hdGNoZXMgPSBbXTtcbiAgICAgICAgICAgICAgaWYoYXNzZXRzICE9IG51bGwgJiYgc2VhcmNoUXVlcnkgPT0gJycpe1xuICBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZihzZWFyY2hRdWVyeS5sZW5ndGggPjAgJiYgYXNzZXRzICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgbGV0IGRlY29kZWRBc3NldCA9ICcnO1xuICAgICAgXG4gICAgICAgICAgICAgICAgICAvLyBmaW5kIG1hdGNoZXNcbiAgICAgICAgICAgICAgICAgIGZvcihjb25zdCBlbGVtZW50IG9mIGFzc2V0cyl7XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGFzc2V0TmFtZSA9IChlbGVtZW50LmFzc2V0KS5zdWJzdHJpbmcoNTYpO1xuICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRBc3NldCA9IEJ1ZmZlci5mcm9tKGFzc2V0TmFtZSwgJ2hleCcpLnRvU3RyaW5nKCk7XG4gIFxuICAgICAgICAgICAgICAgICAgICAgIGxldCBhc3NldElkID0gKGVsZW1lbnQuYXNzZXQpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGFzc2V0TmFtZUwgPSBhc3NldE5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVjb2RlZEFzc2V0TCA9IGRlY29kZWRBc3NldC50b0xvd2VyQ2FzZSgpO1xuICBcbiAgICAgICAgICAgICAgICAgICAgICBpZigoYXNzZXRJZCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkpIHx8IGRlY29kZWRBc3NldEwuaW5jbHVkZXMoc2VhcmNoUXVlcnkpIHx8IGFzc2V0TmFtZUwuaW5jbHVkZXMoc2VhcmNoUXVlcnkpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKChlbGVtZW50KSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheSBtYXRjaGVzXG4gICAgICAgICAgICAgICAgICBpZihtYXRjaGVzLmxlbmd0aCAhPSAwKXtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUb3RhbChtYXRjaGVzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0RGlzcGxheWVkQXNzZXRzKDxkaXYgY2xhc3NOYW1lPVwidmFsdWVcIj57bWF0Y2hlcy5sZW5ndGh9IG1hdGNoZXM8L2Rpdj4pXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGRpc3BsYXkgPSBbXVxuICAgICAgICAgICAgICAgICAgICAgIHNldFRvdGFsKG1hdGNoZXMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICBmb3IoY29uc3QgZWxlbWVudCBvZiBtYXRjaGVzKXtcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgYXNzZXROYW1lID0gKGVsZW1lbnQuYXNzZXQpLnN1YnN0cmluZyg1Nik7XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHBvbGljeSA9IChlbGVtZW50LmFzc2V0KS5zdWJzdHJpbmcoMCw1Nik7XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGRlY29kZWRBc3NldCA9IEJ1ZmZlci5mcm9tKGFzc2V0TmFtZSwgJ2hleCcpLnRvU3RyaW5nKCk7XG4gIFxuICAgICAgICAgICAgICAgICAgICAgIFxuICBcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBuZXcgVG9rZW4oYXNzZXROYW1lLCBwb2xpY3ksIGVsZW1lbnQucXVhbnRpdHkpO1xuICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRva2VuLmZldGNoVG9rZW5EYXRhKCk7XG4gIFxuICAgICAgICAgICAgICAgICAgICAgIGxldCBpcGZzID0gJy9ibGFjay5qcGVnJztcbiAgXG4gIFxuICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXRoID0gJ2Fzc2V0JztcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5ID0ge3Rva2VuLmFzc2V0X25hbWUgKyAncG9seSd9IGNsYXNzTmFtZSA9IFwiZ3JpZC1pdGVtXCIgXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy8nK3BhdGgrJy8nK3Rva2VuLnBvbGljeV9pZCt0b2tlbi5hc3NldF9uYW1lKyc/c3Rha2U9Jytwcm9wcy5zdGFrZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiZ3JpZC1pbWdcIiBzcmM9IHtpcGZzfSBhbHQgPSAnZmFpbGVkIHRvIGxvYWQgaW1hZ2UnIHdpZHRoPXsyNzB9IGhlaWdodD17MjcwfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbS10ZXh0XCIgc3R5bGU9e3tmb250V2VpZ2h0OiBcImJvbGRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RlY29kZWRBc3NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW0tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicG9saWN5LWJ1dHRvblwiIG9uQ2xpY2s9eyhlKSA9PiBjb3B5VGV4dChlLCB0b2tlbi5hc3NldF9uYW1lKX0+Q29weTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZSA9ICdwb2xpY3ktYnV0dG9uJyBocmVmPXsnaHR0cHM6Ly93d3cuanBnLnN0b3JlL2Fzc2V0LycrZWxlbWVudC5hc3NldH0+SlBHLnN0b3JlPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgXG4gICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHNldERpc3BsYXllZEFzc2V0cyhkaXNwbGF5KTtcbiAgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvLyBubyBtYXRjaGVzXG4gICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgIHNldFRvdGFsKDApO1xuICAgICAgICAgICAgICAgICAgICAgIHNldERpc3BsYXllZEFzc2V0cyg8ZGl2IGNsYXNzTmFtZT1cInZhbHVlXCI+Tm8gbWF0Y2hlczwvZGl2PilcbiAgICAgICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gbm8gc2VhcmNoIHF1ZXJ5XG4gICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBmdW5jKCk7XG4gICAgICB9LCBbc2VhcmNoUXVlcnldKVxuXG4gICAgICBhc3luYyBmdW5jdGlvbiBnZXRDbmZ0UG9saWN5RGF0YShwb2xpY3kpe1xuICAgICAgICB0cnl7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5vcGVuY25mdC5pby8xL3BvbGljeS8nK3BvbGljeSxcbiAgICAgICAgICB7aGVhZGVyczp7cHJvamVjdF9pZDogJ21haW5uZXRvVzYxWVlTaU9vTFNhTlE2ZHpUcmtBRzRhelhWSXJ2aCcsICdjYWNoZS1jb250cm9sJzogJ21heC1hZ2U9MzE1MzYwMDAnfX0pO1xuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRhdGEuanNvbigpO1xuICBcbiAgICAgICAgICBpZihkYXRhLnN0YXR1cyE9IDIwMCl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICBcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRBbGxUb2tlbkRhdGEocG9saWN5KSB7XG4gICAgICAgICAgbGV0IHBhZ2UgPSAxO1xuICAgICAgICAgIGxldCBhbGxEYXRhID0gW107XG4gICAgICAgIFxuICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgbG9hZFRva2VuRGF0YShwb2xpY3ksIHBhZ2UpO1xuICAgICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICAgIC8vIGhhbmRsZSBlcnJvclxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFsbERhdGEgPSBhbGxEYXRhLmNvbmNhdChkYXRhKTtcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgLy8gd2UndmUgcmVhY2hlZCB0aGUgbGFzdCBwYWdlXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBpbmNyZW1lbnQgcGFnZVxuICAgICAgICAgICAgcGFnZSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIGFsbERhdGE7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAvLyBmZXRjaCB0b2tlbiBtZXRhZGF0YSBmcm9tIGJsb2NrZnJvc3RcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRUb2tlbkRhdGEocG9saWN5LCBwYWdlKXtcbiAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9jYXJkYW5vLW1haW5uZXQuYmxvY2tmcm9zdC5pby9hcGkvdjAvYXNzZXRzL3BvbGljeS8nK3BvbGljeSsnP3BhZ2U9JytwYWdlLFxuICAgICAgICAgICAgICB7aGVhZGVyczp7cHJvamVjdF9pZDogJ21haW5uZXRvVzYxWVlTaU9vTFNhTlE2ZHpUcmtBRzRhelhWSXJ2aCcsICdjYWNoZS1jb250cm9sJzogJ21heC1hZ2U9MzE1MzYwMDAnfX0pO1xuICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXMgIT0gMjAwKXtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgfVxuICBcblxuICAgIHJldHVybig8ZGl2PlxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJob21lLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8aDE+Q2FyZGFubyBFeHBsb3JlcjwvaDE+XG4gICAgICAgICAgICAgIDxTZWFyY2hCYXIgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjdXJyZW5jeS1idXR0b25cIj5DdXJyZW5jeTogVVNEPC9idXR0b24+XG4gICAgICAgICAgICAgIDxXYWxsZXRCdXR0b24gLz5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktZGF0YVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGljeS1pdGVtXCI+e3Byb3BzLnBvbGljeX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2Pilcbn1cbmV4cG9ydCBkZWZhdWx0IFBvbGljeURhdGE7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQb2xpY3kiLCJQb2xpY3lDb2xsZWN0aW9uIiwiUG9saWN5T3duZWQiLCJQcmljZXMiLCJTZWFyY2hCYXIiLCJUb2tlbiIsIldhbGxldEJ1dHRvbiIsIlBvbGljeURhdGEiLCJwcm9wcyIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJhc3NldHMiLCJzZXRBc3NldHMiLCJkaXNwbGF5ZWRBc3NldHMiLCJzZXREaXNwbGF5ZWRBc3NldHMiLCJ0b3RhbCIsInNldFRvdGFsIiwibWluSW5kZXgiLCJzZXRNaW5JbmRleCIsIm1heEluZGV4Iiwic2V0TWF4SW5kZXgiLCJpdGVtUGFnZSIsInNldEl0ZW1QYWdlIiwicm91dGVyIiwiZ2V0QXNzZXRQYWdlRnJvbUJsb2NrZnJvc3QiLCJwb2xpY3kiLCJsb2FkQWxsVG9rZW5EYXRhIiwiY29uc29sZSIsImxvZyIsInBvbGljeURhdGEiLCJsb2FkUG9saWN5RGF0YSIsImZ1bmMiLCJtYXRjaGVzIiwibGVuZ3RoIiwiZGVjb2RlZEFzc2V0IiwiZWxlbWVudCIsImFzc2V0TmFtZSIsImFzc2V0Iiwic3Vic3RyaW5nIiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwiYXNzZXRJZCIsInRvTG93ZXJDYXNlIiwiYXNzZXROYW1lTCIsImRlY29kZWRBc3NldEwiLCJpbmNsdWRlcyIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJkaXNwbGF5IiwidG9rZW4iLCJxdWFudGl0eSIsImZldGNoVG9rZW5EYXRhIiwiaXBmcyIsInBhdGgiLCJvbkNsaWNrIiwicG9saWN5X2lkIiwiYXNzZXRfbmFtZSIsInN0YWtlIiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInN0eWxlIiwiZm9udFdlaWdodCIsImJ1dHRvbiIsImUiLCJjb3B5VGV4dCIsIkxpbmsiLCJocmVmIiwiZ2V0Q25mdFBvbGljeURhdGEiLCJkYXRhIiwiZmV0Y2giLCJoZWFkZXJzIiwicHJvamVjdF9pZCIsInJlcyIsImpzb24iLCJzdGF0dXMiLCJlcnJvciIsInBhZ2UiLCJhbGxEYXRhIiwibG9hZFRva2VuRGF0YSIsImNvbmNhdCIsImhlYWRlciIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/policyData.js\n"));

/***/ })

});