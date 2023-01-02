"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/token.js":
/*!************************!*\
  !*** ./pages/token.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Token; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass Token {\n    async getMetadata() {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\" + this.unit, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\",\n                    \"cache-control\": \"max-age=31536000\"\n                }\n            });\n            this.metadata = await data.json();\n            if (this.metadata.onchain_metadata != null) {\n                return this.metadata.onchain_metadata;\n            } else if (this.metadata.metadata != null) {\n                return this.metadata.metadata;\n            } else {\n                return \"no metadata found\";\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    }\n    getIpfsFromMetadata() {\n        const keys = Object.keys(this.metadata);\n        const values = Object.values(this.metadata);\n        let ipfs = \"\";\n        for(let i = 0; i < keys.length; i++){\n            if (keys[i] == \"image\") {\n                ipfs = values[i];\n            }\n            if (keys[i] == \"logo\") {\n                ipfs = \"data:image/png;base64,\" + values[i];\n            }\n        }\n        try {\n            if (Array.isArray(ipfs)) {\n                let newipfs = \"\";\n                for (const element of ipfs){\n                    newipfs = newipfs + element;\n                }\n                if (newipfs.startsWith(\"ba\")) {\n                    newipfs = \"http://dweb.link/ipfs/\" + ipfs;\n                    newipfs = newipfs.replace(/,/g, \"\");\n                }\n                return newipfs;\n            }\n            if (ipfs.startsWith(\"ipfs://\")) {\n                ipfs = ipfs.slice(7);\n                if (ipfs.startsWith(\"ipfs/\")) {\n                    ipfs = ipfs.slice(5);\n                }\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            }\n            if (ipfs.startsWith(\"ipfs/\")) {\n                ipfs = ipfs.slice(5);\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            }\n            if (ipfs.startsWith(\"Qm\")) {\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            }\n        } catch (e) {\n            return null;\n        }\n        return ipfs;\n    }\n    constructor(name, fingerprint, policyId, quantity, unit){\n        this.name = name;\n        this.fingerprint = fingerprint;\n        this.policyId = policyId;\n        this.quantity = quantity;\n        this.unit = unit;\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9rZW57XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBmaW5nZXJwcmludCwgcG9saWN5SWQsIHF1YW50aXR5LCB1bml0KXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5maW5nZXJwcmludCA9IGZpbmdlcnByaW50O1xuICAgICAgICB0aGlzLnBvbGljeUlkID0gcG9saWN5SWQ7XG4gICAgICAgIHRoaXMucXVhbnRpdHkgPSBxdWFudGl0eTsgXG4gICAgICAgIHRoaXMudW5pdCA9IHVuaXQ7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGFzeW5jIGdldE1ldGFkYXRhKCl7XG4gICAgICB0cnl7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9jYXJkYW5vLW1haW5uZXQuYmxvY2tmcm9zdC5pby9hcGkvdjAvYXNzZXRzLycrdGhpcy51bml0LFxuICAgICAgICAgIHtoZWFkZXJzOntwcm9qZWN0X2lkOiAnbWFpbm5ldG9XNjFZWVNpT29MU2FOUTZkelRya0FHNGF6WFZJcnZoJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NhY2hlLWNvbnRyb2wnOiAnbWF4LWFnZT0zMTUzNjAwMCd9fSk7XG4gICAgICAgIHRoaXMubWV0YWRhdGEgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgICAgICAgaWYodGhpcy5tZXRhZGF0YS5vbmNoYWluX21ldGFkYXRhICE9IG51bGwpe1xuICAgICAgICAgIHJldHVybiB0aGlzLm1ldGFkYXRhLm9uY2hhaW5fbWV0YWRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLm1ldGFkYXRhLm1ldGFkYXRhICE9IG51bGwpe1xuICAgICAgICAgIHJldHVybiB0aGlzLm1ldGFkYXRhLm1ldGFkYXRhO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgcmV0dXJuICdubyBtZXRhZGF0YSBmb3VuZCc7XG4gICAgICAgIH1cbiAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgZ2V0SXBmc0Zyb21NZXRhZGF0YSgpe1xuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMubWV0YWRhdGEpO1xuICAgICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0aGlzLm1ldGFkYXRhKTtcbiAgICAgIGxldCBpcGZzID0gXCJcIjtcbiAgICAgIGZvcihsZXQgaT0wO2k8a2V5cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYoa2V5c1tpXSA9PSBcImltYWdlXCIpe1xuICAgICAgICAgIGlwZnMgPSB2YWx1ZXNbaV07XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYoa2V5c1tpXSA9PSBcImxvZ29cIil7XG4gICAgICAgICAgaXBmcyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LFwiK3ZhbHVlc1tpXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0cnl7XG4gICAgICAgIGlmKEFycmF5LmlzQXJyYXkoaXBmcykpe1xuICAgICAgICAgIGxldCBuZXdpcGZzID0gXCJcIjtcbiAgICAgICAgICBmb3IoY29uc3QgZWxlbWVudCBvZiBpcGZzKXtcbiAgICAgICAgICAgIG5ld2lwZnMgPSBuZXdpcGZzICsgZWxlbWVudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYobmV3aXBmcy5zdGFydHNXaXRoKCdiYScpKXtcbiAgICAgICAgICAgIG5ld2lwZnMgPSBcImh0dHA6Ly9kd2ViLmxpbmsvaXBmcy9cIitpcGZzO1xuICAgICAgICAgICAgbmV3aXBmcyA9IG5ld2lwZnMucmVwbGFjZSgvLC9nLCAnJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXdpcGZzO1xuICAgICAgICB9XG4gICAgICAgIGlmKGlwZnMuc3RhcnRzV2l0aCgnaXBmczovLycpKXtcbiAgICAgICAgICBpcGZzID0gaXBmcy5zbGljZSg3KTtcbiAgICAgICAgICBpZihpcGZzLnN0YXJ0c1dpdGgoJ2lwZnMvJykpe1xuICAgICAgICAgICAgaXBmcyA9IGlwZnMuc2xpY2UoNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlwZnMgPSBcImh0dHA6Ly9kd2ViLmxpbmsvaXBmcy9cIitpcGZzO1xuICAgICAgICB9XG4gICAgICAgIGlmKGlwZnMuc3RhcnRzV2l0aCgnaXBmcy8nKSl7XG4gICAgICAgICAgaXBmcyA9IGlwZnMuc2xpY2UoNSk7XG4gICAgICAgICAgaXBmcyA9IFwiaHR0cDovL2R3ZWIubGluay9pcGZzL1wiK2lwZnM7XG4gICAgICAgIH1cbiAgICAgICAgaWYoaXBmcy5zdGFydHNXaXRoKCdRbScpKXtcbiAgICAgICAgICBpcGZzID0gXCJodHRwOi8vZHdlYi5saW5rL2lwZnMvXCIraXBmcztcbiAgICAgICAgfVxuICAgICAgfWNhdGNoe1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpcGZzO1xuICAgIFxuICAgIH1cbn1cblxuXG5cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIlRva2VuIiwiZ2V0TWV0YWRhdGEiLCJkYXRhIiwiZmV0Y2giLCJ1bml0IiwiaGVhZGVycyIsInByb2plY3RfaWQiLCJtZXRhZGF0YSIsImpzb24iLCJvbmNoYWluX21ldGFkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZ2V0SXBmc0Zyb21NZXRhZGF0YSIsImtleXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJpcGZzIiwiaSIsImxlbmd0aCIsIkFycmF5IiwiaXNBcnJheSIsIm5ld2lwZnMiLCJlbGVtZW50Iiwic3RhcnRzV2l0aCIsInJlcGxhY2UiLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsImZpbmdlcnByaW50IiwicG9saWN5SWQiLCJxdWFudGl0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/token.js\n"));

/***/ })

});