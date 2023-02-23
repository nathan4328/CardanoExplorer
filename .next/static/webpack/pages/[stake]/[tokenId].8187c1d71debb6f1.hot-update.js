"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[stake]/[tokenId]",{

/***/ "./src/pages/walletButton.js":
/*!***********************************!*\
  !*** ./src/pages/walletButton.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WalletButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lucid_cardano__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucid-cardano */ \"./node_modules/lucid-cardano/esm/mod.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lucid_cardano__WEBPACK_IMPORTED_MODULE_1__]);\nlucid_cardano__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar _s = $RefreshSig$();\n\n\n\nfunction WalletButton(stake) {\n    _s();\n    const [buttonText, setButtonText] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"Connect Wallet\");\n    const [showDropdown, setShowDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        function checkStorage() {\n            if (stake.stake == null) {} else if (stake.stake != null) {\n                if (localStorage.getItem(stake.stake)) {\n                    setButtonText(stake.stake.substring(0, 9));\n                } else {\n                    setButtonText(stake.stake);\n                }\n            } else {\n                setButtonText(stake.stake.substring(0, 9));\n            }\n        }\n        console.log(stake.stake);\n        checkStorage();\n    }, [\n        stake\n    ]);\n    const handleSelect = async (wallet)=>{\n        setShowDropdown(false);\n        let stake = await getStakeAddressFromWallet(wallet);\n        router.push(\"/\".concat(stake));\n    };\n    async function getStakeAddressFromWallet(wallet) {\n        const lucid = await lucid_cardano__WEBPACK_IMPORTED_MODULE_1__.Lucid[\"new\"]();\n        var api = \"\";\n        if (wallet == \"Typhon Wallet\") {\n            api = await window.cardano.typhoncip30.enable();\n        }\n        if (wallet == \"eternl\") {\n            api = await window.cardano.eternl.enable();\n        }\n        if (wallet == \"Nami\") {\n            api = await window.cardano.nami.enable();\n        }\n        if (wallet == \"Flint Wallet\") {\n            api = await window.cardano.flint.enable();\n        }\n        lucid.selectWallet(api);\n        let stake = await lucid.wallet.rewardAddress();\n        return stake;\n    }\n    function showOptions() {\n        setShowDropdown(!showDropdown);\n    }\n    const refreshWallet = ()=>{\n        localStorage.removeItem(stake.stake);\n        router.reload();\n    };\n    const disconnectWallet = ()=>{\n        localStorage.removeItem(stake.stake);\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"connect-wallet\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"connect-wallet-button\",\n                onClick: showOptions,\n                children: buttonText\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                lineNumber: 81,\n                columnNumber: 9\n            }, this),\n            showDropdown && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"options\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"option\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"option-button\",\n                            onClick: ()=>router.push(\"/\"),\n                            children: \"Home ⌂\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                            lineNumber: 85,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"option\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"option-button\",\n                            onClick: ()=>router.push(\"/\" + stake.stake),\n                            children: \"My Wallet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                            lineNumber: 88,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"option\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"option-button\",\n                            onClick: ()=>handleSelect(\"Typhon Wallet\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"connect-wallet-img\",\n                                src: \"/typhon.svg\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                                lineNumber: 92,\n                                columnNumber: 101\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                            lineNumber: 92,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"option\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"option-button\",\n                            onClick: ()=>handleSelect(\"eternl\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"connect-wallet-img\",\n                                src: \"/eternl.png\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                                lineNumber: 95,\n                                columnNumber: 94\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                            lineNumber: 95,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"option\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"option-button\",\n                            onClick: ()=>handleSelect(\"Nami\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"connect-wallet-img\",\n                                src: \"/nami.svg\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                                lineNumber: 98,\n                                columnNumber: 92\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                            lineNumber: 98,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                        lineNumber: 97,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"option\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"option-button\",\n                            onClick: ()=>handleSelect(\"Flint Wallet\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"connect-wallet-img\",\n                                src: \"/flint.png\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                                lineNumber: 101,\n                                columnNumber: 100\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                            lineNumber: 101,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"option\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"option-button\",\n                            onClick: ()=>refreshWallet(),\n                            children: \"↺ Refresh\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                            lineNumber: 104,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                        lineNumber: 103,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"option\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"option-button\",\n                            onClick: ()=>disconnectWallet(),\n                            children: \"✗ Disconnect\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                            lineNumber: 107,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                        lineNumber: 106,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n        lineNumber: 80,\n        columnNumber: 12\n    }, this);\n}\n_s(WalletButton, \"rcG8OY7qxDDaBgjFvbcN+9NrDGs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = WalletButton;\nvar _c;\n$RefreshReg$(_c, \"WalletButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSztzQ0FBRzs7Ozs7Ozs7Ozs7a0NBR25GLDhEQUFDaUM7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNDOzRCQUFPRCxXQUFVOzRCQUFnQkUsU0FBUyxJQUFNeEIsYUFBYTtzQ0FBa0IsNEVBQUN5QjtnQ0FBSUgsV0FBWTtnQ0FBcUJJLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRTlILDhEQUFDTDt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ0M7NEJBQU9ELFdBQVU7NEJBQWdCRSxTQUFTLElBQU14QixhQUFhO3NDQUFXLDRFQUFDeUI7Z0NBQUlILFdBQVk7Z0NBQXFCSSxLQUFNOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUV6SCw4REFBQ0w7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNDOzRCQUFPRCxXQUFVOzRCQUFnQkUsU0FBUyxJQUFNeEIsYUFBYTtzQ0FBUyw0RUFBQ3lCO2dDQUFJSCxXQUFVO2dDQUFxQkksS0FBSTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FFbkgsOERBQUNMO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDQzs0QkFBT0QsV0FBVTs0QkFBZ0JFLFNBQVMsSUFBTXhCLGFBQWE7c0NBQWlCLDRFQUFDeUI7Z0NBQUlILFdBQVU7Z0NBQXFCSSxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUUzSCw4REFBQ0w7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNDOzRCQUFPRCxXQUFVOzRCQUFnQkUsU0FBUyxJQUFNUDtzQ0FBaUI7Ozs7Ozs7Ozs7O2tDQUV0RSw4REFBQ0k7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNDOzRCQUFPRCxXQUFVOzRCQUFnQkUsU0FBUyxJQUFNSjtzQ0FBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpGLENBQUM7R0E1R3VCakM7O1FBSUxILGtEQUFTQTs7O0tBSkpHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy93YWxsZXRCdXR0b24uanM/NGRjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMdWNpZCB9IGZyb20gXCJsdWNpZC1jYXJkYW5vXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2FsbGV0QnV0dG9uKHN0YWtlKXtcblxuICAgIGNvbnN0IFtidXR0b25UZXh0LCBzZXRCdXR0b25UZXh0XSA9IHVzZVN0YXRlKCdDb25uZWN0IFdhbGxldCcpO1xuICAgIGNvbnN0IFtzaG93RHJvcGRvd24sIHNldFNob3dEcm9wZG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tTdG9yYWdlKCl7XG4gICAgICAgICAgICBpZihzdGFrZS5zdGFrZSA9PSBudWxsKXtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoc3Rha2Uuc3Rha2UgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3Rha2Uuc3Rha2UpKXtcbiAgICAgICAgICAgICAgICAgICAgc2V0QnV0dG9uVGV4dCgoc3Rha2Uuc3Rha2UpLnN1YnN0cmluZygwLDkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgc2V0QnV0dG9uVGV4dChzdGFrZS5zdGFrZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBzZXRCdXR0b25UZXh0KChzdGFrZS5zdGFrZSkuc3Vic3RyaW5nKDAsOSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coc3Rha2Uuc3Rha2UpO1xuICAgICAgICBjaGVja1N0b3JhZ2UoKTtcbiAgICB9LCBbc3Rha2VdKVxuXG5cbiAgICBjb25zdCBoYW5kbGVTZWxlY3QgPSBhc3luYyAod2FsbGV0KSA9PiB7XG4gICAgICAgIHNldFNob3dEcm9wZG93bihmYWxzZSk7XG4gICAgICAgIGxldCBzdGFrZSA9IGF3YWl0IGdldFN0YWtlQWRkcmVzc0Zyb21XYWxsZXQod2FsbGV0KTtcbiAgICAgICAgcm91dGVyLnB1c2goYC8ke3N0YWtlfWApO1xuICBcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRTdGFrZUFkZHJlc3NGcm9tV2FsbGV0KHdhbGxldCl7XG4gICAgICAgIGNvbnN0IGx1Y2lkID0gYXdhaXQgTHVjaWQubmV3KCk7XG4gICAgICAgIHZhciBhcGkgPSAnJztcbiAgICBcbiAgICAgICAgaWYod2FsbGV0ID09ICdUeXBob24gV2FsbGV0Jyl7XG4gICAgICAgICAgYXBpID0gYXdhaXQgd2luZG93LmNhcmRhbm8udHlwaG9uY2lwMzAuZW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYod2FsbGV0ID09ICdldGVybmwnKXtcbiAgICAgICAgICBhcGkgPSBhd2FpdCB3aW5kb3cuY2FyZGFuby5ldGVybmwuZW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYod2FsbGV0ID09ICdOYW1pJyl7XG4gICAgICAgICAgYXBpID0gYXdhaXQgd2luZG93LmNhcmRhbm8ubmFtaS5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZih3YWxsZXQgPT0gJ0ZsaW50IFdhbGxldCcpe1xuICAgICAgICAgIGFwaSA9IGF3YWl0IHdpbmRvdy5jYXJkYW5vLmZsaW50LmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsdWNpZC5zZWxlY3RXYWxsZXQoYXBpKTtcbiAgICAgICAgbGV0IHN0YWtlID0gYXdhaXQgbHVjaWQud2FsbGV0LnJld2FyZEFkZHJlc3MoKTtcbiAgICAgICAgcmV0dXJuIHN0YWtlO1xuICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dPcHRpb25zKCl7XG4gICAgICAgIHNldFNob3dEcm9wZG93bighc2hvd0Ryb3Bkb3duKTtcbiAgICB9XG5cbiAgICBjb25zdCByZWZyZXNoV2FsbGV0ID0gKCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShzdGFrZS5zdGFrZSk7XG4gICAgICAgIHJvdXRlci5yZWxvYWQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNjb25uZWN0V2FsbGV0ID0gKCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShzdGFrZS5zdGFrZSk7XG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgfVxuXG5cbiAgICByZXR1cm4oPGRpdiBjbGFzc05hbWU9XCJjb25uZWN0LXdhbGxldFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbm5lY3Qtd2FsbGV0LWJ1dHRvblwiIG9uQ2xpY2s9e3Nob3dPcHRpb25zfT57YnV0dG9uVGV4dH08L2J1dHRvbj5cbiAgICAgICAgeyBzaG93RHJvcGRvd24gJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJvcHRpb24tYnV0dG9uXCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy8nKX0+SG9tZSDijII8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm9wdGlvbi1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycrc3Rha2Uuc3Rha2UpfT5NeSBXYWxsZXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwib3B0aW9uLWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdCgnVHlwaG9uIFdhbGxldCcpfT48aW1nIGNsYXNzTmFtZSA9ICdjb25uZWN0LXdhbGxldC1pbWcnIHNyYz1cIi90eXBob24uc3ZnXCI+PC9pbWc+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJvcHRpb24tYnV0dG9uXCIgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0KCdldGVybmwnKX0+PGltZyBjbGFzc05hbWUgPSAnY29ubmVjdC13YWxsZXQtaW1nJyBzcmMgPSAnL2V0ZXJubC5wbmcnPjwvaW1nPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwib3B0aW9uLWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdCgnTmFtaScpfT48aW1nIGNsYXNzTmFtZT1cImNvbm5lY3Qtd2FsbGV0LWltZ1wiIHNyYz1cIi9uYW1pLnN2Z1wiPjwvaW1nPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwib3B0aW9uLWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdCgnRmxpbnQgV2FsbGV0Jyl9PjxpbWcgY2xhc3NOYW1lPVwiY29ubmVjdC13YWxsZXQtaW1nXCIgc3JjPVwiL2ZsaW50LnBuZ1wiPjwvaW1nPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwib3B0aW9uLWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHJlZnJlc2hXYWxsZXQoKX0+4oa6IFJlZnJlc2g8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm9wdGlvbi1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiBkaXNjb25uZWN0V2FsbGV0KCl9PuKclyBEaXNjb25uZWN0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsiTHVjaWQiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIldhbGxldEJ1dHRvbiIsInN0YWtlIiwiYnV0dG9uVGV4dCIsInNldEJ1dHRvblRleHQiLCJzaG93RHJvcGRvd24iLCJzZXRTaG93RHJvcGRvd24iLCJyb3V0ZXIiLCJjaGVja1N0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3Vic3RyaW5nIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVNlbGVjdCIsIndhbGxldCIsImdldFN0YWtlQWRkcmVzc0Zyb21XYWxsZXQiLCJwdXNoIiwibHVjaWQiLCJuZXciLCJhcGkiLCJ3aW5kb3ciLCJjYXJkYW5vIiwidHlwaG9uY2lwMzAiLCJlbmFibGUiLCJldGVybmwiLCJuYW1pIiwiZmxpbnQiLCJzZWxlY3RXYWxsZXQiLCJyZXdhcmRBZGRyZXNzIiwic2hvd09wdGlvbnMiLCJyZWZyZXNoV2FsbGV0IiwicmVtb3ZlSXRlbSIsInJlbG9hZCIsImRpc2Nvbm5lY3RXYWxsZXQiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiaW1nIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/walletButton.js\n"));

/***/ })

});