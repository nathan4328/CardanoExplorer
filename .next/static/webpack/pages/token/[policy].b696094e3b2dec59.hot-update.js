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

/***/ "./src/pages/collection.js":
/*!*********************************!*\
  !*** ./src/pages/collection.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Collection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// takes a policy and uses blockfrost to return asset datafrom the collection\nfunction Collection(props) {\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [tokens, setTokens] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [minItems, setMinItems] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const [maxItems, setMaxItems] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(10);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function getAssetPageFromBlockfrost() {\n            if (props == null) {\n            // do nothing\n            } else {\n                let policy = props.policy;\n                let assets = [];\n                let assets1 = await loadTokenData(policy, 1);\n                let assets2 = await loadTokenData(policy, 2);\n                if (assets1 == assets2) {\n                    assets = assets1;\n                } else {\n                    assets.push(assets1);\n                    assets.push(assets2);\n                }\n                console.log(assets);\n                setTokens(assets);\n            }\n        }\n        getAssetPageFromBlockfrost();\n    }, [\n        props\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function func() {\n            if (tokens != null) {\n                let display = [];\n                for(let i = minItems; i < maxItems; i++){\n                    let assetId = tokens[0][i].asset;\n                    let policy = assetId.substring(0, 56);\n                    let assetName = assetId.substring(56);\n                    let token = new _token__WEBPACK_IMPORTED_MODULE_4__[\"default\"](assetName, policy, tokens[0][i].quantity);\n                    token.metadata = await token.getMetadata();\n                    let name = \"\";\n                    if (token.metadata != null) {\n                        token.ipfs = token.getIpfsFromMetadata();\n                        name = token.metadata.name;\n                    }\n                    display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid-item\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"grid-img\",\n                                src: token.ipfs,\n                                alt: \"failed to load image\",\n                                width: 270,\n                                height: 270,\n                                onClick: ()=>router.push(\"/token/\" + token.policy_id + token.asset_name + \"?stake=\" + props.stake)\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                                lineNumber: 65,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid-item-text\",\n                                children: [\n                                    \"Name: \",\n                                    name.substring(0, 7),\n                                    \"...\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                                lineNumber: 73,\n                                columnNumber: 23\n                            }, this)\n                        ]\n                    }, token.asset_name + \"nft\", true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                        lineNumber: 64,\n                        columnNumber: 21\n                    }, this));\n                }\n                setDisplay(display);\n            }\n        }\n        func();\n    }, [\n        tokens,\n        minItems\n    ]);\n    // fetch token metadata from blockfrost\n    async function loadTokenData(policy, page) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/policy/\" + policy + \"?page\" + page, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    function nextPage() {\n        setMinItems(minItems + 10);\n        setMaxItems(maxItems + 10);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"setting-button\",\n                onClick: nextPage,\n                children: \"Next\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                lineNumber: 106,\n                columnNumber: 9\n            }, this),\n            \"View Collection\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-nft\",\n                children: display\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                lineNumber: 107,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n        lineNumber: 105,\n        columnNumber: 13\n    }, this);\n}\n_s(Collection, \"iBBFHdFHi9Bx21/or2/cJENR0is=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Collection;\nvar _c;\n$RefreshReg$(_c, \"Collection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVErQixNQUN0RztnQkFBQ0csU0FBUTtvQkFBQ0MsWUFBWTtvQkFBMkMsaUJBQWlCO2dCQUFrQjtZQUFDO1lBQ3JHLE1BQU1DLE1BQU0sTUFBTUosS0FBS0ssSUFBSTtZQUMzQixJQUFHTCxLQUFLTSxNQUFNLElBQUksS0FBSTtnQkFDbEIsT0FBTyxJQUFJO1lBQ2YsQ0FBQztZQUNELE9BQU9GO1FBQ1gsRUFBQyxPQUFNRyxPQUFNO1lBQ1QsT0FBTyxJQUFJO1FBQ2Y7SUFDSjtJQUVBLFNBQVNDLFdBQVU7UUFDZjdDLFlBQVlELFdBQVc7UUFDdkJHLFlBQVlELFdBQVc7SUFDM0I7SUFFQSxxQkFBUSw4REFBQ3lCOzswQkFDTCw4REFBQ29CO2dCQUFPbkIsV0FBVTtnQkFBaUJLLFNBQVNhOzBCQUFVOzs7Ozs7WUFBYTswQkFDbkUsOERBQUNuQjtnQkFBSUMsV0FBVTswQkFBWWhDOzs7Ozs7Ozs7Ozs7QUFFbkMsQ0FBQztHQXRHdUJGOztRQU9MSixrREFBU0E7OztLQVBKSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29sbGVjdGlvbi5qcz85YjQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBUb2tlbiBmcm9tIFwiLi90b2tlblwiO1xuXG4vLyB0YWtlcyBhIHBvbGljeSBhbmQgdXNlcyBibG9ja2Zyb3N0IHRvIHJldHVybiBhc3NldCBkYXRhZnJvbSB0aGUgY29sbGVjdGlvblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29sbGVjdGlvbihwcm9wcyl7XG5cbiAgICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFt0b2tlbnMsIHNldFRva2Vuc10gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFttaW5JdGVtcywgc2V0TWluSXRlbXNdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW21heEl0ZW1zLCBzZXRNYXhJdGVtc10gPSB1c2VTdGF0ZSgxMCk7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGdldEFzc2V0UGFnZUZyb21CbG9ja2Zyb3N0KCl7XG4gICAgICAgICAgICBpZihwcm9wcyA9PW51bGwpe1xuICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbGV0IHBvbGljeSA9IHByb3BzLnBvbGljeTtcblxuICAgICAgICAgICAgICAgIGxldCBhc3NldHMgPSBbXTtcblxuICAgICAgICAgICAgICAgIGxldCBhc3NldHMxID0gYXdhaXQgbG9hZFRva2VuRGF0YShwb2xpY3ksIDEpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGFzc2V0czIgPSBhd2FpdCBsb2FkVG9rZW5EYXRhKHBvbGljeSwgMik7XG5cbiAgICAgICAgICAgICAgICBpZihhc3NldHMxID09IGFzc2V0czIpe1xuICAgICAgICAgICAgICAgICAgICBhc3NldHMgPSBhc3NldHMxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICBhc3NldHMucHVzaChhc3NldHMxKTtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzLnB1c2goYXNzZXRzMik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXNzZXRzKTtcbiAgICAgICAgICAgICAgICBzZXRUb2tlbnMoYXNzZXRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnZXRBc3NldFBhZ2VGcm9tQmxvY2tmcm9zdCgpXG4gICAgfSwgW3Byb3BzXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZ1bmMgKCkge1xuICAgICAgICAgICAgaWYodG9rZW5zICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGxldCBkaXNwbGF5ID0gW107XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPW1pbkl0ZW1zOyBpPG1heEl0ZW1zOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXNzZXRJZCA9IHRva2Vuc1swXVtpXS5hc3NldDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvbGljeSA9IGFzc2V0SWQuc3Vic3RyaW5nKDAsNTYpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXNzZXROYW1lID0gYXNzZXRJZC5zdWJzdHJpbmcoNTYpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IG5ldyBUb2tlbihhc3NldE5hbWUsIHBvbGljeSwgdG9rZW5zWzBdW2ldLnF1YW50aXR5KTtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4ubWV0YWRhdGEgPSBhd2FpdCB0b2tlbi5nZXRNZXRhZGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRva2VuLm1ldGFkYXRhICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW4uaXBmcyA9IHRva2VuLmdldElwZnNGcm9tTWV0YWRhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSB0b2tlbi5tZXRhZGF0YS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheS5wdXNoKCAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt0b2tlbi5hc3NldF9uYW1lICsgJ25mdCd9IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkLWltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXt0b2tlbi5pcGZzfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImZhaWxlZCB0byBsb2FkIGltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjcwfVxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjcwfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvdG9rZW4vJyArIHRva2VuLnBvbGljeV9pZCArIHRva2VuLmFzc2V0X25hbWUrJz9zdGFrZT0nK3Byb3BzLnN0YWtlKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgTmFtZToge25hbWUuc3Vic3RyaW5nKDAsIDcpfS4uLlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2V0RGlzcGxheShkaXNwbGF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jKCk7XG4gICAgfSwgW3Rva2VucywgbWluSXRlbXNdKVxuXG4gICAgLy8gZmV0Y2ggdG9rZW4gbWV0YWRhdGEgZnJvbSBibG9ja2Zyb3N0XG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZFRva2VuRGF0YShwb2xpY3ksIHBhZ2Upe1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vY2FyZGFuby1tYWlubmV0LmJsb2NrZnJvc3QuaW8vYXBpL3YwL2Fzc2V0cy9wb2xpY3kvJytwb2xpY3krJz9wYWdlJytwYWdlLFxuICAgICAgICAgICAge2hlYWRlcnM6e3Byb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnLCAnY2FjaGUtY29udHJvbCc6ICdtYXgtYWdlPTMxNTM2MDAwJ319KTtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRhdGEuanNvbigpO1xuICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXMgIT0gMjAwKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5leHRQYWdlKCl7XG4gICAgICAgIHNldE1pbkl0ZW1zKG1pbkl0ZW1zICsgMTApO1xuICAgICAgICBzZXRNYXhJdGVtcyhtYXhJdGVtcyArIDEwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2V0dGluZy1idXR0b25cIiBvbkNsaWNrPXtuZXh0UGFnZX0+TmV4dDwvYnV0dG9uPlZpZXcgQ29sbGVjdGlvblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtbmZ0XCI+e2Rpc3BsYXl9PC9kaXY+XG4gICAgICAgIDwvZGl2Pilcbn0iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRva2VuIiwiQ29sbGVjdGlvbiIsInByb3BzIiwiZGlzcGxheSIsInNldERpc3BsYXkiLCJ0b2tlbnMiLCJzZXRUb2tlbnMiLCJtaW5JdGVtcyIsInNldE1pbkl0ZW1zIiwibWF4SXRlbXMiLCJzZXRNYXhJdGVtcyIsInJvdXRlciIsImdldEFzc2V0UGFnZUZyb21CbG9ja2Zyb3N0IiwicG9saWN5IiwiYXNzZXRzIiwiYXNzZXRzMSIsImxvYWRUb2tlbkRhdGEiLCJhc3NldHMyIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJmdW5jIiwiaSIsImFzc2V0SWQiLCJhc3NldCIsInN1YnN0cmluZyIsImFzc2V0TmFtZSIsInRva2VuIiwicXVhbnRpdHkiLCJtZXRhZGF0YSIsImdldE1ldGFkYXRhIiwibmFtZSIsImlwZnMiLCJnZXRJcGZzRnJvbU1ldGFkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJvbkNsaWNrIiwicG9saWN5X2lkIiwiYXNzZXRfbmFtZSIsInN0YWtlIiwicGFnZSIsImRhdGEiLCJmZXRjaCIsImhlYWRlcnMiLCJwcm9qZWN0X2lkIiwicmVzIiwianNvbiIsInN0YXR1cyIsImVycm9yIiwibmV4dFBhZ2UiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/collection.js\n"));

/***/ })

});