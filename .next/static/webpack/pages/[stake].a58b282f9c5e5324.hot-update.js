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

/***/ "./src/pages/walletData.js":
/*!*********************************!*\
  !*** ./src/pages/walletData.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n/* harmony import */ var _nfts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nfts */ \"./src/pages/nfts.js\");\n/* harmony import */ var _fts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fts */ \"./src/pages/fts.js\");\n/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tokens */ \"./src/pages/tokens.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next.config */ \"./next.config.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_6__);\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tokens__WEBPACK_IMPORTED_MODULE_5__]);\n_tokens__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction WalletData(param) {\n    let { stakeAddress  } = param;\n    _s();\n    const [isVisibleGrid, setIsVisibleGrid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [isLoading, setisLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loadingInfo, setLoadingInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [stakeData, setStakeData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        stake: null,\n        tokenNumber: null,\n        projectNumber: null,\n        nfts: null,\n        fts: null\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getTokens = async ()=>{\n            if (stakeAddress == null) {\n            //base\n            } else {\n                setisLoading(\"fetching\");\n                setIsVisibleGrid(false);\n                setIsVisible(true);\n                let handle = \"\";\n                if (stakeAddress.startsWith(\"$\")) {\n                    handle = stakeAddress;\n                    let stake = await getAddressFromHandle(stakeAddress.slice(1));\n                    stakeAddress = stake;\n                }\n                let stakeData = \"\";\n                //if stake data exist in storage -- get it\n                if (localStorage.getItem(stakeAddress)) {\n                    stakeData = JSON.parse(localStorage.getItem(stakeAddress));\n                } else {\n                    stakeData = await createStakeDataFromStakeAddress(stakeAddress);\n                    localStorage.setItem(stakeAddress, JSON.stringify(stakeData));\n                }\n                setStakeData(stakeData);\n                setisLoading(\"done\");\n                setIsVisible(false);\n                setIsVisibleGrid(true);\n            }\n        };\n        getTokens();\n    }, [\n        stakeAddress\n    ]);\n    if (isLoading == \"fetching\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"loading-symbol\",\n                    style: {\n                        visibility: isVisible ? \"visible\" : \"hidden\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletData.js\",\n                    lineNumber: 64,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"loading-info\",\n                    children: loadingInfo\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletData.js\",\n                    lineNumber: 65,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletData.js\",\n            lineNumber: 62,\n            columnNumber: 12\n        }, this);\n    }\n    async function createStakeDataFromStakeAddress(stake) {\n        let stakeData = \"\";\n        let assets = await getAssetsFromKoios(stakeAddress);\n        //no assets\n        if (assets.length == 0) {\n            stakeData = {\n                stake: stakeAddress,\n                tokenNumber: 0,\n                projectNumber: 0,\n                nfts: [],\n                fts: []\n            };\n        } else {\n            //assets, create new stake data\n            try {\n                let _tokens = await createTokens(assets[0].asset_list);\n                let _tokenNumber = _tokens.length;\n                let _policies = groupTokensByPolicyId(_tokens);\n                let _policyNumber = Object.keys(_policies).length;\n                let _fungObj = sortTokenFungibilities(_policies);\n                stakeData = {\n                    stake: stakeAddress,\n                    tokenNumber: _tokenNumber,\n                    projectNumber: _policyNumber,\n                    nfts: _fungObj.nfts,\n                    fts: _fungObj.fts\n                };\n            } catch (error) {\n                console.log(error);\n            }\n        }\n        return stakeData;\n    }\n    async function getStakeFromAddressKoios(address) {\n        const req = await fetch(\"https://api.koios.rest/api/v0/address_info\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"_addresses\": [\n                    address\n                ]\n            })\n        });\n        const res = await req.json();\n        return res[0].stake_address;\n    }\n    const getAddressFromHandle = async (handle)=>{\n        let policyID = \"f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a\";\n        // A blank Handle name should always be ignored.\n        if (handle.length === 0) {\n        // Handle error.\n        }\n        // Convert handleName to hex encoding.\n        let assetName = Buffer.from(handle).toString(\"hex\");\n        const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\".concat(policyID).concat(assetName, \"/addresses\"), {\n            headers: {\n                // Your Blockfrost API key\n                project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((res)=>res.json());\n        let stake = await getStakeFromAddressKoios(data[0].address);\n        return stake;\n    };\n    function sortTokenFungibilities(policies) {\n        let poly = Object.keys(policies);\n        let _nfts = [];\n        let _fts = [];\n        for (const element of poly){\n            let p = policies[element][0];\n            if (p.quantity == 1) {\n                _nfts.push(policies[element]);\n            } else {\n                _fts.push(policies[element]);\n            }\n        }\n        return {\n            nfts: _nfts,\n            fts: _fts\n        };\n    }\n    async function getAssetsFromKoios(stakeAddress) {\n        const req = await fetch(\"https://api.koios.rest/api/v0/account_assets\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"_stake_addresses\": [\n                    stakeAddress\n                ]\n            })\n        });\n        const res = await req.json();\n        return res;\n    }\n    function groupTokensByPolicyId(tokenList) {\n        const policyList = {};\n        for(const token in tokenList){\n            const policyId = tokenList[token].policy_id;\n            if (policyId in policyList) {\n                policyList[policyId].push(tokenList[token]);\n            } else {\n                policyList[policyId] = [\n                    tokenList[token]\n                ];\n            }\n        }\n        const keys = Object.keys(policyList);\n        //sort policy list by collection number\n        const values = Object.values(policyList);\n        values.sort((a, b)=>a.length - b.length).reverse();\n        const _sorted = {};\n        for(let i = 0; i < keys.length; i++){\n            _sorted[keys[i]] = values[i];\n        }\n        return _sorted;\n    }\n    async function createTokens(assets) {\n        const _tokens = [];\n        let req = await fetch(\"https://api.coingecko.com/api/v3/coins/cardano?localization=false&tickers=false&developer_data=false\");\n        let res = await req.json();\n        let adaUSD = res.market_data.current_price.usd;\n        for(let i = 0; i < assets.length; i++){\n            setLoadingInfo(\"Loading tokens: \" + i + \" of \" + assets.length);\n            let token = new _token__WEBPACK_IMPORTED_MODULE_2__[\"default\"](assets[i].asset_name, assets[i].policy_id, assets[i].quantity);\n            token.metadata = await token.getMetadata();\n            let prices = await token.getPrice();\n            if (prices != null) {\n                token.currentPrice = prices.current * (1 / adaUSD);\n                token.prices = prices;\n            } else {\n                token.prices = null;\n            }\n            if (token.metadata != null) {\n                let ipfs = token.getIpfsFromMetadata();\n                token.ipfs = ipfs;\n                _tokens.push(token);\n            }\n        }\n        let priceSorted = sortByPrice(_tokens);\n        return priceSorted;\n    }\n    function sortByPrice(list) {\n        return list.sort((a, b)=>a.currentPrice - b.currentPrice);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            visibility: isVisibleGrid ? \"visible\" : \"hidden\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tokens__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            tokens: stakeData\n        }, void 0, false, {\n            fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletData.js\",\n            lineNumber: 247,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/walletData.js\",\n        lineNumber: 246,\n        columnNumber: 5\n    }, this);\n}\n_s(WalletData, \"YikdWWCWZ5591xTXOh1G/YmrZzU=\");\n_c = WalletData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WalletData);\nvar _c;\n$RefreshReg$(_c, \"WalletData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksRUFBQztnQkFDeEIsSUFBSU0sT0FBT3JCLE1BQU1zQixtQkFBbUI7Z0JBQ3BDdEIsTUFBTXFCLElBQUksR0FBR0E7Z0JBQ2Q5RCxRQUFRc0MsSUFBSSxDQUFDRztZQUNkLENBQUM7UUFDSDtRQUNBLElBQUl1QixjQUFjQyxZQUFZakU7UUFDOUIsT0FBT2dFO0lBRVQ7SUFFQSxTQUFTQyxZQUFZQyxJQUFJLEVBQUU7UUFDekIsT0FBT0EsS0FBS3JCLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNRCxFQUFFYyxZQUFZLEdBQUdiLEVBQUVhLFlBQVk7SUFDNUQ7SUFHQSxxQkFDRSw4REFBQ3BFO1FBQUlFLE9BQU87WUFBRUMsWUFBWTlCLGdCQUFnQixZQUFZLFFBQVE7UUFBQztrQkFDN0QsNEVBQUNKLCtDQUFNQTtZQUFDMEcsUUFBVTlGOzs7Ozs7Ozs7OztBQUd4QjtHQWpQU1Y7S0FBQUE7QUFtUFQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3dhbGxldERhdGEuanM/ZDY5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVG9rZW4gZnJvbSBcIi4vdG9rZW5cIjtcbmltcG9ydCBOZnRzIGZyb20gXCIuL25mdHNcIjtcbmltcG9ydCBGdHMgZnJvbSBcIi4vZnRzXCI7XG5pbXBvcnQgVG9rZW5zIGZyb20gXCIuL3Rva2Vuc1wiO1xuaW1wb3J0IHsgaGVhZGVycyB9IGZyb20gXCJuZXh0LmNvbmZpZ1wiO1xuXG5cbmZ1bmN0aW9uIFdhbGxldERhdGEgKHtzdGFrZUFkZHJlc3N9KSB7XG4gIGNvbnN0IFtpc1Zpc2libGVHcmlkLCBzZXRJc1Zpc2libGVHcmlkXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldGlzTG9hZGluZ10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvYWRpbmdJbmZvLCBzZXRMb2FkaW5nSW5mb10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc3Rha2VEYXRhLCBzZXRTdGFrZURhdGFdID0gdXNlU3RhdGUoe3N0YWtlOiBudWxsLCB0b2tlbk51bWJlcjogbnVsbCwgcHJvamVjdE51bWJlcjogbnVsbCwgbmZ0czogbnVsbCwgZnRzOiBudWxsfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRUb2tlbnMgPSBhc3luYyAoKSA9PntcblxuICAgICAgaWYoc3Rha2VBZGRyZXNzID09IG51bGwpe1xuICAgICAgICAvL2Jhc2VcbiAgICAgIH1cbiAgICAgIGVsc2V7XG5cbiAgICAgICAgc2V0aXNMb2FkaW5nKCdmZXRjaGluZycpO1xuICAgICAgICBzZXRJc1Zpc2libGVHcmlkKGZhbHNlKTtcbiAgICAgICAgc2V0SXNWaXNpYmxlKHRydWUpO1xuICAgICAgICBsZXQgaGFuZGxlID0gJyc7XG5cbiAgICAgICAgaWYoc3Rha2VBZGRyZXNzLnN0YXJ0c1dpdGgoJyQnKSl7XG4gICAgICAgICAgaGFuZGxlID0gc3Rha2VBZGRyZXNzO1xuICAgICAgICAgIGxldCBzdGFrZSA9IGF3YWl0IGdldEFkZHJlc3NGcm9tSGFuZGxlKHN0YWtlQWRkcmVzcy5zbGljZSgxKSk7XG4gICAgICAgICAgc3Rha2VBZGRyZXNzID0gc3Rha2U7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3Rha2VEYXRhID0gJyc7XG5cbiAgICAgICAgLy9pZiBzdGFrZSBkYXRhIGV4aXN0IGluIHN0b3JhZ2UgLS0gZ2V0IGl0XG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0YWtlQWRkcmVzcykpe1xuICAgICAgICAgIHN0YWtlRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3Rha2VBZGRyZXNzKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2lmIG5vIHN0b3JlZCBkYXRhLCBjcmVhdGUgbmV3XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgc3Rha2VEYXRhID0gYXdhaXQgY3JlYXRlU3Rha2VEYXRhRnJvbVN0YWtlQWRkcmVzcyhzdGFrZUFkZHJlc3MpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0YWtlQWRkcmVzcywgSlNPTi5zdHJpbmdpZnkoc3Rha2VEYXRhKSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRTdGFrZURhdGEoc3Rha2VEYXRhKTtcblxuICAgICAgICBzZXRpc0xvYWRpbmcoJ2RvbmUnKTtcbiAgICAgICAgc2V0SXNWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgc2V0SXNWaXNpYmxlR3JpZCh0cnVlKTtcblxuICAgICAgfVxuXG4gICAgfVxuICAgICAgXG4gICAgZ2V0VG9rZW5zKCk7XG4gIH0sIFtzdGFrZUFkZHJlc3NdKTtcblxuICBpZihpc0xvYWRpbmcgPT0gJ2ZldGNoaW5nJyl7XG4gICAgcmV0dXJuIDxkaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1zeW1ib2xcIiBzdHlsZT17eyB2aXNpYmlsaXR5OiBpc1Zpc2libGUgPyAndmlzaWJsZScgOiAnaGlkZGVuJyB9fT48L2Rpdj5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsb2FkaW5nLWluZm9cIj57bG9hZGluZ0luZm99PC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVN0YWtlRGF0YUZyb21TdGFrZUFkZHJlc3Moc3Rha2Upe1xuXG4gICAgbGV0IHN0YWtlRGF0YSA9ICcnO1xuICAgIGxldCBhc3NldHMgPSBhd2FpdCBnZXRBc3NldHNGcm9tS29pb3Moc3Rha2VBZGRyZXNzKTtcblxuICAgIC8vbm8gYXNzZXRzXG4gICAgaWYoYXNzZXRzLmxlbmd0aCA9PSAwICl7XG4gICAgICBzdGFrZURhdGEgPSB7c3Rha2UgOiBzdGFrZUFkZHJlc3MsIHRva2VuTnVtYmVyOiAwLCBwcm9qZWN0TnVtYmVyOjAsIG5mdHM6IFtdLCBmdHMgOiBbXX07XG5cbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIC8vYXNzZXRzLCBjcmVhdGUgbmV3IHN0YWtlIGRhdGFcbiAgICAgIHRyeXtcbiAgICAgICAgbGV0IF90b2tlbnMgPSBhd2FpdCBjcmVhdGVUb2tlbnMoYXNzZXRzWzBdLmFzc2V0X2xpc3QpO1xuICAgICAgICBsZXQgX3Rva2VuTnVtYmVyID0gX3Rva2Vucy5sZW5ndGg7XG4gICAgICAgIGxldCBfcG9saWNpZXMgPSBncm91cFRva2Vuc0J5UG9saWN5SWQoX3Rva2Vucyk7XG4gICAgICAgIGxldCBfcG9saWN5TnVtYmVyID0gKE9iamVjdC5rZXlzKF9wb2xpY2llcykubGVuZ3RoKTtcbiAgICAgICAgbGV0IF9mdW5nT2JqID0gc29ydFRva2VuRnVuZ2liaWxpdGllcyhfcG9saWNpZXMpO1xuXG4gICAgICAgIHN0YWtlRGF0YSA9IHtzdGFrZTogc3Rha2VBZGRyZXNzLCB0b2tlbk51bWJlcjogX3Rva2VuTnVtYmVyLCBwcm9qZWN0TnVtYmVyOiBfcG9saWN5TnVtYmVyLCBuZnRzOiBfZnVuZ09iai5uZnRzLCBmdHM6IF9mdW5nT2JqLmZ0c307XG4gICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gc3Rha2VEYXRhO1xuXG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBnZXRTdGFrZUZyb21BZGRyZXNzS29pb3MoYWRkcmVzcyl7XG4gICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmtvaW9zLnJlc3QvYXBpL3YwL2FkZHJlc3NfaW5mbycsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBcIl9hZGRyZXNzZXNcIjogWyBhZGRyZXNzXG4gICAgICAgIF1cbiAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCByZXEuanNvbigpO1xuICAgIHJldHVybiByZXNbMF0uc3Rha2VfYWRkcmVzcztcbiAgfVxuXG4gIGNvbnN0IGdldEFkZHJlc3NGcm9tSGFuZGxlID0gYXN5bmMgKGhhbmRsZSkgPT4ge1xuICAgIGxldCBwb2xpY3lJRCA9ICdmMGZmNDhiYmI3YmJlOWQ1OWE0MGYxY2U5MGU5ZTlkMGZmNTAwMmVjNDhmMjMyYjQ5Y2EwZmI5YSc7XG4gICAgXG4gICAgLy8gQSBibGFuayBIYW5kbGUgbmFtZSBzaG91bGQgYWx3YXlzIGJlIGlnbm9yZWQuXG4gICAgaWYgKGhhbmRsZS5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIEhhbmRsZSBlcnJvci5cbiAgICB9XG4gIFxuICAgIC8vIENvbnZlcnQgaGFuZGxlTmFtZSB0byBoZXggZW5jb2RpbmcuXG4gICAgbGV0IGFzc2V0TmFtZSA9IEJ1ZmZlci5mcm9tKGhhbmRsZSkudG9TdHJpbmcoJ2hleCcpO1xuICBcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9jYXJkYW5vLW1haW5uZXQuYmxvY2tmcm9zdC5pby9hcGkvdjAvYXNzZXRzLyR7cG9saWN5SUR9JHthc3NldE5hbWV9L2FkZHJlc3Nlc2AsXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAvLyBZb3VyIEJsb2NrZnJvc3QgQVBJIGtleVxuICAgICAgICAgIHByb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfVxuICAgICAgfVxuICAgICkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgXG4gICAgbGV0IHN0YWtlID0gYXdhaXQgZ2V0U3Rha2VGcm9tQWRkcmVzc0tvaW9zKGRhdGFbMF0uYWRkcmVzcyk7XG4gICAgcmV0dXJuIHN0YWtlO1xuICB9XG5cbiAgZnVuY3Rpb24gc29ydFRva2VuRnVuZ2liaWxpdGllcyhwb2xpY2llcyl7XG4gICAgbGV0IHBvbHkgPSBPYmplY3Qua2V5cyhwb2xpY2llcyk7XG4gICAgbGV0IF9uZnRzID0gW107XG4gICAgbGV0IF9mdHMgPSBbXTtcbiAgICBmb3IoY29uc3QgZWxlbWVudCBvZiBwb2x5KXtcbiAgICAgIGxldCBwID0gcG9saWNpZXNbZWxlbWVudF1bMF07XG4gICAgICBpZihwLnF1YW50aXR5ID09IDEpe1xuICAgICAgICBfbmZ0cy5wdXNoKHBvbGljaWVzW2VsZW1lbnRdKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIF9mdHMucHVzaChwb2xpY2llc1tlbGVtZW50XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7bmZ0cyA6IF9uZnRzLCBmdHMgOiBfZnRzfTtcbiAgfVxuXG5cblxuICBhc3luYyBmdW5jdGlvbiBnZXRBc3NldHNGcm9tS29pb3Moc3Rha2VBZGRyZXNzKXtcbiAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkua29pb3MucmVzdC9hcGkvdjAvYWNjb3VudF9hc3NldHMnLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgXCJfc3Rha2VfYWRkcmVzc2VzXCI6IFtcbiAgICAgICAgICAgICAgc3Rha2VBZGRyZXNzXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCByZXEuanNvbigpO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIGdyb3VwVG9rZW5zQnlQb2xpY3lJZCh0b2tlbkxpc3Qpe1xuXG4gICAgY29uc3QgcG9saWN5TGlzdCA9IHt9O1xuICAgIGZvcihjb25zdCB0b2tlbiBpbiB0b2tlbkxpc3Qpe1xuICAgICAgY29uc3QgcG9saWN5SWQgPSB0b2tlbkxpc3RbdG9rZW5dLnBvbGljeV9pZDtcbiAgICAgIFxuICAgICAgaWYocG9saWN5SWQgaW4gcG9saWN5TGlzdCl7XG4gICAgICAgIHBvbGljeUxpc3RbcG9saWN5SWRdLnB1c2godG9rZW5MaXN0W3Rva2VuXSk7XG4gICAgICB9ZWxzZSB7XG4gICAgICAgIHBvbGljeUxpc3RbcG9saWN5SWRdID0gW3Rva2VuTGlzdFt0b2tlbl1dO1xuICAgICAgfVxuXG4gICAgfVxuICAgIGNvbnN0IGtleXM9IE9iamVjdC5rZXlzKHBvbGljeUxpc3QpO1xuXG4gICAgLy9zb3J0IHBvbGljeSBsaXN0IGJ5IGNvbGxlY3Rpb24gbnVtYmVyXG4gICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhwb2xpY3lMaXN0KTtcbiAgICB2YWx1ZXMuc29ydCgoYSxiKSA9PiBhLmxlbmd0aCAtIGIubGVuZ3RoKS5yZXZlcnNlKCk7XG4gICAgY29uc3QgX3NvcnRlZCA9IHt9O1xuICAgIGZvciAobGV0IGk9MDtpPGtleXMubGVuZ3RoO2krKyl7XG4gICAgICBfc29ydGVkW2tleXNbaV1dID0gdmFsdWVzIFtpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3NvcnRlZDtcblxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVG9rZW5zKGFzc2V0cyl7XG5cblxuXG4gICAgY29uc3QgX3Rva2VucyA9IFtdO1xuXG4gICAgbGV0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5jb2luZ2Vja28uY29tL2FwaS92My9jb2lucy9jYXJkYW5vP2xvY2FsaXphdGlvbj1mYWxzZSZ0aWNrZXJzPWZhbHNlJmRldmVsb3Blcl9kYXRhPWZhbHNlJyk7XG4gICAgbGV0IHJlcyA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgICBsZXQgYWRhVVNEID0gcmVzLm1hcmtldF9kYXRhLmN1cnJlbnRfcHJpY2UudXNkO1xuICAgIFxuXG4gICAgZm9yKGxldCBpID0wOyBpPGFzc2V0cy5sZW5ndGg7aSsrKXtcbiAgICAgIHNldExvYWRpbmdJbmZvKCdMb2FkaW5nIHRva2VuczogJytpICsgJyBvZiAnICthc3NldHMubGVuZ3RoKVxuICAgICAgbGV0IHRva2VuID0gbmV3IFRva2VuKGFzc2V0c1tpXS5hc3NldF9uYW1lLCBhc3NldHNbaV0ucG9saWN5X2lkLCBhc3NldHNbaV0ucXVhbnRpdHkpO1xuICAgICAgdG9rZW4ubWV0YWRhdGEgPSBhd2FpdCB0b2tlbi5nZXRNZXRhZGF0YSgpO1xuICAgICAgbGV0IHByaWNlcyA9IGF3YWl0IHRva2VuLmdldFByaWNlKCk7XG4gICAgICBpZihwcmljZXMgIT0gbnVsbCl7XG4gICAgICAgIHRva2VuLmN1cnJlbnRQcmljZSA9IHByaWNlcy5jdXJyZW50ICogKDEvYWRhVVNEKTtcbiAgICAgICAgdG9rZW4ucHJpY2VzID0gcHJpY2VzO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgdG9rZW4ucHJpY2VzID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYodG9rZW4ubWV0YWRhdGEgIT0gbnVsbCl7XG4gICAgICAgIGxldCBpcGZzID0gdG9rZW4uZ2V0SXBmc0Zyb21NZXRhZGF0YSgpO1xuICAgICAgICB0b2tlbi5pcGZzID0gaXBmcztcbiAgICAgICBfdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgcHJpY2VTb3J0ZWQgPSBzb3J0QnlQcmljZShfdG9rZW5zKTtcbiAgICByZXR1cm4gcHJpY2VTb3J0ZWQ7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIHNvcnRCeVByaWNlKGxpc3QpIHtcbiAgICByZXR1cm4gbGlzdC5zb3J0KChhLCBiKSA9PiBhLmN1cnJlbnRQcmljZSAtIGIuY3VycmVudFByaWNlKTtcbiAgfVxuXG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgc3R5bGU9e3sgdmlzaWJpbGl0eTogaXNWaXNpYmxlR3JpZCA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nIH19PlxuICAgICAgPFRva2VucyB0b2tlbnMgPSB7c3Rha2VEYXRhfS8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhbGxldERhdGE7XG5cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRva2VuIiwiTmZ0cyIsIkZ0cyIsIlRva2VucyIsImhlYWRlcnMiLCJXYWxsZXREYXRhIiwic3Rha2VBZGRyZXNzIiwiaXNWaXNpYmxlR3JpZCIsInNldElzVmlzaWJsZUdyaWQiLCJpc0xvYWRpbmciLCJzZXRpc0xvYWRpbmciLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJsb2FkaW5nSW5mbyIsInNldExvYWRpbmdJbmZvIiwic3Rha2VEYXRhIiwic2V0U3Rha2VEYXRhIiwic3Rha2UiLCJ0b2tlbk51bWJlciIsInByb2plY3ROdW1iZXIiLCJuZnRzIiwiZnRzIiwiZ2V0VG9rZW5zIiwiaGFuZGxlIiwic3RhcnRzV2l0aCIsImdldEFkZHJlc3NGcm9tSGFuZGxlIiwic2xpY2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiY3JlYXRlU3Rha2VEYXRhRnJvbVN0YWtlQWRkcmVzcyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJsYWJlbCIsImFzc2V0cyIsImdldEFzc2V0c0Zyb21Lb2lvcyIsImxlbmd0aCIsIl90b2tlbnMiLCJjcmVhdGVUb2tlbnMiLCJhc3NldF9saXN0IiwiX3Rva2VuTnVtYmVyIiwiX3BvbGljaWVzIiwiZ3JvdXBUb2tlbnNCeVBvbGljeUlkIiwiX3BvbGljeU51bWJlciIsIk9iamVjdCIsImtleXMiLCJfZnVuZ09iaiIsInNvcnRUb2tlbkZ1bmdpYmlsaXRpZXMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGFrZUZyb21BZGRyZXNzS29pb3MiLCJhZGRyZXNzIiwicmVxIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwicmVzIiwianNvbiIsInN0YWtlX2FkZHJlc3MiLCJwb2xpY3lJRCIsImFzc2V0TmFtZSIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsImRhdGEiLCJwcm9qZWN0X2lkIiwidGhlbiIsInBvbGljaWVzIiwicG9seSIsIl9uZnRzIiwiX2Z0cyIsImVsZW1lbnQiLCJwIiwicXVhbnRpdHkiLCJwdXNoIiwidG9rZW5MaXN0IiwicG9saWN5TGlzdCIsInRva2VuIiwicG9saWN5SWQiLCJwb2xpY3lfaWQiLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJyZXZlcnNlIiwiX3NvcnRlZCIsImkiLCJhZGFVU0QiLCJtYXJrZXRfZGF0YSIsImN1cnJlbnRfcHJpY2UiLCJ1c2QiLCJhc3NldF9uYW1lIiwibWV0YWRhdGEiLCJnZXRNZXRhZGF0YSIsInByaWNlcyIsImdldFByaWNlIiwiY3VycmVudFByaWNlIiwiY3VycmVudCIsImlwZnMiLCJnZXRJcGZzRnJvbU1ldGFkYXRhIiwicHJpY2VTb3J0ZWQiLCJzb3J0QnlQcmljZSIsImxpc3QiLCJ0b2tlbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/walletData.js\n"));

/***/ })

});