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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Policy; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Policy(props) {\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        policy: \"\",\n        thumbnail: \"\",\n        floorPrice: \"\",\n        holders: \"\",\n        supply: \"\",\n        volume: \"\"\n    });\n    const [currency, setCurrency] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function func() {\n            if (props.policy != null && props.prices != null) {\n                let policyData = await getCnftPolicyData(props.policy);\n                if (policyData != null) {\n                    console.log(policyData);\n                    let floorPrice = policyData.floor_price / 1000000;\n                    let holders = policyData.asset_holders;\n                    let supply = policyData.asset_minted;\n                    let volume = (policyData.total_volume / 1000000000000).toFixed(2);\n                    let thumbnail = getIpfs(policyData.thumbnail);\n                    let currency = props.prices.currency;\n                    setCurrency(currency);\n                    let obj = {\n                        policy: props.policy,\n                        thumbnail: thumbnail,\n                        floorPrice: floorPrice,\n                        holders: holders,\n                        supply: supply,\n                        volume: volume\n                    };\n                    setDisplay(obj);\n                }\n            }\n        }\n        func();\n    }, [\n        props\n    ]);\n    // if metadata has been fetched\n    // find the ipfs link under 'image' metadata tag and store it\n    function getIpfs(ipfs) {\n        // convert all ipfs formats to the a searchable format that can be fetched in a <img> tag\n        try {\n            // links are sometimes stored in arrays\n            // this finds ipfs links in the array\n            if (Array.isArray(ipfs)) {\n                let newipfs = \"\";\n                for (const element of ipfs){\n                    newipfs = newipfs + element;\n                }\n                if (newipfs.startsWith(\"ba\")) {\n                    newipfs = \"http://dweb.link/ipfs/\" + ipfs;\n                    newipfs = newipfs.replace(/,/g, \"\");\n                }\n                return newipfs;\n            }\n            // normal ipfs in image tags\n            if (ipfs.startsWith(\"ipfs://\")) {\n                ipfs = ipfs.slice(7);\n                if (ipfs.startsWith(\"ipfs/\")) {\n                    ipfs = ipfs.slice(5);\n                }\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            } else if (ipfs.startsWith(\"ipfs/\")) {\n                ipfs = ipfs.slice(5);\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            } else if (ipfs.startsWith(\"Qm\")) {\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            }\n        } catch (e) {\n            return null;\n        }\n        return ipfs;\n    }\n    async function getCnftPolicyData(policy) {\n        try {\n            const data = await fetch(\"https://api.opencnft.io/1/policy/\" + policy, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"policy-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-item-info\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: display.thumbnail,\n                    width: 100,\n                    height: 100,\n                    alt: \"no img\",\n                    className: \"policy-thumbnail\"\n                }, void 0, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                    lineNumber: 95,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 94,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-item-info\",\n                children: [\n                    \"Policy: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"currency\",\n                        children: [\n                            display.policy.substring(0, 9),\n                            \"...\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                        lineNumber: 98,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 97,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-item-info\",\n                children: [\n                    \"Supply: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"currency\",\n                        children: display.supply\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                        lineNumber: 101,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 100,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-item-info\",\n                children: [\n                    \"Volume: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"currency\",\n                        children: [\n                            display.volume,\n                            \"m\",\n                            currency.symbol\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                        lineNumber: 104,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 103,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-item-info\",\n                children: [\n                    \"Floor Price: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"currency\",\n                        children: [\n                            display.floorPrice,\n                            currency.symbol\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                        lineNumber: 107,\n                        columnNumber: 26\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 106,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"policy-item-info\",\n                children: [\n                    \"Holders: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"currency\",\n                        children: display.holders\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                        lineNumber: 110,\n                        columnNumber: 22\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n        lineNumber: 93,\n        columnNumber: 12\n    }, this);\n}\n_s(Policy, \"COZ3XpHpEYu3grPQbtzZgG8MedM=\");\n_c = Policy;\nvar _c;\n$RefreshReg$(_c, \"Policy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLElBQUcsS0FBSTtnQkFDbkIsT0FBTyxJQUFJO1lBQ2IsQ0FBQztZQUNELE9BQU9GO1FBQ1QsRUFBQyxPQUFNRyxPQUFNO1lBQ1gsT0FBTyxJQUFJO1FBQ2I7SUFDRjtJQUdGLHFCQUFPLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDZCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUM3QyxtREFBS0E7b0JBQUM4QyxLQUFLekMsUUFBUUcsU0FBUztvQkFBRXVDLE9BQU87b0JBQUtDLFFBQVE7b0JBQUtDLEtBQUk7b0JBQVNKLFdBQVU7Ozs7Ozs7Ozs7OzBCQUVqRiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O29CQUFtQjtrQ0FDMUIsOERBQUNEO3dCQUFJQyxXQUFVOzs0QkFBYXhDLFFBQVFFLE1BQU0sQ0FBRTJDLFNBQVMsQ0FBQyxHQUFFOzRCQUFHOzs7Ozs7Ozs7Ozs7OzBCQUVuRSw4REFBQ047Z0JBQUlDLFdBQVU7O29CQUFtQjtrQ0FDMUIsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUFZeEMsUUFBUU0sTUFBTTs7Ozs7Ozs7Ozs7OzBCQUVqRCw4REFBQ2lDO2dCQUFJQyxXQUFVOztvQkFBbUI7a0NBQzFCLDhEQUFDRDt3QkFBSUMsV0FBVTs7NEJBQVl4QyxRQUFRTyxNQUFNOzRCQUFDOzRCQUFFQyxTQUFTc0MsTUFBTTs7Ozs7Ozs7Ozs7OzswQkFFbkUsOERBQUNQO2dCQUFJQyxXQUFVOztvQkFBbUI7a0NBQ3JCLDhEQUFDRDt3QkFBSUMsV0FBVTs7NEJBQVl4QyxRQUFRSSxVQUFVOzRCQUFFSSxTQUFTc0MsTUFBTTs7Ozs7Ozs7Ozs7OzswQkFFM0UsOERBQUNQO2dCQUFJQyxXQUFVOztvQkFBbUI7a0NBQ3pCLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FBWXhDLFFBQVFLLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcvRCxDQUFDO0dBN0d1QlA7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BvbGljeS5qcz8yNDVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvbGljeShwcm9wcyl7XG5cbiAgICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZSh7cG9saWN5OiAnJywgdGh1bWJuYWlsOiAnJywgZmxvb3JQcmljZTonJywgaG9sZGVyczogJycsIHN1cHBseSA6JycsIHZvbHVtZTonJ30pO1xuICAgIGNvbnN0IFtjdXJyZW5jeSwgc2V0Q3VycmVuY3ldID0gdXNlU3RhdGUoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZ1bmMoKXtcbiAgICAgICAgICBpZihwcm9wcy5wb2xpY3kgIT0gbnVsbCAmJiBwcm9wcy5wcmljZXMgIT0gbnVsbCl7XG4gICAgICAgICAgICBsZXQgcG9saWN5RGF0YSA9IGF3YWl0IGdldENuZnRQb2xpY3lEYXRhKHByb3BzLnBvbGljeSk7XG4gICAgICAgICAgICBpZihwb2xpY3lEYXRhICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvbGljeURhdGEpO1xuICAgICAgICAgICAgICAgIGxldCBmbG9vclByaWNlID0gcG9saWN5RGF0YS5mbG9vcl9wcmljZS8xMDAwMDAwO1xuICAgICAgICAgICAgICAgIGxldCBob2xkZXJzID0gcG9saWN5RGF0YS5hc3NldF9ob2xkZXJzO1xuICAgICAgICAgICAgICAgIGxldCBzdXBwbHkgPSBwb2xpY3lEYXRhLmFzc2V0X21pbnRlZDtcbiAgICAgICAgICAgICAgICBsZXQgdm9sdW1lID0gKHBvbGljeURhdGEudG90YWxfdm9sdW1lLzEwMDAwMDAwMDAwMDApLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgbGV0IHRodW1ibmFpbCA9IGdldElwZnMocG9saWN5RGF0YS50aHVtYm5haWwpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbmN5ID0gcHJvcHMucHJpY2VzLmN1cnJlbmN5O1xuICAgICAgICAgICAgICAgIHNldEN1cnJlbmN5KGN1cnJlbmN5KTtcblxuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7cG9saWN5OiBwcm9wcy5wb2xpY3ksIHRodW1ibmFpbCA6IHRodW1ibmFpbCwgZmxvb3JQcmljZTogZmxvb3JQcmljZSwgaG9sZGVyczogaG9sZGVycywgc3VwcGx5OiBzdXBwbHksIHZvbHVtZTogdm9sdW1lfVxuXG4gICAgICAgICAgICAgICAgc2V0RGlzcGxheShvYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gXG5cbiAgICAgICAgfVxuICAgICAgICBmdW5jKCk7XG4gICAgfSwgW3Byb3BzXSlcblxuICAgICAgICAgICAvLyBpZiBtZXRhZGF0YSBoYXMgYmVlbiBmZXRjaGVkXG4gICAgLy8gZmluZCB0aGUgaXBmcyBsaW5rIHVuZGVyICdpbWFnZScgbWV0YWRhdGEgdGFnIGFuZCBzdG9yZSBpdFxuICAgIGZ1bmN0aW9uIGdldElwZnMoaXBmcyl7XG4gICAgICAvLyBjb252ZXJ0IGFsbCBpcGZzIGZvcm1hdHMgdG8gdGhlIGEgc2VhcmNoYWJsZSBmb3JtYXQgdGhhdCBjYW4gYmUgZmV0Y2hlZCBpbiBhIDxpbWc+IHRhZ1xuICAgICAgdHJ5e1xuXG4gICAgICAgIC8vIGxpbmtzIGFyZSBzb21ldGltZXMgc3RvcmVkIGluIGFycmF5c1xuICAgICAgICAvLyB0aGlzIGZpbmRzIGlwZnMgbGlua3MgaW4gdGhlIGFycmF5XG4gICAgICAgIGlmKEFycmF5LmlzQXJyYXkoaXBmcykpe1xuICAgICAgICAgIGxldCBuZXdpcGZzID0gXCJcIjtcbiAgICAgICAgICBmb3IoY29uc3QgZWxlbWVudCBvZiBpcGZzKXtcbiAgICAgICAgICAgIG5ld2lwZnMgPSBuZXdpcGZzICsgZWxlbWVudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYobmV3aXBmcy5zdGFydHNXaXRoKCdiYScpKXtcbiAgICAgICAgICAgIG5ld2lwZnMgPSBcImh0dHA6Ly9kd2ViLmxpbmsvaXBmcy9cIitpcGZzO1xuICAgICAgICAgICAgbmV3aXBmcyA9IG5ld2lwZnMucmVwbGFjZSgvLC9nLCAnJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXdpcGZzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm9ybWFsIGlwZnMgaW4gaW1hZ2UgdGFnc1xuICAgICAgICBpZihpcGZzLnN0YXJ0c1dpdGgoJ2lwZnM6Ly8nKSl7XG4gICAgICAgICAgaXBmcyA9IGlwZnMuc2xpY2UoNyk7XG4gICAgICAgICAgaWYoaXBmcy5zdGFydHNXaXRoKCdpcGZzLycpKXtcbiAgICAgICAgICAgIGlwZnMgPSBpcGZzLnNsaWNlKDUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpcGZzID0gXCJodHRwOi8vZHdlYi5saW5rL2lwZnMvXCIraXBmcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGlwZnMuc3RhcnRzV2l0aCgnaXBmcy8nKSl7XG4gICAgICAgICAgaXBmcyA9IGlwZnMuc2xpY2UoNSk7XG4gICAgICAgICAgaXBmcyA9IFwiaHR0cDovL2R3ZWIubGluay9pcGZzL1wiK2lwZnM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihpcGZzLnN0YXJ0c1dpdGgoJ1FtJykpe1xuICAgICAgICAgIGlwZnMgPSBcImh0dHA6Ly9kd2ViLmxpbmsvaXBmcy9cIitpcGZzO1xuICAgICAgICB9XG5cbiAgICAgIH1jYXRjaHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXBmcztcbiAgICBcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRDbmZ0UG9saWN5RGF0YShwb2xpY3kpe1xuICAgICAgICB0cnl7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5vcGVuY25mdC5pby8xL3BvbGljeS8nK3BvbGljeSxcbiAgICAgICAgICB7aGVhZGVyczp7cHJvamVjdF9pZDogJ21haW5uZXRvVzYxWVlTaU9vTFNhTlE2ZHpUcmtBRzRhelhWSXJ2aCcsICdjYWNoZS1jb250cm9sJzogJ21heC1hZ2U9MzE1MzYwMDAnfX0pO1xuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRhdGEuanNvbigpO1xuICBcbiAgICAgICAgICBpZihkYXRhLnN0YXR1cyE9IDIwMCl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICByZXR1cm4oPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaW5mb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaXRlbS1pbmZvXCI+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2Rpc3BsYXkudGh1bWJuYWlsfSB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0gYWx0PSdubyBpbWcnIGNsYXNzTmFtZT1cInBvbGljeS10aHVtYm5haWxcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9saWN5LWl0ZW0taW5mb1wiPlxuICAgICAgICAgICAgUG9saWN5OiA8ZGl2IGNsYXNzTmFtZT1cImN1cnJlbmN5XCI+eyhkaXNwbGF5LnBvbGljeSkuc3Vic3RyaW5nKDAsOSl9Li4uPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9saWN5LWl0ZW0taW5mb1wiPlxuICAgICAgICAgICAgU3VwcGx5OiA8ZGl2IGNsYXNzTmFtZT1cImN1cnJlbmN5XCI+e2Rpc3BsYXkuc3VwcGx5fTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGljeS1pdGVtLWluZm9cIj5cbiAgICAgICAgICAgIFZvbHVtZTogPGRpdiBjbGFzc05hbWU9XCJjdXJyZW5jeVwiPntkaXNwbGF5LnZvbHVtZX1te2N1cnJlbmN5LnN5bWJvbH08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaXRlbS1pbmZvXCI+XG4gICAgICAgICAgICBGbG9vciBQcmljZTogPGRpdiBjbGFzc05hbWU9XCJjdXJyZW5jeVwiPntkaXNwbGF5LmZsb29yUHJpY2V9e2N1cnJlbmN5LnN5bWJvbH08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaXRlbS1pbmZvXCI+XG4gICAgICAgICAgICBIb2xkZXJzOiA8ZGl2IGNsYXNzTmFtZT1cImN1cnJlbmN5XCI+e2Rpc3BsYXkuaG9sZGVyc308L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2Pilcbn0iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlBvbGljeSIsInByb3BzIiwiZGlzcGxheSIsInNldERpc3BsYXkiLCJwb2xpY3kiLCJ0aHVtYm5haWwiLCJmbG9vclByaWNlIiwiaG9sZGVycyIsInN1cHBseSIsInZvbHVtZSIsImN1cnJlbmN5Iiwic2V0Q3VycmVuY3kiLCJmdW5jIiwicHJpY2VzIiwicG9saWN5RGF0YSIsImdldENuZnRQb2xpY3lEYXRhIiwiY29uc29sZSIsImxvZyIsImZsb29yX3ByaWNlIiwiYXNzZXRfaG9sZGVycyIsImFzc2V0X21pbnRlZCIsInRvdGFsX3ZvbHVtZSIsInRvRml4ZWQiLCJnZXRJcGZzIiwib2JqIiwiaXBmcyIsIkFycmF5IiwiaXNBcnJheSIsIm5ld2lwZnMiLCJlbGVtZW50Iiwic3RhcnRzV2l0aCIsInJlcGxhY2UiLCJzbGljZSIsImRhdGEiLCJmZXRjaCIsImhlYWRlcnMiLCJwcm9qZWN0X2lkIiwicmVzIiwianNvbiIsInN0YXR1cyIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJzdWJzdHJpbmciLCJzeW1ib2wiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/policy.js\n"));

/***/ })

});