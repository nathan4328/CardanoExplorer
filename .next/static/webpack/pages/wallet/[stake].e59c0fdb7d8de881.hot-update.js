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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Nfts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n// returns a flex box of nft showing image, name and quantity\nfunction Nfts(props) {\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (props.tokens != null) {\n            showTokens(props.tokens.nfts);\n        }\n    }, [\n        props\n    ]);\n    const showTokens = (nfts)=>{\n        // array of table items to be added to display\n        let _display = [];\n        if (nfts == null) {\n            // no nfts present in wallet\n            _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-item\",\n                children: \"No NFTs :/\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                lineNumber: 25,\n                columnNumber: 23\n            }, this));\n        } else {\n            // show no nft text\n            if (nfts.length == 0) {\n                _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        fontWeight: \"bold\"\n                    },\n                    children: \"No NFTs :/\"\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                    lineNumber: 30,\n                    columnNumber: 25\n                }, this));\n            } else {\n                // adds the first item in policy to the table\n                let policies = Object.keys(nfts);\n                let nftsGrid = addNftsToGrid(nfts, policies);\n                _display.push(nftsGrid);\n            }\n        }\n        setDisplay(_display);\n    };\n    function copyText(event, text) {\n        navigator.clipboard.writeText(text).then(()=>{\n            // Update the button text to \"Copied!\"\n            const button = event.target;\n            event.target.innerText = \"Copied\";\n            setTimeout(()=>{\n                // Reset the button text after 1 second\n                button.textContent = \"Copy\";\n            }, 1000);\n        });\n    }\n    function addNftsToGrid(nfts, policies) {\n        let grid = [];\n        for (const policy of policies){\n            let token = nfts[policy][0];\n            let policyId = \"\";\n            policyId = token.policy_id;\n            let path = \"token\";\n            if (nfts[policy].length > 1) {\n                grid.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid-item-collection\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            className: \"grid-img\",\n                            src: token.ipfs,\n                            alt: \"failed to load image\",\n                            width: 270,\n                            height: 270,\n                            onClick: ()=>showTokensFromPolicy(nfts[policy])\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                            lineNumber: 76,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid-item-text\",\n                            children: [\n                                \"Policy: \",\n                                policyId.substring(0, 7),\n                                \"...\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 54\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    className: \"policy-button\",\n                                    href: \"/token/\" + token.policy_id + \"?stake=\" + props.tokens.stake,\n                                    children: \"View\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"policy-button\",\n                                    onClick: (e)=>copyText(e, policyId),\n                                    children: \"Copy\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                            lineNumber: 84,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid-item-text\",\n                            children: [\n                                \"Quantity: \",\n                                nfts[policy].length\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                            lineNumber: 94,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, token.asset_name + \"nft\", true, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                    lineNumber: 72,\n                    columnNumber: 13\n                }, this));\n            } else {\n                grid.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid-item\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            className: \"grid-img\",\n                            src: token.ipfs,\n                            alt: \"failed to load image\",\n                            width: 270,\n                            height: 270,\n                            onClick: ()=>router.push(\"/\" + path + \"/\" + token.policy_id + token.asset_name + \"?stake=\" + props.tokens.stake)\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                            lineNumber: 100,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid-item-text\",\n                            children: [\n                                \"Policy: \",\n                                policyId.substring(0, 7),\n                                \"...\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                                    lineNumber: 109,\n                                    columnNumber: 54\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    className: \"policy-button\",\n                                    href: \"/token/\" + token.policy_id + \"?stake=\" + props.tokens.stake,\n                                    children: \"View\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                                    lineNumber: 110,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"policy-button\",\n                                    onClick: (e)=>copyText(e, policyId),\n                                    children: \"Copy\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                            lineNumber: 108,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid-item-text\",\n                            children: [\n                                \"Quantity: \",\n                                nfts[policy].length\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                            lineNumber: 118,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, token.asset_name + \"nft\", true, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                    lineNumber: 99,\n                    columnNumber: 13\n                }, this));\n            }\n        }\n        return grid;\n    }\n    // upon clicking a collection image, the nfts from that collection replaces the grid\n    function showTokensFromPolicy(policy) {\n        let _display = [];\n        for (const token of policy){\n            let policyId = \"\";\n            policyId = token.policy_id;\n            let path = \"token\";\n            _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-item\",\n                onClick: ()=>router.push(\"/\" + path + \"/\" + token.policy_id + token.asset_name + \"?stake=\" + props.tokens.stake),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: \"grid-img\",\n                        src: token.ipfs,\n                        alt: \"failed to load image\",\n                        width: 270,\n                        height: 270\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                        lineNumber: 143,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid-item-info\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid-item-text\",\n                            children: [\n                                \"Policy: \",\n                                policyId.substring(0, 7),\n                                \"...\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"policy-button\",\n                                    onClick: (e)=>copyText(e, policyId),\n                                    children: \"Copy\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                                    lineNumber: 148,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                            lineNumber: 146,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                        lineNumber: 145,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, token.asset_name + \"poly\", true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                lineNumber: 142,\n                columnNumber: 11\n            }, this));\n        }\n        setDisplay(_display);\n    }\n    //returns a grid view of all NFTs grouped by policy\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"setting-button\",\n                    onClick: ()=>showTokens(props.tokens.nfts),\n                    children: \"Show All\"\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                    lineNumber: 164,\n                    columnNumber: 14\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                lineNumber: 164,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-nft\",\n                children: display\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                lineNumber: 165,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n        lineNumber: 163,\n        columnNumber: 7\n    }, this);\n}\n_s(Nfts, \"TdQcjU6l/UJHsbfeJC//FZ+coQc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Nfts;\nvar _c;\n$RefreshReg$(_c, \"Nfts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFFWDdCLFNBQVNDLElBQUksZUFDYiw4REFBQ0M7Z0JBQXNDQyxXQUFZO2dCQUFZZ0MsU0FBUyxJQUFNdkMsT0FBT0ssSUFBSSxDQUFDLE1BQUk0QixPQUFLLE1BQUlILE1BQU1FLFNBQVMsR0FBQ0YsTUFBTWdCLFVBQVUsR0FBQyxZQUFVakQsTUFBTUksTUFBTSxDQUFDMkMsS0FBSzs7a0NBQ2xLLDhEQUFDckQsbURBQUtBO3dCQUFDZ0IsV0FBVTt3QkFBVzJCLEtBQU1KLE1BQU1LLElBQUk7d0JBQzlDQyxLQUFNO3dCQUF1QkMsT0FBTzt3QkFBS0MsUUFBUTs7Ozs7O2tDQUMvQyw4REFBQ2hDO3dCQUFJQyxXQUFVO2tDQUNmLDRFQUFDRDs0QkFBSUMsV0FBVTs7Z0NBQWlCO2dDQUNqQndCLFNBQVNVLFNBQVMsQ0FBQyxHQUFHO2dDQUFHOzhDQUNsQyw4REFBQ2xCO29DQUNDaEIsV0FBVTtvQ0FDVmdDLFNBQVMsQ0FBQ00sSUFBTTdCLFNBQVM2QixHQUFHZDs4Q0FDN0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQVRHRCxNQUFNZ0IsVUFBVSxHQUFHOzs7OztRQWVqQztRQUNBL0MsV0FBV0s7SUFDZjtJQUVBLG1EQUFtRDtJQUNuRCxxQkFDRSw4REFBQ0U7OzBCQUNDLDhEQUFDeUM7MEJBQUksNEVBQUN4QjtvQkFBT2hCLFdBQVU7b0JBQWlCZ0MsU0FBUyxJQUFNckMsV0FBV0wsTUFBTUksTUFBTSxDQUFDRSxJQUFJOzhCQUFHOzs7Ozs7Ozs7OzswQkFDdEYsOERBQUNHO2dCQUFJQyxXQUFVOzBCQUFZVDs7Ozs7Ozs7Ozs7O0FBSW5DLENBQUM7R0FsS3VCRjs7UUFHTEgsa0RBQVNBOzs7S0FISkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL25mdHMuanM/NGZjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyByZXR1cm5zIGEgZmxleCBib3ggb2YgbmZ0IHNob3dpbmcgaW1hZ2UsIG5hbWUgYW5kIHF1YW50aXR5XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZnRzIChwcm9wcyl7XG5cbiAgICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYocHJvcHMudG9rZW5zICE9IG51bGwpe1xuICAgICAgICBzaG93VG9rZW5zKHByb3BzLnRva2Vucy5uZnRzKTtcblxuICAgICAgfVxuICAgIH0sIFtwcm9wc10pO1xuXG4gICAgY29uc3Qgc2hvd1Rva2VucyA9IChuZnRzKSA9PiB7XG4gICAgICAvLyBhcnJheSBvZiB0YWJsZSBpdGVtcyB0byBiZSBhZGRlZCB0byBkaXNwbGF5XG4gICAgICBsZXQgX2Rpc3BsYXkgPSBbXTtcbiAgICAgIGlmKG5mdHMgPT0gbnVsbCl7XG5cbiAgICAgICAgLy8gbm8gbmZ0cyBwcmVzZW50IGluIHdhbGxldFxuICAgICAgICBfZGlzcGxheS5wdXNoKDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+Tm8gTkZUcyA6LzwvZGl2Pik7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICAvLyBzaG93IG5vIG5mdCB0ZXh0XG4gICAgICAgIGlmKG5mdHMubGVuZ3RoID09IDApe1xuICAgICAgICAgIF9kaXNwbGF5LnB1c2goPGRpdiBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJ319Pk5vIE5GVHMgOi88L2Rpdj4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG5cbiAgICAgICAgICAvLyBhZGRzIHRoZSBmaXJzdCBpdGVtIGluIHBvbGljeSB0byB0aGUgdGFibGVcbiAgICAgICAgICBsZXQgcG9saWNpZXMgPSBPYmplY3Qua2V5cyhuZnRzKTtcbiAgICAgICAgICBsZXQgbmZ0c0dyaWQgPSBhZGROZnRzVG9HcmlkKG5mdHMsIHBvbGljaWVzKTtcblxuICAgICAgICAgIF9kaXNwbGF5LnB1c2gobmZ0c0dyaWQpO1xuICAgICAgICB9XG5cblxuICAgICAgfVxuICAgICAgc2V0RGlzcGxheShfZGlzcGxheSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29weVRleHQoZXZlbnQsIHRleHQpIHtcbiAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyBVcGRhdGUgdGhlIGJ1dHRvbiB0ZXh0IHRvIFwiQ29waWVkIVwiXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmlubmVyVGV4dCA9IFwiQ29waWVkXCI7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIC8vIFJlc2V0IHRoZSBidXR0b24gdGV4dCBhZnRlciAxIHNlY29uZFxuICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29weVwiO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBhZGROZnRzVG9HcmlkKG5mdHMsIHBvbGljaWVzKSB7XG4gICAgICBsZXQgZ3JpZCA9IFtdO1xuICAgIFxuICAgICAgZm9yIChjb25zdCBwb2xpY3kgb2YgcG9saWNpZXMpIHtcbiAgICAgICAgbGV0IHRva2VuID0gbmZ0c1twb2xpY3ldWzBdO1xuICAgIFxuICAgICAgICBsZXQgcG9saWN5SWQgPSAnJztcbiAgICBcbiAgICAgICAgcG9saWN5SWQgPSAodG9rZW4ucG9saWN5X2lkKTtcbiAgICBcbiAgICAgICAgbGV0IHBhdGggPSAndG9rZW4nO1xuICAgIFxuICAgICAgICBpZiAobmZ0c1twb2xpY3ldLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBncmlkLnB1c2goXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17dG9rZW4uYXNzZXRfbmFtZSArICduZnQnfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWl0ZW0tY29sbGVjdGlvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtaW1nXCJcbiAgICAgICAgICAgICAgICBzcmM9e3Rva2VuLmlwZnN9XG4gICAgICAgICAgICAgICAgYWx0PVwiZmFpbGVkIHRvIGxvYWQgaW1hZ2VcIlxuICAgICAgICAgICAgICAgIHdpZHRoPXsyNzB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyNzB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2hvd1Rva2Vuc0Zyb21Qb2xpY3kobmZ0c1twb2xpY3ldKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW0tdGV4dFwiPlxuICAgICAgICAgICAgICAgIFBvbGljeToge3BvbGljeUlkLnN1YnN0cmluZygwLCA3KX0uLi48YnIvPlxuICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZSA9ICdwb2xpY3ktYnV0dG9uJyBocmVmPXsnL3Rva2VuLycrdG9rZW4ucG9saWN5X2lkKyc/c3Rha2U9Jytwcm9wcy50b2tlbnMuc3Rha2V9PlZpZXc8L0xpbms+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9saWN5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gY29weVRleHQoZSwgcG9saWN5SWQpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENvcHlcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtLXRleHRcIj5RdWFudGl0eToge25mdHNbcG9saWN5XS5sZW5ndGh9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdyaWQucHVzaChcbiAgICAgICAgICAgIDxkaXYga2V5PXt0b2tlbi5hc3NldF9uYW1lICsgJ25mdCd9IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWltZ1wiXG4gICAgICAgICAgICAgICAgc3JjPXt0b2tlbi5pcGZzfVxuICAgICAgICAgICAgICAgIGFsdD1cImZhaWxlZCB0byBsb2FkIGltYWdlXCJcbiAgICAgICAgICAgICAgICB3aWR0aD17MjcwfVxuICAgICAgICAgICAgICAgIGhlaWdodD17MjcwfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvJytwYXRoKycvJyt0b2tlbi5wb2xpY3lfaWQrdG9rZW4uYXNzZXRfbmFtZSsnP3N0YWtlPScrcHJvcHMudG9rZW5zLnN0YWtlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgUG9saWN5OiB7cG9saWN5SWQuc3Vic3RyaW5nKDAsIDcpfS4uLjxici8+XG4gICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lID0gJ3BvbGljeS1idXR0b24nIGhyZWY9eycvdG9rZW4vJyt0b2tlbi5wb2xpY3lfaWQrJz9zdGFrZT0nK3Byb3BzLnRva2Vucy5zdGFrZX0+VmlldzwvTGluaz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb2xpY3ktYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBjb3B5VGV4dChlLCBwb2xpY3lJZCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ29weVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW0tdGV4dFwiPlF1YW50aXR5OiB7bmZ0c1twb2xpY3ldLmxlbmd0aH08L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIFxuICAgICAgcmV0dXJuIGdyaWQ7XG4gICAgfVxuICAgIFxuXG4gICAgLy8gdXBvbiBjbGlja2luZyBhIGNvbGxlY3Rpb24gaW1hZ2UsIHRoZSBuZnRzIGZyb20gdGhhdCBjb2xsZWN0aW9uIHJlcGxhY2VzIHRoZSBncmlkXG4gICAgZnVuY3Rpb24gc2hvd1Rva2Vuc0Zyb21Qb2xpY3kocG9saWN5KXtcbiAgICAgICAgbGV0IF9kaXNwbGF5ID0gW107XG4gICAgICAgIFxuICAgICAgICBmb3IoY29uc3QgdG9rZW4gb2YgcG9saWN5KXtcblxuICAgICAgICAgIGxldCBwb2xpY3lJZCA9ICcnO1xuICAgIFxuICAgICAgICAgIHBvbGljeUlkID0gKHRva2VuLnBvbGljeV9pZCk7XG5cbiAgICAgICAgICBsZXQgcGF0aCA9ICd0b2tlbic7XG5cbiAgICAgICAgICBfZGlzcGxheS5wdXNoKFxuICAgICAgICAgIDxkaXYga2V5ID0ge3Rva2VuLmFzc2V0X25hbWUgKyAncG9seSd9IGNsYXNzTmFtZSA9IFwiZ3JpZC1pdGVtXCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy8nK3BhdGgrJy8nK3Rva2VuLnBvbGljeV9pZCt0b2tlbi5hc3NldF9uYW1lKyc/c3Rha2U9Jytwcm9wcy50b2tlbnMuc3Rha2UpfT5cbiAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJncmlkLWltZ1wiIHNyYz0ge3Rva2VuLmlwZnN9XG4gICAgICAgICAgYWx0ID0gJ2ZhaWxlZCB0byBsb2FkIGltYWdlJyB3aWR0aD17MjcwfSBoZWlnaHQ9ezI3MH0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW0taW5mb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW0tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgUG9saWN5OiB7cG9saWN5SWQuc3Vic3RyaW5nKDAsIDcpfS4uLlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb2xpY3ktYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGNvcHlUZXh0KGUsIHBvbGljeUlkKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQ29weVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+KTtcbiAgICAgICAgfVxuICAgICAgICBzZXREaXNwbGF5KF9kaXNwbGF5KTtcbiAgICB9XG5cbiAgICAvL3JldHVybnMgYSBncmlkIHZpZXcgb2YgYWxsIE5GVHMgZ3JvdXBlZCBieSBwb2xpY3lcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPG5hdj48YnV0dG9uIGNsYXNzTmFtZT1cInNldHRpbmctYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2hvd1Rva2Vucyhwcm9wcy50b2tlbnMubmZ0cyl9PlNob3cgQWxsPC9idXR0b24+PC9uYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1uZnRcIj57ZGlzcGxheX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKVxufSJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5mdHMiLCJwcm9wcyIsImRpc3BsYXkiLCJzZXREaXNwbGF5Iiwicm91dGVyIiwidG9rZW5zIiwic2hvd1Rva2VucyIsIm5mdHMiLCJfZGlzcGxheSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJzdHlsZSIsImZvbnRXZWlnaHQiLCJwb2xpY2llcyIsIk9iamVjdCIsImtleXMiLCJuZnRzR3JpZCIsImFkZE5mdHNUb0dyaWQiLCJjb3B5VGV4dCIsImV2ZW50IiwidGV4dCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRoZW4iLCJidXR0b24iLCJ0YXJnZXQiLCJpbm5lclRleHQiLCJzZXRUaW1lb3V0IiwidGV4dENvbnRlbnQiLCJncmlkIiwicG9saWN5IiwidG9rZW4iLCJwb2xpY3lJZCIsInBvbGljeV9pZCIsInBhdGgiLCJzcmMiLCJpcGZzIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJvbkNsaWNrIiwic2hvd1Rva2Vuc0Zyb21Qb2xpY3kiLCJzdWJzdHJpbmciLCJiciIsImhyZWYiLCJzdGFrZSIsImUiLCJhc3NldF9uYW1lIiwibmF2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/nfts.js\n"));

/***/ })

});