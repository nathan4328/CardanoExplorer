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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Policy; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Policy(props) {\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        thumbnail: \"\",\n        floorPrice: \"\",\n        holders: \"\",\n        supply: \"\",\n        volume: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function func() {\n            if (props.policy != null) {\n                let policyData = await getCnftPolicyData(props.policy);\n                if (policyData != null) {\n                    console.log(policyData);\n                    let floorPrice = policyData.floor_price / 1000000;\n                    let holders = policyData.asset_holders;\n                    let supply = policyData.asset_minted;\n                    let volume = (policyData.total_volume / 1000000000000).toFixed(2);\n                    let thumbnail = getIpfs(policyData.thumbnail);\n                    console.log(thumbnail);\n                    let out = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"policy-bar\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"policy-info-item\",\n                                src: thumbnail\n                            }, void 0, false, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                                lineNumber: 21,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"policy-info-item\",\n                                children: [\n                                    \"Floor Price  \",\n                                    floorPrice\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                                lineNumber: 22,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"policy-info-item\",\n                                children: [\n                                    \"Holder \",\n                                    holders\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                                lineNumber: 23,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"policy-info-item\",\n                                children: [\n                                    \"Assets Minted \",\n                                    supply\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                                lineNumber: 24,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"policy-info-item\",\n                                children: [\n                                    \"Total Volume \",\n                                    volume,\n                                    \"M\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                                lineNumber: 25,\n                                columnNumber: 19\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n                        lineNumber: 20,\n                        columnNumber: 27\n                    }, this);\n                    let obj = {\n                        thumbnail: thumbnail,\n                        floorPrice: floorPrice,\n                        holders: holders,\n                        suppy: supply,\n                        volume: volume\n                    };\n                    setDisplay(obj);\n                }\n            }\n        }\n        func();\n    }, [\n        props\n    ]);\n    // if metadata has been fetched\n    // find the ipfs link under 'image' metadata tag and store it\n    function getIpfs(ipfs) {\n        // convert all ipfs formats to the a searchable format that can be fetched in a <img> tag\n        try {\n            // links are sometimes stored in arrays\n            // this finds ipfs links in the array\n            if (Array.isArray(ipfs)) {\n                let newipfs = \"\";\n                for (const element of ipfs){\n                    newipfs = newipfs + element;\n                }\n                if (newipfs.startsWith(\"ba\")) {\n                    newipfs = \"http://dweb.link/ipfs/\" + ipfs;\n                    newipfs = newipfs.replace(/,/g, \"\");\n                }\n                return newipfs;\n            }\n            // normal ipfs in image tags\n            if (ipfs.startsWith(\"ipfs://\")) {\n                ipfs = ipfs.slice(7);\n                if (ipfs.startsWith(\"ipfs/\")) {\n                    ipfs = ipfs.slice(5);\n                }\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            } else if (ipfs.startsWith(\"ipfs/\")) {\n                ipfs = ipfs.slice(5);\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            } else if (ipfs.startsWith(\"Qm\")) {\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            }\n        } catch (e) {\n            return null;\n        }\n        return ipfs;\n    }\n    async function getCnftPolicyData(policy) {\n        try {\n            const data = await fetch(\"https://api.opencnft.io/1/policy/\" + policy, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            const res = await data.json();\n            if (data.status != 200) {\n                return null;\n            }\n            return res;\n        } catch (error) {\n            return null;\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"policy-info\",\n        children: display\n    }, void 0, false, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/policy.js\",\n        lineNumber: 97,\n        columnNumber: 12\n    }, this);\n}\n_s(Policy, \"j5ZqZMRZDYsk2F795+aFBwHAGUQ=\");\n_c = Policy;\nvar _c;\n$RefreshReg$(_c, \"Policy\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3BDLElBQUc7WUFDRCxNQUFNMEIsT0FBTyxNQUFNQyxNQUFNLHNDQUFvQzNCLFFBQzdEO2dCQUFDNEIsU0FBUTtvQkFBQ0MsWUFBWTtvQkFBMkMsaUJBQWlCO2dCQUFrQjtZQUFDO1lBQ3JHLE1BQU1DLE1BQU0sTUFBTUosS0FBS0ssSUFBSTtZQUUzQixJQUFHTCxLQUFLTSxNQUFNLElBQUcsS0FBSTtnQkFDbkIsT0FBTyxJQUFJO1lBQ2IsQ0FBQztZQUNELE9BQU9GO1FBQ1QsRUFBQyxPQUFNRyxPQUFNO1lBQ1gsT0FBTyxJQUFJO1FBQ2I7SUFDRjtJQUdGLHFCQUFPLDhEQUFDckI7UUFBSUMsV0FBVTtrQkFBZXJCOzs7Ozs7QUFDekMsQ0FBQztHQS9GdUJGO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wb2xpY3kuanM/MjQ1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9saWN5KHByb3BzKXtcblxuICAgIGNvbnN0IFtkaXNwbGF5LCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKHt0aHVtYm5haWw6ICcnLCBmbG9vclByaWNlOicnLCBob2xkZXJzOiAnJywgc3VwcGx5IDonJywgdm9sdW1lOicnfSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBmdW5jKCl7XG4gICAgICAgICAgaWYocHJvcHMucG9saWN5ICE9IG51bGwpe1xuICAgICAgICAgICAgbGV0IHBvbGljeURhdGEgPSBhd2FpdCBnZXRDbmZ0UG9saWN5RGF0YShwcm9wcy5wb2xpY3kpO1xuICAgICAgICAgICAgaWYocG9saWN5RGF0YSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwb2xpY3lEYXRhKTtcbiAgICAgICAgICAgICAgICBsZXQgZmxvb3JQcmljZSA9IHBvbGljeURhdGEuZmxvb3JfcHJpY2UvMTAwMDAwMDtcbiAgICAgICAgICAgICAgICBsZXQgaG9sZGVycyA9IHBvbGljeURhdGEuYXNzZXRfaG9sZGVycztcbiAgICAgICAgICAgICAgICBsZXQgc3VwcGx5ID0gcG9saWN5RGF0YS5hc3NldF9taW50ZWQ7XG4gICAgICAgICAgICAgICAgbGV0IHZvbHVtZSA9IChwb2xpY3lEYXRhLnRvdGFsX3ZvbHVtZS8xMDAwMDAwMDAwMDAwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIGxldCB0aHVtYm5haWwgPSBnZXRJcGZzKHBvbGljeURhdGEudGh1bWJuYWlsKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aHVtYm5haWwpO1xuXG4gICAgICAgICAgICAgICAgbGV0IG91dCA9IDxkaXYgY2xhc3NOYW1lPVwicG9saWN5LWJhclwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwb2xpY3ktaW5mby1pdGVtXCIgc3JjPXt0aHVtYm5haWx9PjwvaW1nPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaW5mby1pdGVtXCI+Rmxvb3IgUHJpY2UgIHtmbG9vclByaWNlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaW5mby1pdGVtXCI+SG9sZGVyIHtob2xkZXJzfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaW5mby1pdGVtXCI+QXNzZXRzIE1pbnRlZCB7c3VwcGx5fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xpY3ktaW5mby1pdGVtXCI+VG90YWwgVm9sdW1lIHt2b2x1bWV9TTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PjtcblxuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7dGh1bWJuYWlsIDogdGh1bWJuYWlsLCBmbG9vclByaWNlOiBmbG9vclByaWNlLCBob2xkZXJzOiBob2xkZXJzLCBzdXBweTogc3VwcGx5LCB2b2x1bWU6IHZvbHVtZX1cblxuICAgICAgICAgICAgICAgIHNldERpc3BsYXkob2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IFxuXG4gICAgICAgIH1cbiAgICAgICAgZnVuYygpO1xuICAgIH0sIFtwcm9wc10pXG5cbiAgICAgICAgICAgLy8gaWYgbWV0YWRhdGEgaGFzIGJlZW4gZmV0Y2hlZFxuICAgIC8vIGZpbmQgdGhlIGlwZnMgbGluayB1bmRlciAnaW1hZ2UnIG1ldGFkYXRhIHRhZyBhbmQgc3RvcmUgaXRcbiAgICBmdW5jdGlvbiBnZXRJcGZzKGlwZnMpe1xuICAgICAgLy8gY29udmVydCBhbGwgaXBmcyBmb3JtYXRzIHRvIHRoZSBhIHNlYXJjaGFibGUgZm9ybWF0IHRoYXQgY2FuIGJlIGZldGNoZWQgaW4gYSA8aW1nPiB0YWdcbiAgICAgIHRyeXtcblxuICAgICAgICAvLyBsaW5rcyBhcmUgc29tZXRpbWVzIHN0b3JlZCBpbiBhcnJheXNcbiAgICAgICAgLy8gdGhpcyBmaW5kcyBpcGZzIGxpbmtzIGluIHRoZSBhcnJheVxuICAgICAgICBpZihBcnJheS5pc0FycmF5KGlwZnMpKXtcbiAgICAgICAgICBsZXQgbmV3aXBmcyA9IFwiXCI7XG4gICAgICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgaXBmcyl7XG4gICAgICAgICAgICBuZXdpcGZzID0gbmV3aXBmcyArIGVsZW1lbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKG5ld2lwZnMuc3RhcnRzV2l0aCgnYmEnKSl7XG4gICAgICAgICAgICBuZXdpcGZzID0gXCJodHRwOi8vZHdlYi5saW5rL2lwZnMvXCIraXBmcztcbiAgICAgICAgICAgIG5ld2lwZnMgPSBuZXdpcGZzLnJlcGxhY2UoLywvZywgJycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3aXBmcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5vcm1hbCBpcGZzIGluIGltYWdlIHRhZ3NcbiAgICAgICAgaWYoaXBmcy5zdGFydHNXaXRoKCdpcGZzOi8vJykpe1xuICAgICAgICAgIGlwZnMgPSBpcGZzLnNsaWNlKDcpO1xuICAgICAgICAgIGlmKGlwZnMuc3RhcnRzV2l0aCgnaXBmcy8nKSl7XG4gICAgICAgICAgICBpcGZzID0gaXBmcy5zbGljZSg1KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaXBmcyA9IFwiaHR0cDovL2R3ZWIubGluay9pcGZzL1wiK2lwZnM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihpcGZzLnN0YXJ0c1dpdGgoJ2lwZnMvJykpe1xuICAgICAgICAgIGlwZnMgPSBpcGZzLnNsaWNlKDUpO1xuICAgICAgICAgIGlwZnMgPSBcImh0dHA6Ly9kd2ViLmxpbmsvaXBmcy9cIitpcGZzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoaXBmcy5zdGFydHNXaXRoKCdRbScpKXtcbiAgICAgICAgICBpcGZzID0gXCJodHRwOi8vZHdlYi5saW5rL2lwZnMvXCIraXBmcztcbiAgICAgICAgfVxuXG4gICAgICB9Y2F0Y2h7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlwZnM7XG4gICAgXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0Q25mdFBvbGljeURhdGEocG9saWN5KXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkub3BlbmNuZnQuaW8vMS9wb2xpY3kvJytwb2xpY3ksXG4gICAgICAgICAge2hlYWRlcnM6e3Byb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnLCAnY2FjaGUtY29udHJvbCc6ICdtYXgtYWdlPTMxNTM2MDAwJ319KTtcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgXG4gICAgICAgICAgaWYoZGF0YS5zdGF0dXMhPSAyMDApe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgcmV0dXJuKDxkaXYgY2xhc3NOYW1lPVwicG9saWN5LWluZm9cIj57ZGlzcGxheX08L2Rpdj4pXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUG9saWN5IiwicHJvcHMiLCJkaXNwbGF5Iiwic2V0RGlzcGxheSIsInRodW1ibmFpbCIsImZsb29yUHJpY2UiLCJob2xkZXJzIiwic3VwcGx5Iiwidm9sdW1lIiwiZnVuYyIsInBvbGljeSIsInBvbGljeURhdGEiLCJnZXRDbmZ0UG9saWN5RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJmbG9vcl9wcmljZSIsImFzc2V0X2hvbGRlcnMiLCJhc3NldF9taW50ZWQiLCJ0b3RhbF92b2x1bWUiLCJ0b0ZpeGVkIiwiZ2V0SXBmcyIsIm91dCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsIm9iaiIsInN1cHB5IiwiaXBmcyIsIkFycmF5IiwiaXNBcnJheSIsIm5ld2lwZnMiLCJlbGVtZW50Iiwic3RhcnRzV2l0aCIsInJlcGxhY2UiLCJzbGljZSIsImRhdGEiLCJmZXRjaCIsImhlYWRlcnMiLCJwcm9qZWN0X2lkIiwicmVzIiwianNvbiIsInN0YXR1cyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/policy.js\n"));

/***/ })

});