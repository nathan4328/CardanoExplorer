"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[stake]",{

/***/ "./src/pages/nfts.js":
/*!***************************!*\
  !*** ./src/pages/nfts.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Nfts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Nfts(param) {\n    let { tokens  } = param;\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (tokens != null) {\n            let nfts = tokens.nfts;\n            showTokens(nfts);\n        }\n    }, [\n        tokens\n    ]);\n    const showTokens = (nfts)=>{\n        if (nfts == null) {\n        //base\n        } else {\n            let _display = [];\n            let policies = Object.keys(nfts);\n            for (const policy of policies){\n                let token = nfts[policy][0];\n                let name = token.metadata.name;\n                let collection = \"\";\n                if (token.metadata.collection != null) {\n                    collection = token.metadata.collection;\n                } else if (token.metadata.Collection != null) {\n                    collection = token.metadata.Collection;\n                } else if (token.metadata.project != null) {\n                    collection = token.metadata.project;\n                } else if (token.metadata.Project != null) {\n                    collection = token.metadata.Project;\n                } else {\n                    console.log(token);\n                }\n                if (nfts[policy].length > 1) {\n                    _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid-item-collection\",\n                        onClick: ()=>showTokensFromPolicy(nfts[policy]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"grid-img\",\n                                src: token.ipfs,\n                                alt: \"failed to load image\",\n                                width: 270,\n                                height: 270\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid-item-title\",\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                                lineNumber: 51,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid-item-text\",\n                                children: collection\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                                lineNumber: 52,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid-item-text\",\n                                children: [\n                                    \"Quantity: \",\n                                    nfts[policy].length\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                                lineNumber: 53,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, token.asset_name + \"nft\", true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, this));\n                } else {\n                    console.log(tokens.stake);\n                    _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid-item\",\n                        onClick: ()=>router.push(\"/\" + tokens.stake + \"/\" + token.policy_id + token.asset_name),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"grid-img\",\n                                src: token.ipfs,\n                                alt: \"failed to load image\",\n                                width: 270,\n                                height: 270\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                                lineNumber: 60,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid-item-info\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid-item-title\",\n                                        children: name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid-item-text\",\n                                        children: collection\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid-item-text\",\n                                        children: [\n                                            \"Quantity: \",\n                                            nfts[policy].length\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, token.asset_name + \"nft\", true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, this));\n                }\n            }\n            setDisplay(_display);\n        }\n    };\n    function showTokensFromPolicy(policy) {\n        let _display = [];\n        for (const token of policy){\n            let name = token.metadata.name;\n            let collection = \"\";\n            if (token.metadata.collection != null) {\n                collection = token.metadata.collection;\n            } else if (token.metadata.Collection != null) {\n                collection = token.metadata.Collection;\n            } else if (token.metadata.project != null) {\n                collection = token.metadata.project;\n            } else if (token.metadata.Project != null) {\n                collection = token.metadata.Project;\n            } else {\n                console.log(token);\n            }\n            _display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-item\",\n                onClick: ()=>router.push(\"/\" + tokens.stake + \"/\" + token.policy_id + token.asset_name),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"grid-img\",\n                        src: token.ipfs,\n                        alt: \"failed to load image\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                        lineNumber: 104,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid-item-info\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid-item-title\",\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid-item-text\",\n                                children: collection\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                        lineNumber: 106,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, token.asset_name + \"poly\", true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                lineNumber: 103,\n                columnNumber: 11\n            }, this));\n        }\n        setDisplay(_display);\n    }\n    //returns a grid view of all NFTs grouped by policy\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"setting-button\",\n                    onClick: ()=>showTokens(tokens.nfts),\n                    children: \"Show All\"\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                    lineNumber: 118,\n                    columnNumber: 14\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                lineNumber: 118,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-nft\",\n                children: display\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n                lineNumber: 119,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/nfts.js\",\n        lineNumber: 117,\n        columnNumber: 7\n    }, this);\n}\n_s(Nfts, \"TdQcjU6l/UJHsbfeJC//FZ+coQc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Nfts;\nvar _c;\n$RefreshReg$(_c, \"Nfts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZixNQUFNZ0IsSUFBSTt3QkFDNUNDLEtBQU07Ozs7OztrQ0FDSiw4REFBQ047d0JBQUlDLFdBQVU7OzBDQUNmLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FBbUJYOzs7Ozs7MENBQ2xDLDhEQUFDVTtnQ0FBSUMsV0FBVTswQ0FBbUJUOzs7Ozs7Ozs7Ozs7O2VBTHhCSCxNQUFNb0IsVUFBVSxHQUFHOzs7OztRQVFqQztRQUNBN0IsV0FBV0k7SUFDZjtJQUVBLG1EQUFtRDtJQUNuRCxxQkFDRSw4REFBQ2dCOzswQkFDQyw4REFBQ2E7MEJBQUksNEVBQUNDO29CQUFPYixXQUFVO29CQUFpQkMsU0FBUyxJQUFNbkIsV0FBV0wsT0FBT0ksSUFBSTs4QkFBRzs7Ozs7Ozs7Ozs7MEJBQ2hGLDhEQUFDa0I7Z0JBQUlDLFdBQVU7MEJBQVl0Qjs7Ozs7Ozs7Ozs7O0FBSW5DLENBQUM7R0F0SHVCRjs7UUFHTEgsa0RBQVNBOzs7S0FISkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL25mdHMuanM/NGZjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZnRzICh7dG9rZW5zfSl7XG5cbiAgICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYodG9rZW5zICE9IG51bGwpe1xuICAgICAgICBsZXQgbmZ0cyA9IHRva2Vucy5uZnRzO1xuICAgICAgICBzaG93VG9rZW5zKG5mdHMpO1xuXG4gICAgICB9XG4gICAgfSwgW3Rva2Vuc10pO1xuXG4gICAgY29uc3Qgc2hvd1Rva2VucyA9IChuZnRzKSA9PiB7XG4gICAgICBpZihuZnRzID09IG51bGwpe1xuICAgICAgICAvL2Jhc2VcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGxldCBfZGlzcGxheSA9IFtdO1xuICAgICAgICBsZXQgcG9saWNpZXMgPSBPYmplY3Qua2V5cyhuZnRzKTtcbiAgICAgICAgZm9yKGNvbnN0IHBvbGljeSBvZiBwb2xpY2llcyl7XG4gICAgICAgICAgbGV0IHRva2VuID0gbmZ0c1twb2xpY3ldWzBdO1xuXG4gICAgICAgICAgbGV0IG5hbWUgPSB0b2tlbi5tZXRhZGF0YS5uYW1lO1xuICAgICAgICAgIGxldCBjb2xsZWN0aW9uID0gJyc7XG5cbiAgICAgICAgICBpZih0b2tlbi5tZXRhZGF0YS5jb2xsZWN0aW9uICE9IG51bGwpe1xuICAgICAgICAgICAgY29sbGVjdGlvbiA9IHRva2VuLm1ldGFkYXRhLmNvbGxlY3Rpb247XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYodG9rZW4ubWV0YWRhdGEuQ29sbGVjdGlvbiAhPSBudWxsKXtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24gPSB0b2tlbi5tZXRhZGF0YS5Db2xsZWN0aW9uO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKHRva2VuLm1ldGFkYXRhLnByb2plY3QgIT0gbnVsbCl7XG4gICAgICAgICAgICBjb2xsZWN0aW9uID0gdG9rZW4ubWV0YWRhdGEucHJvamVjdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZih0b2tlbi5tZXRhZGF0YS5Qcm9qZWN0ICE9IG51bGwpe1xuICAgICAgICAgICAgY29sbGVjdGlvbiA9IHRva2VuLm1ldGFkYXRhLlByb2plY3Q7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2tlbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYobmZ0c1twb2xpY3ldLmxlbmd0aCA+IDEpe1xuICAgICAgICAgICAgX2Rpc3BsYXkucHVzaChcbiAgICAgICAgICAgIDxkaXYga2V5ID0ge3Rva2VuLmFzc2V0X25hbWUgKyAnbmZ0J30gY2xhc3NOYW1lID0gXCJncmlkLWl0ZW0tY29sbGVjdGlvblwiIG9uQ2xpY2sgPSB7KCkgPT4gc2hvd1Rva2Vuc0Zyb21Qb2xpY3kobmZ0c1twb2xpY3ldKX0+XG4gICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJncmlkLWltZ1wiIHNyYz17dG9rZW4uaXBmc30gYWx0ID0gJ2ZhaWxlZCB0byBsb2FkIGltYWdlJyB3aWR0aD17MjcwfSBoZWlnaHQ9ezI3MH0vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtLXRpdGxlXCI+e25hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW0tdGV4dFwiPntjb2xsZWN0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtLXRleHRcIj5RdWFudGl0eToge25mdHNbcG9saWN5XS5sZW5ndGh9PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2tlbnMuc3Rha2UpO1xuICAgICAgICAgICAgX2Rpc3BsYXkucHVzaChcbiAgICAgICAgICAgIDxkaXYga2V5ID0ge3Rva2VuLmFzc2V0X25hbWUgKyAnbmZ0J30gY2xhc3NOYW1lID0gXCJncmlkLWl0ZW1cIiBvbkNsaWNrID0geygpID0+IHJvdXRlci5wdXNoKCcvJyt0b2tlbnMuc3Rha2UrJy8nK3Rva2VuLnBvbGljeV9pZCt0b2tlbi5hc3NldF9uYW1lKX0+XG4gICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9J2dyaWQtaW1nJyBzcmM9e3Rva2VuLmlwZnN9IGFsdCA9ICdmYWlsZWQgdG8gbG9hZCBpbWFnZScgd2lkdGg9ezI3MH0gaGVpZ2h0PXsyNzB9Lz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW0taW5mb1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtLXRpdGxlXCI+e25hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW0tdGV4dFwiID57Y29sbGVjdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbS10ZXh0XCIgPlF1YW50aXR5OiB7bmZ0c1twb2xpY3ldLmxlbmd0aH08L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2Pik7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHNldERpc3BsYXkoX2Rpc3BsYXkpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1Rva2Vuc0Zyb21Qb2xpY3kocG9saWN5KXtcbiAgICAgICAgbGV0IF9kaXNwbGF5ID0gW107XG4gICAgICAgIFxuICAgICAgICBmb3IoY29uc3QgdG9rZW4gb2YgcG9saWN5KXtcblxuICAgICAgICAgIGxldCBuYW1lID0gdG9rZW4ubWV0YWRhdGEubmFtZTtcbiAgICAgICAgICBsZXQgY29sbGVjdGlvbiA9ICcnO1xuXG4gICAgICAgICAgaWYodG9rZW4ubWV0YWRhdGEuY29sbGVjdGlvbiAhPSBudWxsKXtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24gPSB0b2tlbi5tZXRhZGF0YS5jb2xsZWN0aW9uO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKHRva2VuLm1ldGFkYXRhLkNvbGxlY3Rpb24gIT0gbnVsbCl7XG4gICAgICAgICAgICBjb2xsZWN0aW9uID0gdG9rZW4ubWV0YWRhdGEuQ29sbGVjdGlvbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZih0b2tlbi5tZXRhZGF0YS5wcm9qZWN0ICE9IG51bGwpe1xuICAgICAgICAgICAgY29sbGVjdGlvbiA9IHRva2VuLm1ldGFkYXRhLnByb2plY3Q7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYodG9rZW4ubWV0YWRhdGEuUHJvamVjdCAhPSBudWxsKXtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24gPSB0b2tlbi5tZXRhZGF0YS5Qcm9qZWN0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9rZW4pO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgX2Rpc3BsYXkucHVzaChcbiAgICAgICAgICA8ZGl2IGtleSA9IHt0b2tlbi5hc3NldF9uYW1lICsgJ3BvbHknfSBjbGFzc05hbWUgPSBcImdyaWQtaXRlbVwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvJyt0b2tlbnMuc3Rha2UrJy8nK3Rva2VuLnBvbGljeV9pZCt0b2tlbi5hc3NldF9uYW1lKX0+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdyaWQtaW1nXCIgc3JjPSB7dG9rZW4uaXBmc31cbiAgICAgICAgICBhbHQgPSAnZmFpbGVkIHRvIGxvYWQgaW1hZ2UnLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtLWluZm9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtLXRpdGxlXCI+e25hbWV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbS10ZXh0XCIgPntjb2xsZWN0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICB9XG4gICAgICAgIHNldERpc3BsYXkoX2Rpc3BsYXkpO1xuICAgIH1cblxuICAgIC8vcmV0dXJucyBhIGdyaWQgdmlldyBvZiBhbGwgTkZUcyBncm91cGVkIGJ5IHBvbGljeVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8bmF2PjxidXR0b24gY2xhc3NOYW1lPVwic2V0dGluZy1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzaG93VG9rZW5zKHRva2Vucy5uZnRzKX0+U2hvdyBBbGw8L2J1dHRvbj48L25hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLW5mdFwiPntkaXNwbGF5fTwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICApXG59Il0sIm5hbWVzIjpbIkltYWdlIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJOZnRzIiwidG9rZW5zIiwiZGlzcGxheSIsInNldERpc3BsYXkiLCJyb3V0ZXIiLCJuZnRzIiwic2hvd1Rva2VucyIsIl9kaXNwbGF5IiwicG9saWNpZXMiLCJPYmplY3QiLCJrZXlzIiwicG9saWN5IiwidG9rZW4iLCJuYW1lIiwibWV0YWRhdGEiLCJjb2xsZWN0aW9uIiwiQ29sbGVjdGlvbiIsInByb2plY3QiLCJQcm9qZWN0IiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic2hvd1Rva2Vuc0Zyb21Qb2xpY3kiLCJzcmMiLCJpcGZzIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJhc3NldF9uYW1lIiwic3Rha2UiLCJwb2xpY3lfaWQiLCJpbWciLCJuYXYiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/nfts.js\n"));

/***/ })

});