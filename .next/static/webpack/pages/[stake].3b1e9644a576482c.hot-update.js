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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Token; }\n/* harmony export */ });\nclass Token {\n    async getPrice() {\n        let request = await fetch(\"/coin-gecko.json\");\n        let geckoData = await request.json();\n        let ticker = \"\";\n        try {\n            ticker = this.metadata.ticker;\n        } catch (error) {\n            ticker = null;\n        }\n        if (ticker != null) {\n            let foundGeckoCoin = geckoData.find((item)=>item.symbol == ticker.toLowerCase());\n            if (foundGeckoCoin != null) {\n                this.id = foundGeckoCoin.id;\n            } else {\n                this.id = null;\n            }\n        }\n        if (this.id != null) {\n            let req = await fetch(\"https://api.coingecko.com/api/v3/coins/\" + this.id);\n            let res = await req.json();\n            if (res.asset_platform_id == \"cardano\") {\n                let _currentPrice = res.market_data.current_price.usd.toFixed(2);\n                let _24change = res.market_data.price_change_percentage_24h.toFixed(2);\n                let _7dchange = res.market_data.price_change_percentage_7d.toFixed(2);\n                let _30dchange = res.market_data.price_change_percentage_30d.toFixed(2);\n                let _1ychange = res.market_data.price_change_percentage_1y.toFixed(2);\n            }\n        } else {\n            this.price = null;\n        }\n        return this.price;\n    }\n    async getMetadata() {\n        try {\n            const data = await fetch(\"https://cardano-mainnet.blockfrost.io/api/v0/assets/\" + this.policy_id + this.asset_name, {\n                headers: {\n                    project_id: \"mainnetoW61YYSiOoLSaNQ6dzTrkAG4azXVIrvh\"\n                }\n            });\n            this.metadata = await data.json();\n            if (this.metadata.metadata != null) {\n                return this.metadata.metadata;\n            } else if (this.metadata.onchain_metadata != null) {\n                return this.metadata.onchain_metadata;\n            } else {\n                return null;\n            }\n        } catch (error) {\n            return null;\n        }\n    }\n    getIpfsFromMetadata() {\n        const keys = Object.keys(this.metadata);\n        const values = Object.values(this.metadata);\n        let ipfs = \"\";\n        for(let i = 0; i < keys.length; i++){\n            if (keys[i] == \"image\") {\n                ipfs = values[i];\n            }\n            if (keys[i] == \"logo\") {\n                ipfs = \"data:image/png;base64,\" + values[i];\n            }\n        }\n        try {\n            if (Array.isArray(ipfs)) {\n                let newipfs = \"\";\n                for (const element of ipfs){\n                    newipfs = newipfs + element;\n                }\n                if (newipfs.startsWith(\"ba\")) {\n                    newipfs = \"http://dweb.link/ipfs/\" + ipfs;\n                    newipfs = newipfs.replace(/,/g, \"\");\n                }\n                return newipfs;\n            }\n            if (ipfs.startsWith(\"ipfs://\")) {\n                ipfs = ipfs.slice(7);\n                if (ipfs.startsWith(\"ipfs/\")) {\n                    ipfs = ipfs.slice(5);\n                }\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            } else if (ipfs.startsWith(\"ipfs/\")) {\n                ipfs = ipfs.slice(5);\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            } else if (ipfs.startsWith(\"Qm\")) {\n                ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            }\n        } catch (e) {\n            return null;\n        }\n        return ipfs;\n    }\n    constructor(asset_name, policy_id, quantity){\n        this.asset_name = asset_name;\n        this.policy_id = policy_id;\n        this.quantity = quantity;\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2tlbntcblxuICAgIGNvbnN0cnVjdG9yKGFzc2V0X25hbWUsIHBvbGljeV9pZCwgcXVhbnRpdHkpe1xuICAgICAgICB0aGlzLmFzc2V0X25hbWUgPSBhc3NldF9uYW1lO1xuICAgICAgICB0aGlzLnBvbGljeV9pZCA9IHBvbGljeV9pZDtcbiAgICAgICAgdGhpcy5xdWFudGl0eSA9IHF1YW50aXR5OyBcbiAgICB9XG5cbiAgICBhc3luYyBnZXRQcmljZSgpe1xuXG4gICAgICBsZXQgcmVxdWVzdCA9IGF3YWl0IGZldGNoKCcvY29pbi1nZWNrby5qc29uJyk7XG4gICAgICBsZXQgZ2Vja29EYXRhID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgICBsZXQgdGlja2VyID0gJyc7XG5cbiAgICAgIHRyeXtcbiAgICAgICAgdGlja2VyID0gdGhpcy5tZXRhZGF0YS50aWNrZXI7XG4gICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICB0aWNrZXIgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZih0aWNrZXIgIT0gbnVsbCl7XG4gICAgICAgIGxldCBmb3VuZEdlY2tvQ29pbiAgPSBnZWNrb0RhdGEuZmluZChpdGVtID0+IGl0ZW0uc3ltYm9sID09IHRpY2tlci50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgaWYoZm91bmRHZWNrb0NvaW4gIT0gbnVsbCl7XG4gICAgICAgICAgdGhpcy5pZCA9IGZvdW5kR2Vja29Db2luLmlkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgdGhpcy5pZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKHRoaXMuaWQgIT0gbnVsbCl7XG4gICAgICAgIGxldCByZXEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuY29pbmdlY2tvLmNvbS9hcGkvdjMvY29pbnMvJyt0aGlzLmlkKTtcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgICAgIFxuICAgICAgICBpZihyZXMuYXNzZXRfcGxhdGZvcm1faWQgPT0gJ2NhcmRhbm8nKXtcbiAgICAgICAgICBsZXQgX2N1cnJlbnRQcmljZSA9IHJlcy5tYXJrZXRfZGF0YS5jdXJyZW50X3ByaWNlLnVzZC50b0ZpeGVkKDIpO1xuICAgICAgICAgIGxldCBfMjRjaGFuZ2UgPSByZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMjRoLnRvRml4ZWQoMik7XG4gICAgICAgICAgbGV0IF83ZGNoYW5nZSA9IHJlcy5tYXJrZXRfZGF0YS5wcmljZV9jaGFuZ2VfcGVyY2VudGFnZV83ZC50b0ZpeGVkKDIpO1xuICAgICAgICAgIGxldCBfMzBkY2hhbmdlID0gcmVzLm1hcmtldF9kYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzMwZC50b0ZpeGVkKDIpO1xuICAgICAgICAgIGxldCBfMXljaGFuZ2UgPSByZXMubWFya2V0X2RhdGEucHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMXkudG9GaXhlZCgyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgdGhpcy5wcmljZSA9IG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5wcmljZTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRNZXRhZGF0YSgpe1xuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vY2FyZGFuby1tYWlubmV0LmJsb2NrZnJvc3QuaW8vYXBpL3YwL2Fzc2V0cy8nK3RoaXMucG9saWN5X2lkK3RoaXMuYXNzZXRfbmFtZSxcbiAgICAgICAge2hlYWRlcnM6e3Byb2plY3RfaWQ6ICdtYWlubmV0b1c2MVlZU2lPb0xTYU5RNmR6VHJrQUc0YXpYVklydmgnfX0pO1xuXG5cbiAgICAgICAgdGhpcy5tZXRhZGF0YSA9IGF3YWl0IGRhdGEuanNvbigpO1xuICAgICAgICBpZih0aGlzLm1ldGFkYXRhLm1ldGFkYXRhICE9IG51bGwpe1xuICAgICAgICAgIHJldHVybiB0aGlzLm1ldGFkYXRhLm1ldGFkYXRhO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5tZXRhZGF0YS5vbmNoYWluX21ldGFkYXRhICE9IG51bGwpe1xuICAgICAgICAgIHJldHVybiB0aGlzLm1ldGFkYXRhLm9uY2hhaW5fbWV0YWRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGdldElwZnNGcm9tTWV0YWRhdGEoKXtcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLm1ldGFkYXRhKTtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXModGhpcy5tZXRhZGF0YSk7XG4gICAgICBsZXQgaXBmcyA9IFwiXCI7XG4gICAgICBmb3IobGV0IGk9MDtpPGtleXMubGVuZ3RoO2krKyl7XG5cblxuICAgICAgICBpZihrZXlzW2ldID09IFwiaW1hZ2VcIil7XG4gICAgICAgICAgaXBmcyA9IHZhbHVlc1tpXTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpZihrZXlzW2ldID09IFwibG9nb1wiKXtcbiAgICAgICAgICBpcGZzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsXCIrdmFsdWVzW2ldXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRyeXtcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheShpcGZzKSl7XG4gICAgICAgICAgbGV0IG5ld2lwZnMgPSBcIlwiO1xuICAgICAgICAgIGZvcihjb25zdCBlbGVtZW50IG9mIGlwZnMpe1xuICAgICAgICAgICAgbmV3aXBmcyA9IG5ld2lwZnMgKyBlbGVtZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihuZXdpcGZzLnN0YXJ0c1dpdGgoJ2JhJykpe1xuICAgICAgICAgICAgbmV3aXBmcyA9IFwiaHR0cDovL2R3ZWIubGluay9pcGZzL1wiK2lwZnM7XG4gICAgICAgICAgICBuZXdpcGZzID0gbmV3aXBmcy5yZXBsYWNlKC8sL2csICcnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ld2lwZnM7XG4gICAgICAgIH1cbiAgICAgICAgaWYoaXBmcy5zdGFydHNXaXRoKCdpcGZzOi8vJykpe1xuICAgICAgICAgIGlwZnMgPSBpcGZzLnNsaWNlKDcpO1xuICAgICAgICAgIGlmKGlwZnMuc3RhcnRzV2l0aCgnaXBmcy8nKSl7XG4gICAgICAgICAgICBpcGZzID0gaXBmcy5zbGljZSg1KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaXBmcyA9IFwiaHR0cDovL2R3ZWIubGluay9pcGZzL1wiK2lwZnM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihpcGZzLnN0YXJ0c1dpdGgoJ2lwZnMvJykpe1xuICAgICAgICAgIGlwZnMgPSBpcGZzLnNsaWNlKDUpO1xuICAgICAgICAgIGlwZnMgPSBcImh0dHA6Ly9kd2ViLmxpbmsvaXBmcy9cIitpcGZzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoaXBmcy5zdGFydHNXaXRoKCdRbScpKXtcbiAgICAgICAgICBpcGZzID0gXCJodHRwOi8vZHdlYi5saW5rL2lwZnMvXCIraXBmcztcbiAgICAgICAgfVxuICAgICAgfWNhdGNoe1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpcGZzO1xuICAgIFxuICAgIH1cbn1cblxuXG5cbiJdLCJuYW1lcyI6WyJUb2tlbiIsImdldFByaWNlIiwicmVxdWVzdCIsImZldGNoIiwiZ2Vja29EYXRhIiwianNvbiIsInRpY2tlciIsIm1ldGFkYXRhIiwiZXJyb3IiLCJmb3VuZEdlY2tvQ29pbiIsImZpbmQiLCJpdGVtIiwic3ltYm9sIiwidG9Mb3dlckNhc2UiLCJpZCIsInJlcSIsInJlcyIsImFzc2V0X3BsYXRmb3JtX2lkIiwiX2N1cnJlbnRQcmljZSIsIm1hcmtldF9kYXRhIiwiY3VycmVudF9wcmljZSIsInVzZCIsInRvRml4ZWQiLCJfMjRjaGFuZ2UiLCJwcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGgiLCJfN2RjaGFuZ2UiLCJwcmljZV9jaGFuZ2VfcGVyY2VudGFnZV83ZCIsIl8zMGRjaGFuZ2UiLCJwcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8zMGQiLCJfMXljaGFuZ2UiLCJwcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8xeSIsInByaWNlIiwiZ2V0TWV0YWRhdGEiLCJkYXRhIiwicG9saWN5X2lkIiwiYXNzZXRfbmFtZSIsImhlYWRlcnMiLCJwcm9qZWN0X2lkIiwib25jaGFpbl9tZXRhZGF0YSIsImdldElwZnNGcm9tTWV0YWRhdGEiLCJrZXlzIiwiT2JqZWN0IiwidmFsdWVzIiwiaXBmcyIsImkiLCJsZW5ndGgiLCJBcnJheSIsImlzQXJyYXkiLCJuZXdpcGZzIiwiZWxlbWVudCIsInN0YXJ0c1dpdGgiLCJyZXBsYWNlIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsInF1YW50aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/token.js\n"));

/***/ })

});