"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[stake]",{

/***/ "./src/pages/token.js":
/*!****************************!*\
  !*** ./src/pages/token.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Token; }\n/* harmony export */ });\nclass Token {\n    async getPrice() {\n        let request = await fetch(\"/coin-gecko.json\");\n        let geckoData = await request.json();\n        let ticker = \"\";\n        try {\n            ticker = this.metadata.ticker;\n        } catch (error) {\n            ticker = null;\n        }\n        if (ticker != null) {\n            let foundGeckoCoin = geckoData.find((item)=>item.symbol == ticker.toLowerCase());\n            if (foundGeckoCoin != null) {\n                this.id = foundGeckoCoin.id;\n            } else {\n                this.id = null;\n            }\n        }\n        let prices = \"\";\n        if (this.id != null) {\n            let req = await fetch(\"https://api.coingecko.com/api/v3/coins/\" + this.id);\n            let res = await req.json();\n            if (res.asset_platform_id == \"cardano\") {\n                let _currentPrice = res.market_data.current_price.usd.toFixed(2);\n                let _24change = res.market_data.price_change_percentage_24h.toFixed(2);\n                let _7dchange = res.market_data.price_change_percentage_7d.toFixed(2);\n                let _30dchange = res.market_data.price_change_percentage_30d.toFixed(2);\n                let _1ychange = res.market_data.price_change_percentage_1y.toFixed(2);\n                prices = {\n                    current: _currentPrice,\n                    change24h: _24change,\n                    change7d: _7dchange,\n                    change30d: _30dchange,\n                    change1y: _1ychange\n                };\n                return prices;\n            }\n        } else {\n            prices = null;\n        }\n        return prices;\n    }\n    async getMetadata() {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\" + this.policy_id + this.asset_name, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\"\n                }\n            });\n            this.metadata = await data.json();\n            if (this.metadata.metadata != null) {\n                return this.metadata.metadata;\n            } else if (this.metadata.onchain_metadata != null) {\n                return this.metadata.onchain_metadata;\n            } else {\n                return null;\n            }\n        } catch (error) {\n            return null;\n        }\n    }\n    getIpfsFromMetadata() {\n        const keys = Object.keys(this.metadata);\n        const values = Object.values(this.metadata);\n        let ipfs = \"\";\n        for(let i = 0; i < keys.length; i++){\n            if (keys[i] == \"image\") {\n                ipfs = values[i];\n            }\n            if (keys[i] == \"logo\") {\n                ipfs = \"data:image/png;base64,\" + values[i];\n            }\n        }\n        try {\n            if (Array.isArray(ipfs)) {\n                let newipfs = \"\";\n                for (const element of ipfs){\n                    newipfs = newipfs + element;\n                }\n                if (newipfs.startsWith(\"ba\")) {\n                    newipfs = \"http://dweb.link/ipfs/\" + ipfs;\n                    newipfs = newipfs.replace(/,/g, \"\");\n                }\n                return newipfs;\n            }\n            if (ipfs.startsWith(\"ipfs://\")) {\n                ipfs = ipfs.slice(7);\n                if (ipfs.startsWith(\"ipfs/\")) {\n                    ipfs = ipfs.slice(5);\n                }\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            } else if (ipfs.startsWith(\"ipfs/\")) {\n                ipfs = ipfs.slice(5);\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            } else if (ipfs.startsWith(\"Qm\")) {\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            }\n        } catch (e) {\n            return null;\n        }\n        return ipfs;\n    }\n    constructor(asset_name, policy_id, quantity){\n        this.asset_name = asset_name;\n        this.policy_id = policy_id;\n        this.quantity = quantity;\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxHQUFHQTtJQUNwQjtBQXFISjtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy90b2tlbi5qcz9jMjQzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRva2Vue1xuXG4gICAgY29uc3RydWN0b3IoYXNzZXRfbmFtZSwgcG9saWN5X2lkLCBxdWFudGl0eSl7XG4gICAgICAgIHRoaXMuYXNzZXRfbmFtZSA9IGFzc2V0X25hbWU7XG4gICAgICAgIHRoaXMucG9saWN5X2lkID0gcG9saWN5X2lkO1xuICAgICAgICB0aGlzLnF1YW50aXR5ID0gcXVhbnRpdHk7IFxuICAgIH1cblxuICAgIGFzeW5jIGdldFByaWNlKCl7XG5cbiAgICAgIGxldCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goJy9jb2luLWdlY2tvLmpzb24nKTtcbiAgICAgIGxldCBnZWNrb0RhdGEgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICAgIGxldCB0aWNrZXIgPSAnJztcblxuICAgICAgdHJ5e1xuICAgICAgICB0aWNrZXIgPSB0aGlzLm1ldGFkYXRhLnRpY2tlcjtcbiAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgIHRpY2tlciA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmKHRpY2tlciAhPSBudWxsKXtcbiAgICAgICAgbGV0IGZvdW5kR2Vja29Db2luICA9IGdlY2tvRGF0YS5maW5kKGl0ZW0gPT4gaXRlbS5zeW1ib2wgPT0gdGlja2VyLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICBpZihmb3VuZEdlY2tvQ29pbiAhPSBudWxsKXtcbiAgICAgICAgICB0aGlzLmlkID0gZm91bmRHZWNrb0NvaW4uaWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICB0aGlzLmlkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgcHJpY2VzID0gJyc7XG4gICAgICBpZih0aGlzLmlkICE9IG51bGwpe1xuICAgICAgICBsZXQgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmNvaW5nZWNrby5jb20vYXBpL3YzL2NvaW5zLycrdGhpcy5pZCk7XG4gICAgICAgIGxldCByZXMgPSBhd2FpdCByZXEuanNvbigpO1xuICAgICAgICBcbiAgICAgICAgaWYocmVzLmFzc2V0X3BsYXRmb3JtX2lkID09ICdjYXJkYW5vJyl7XG4gICAgICAgICAgbGV0IF9jdXJyZW50UHJpY2UgPSByZXMubWFya2V0X2RhdGEuY3VycmVudF9wcmljZS51c2QudG9GaXhlZCgyKTtcbiAgICAgICAgICBsZXQgXzI0Y2hhbmdlID0gcmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aC50b0ZpeGVkKDIpO1xuICAgICAgICAgIGxldCBfN2RjaGFuZ2UgPSByZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfN2QudG9GaXhlZCgyKTtcbiAgICAgICAgICBsZXQgXzMwZGNoYW5nZSA9IHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8zMGQudG9GaXhlZCgyKTtcbiAgICAgICAgICBsZXQgXzF5Y2hhbmdlID0gcmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzF5LnRvRml4ZWQoMik7XG4gICAgICAgICAgcHJpY2VzID0ge2N1cnJlbnQgOiBfY3VycmVudFByaWNlLCBjaGFuZ2UyNGg6IF8yNGNoYW5nZSwgY2hhbmdlN2Q6IF83ZGNoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlMzBkIDogXzMwZGNoYW5nZSwgY2hhbmdlMXk6IF8xeWNoYW5nZX07XG4gICAgICAgICAgcmV0dXJuIHByaWNlcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgcHJpY2VzID0gbnVsbDtcbiAgICAgIH1cblxuXG4gICAgICByZXR1cm4gcHJpY2VzO1xuICAgIH1cblxuICAgIGFzeW5jIGdldE1ldGFkYXRhKCl7XG4gICAgICB0cnl7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9jYXJkYW5vLW1haW5uZXQuYmxvY2tmcm9zdC5pby9hcGkvdjAvYXNzZXRzLycrdGhpcy5wb2xpY3lfaWQrdGhpcy5hc3NldF9uYW1lLFxuICAgICAgICB7aGVhZGVyczp7cHJvamVjdF9pZDogJ21haW5uZXRvVzYxWVlTaU9vTFNhTlE2ZHpUcmtBRzRhelhWSXJ2aCd9fSk7XG5cblxuICAgICAgICB0aGlzLm1ldGFkYXRhID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gICAgICAgIGlmKHRoaXMubWV0YWRhdGEubWV0YWRhdGEgIT0gbnVsbCl7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubWV0YWRhdGEubWV0YWRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLm1ldGFkYXRhLm9uY2hhaW5fbWV0YWRhdGEgIT0gbnVsbCl7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubWV0YWRhdGEub25jaGFpbl9tZXRhZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgZ2V0SXBmc0Zyb21NZXRhZGF0YSgpe1xuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMubWV0YWRhdGEpO1xuICAgICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0aGlzLm1ldGFkYXRhKTtcbiAgICAgIGxldCBpcGZzID0gXCJcIjtcbiAgICAgIGZvcihsZXQgaT0wO2k8a2V5cy5sZW5ndGg7aSsrKXtcblxuXG4gICAgICAgIGlmKGtleXNbaV0gPT0gXCJpbWFnZVwiKXtcbiAgICAgICAgICBpcGZzID0gdmFsdWVzW2ldO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlmKGtleXNbaV0gPT0gXCJsb2dvXCIpe1xuICAgICAgICAgIGlwZnMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxcIit2YWx1ZXNbaV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdHJ5e1xuICAgICAgICBpZihBcnJheS5pc0FycmF5KGlwZnMpKXtcbiAgICAgICAgICBsZXQgbmV3aXBmcyA9IFwiXCI7XG4gICAgICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgaXBmcyl7XG4gICAgICAgICAgICBuZXdpcGZzID0gbmV3aXBmcyArIGVsZW1lbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKG5ld2lwZnMuc3RhcnRzV2l0aCgnYmEnKSl7XG4gICAgICAgICAgICBuZXdpcGZzID0gXCJodHRwOi8vZHdlYi5saW5rL2lwZnMvXCIraXBmcztcbiAgICAgICAgICAgIG5ld2lwZnMgPSBuZXdpcGZzLnJlcGxhY2UoLywvZywgJycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3aXBmcztcbiAgICAgICAgfVxuICAgICAgICBpZihpcGZzLnN0YXJ0c1dpdGgoJ2lwZnM6Ly8nKSl7XG4gICAgICAgICAgaXBmcyA9IGlwZnMuc2xpY2UoNyk7XG4gICAgICAgICAgaWYoaXBmcy5zdGFydHNXaXRoKCdpcGZzLycpKXtcbiAgICAgICAgICAgIGlwZnMgPSBpcGZzLnNsaWNlKDUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpcGZzID0gXCJodHRwOi8vZHdlYi5saW5rL2lwZnMvXCIraXBmcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGlwZnMuc3RhcnRzV2l0aCgnaXBmcy8nKSl7XG4gICAgICAgICAgaXBmcyA9IGlwZnMuc2xpY2UoNSk7XG4gICAgICAgICAgaXBmcyA9IFwiaHR0cDovL2R3ZWIubGluay9pcGZzL1wiK2lwZnM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihpcGZzLnN0YXJ0c1dpdGgoJ1FtJykpe1xuICAgICAgICAgIGlwZnMgPSBcImh0dHA6Ly9kd2ViLmxpbmsvaXBmcy9cIitpcGZzO1xuICAgICAgICB9XG4gICAgICB9Y2F0Y2h7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlwZnM7XG4gICAgXG4gICAgfVxufVxuXG5cblxuIl0sIm5hbWVzIjpbIlRva2VuIiwiZ2V0UHJpY2UiLCJyZXF1ZXN0IiwiZmV0Y2giLCJnZWNrb0RhdGEiLCJqc29uIiwidGlja2VyIiwibWV0YWRhdGEiLCJlcnJvciIsImZvdW5kR2Vja29Db2luIiwiZmluZCIsIml0ZW0iLCJzeW1ib2wiLCJ0b0xvd2VyQ2FzZSIsImlkIiwicHJpY2VzIiwicmVxIiwicmVzIiwiYXNzZXRfcGxhdGZvcm1faWQiLCJfY3VycmVudFByaWNlIiwibWFya2V0X2RhdGEiLCJjdXJyZW50X3ByaWNlIiwidXNkIiwidG9GaXhlZCIsIl8yNGNoYW5nZSIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aCIsIl83ZGNoYW5nZSIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzdkIiwiXzMwZGNoYW5nZSIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzMwZCIsIl8xeWNoYW5nZSIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzF5IiwiY3VycmVudCIsImNoYW5nZTI0aCIsImNoYW5nZTdkIiwiY2hhbmdlMzBkIiwiY2hhbmdlMXkiLCJnZXRNZXRhZGF0YSIsImRhdGEiLCJwb2xpY3lfaWQiLCJhc3NldF9uYW1lIiwiaGVhZGVycyIsInByb2plY3RfaWQiLCJvbmNoYWluX21ldGFkYXRhIiwiZ2V0SXBmc0Zyb21NZXRhZGF0YSIsImtleXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJpcGZzIiwiaSIsImxlbmd0aCIsIkFycmF5IiwiaXNBcnJheSIsIm5ld2lwZnMiLCJlbGVtZW50Iiwic3RhcnRzV2l0aCIsInJlcGxhY2UiLCJzbGljZSIsImNvbnN0cnVjdG9yIiwicXVhbnRpdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/token.js\n"));

/***/ })

});