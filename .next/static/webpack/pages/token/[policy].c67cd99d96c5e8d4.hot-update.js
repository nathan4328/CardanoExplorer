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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Collection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n\nvar _s = $RefreshSig$();\n\n\n// takes a policy and uses blockfrost to return asset datafrom the collection\nfunction Collection(props) {\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [tokens, setTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [maxItems, setMaxItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getAssetPageFromBlockfrost() {\n            if (props == null) {\n            // do nothing\n            } else {\n                let policy = props.policy;\n                let assets = [];\n                let assets1 = await loadTokenData(policy, 1);\n                let assets2 = await loadTokenData(policy, 2);\n                if (assets1 == assets2) {\n                    assets = assets1;\n                } else {\n                    assets.push(assets1);\n                    assets.push(assets2);\n                }\n                console.log(assets);\n                setTokens(assets);\n            }\n        }\n        getAssetPageFromBlockfrost();\n    }, [\n        props\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function func() {\n            if (tokens != null) {\n                let display = [];\n                for(let i = 0; i < 20; i++){\n                    let assetId = tokens[0][i].asset;\n                    let policy = assetId.substring(0, 56);\n                    let assetName = assetId.substring(56);\n                    let token = new _token__WEBPACK_IMPORTED_MODULE_2__[\"default\"](assetName, policy, tokens[0][i].quantity);\n                    token.metadata = await token.getMetadata();\n                    let name = \"\";\n                    if (token.metadata != null) {\n                        name = token.metadata.name;\n                    }\n                    display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid-item-ft\",\n                        children: [\n                            assetName,\n                            \" \",\n                            name\n                        ]\n                    }, i, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                        lineNumber: 56,\n                        columnNumber: 34\n                    }, this));\n                }\n                setDisplay(display);\n            }\n        }\n        func();\n    }, [\n        tokens\n    ]);\n    // fetch token metadata from blockfrost\n    async function loadTokenData(policy, page) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/policy/\" + policy + \"?page\" + page, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid-ft\",\n        children: display\n    }, void 0, false, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n        lineNumber: 80,\n        columnNumber: 13\n    }, this);\n}\n_s(Collection, \"p7rL2IR0hLz4MqbTa8QRjN6PLpM=\");\n_c = Collection;\nvar _c;\n$RefreshReg$(_c, \"Collection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29sbGVjdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyQztBQUNmO0FBRTVCLDZFQUE2RTtBQUM5RCxTQUFTRyxXQUFXQyxLQUFLLEVBQUM7O0lBRXJDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUE7SUFDdEMsTUFBTSxDQUFDTSxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQTtJQUNwQyxNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBO0lBRXhDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osZUFBZVcsNkJBQTRCO1lBQ3ZDLElBQUdQLFNBQVEsSUFBSSxFQUFDO1lBQ1osYUFBYTtZQUNqQixPQUNJO2dCQUNBLElBQUlRLFNBQVNSLE1BQU1RLE1BQU07Z0JBRXpCLElBQUlDLFNBQVMsRUFBRTtnQkFFZixJQUFJQyxVQUFVLE1BQU1DLGNBQWNILFFBQVE7Z0JBRTFDLElBQUlJLFVBQVUsTUFBTUQsY0FBY0gsUUFBUTtnQkFFMUMsSUFBR0UsV0FBV0UsU0FBUTtvQkFDbEJILFNBQVNDO2dCQUNiLE9BQ0k7b0JBQ0FELE9BQU9JLElBQUksQ0FBQ0g7b0JBQ1pELE9BQU9JLElBQUksQ0FBQ0Q7Z0JBQ2hCLENBQUM7Z0JBRURFLFFBQVFDLEdBQUcsQ0FBQ047Z0JBQ1pMLFVBQVVLO1lBQ2QsQ0FBQztRQUNMO1FBQ0FGO0lBQ0osR0FBRztRQUFDUDtLQUFNO0lBRVZKLGdEQUFTQSxDQUFDLElBQU07UUFDWixlQUFlb0IsT0FBUTtZQUNuQixJQUFHYixVQUFVLElBQUksRUFBQztnQkFDZCxJQUFJRixVQUFVLEVBQUU7Z0JBQ2hCLElBQUksSUFBSWdCLElBQUUsR0FBR0EsSUFBRSxJQUFJQSxJQUFJO29CQUNuQixJQUFJQyxVQUFVZixNQUFNLENBQUMsRUFBRSxDQUFDYyxFQUFFLENBQUNFLEtBQUs7b0JBQ2hDLElBQUlYLFNBQVNVLFFBQVFFLFNBQVMsQ0FBQyxHQUFFO29CQUNqQyxJQUFJQyxZQUFZSCxRQUFRRSxTQUFTLENBQUM7b0JBRWxDLElBQUlFLFFBQVEsSUFBSXhCLDhDQUFLQSxDQUFDdUIsV0FBV2IsUUFBUUwsTUFBTSxDQUFDLEVBQUUsQ0FBQ2MsRUFBRSxDQUFDTSxRQUFRO29CQUM5REQsTUFBTUUsUUFBUSxHQUFHLE1BQU1GLE1BQU1HLFdBQVc7b0JBRXhDLElBQUlDLE9BQU87b0JBQ1gsSUFBR0osTUFBTUUsUUFBUSxJQUFJLElBQUksRUFBQzt3QkFDdEJFLE9BQU9KLE1BQU1FLFFBQVEsQ0FBQ0UsSUFBSTtvQkFDOUIsQ0FBQztvQkFDRHpCLFFBQVFZLElBQUksZUFBQyw4REFBQ2M7d0JBQUlDLFdBQVU7OzRCQUF3QlA7NEJBQVU7NEJBQUVLOzt1QkFBaEJUOzs7OztnQkFDcEQ7Z0JBRUFmLFdBQVdEO1lBQ2YsQ0FBQztRQUNMO1FBQ0FlO0lBQ0osR0FBRztRQUFDYjtLQUFPO0lBRVgsdUNBQXVDO0lBQ3ZDLGVBQWVRLGNBQWNILE1BQU0sRUFBRXFCLElBQUksRUFBQztRQUN0QyxJQUFHO1lBQ0MsTUFBTUMsT0FBTyxNQUFNQyxNQUFNLGdFQUE4RHZCLFNBQU8sVUFBUXFCLE1BQ3RHO2dCQUFDRyxTQUFRO29CQUFDQyxZQUFZO29CQUEyQyxpQkFBaUI7Z0JBQWtCO1lBQUM7WUFDckcsTUFBTUMsTUFBTSxNQUFNSixLQUFLSyxJQUFJO1lBQzNCLElBQUdMLEtBQUtNLE1BQU0sSUFBSSxLQUFJO2dCQUNsQixPQUFPLElBQUk7WUFDZixDQUFDO1lBQ0QsT0FBT0Y7UUFDWCxFQUFDLE9BQU1HLE9BQU07WUFDVCxPQUFPLElBQUk7UUFDZjtJQUNBO0lBRUoscUJBQVEsOERBQUNWO1FBQUlDLFdBQVU7a0JBQVczQjs7Ozs7O0FBQ3RDLENBQUM7R0E1RXVCRjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29sbGVjdGlvbi5qcz85YjQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFRva2VuIGZyb20gXCIuL3Rva2VuXCI7XG5cbi8vIHRha2VzIGEgcG9saWN5IGFuZCB1c2VzIGJsb2NrZnJvc3QgdG8gcmV0dXJuIGFzc2V0IGRhdGFmcm9tIHRoZSBjb2xsZWN0aW9uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2xsZWN0aW9uKHByb3BzKXtcblxuICAgIGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW3Rva2Vucywgc2V0VG9rZW5zXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW21heEl0ZW1zLCBzZXRNYXhJdGVtc10gPSB1c2VTdGF0ZSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0QXNzZXRQYWdlRnJvbUJsb2NrZnJvc3QoKXtcbiAgICAgICAgICAgIGlmKHByb3BzID09bnVsbCl7XG4gICAgICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBsZXQgcG9saWN5ID0gcHJvcHMucG9saWN5O1xuXG4gICAgICAgICAgICAgICAgbGV0IGFzc2V0cyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgbGV0IGFzc2V0czEgPSBhd2FpdCBsb2FkVG9rZW5EYXRhKHBvbGljeSwgMSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgYXNzZXRzMiA9IGF3YWl0IGxvYWRUb2tlbkRhdGEocG9saWN5LCAyKTtcblxuICAgICAgICAgICAgICAgIGlmKGFzc2V0czEgPT0gYXNzZXRzMil7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0cyA9IGFzc2V0czE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0cy5wdXNoKGFzc2V0czEpO1xuICAgICAgICAgICAgICAgICAgICBhc3NldHMucHVzaChhc3NldHMyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhc3NldHMpO1xuICAgICAgICAgICAgICAgIHNldFRva2Vucyhhc3NldHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldEFzc2V0UGFnZUZyb21CbG9ja2Zyb3N0KClcbiAgICB9LCBbcHJvcHNdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZnVuYyAoKSB7XG4gICAgICAgICAgICBpZih0b2tlbnMgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgbGV0IGRpc3BsYXkgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTwyMDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFzc2V0SWQgPSB0b2tlbnNbMF1baV0uYXNzZXQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb2xpY3kgPSBhc3NldElkLnN1YnN0cmluZygwLDU2KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFzc2V0TmFtZSA9IGFzc2V0SWQuc3Vic3RyaW5nKDU2KTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBuZXcgVG9rZW4oYXNzZXROYW1lLCBwb2xpY3ksIHRva2Vuc1swXVtpXS5xdWFudGl0eSk7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuLm1ldGFkYXRhID0gYXdhaXQgdG9rZW4uZ2V0TWV0YWRhdGEoKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBpZih0b2tlbi5tZXRhZGF0YSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSB0b2tlbi5tZXRhZGF0YS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXkucHVzaCg8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbS1mdFwiIGtleT17aX0+e2Fzc2V0TmFtZX0ge25hbWV9PC9kaXY+KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZXREaXNwbGF5KGRpc3BsYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmMoKTtcbiAgICB9LCBbdG9rZW5zXSlcblxuICAgIC8vIGZldGNoIHRva2VuIG1ldGFkYXRhIGZyb20gYmxvY2tmcm9zdFxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRUb2tlbkRhdGEocG9saWN5LCBwYWdlKXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2NhcmRhbm8tbWFpbm5ldC5ibG9ja2Zyb3N0LmlvL2FwaS92MC9hc3NldHMvcG9saWN5LycrcG9saWN5Kyc/cGFnZScrcGFnZSxcbiAgICAgICAgICAgIHtoZWFkZXJzOntwcm9qZWN0X2lkOiAnbWFpbm5ldG9XNjFZWVNpT29MU2FOUTZkelRya0FHNGF6WFZJcnZoJywgJ2NhY2hlLWNvbnRyb2wnOiAnbWF4LWFnZT0zMTUzNjAwMCd9fSk7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgICAgICAgICAgIGlmKGRhdGEuc3RhdHVzICE9IDIwMCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZnRcIj57ZGlzcGxheX08L2Rpdj4pXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVG9rZW4iLCJDb2xsZWN0aW9uIiwicHJvcHMiLCJkaXNwbGF5Iiwic2V0RGlzcGxheSIsInRva2VucyIsInNldFRva2VucyIsIm1heEl0ZW1zIiwic2V0TWF4SXRlbXMiLCJnZXRBc3NldFBhZ2VGcm9tQmxvY2tmcm9zdCIsInBvbGljeSIsImFzc2V0cyIsImFzc2V0czEiLCJsb2FkVG9rZW5EYXRhIiwiYXNzZXRzMiIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiZnVuYyIsImkiLCJhc3NldElkIiwiYXNzZXQiLCJzdWJzdHJpbmciLCJhc3NldE5hbWUiLCJ0b2tlbiIsInF1YW50aXR5IiwibWV0YWRhdGEiLCJnZXRNZXRhZGF0YSIsIm5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJwYWdlIiwiZGF0YSIsImZldGNoIiwiaGVhZGVycyIsInByb2plY3RfaWQiLCJyZXMiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/collection.js\n"));

/***/ })

});