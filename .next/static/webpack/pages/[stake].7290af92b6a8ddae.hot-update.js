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

/***/ "./src/pages/walletButton.js":
/*!***********************************!*\
  !*** ./src/pages/walletButton.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WalletButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lucid_cardano__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucid-cardano */ \"./node_modules/lucid-cardano/esm/mod.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lucid_cardano__WEBPACK_IMPORTED_MODULE_1__]);\nlucid_cardano__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar _s = $RefreshSig$();\n\n\n\nfunction WalletButton(stake) {\n    _s();\n    const [buttonText, setButtonText] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"Connect Wallet\");\n    const [showDropdown, setShowDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        function checkStorage() {\n            if (stake.stake == null) {} else if (stake.stake != null) {\n                if (localStorage.getItem(stake.stake)) {\n                    setButtonText(stake.stake.substring(0, 9));\n                } else if (localStorage.getItem(stake.handle)) {\n                    setButtonText(stake.handle);\n                } else {\n                    setButtonText(stake.stake.substring(0, 9));\n                }\n            } else {\n                setButtonText(stake.stake.substring(0, 9));\n            }\n        }\n        console.log(stake.stake);\n        checkStorage();\n    }, [\n        stake\n    ]);\n    async function getStakeFromAddressKoios(address) {\n        const req = await fetch(\"https://api.koios.rest/api/v0/address_info\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"_addresses\": [\n                    address\n                ]\n            })\n        });\n        const res = await req.json();\n        return res[0].stake_address;\n    }\n    const getAddressFromHandle = async (handle)=>{\n        let policyID = \"f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a\";\n        // A blank Handle name should always be ignored.\n        if (handle.length === 0) {\n        // Handle error.\n        }\n        // Convert handleName to hex encoding.\n        let assetName = Buffer.from(handle).toString(\"hex\");\n        const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\".concat(policyID).concat(assetName, \"/addresses\"), {\n            headers: {\n                // Your Blockfrost API key\n                project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((res)=>res.json());\n        let stake = await getStakeFromAddressKoios(data[0].address);\n        return stake;\n    };\n    const handleSelect = async (wallet)=>{\n        setShowDropdown(false);\n        let stake = await getStakeAddressFromWallet(wallet);\n        router.push(\"/\".concat(stake));\n    };\n    async function getStakeAddressFromWallet(wallet) {\n        const lucid = await lucid_cardano__WEBPACK_IMPORTED_MODULE_1__.Lucid[\"new\"]();\n        var api = \"\";\n        if (wallet == \"Typhon Wallet\") {\n            api = await window.cardano.typhoncip30.enable();\n        }\n        if (wallet == \"eternl\") {\n            api = await window.cardano.eternl.enable();\n        }\n        if (wallet == \"Nami\") {\n            api = await window.cardano.nami.enable();\n        }\n        if (wallet == \"Flint Wallet\") {\n            api = await window.cardano.flint.enable();\n        }\n        lucid.selectWallet(api);\n        let stake = await lucid.wallet.rewardAddress();\n        return stake;\n    }\n    function showOptions() {\n        setShowDropdown(!showDropdown);\n    }\n    const refreshWallet = async ()=>{\n        let stakeAddy1 = \"\";\n        if (stake.stake.startsWith(\"$\")) {\n            stakeAddy1 = await getAddressFromHandle(stake.stake.slice(1));\n        } else {\n            stakeAddy1 = stake.stake;\n        }\n        localStorage.removeItem(stakeAddy1);\n        router.reload();\n    };\n    const disconnectWallet = async ()=>{\n        if (stake.stake.startsWith(\"$\")) {\n            stakeAddy = await getAddressFromHandle(stake.stake.slice(1));\n        } else {\n            stakeAddy = stake.stake;\n        }\n        localStorage.removeItem(stakeAddy);\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"connect-wallet\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"connect-wallet-button\",\n                onClick: showOptions,\n                children: buttonText\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                lineNumber: 142,\n                columnNumber: 9\n            }, this),\n            showDropdown && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"options\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"option\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"option-button\",\n                            onClick: ()=>router.push(\"/\"),\n                            children: \"Home ⌂\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                            lineNumber: 146,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                        lineNumber: 145,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"option\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"option-button\",\n                            onClick: ()=>router.push(\"/\" + stake.stake),\n                            children: \"My Wallet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                            lineNumber: 149,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                        lineNumber: 148,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"option\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"option-button\",\n                            onClick: ()=>handleSelect(\"Typhon Wallet\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"connect-wallet-img\",\n                                src: \"/typhon.svg\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                                lineNumber: 153,\n                                columnNumber: 101\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                            lineNumber: 153,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                        lineNumber: 152,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"option\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"option-button\",\n                            onClick: ()=>handleSelect(\"eternl\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"connect-wallet-img\",\n                                src: \"/eternl.png\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                                lineNumber: 156,\n                                columnNumber: 94\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                            lineNumber: 156,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                        lineNumber: 155,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"option\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"option-button\",\n                            onClick: ()=>handleSelect(\"Nami\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"connect-wallet-img\",\n                                src: \"/nami.svg\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                                lineNumber: 159,\n                                columnNumber: 92\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                            lineNumber: 159,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                        lineNumber: 158,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"option\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"option-button\",\n                            onClick: ()=>handleSelect(\"Flint Wallet\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"connect-wallet-img\",\n                                src: \"/flint.png\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                                lineNumber: 162,\n                                columnNumber: 100\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                            lineNumber: 162,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                        lineNumber: 161,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"option\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"option-button\",\n                            onClick: ()=>refreshWallet(),\n                            children: \"↺ Refresh\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                            lineNumber: 165,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                        lineNumber: 164,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"option\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"option-button\",\n                            onClick: ()=>disconnectWallet(),\n                            children: \"✗ Disconnect\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                            lineNumber: 168,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                        lineNumber: 167,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n                lineNumber: 144,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletButton.js\",\n        lineNumber: 141,\n        columnNumber: 12\n    }, this);\n}\n_s(WalletButton, \"rcG8OY7qxDDaBgjFvbcN+9NrDGs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = WalletButton;\nvar _c;\n$RefreshReg$(_c, \"WalletButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztBQU16RixDQUFDO0dBekt1QjNEOztRQUlMSCxrREFBU0E7OztLQUpKRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvd2FsbGV0QnV0dG9uLmpzPzRkYzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTHVjaWQgfSBmcm9tIFwibHVjaWQtY2FyZGFub1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdhbGxldEJ1dHRvbihzdGFrZSl7XG5cbiAgICBjb25zdCBbYnV0dG9uVGV4dCwgc2V0QnV0dG9uVGV4dF0gPSB1c2VTdGF0ZSgnQ29ubmVjdCBXYWxsZXQnKTtcbiAgICBjb25zdCBbc2hvd0Ryb3Bkb3duLCBzZXRTaG93RHJvcGRvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrU3RvcmFnZSgpe1xuICAgICAgICAgICAgaWYoc3Rha2Uuc3Rha2UgPT0gbnVsbCl7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHN0YWtlLnN0YWtlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0YWtlLnN0YWtlKSl7XG4gICAgICAgICAgICAgICAgICAgIHNldEJ1dHRvblRleHQoKHN0YWtlLnN0YWtlKS5zdWJzdHJpbmcoMCw5KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0YWtlLmhhbmRsZSkpe1xuICAgICAgICAgICAgICAgICAgICBzZXRCdXR0b25UZXh0KHN0YWtlLmhhbmRsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHNldEJ1dHRvblRleHQoKHN0YWtlLnN0YWtlKS5zdWJzdHJpbmcoMCw5KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBzZXRCdXR0b25UZXh0KChzdGFrZS5zdGFrZSkuc3Vic3RyaW5nKDAsOSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coc3Rha2Uuc3Rha2UpO1xuICAgICAgICBjaGVja1N0b3JhZ2UoKTtcbiAgICB9LCBbc3Rha2VdKVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0U3Rha2VGcm9tQWRkcmVzc0tvaW9zKGFkZHJlc3Mpe1xuICAgICAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkua29pb3MucmVzdC9hcGkvdjAvYWRkcmVzc19pbmZvJywge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIFwiX2FkZHJlc3Nlc1wiOiBbIGFkZHJlc3NcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIHJlc1swXS5zdGFrZV9hZGRyZXNzO1xuICAgICAgfVxuICAgIFxuICAgICAgY29uc3QgZ2V0QWRkcmVzc0Zyb21IYW5kbGUgPSBhc3luYyAoaGFuZGxlKSA9PiB7XG4gICAgICAgIGxldCBwb2xpY3lJRCA9ICdmMGZmNDhiYmI3YmJlOWQ1OWE0MGYxY2U5MGU5ZTlkMGZmNTAwMmVjNDhmMjMyYjQ5Y2EwZmI5YSc7XG4gICAgICAgIFxuICAgICAgICAvLyBBIGJsYW5rIEhhbmRsZSBuYW1lIHNob3VsZCBhbHdheXMgYmUgaWdub3JlZC5cbiAgICAgICAgaWYgKGhhbmRsZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAvLyBIYW5kbGUgZXJyb3IuXG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAvLyBDb252ZXJ0IGhhbmRsZU5hbWUgdG8gaGV4IGVuY29kaW5nLlxuICAgICAgICBsZXQgYXNzZXROYW1lID0gQnVmZmVyLmZyb20oaGFuZGxlKS50b1N0cmluZygnaGV4Jyk7XG4gICAgICBcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgIGBodHRwczovL2NhcmRhbm8tbWFpbm5ldC5ibG9ja2Zyb3N0LmlvL2FwaS92MC9hc3NldHMvJHtwb2xpY3lJRH0ke2Fzc2V0TmFtZX0vYWRkcmVzc2VzYCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgIC8vIFlvdXIgQmxvY2tmcm9zdCBBUEkga2V5XG4gICAgICAgICAgICAgIHByb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnLFxuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHN0YWtlID0gYXdhaXQgZ2V0U3Rha2VGcm9tQWRkcmVzc0tvaW9zKGRhdGFbMF0uYWRkcmVzcyk7XG4gICAgICAgIHJldHVybiBzdGFrZTtcbiAgICAgIH1cblxuXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0ID0gYXN5bmMgKHdhbGxldCkgPT4ge1xuICAgICAgICBzZXRTaG93RHJvcGRvd24oZmFsc2UpO1xuICAgICAgICBsZXQgc3Rha2UgPSBhd2FpdCBnZXRTdGFrZUFkZHJlc3NGcm9tV2FsbGV0KHdhbGxldCk7XG4gICAgICAgIHJvdXRlci5wdXNoKGAvJHtzdGFrZX1gKTtcbiAgXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0U3Rha2VBZGRyZXNzRnJvbVdhbGxldCh3YWxsZXQpe1xuICAgICAgICBjb25zdCBsdWNpZCA9IGF3YWl0IEx1Y2lkLm5ldygpO1xuICAgICAgICB2YXIgYXBpID0gJyc7XG4gICAgXG4gICAgICAgIGlmKHdhbGxldCA9PSAnVHlwaG9uIFdhbGxldCcpe1xuICAgICAgICAgIGFwaSA9IGF3YWl0IHdpbmRvdy5jYXJkYW5vLnR5cGhvbmNpcDMwLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHdhbGxldCA9PSAnZXRlcm5sJyl7XG4gICAgICAgICAgYXBpID0gYXdhaXQgd2luZG93LmNhcmRhbm8uZXRlcm5sLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHdhbGxldCA9PSAnTmFtaScpe1xuICAgICAgICAgIGFwaSA9IGF3YWl0IHdpbmRvdy5jYXJkYW5vLm5hbWkuZW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYod2FsbGV0ID09ICdGbGludCBXYWxsZXQnKXtcbiAgICAgICAgICBhcGkgPSBhd2FpdCB3aW5kb3cuY2FyZGFuby5mbGludC5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbHVjaWQuc2VsZWN0V2FsbGV0KGFwaSk7XG4gICAgICAgIGxldCBzdGFrZSA9IGF3YWl0IGx1Y2lkLndhbGxldC5yZXdhcmRBZGRyZXNzKCk7XG4gICAgICAgIHJldHVybiBzdGFrZTtcbiAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93T3B0aW9ucygpe1xuICAgICAgICBzZXRTaG93RHJvcGRvd24oIXNob3dEcm9wZG93bik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVmcmVzaFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IHN0YWtlQWRkeSA9ICcnO1xuXG4gICAgICAgIGlmKHN0YWtlLnN0YWtlLnN0YXJ0c1dpdGgoJyQnKSl7XG4gICAgICAgICAgICBzdGFrZUFkZHkgPSBhd2FpdCBnZXRBZGRyZXNzRnJvbUhhbmRsZShzdGFrZS5zdGFrZS5zbGljZSgxKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHN0YWtlQWRkeSA9IHN0YWtlLnN0YWtlO1xuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHN0YWtlQWRkeSk7XG4gICAgICAgIHJvdXRlci5yZWxvYWQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZihzdGFrZS5zdGFrZS5zdGFydHNXaXRoKCckJykpe1xuICAgICAgICAgICAgc3Rha2VBZGR5ID0gYXdhaXQgZ2V0QWRkcmVzc0Zyb21IYW5kbGUoc3Rha2Uuc3Rha2Uuc2xpY2UoMSkpO1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgc3Rha2VBZGR5ID0gc3Rha2Uuc3Rha2U7ICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oc3Rha2VBZGR5KTtcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcbiAgICB9XG5cblxuICAgIHJldHVybig8ZGl2IGNsYXNzTmFtZT1cImNvbm5lY3Qtd2FsbGV0XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29ubmVjdC13YWxsZXQtYnV0dG9uXCIgb25DbGljaz17c2hvd09wdGlvbnN9PntidXR0b25UZXh0fTwvYnV0dG9uPlxuICAgICAgICB7IHNob3dEcm9wZG93biAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm9wdGlvbi1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycpfT5Ib21lIOKMgjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwib3B0aW9uLWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvJytzdGFrZS5zdGFrZSl9Pk15IFdhbGxldDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJvcHRpb24tYnV0dG9uXCIgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0KCdUeXBob24gV2FsbGV0Jyl9PjxpbWcgY2xhc3NOYW1lID0gJ2Nvbm5lY3Qtd2FsbGV0LWltZycgc3JjPVwiL3R5cGhvbi5zdmdcIj48L2ltZz48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm9wdGlvbi1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3QoJ2V0ZXJubCcpfT48aW1nIGNsYXNzTmFtZSA9ICdjb25uZWN0LXdhbGxldC1pbWcnIHNyYyA9ICcvZXRlcm5sLnBuZyc+PC9pbWc+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJvcHRpb24tYnV0dG9uXCIgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0KCdOYW1pJyl9PjxpbWcgY2xhc3NOYW1lPVwiY29ubmVjdC13YWxsZXQtaW1nXCIgc3JjPVwiL25hbWkuc3ZnXCI+PC9pbWc+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJvcHRpb24tYnV0dG9uXCIgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0KCdGbGludCBXYWxsZXQnKX0+PGltZyBjbGFzc05hbWU9XCJjb25uZWN0LXdhbGxldC1pbWdcIiBzcmM9XCIvZmxpbnQucG5nXCI+PC9pbWc+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJvcHRpb24tYnV0dG9uXCIgb25DbGljaz17KCkgPT4gcmVmcmVzaFdhbGxldCgpfT7ihrogUmVmcmVzaDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwib3B0aW9uLWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGRpc2Nvbm5lY3RXYWxsZXQoKX0+4pyXIERpc2Nvbm5lY3Q8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJMdWNpZCIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiV2FsbGV0QnV0dG9uIiwic3Rha2UiLCJidXR0b25UZXh0Iiwic2V0QnV0dG9uVGV4dCIsInNob3dEcm9wZG93biIsInNldFNob3dEcm9wZG93biIsInJvdXRlciIsImNoZWNrU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdWJzdHJpbmciLCJoYW5kbGUiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3Rha2VGcm9tQWRkcmVzc0tvaW9zIiwiYWRkcmVzcyIsInJlcSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwianNvbiIsInN0YWtlX2FkZHJlc3MiLCJnZXRBZGRyZXNzRnJvbUhhbmRsZSIsInBvbGljeUlEIiwibGVuZ3RoIiwiYXNzZXROYW1lIiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwiZGF0YSIsInByb2plY3RfaWQiLCJ0aGVuIiwiaGFuZGxlU2VsZWN0Iiwid2FsbGV0IiwiZ2V0U3Rha2VBZGRyZXNzRnJvbVdhbGxldCIsInB1c2giLCJsdWNpZCIsIm5ldyIsImFwaSIsIndpbmRvdyIsImNhcmRhbm8iLCJ0eXBob25jaXAzMCIsImVuYWJsZSIsImV0ZXJubCIsIm5hbWkiLCJmbGludCIsInNlbGVjdFdhbGxldCIsInJld2FyZEFkZHJlc3MiLCJzaG93T3B0aW9ucyIsInJlZnJlc2hXYWxsZXQiLCJzdGFrZUFkZHkiLCJzdGFydHNXaXRoIiwic2xpY2UiLCJyZW1vdmVJdGVtIiwicmVsb2FkIiwiZGlzY29ubmVjdFdhbGxldCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/walletButton.js\n"));

/***/ })

});