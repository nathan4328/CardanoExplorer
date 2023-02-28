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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Policy; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Policy(props) {\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        policy: \"\",\n        thumbnail: \"\",\n        floorPrice: \"\",\n        holders: \"\",\n        supply: \"\",\n        volume: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function func() {\n            if (props.policy != null) {\n                let policyData = await getCnftPolicyData(props.policy);\n                if (policyData != null) {\n                    console.log(policyData);\n                    let floorPrice = policyData.floor_price / 1000000;\n                    let holders = policyData.asset_holders;\n                    let supply = policyData.asset_minted;\n                    let volume = (policyData.total_volume / 1000000000000).toFixed(2);\n                    let thumbnail = getIpfs(policyData.thumbnail);\n                    console.log(thumbnail);\n                    let obj = {\n                        policy: props.policy,\n                        thumbnail: thumbnail,\n                        floorPrice: floorPrice,\n                        holders: holders,\n                        supply: supply,\n                        volume: volume\n                    };\n                    setDisplay(obj);\n                }\n            }\n        }\n        func();\n    }, [\n        props\n    ]);\n    // if metadata has been fetched\n    // find the ipfs link under 'image' metadata tag and store it\n    function getIpfs(ipfs) {\n        // convert all ipfs formats to the a searchable format that can be fetched in a <img> tag\n        try {\n            // links are sometimes stored in arrays\n            // this finds ipfs links in the array\n            if (Array.isArray(ipfs)) {\n                let newipfs = \"\";\n                for (const element of ipfs){\n                    newipfs = newipfs + element;\n                }\n                if (newipfs.startsWith(\"ba\")) {\n                    newipfs = \"http://dweb.link/ipfs/\" + ipfs;\n                    newipfs = newipfs.replace(/,/g, \"\");\n                }\n                return newipfs;\n            }\n            // normal ipfs in image tags\n            if (ipfs.startsWith(\"ipfs://\")) {\n                ipfs = ipfs.slice(7);\n                if (ipfs.startsWith(\"ipfs/\")) {\n                    ipfs = ipfs.slice(5);\n                }\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            } else if (ipfs.startsWith(\"ipfs/\")) {\n                ipfs = ipfs.slice(5);\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            } else if (ipfs.startsWith(\"Qm\")) {\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            }\n        } catch (e) {\n            return null;\n        }\n        return ipfs;\n    }\n    async function getCnftPolicyData(policy) {\n        try {\n            const data = await fetch(\"https://api.opencnft.io/1/policy/\" + policy, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"policy-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-item-info\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: display.thumbnail,\n                    width: 80,\n                    height: 80,\n                    alt: \"no img\",\n                    className: \"policy-thumbnail\"\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                    lineNumber: 92,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 91,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-item-info\",\n                children: [\n                    \"Policy: \",\n                    display.policy.substring(0, 9),\n                    \"...\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 94,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-item-info\",\n                children: [\n                    \"Supply: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"currency\",\n                        children: display.supply\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                        lineNumber: 98,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 97,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-item-info\",\n                children: [\n                    \"Volume: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"currency\",\n                        children: [\n                            display.volume,\n                            \"m\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                        lineNumber: 101,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 100,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-item-info\",\n                children: [\n                    \"Floor Price: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"currency\",\n                        children: display.floorPrice\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                        lineNumber: 104,\n                        columnNumber: 26\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 103,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-item-info\",\n                children: [\n                    \"Holders: \",\n                    display.holders\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 106,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n        lineNumber: 90,\n        columnNumber: 12\n    }, this);\n}\n_s(Policy, \"wDlnEc/tu2NBH6hi5rKUf1XBR70=\");\n_c = Policy;\nvar _c;\n$RefreshReg$(_c, \"Policy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9saWN5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQjtBQUNZO0FBRTVCLFNBQVNHLE9BQU9DLEtBQUssRUFBQzs7SUFFakMsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdKLCtDQUFRQSxDQUFDO1FBQUNLLFFBQVE7UUFBSUMsV0FBVztRQUFJQyxZQUFXO1FBQUlDLFNBQVM7UUFBSUMsUUFBUTtRQUFJQyxRQUFPO0lBQUU7SUFFcEhYLGdEQUFTQSxDQUFDLElBQU07UUFDWixlQUFlWSxPQUFNO1lBQ25CLElBQUdULE1BQU1HLE1BQU0sSUFBSSxJQUFJLEVBQUM7Z0JBQ3RCLElBQUlPLGFBQWEsTUFBTUMsa0JBQWtCWCxNQUFNRyxNQUFNO2dCQUNyRCxJQUFHTyxjQUFjLElBQUksRUFBQztvQkFDbEJFLFFBQVFDLEdBQUcsQ0FBQ0g7b0JBQ1osSUFBSUwsYUFBYUssV0FBV0ksV0FBVyxHQUFDO29CQUN4QyxJQUFJUixVQUFVSSxXQUFXSyxhQUFhO29CQUN0QyxJQUFJUixTQUFTRyxXQUFXTSxZQUFZO29CQUNwQyxJQUFJUixTQUFTLENBQUNFLFdBQVdPLFlBQVksR0FBQyxhQUFZLEVBQUdDLE9BQU8sQ0FBQztvQkFDN0QsSUFBSWQsWUFBWWUsUUFBUVQsV0FBV04sU0FBUztvQkFDNUNRLFFBQVFDLEdBQUcsQ0FBQ1Q7b0JBRVosSUFBSWdCLE1BQU07d0JBQUNqQixRQUFRSCxNQUFNRyxNQUFNO3dCQUFFQyxXQUFZQTt3QkFBV0MsWUFBWUE7d0JBQVlDLFNBQVNBO3dCQUFTQyxRQUFRQTt3QkFBUUMsUUFBUUE7b0JBQU07b0JBRWhJTixXQUFXa0I7Z0JBQ2YsQ0FBQztZQUNILENBQUM7UUFFSDtRQUNBWDtJQUNKLEdBQUc7UUFBQ1Q7S0FBTTtJQUVILCtCQUErQjtJQUN0Qyw2REFBNkQ7SUFDN0QsU0FBU21CLFFBQVFFLElBQUksRUFBQztRQUNwQix5RkFBeUY7UUFDekYsSUFBRztZQUVELHVDQUF1QztZQUN2QyxxQ0FBcUM7WUFDckMsSUFBR0MsTUFBTUMsT0FBTyxDQUFDRixPQUFNO2dCQUNyQixJQUFJRyxVQUFVO2dCQUNkLEtBQUksTUFBTUMsV0FBV0osS0FBSztvQkFDeEJHLFVBQVVBLFVBQVVDO2dCQUN0QjtnQkFDQSxJQUFHRCxRQUFRRSxVQUFVLENBQUMsT0FBTTtvQkFDMUJGLFVBQVUsMkJBQXlCSDtvQkFDbkNHLFVBQVVBLFFBQVFHLE9BQU8sQ0FBQyxNQUFNO2dCQUNsQyxDQUFDO2dCQUNELE9BQU9IO1lBQ1QsQ0FBQztZQUVELDRCQUE0QjtZQUM1QixJQUFHSCxLQUFLSyxVQUFVLENBQUMsWUFBVztnQkFDNUJMLE9BQU9BLEtBQUtPLEtBQUssQ0FBQztnQkFDbEIsSUFBR1AsS0FBS0ssVUFBVSxDQUFDLFVBQVM7b0JBQzFCTCxPQUFPQSxLQUFLTyxLQUFLLENBQUM7Z0JBQ3BCLENBQUM7Z0JBQ0RQLE9BQU8sMkJBQXlCQTtZQUNsQyxPQUNLLElBQUdBLEtBQUtLLFVBQVUsQ0FBQyxVQUFTO2dCQUMvQkwsT0FBT0EsS0FBS08sS0FBSyxDQUFDO2dCQUNsQlAsT0FBTywyQkFBeUJBO1lBQ2xDLE9BQ0ssSUFBR0EsS0FBS0ssVUFBVSxDQUFDLE9BQU07Z0JBQzVCTCxPQUFPLDJCQUF5QkE7WUFDbEMsQ0FBQztRQUVILEVBQUMsVUFBSztZQUNKLE9BQU8sSUFBSTtRQUNiO1FBQ0EsT0FBT0E7SUFFVDtJQUVBLGVBQWVWLGtCQUFrQlIsTUFBTSxFQUFDO1FBQ3BDLElBQUc7WUFDRCxNQUFNMEIsT0FBTyxNQUFNQyxNQUFNLHNDQUFvQzNCLFFBQzdEO2dCQUFDNEIsU0FBUTtvQkFBQ0MsWUFBWTtvQkFBMkMsaUJBQWlCO2dCQUFrQjtZQUFDO1lBQ3JHLE1BQU1DLE1BQU0sTUFBTUosS0FBS0ssSUFBSTtZQUUzQixJQUFHTCxLQUFLTSxNQUFNLElBQUcsS0FBSTtnQkFDbkIsT0FBTyxJQUFJO1lBQ2IsQ0FBQztZQUNELE9BQU9GO1FBQ1QsRUFBQyxPQUFNRyxPQUFNO1lBQ1gsT0FBTyxJQUFJO1FBQ2I7SUFDRjtJQUdGLHFCQUFPLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDZCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUMxQyxtREFBS0E7b0JBQUMyQyxLQUFLdEMsUUFBUUcsU0FBUztvQkFBRW9DLE9BQU87b0JBQUlDLFFBQVE7b0JBQUlDLEtBQUk7b0JBQVNKLFdBQVU7Ozs7Ozs7Ozs7OzBCQUUvRSw4REFBQ0Q7Z0JBQUlDLFdBQVU7O29CQUFtQjtvQkFDeEJyQyxRQUFRRSxNQUFNLENBQUV3QyxTQUFTLENBQUMsR0FBRTtvQkFBRzs7Ozs7OzswQkFFekMsOERBQUNOO2dCQUFJQyxXQUFVOztvQkFBbUI7a0NBQzFCLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FBWXJDLFFBQVFNLE1BQU07Ozs7Ozs7Ozs7OzswQkFFakQsOERBQUM4QjtnQkFBSUMsV0FBVTs7b0JBQW1CO2tDQUMxQiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzRCQUFZckMsUUFBUU8sTUFBTTs0QkFBQzs7Ozs7Ozs7Ozs7OzswQkFFbEQsOERBQUM2QjtnQkFBSUMsV0FBVTs7b0JBQW1CO2tDQUNyQiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQVlyQyxRQUFRSSxVQUFVOzs7Ozs7Ozs7Ozs7MEJBRTFELDhEQUFDZ0M7Z0JBQUlDLFdBQVU7O29CQUFtQjtvQkFDeEJyQyxRQUFRSyxPQUFPOzs7Ozs7Ozs7Ozs7O0FBR3JDLENBQUM7R0ExR3VCUDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcG9saWN5LmpzPzI0NWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9saWN5KHByb3BzKXtcblxuICAgIGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKHtwb2xpY3k6ICcnLCB0aHVtYm5haWw6ICcnLCBmbG9vclByaWNlOicnLCBob2xkZXJzOiAnJywgc3VwcGx5IDonJywgdm9sdW1lOicnfSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBmdW5jKCl7XG4gICAgICAgICAgaWYocHJvcHMucG9saWN5ICE9IG51bGwpe1xuICAgICAgICAgICAgbGV0IHBvbGljeURhdGEgPSBhd2FpdCBnZXRDbmZ0UG9saWN5RGF0YShwcm9wcy5wb2xpY3kpO1xuICAgICAgICAgICAgaWYocG9saWN5RGF0YSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwb2xpY3lEYXRhKTtcbiAgICAgICAgICAgICAgICBsZXQgZmxvb3JQcmljZSA9IHBvbGljeURhdGEuZmxvb3JfcHJpY2UvMTAwMDAwMDtcbiAgICAgICAgICAgICAgICBsZXQgaG9sZGVycyA9IHBvbGljeURhdGEuYXNzZXRfaG9sZGVycztcbiAgICAgICAgICAgICAgICBsZXQgc3VwcGx5ID0gcG9saWN5RGF0YS5hc3NldF9taW50ZWQ7XG4gICAgICAgICAgICAgICAgbGV0IHZvbHVtZSA9IChwb2xpY3lEYXRhLnRvdGFsX3ZvbHVtZS8xMDAwMDAwMDAwMDAwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGxldCB0aHVtYm5haWwgPSBnZXRJcGZzKHBvbGljeURhdGEudGh1bWJuYWlsKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aHVtYm5haWwpO1xuXG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtwb2xpY3k6IHByb3BzLnBvbGljeSwgdGh1bWJuYWlsIDogdGh1bWJuYWlsLCBmbG9vclByaWNlOiBmbG9vclByaWNlLCBob2xkZXJzOiBob2xkZXJzLCBzdXBwbHk6IHN1cHBseSwgdm9sdW1lOiB2b2x1bWV9XG5cbiAgICAgICAgICAgICAgICBzZXREaXNwbGF5KG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBcblxuICAgICAgICB9XG4gICAgICAgIGZ1bmMoKTtcbiAgICB9LCBbcHJvcHNdKVxuXG4gICAgICAgICAgIC8vIGlmIG1ldGFkYXRhIGhhcyBiZWVuIGZldGNoZWRcbiAgICAvLyBmaW5kIHRoZSBpcGZzIGxpbmsgdW5kZXIgJ2ltYWdlJyBtZXRhZGF0YSB0YWcgYW5kIHN0b3JlIGl0XG4gICAgZnVuY3Rpb24gZ2V0SXBmcyhpcGZzKXtcbiAgICAgIC8vIGNvbnZlcnQgYWxsIGlwZnMgZm9ybWF0cyB0byB0aGUgYSBzZWFyY2hhYmxlIGZvcm1hdCB0aGF0IGNhbiBiZSBmZXRjaGVkIGluIGEgPGltZz4gdGFnXG4gICAgICB0cnl7XG5cbiAgICAgICAgLy8gbGlua3MgYXJlIHNvbWV0aW1lcyBzdG9yZWQgaW4gYXJyYXlzXG4gICAgICAgIC8vIHRoaXMgZmluZHMgaXBmcyBsaW5rcyBpbiB0aGUgYXJyYXlcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheShpcGZzKSl7XG4gICAgICAgICAgbGV0IG5ld2lwZnMgPSBcIlwiO1xuICAgICAgICAgIGZvcihjb25zdCBlbGVtZW50IG9mIGlwZnMpe1xuICAgICAgICAgICAgbmV3aXBmcyA9IG5ld2lwZnMgKyBlbGVtZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihuZXdpcGZzLnN0YXJ0c1dpdGgoJ2JhJykpe1xuICAgICAgICAgICAgbmV3aXBmcyA9IFwiaHR0cDovL2R3ZWIubGluay9pcGZzL1wiK2lwZnM7XG4gICAgICAgICAgICBuZXdpcGZzID0gbmV3aXBmcy5yZXBsYWNlKC8sL2csICcnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ld2lwZnM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBub3JtYWwgaXBmcyBpbiBpbWFnZSB0YWdzXG4gICAgICAgIGlmKGlwZnMuc3RhcnRzV2l0aCgnaXBmczovLycpKXtcbiAgICAgICAgICBpcGZzID0gaXBmcy5zbGljZSg3KTtcbiAgICAgICAgICBpZihpcGZzLnN0YXJ0c1dpdGgoJ2lwZnMvJykpe1xuICAgICAgICAgICAgaXBmcyA9IGlwZnMuc2xpY2UoNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlwZnMgPSBcImh0dHA6Ly9kd2ViLmxpbmsvaXBmcy9cIitpcGZzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoaXBmcy5zdGFydHNXaXRoKCdpcGZzLycpKXtcbiAgICAgICAgICBpcGZzID0gaXBmcy5zbGljZSg1KTtcbiAgICAgICAgICBpcGZzID0gXCJodHRwOi8vZHdlYi5saW5rL2lwZnMvXCIraXBmcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGlwZnMuc3RhcnRzV2l0aCgnUW0nKSl7XG4gICAgICAgICAgaXBmcyA9IFwiaHR0cDovL2R3ZWIubGluay9pcGZzL1wiK2lwZnM7XG4gICAgICAgIH1cblxuICAgICAgfWNhdGNoe1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpcGZzO1xuICAgIFxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldENuZnRQb2xpY3lEYXRhKHBvbGljeSl7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm9wZW5jbmZ0LmlvLzEvcG9saWN5LycrcG9saWN5LFxuICAgICAgICAgIHtoZWFkZXJzOntwcm9qZWN0X2lkOiAnbWFpbm5ldG9XNjFZWVNpT29MU2FOUTZkelRya0FHNGF6WFZJcnZoJywgJ2NhY2hlLWNvbnRyb2wnOiAnbWF4LWFnZT0zMTUzNjAwMCd9fSk7XG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gIFxuICAgICAgICAgIGlmKGRhdGEuc3RhdHVzIT0gMjAwKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgIHJldHVybig8ZGl2IGNsYXNzTmFtZT1cInBvbGljeS1pbmZvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGljeS1pdGVtLWluZm9cIj5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17ZGlzcGxheS50aHVtYm5haWx9IHdpZHRoPXs4MH0gaGVpZ2h0PXs4MH0gYWx0PSdubyBpbWcnIGNsYXNzTmFtZT1cInBvbGljeS10aHVtYm5haWxcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9saWN5LWl0ZW0taW5mb1wiPlxuICAgICAgICAgICAgUG9saWN5OiB7KGRpc3BsYXkucG9saWN5KS5zdWJzdHJpbmcoMCw5KX0uLi5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaXRlbS1pbmZvXCI+XG4gICAgICAgICAgICBTdXBwbHk6IDxkaXYgY2xhc3NOYW1lPVwiY3VycmVuY3lcIj57ZGlzcGxheS5zdXBwbHl9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9saWN5LWl0ZW0taW5mb1wiPlxuICAgICAgICAgICAgVm9sdW1lOiA8ZGl2IGNsYXNzTmFtZT1cImN1cnJlbmN5XCI+e2Rpc3BsYXkudm9sdW1lfW08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaXRlbS1pbmZvXCI+XG4gICAgICAgICAgICBGbG9vciBQcmljZTogPGRpdiBjbGFzc05hbWU9XCJjdXJyZW5jeVwiPntkaXNwbGF5LmZsb29yUHJpY2V9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9saWN5LWl0ZW0taW5mb1wiPlxuICAgICAgICAgICAgSG9sZGVyczoge2Rpc3BsYXkuaG9sZGVyc31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2Pilcbn0iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBvbGljeSIsInByb3BzIiwiZGlzcGxheSIsInNldERpc3BsYXkiLCJwb2xpY3kiLCJ0aHVtYm5haWwiLCJmbG9vclByaWNlIiwiaG9sZGVycyIsInN1cHBseSIsInZvbHVtZSIsImZ1bmMiLCJwb2xpY3lEYXRhIiwiZ2V0Q25mdFBvbGljeURhdGEiLCJjb25zb2xlIiwibG9nIiwiZmxvb3JfcHJpY2UiLCJhc3NldF9ob2xkZXJzIiwiYXNzZXRfbWludGVkIiwidG90YWxfdm9sdW1lIiwidG9GaXhlZCIsImdldElwZnMiLCJvYmoiLCJpcGZzIiwiQXJyYXkiLCJpc0FycmF5IiwibmV3aXBmcyIsImVsZW1lbnQiLCJzdGFydHNXaXRoIiwicmVwbGFjZSIsInNsaWNlIiwiZGF0YSIsImZldGNoIiwiaGVhZGVycyIsInByb2plY3RfaWQiLCJyZXMiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInN1YnN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/policy.js\n"));

/***/ })

});