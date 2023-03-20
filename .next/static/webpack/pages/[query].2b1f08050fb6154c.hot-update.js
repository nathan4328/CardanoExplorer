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

/***/ "./pages/searchbar.js":
/*!****************************!*\
  !*** ./pages/searchbar.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SearchBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _s = $RefreshSig$();\nconst { useRouter  } = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\nconst { useState  } = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n// search bar component\n//  contains a form which takes user input and redirects them to the appropriate page\nfunction SearchBar(props) {\n    _s();\n    // react hook used to store user inputed strings\n    const [searchQuery, setSearchQuery] = useState(\"\");\n    // next/router, a next.js feature that can redirect users to specific pages.\n    const router = useRouter();\n    // ** this method takes a string inputted by the user redirects them to the appropriate page\n    // base addresses are routed to a 'wallet' page along with the indentifying stake address\n    // \n    // @param  -- event triggered by form when text is inputted into the search form\n    // when event is triggered, the inputted string gets set to the react hook above called 'searchQuery'\n    // this value can then be used to get the inputted string from the user.\n    const handleSearch = async (event)=>{\n        event.preventDefault();\n        // handle base addresses -- containing stake key\n        // doesnt include enterprise addresses\n        if (searchQuery.startsWith(\"add\")) {\n            // fetch stake address from blockfrost API\n            let stakeAddress = await getStakeFromAddress(searchQuery);\n            // redirect user to wallet page with wallet identifying stake address\n            if (stakeAddress != null) {\n                router.push(\"/wallet/\".concat(stakeAddress));\n            } else {\n                console.log(\"not a valid address, not stake address found\");\n            }\n        } else if (searchQuery.startsWith(\"stake\") || searchQuery.startsWith(\"$\")) {\n            // handles must contain atleast 2 chars e.g. '$a'\n            if (searchQuery.length > 1) {\n                // route to wallet page with handle or stake address\n                // stake address is fetched from handle on wallet page\n                router.push(\"/\".concat(searchQuery));\n            }\n        } else {\n            // if neither of above, inputted text may be 'asset ID'\n            // then route to token page with 'assetID' and stake address if wallet is connected.\n            if (props.stake != null) {\n                router.push(\"/\".concat(searchQuery, \"/?stake=\") + props.stake);\n            } else {\n                router.push(\"/\".concat(searchQuery));\n            }\n        }\n    };\n    // this method fetches the stake address for any given base address.\n    // it uses a Blockfrost API which returns data for specific addresses.\n    // @param - a base address, containing the stake key for its wallet.\n    // @return a stake address, an account address which can be used to fetch data for its corresponding wallet\n    async function getStakeFromAddress(address) {\n        try {\n            // fetch data relating to address\n            const req = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/addresses/\" + address, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            // JSON returned contains stake address for given base address.\n            const res = await req.json();\n            if (res.stake_address != null) {\n                return res.stake_address;\n            } else {\n                return null;\n            }\n        } catch (error) {\n            // handle error\n            return null;\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"searchForm\",\n        onSubmit: handleSearch,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                className: \"search-input\",\n                placeholder: \"Search for an address or a specific token...\",\n                value: searchQuery,\n                onChange: (event)=>setSearchQuery(event.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/pages/searchbar.js\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"search-button\",\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/pages/searchbar.js\",\n                lineNumber: 91,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/pages/searchbar.js\",\n        lineNumber: 89,\n        columnNumber: 9\n    }, this);\n}\n_s(SearchBar, \"4sm5Xy4sGA6QIGrHn8tQ9Lk+vI8=\", false, function() {\n    return [\n        useRouter\n    ];\n});\n_c = SearchBar;\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2hiYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQUFNLEVBQUNBLFVBQVMsRUFBQyxHQUFHQyxtQkFBT0EsQ0FBQztBQUM1QixNQUFNLEVBQUNDLFNBQVEsRUFBQyxHQUFHRCxtQkFBT0EsQ0FBQztBQUMzQix1QkFBdUI7QUFDdkIscUZBQXFGO0FBQ3RFLFNBQVNFLFVBQVVDLEtBQUssRUFBQzs7SUFFcEMsZ0RBQWdEO0lBQ2hELE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSixTQUFTO0lBRS9DLDRFQUE0RTtJQUM1RSxNQUFNSyxTQUFTUDtJQUVmLDRGQUE0RjtJQUU1Rix5RkFBeUY7SUFDekYsR0FBRztJQUNILGdGQUFnRjtJQUNoRixxR0FBcUc7SUFDckcsd0VBQXdFO0lBQ3hFLE1BQU1RLGVBQWUsT0FBUUMsUUFBVTtRQUNuQ0EsTUFBTUMsY0FBYztRQUVwQixnREFBZ0Q7UUFDaEQsc0NBQXNDO1FBQ3RDLElBQUdMLFlBQVlNLFVBQVUsQ0FBQyxRQUFPO1lBRS9CLDBDQUEwQztZQUMxQyxJQUFJQyxlQUFlLE1BQU1DLG9CQUFvQlI7WUFDN0MscUVBQXFFO1lBQ3JFLElBQUdPLGdCQUFnQixJQUFJLEVBQUM7Z0JBQ3RCTCxPQUFPTyxJQUFJLENBQUMsV0FBd0IsT0FBYkY7WUFDekIsT0FDSTtnQkFDRkcsUUFBUUMsR0FBRyxDQUFDO1lBQ2QsQ0FBQztRQUNILE9BSUssSUFBSVgsWUFBWU0sVUFBVSxDQUFDLFlBQVlOLFlBQVlNLFVBQVUsQ0FBQyxNQUFLO1lBRXRFLGlEQUFpRDtZQUNqRCxJQUFHTixZQUFZWSxNQUFNLEdBQUUsR0FBRTtnQkFFdkIsb0RBQW9EO2dCQUNwRCxzREFBc0Q7Z0JBQ3REVixPQUFPTyxJQUFJLENBQUMsSUFBZ0IsT0FBWlQ7WUFDbEIsQ0FBQztRQUNILE9BQ0k7WUFDRix1REFBdUQ7WUFDdkQsb0ZBQW9GO1lBQ3BGLElBQUdELE1BQU1jLEtBQUssSUFBSSxJQUFJLEVBQUM7Z0JBQ3JCWCxPQUFPTyxJQUFJLENBQUMsSUFBZ0IsT0FBWlQsYUFBWSxjQUFVRCxNQUFNYyxLQUFLO1lBQ25ELE9BQ0k7Z0JBQ0ZYLE9BQU9PLElBQUksQ0FBQyxJQUFnQixPQUFaVDtZQUNsQixDQUFDO1FBQ0gsQ0FBQztJQUNIO0lBRUYsb0VBQW9FO0lBQ3BFLHNFQUFzRTtJQUV0RSxvRUFBb0U7SUFDcEUsMkdBQTJHO0lBQzNHLGVBQWVRLG9CQUFvQk0sT0FBTyxFQUFDO1FBQ3pDLElBQUc7WUFDQyxpQ0FBaUM7WUFDakMsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLDREQUEwREYsU0FDbEY7Z0JBQUNHLFNBQVE7b0JBQUNDLFlBQVk7b0JBQTJDLGlCQUFpQjtnQkFBa0I7WUFBQztZQUVyRywrREFBK0Q7WUFDL0QsTUFBTUMsTUFBTSxNQUFNSixJQUFJSyxJQUFJO1lBQzFCLElBQUdELElBQUlFLGFBQWEsSUFBSSxJQUFJLEVBQUM7Z0JBQ3pCLE9BQU9GLElBQUlFLGFBQWE7WUFDNUIsT0FDSTtnQkFDQSxPQUFPLElBQUk7WUFDZixDQUFDO1FBQ0wsRUFDQSxPQUFNQyxPQUFNO1lBQ1IsZUFBZTtZQUNmLE9BQU8sSUFBSTtRQUNmO0lBQ0o7SUFFRSxxQkFDSSw4REFBQ0M7UUFBS0MsV0FBVTtRQUFhQyxVQUFVdEI7OzBCQUNuQyw4REFBQ3VCO2dCQUFNQyxNQUFLO2dCQUFPSCxXQUFZO2dCQUFlSSxhQUFZO2dCQUFnREMsT0FBTzdCO2dCQUFhOEIsVUFBVSxDQUFDMUIsUUFBVUgsZUFBZUcsTUFBTTJCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7OzBCQUNwTCw4REFBQ0c7Z0JBQU9MLE1BQUs7Z0JBQVNILFdBQVU7MEJBQWdCOzs7Ozs7Ozs7Ozs7QUFHNUQsQ0FBQztHQXpGdUIxQjs7UUFNTEg7OztLQU5LRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZWFyY2hiYXIuanM/N2NlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7dXNlUm91dGVyfSA9IHJlcXVpcmUoJ25leHQvcm91dGVyJyk7XG5jb25zdCB7dXNlU3RhdGV9ID0gcmVxdWlyZSgncmVhY3QnKTtcbi8vIHNlYXJjaCBiYXIgY29tcG9uZW50XG4vLyAgY29udGFpbnMgYSBmb3JtIHdoaWNoIHRha2VzIHVzZXIgaW5wdXQgYW5kIHJlZGlyZWN0cyB0aGVtIHRvIHRoZSBhcHByb3ByaWF0ZSBwYWdlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hCYXIocHJvcHMpe1xuXG4gICAgLy8gcmVhY3QgaG9vayB1c2VkIHRvIHN0b3JlIHVzZXIgaW5wdXRlZCBzdHJpbmdzXG4gICAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICAvLyBuZXh0L3JvdXRlciwgYSBuZXh0LmpzIGZlYXR1cmUgdGhhdCBjYW4gcmVkaXJlY3QgdXNlcnMgdG8gc3BlY2lmaWMgcGFnZXMuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICAvLyAqKiB0aGlzIG1ldGhvZCB0YWtlcyBhIHN0cmluZyBpbnB1dHRlZCBieSB0aGUgdXNlciByZWRpcmVjdHMgdGhlbSB0byB0aGUgYXBwcm9wcmlhdGUgcGFnZVxuXG4gICAgLy8gYmFzZSBhZGRyZXNzZXMgYXJlIHJvdXRlZCB0byBhICd3YWxsZXQnIHBhZ2UgYWxvbmcgd2l0aCB0aGUgaW5kZW50aWZ5aW5nIHN0YWtlIGFkZHJlc3NcbiAgICAvLyBcbiAgICAvLyBAcGFyYW0gIC0tIGV2ZW50IHRyaWdnZXJlZCBieSBmb3JtIHdoZW4gdGV4dCBpcyBpbnB1dHRlZCBpbnRvIHRoZSBzZWFyY2ggZm9ybVxuICAgIC8vIHdoZW4gZXZlbnQgaXMgdHJpZ2dlcmVkLCB0aGUgaW5wdXR0ZWQgc3RyaW5nIGdldHMgc2V0IHRvIHRoZSByZWFjdCBob29rIGFib3ZlIGNhbGxlZCAnc2VhcmNoUXVlcnknXG4gICAgLy8gdGhpcyB2YWx1ZSBjYW4gdGhlbiBiZSB1c2VkIHRvIGdldCB0aGUgaW5wdXR0ZWQgc3RyaW5nIGZyb20gdGhlIHVzZXIuXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIGhhbmRsZSBiYXNlIGFkZHJlc3NlcyAtLSBjb250YWluaW5nIHN0YWtlIGtleVxuICAgICAgICAvLyBkb2VzbnQgaW5jbHVkZSBlbnRlcnByaXNlIGFkZHJlc3Nlc1xuICAgICAgICBpZihzZWFyY2hRdWVyeS5zdGFydHNXaXRoKCdhZGQnKSl7XG5cbiAgICAgICAgICAvLyBmZXRjaCBzdGFrZSBhZGRyZXNzIGZyb20gYmxvY2tmcm9zdCBBUElcbiAgICAgICAgICBsZXQgc3Rha2VBZGRyZXNzID0gYXdhaXQgZ2V0U3Rha2VGcm9tQWRkcmVzcyhzZWFyY2hRdWVyeSk7XG4gICAgICAgICAgLy8gcmVkaXJlY3QgdXNlciB0byB3YWxsZXQgcGFnZSB3aXRoIHdhbGxldCBpZGVudGlmeWluZyBzdGFrZSBhZGRyZXNzXG4gICAgICAgICAgaWYoc3Rha2VBZGRyZXNzICE9IG51bGwpe1xuICAgICAgICAgICAgcm91dGVyLnB1c2goYC93YWxsZXQvJHtzdGFrZUFkZHJlc3N9YCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IGEgdmFsaWQgYWRkcmVzcywgbm90IHN0YWtlIGFkZHJlc3MgZm91bmQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYW5kbGUgc3Rha2UgYWRkcmVzcyBvciBhZGEgaGFuZGxlIGlucHV0c1xuICAgICAgICAvLyBzdGFrZSBhZGRyZXNzZXMgYWx3YXlzIGJlZ2luIHdpdGggJ3N0YWtlJyBhbmQgQURBIEhhbmRsZXMgYmVnaW4gd2l0aCAnJCcgZS5nLiAkamFtZXNcbiAgICAgICAgZWxzZSBpZiAoc2VhcmNoUXVlcnkuc3RhcnRzV2l0aCgnc3Rha2UnKSB8fCBzZWFyY2hRdWVyeS5zdGFydHNXaXRoKCckJykpe1xuXG4gICAgICAgICAgLy8gaGFuZGxlcyBtdXN0IGNvbnRhaW4gYXRsZWFzdCAyIGNoYXJzIGUuZy4gJyRhJ1xuICAgICAgICAgIGlmKHNlYXJjaFF1ZXJ5Lmxlbmd0aCA+MSl7XG5cbiAgICAgICAgICAgIC8vIHJvdXRlIHRvIHdhbGxldCBwYWdlIHdpdGggaGFuZGxlIG9yIHN0YWtlIGFkZHJlc3NcbiAgICAgICAgICAgIC8vIHN0YWtlIGFkZHJlc3MgaXMgZmV0Y2hlZCBmcm9tIGhhbmRsZSBvbiB3YWxsZXQgcGFnZVxuICAgICAgICAgICAgcm91dGVyLnB1c2goYC8ke3NlYXJjaFF1ZXJ5fWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIC8vIGlmIG5laXRoZXIgb2YgYWJvdmUsIGlucHV0dGVkIHRleHQgbWF5IGJlICdhc3NldCBJRCdcbiAgICAgICAgICAvLyB0aGVuIHJvdXRlIHRvIHRva2VuIHBhZ2Ugd2l0aCAnYXNzZXRJRCcgYW5kIHN0YWtlIGFkZHJlc3MgaWYgd2FsbGV0IGlzIGNvbm5lY3RlZC5cbiAgICAgICAgICBpZihwcm9wcy5zdGFrZSAhPSBudWxsKXtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvJHtzZWFyY2hRdWVyeX0vP3N0YWtlPWArcHJvcHMuc3Rha2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgcm91dGVyLnB1c2goYC8ke3NlYXJjaFF1ZXJ5fWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgLy8gdGhpcyBtZXRob2QgZmV0Y2hlcyB0aGUgc3Rha2UgYWRkcmVzcyBmb3IgYW55IGdpdmVuIGJhc2UgYWRkcmVzcy5cbiAgICAvLyBpdCB1c2VzIGEgQmxvY2tmcm9zdCBBUEkgd2hpY2ggcmV0dXJucyBkYXRhIGZvciBzcGVjaWZpYyBhZGRyZXNzZXMuXG5cbiAgICAvLyBAcGFyYW0gLSBhIGJhc2UgYWRkcmVzcywgY29udGFpbmluZyB0aGUgc3Rha2Uga2V5IGZvciBpdHMgd2FsbGV0LlxuICAgIC8vIEByZXR1cm4gYSBzdGFrZSBhZGRyZXNzLCBhbiBhY2NvdW50IGFkZHJlc3Mgd2hpY2ggY2FuIGJlIHVzZWQgdG8gZmV0Y2ggZGF0YSBmb3IgaXRzIGNvcnJlc3BvbmRpbmcgd2FsbGV0XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0U3Rha2VGcm9tQWRkcmVzcyhhZGRyZXNzKXtcbiAgICAgIHRyeXtcbiAgICAgICAgICAvLyBmZXRjaCBkYXRhIHJlbGF0aW5nIHRvIGFkZHJlc3NcbiAgICAgICAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9jYXJkYW5vLW1haW5uZXQuYmxvY2tmcm9zdC5pby9hcGkvdjAvYWRkcmVzc2VzLycrYWRkcmVzcywgXG4gICAgICAgICAge2hlYWRlcnM6e3Byb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnLCAnY2FjaGUtY29udHJvbCc6ICdtYXgtYWdlPTMxNTM2MDAwJ319KTtcblxuICAgICAgICAgIC8vIEpTT04gcmV0dXJuZWQgY29udGFpbnMgc3Rha2UgYWRkcmVzcyBmb3IgZ2l2ZW4gYmFzZSBhZGRyZXNzLlxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgICAgICAgaWYocmVzLnN0YWtlX2FkZHJlc3MgIT0gbnVsbCl7XG4gICAgICAgICAgICAgIHJldHVybiByZXMuc3Rha2VfYWRkcmVzcztcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2F0Y2goZXJyb3IpeyBcbiAgICAgICAgICAvLyBoYW5kbGUgZXJyb3JcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzZWFyY2hGb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVNlYXJjaH0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWUgPSBcInNlYXJjaC1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBhbiBhZGRyZXNzIG9yIGEgc3BlY2lmaWMgdG9rZW4uLi5cIiAgdmFsdWU9e3NlYXJjaFF1ZXJ5fSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTZWFyY2hRdWVyeShldmVudC50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJzZWFyY2gtYnV0dG9uXCI+U2VhcmNoPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInJlcXVpcmUiLCJ1c2VTdGF0ZSIsIlNlYXJjaEJhciIsInByb3BzIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInJvdXRlciIsImhhbmRsZVNlYXJjaCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdGFydHNXaXRoIiwic3Rha2VBZGRyZXNzIiwiZ2V0U3Rha2VGcm9tQWRkcmVzcyIsInB1c2giLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwic3Rha2UiLCJhZGRyZXNzIiwicmVxIiwiZmV0Y2giLCJoZWFkZXJzIiwicHJvamVjdF9pZCIsInJlcyIsImpzb24iLCJzdGFrZV9hZGRyZXNzIiwiZXJyb3IiLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/searchbar.js\n"));

/***/ })

});