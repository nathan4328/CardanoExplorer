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

/***/ "./pages/token.js":
/*!************************!*\
  !*** ./pages/token.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Token; }\n/* harmony export */ });\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n// if metadata has been fetched\n// find the ipfs link under 'image' metadata tag and store it\nconst getIpfsFromMetadata = (metadata)=>{\n    const keys = Object.keys(metadata);\n    const values = Object.values(metadata);\n    let ipfs = \"\";\n    for(let i = 0; i < keys.length; i++){\n        if (keys[i] == \"image\") {\n            ipfs = values[i];\n        } else if (keys[i] == \"logo\") {\n            return \"data:image/png;base64,\" + values[i];\n        }\n    }\n    // convert all ipfs formats to the a searchable format that can be fetched in a <img> tag\n    try {\n        // links are sometimes stored in arrays\n        // this finds ipfs links in the array\n        if (Array.isArray(ipfs)) {\n            let newipfs = \"\";\n            for (const element of ipfs){\n                newipfs = newipfs + element;\n            }\n            if (newipfs.startsWith(\"ipfs://\")) {\n                newipfs = newipfs.slice(7);\n                if (newipfs.startsWith(\"ipfs/\")) {\n                    newipfs = newipfs.slice(5);\n                }\n                newipfs = \"http://dweb.link/ipfs/\" + newipfs;\n            } else if (newipfs.startsWith(\"ipfs/\")) {\n                newipfs = newipfs.slice(5);\n                newipfs = \"http://dweb.link/ipfs/\" + newipfs;\n            } else if (newipfs.startsWith(\"Qm\")) {\n                newipfs = \"http://dweb.link/ipfs/\" + newipfs;\n            }\n            return newipfs;\n        }\n        // normal ipfs in image tags\n        if (ipfs.startsWith(\"ipfs://\")) {\n            ipfs = ipfs.slice(7);\n            if (ipfs.startsWith(\"ipfs/\")) {\n                ipfs = ipfs.slice(5);\n            }\n            ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            return ipfs;\n        } else if (ipfs.startsWith(\"ipfs/\")) {\n            ipfs = ipfs.slice(5);\n            ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            return ipfs;\n        } else if (ipfs.startsWith(\"Qm\")) {\n            ipfs = \"http://dweb.link/ipfs/\" + ipfs;\n            return ipfs;\n        } else {\n            return \"/black.jpeg\";\n        }\n    } catch (e) {\n        return \"/black.jpeg\";\n    }\n};\nclass Token {\n    async fetchTokenMetadata() {\n        try {\n            let req = await fetch(\"https://api.koios.rest/api/v0/asset_info?_asset_policy=\" + this.policy_id + \"&_asset_name=\" + this.asset_name);\n            let res = await req.json();\n            let decod = Buffer.from(this.asset_name, \"hex\").toString();\n            try {\n                if (res[0].minting_tx_metadata && res[0].minting_tx_metadata[721]) {\n                    if (res[0].minting_tx_metadata[721][this.policy_id][decod]) {\n                        this.onchain_metadata = res[0].minting_tx_metadata[721][this.policy_id][decod];\n                        this.ipfs = getIpfsFromMetadata(res[0].minting_tx_metadata[721][this.policy_id][decod]);\n                        if (this.ipfs == \"/black.jpeg\") {\n                            this.ipfs = getIpfsFromMetadata(res[0].token_registry_metadata);\n                        }\n                    } else {\n                        this.onchain_metadata = res[0].minting_tx_metadata;\n                    }\n                }\n                if (res[0].token_registry_metadata) {\n                    this.metadata = res[0].token_registry_metadata;\n                    let ipfs = getIpfsFromMetadata(res[0].token_registry_metadata);\n                    if (ipfs != \"\") {\n                        this.ipfs = ipfs;\n                    } else {}\n                } else if (!res[0].minting_tx_metadata) {}\n            } catch (error) {}\n        } catch (error) {}\n    }\n    async fetchTokenPrice() {\n        if (this.quantity == 1) {\n            try {\n                let request = await fetch(\"https://api.opencnft.io/2/collection/\" + this.policy_id + \"/floor_price\", {\n                    headers: {\n                        \"X-Api-Key\": \"ocnft_64230513320ac06596270a21\"\n                    }\n                });\n                if (request.status == 429) {\n                    //wait 5 seconds and try again\n                    await new Promise((r)=>setTimeout(r, 200));\n                    request = await fetch(\"https://api.opencnft.io/2/collection/\" + this.policy_id + \"/floor_price\", {\n                        headers: {\n                            \"X-Api-Key\": \"ocnft_64230513320ac06596270a21\"\n                        }\n                    });\n                } else if (request.status == 200) {\n                    let opencnftData = await request.json();\n                    if (opencnftData.floor_price) {\n                        this.floor_price = opencnftData.floor_price / 1000000;\n                    }\n                } else {\n                    this.floor_price = 0;\n                }\n            } catch (error) {\n                this.floor_price = 0;\n            }\n        } else {\n            try {\n                var _this_metadata;\n                let request = await fetch(\"/coin-gecko-id-cardano.json\");\n                let geckoData = await request.json();\n                let ticker = (_this_metadata = this.metadata) === null || _this_metadata === void 0 ? void 0 : _this_metadata.ticker;\n                if (!ticker) {\n                    return;\n                }\n                let foundGeckoCoin = geckoData.find((item)=>item.symbol === ticker.toLowerCase());\n                if (!foundGeckoCoin) {\n                    return;\n                }\n                let req = await fetch(\"https://api.coingecko.com/api/v3/coins/\".concat(foundGeckoCoin.id));\n                let res = await req.json();\n                let priceData = res.market_data;\n                this.prices = {\n                    current: priceData.current_price.usd,\n                    change24h: priceData.price_change_percentage_24h,\n                    change7d: priceData.price_change_percentage_7d,\n                    change30d: priceData.price_change_percentage_30d,\n                    change1y: priceData.price_change_percentage_1y\n                };\n            } catch (error) {\n                this.prices = null;\n            }\n        }\n    }\n    constructor(asset_name, policy_id, quantity){\n        this.asset_name = asset_name;\n        this.policy_id = policy_id;\n        this.quantity = quantity;\n        this.onchain_metadata = null;\n        this.metadata = null;\n        this.ipfs = \"/black.jpeg\";\n        this.prices = null;\n        this.decoded_name = Buffer.from(asset_name, \"hex\").toString();\n        this.floor_price = null;\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O29CQUNaQyxTQUFTSCxVQUFVSSxhQUFhLENBQUNDLEdBQUc7b0JBQ3BDQyxXQUFXTixVQUFVTywyQkFBMkI7b0JBQ2hEQyxVQUFVUixVQUFVUywwQkFBMEI7b0JBQzlDQyxXQUFXVixVQUFVVywyQkFBMkI7b0JBQ2hEQyxVQUFVWixVQUFVYSwwQkFBMEI7Z0JBQ2hEO1lBQ0YsRUFBRSxPQUFPaEMsT0FBTztnQkFDZCxJQUFJLENBQUNxQixNQUFNLEdBQUcsSUFBSTtZQUNwQjtRQUNGLENBQUM7SUFHSDtJQTFHQVksWUFBWTNDLFVBQVUsRUFBRUQsU0FBUyxFQUFFYSxRQUFRLENBQUU7UUFDM0MsSUFBSSxDQUFDWixVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0QsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNhLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDSixnQkFBZ0IsR0FBRyxJQUFJO1FBQzVCLElBQUksQ0FBQzFCLFFBQVEsR0FBRyxJQUFJO1FBQ3BCLElBQUksQ0FBQ0ksSUFBSSxHQUFHO1FBQ1osSUFBSSxDQUFDNkMsTUFBTSxHQUFHLElBQUk7UUFDbEIsSUFBSSxDQUFDYSxZQUFZLEdBQUl4QyxNQUFNQSxDQUFDQyxJQUFJLENBQUNMLFlBQVksT0FBT00sUUFBUTtRQUM1RCxJQUFJLENBQUNjLFdBQVcsR0FBRyxJQUFJO0lBQ3pCO0FBaUdGO0FBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9rZW4uanM/ZjMzYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpZiBtZXRhZGF0YSBoYXMgYmVlbiBmZXRjaGVkXG4vLyBmaW5kIHRoZSBpcGZzIGxpbmsgdW5kZXIgJ2ltYWdlJyBtZXRhZGF0YSB0YWcgYW5kIHN0b3JlIGl0XG5jb25zdCBnZXRJcGZzRnJvbU1ldGFkYXRhID0gKG1ldGFkYXRhKSA9PntcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG1ldGFkYXRhKTtcbiAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhtZXRhZGF0YSk7XG4gIGxldCBpcGZzID0gXCJcIjtcbiAgZm9yKGxldCBpPTA7aTxrZXlzLmxlbmd0aDtpKyspe1xuXG5cbiAgICBpZihrZXlzW2ldID09IFwiaW1hZ2VcIil7XG4gICAgICBpcGZzID0gdmFsdWVzW2ldO1xuICAgIH1cbiAgICBcbiAgICAvLyBmdW5naWJsZSB0b2tlbnMgd2lsbCBoYXZlIGEgJ2xvZ28nIGluc3RlYWQgb2YgJ2ltYWdlJyB0YWdcbiAgICBlbHNlIGlmKGtleXNbaV0gPT0gXCJsb2dvXCIpe1xuICAgICAgcmV0dXJuIFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LFwiK3ZhbHVlc1tpXTtcbiAgICB9XG4gIH1cbiAgLy8gY29udmVydCBhbGwgaXBmcyBmb3JtYXRzIHRvIHRoZSBhIHNlYXJjaGFibGUgZm9ybWF0IHRoYXQgY2FuIGJlIGZldGNoZWQgaW4gYSA8aW1nPiB0YWdcbiAgdHJ5e1xuXG4gICAgLy8gbGlua3MgYXJlIHNvbWV0aW1lcyBzdG9yZWQgaW4gYXJyYXlzXG4gICAgLy8gdGhpcyBmaW5kcyBpcGZzIGxpbmtzIGluIHRoZSBhcnJheVxuICAgIGlmKEFycmF5LmlzQXJyYXkoaXBmcykpe1xuICAgICAgbGV0IG5ld2lwZnMgPSBcIlwiO1xuICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgaXBmcyl7XG4gICAgICAgIG5ld2lwZnMgPSBuZXdpcGZzICsgZWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgaWYobmV3aXBmcy5zdGFydHNXaXRoKCdpcGZzOi8vJykpe1xuICAgICAgICBuZXdpcGZzID0gbmV3aXBmcy5zbGljZSg3KTtcbiAgICAgICAgaWYobmV3aXBmcy5zdGFydHNXaXRoKCdpcGZzLycpKXtcbiAgICAgICAgICBuZXdpcGZzID0gbmV3aXBmcy5zbGljZSg1KTtcbiAgICAgICAgfVxuICAgICAgICBuZXdpcGZzID0gXCJodHRwOi8vZHdlYi5saW5rL2lwZnMvXCIrbmV3aXBmcztcbiAgICAgIH1cblxuICAgICAgZWxzZSBpZihuZXdpcGZzLnN0YXJ0c1dpdGgoJ2lwZnMvJykpe1xuICAgICAgICBuZXdpcGZzID0gbmV3aXBmcy5zbGljZSg1KTtcbiAgICAgICAgbmV3aXBmcyA9IFwiaHR0cDovL2R3ZWIubGluay9pcGZzL1wiK25ld2lwZnM7XG4gICAgICB9XG5cbiAgICAgIGVsc2UgaWYobmV3aXBmcy5zdGFydHNXaXRoKCdRbScpKXtcbiAgICAgICAgbmV3aXBmcyA9IFwiaHR0cDovL2R3ZWIubGluay9pcGZzL1wiK25ld2lwZnM7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdpcGZzO1xuICAgIH1cblxuICAgIC8vIG5vcm1hbCBpcGZzIGluIGltYWdlIHRhZ3NcbiAgICBpZihpcGZzLnN0YXJ0c1dpdGgoJ2lwZnM6Ly8nKSl7XG4gICAgICBpcGZzID0gaXBmcy5zbGljZSg3KTtcbiAgICAgIGlmKGlwZnMuc3RhcnRzV2l0aCgnaXBmcy8nKSl7XG4gICAgICAgIGlwZnMgPSBpcGZzLnNsaWNlKDUpO1xuICAgICAgfVxuICAgICAgaXBmcyA9IFwiaHR0cDovL2R3ZWIubGluay9pcGZzL1wiK2lwZnM7XG4gICAgICByZXR1cm4gaXBmcztcbiAgICB9XG4gICAgZWxzZSBpZihpcGZzLnN0YXJ0c1dpdGgoJ2lwZnMvJykpe1xuICAgICAgaXBmcyA9IGlwZnMuc2xpY2UoNSk7XG4gICAgICBpcGZzID0gXCJodHRwOi8vZHdlYi5saW5rL2lwZnMvXCIraXBmcztcbiAgICAgIHJldHVybiBpcGZzO1xuICAgIH1cbiAgICBlbHNlIGlmKGlwZnMuc3RhcnRzV2l0aCgnUW0nKSl7XG4gICAgICBpcGZzID0gXCJodHRwOi8vZHdlYi5saW5rL2lwZnMvXCIraXBmcztcbiAgICAgIHJldHVybiBpcGZzO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgcmV0dXJuICcvYmxhY2suanBlZyc7XG4gICAgfVxuXG4gIH1jYXRjaHtcbiAgICByZXR1cm4gJy9ibGFjay5qcGVnJztcbiAgfVxufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKGFzc2V0X25hbWUsIHBvbGljeV9pZCwgcXVhbnRpdHkpIHtcbiAgICB0aGlzLmFzc2V0X25hbWUgPSBhc3NldF9uYW1lO1xuICAgIHRoaXMucG9saWN5X2lkID0gcG9saWN5X2lkO1xuICAgIHRoaXMucXVhbnRpdHkgPSBxdWFudGl0eTtcbiAgICB0aGlzLm9uY2hhaW5fbWV0YWRhdGEgPSBudWxsO1xuICAgIHRoaXMubWV0YWRhdGEgPSBudWxsO1xuICAgIHRoaXMuaXBmcyA9ICcvYmxhY2suanBlZyc7XG4gICAgdGhpcy5wcmljZXMgPSBudWxsO1xuICAgIHRoaXMuZGVjb2RlZF9uYW1lID0gIEJ1ZmZlci5mcm9tKGFzc2V0X25hbWUsICdoZXgnKS50b1N0cmluZygpO1xuICAgIHRoaXMuZmxvb3JfcHJpY2UgPSBudWxsO1xuICB9XG5cbiAgYXN5bmMgZmV0Y2hUb2tlbk1ldGFkYXRhKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgcmVxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmtvaW9zLnJlc3QvYXBpL3YwL2Fzc2V0X2luZm8/X2Fzc2V0X3BvbGljeT0nICsgdGhpcy5wb2xpY3lfaWQgKyAnJl9hc3NldF9uYW1lPScgKyB0aGlzLmFzc2V0X25hbWUpO1xuICAgICAgbGV0IHJlcyA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgICBsZXQgZGVjb2QgPSBCdWZmZXIuZnJvbSh0aGlzLmFzc2V0X25hbWUsICdoZXgnKS50b1N0cmluZygpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHJlc1swXS5taW50aW5nX3R4X21ldGFkYXRhICYmIHJlc1swXS5taW50aW5nX3R4X21ldGFkYXRhWzcyMV0pIHtcbiAgICAgICAgICBpZiAocmVzWzBdLm1pbnRpbmdfdHhfbWV0YWRhdGFbNzIxXVt0aGlzLnBvbGljeV9pZF1bZGVjb2RdKSB7XG4gICAgICAgICAgICB0aGlzLm9uY2hhaW5fbWV0YWRhdGEgPSByZXNbMF0ubWludGluZ190eF9tZXRhZGF0YVs3MjFdW3RoaXMucG9saWN5X2lkXVtkZWNvZF07XG4gICAgICAgICAgICB0aGlzLmlwZnMgPSBnZXRJcGZzRnJvbU1ldGFkYXRhKHJlc1swXS5taW50aW5nX3R4X21ldGFkYXRhWzcyMV1bdGhpcy5wb2xpY3lfaWRdW2RlY29kXSk7XG4gIFxuICAgICAgICAgICAgaWYgKHRoaXMuaXBmcyA9PSAnL2JsYWNrLmpwZWcnKSB7XG4gICAgICAgICAgICAgIHRoaXMuaXBmcyA9IGdldElwZnNGcm9tTWV0YWRhdGEocmVzWzBdLnRva2VuX3JlZ2lzdHJ5X21ldGFkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vbmNoYWluX21ldGFkYXRhID0gcmVzWzBdLm1pbnRpbmdfdHhfbWV0YWRhdGE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNbMF0udG9rZW5fcmVnaXN0cnlfbWV0YWRhdGEpIHtcbiAgICAgICAgICB0aGlzLm1ldGFkYXRhID0gcmVzWzBdLnRva2VuX3JlZ2lzdHJ5X21ldGFkYXRhO1xuICAgICAgICAgIGxldCBpcGZzID0gZ2V0SXBmc0Zyb21NZXRhZGF0YShyZXNbMF0udG9rZW5fcmVnaXN0cnlfbWV0YWRhdGEpO1xuICAgICAgICAgIGlmKGlwZnMgIT0gJycpe1xuICAgICAgICAgICAgdGhpcy5pcGZzID0gaXBmcztcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIXJlc1swXS5taW50aW5nX3R4X21ldGFkYXRhICkge1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgfVxuICB9XG4gIFxuXG5cbiAgYXN5bmMgZmV0Y2hUb2tlblByaWNlKCkge1xuICAgIGlmICh0aGlzLnF1YW50aXR5ID09IDEpIHtcbiAgICAgIHRyeXtcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkub3BlbmNuZnQuaW8vMi9jb2xsZWN0aW9uLycrdGhpcy5wb2xpY3lfaWQrJy9mbG9vcl9wcmljZScsXG4gICAgICAgIHtoZWFkZXJzOiB7XCJYLUFwaS1LZXlcIjogXCJvY25mdF82NDIzMDUxMzMyMGFjMDY1OTYyNzBhMjFcIn19KTtcblxuICAgICAgICBpZihyZXF1ZXN0LnN0YXR1cyA9PSA0Mjkpe1xuXG4gICAgICAgICAgLy93YWl0IDUgc2Vjb25kcyBhbmQgdHJ5IGFnYWluXG4gICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UociA9PiBzZXRUaW1lb3V0KHIsIDIwMCkpO1xuICAgICAgICAgIHJlcXVlc3QgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkub3BlbmNuZnQuaW8vMi9jb2xsZWN0aW9uLycrdGhpcy5wb2xpY3lfaWQrJy9mbG9vcl9wcmljZScsXG4gICAgICAgICAge2hlYWRlcnM6IHtcIlgtQXBpLUtleVwiOiBcIm9jbmZ0XzY0MjMwNTEzMzIwYWMwNjU5NjI3MGEyMVwifX0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYocmVxdWVzdC5zdGF0dXMgPT0gMjAwKXtcbiAgICAgICAgICBsZXQgb3BlbmNuZnREYXRhID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgICAgICAgaWYob3BlbmNuZnREYXRhLmZsb29yX3ByaWNlKXtcbiAgICAgICAgICAgIHRoaXMuZmxvb3JfcHJpY2UgPSAob3BlbmNuZnREYXRhLmZsb29yX3ByaWNlLzEwMDAwMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHRoaXMuZmxvb3JfcHJpY2UgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYXRjaChlcnJvcil7XG4gICAgICAgIHRoaXMuZmxvb3JfcHJpY2UgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaCgnL2NvaW4tZ2Vja28taWQtY2FyZGFuby5qc29uJyk7XG4gICAgICAgIGxldCBnZWNrb0RhdGEgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICAgICAgbGV0IHRpY2tlciA9ICh0aGlzLm1ldGFkYXRhPy50aWNrZXIpO1xuICAgICAgXG4gICAgICAgIGlmICghdGlja2VyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgbGV0IGZvdW5kR2Vja29Db2luID0gZ2Vja29EYXRhLmZpbmQoaXRlbSA9PiBpdGVtLnN5bWJvbCA9PT0gdGlja2VyLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICBpZiAoIWZvdW5kR2Vja29Db2luKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgbGV0IHJlcSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5jb2luZ2Vja28uY29tL2FwaS92My9jb2lucy8ke2ZvdW5kR2Vja29Db2luLmlkfWApO1xuICAgICAgICBsZXQgcmVzID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICAgICAgbGV0IHByaWNlRGF0YSA9IHJlcy5tYXJrZXRfZGF0YTtcbiAgICAgICAgdGhpcy5wcmljZXMgPSB7XG4gICAgICAgICAgY3VycmVudDogcHJpY2VEYXRhLmN1cnJlbnRfcHJpY2UudXNkLFxuICAgICAgICAgIGNoYW5nZTI0aDogcHJpY2VEYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzI0aCxcbiAgICAgICAgICBjaGFuZ2U3ZDogcHJpY2VEYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzdkLFxuICAgICAgICAgIGNoYW5nZTMwZDogcHJpY2VEYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzMwZCxcbiAgICAgICAgICBjaGFuZ2UxeTogcHJpY2VEYXRhLnByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzF5LFxuICAgICAgICB9O1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5wcmljZXMgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBcblxuICB9XG59ICAgIFxuIl0sIm5hbWVzIjpbImdldElwZnNGcm9tTWV0YWRhdGEiLCJtZXRhZGF0YSIsImtleXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJpcGZzIiwiaSIsImxlbmd0aCIsIkFycmF5IiwiaXNBcnJheSIsIm5ld2lwZnMiLCJlbGVtZW50Iiwic3RhcnRzV2l0aCIsInNsaWNlIiwiVG9rZW4iLCJmZXRjaFRva2VuTWV0YWRhdGEiLCJyZXEiLCJmZXRjaCIsInBvbGljeV9pZCIsImFzc2V0X25hbWUiLCJyZXMiLCJqc29uIiwiZGVjb2QiLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJtaW50aW5nX3R4X21ldGFkYXRhIiwib25jaGFpbl9tZXRhZGF0YSIsInRva2VuX3JlZ2lzdHJ5X21ldGFkYXRhIiwiZXJyb3IiLCJmZXRjaFRva2VuUHJpY2UiLCJxdWFudGl0eSIsInJlcXVlc3QiLCJoZWFkZXJzIiwic3RhdHVzIiwiUHJvbWlzZSIsInIiLCJzZXRUaW1lb3V0Iiwib3BlbmNuZnREYXRhIiwiZmxvb3JfcHJpY2UiLCJnZWNrb0RhdGEiLCJ0aWNrZXIiLCJmb3VuZEdlY2tvQ29pbiIsImZpbmQiLCJpdGVtIiwic3ltYm9sIiwidG9Mb3dlckNhc2UiLCJpZCIsInByaWNlRGF0YSIsIm1hcmtldF9kYXRhIiwicHJpY2VzIiwiY3VycmVudCIsImN1cnJlbnRfcHJpY2UiLCJ1c2QiLCJjaGFuZ2UyNGgiLCJwcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8yNGgiLCJjaGFuZ2U3ZCIsInByaWNlX2NoYW5nZV9wZXJjZW50YWdlXzdkIiwiY2hhbmdlMzBkIiwicHJpY2VfY2hhbmdlX3BlcmNlbnRhZ2VfMzBkIiwiY2hhbmdlMXkiLCJwcmljZV9jaGFuZ2VfcGVyY2VudGFnZV8xeSIsImNvbnN0cnVjdG9yIiwiZGVjb2RlZF9uYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/token.js\n"));

/***/ })

});