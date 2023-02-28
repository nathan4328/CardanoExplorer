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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Collection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n\nvar _s = $RefreshSig$();\n\n\n// takes a policy and uses blockfrost to return asset datafrom the collection\nfunction Collection(props) {\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getAssetPageFromBlockfrost() {\n            if (props == null) {\n            // do nothing\n            } else {\n                let policy = props.policy;\n                let assets = [];\n                let assets1 = await loadTokenData(policy, 1);\n                let assets2 = await loadTokenData(policy, 2);\n                if (assets1 == assets2) {\n                    assets = assets1;\n                } else {\n                    assets.push(assets1);\n                    assets.push(assets2);\n                }\n                let tokens = [];\n                for(let i = 0; i < assets[0].length; i++){\n                    let assetId = assets[0][i].asset;\n                    let policy = assetId.substring(0, 56);\n                    let assetName = assetId.substring(56);\n                    let token = new _token__WEBPACK_IMPORTED_MODULE_2__[\"default\"](assetName, policy, assets[0][i].quantity);\n                    tokens.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid-item-ft\",\n                        children: [\n                            token.asset_name,\n                            \" \",\n                            token.policy_id,\n                            \" \",\n                            token.quantity\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                        lineNumber: 39,\n                        columnNumber: 33\n                    }, this));\n                }\n                setDisplay(tokens);\n            }\n        }\n        getAssetPageFromBlockfrost();\n    }, [\n        props\n    ]);\n    // fetch token metadata from blockfrost\n    async function loadTokenData(policy, page) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/policy/\" + policy + \"?page\" + page, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid-ft\",\n        children: display\n    }, void 0, false, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n        lineNumber: 66,\n        columnNumber: 13\n    }, this);\n}\n_s(Collection, \"V4g0lk46myXpHjwjMKzQe3gdcis=\");\n_c = Collection;\nvar _c;\n$RefreshReg$(_c, \"Collection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29sbGVjdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyQztBQUNmO0FBRTVCLDZFQUE2RTtBQUM5RCxTQUFTRyxXQUFXQyxLQUFLLEVBQUM7O0lBRXJDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUE7SUFFdENELGdEQUFTQSxDQUFDLElBQU07UUFDWixlQUFlTyw2QkFBNEI7WUFDdkMsSUFBR0gsU0FBUSxJQUFJLEVBQUM7WUFDWixhQUFhO1lBQ2pCLE9BQ0k7Z0JBQ0EsSUFBSUksU0FBU0osTUFBTUksTUFBTTtnQkFFekIsSUFBSUMsU0FBUyxFQUFFO2dCQUVmLElBQUlDLFVBQVUsTUFBTUMsY0FBY0gsUUFBUTtnQkFFMUMsSUFBSUksVUFBVSxNQUFNRCxjQUFjSCxRQUFRO2dCQUUxQyxJQUFHRSxXQUFXRSxTQUFRO29CQUNsQkgsU0FBU0M7Z0JBQ2IsT0FDSTtvQkFDQUQsT0FBT0ksSUFBSSxDQUFDSDtvQkFDWkQsT0FBT0ksSUFBSSxDQUFDRDtnQkFDaEIsQ0FBQztnQkFFRCxJQUFJRSxTQUFTLEVBQUU7Z0JBRWYsSUFBSSxJQUFJQyxJQUFFLEdBQUdBLElBQUVOLE1BQU0sQ0FBQyxFQUFFLENBQUNPLE1BQU0sRUFBRUQsSUFBSTtvQkFDakMsSUFBSUUsVUFBVVIsTUFBTSxDQUFDLEVBQUUsQ0FBQ00sRUFBRSxDQUFDRyxLQUFLO29CQUNoQyxJQUFJVixTQUFTUyxRQUFRRSxTQUFTLENBQUMsR0FBRTtvQkFDakMsSUFBSUMsWUFBWUgsUUFBUUUsU0FBUyxDQUFDO29CQUVsQyxJQUFJRSxRQUFRLElBQUluQiw4Q0FBS0EsQ0FBQ2tCLFdBQVdaLFFBQVFDLE1BQU0sQ0FBQyxFQUFFLENBQUNNLEVBQUUsQ0FBQ08sUUFBUTtvQkFDOURSLE9BQU9ELElBQUksZUFBQyw4REFBQ1U7d0JBQUlDLFdBQVU7OzRCQUFnQkgsTUFBTUksVUFBVTs0QkFBQzs0QkFBRUosTUFBTUssU0FBUzs0QkFBQzs0QkFBRUwsTUFBTUMsUUFBUTs7Ozs7OztnQkFDbEc7Z0JBRUFoQixXQUFXUTtZQUlmLENBQUM7UUFDTDtRQUNBUDtJQUNKLEdBQUc7UUFBQ0g7S0FBTTtJQUVWLHVDQUF1QztJQUN2QyxlQUFlTyxjQUFjSCxNQUFNLEVBQUVtQixJQUFJLEVBQUM7UUFDdEMsSUFBRztZQUNDLE1BQU1DLE9BQU8sTUFBTUMsTUFBTSxnRUFBOERyQixTQUFPLFVBQVFtQixNQUN0RztnQkFBQ0csU0FBUTtvQkFBQ0MsWUFBWTtvQkFBMkMsaUJBQWlCO2dCQUFrQjtZQUFDO1lBQ3JHLE1BQU1DLE1BQU0sTUFBTUosS0FBS0ssSUFBSTtZQUMzQixJQUFHTCxLQUFLTSxNQUFNLElBQUksS0FBSTtnQkFDbEIsT0FBTyxJQUFJO1lBQ2YsQ0FBQztZQUNELE9BQU9GO1FBQ1gsRUFBQyxPQUFNRyxPQUFNO1lBQ1QsT0FBTyxJQUFJO1FBQ2Y7SUFDQTtJQUVKLHFCQUFRLDhEQUFDWjtRQUFJQyxXQUFVO2tCQUFXbkI7Ozs7OztBQUN0QyxDQUFDO0dBOUR1QkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbGxlY3Rpb24uanM/OWI0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBUb2tlbiBmcm9tIFwiLi90b2tlblwiO1xuXG4vLyB0YWtlcyBhIHBvbGljeSBhbmQgdXNlcyBibG9ja2Zyb3N0IHRvIHJldHVybiBhc3NldCBkYXRhZnJvbSB0aGUgY29sbGVjdGlvblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29sbGVjdGlvbihwcm9wcyl7XG5cbiAgICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0QXNzZXRQYWdlRnJvbUJsb2NrZnJvc3QoKXtcbiAgICAgICAgICAgIGlmKHByb3BzID09bnVsbCl7XG4gICAgICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBsZXQgcG9saWN5ID0gcHJvcHMucG9saWN5O1xuXG4gICAgICAgICAgICAgICAgbGV0IGFzc2V0cyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgbGV0IGFzc2V0czEgPSBhd2FpdCBsb2FkVG9rZW5EYXRhKHBvbGljeSwgMSk7XG5cbiAgICAgICAgICAgICAgICBsZXQgYXNzZXRzMiA9IGF3YWl0IGxvYWRUb2tlbkRhdGEocG9saWN5LCAyKTtcblxuICAgICAgICAgICAgICAgIGlmKGFzc2V0czEgPT0gYXNzZXRzMil7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0cyA9IGFzc2V0czE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0cy5wdXNoKGFzc2V0czEpO1xuICAgICAgICAgICAgICAgICAgICBhc3NldHMucHVzaChhc3NldHMyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgdG9rZW5zID0gW107XG5cbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxhc3NldHNbMF0ubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXNzZXRJZCA9IGFzc2V0c1swXVtpXS5hc3NldDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvbGljeSA9IGFzc2V0SWQuc3Vic3RyaW5nKDAsNTYpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXNzZXROYW1lID0gYXNzZXRJZC5zdWJzdHJpbmcoNTYpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IG5ldyBUb2tlbihhc3NldE5hbWUsIHBvbGljeSwgYXNzZXRzWzBdW2ldLnF1YW50aXR5KTtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW0tZnRcIj57dG9rZW4uYXNzZXRfbmFtZX0ge3Rva2VuLnBvbGljeV9pZH0ge3Rva2VuLnF1YW50aXR5fTwvZGl2Pik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2V0RGlzcGxheSh0b2tlbnMpO1xuXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnZXRBc3NldFBhZ2VGcm9tQmxvY2tmcm9zdCgpXG4gICAgfSwgW3Byb3BzXSlcblxuICAgIC8vIGZldGNoIHRva2VuIG1ldGFkYXRhIGZyb20gYmxvY2tmcm9zdFxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRUb2tlbkRhdGEocG9saWN5LCBwYWdlKXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2NhcmRhbm8tbWFpbm5ldC5ibG9ja2Zyb3N0LmlvL2FwaS92MC9hc3NldHMvcG9saWN5LycrcG9saWN5Kyc/cGFnZScrcGFnZSxcbiAgICAgICAgICAgIHtoZWFkZXJzOntwcm9qZWN0X2lkOiAnbWFpbm5ldG9XNjFZWVNpT29MU2FOUTZkelRya0FHNGF6WFZJcnZoJywgJ2NhY2hlLWNvbnRyb2wnOiAnbWF4LWFnZT0zMTUzNjAwMCd9fSk7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgICAgICAgICAgIGlmKGRhdGEuc3RhdHVzICE9IDIwMCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZnRcIj57ZGlzcGxheX08L2Rpdj4pXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVG9rZW4iLCJDb2xsZWN0aW9uIiwicHJvcHMiLCJkaXNwbGF5Iiwic2V0RGlzcGxheSIsImdldEFzc2V0UGFnZUZyb21CbG9ja2Zyb3N0IiwicG9saWN5IiwiYXNzZXRzIiwiYXNzZXRzMSIsImxvYWRUb2tlbkRhdGEiLCJhc3NldHMyIiwicHVzaCIsInRva2VucyIsImkiLCJsZW5ndGgiLCJhc3NldElkIiwiYXNzZXQiLCJzdWJzdHJpbmciLCJhc3NldE5hbWUiLCJ0b2tlbiIsInF1YW50aXR5IiwiZGl2IiwiY2xhc3NOYW1lIiwiYXNzZXRfbmFtZSIsInBvbGljeV9pZCIsInBhZ2UiLCJkYXRhIiwiZmV0Y2giLCJoZWFkZXJzIiwicHJvamVjdF9pZCIsInJlcyIsImpzb24iLCJzdGF0dXMiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/collection.js\n"));

/***/ })

});