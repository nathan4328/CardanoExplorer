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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Collection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token */ \"./src/pages/token.js\");\n\nvar _s = $RefreshSig$();\n\n\n// takes a policy and uses blockfrost to return asset datafrom the collection\nfunction Collection(props) {\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [tokens, setTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [maxItems, setMaxItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(20);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getAssetPageFromBlockfrost() {\n            if (props == null) {\n            // do nothing\n            } else {\n                let policy = props.policy;\n                let assets = [];\n                let assets1 = await loadTokenData(policy, 1);\n                let assets2 = await loadTokenData(policy, 2);\n                if (assets1 == assets2) {\n                    assets = assets1;\n                } else {\n                    assets.push(assets1);\n                    assets.push(assets2);\n                }\n                console.log(assets);\n                setTokens(assets);\n            }\n        }\n        getAssetPageFromBlockfrost();\n    }, [\n        props\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function func() {\n            if (tokens != null) {\n                let display = [];\n                for(let i = 0; i < maxItems; i++){\n                    let assetId = tokens[0][i].asset;\n                    let policy = assetId.substring(0, 56);\n                    let assetName = assetId.substring(56);\n                    let token = new _token__WEBPACK_IMPORTED_MODULE_2__[\"default\"](assetName, policy, tokens[0][i].quantity);\n                    token.metadata = await token.getMetadata();\n                    let name = \"\";\n                    if (token.metadata != null) {\n                        name = token.metadata.name;\n                    }\n                    display.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid-item-ft\",\n                        children: [\n                            assetName,\n                            \" \",\n                            name\n                        ]\n                    }, i, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n                        lineNumber: 56,\n                        columnNumber: 34\n                    }, this));\n                }\n                setDisplay(display);\n            }\n        }\n        func();\n    }, [\n        tokens\n    ]);\n    // fetch token metadata from blockfrost\n    async function loadTokenData(policy, page) {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/policy/\" + policy + \"?page\" + page, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid-ft\",\n        children: display\n    }, void 0, false, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/collection.js\",\n        lineNumber: 80,\n        columnNumber: 13\n    }, this);\n}\n_s(Collection, \"/G4+J1icx6jSZOb46s5o6BontS8=\");\n_c = Collection;\nvar _c;\n$RefreshReg$(_c, \"Collection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29sbGVjdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyQztBQUNmO0FBRTVCLDZFQUE2RTtBQUM5RCxTQUFTRyxXQUFXQyxLQUFLLEVBQUM7O0lBRXJDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUE7SUFDdEMsTUFBTSxDQUFDTSxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQTtJQUNwQyxNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7SUFFekNELGdEQUFTQSxDQUFDLElBQU07UUFDWixlQUFlVyw2QkFBNEI7WUFDdkMsSUFBR1AsU0FBUSxJQUFJLEVBQUM7WUFDWixhQUFhO1lBQ2pCLE9BQ0k7Z0JBQ0EsSUFBSVEsU0FBU1IsTUFBTVEsTUFBTTtnQkFFekIsSUFBSUMsU0FBUyxFQUFFO2dCQUVmLElBQUlDLFVBQVUsTUFBTUMsY0FBY0gsUUFBUTtnQkFFMUMsSUFBSUksVUFBVSxNQUFNRCxjQUFjSCxRQUFRO2dCQUUxQyxJQUFHRSxXQUFXRSxTQUFRO29CQUNsQkgsU0FBU0M7Z0JBQ2IsT0FDSTtvQkFDQUQsT0FBT0ksSUFBSSxDQUFDSDtvQkFDWkQsT0FBT0ksSUFBSSxDQUFDRDtnQkFDaEIsQ0FBQztnQkFFREUsUUFBUUMsR0FBRyxDQUFDTjtnQkFDWkwsVUFBVUs7WUFDZCxDQUFDO1FBQ0w7UUFDQUY7SUFDSixHQUFHO1FBQUNQO0tBQU07SUFFVkosZ0RBQVNBLENBQUMsSUFBTTtRQUNaLGVBQWVvQixPQUFRO1lBQ25CLElBQUdiLFVBQVUsSUFBSSxFQUFDO2dCQUNkLElBQUlGLFVBQVUsRUFBRTtnQkFDaEIsSUFBSSxJQUFJZ0IsSUFBRSxHQUFHQSxJQUFFWixVQUFVWSxJQUFJO29CQUN6QixJQUFJQyxVQUFVZixNQUFNLENBQUMsRUFBRSxDQUFDYyxFQUFFLENBQUNFLEtBQUs7b0JBQ2hDLElBQUlYLFNBQVNVLFFBQVFFLFNBQVMsQ0FBQyxHQUFFO29CQUNqQyxJQUFJQyxZQUFZSCxRQUFRRSxTQUFTLENBQUM7b0JBRWxDLElBQUlFLFFBQVEsSUFBSXhCLDhDQUFLQSxDQUFDdUIsV0FBV2IsUUFBUUwsTUFBTSxDQUFDLEVBQUUsQ0FBQ2MsRUFBRSxDQUFDTSxRQUFRO29CQUM5REQsTUFBTUUsUUFBUSxHQUFHLE1BQU1GLE1BQU1HLFdBQVc7b0JBRXhDLElBQUlDLE9BQU87b0JBQ1gsSUFBR0osTUFBTUUsUUFBUSxJQUFJLElBQUksRUFBQzt3QkFDdEJFLE9BQU9KLE1BQU1FLFFBQVEsQ0FBQ0UsSUFBSTtvQkFDOUIsQ0FBQztvQkFDRHpCLFFBQVFZLElBQUksZUFBQyw4REFBQ2M7d0JBQUlDLFdBQVU7OzRCQUF3QlA7NEJBQVU7NEJBQUVLOzt1QkFBaEJUOzs7OztnQkFDcEQ7Z0JBRUFmLFdBQVdEO1lBQ2YsQ0FBQztRQUNMO1FBQ0FlO0lBQ0osR0FBRztRQUFDYjtLQUFPO0lBRVgsdUNBQXVDO0lBQ3ZDLGVBQWVRLGNBQWNILE1BQU0sRUFBRXFCLElBQUksRUFBQztRQUN0QyxJQUFHO1lBQ0MsTUFBTUMsT0FBTyxNQUFNQyxNQUFNLGdFQUE4RHZCLFNBQU8sVUFBUXFCLE1BQ3RHO2dCQUFDRyxTQUFRO29CQUFDQyxZQUFZO29CQUEyQyxpQkFBaUI7Z0JBQWtCO1lBQUM7WUFDckcsTUFBTUMsTUFBTSxNQUFNSixLQUFLSyxJQUFJO1lBQzNCLElBQUdMLEtBQUtNLE1BQU0sSUFBSSxLQUFJO2dCQUNsQixPQUFPLElBQUk7WUFDZixDQUFDO1lBQ0QsT0FBT0Y7UUFDWCxFQUFDLE9BQU1HLE9BQU07WUFDVCxPQUFPLElBQUk7UUFDZjtJQUNBO0lBRUoscUJBQVEsOERBQUNWO1FBQUlDLFdBQVU7a0JBQVczQjs7Ozs7O0FBQ3RDLENBQUM7R0E1RXVCRjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29sbGVjdGlvbi5qcz85YjQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFRva2VuIGZyb20gXCIuL3Rva2VuXCI7XG5cbi8vIHRha2VzIGEgcG9saWN5IGFuZCB1c2VzIGJsb2NrZnJvc3QgdG8gcmV0dXJuIGFzc2V0IGRhdGFmcm9tIHRoZSBjb2xsZWN0aW9uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2xsZWN0aW9uKHByb3BzKXtcblxuICAgIGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW3Rva2Vucywgc2V0VG9rZW5zXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW21heEl0ZW1zLCBzZXRNYXhJdGVtc10gPSB1c2VTdGF0ZSgyMCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRBc3NldFBhZ2VGcm9tQmxvY2tmcm9zdCgpe1xuICAgICAgICAgICAgaWYocHJvcHMgPT1udWxsKXtcbiAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGxldCBwb2xpY3kgPSBwcm9wcy5wb2xpY3k7XG5cbiAgICAgICAgICAgICAgICBsZXQgYXNzZXRzID0gW107XG5cbiAgICAgICAgICAgICAgICBsZXQgYXNzZXRzMSA9IGF3YWl0IGxvYWRUb2tlbkRhdGEocG9saWN5LCAxKTtcblxuICAgICAgICAgICAgICAgIGxldCBhc3NldHMyID0gYXdhaXQgbG9hZFRva2VuRGF0YShwb2xpY3ksIDIpO1xuXG4gICAgICAgICAgICAgICAgaWYoYXNzZXRzMSA9PSBhc3NldHMyKXtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzID0gYXNzZXRzMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzLnB1c2goYXNzZXRzMSk7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0cy5wdXNoKGFzc2V0czIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFzc2V0cyk7XG4gICAgICAgICAgICAgICAgc2V0VG9rZW5zKGFzc2V0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2V0QXNzZXRQYWdlRnJvbUJsb2NrZnJvc3QoKVxuICAgIH0sIFtwcm9wc10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBmdW5jICgpIHtcbiAgICAgICAgICAgIGlmKHRva2VucyAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICBsZXQgZGlzcGxheSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPG1heEl0ZW1zOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXNzZXRJZCA9IHRva2Vuc1swXVtpXS5hc3NldDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvbGljeSA9IGFzc2V0SWQuc3Vic3RyaW5nKDAsNTYpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXNzZXROYW1lID0gYXNzZXRJZC5zdWJzdHJpbmcoNTYpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IG5ldyBUb2tlbihhc3NldE5hbWUsIHBvbGljeSwgdG9rZW5zWzBdW2ldLnF1YW50aXR5KTtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4ubWV0YWRhdGEgPSBhd2FpdCB0b2tlbi5nZXRNZXRhZGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRva2VuLm1ldGFkYXRhICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IHRva2VuLm1ldGFkYXRhLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheS5wdXNoKDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtLWZ0XCIga2V5PXtpfT57YXNzZXROYW1lfSB7bmFtZX08L2Rpdj4pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNldERpc3BsYXkoZGlzcGxheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuYygpO1xuICAgIH0sIFt0b2tlbnNdKVxuXG4gICAgLy8gZmV0Y2ggdG9rZW4gbWV0YWRhdGEgZnJvbSBibG9ja2Zyb3N0XG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZFRva2VuRGF0YShwb2xpY3ksIHBhZ2Upe1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vY2FyZGFuby1tYWlubmV0LmJsb2NrZnJvc3QuaW8vYXBpL3YwL2Fzc2V0cy9wb2xpY3kvJytwb2xpY3krJz9wYWdlJytwYWdlLFxuICAgICAgICAgICAge2hlYWRlcnM6e3Byb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnLCAnY2FjaGUtY29udHJvbCc6ICdtYXgtYWdlPTMxNTM2MDAwJ319KTtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRhdGEuanNvbigpO1xuICAgICAgICAgICAgaWYoZGF0YS5zdGF0dXMgIT0gMjAwKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1mdFwiPntkaXNwbGF5fTwvZGl2Pilcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUb2tlbiIsIkNvbGxlY3Rpb24iLCJwcm9wcyIsImRpc3BsYXkiLCJzZXREaXNwbGF5IiwidG9rZW5zIiwic2V0VG9rZW5zIiwibWF4SXRlbXMiLCJzZXRNYXhJdGVtcyIsImdldEFzc2V0UGFnZUZyb21CbG9ja2Zyb3N0IiwicG9saWN5IiwiYXNzZXRzIiwiYXNzZXRzMSIsImxvYWRUb2tlbkRhdGEiLCJhc3NldHMyIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJmdW5jIiwiaSIsImFzc2V0SWQiLCJhc3NldCIsInN1YnN0cmluZyIsImFzc2V0TmFtZSIsInRva2VuIiwicXVhbnRpdHkiLCJtZXRhZGF0YSIsImdldE1ldGFkYXRhIiwibmFtZSIsImRpdiIsImNsYXNzTmFtZSIsInBhZ2UiLCJkYXRhIiwiZmV0Y2giLCJoZWFkZXJzIiwicHJvamVjdF9pZCIsInJlcyIsImpzb24iLCJzdGF0dXMiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/collection.js\n"));

/***/ })

});