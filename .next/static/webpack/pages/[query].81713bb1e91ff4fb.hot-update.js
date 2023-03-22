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

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lucid_cardano__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucid-cardano */ \"./node_modules/lucid-cardano/esm/mod.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks */ \"./pages/blocks.js\");\n/* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prices */ \"./pages/prices.js\");\n/* harmony import */ var _searchbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./searchbar */ \"./pages/searchbar.js\");\n/* harmony import */ var _walletButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./walletButton */ \"./pages/walletButton.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lucid_cardano__WEBPACK_IMPORTED_MODULE_1__, _walletButton__WEBPACK_IMPORTED_MODULE_8__]);\n([lucid_cardano__WEBPACK_IMPORTED_MODULE_1__, _walletButton__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home(props) {\n    _s();\n    const [isLoading, setisLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const [prices, setPrices] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (props.data != null) {\n            setisLoading(\"loaded\");\n        } else {\n            setisLoading(\"loading\");\n        }\n    }, [\n        props.data\n    ]);\n    function setPriceData(data) {\n        setPrices(data);\n    }\n    function deleteLocalStorage() {\n        localStorage.removeItem(props.data.stake);\n        window.location.reload();\n        router.reload();\n    }\n    // gets stake address from wallet using cip-30 and lucid\n    // @params - the name of the wallet to connect to e.g. 'Nami' or 'Typhon Wallet'\n    // @returns - the stake address of the connected wallet\n    async function getStakeAddressFromWallet(wallet) {\n        try {\n            // instantiates Lucid - a javascript framework which encapsulates the CIP-30 Dapp Connector\n            const lucid = await lucid_cardano__WEBPACK_IMPORTED_MODULE_1__.Lucid[\"new\"]();\n            // api here is set to the requested wallet\n            // the user is promted to connect the wallet to the site\n            // if the user clicks 'connect', wallet data can be fetched\n            var api = \"\";\n            if (wallet == \"Typhon Wallet\") {\n                api = await window.cardano.typhoncip30.enable();\n            } else if (wallet == \"eternl\") {\n                api = await window.cardano.eternl.enable();\n            } else if (wallet == \"Nami\") {\n                api = await window.cardano.nami.enable();\n            } else if (wallet == \"Flint Wallet\") {\n                api = await window.cardano.flint.enable();\n            } else {\n                return null;\n            }\n            lucid.selectWallet(api);\n            // reward address (a.k.a stake address) is fetched from the wallet api\n            let stake = await lucid.wallet.rewardAddress();\n            return stake;\n        } catch (error) {\n            return null;\n        }\n    }\n    const scrollToSection = (id)=>{\n        const element = document.getElementById(id);\n        if (element != null) {\n            element.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    };\n    // handles the selection of a wallet\n    // @params - the name of the wallet to connect to e.g. 'Nami' or 'Typhon Wallet'\n    // @returns - the stake address of the connected wallet\n    const handleSelect = async (wallet)=>{\n        let stake = await getStakeAddressFromWallet(wallet);\n        if (stake != null) {\n            if (props.data.stake == stake) {\n                scrollToSection(\"wallet\");\n            } else {\n                router.push(\"/\".concat(stake, \"#wallet\"));\n            }\n        } else {}\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"home\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"home-header\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"main-label\",\n                        children: \"✥ Explorer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/pages/home.js\",\n                        lineNumber: 104,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_searchbar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/pages/home.js\",\n                        lineNumber: 105,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_walletButton__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/pages/home.js\",\n                        lineNumber: 106,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/pages/home.js\",\n                lineNumber: 103,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"home-body\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"home-body-header\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"title\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/pages/home.js\",\n                                lineNumber: 110,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: deleteLocalStorage,\n                                className: \"refresh-button\",\n                                children: [\n                                    \"Refresh Wallet\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: \"/refresh.png\",\n                                        width: 30,\n                                        height: 30,\n                                        alt: \"refresh wallet\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nathan/Desktop/explorer/pages/home.js\",\n                                        lineNumber: 111,\n                                        columnNumber: 103\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/pages/home.js\",\n                                lineNumber: 111,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/pages/home.js\",\n                        lineNumber: 109,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_prices__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        data: setPriceData\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/pages/home.js\",\n                        lineNumber: 113,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_blocks__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/pages/home.js\",\n                        lineNumber: 114,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Connect your Wallet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/pages/home.js\",\n                        lineNumber: 115,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"home-body-wallets\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"home-wallet-button\",\n                                onClick: ()=>handleSelect(\"Typhon Wallet\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"wallet-img\",\n                                    src: \"/typhon.svg\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/pages/home.js\",\n                                    lineNumber: 117,\n                                    columnNumber: 110\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/pages/home.js\",\n                                lineNumber: 117,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"home-wallet-button\",\n                                onClick: ()=>handleSelect(\"eternl\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"wallet-img\",\n                                    src: \"/eternl.png\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/pages/home.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 103\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/pages/home.js\",\n                                lineNumber: 118,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"home-wallet-button\",\n                                onClick: ()=>handleSelect(\"Nami\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"wallet-img\",\n                                    src: \"/nami.svg\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/pages/home.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 101\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/pages/home.js\",\n                                lineNumber: 119,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"home-wallet-button\",\n                                onClick: ()=>handleSelect(\"Flint Wallet\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"wallet-img\",\n                                    src: \"/flint.png\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nathan/Desktop/explorer/pages/home.js\",\n                                    lineNumber: 120,\n                                    columnNumber: 109\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/pages/home.js\",\n                                lineNumber: 120,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/pages/home.js\",\n                                lineNumber: 120,\n                                columnNumber: 169\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/pages/home.js\",\n                        lineNumber: 116,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/pages/home.js\",\n                lineNumber: 108,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/pages/home.js\",\n        lineNumber: 102,\n        columnNumber: 13\n    }, this);\n}\n_s(Home, \"iZFtIn+5zEFt07UPITpd/6ykyVo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUE7Ozs7Ozs7Ozs7OzBCQUVqQiw4REFBQ3dDO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRztnQ0FBR0gsV0FBVTswQ0FBUTs7Ozs7OzBDQUN0Qiw4REFBQ0k7Z0NBQU9DLFNBQVNwQztnQ0FBb0IrQixXQUFVOztvQ0FBaUI7a0RBQWMsOERBQUNqRCxtREFBS0E7d0NBQUN1RCxLQUFLO3dDQUFnQkMsT0FBUzt3Q0FBSUMsUUFBUTt3Q0FBSUMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUUzSSw4REFBQ3BELCtDQUFNQTt3QkFBQ1UsTUFBTUM7Ozs7OztrQ0FDZCw4REFBQ1osK0NBQU1BOzs7OztrQ0FDUCw4REFBQytDO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNKO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0k7Z0NBQU9KLFdBQVU7Z0NBQXFCSyxTQUFTLElBQU1SLGFBQWE7MENBQWtCLDRFQUFDYTtvQ0FBSVYsV0FBVTtvQ0FBYU0sS0FBSTs7Ozs7Ozs7Ozs7MENBQ3JILDhEQUFDRjtnQ0FBT0osV0FBVTtnQ0FBcUJLLFNBQVMsSUFBTVIsYUFBYTswQ0FBVyw0RUFBQ2E7b0NBQUlWLFdBQVU7b0NBQWFNLEtBQUk7Ozs7Ozs7Ozs7OzBDQUM5Ryw4REFBQ0Y7Z0NBQU9KLFdBQVU7Z0NBQXFCSyxTQUFTLElBQU1SLGFBQWE7MENBQVMsNEVBQUNhO29DQUFJVixXQUFVO29DQUFhTSxLQUFJOzs7Ozs7Ozs7OzswQ0FDNUcsOERBQUNGO2dDQUFPSixXQUFVO2dDQUFxQkssU0FBUyxJQUFNUixhQUFhOzBDQUFpQiw0RUFBQ2E7b0NBQUlWLFdBQVU7b0NBQWFNLEtBQUk7Ozs7Ozs7Ozs7OzBDQUE0Qiw4REFBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXpLLENBQUM7R0FsSHVCbkQ7O1FBS0xSLGtEQUFTQTs7O0tBTEpRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hvbWUuanM/MTY3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMdWNpZCB9IGZyb20gXCJsdWNpZC1jYXJkYW5vXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJsb2NrcyBmcm9tIFwiLi9ibG9ja3NcIjtcbmltcG9ydCBQcmljZXMgZnJvbSBcIi4vcHJpY2VzXCI7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuL3NlYXJjaGJhclwiO1xuaW1wb3J0IFdhbGxldEJ1dHRvbiBmcm9tIFwiLi93YWxsZXRCdXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcyl7XG5cbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRpc0xvYWRpbmddID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3ByaWNlcywgc2V0UHJpY2VzXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZihwcm9wcy5kYXRhICE9IG51bGwpe1xuICAgICAgICAgICAgc2V0aXNMb2FkaW5nKCdsb2FkZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgc2V0aXNMb2FkaW5nKCdsb2FkaW5nJyk7XG4gICAgICAgIH1cbiAgICB9LFtwcm9wcy5kYXRhXSlcblxuICAgIGZ1bmN0aW9uIHNldFByaWNlRGF0YSAoZGF0YSl7XG4gICAgICAgIHNldFByaWNlcyhkYXRhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVMb2NhbFN0b3JhZ2UoKXtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocHJvcHMuZGF0YS5zdGFrZSk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgcm91dGVyLnJlbG9hZCgpO1xuICAgIH1cbiAgXG4gICAgLy8gZ2V0cyBzdGFrZSBhZGRyZXNzIGZyb20gd2FsbGV0IHVzaW5nIGNpcC0zMCBhbmQgbHVjaWRcbiAgICAvLyBAcGFyYW1zIC0gdGhlIG5hbWUgb2YgdGhlIHdhbGxldCB0byBjb25uZWN0IHRvIGUuZy4gJ05hbWknIG9yICdUeXBob24gV2FsbGV0J1xuICAgIC8vIEByZXR1cm5zIC0gdGhlIHN0YWtlIGFkZHJlc3Mgb2YgdGhlIGNvbm5lY3RlZCB3YWxsZXRcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRTdGFrZUFkZHJlc3NGcm9tV2FsbGV0KHdhbGxldCl7XG4gICAgICB0cnl7XG4gICAgICAgIC8vIGluc3RhbnRpYXRlcyBMdWNpZCAtIGEgamF2YXNjcmlwdCBmcmFtZXdvcmsgd2hpY2ggZW5jYXBzdWxhdGVzIHRoZSBDSVAtMzAgRGFwcCBDb25uZWN0b3JcbiAgICAgICAgY29uc3QgbHVjaWQgPSBhd2FpdCBMdWNpZC5uZXcoKTtcblxuICAgICAgICAvLyBhcGkgaGVyZSBpcyBzZXQgdG8gdGhlIHJlcXVlc3RlZCB3YWxsZXRcbiAgICAgICAgLy8gdGhlIHVzZXIgaXMgcHJvbXRlZCB0byBjb25uZWN0IHRoZSB3YWxsZXQgdG8gdGhlIHNpdGVcbiAgICAgICAgLy8gaWYgdGhlIHVzZXIgY2xpY2tzICdjb25uZWN0Jywgd2FsbGV0IGRhdGEgY2FuIGJlIGZldGNoZWRcbiAgICAgICAgdmFyIGFwaSA9ICcnO1xuICAgIFxuICAgICAgICBpZih3YWxsZXQgPT0gJ1R5cGhvbiBXYWxsZXQnKXtcbiAgICAgICAgICBhcGkgPSBhd2FpdCB3aW5kb3cuY2FyZGFuby50eXBob25jaXAzMC5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHdhbGxldCA9PSAnZXRlcm5sJyl7XG4gICAgICAgICAgYXBpID0gYXdhaXQgd2luZG93LmNhcmRhbm8uZXRlcm5sLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYod2FsbGV0ID09ICdOYW1pJyl7XG4gICAgICAgICAgYXBpID0gYXdhaXQgd2luZG93LmNhcmRhbm8ubmFtaS5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHdhbGxldCA9PSAnRmxpbnQgV2FsbGV0Jyl7XG4gICAgICAgICAgYXBpID0gYXdhaXQgd2luZG93LmNhcmRhbm8uZmxpbnQuZW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBsdWNpZC5zZWxlY3RXYWxsZXQoYXBpKTtcblxuICAgICAgICAvLyByZXdhcmQgYWRkcmVzcyAoYS5rLmEgc3Rha2UgYWRkcmVzcykgaXMgZmV0Y2hlZCBmcm9tIHRoZSB3YWxsZXQgYXBpXG4gICAgICAgIGxldCBzdGFrZSA9IGF3YWl0IGx1Y2lkLndhbGxldC5yZXdhcmRBZGRyZXNzKCk7XG5cbiAgICAgICAgcmV0dXJuIHN0YWtlO1xuICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb1NlY3Rpb24gPSAoaWQpID0+IHtcbiAgICBcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgaWYoZWxlbWVudCAhPSBudWxsKXtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgXG4gICAgLy8gaGFuZGxlcyB0aGUgc2VsZWN0aW9uIG9mIGEgd2FsbGV0XG4gICAgLy8gQHBhcmFtcyAtIHRoZSBuYW1lIG9mIHRoZSB3YWxsZXQgdG8gY29ubmVjdCB0byBlLmcuICdOYW1pJyBvciAnVHlwaG9uIFdhbGxldCdcbiAgICAvLyBAcmV0dXJucyAtIHRoZSBzdGFrZSBhZGRyZXNzIG9mIHRoZSBjb25uZWN0ZWQgd2FsbGV0XG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gYXN5bmMgKHdhbGxldCkgPT4ge1xuICAgICAgICBsZXQgc3Rha2UgPSBhd2FpdCBnZXRTdGFrZUFkZHJlc3NGcm9tV2FsbGV0KHdhbGxldCk7XG5cbiAgICAgICAgaWYoc3Rha2UhPSBudWxsKXtcbiAgICAgICAgICAgIGlmKHByb3BzLmRhdGEuc3Rha2UgPT0gc3Rha2Upe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvU2VjdGlvbignd2FsbGV0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvJHtzdGFrZX0jd2FsbGV0YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJob21lXCI+XG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJob21lLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWFpbi1sYWJlbFwiPuKcpSBFeHBsb3JlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hCYXIvPlxuICAgICAgICAgICAgICAgICAgICA8V2FsbGV0QnV0dG9uLz5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtYm9keS1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkhvbWU8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkZWxldGVMb2NhbFN0b3JhZ2V9IGNsYXNzTmFtZT1cInJlZnJlc2gtYnV0dG9uXCI+UmVmcmVzaCBXYWxsZXQ8SW1hZ2Ugc3JjPXsnL3JlZnJlc2gucG5nJ30gd2lkdGggPSB7MzB9IGhlaWdodD17MzB9IGFsdD0ncmVmcmVzaCB3YWxsZXQnLz48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxQcmljZXMgZGF0YT17c2V0UHJpY2VEYXRhfS8+XG4gICAgICAgICAgICAgICAgICAgIDxCbG9ja3MgLz5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkNvbm5lY3QgeW91ciBXYWxsZXQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtYm9keS13YWxsZXRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImhvbWUtd2FsbGV0LWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdCgnVHlwaG9uIFdhbGxldCcpfT48aW1nIGNsYXNzTmFtZT1cIndhbGxldC1pbWdcIiBzcmM9Jy90eXBob24uc3ZnJz48L2ltZz48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaG9tZS13YWxsZXQtYnV0dG9uXCIgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0KCdldGVybmwnKX0+PGltZyBjbGFzc05hbWU9XCJ3YWxsZXQtaW1nXCIgc3JjPScvZXRlcm5sLnBuZyc+PC9pbWc+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImhvbWUtd2FsbGV0LWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdCgnTmFtaScpfT48aW1nIGNsYXNzTmFtZT1cIndhbGxldC1pbWdcIiBzcmM9Jy9uYW1pLnN2Zyc+PC9pbWc+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImhvbWUtd2FsbGV0LWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdCgnRmxpbnQgV2FsbGV0Jyl9PjxpbWcgY2xhc3NOYW1lPVwid2FsbGV0LWltZ1wiIHNyYz0nL2ZsaW50LnBuZyc+PC9pbWc+PC9idXR0b24+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4pXG59Il0sIm5hbWVzIjpbIkx1Y2lkIiwiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VSZWR1Y2VyIiwidXNlU3RhdGUiLCJCbG9ja3MiLCJQcmljZXMiLCJTZWFyY2hCYXIiLCJXYWxsZXRCdXR0b24iLCJIb21lIiwicHJvcHMiLCJpc0xvYWRpbmciLCJzZXRpc0xvYWRpbmciLCJwcmljZXMiLCJzZXRQcmljZXMiLCJyb3V0ZXIiLCJkYXRhIiwic2V0UHJpY2VEYXRhIiwiZGVsZXRlTG9jYWxTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInN0YWtlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJnZXRTdGFrZUFkZHJlc3NGcm9tV2FsbGV0Iiwid2FsbGV0IiwibHVjaWQiLCJuZXciLCJhcGkiLCJjYXJkYW5vIiwidHlwaG9uY2lwMzAiLCJlbmFibGUiLCJldGVybmwiLCJuYW1pIiwiZmxpbnQiLCJzZWxlY3RXYWxsZXQiLCJyZXdhcmRBZGRyZXNzIiwiZXJyb3IiLCJzY3JvbGxUb1NlY3Rpb24iLCJpZCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImhhbmRsZVNlbGVjdCIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJsYWJlbCIsImgxIiwiYnV0dG9uIiwib25DbGljayIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaW1nIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home.js\n"));

/***/ })

});