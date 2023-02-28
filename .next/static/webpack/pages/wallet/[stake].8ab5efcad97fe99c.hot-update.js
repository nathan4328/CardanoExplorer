"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/wallet/[stake]",{

/***/ "./src/pages/nfts.js":
/*!***************************!*\
  !*** ./src/pages/nfts.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Nfts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n// returns a flex box of nft showing image, name and quantity\nfunction Nfts(props) {\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (props.tokens != null) {\n            showTokens(props.tokens.nfts);\n        }\n    }, [\n        props\n    ]);\n    const showTokens = (nfts)=>{\n        // array of table items to be added to display\n        let _display = [];\n        if (nfts == null) {\n            // no nfts present in wallet\n            _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-item\",\n                children: \"No NFTs :/\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                lineNumber: 24,\n                columnNumber: 23\n            }, this));\n        } else {\n            // show no nft text\n            if (nfts.length == 0) {\n                _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        fontWeight: \"bold\"\n                    },\n                    children: \"No NFTs :/\"\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                    lineNumber: 29,\n                    columnNumber: 25\n                }, this));\n            } else {\n                // adds the first item in policy to the table\n                let policies = Object.keys(nfts);\n                let nftsGrid = addNftsToGrid(nfts, policies);\n                _display.push(nftsGrid);\n            }\n        }\n        setDisplay(_display);\n    };\n    function copyText(event, text) {\n        navigator.clipboard.writeText(text).then(()=>{\n            // Update the button text to \"Copied!\"\n            const button = event.target;\n            event.target.innerText = \"Copied\";\n            setTimeout(()=>{\n                // Reset the button text after 1 second\n                button.textContent = \"Copy\";\n            }, 1000);\n        });\n    }\n    function addNftsToGrid(nfts, policies) {\n        let grid = [];\n        for (const policy of policies){\n            let token = nfts[policy][0];\n            let collection = \"\";\n            collection = token.policy_id;\n            let path = \"token\";\n            if (nfts[policy].length > 1) {\n                grid.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid-item-collection\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            className: \"grid-img\",\n                            src: token.ipfs,\n                            alt: \"failed to load image\",\n                            width: 270,\n                            height: 270,\n                            onClick: ()=>showTokensFromPolicy(nfts[policy])\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                            lineNumber: 75,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid-item-text\",\n                            children: [\n                                \"Policy: \",\n                                collection.substring(0, 7),\n                                \"...\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"policy-button\",\n                                    onClick: (e)=>copyText(e, collection),\n                                    children: \"Copy\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                            lineNumber: 83,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid-item-text\",\n                            children: [\n                                \"Quantity: \",\n                                nfts[policy].length\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                            lineNumber: 92,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, token.asset_name + \"nft\", true, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                    lineNumber: 71,\n                    columnNumber: 13\n                }, this));\n            } else {\n                grid.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid-item\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            className: \"grid-img\",\n                            src: token.ipfs,\n                            alt: \"failed to load image\",\n                            width: 270,\n                            height: 270,\n                            onClick: ()=>router.push(\"/\" + path + \"/\" + token.policy_id + token.asset_name + \"?stake=\" + props.tokens.stake)\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                            lineNumber: 98,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid-item-text\",\n                            children: [\n                                \"Policy: \",\n                                collection.substring(0, 7),\n                                \"...\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"policy-button\",\n                                    onClick: (e)=>copyText(e, collection),\n                                    children: \"Copy\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                            lineNumber: 106,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid-item-text\",\n                            children: [\n                                \"Quantity: \",\n                                nfts[policy].length\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                            lineNumber: 115,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, token.asset_name + \"nft\", true, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                    lineNumber: 97,\n                    columnNumber: 13\n                }, this));\n            }\n        }\n        return grid;\n    }\n    // upon clicking a collection image, the nfts from that collection replaces the grid\n    function showTokensFromPolicy(policy) {\n        let _display = [];\n        for (const token of policy){\n            let collection = \"\";\n            collection = token.policy_id;\n            let path = \"token\";\n            _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-item\",\n                onClick: ()=>router.push(\"/\" + path + \"/\" + token.policy_id + token.asset_name + \"?stake=\" + props.tokens.stake),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: \"grid-img\",\n                        src: token.ipfs,\n                        alt: \"failed to load image\",\n                        width: 270,\n                        height: 270\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                        lineNumber: 140,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid-item-info\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid-item-text\",\n                            children: [\n                                \"Policy: \",\n                                collection.substring(0, 7),\n                                \"...\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"policy-button\",\n                                    onClick: (e)=>copyText(e, collection),\n                                    children: \"Copy\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                                    lineNumber: 145,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                            lineNumber: 143,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                        lineNumber: 142,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, token.asset_name + \"poly\", true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                lineNumber: 139,\n                columnNumber: 11\n            }, this));\n        }\n        setDisplay(_display);\n    }\n    //returns a grid view of all NFTs grouped by policy\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"setting-button\",\n                    onClick: ()=>showTokens(props.tokens.nfts),\n                    children: \"Show All\"\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                    lineNumber: 161,\n                    columnNumber: 14\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                lineNumber: 161,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-nft\",\n                children: display\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                lineNumber: 162,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n        lineNumber: 160,\n        columnNumber: 7\n    }, this);\n}\n_s(Nfts, \"TdQcjU6l/UJHsbfeJC//FZ+coQc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Nfts;\nvar _c;\n$RefreshReg$(_c, \"Nfts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbmZ0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNTO0FBQ0k7QUFFNUMsNkRBQTZEO0FBQzlDLFNBQVNJLEtBQU1DLEtBQUssRUFBQzs7SUFFaEMsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFDekMsTUFBTUssU0FBU1Asc0RBQVNBO0lBRXhCQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBR0csTUFBTUksTUFBTSxJQUFJLElBQUksRUFBQztZQUN0QkMsV0FBV0wsTUFBTUksTUFBTSxDQUFDRSxJQUFJO1FBRTlCLENBQUM7SUFDSCxHQUFHO1FBQUNOO0tBQU07SUFFVixNQUFNSyxhQUFhLENBQUNDLE9BQVM7UUFDM0IsOENBQThDO1FBQzlDLElBQUlDLFdBQVcsRUFBRTtRQUNqQixJQUFHRCxRQUFRLElBQUksRUFBQztZQUVkLDRCQUE0QjtZQUM1QkMsU0FBU0MsSUFBSSxlQUFDLDhEQUFDQztnQkFBSUMsV0FBVTswQkFBWTs7Ozs7O1FBQzNDLE9BQ0k7WUFDRixtQkFBbUI7WUFDbkIsSUFBR0osS0FBS0ssTUFBTSxJQUFJLEdBQUU7Z0JBQ2xCSixTQUFTQyxJQUFJLGVBQUMsOERBQUNDO29CQUFJRyxPQUFPO3dCQUFDQyxZQUFZO29CQUFNOzhCQUFHOzs7Ozs7WUFDbEQsT0FDSTtnQkFFRiw2Q0FBNkM7Z0JBQzdDLElBQUlDLFdBQVdDLE9BQU9DLElBQUksQ0FBQ1Y7Z0JBQzNCLElBQUlXLFdBQVdDLGNBQWNaLE1BQU1RO2dCQUVuQ1AsU0FBU0MsSUFBSSxDQUFDUztZQUNoQixDQUFDO1FBR0gsQ0FBQztRQUNEZixXQUFXSztJQUNiO0lBRUEsU0FBU1ksU0FBU0MsS0FBSyxFQUFFQyxJQUFJLEVBQUU7UUFDN0JDLFVBQVVDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDSCxNQUFNSSxJQUFJLENBQUMsSUFBTTtZQUM3QyxzQ0FBc0M7WUFDdEMsTUFBTUMsU0FBU04sTUFBTU8sTUFBTTtZQUMzQlAsTUFBTU8sTUFBTSxDQUFDQyxTQUFTLEdBQUc7WUFDekJDLFdBQVcsSUFBTTtnQkFDZix1Q0FBdUM7Z0JBQ3ZDSCxPQUFPSSxXQUFXLEdBQUc7WUFDdkIsR0FBRztRQUNMO0lBQ0Y7SUFFQSxTQUFTWixjQUFjWixJQUFJLEVBQUVRLFFBQVEsRUFBRTtRQUNyQyxJQUFJaUIsT0FBTyxFQUFFO1FBRWIsS0FBSyxNQUFNQyxVQUFVbEIsU0FBVTtZQUM3QixJQUFJbUIsUUFBUTNCLElBQUksQ0FBQzBCLE9BQU8sQ0FBQyxFQUFFO1lBRTNCLElBQUlFLGFBQWE7WUFFakJBLGFBQWNELE1BQU1FLFNBQVM7WUFFN0IsSUFBSUMsT0FBTztZQUVYLElBQUk5QixJQUFJLENBQUMwQixPQUFPLENBQUNyQixNQUFNLEdBQUcsR0FBRztnQkFDM0JvQixLQUFLdkIsSUFBSSxlQUNQLDhEQUFDQztvQkFFQ0MsV0FBVTs7c0NBRVYsOERBQUNmLG1EQUFLQTs0QkFDSmUsV0FBVTs0QkFDVjJCLEtBQUtKLE1BQU1LLElBQUk7NEJBQ2ZDLEtBQUk7NEJBQ0pDLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLFNBQVMsSUFBTUMscUJBQXFCckMsSUFBSSxDQUFDMEIsT0FBTzs7Ozs7O3NDQUVsRCw4REFBQ3ZCOzRCQUFJQyxXQUFVOztnQ0FBaUI7Z0NBQ3JCd0IsV0FBV1UsU0FBUyxDQUFDLEdBQUc7Z0NBQUc7OENBQ3BDLDhEQUFDbEI7b0NBQ0NoQixXQUFVO29DQUNWZ0MsU0FBUyxDQUFDRyxJQUFNMUIsU0FBUzBCLEdBQUdYOzhDQUM3Qjs7Ozs7Ozs7Ozs7O3NDQUlILDhEQUFDekI7NEJBQUlDLFdBQVU7O2dDQUFpQjtnQ0FBV0osSUFBSSxDQUFDMEIsT0FBTyxDQUFDckIsTUFBTTs7Ozs7Ozs7bUJBcEJ6RHNCLE1BQU1hLFVBQVUsR0FBRzs7Ozs7WUF1QjlCLE9BQU87Z0JBQ0xmLEtBQUt2QixJQUFJLGVBQ1AsOERBQUNDO29CQUFtQ0MsV0FBVTs7c0NBQzVDLDhEQUFDZixtREFBS0E7NEJBQ0plLFdBQVU7NEJBQ1YyQixLQUFLSixNQUFNSyxJQUFJOzRCQUNmQyxLQUFJOzRCQUNKQyxPQUFPOzRCQUNQQyxRQUFROzRCQUNSQyxTQUFTLElBQU12QyxPQUFPSyxJQUFJLENBQUMsTUFBSTRCLE9BQUssTUFBSUgsTUFBTUUsU0FBUyxHQUFDRixNQUFNYSxVQUFVLEdBQUMsWUFBVTlDLE1BQU1JLE1BQU0sQ0FBQzJDLEtBQUs7Ozs7OztzQ0FFckcsOERBQUN0Qzs0QkFBSUMsV0FBVTs7Z0NBQWlCO2dDQUN2QndCLFdBQVdVLFNBQVMsQ0FBQyxHQUFHO2dDQUFHOzhDQUNwQyw4REFBQ2xCO29DQUNDaEIsV0FBVTtvQ0FDVmdDLFNBQVMsQ0FBQ0csSUFBTTFCLFNBQVMwQixHQUFHWDs4Q0FDN0I7Ozs7Ozs7Ozs7OztzQ0FJSCw4REFBQ3pCOzRCQUFJQyxXQUFVOztnQ0FBaUI7Z0NBQVdKLElBQUksQ0FBQzBCLE9BQU8sQ0FBQ3JCLE1BQU07Ozs7Ozs7O21CQWxCdERzQixNQUFNYSxVQUFVLEdBQUc7Ozs7O1lBc0JqQyxDQUFDO1FBQ0g7UUFFQSxPQUFPZjtJQUNUO0lBR0Esb0ZBQW9GO0lBQ3BGLFNBQVNZLHFCQUFxQlgsTUFBTSxFQUFDO1FBQ2pDLElBQUl6QixXQUFXLEVBQUU7UUFFakIsS0FBSSxNQUFNMEIsU0FBU0QsT0FBTztZQUV4QixJQUFJRSxhQUFhO1lBRWpCQSxhQUFjRCxNQUFNRSxTQUFTO1lBRTdCLElBQUlDLE9BQU87WUFFWDdCLFNBQVNDLElBQUksZUFDYiw4REFBQ0M7Z0JBQXNDQyxXQUFZO2dCQUFZZ0MsU0FBUyxJQUFNdkMsT0FBT0ssSUFBSSxDQUFDLE1BQUk0QixPQUFLLE1BQUlILE1BQU1FLFNBQVMsR0FBQ0YsTUFBTWEsVUFBVSxHQUFDLFlBQVU5QyxNQUFNSSxNQUFNLENBQUMyQyxLQUFLOztrQ0FDbEssOERBQUNwRCxtREFBS0E7d0JBQUNlLFdBQVU7d0JBQVcyQixLQUFNSixNQUFNSyxJQUFJO3dCQUM5Q0MsS0FBTTt3QkFBdUJDLE9BQU87d0JBQUtDLFFBQVE7Ozs7OztrQ0FDL0MsOERBQUNoQzt3QkFBSUMsV0FBVTtrQ0FDZiw0RUFBQ0Q7NEJBQUlDLFdBQVU7O2dDQUFpQjtnQ0FDakJ3QixXQUFXVSxTQUFTLENBQUMsR0FBRztnQ0FBRzs4Q0FDcEMsOERBQUNsQjtvQ0FDQ2hCLFdBQVU7b0NBQ1ZnQyxTQUFTLENBQUNHLElBQU0xQixTQUFTMEIsR0FBR1g7OENBQzdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFUR0QsTUFBTWEsVUFBVSxHQUFHOzs7OztRQWVqQztRQUNBNUMsV0FBV0s7SUFDZjtJQUVBLG1EQUFtRDtJQUNuRCxxQkFDRSw4REFBQ0U7OzBCQUNDLDhEQUFDdUM7MEJBQUksNEVBQUN0QjtvQkFBT2hCLFdBQVU7b0JBQWlCZ0MsU0FBUyxJQUFNckMsV0FBV0wsTUFBTUksTUFBTSxDQUFDRSxJQUFJOzhCQUFHOzs7Ozs7Ozs7OzswQkFDdEYsOERBQUNHO2dCQUFJQyxXQUFVOzBCQUFZVDs7Ozs7Ozs7Ozs7O0FBSW5DLENBQUM7R0FoS3VCRjs7UUFHTEgsa0RBQVNBOzs7S0FISkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL25mdHMuanM/NGZjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyByZXR1cm5zIGEgZmxleCBib3ggb2YgbmZ0IHNob3dpbmcgaW1hZ2UsIG5hbWUgYW5kIHF1YW50aXR5XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZnRzIChwcm9wcyl7XG5cbiAgICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYocHJvcHMudG9rZW5zICE9IG51bGwpe1xuICAgICAgICBzaG93VG9rZW5zKHByb3BzLnRva2Vucy5uZnRzKTtcblxuICAgICAgfVxuICAgIH0sIFtwcm9wc10pO1xuXG4gICAgY29uc3Qgc2hvd1Rva2VucyA9IChuZnRzKSA9PiB7XG4gICAgICAvLyBhcnJheSBvZiB0YWJsZSBpdGVtcyB0byBiZSBhZGRlZCB0byBkaXNwbGF5XG4gICAgICBsZXQgX2Rpc3BsYXkgPSBbXTtcbiAgICAgIGlmKG5mdHMgPT0gbnVsbCl7XG5cbiAgICAgICAgLy8gbm8gbmZ0cyBwcmVzZW50IGluIHdhbGxldFxuICAgICAgICBfZGlzcGxheS5wdXNoKDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+Tm8gTkZUcyA6LzwvZGl2Pik7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICAvLyBzaG93IG5vIG5mdCB0ZXh0XG4gICAgICAgIGlmKG5mdHMubGVuZ3RoID09IDApe1xuICAgICAgICAgIF9kaXNwbGF5LnB1c2goPGRpdiBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJ319Pk5vIE5GVHMgOi88L2Rpdj4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG5cbiAgICAgICAgICAvLyBhZGRzIHRoZSBmaXJzdCBpdGVtIGluIHBvbGljeSB0byB0aGUgdGFibGVcbiAgICAgICAgICBsZXQgcG9saWNpZXMgPSBPYmplY3Qua2V5cyhuZnRzKTtcbiAgICAgICAgICBsZXQgbmZ0c0dyaWQgPSBhZGROZnRzVG9HcmlkKG5mdHMsIHBvbGljaWVzKTtcblxuICAgICAgICAgIF9kaXNwbGF5LnB1c2gobmZ0c0dyaWQpO1xuICAgICAgICB9XG5cblxuICAgICAgfVxuICAgICAgc2V0RGlzcGxheShfZGlzcGxheSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29weVRleHQoZXZlbnQsIHRleHQpIHtcbiAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyBVcGRhdGUgdGhlIGJ1dHRvbiB0ZXh0IHRvIFwiQ29waWVkIVwiXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmlubmVyVGV4dCA9IFwiQ29waWVkXCI7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIC8vIFJlc2V0IHRoZSBidXR0b24gdGV4dCBhZnRlciAxIHNlY29uZFxuICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29weVwiO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBhZGROZnRzVG9HcmlkKG5mdHMsIHBvbGljaWVzKSB7XG4gICAgICBsZXQgZ3JpZCA9IFtdO1xuICAgIFxuICAgICAgZm9yIChjb25zdCBwb2xpY3kgb2YgcG9saWNpZXMpIHtcbiAgICAgICAgbGV0IHRva2VuID0gbmZ0c1twb2xpY3ldWzBdO1xuICAgIFxuICAgICAgICBsZXQgY29sbGVjdGlvbiA9ICcnO1xuICAgIFxuICAgICAgICBjb2xsZWN0aW9uID0gKHRva2VuLnBvbGljeV9pZCk7XG4gICAgXG4gICAgICAgIGxldCBwYXRoID0gJ3Rva2VuJztcbiAgICBcbiAgICAgICAgaWYgKG5mdHNbcG9saWN5XS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgZ3JpZC5wdXNoKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e3Rva2VuLmFzc2V0X25hbWUgKyAnbmZ0J31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtLWNvbGxlY3Rpb25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWltZ1wiXG4gICAgICAgICAgICAgICAgc3JjPXt0b2tlbi5pcGZzfVxuICAgICAgICAgICAgICAgIGFsdD1cImZhaWxlZCB0byBsb2FkIGltYWdlXCJcbiAgICAgICAgICAgICAgICB3aWR0aD17MjcwfVxuICAgICAgICAgICAgICAgIGhlaWdodD17MjcwfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNob3dUb2tlbnNGcm9tUG9saWN5KG5mdHNbcG9saWN5XSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtLXRleHRcIj5cbiAgICAgICAgICAgICAgICBQb2xpY3k6IHtjb2xsZWN0aW9uLnN1YnN0cmluZygwLCA3KX0uLi5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb2xpY3ktYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBjb3B5VGV4dChlLCBjb2xsZWN0aW9uKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDb3B5XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbS10ZXh0XCI+UXVhbnRpdHk6IHtuZnRzW3BvbGljeV0ubGVuZ3RofTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBncmlkLnB1c2goXG4gICAgICAgICAgICA8ZGl2IGtleT17dG9rZW4uYXNzZXRfbmFtZSArICduZnQnfSBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZC1pbWdcIlxuICAgICAgICAgICAgICAgIHNyYz17dG9rZW4uaXBmc31cbiAgICAgICAgICAgICAgICBhbHQ9XCJmYWlsZWQgdG8gbG9hZCBpbWFnZVwiXG4gICAgICAgICAgICAgICAgd2lkdGg9ezI3MH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezI3MH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycrcGF0aCsnLycrdG9rZW4ucG9saWN5X2lkK3Rva2VuLmFzc2V0X25hbWUrJz9zdGFrZT0nK3Byb3BzLnRva2Vucy5zdGFrZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW0tdGV4dFwiPlxuICAgICAgICAgICAgICAgIFBvbGljeToge2NvbGxlY3Rpb24uc3Vic3RyaW5nKDAsIDcpfS4uLlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvbGljeS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGNvcHlUZXh0KGUsIGNvbGxlY3Rpb24pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENvcHlcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtLXRleHRcIj5RdWFudGl0eToge25mdHNbcG9saWN5XS5sZW5ndGh9PC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBcbiAgICAgIHJldHVybiBncmlkO1xuICAgIH1cbiAgICBcblxuICAgIC8vIHVwb24gY2xpY2tpbmcgYSBjb2xsZWN0aW9uIGltYWdlLCB0aGUgbmZ0cyBmcm9tIHRoYXQgY29sbGVjdGlvbiByZXBsYWNlcyB0aGUgZ3JpZFxuICAgIGZ1bmN0aW9uIHNob3dUb2tlbnNGcm9tUG9saWN5KHBvbGljeSl7XG4gICAgICAgIGxldCBfZGlzcGxheSA9IFtdO1xuICAgICAgICBcbiAgICAgICAgZm9yKGNvbnN0IHRva2VuIG9mIHBvbGljeSl7XG5cbiAgICAgICAgICBsZXQgY29sbGVjdGlvbiA9ICcnO1xuICAgIFxuICAgICAgICAgIGNvbGxlY3Rpb24gPSAodG9rZW4ucG9saWN5X2lkKTtcblxuICAgICAgICAgIGxldCBwYXRoID0gJ3Rva2VuJztcblxuICAgICAgICAgIF9kaXNwbGF5LnB1c2goXG4gICAgICAgICAgPGRpdiBrZXkgPSB7dG9rZW4uYXNzZXRfbmFtZSArICdwb2x5J30gY2xhc3NOYW1lID0gXCJncmlkLWl0ZW1cIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycrcGF0aCsnLycrdG9rZW4ucG9saWN5X2lkK3Rva2VuLmFzc2V0X25hbWUrJz9zdGFrZT0nK3Byb3BzLnRva2Vucy5zdGFrZSl9PlxuICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cImdyaWQtaW1nXCIgc3JjPSB7dG9rZW4uaXBmc31cbiAgICAgICAgICBhbHQgPSAnZmFpbGVkIHRvIGxvYWQgaW1hZ2UnIHdpZHRoPXsyNzB9IGhlaWdodD17MjcwfS8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbS1pbmZvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICBQb2xpY3k6IHtjb2xsZWN0aW9uLnN1YnN0cmluZygwLCA3KX0uLi5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9saWN5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBjb3B5VGV4dChlLCBjb2xsZWN0aW9uKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQ29weVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+KTtcbiAgICAgICAgfVxuICAgICAgICBzZXREaXNwbGF5KF9kaXNwbGF5KTtcbiAgICB9XG5cbiAgICAvL3JldHVybnMgYSBncmlkIHZpZXcgb2YgYWxsIE5GVHMgZ3JvdXBlZCBieSBwb2xpY3lcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPG5hdj48YnV0dG9uIGNsYXNzTmFtZT1cInNldHRpbmctYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2hvd1Rva2Vucyhwcm9wcy50b2tlbnMubmZ0cyl9PlNob3cgQWxsPC9idXR0b24+PC9uYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1uZnRcIj57ZGlzcGxheX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKVxufSJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTmZ0cyIsInByb3BzIiwiZGlzcGxheSIsInNldERpc3BsYXkiLCJyb3V0ZXIiLCJ0b2tlbnMiLCJzaG93VG9rZW5zIiwibmZ0cyIsIl9kaXNwbGF5IiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImxlbmd0aCIsInN0eWxlIiwiZm9udFdlaWdodCIsInBvbGljaWVzIiwiT2JqZWN0Iiwia2V5cyIsIm5mdHNHcmlkIiwiYWRkTmZ0c1RvR3JpZCIsImNvcHlUZXh0IiwiZXZlbnQiLCJ0ZXh0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidGhlbiIsImJ1dHRvbiIsInRhcmdldCIsImlubmVyVGV4dCIsInNldFRpbWVvdXQiLCJ0ZXh0Q29udGVudCIsImdyaWQiLCJwb2xpY3kiLCJ0b2tlbiIsImNvbGxlY3Rpb24iLCJwb2xpY3lfaWQiLCJwYXRoIiwic3JjIiwiaXBmcyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwib25DbGljayIsInNob3dUb2tlbnNGcm9tUG9saWN5Iiwic3Vic3RyaW5nIiwiZSIsImFzc2V0X25hbWUiLCJzdGFrZSIsIm5hdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/nfts.js\n"));

/***/ })

});