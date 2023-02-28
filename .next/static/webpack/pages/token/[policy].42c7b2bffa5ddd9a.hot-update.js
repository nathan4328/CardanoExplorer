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

/***/ "./src/pages/policy.js":
/*!*****************************!*\
  !*** ./src/pages/policy.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Policy; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Policy(props) {\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function func() {\n            if (props.policy != null) {\n                let policyData = await getCnftPolicyData(props.policy);\n                if (policyData != null) {\n                    console.log(policyData);\n                    let floorPrice = policyData.floor_price / 1000000;\n                    let holders = policyData.asset_holders;\n                    let supply = policyData.asset_minted;\n                    let volume = (policyData.total_volume / 1000000000000).toFixed(2);\n                    let thumbnail = getIpfs(policyData.thumbnail);\n                    console.log(thumbnail);\n                    let out = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"policy-bar\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"policy-info-item\",\n                                children: [\n                                    \"Floor Price  \",\n                                    floorPrice\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                                lineNumber: 21,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"policy-info-item\",\n                                children: [\n                                    \"Holder \",\n                                    holders\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                                lineNumber: 22,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"policy-info-item\",\n                                children: [\n                                    \"Assets Minted \",\n                                    supply\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                                lineNumber: 23,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"policy-info-item\",\n                                children: [\n                                    \"Total Volume \",\n                                    volume,\n                                    \"M\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                                lineNumber: 24,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"policy-info-item\",\n                                children: [\n                                    \"thumbnail \",\n                                    thumbnail\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                                lineNumber: 25,\n                                columnNumber: 19\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                        lineNumber: 20,\n                        columnNumber: 27\n                    }, this);\n                    setDisplay(out);\n                }\n            }\n        }\n        func();\n    }, [\n        props\n    ]);\n    // if metadata has been fetched\n    // find the ipfs link under 'image' metadata tag and store it\n    function getIpfs(json) {\n        const keys = Object.keys(json);\n        const values = Object.values(json);\n        let ipfs = \"\";\n        for(let i = 0; i < keys.length; i++){\n            if (keys[i] == \"thumbnail\") {\n                ipfs = values[i];\n            }\n            // fungible tokens will have a 'logo' instead of 'image' tag\n            if (keys[i] == \"logo\") {\n                ipfs = \"data:image/png;base64,\" + values[i];\n            }\n        }\n        // convert all ipfs formats to the a searchable format that can be fetched in a <img> tag\n        try {\n            // links are sometimes stored in arrays\n            // this finds ipfs links in the array\n            if (Array.isArray(ipfs)) {\n                let newipfs = \"\";\n                for (const element of ipfs){\n                    newipfs = newipfs + element;\n                }\n                if (newipfs.startsWith(\"ba\")) {\n                    newipfs = \"http://dweb.link/ipfs/\" + ipfs;\n                    newipfs = newipfs.replace(/,/g, \"\");\n                }\n                return newipfs;\n            }\n            // normal ipfs in image tags\n            if (ipfs.startsWith(\"ipfs://\")) {\n                ipfs = ipfs.slice(7);\n                if (ipfs.startsWith(\"ipfs/\")) {\n                    ipfs = ipfs.slice(5);\n                }\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            } else if (ipfs.startsWith(\"ipfs/\")) {\n                ipfs = ipfs.slice(5);\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            } else if (ipfs.startsWith(\"Qm\")) {\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            }\n        } catch (e) {\n            return null;\n        }\n        return ipfs;\n    }\n    async function getCnftPolicyData(policy) {\n        try {\n            const data = await fetch(\"https://api.opencnft.io/1/policy/\" + policy, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"policy-info\",\n        children: display\n    }, void 0, false, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n        lineNumber: 111,\n        columnNumber: 12\n    }, this);\n}\n_s(Policy, \"V4g0lk46myXpHjwjMKzQe3gdcis=\");\n_c = Policy;\nvar _c;\n$RefreshReg$(_c, \"Policy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9saWN5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMkM7QUFFNUIsU0FBU0UsT0FBT0MsS0FBSyxFQUFDOztJQUVqQyxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBO0lBRXRDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osZUFBZU0sT0FBTTtZQUNuQixJQUFHSCxNQUFNSSxNQUFNLElBQUksSUFBSSxFQUFDO2dCQUN0QixJQUFJQyxhQUFhLE1BQU1DLGtCQUFrQk4sTUFBTUksTUFBTTtnQkFDckQsSUFBR0MsY0FBYyxJQUFJLEVBQUM7b0JBQ2xCRSxRQUFRQyxHQUFHLENBQUNIO29CQUNaLElBQUlJLGFBQWFKLFdBQVdLLFdBQVcsR0FBQztvQkFDeEMsSUFBSUMsVUFBVU4sV0FBV08sYUFBYTtvQkFDdEMsSUFBSUMsU0FBU1IsV0FBV1MsWUFBWTtvQkFDcEMsSUFBSUMsU0FBUyxDQUFDVixXQUFXVyxZQUFZLEdBQUMsYUFBWSxFQUFHQyxPQUFPLENBQUM7b0JBQzdELElBQUlDLFlBQVlDLFFBQVFkLFdBQVdhLFNBQVM7b0JBQzVDWCxRQUFRQyxHQUFHLENBQUNVO29CQUVaLElBQUlFLG9CQUFNLDhEQUFDQzt3QkFBSUMsV0FBVTs7MENBQ3ZCLDhEQUFDRDtnQ0FBSUMsV0FBVTs7b0NBQW1CO29DQUFjYjs7Ozs7OzswQ0FDaEQsOERBQUNZO2dDQUFJQyxXQUFVOztvQ0FBbUI7b0NBQVFYOzs7Ozs7OzBDQUMxQyw4REFBQ1U7Z0NBQUlDLFdBQVU7O29DQUFtQjtvQ0FBZVQ7Ozs7Ozs7MENBQ2pELDhEQUFDUTtnQ0FBSUMsV0FBVTs7b0NBQW1CO29DQUFjUDtvQ0FBTzs7Ozs7OzswQ0FDdkQsOERBQUNNO2dDQUFJQyxXQUFVOztvQ0FBbUI7b0NBQVdKOzs7Ozs7Ozs7Ozs7O29CQUcvQ2hCLFdBQVdrQjtnQkFDZixDQUFDO1lBQ0gsQ0FBQztRQUVIO1FBQ0FqQjtJQUNKLEdBQUc7UUFBQ0g7S0FBTTtJQUVILCtCQUErQjtJQUN0Qyw2REFBNkQ7SUFDN0QsU0FBU21CLFFBQVFJLElBQUksRUFBQztRQUNwQixNQUFNQyxPQUFPQyxPQUFPRCxJQUFJLENBQUNEO1FBQ3pCLE1BQU1HLFNBQVNELE9BQU9DLE1BQU0sQ0FBQ0g7UUFDN0IsSUFBSUksT0FBTztRQUNYLElBQUksSUFBSUMsSUFBRSxHQUFFQSxJQUFFSixLQUFLSyxNQUFNLEVBQUNELElBQUk7WUFHNUIsSUFBR0osSUFBSSxDQUFDSSxFQUFFLElBQUksYUFBWTtnQkFDeEJELE9BQU9ELE1BQU0sQ0FBQ0UsRUFBRTtZQUNsQixDQUFDO1lBRUQsNERBQTREO1lBQzVELElBQUdKLElBQUksQ0FBQ0ksRUFBRSxJQUFJLFFBQU87Z0JBQ25CRCxPQUFPLDJCQUF5QkQsTUFBTSxDQUFDRSxFQUFFO1lBQzNDLENBQUM7UUFDSDtRQUVBLHlGQUF5RjtRQUN6RixJQUFHO1lBRUQsdUNBQXVDO1lBQ3ZDLHFDQUFxQztZQUNyQyxJQUFHRSxNQUFNQyxPQUFPLENBQUNKLE9BQU07Z0JBQ3JCLElBQUlLLFVBQVU7Z0JBQ2QsS0FBSSxNQUFNQyxXQUFXTixLQUFLO29CQUN4QkssVUFBVUEsVUFBVUM7Z0JBQ3RCO2dCQUNBLElBQUdELFFBQVFFLFVBQVUsQ0FBQyxPQUFNO29CQUMxQkYsVUFBVSwyQkFBeUJMO29CQUNuQ0ssVUFBVUEsUUFBUUcsT0FBTyxDQUFDLE1BQU07Z0JBQ2xDLENBQUM7Z0JBQ0QsT0FBT0g7WUFDVCxDQUFDO1lBRUQsNEJBQTRCO1lBQzVCLElBQUdMLEtBQUtPLFVBQVUsQ0FBQyxZQUFXO2dCQUM1QlAsT0FBT0EsS0FBS1MsS0FBSyxDQUFDO2dCQUNsQixJQUFHVCxLQUFLTyxVQUFVLENBQUMsVUFBUztvQkFDMUJQLE9BQU9BLEtBQUtTLEtBQUssQ0FBQztnQkFDcEIsQ0FBQztnQkFDRFQsT0FBTywyQkFBeUJBO1lBQ2xDLE9BQ0ssSUFBR0EsS0FBS08sVUFBVSxDQUFDLFVBQVM7Z0JBQy9CUCxPQUFPQSxLQUFLUyxLQUFLLENBQUM7Z0JBQ2xCVCxPQUFPLDJCQUF5QkE7WUFDbEMsT0FDSyxJQUFHQSxLQUFLTyxVQUFVLENBQUMsT0FBTTtnQkFDNUJQLE9BQU8sMkJBQXlCQTtZQUNsQyxDQUFDO1FBRUgsRUFBQyxVQUFLO1lBQ0osT0FBTyxJQUFJO1FBQ2I7UUFDQSxPQUFPQTtJQUVUO0lBRUEsZUFBZXJCLGtCQUFrQkYsTUFBTSxFQUFDO1FBQ3BDLElBQUc7WUFDRCxNQUFNaUMsT0FBTyxNQUFNQyxNQUFNLHNDQUFvQ2xDLFFBQzdEO2dCQUFDbUMsU0FBUTtvQkFBQ0MsWUFBWTtvQkFBMkMsaUJBQWlCO2dCQUFrQjtZQUFDO1lBQ3JHLE1BQU1DLE1BQU0sTUFBTUosS0FBS2QsSUFBSTtZQUUzQixJQUFHYyxLQUFLSyxNQUFNLElBQUcsS0FBSTtnQkFDbkIsT0FBTyxJQUFJO1lBQ2IsQ0FBQztZQUNELE9BQU9EO1FBQ1QsRUFBQyxPQUFNRSxPQUFNO1lBQ1gsT0FBTyxJQUFJO1FBQ2I7SUFDRjtJQUdGLHFCQUFPLDhEQUFDdEI7UUFBSUMsV0FBVTtrQkFBZXJCOzs7Ozs7QUFDekMsQ0FBQztHQTdHdUJGO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wb2xpY3kuanM/MjQ1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9saWN5KHByb3BzKXtcblxuICAgIGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBmdW5jKCl7XG4gICAgICAgICAgaWYocHJvcHMucG9saWN5ICE9IG51bGwpe1xuICAgICAgICAgICAgbGV0IHBvbGljeURhdGEgPSBhd2FpdCBnZXRDbmZ0UG9saWN5RGF0YShwcm9wcy5wb2xpY3kpO1xuICAgICAgICAgICAgaWYocG9saWN5RGF0YSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwb2xpY3lEYXRhKTtcbiAgICAgICAgICAgICAgICBsZXQgZmxvb3JQcmljZSA9IHBvbGljeURhdGEuZmxvb3JfcHJpY2UvMTAwMDAwMDtcbiAgICAgICAgICAgICAgICBsZXQgaG9sZGVycyA9IHBvbGljeURhdGEuYXNzZXRfaG9sZGVycztcbiAgICAgICAgICAgICAgICBsZXQgc3VwcGx5ID0gcG9saWN5RGF0YS5hc3NldF9taW50ZWQ7XG4gICAgICAgICAgICAgICAgbGV0IHZvbHVtZSA9IChwb2xpY3lEYXRhLnRvdGFsX3ZvbHVtZS8xMDAwMDAwMDAwMDAwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGxldCB0aHVtYm5haWwgPSBnZXRJcGZzKHBvbGljeURhdGEudGh1bWJuYWlsKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aHVtYm5haWwpO1xuXG4gICAgICAgICAgICAgICAgbGV0IG91dCA9IDxkaXYgY2xhc3NOYW1lPVwicG9saWN5LWJhclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaW5mby1pdGVtXCI+Rmxvb3IgUHJpY2UgIHtmbG9vclByaWNlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaW5mby1pdGVtXCI+SG9sZGVyIHtob2xkZXJzfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaW5mby1pdGVtXCI+QXNzZXRzIE1pbnRlZCB7c3VwcGx5fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaW5mby1pdGVtXCI+VG90YWwgVm9sdW1lIHt2b2x1bWV9TTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaW5mby1pdGVtXCI+dGh1bWJuYWlsIHt0aHVtYm5haWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+O1xuXG4gICAgICAgICAgICAgICAgc2V0RGlzcGxheShvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gXG5cbiAgICAgICAgfVxuICAgICAgICBmdW5jKCk7XG4gICAgfSwgW3Byb3BzXSlcblxuICAgICAgICAgICAvLyBpZiBtZXRhZGF0YSBoYXMgYmVlbiBmZXRjaGVkXG4gICAgLy8gZmluZCB0aGUgaXBmcyBsaW5rIHVuZGVyICdpbWFnZScgbWV0YWRhdGEgdGFnIGFuZCBzdG9yZSBpdFxuICAgIGZ1bmN0aW9uIGdldElwZnMoanNvbil7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoanNvbik7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKGpzb24pO1xuICAgICAgbGV0IGlwZnMgPSBcIlwiO1xuICAgICAgZm9yKGxldCBpPTA7aTxrZXlzLmxlbmd0aDtpKyspe1xuXG5cbiAgICAgICAgaWYoa2V5c1tpXSA9PSBcInRodW1ibmFpbFwiKXtcbiAgICAgICAgICBpcGZzID0gdmFsdWVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBmdW5naWJsZSB0b2tlbnMgd2lsbCBoYXZlIGEgJ2xvZ28nIGluc3RlYWQgb2YgJ2ltYWdlJyB0YWdcbiAgICAgICAgaWYoa2V5c1tpXSA9PSBcImxvZ29cIil7XG4gICAgICAgICAgaXBmcyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LFwiK3ZhbHVlc1tpXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnZlcnQgYWxsIGlwZnMgZm9ybWF0cyB0byB0aGUgYSBzZWFyY2hhYmxlIGZvcm1hdCB0aGF0IGNhbiBiZSBmZXRjaGVkIGluIGEgPGltZz4gdGFnXG4gICAgICB0cnl7XG5cbiAgICAgICAgLy8gbGlua3MgYXJlIHNvbWV0aW1lcyBzdG9yZWQgaW4gYXJyYXlzXG4gICAgICAgIC8vIHRoaXMgZmluZHMgaXBmcyBsaW5rcyBpbiB0aGUgYXJyYXlcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheShpcGZzKSl7XG4gICAgICAgICAgbGV0IG5ld2lwZnMgPSBcIlwiO1xuICAgICAgICAgIGZvcihjb25zdCBlbGVtZW50IG9mIGlwZnMpe1xuICAgICAgICAgICAgbmV3aXBmcyA9IG5ld2lwZnMgKyBlbGVtZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihuZXdpcGZzLnN0YXJ0c1dpdGgoJ2JhJykpe1xuICAgICAgICAgICAgbmV3aXBmcyA9IFwiaHR0cDovL2R3ZWIubGluay9pcGZzL1wiK2lwZnM7XG4gICAgICAgICAgICBuZXdpcGZzID0gbmV3aXBmcy5yZXBsYWNlKC8sL2csICcnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ld2lwZnM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBub3JtYWwgaXBmcyBpbiBpbWFnZSB0YWdzXG4gICAgICAgIGlmKGlwZnMuc3RhcnRzV2l0aCgnaXBmczovLycpKXtcbiAgICAgICAgICBpcGZzID0gaXBmcy5zbGljZSg3KTtcbiAgICAgICAgICBpZihpcGZzLnN0YXJ0c1dpdGgoJ2lwZnMvJykpe1xuICAgICAgICAgICAgaXBmcyA9IGlwZnMuc2xpY2UoNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlwZnMgPSBcImh0dHA6Ly9kd2ViLmxpbmsvaXBmcy9cIitpcGZzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoaXBmcy5zdGFydHNXaXRoKCdpcGZzLycpKXtcbiAgICAgICAgICBpcGZzID0gaXBmcy5zbGljZSg1KTtcbiAgICAgICAgICBpcGZzID0gXCJodHRwOi8vZHdlYi5saW5rL2lwZnMvXCIraXBmcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGlwZnMuc3RhcnRzV2l0aCgnUW0nKSl7XG4gICAgICAgICAgaXBmcyA9IFwiaHR0cDovL2R3ZWIubGluay9pcGZzL1wiK2lwZnM7XG4gICAgICAgIH1cblxuICAgICAgfWNhdGNoe1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpcGZzO1xuICAgIFxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldENuZnRQb2xpY3lEYXRhKHBvbGljeSl7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm9wZW5jbmZ0LmlvLzEvcG9saWN5LycrcG9saWN5LFxuICAgICAgICAgIHtoZWFkZXJzOntwcm9qZWN0X2lkOiAnbWFpbm5ldG9XNjFZWVNpT29MU2FOUTZkelRya0FHNGF6WFZJcnZoJywgJ2NhY2hlLWNvbnRyb2wnOiAnbWF4LWFnZT0zMTUzNjAwMCd9fSk7XG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gIFxuICAgICAgICAgIGlmKGRhdGEuc3RhdHVzIT0gMjAwKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgIHJldHVybig8ZGl2IGNsYXNzTmFtZT1cInBvbGljeS1pbmZvXCI+e2Rpc3BsYXl9PC9kaXY+KVxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBvbGljeSIsInByb3BzIiwiZGlzcGxheSIsInNldERpc3BsYXkiLCJmdW5jIiwicG9saWN5IiwicG9saWN5RGF0YSIsImdldENuZnRQb2xpY3lEYXRhIiwiY29uc29sZSIsImxvZyIsImZsb29yUHJpY2UiLCJmbG9vcl9wcmljZSIsImhvbGRlcnMiLCJhc3NldF9ob2xkZXJzIiwic3VwcGx5IiwiYXNzZXRfbWludGVkIiwidm9sdW1lIiwidG90YWxfdm9sdW1lIiwidG9GaXhlZCIsInRodW1ibmFpbCIsImdldElwZnMiLCJvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJqc29uIiwia2V5cyIsIk9iamVjdCIsInZhbHVlcyIsImlwZnMiLCJpIiwibGVuZ3RoIiwiQXJyYXkiLCJpc0FycmF5IiwibmV3aXBmcyIsImVsZW1lbnQiLCJzdGFydHNXaXRoIiwicmVwbGFjZSIsInNsaWNlIiwiZGF0YSIsImZldGNoIiwiaGVhZGVycyIsInByb2plY3RfaWQiLCJyZXMiLCJzdGF0dXMiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/policy.js\n"));

/***/ })

});