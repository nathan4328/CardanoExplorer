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

/***/ "./src/pages/searchbar.js":
/*!********************************!*\
  !*** ./src/pages/searchbar.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SearchBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n\nvar _s = $RefreshSig$();\n\n\nfunction SearchBar(props) {\n    _s();\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // returns base address from handle\n    const getAddressFromHandle = async (handle)=>{\n        try {\n            let policyID = \"f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9a\";\n            // A blank Handle name should always be ignored.\n            if (handle.length === 0) {\n            // Handle error.\n            }\n            // Convert handleName to hex encoding.\n            let assetName = Buffer.from(handle).toString(\"hex\");\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\".concat(policyID).concat(assetName, \"/addresses\"), {\n                headers: {\n                    // Your Blockfrost API key\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"Content-Type\": \"application/json\"\n                }\n            }).then((res)=>res.json());\n            let stake = await getStakeFromAddressKoios(data[0].address);\n            return stake;\n        } catch (error) {\n            return null;\n        }\n    };\n    // no asset limit on how many assets gets returned on one request\n    // koios, blockfrost is limited by 100 results per page\n    async function getAssetsFromKoios(stakeAddress) {\n        try {\n            const req = await fetch(\"https://api.koios.rest/api/v0/account_assets\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    \"_stake_addresses\": [\n                        stakeAddress\n                    ]\n                })\n            });\n            const res = await req.json();\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    const handleSearch = async (event)=>{\n        event.preventDefault();\n        // Use the `router.push` method to navigate to the dynamic page with the entered number as the URL parameter.\n        if (searchQuery.startsWith(\"add\")) {\n            let stakeAddress = await getStakeFromAddressKoios(searchQuery);\n            if (stakeAddress != null) {\n                router.push(\"/wallet/\".concat(stakeAddress));\n            }\n        } else if (searchQuery.startsWith(\"stake\") || searchQuery.startsWith(\"$\")) {\n            if (searchQuery.length > 2) {\n                router.push(\"/wallet/\".concat(searchQuery));\n            }\n        } else if (searchQuery.length > 2) {\n            router.push(\"/token/\".concat(searchQuery, \"/?stake=\") + props.stake);\n        } else {\n        // bad input\n        }\n    };\n    async function getStakeFromAddressKoios(address) {\n        try {\n            const req = await fetch(\"https://api.koios.rest/api/v0/address_info\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    \"_addresses\": [\n                        address\n                    ]\n                })\n            });\n            const res = await req.json();\n            return res[0].stake_address;\n        } catch (error) {\n            console.log(error);\n            return null;\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"searchForm\",\n        onSubmit: handleSearch,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                className: \"search-input\",\n                placeholder: \"Search for an address or a specific token...\",\n                value: searchQuery,\n                onChange: (event)=>setSearchQuery(event.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/searchbar.js\",\n                lineNumber: 111,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"search-button\",\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/searchbar.js\",\n                lineNumber: 112,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/searchbar.js\",\n        lineNumber: 110,\n        columnNumber: 9\n    }, this);\n}\n_s(SearchBar, \"4sm5Xy4sGA6QIGrHn8tQ9Lk+vI8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = SearchBar;\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0ksOERBQUNnQjtRQUFLQyxXQUFVO1FBQWFDLFVBQVVWOzswQkFDbkMsOERBQUNXO2dCQUFNQyxNQUFLO2dCQUFPSCxXQUFZO2dCQUFlSSxhQUFZO2dCQUFnREMsT0FBTzNDO2dCQUFhNEMsVUFBVSxDQUFDZCxRQUFVN0IsZUFBZTZCLE1BQU1lLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7OzBCQUNwTCw4REFBQ0c7Z0JBQU9MLE1BQUs7Z0JBQVNILFdBQVU7MEJBQWdCOzs7Ozs7Ozs7Ozs7QUFHNUQsQ0FBQztHQS9HdUJ4Qzs7UUFHTEYsa0RBQVNBOzs7S0FISkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NlYXJjaGJhci5qcz85ZmI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoQmFyKHByb3BzKXtcblxuICAgIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgICAvLyByZXR1cm5zIGJhc2UgYWRkcmVzcyBmcm9tIGhhbmRsZVxuICBjb25zdCBnZXRBZGRyZXNzRnJvbUhhbmRsZSA9IGFzeW5jIChoYW5kbGUpID0+IHtcbiAgICB0cnl7XG4gICAgICBsZXQgcG9saWN5SUQgPSAnZjBmZjQ4YmJiN2JiZTlkNTlhNDBmMWNlOTBlOWU5ZDBmZjUwMDJlYzQ4ZjIzMmI0OWNhMGZiOWEnO1xuICAgIFxuICAgICAgLy8gQSBibGFuayBIYW5kbGUgbmFtZSBzaG91bGQgYWx3YXlzIGJlIGlnbm9yZWQuXG4gICAgICBpZiAoaGFuZGxlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBIYW5kbGUgZXJyb3IuXG4gICAgICB9XG4gICAgXG4gICAgICAvLyBDb252ZXJ0IGhhbmRsZU5hbWUgdG8gaGV4IGVuY29kaW5nLlxuICAgICAgbGV0IGFzc2V0TmFtZSA9IEJ1ZmZlci5mcm9tKGhhbmRsZSkudG9TdHJpbmcoJ2hleCcpO1xuICAgIFxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9jYXJkYW5vLW1haW5uZXQuYmxvY2tmcm9zdC5pby9hcGkvdjAvYXNzZXRzLyR7cG9saWN5SUR9JHthc3NldE5hbWV9L2FkZHJlc3Nlc2AsXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAvLyBZb3VyIEJsb2NrZnJvc3QgQVBJIGtleVxuICAgICAgICAgICAgcHJvamVjdF9pZDogJ21haW5uZXRvVzYxWVlTaU9vTFNhTlE2ZHpUcmtBRzRhelhWSXJ2aCcsXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuICAgICAgXG4gICAgICBsZXQgc3Rha2UgPSBhd2FpdCBnZXRTdGFrZUZyb21BZGRyZXNzS29pb3MoZGF0YVswXS5hZGRyZXNzKTtcbiAgICAgIHJldHVybiBzdGFrZTtcbiAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gIH1cblxuICAvLyBubyBhc3NldCBsaW1pdCBvbiBob3cgbWFueSBhc3NldHMgZ2V0cyByZXR1cm5lZCBvbiBvbmUgcmVxdWVzdFxuICAvLyBrb2lvcywgYmxvY2tmcm9zdCBpcyBsaW1pdGVkIGJ5IDEwMCByZXN1bHRzIHBlciBwYWdlXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEFzc2V0c0Zyb21Lb2lvcyhzdGFrZUFkZHJlc3Mpe1xuICAgIHRyeXtcbiAgICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5rb2lvcy5yZXN0L2FwaS92MC9hY2NvdW50X2Fzc2V0cycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBcIl9zdGFrZV9hZGRyZXNzZXNcIjogW1xuICAgICAgICAgICAgc3Rha2VBZGRyZXNzXG4gICAgICAgICAgXVxuICAgICAgICB9KVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgfVxuXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBVc2UgdGhlIGByb3V0ZXIucHVzaGAgbWV0aG9kIHRvIG5hdmlnYXRlIHRvIHRoZSBkeW5hbWljIHBhZ2Ugd2l0aCB0aGUgZW50ZXJlZCBudW1iZXIgYXMgdGhlIFVSTCBwYXJhbWV0ZXIuXG4gICAgICAgIGlmKHNlYXJjaFF1ZXJ5LnN0YXJ0c1dpdGgoJ2FkZCcpKXtcbiAgICAgICAgICBsZXQgc3Rha2VBZGRyZXNzID0gYXdhaXQgZ2V0U3Rha2VGcm9tQWRkcmVzc0tvaW9zKHNlYXJjaFF1ZXJ5KTtcbiAgICAgICAgICBpZihzdGFrZUFkZHJlc3MgIT0gbnVsbCl7XG4gICAgICAgICAgICByb3V0ZXIucHVzaChgL3dhbGxldC8ke3N0YWtlQWRkcmVzc31gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2VhcmNoUXVlcnkuc3RhcnRzV2l0aCgnc3Rha2UnKSB8fCBzZWFyY2hRdWVyeS5zdGFydHNXaXRoKCckJykpe1xuICAgICAgICAgIGlmKHNlYXJjaFF1ZXJ5Lmxlbmd0aCA+Mil7XG4gICAgICAgICAgICByb3V0ZXIucHVzaChgL3dhbGxldC8ke3NlYXJjaFF1ZXJ5fWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHNlYXJjaFF1ZXJ5Lmxlbmd0aCA+IDIpe1xuICAgICAgICAgIHJvdXRlci5wdXNoKGAvdG9rZW4vJHtzZWFyY2hRdWVyeX0vP3N0YWtlPWArcHJvcHMuc3Rha2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICAvLyBiYWQgaW5wdXRcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhc3luYyBmdW5jdGlvbiBnZXRTdGFrZUZyb21BZGRyZXNzS29pb3MoYWRkcmVzcyl7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5rb2lvcy5yZXN0L2FwaS92MC9hZGRyZXNzX2luZm8nLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgXCJfYWRkcmVzc2VzXCI6IFsgYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIFxuICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXEuanNvbigpO1xuICAgICAgICAgICAgICByZXR1cm4gcmVzWzBdLnN0YWtlX2FkZHJlc3M7XG4gICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNlYXJjaEZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU2VhcmNofT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZSA9IFwic2VhcmNoLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGFuIGFkZHJlc3Mgb3IgYSBzcGVjaWZpYyB0b2tlbi4uLlwiICB2YWx1ZT17c2VhcmNoUXVlcnl9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFNlYXJjaFF1ZXJ5KGV2ZW50LnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInNlYXJjaC1idXR0b25cIj5TZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU3RhdGUiLCJTZWFyY2hCYXIiLCJwcm9wcyIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJyb3V0ZXIiLCJnZXRBZGRyZXNzRnJvbUhhbmRsZSIsImhhbmRsZSIsInBvbGljeUlEIiwibGVuZ3RoIiwiYXNzZXROYW1lIiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwiZGF0YSIsImZldGNoIiwiaGVhZGVycyIsInByb2plY3RfaWQiLCJ0aGVuIiwicmVzIiwianNvbiIsInN0YWtlIiwiZ2V0U3Rha2VGcm9tQWRkcmVzc0tvaW9zIiwiYWRkcmVzcyIsImVycm9yIiwiZ2V0QXNzZXRzRnJvbUtvaW9zIiwic3Rha2VBZGRyZXNzIiwicmVxIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYW5kbGVTZWFyY2giLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RhcnRzV2l0aCIsInB1c2giLCJzdGFrZV9hZGRyZXNzIiwiY29uc29sZSIsImxvZyIsImZvcm0iLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/searchbar.js\n"));

/***/ })

});