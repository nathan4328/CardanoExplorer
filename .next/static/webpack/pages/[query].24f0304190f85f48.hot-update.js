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

/***/ "./pages/nfts.js":
/*!***********************!*\
  !*** ./pages/nfts.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Nfts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _collectionCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./collectionCard */ \"./pages/collectionCard.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// returns a flex box of nft showing image, name and quantity\nfunction Nfts(props) {\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"NFTs\");\n    const [showing, setShowing] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"Wallet\");\n    const [info, setInfo] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        function setGrid() {\n            let grid = [];\n            setInfo(\"Collections: \" + props.data.nfts.length);\n            for (const element of props.data.nfts){\n                let policy = element;\n                grid.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    className: \"grid-item\",\n                    src: policy[0].ipfs,\n                    height: 200,\n                    width: 200,\n                    alt: policy[0].asset_name,\n                    onClick: ()=>showCollection(policy)\n                }, policy[0].asset_name, false, {\n                    fileName: \"/Users/nathan/Desktop/explorer/pages/nfts.js\",\n                    lineNumber: 21,\n                    columnNumber: 21\n                }, this));\n            }\n            setDisplay(grid);\n        }\n        setGrid();\n    }, [\n        props.data\n    ]);\n    function showWallet() {\n        let grid = [];\n        setInfo(\"Collections: \" + props.data.nfts.length);\n        for (const element of props.data.nfts){\n            let policy = element;\n            grid.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"grid-item\",\n                src: policy[0].ipfs,\n                height: 200,\n                width: 200,\n                alt: policy[0].asset_name,\n                onClick: ()=>showCollection(policy)\n            }, policy[0].asset_name, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/pages/nfts.js\",\n                lineNumber: 34,\n                columnNumber: 19\n            }, this));\n        }\n        setDisplay(grid);\n    }\n    function showCollection(policy) {\n        setInfo(\"Showing Policy: \" + policy[0].policy_id + \" with \" + policy.length + \" NFTs\");\n        let grid = [];\n        for (const element of policy){\n            grid.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"grid-item\",\n                src: element.ipfs,\n                alt: element.asset_name,\n                width: 200,\n                height: 200,\n                onClick: ()=>router.push(\"/\" + element.policy_id + element.asset_name)\n            }, element.asset_name, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/pages/nfts.js\",\n                lineNumber: 45,\n                columnNumber: 19\n            }, this));\n        }\n        setShowing(\"Back\");\n        setDisplay(grid);\n    }\n    function copyText(event, text) {\n        navigator.clipboard.writeText(text).then(()=>{\n            // Update the button text to \"Copied!\"\n            const button = event.target;\n            event.target.innerText = \"Copied\";\n            setTimeout(()=>{\n                // Reset the button text after 1 second\n                button.textContent = \"Copy\";\n            }, 1000);\n        });\n    }\n    //returns a grid view of all NFTs grouped by policy\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"nfts\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: info\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/pages/nfts.js\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-nft\",\n                children: display\n            }, void 0, false, {\n                fileName: \"/Users/nathan/Desktop/explorer/pages/nfts.js\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nathan/Desktop/explorer/pages/nfts.js\",\n        lineNumber: 65,\n        columnNumber: 7\n    }, this);\n}\n_s(Nfts, \"nC/xm98ZgGG68VBSjfdwa1Kxxo4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Nfts;\nvar _c;\n$RefreshReg$(_c, \"Nfts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBLG1EQUFtRDtJQUNuRCxxQkFDRSw4REFBQ0M7UUFBSXZCLFdBQVU7OzBCQUNiLDhEQUFDd0I7MEJBQUtuQzs7Ozs7OzBCQUNOLDhEQUFDa0M7Z0JBQUl2QixXQUFVOzBCQUNkZjs7Ozs7Ozs7Ozs7O0FBTVQsQ0FBQztHQWxFdUJGOztRQUtMSixrREFBU0E7OztLQUxKSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9uZnRzLmpzPzRkZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb2xsZWN0aW9uQ2FyZCBmcm9tIFwiLi9jb2xsZWN0aW9uQ2FyZFwiO1xuXG4vLyByZXR1cm5zIGEgZmxleCBib3ggb2YgbmZ0IHNob3dpbmcgaW1hZ2UsIG5hbWUgYW5kIHF1YW50aXR5XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZnRzIChwcm9wcyl7XG5cbiAgICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZShcIk5GVHNcIik7XG4gICAgY29uc3QgW3Nob3dpbmcsIHNldFNob3dpbmddID0gdXNlU3RhdGUoXCJXYWxsZXRcIik7XG4gICAgY29uc3QgW2luZm8sIHNldEluZm9dID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBmdW5jdGlvbiBzZXRHcmlkKCl7XG4gICAgICAgIGxldCBncmlkID0gW107XG4gICAgICAgIHNldEluZm8oXCJDb2xsZWN0aW9uczogXCIgKyBwcm9wcy5kYXRhLm5mdHMubGVuZ3RoKTtcbiAgICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgcHJvcHMuZGF0YS5uZnRzKXtcbiAgICAgICAgICBsZXQgcG9saWN5ID0gZWxlbWVudDtcbiAgICAgICAgICBncmlkLnB1c2goPEltYWdlIGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiIGtleSA9IHtwb2xpY3lbMF0uYXNzZXRfbmFtZX0gc3JjPXtwb2xpY3lbMF0uaXBmc30gaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IGFsdCA9IHtwb2xpY3lbMF0uYXNzZXRfbmFtZX0gb25DbGljaz17KCkgPT4gc2hvd0NvbGxlY3Rpb24ocG9saWN5KX0vPik7XG4gICAgICAgIH1cbiAgICAgICAgc2V0RGlzcGxheShncmlkKTtcbiAgICAgIH1cbiAgICAgIHNldEdyaWQoKTtcbiAgICB9LCBbcHJvcHMuZGF0YV0pXG5cbiAgICBmdW5jdGlvbiBzaG93V2FsbGV0KCl7XG4gICAgICBsZXQgZ3JpZCA9IFtdO1xuICAgICAgc2V0SW5mbyhcIkNvbGxlY3Rpb25zOiBcIiArIHByb3BzLmRhdGEubmZ0cy5sZW5ndGgpO1xuXG4gICAgICBmb3IoY29uc3QgZWxlbWVudCBvZiBwcm9wcy5kYXRhLm5mdHMpe1xuICAgICAgICBsZXQgcG9saWN5ID0gZWxlbWVudDtcbiAgICAgICAgZ3JpZC5wdXNoKDxJbWFnZSBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIiAga2V5ID0ge3BvbGljeVswXS5hc3NldF9uYW1lfSBzcmM9e3BvbGljeVswXS5pcGZzfSBoZWlnaHQ9ezIwMH0gd2lkdGg9ezIwMH0gYWx0ID0ge3BvbGljeVswXS5hc3NldF9uYW1lfSBvbkNsaWNrPXsoKSA9PiBzaG93Q29sbGVjdGlvbihwb2xpY3kpfS8+KTtcbiAgICAgIH1cbiAgICAgIHNldERpc3BsYXkoZ3JpZCk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93Q29sbGVjdGlvbihwb2xpY3kpe1xuICAgICAgc2V0SW5mbyhcIlNob3dpbmcgUG9saWN5OiBcIiArIHBvbGljeVswXS5wb2xpY3lfaWQgKyBcIiB3aXRoIFwiICsgcG9saWN5Lmxlbmd0aCArIFwiIE5GVHNcIiApO1xuXG4gICAgICBsZXQgZ3JpZCA9IFtdO1xuICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgcG9saWN5KXtcbiAgICAgICAgZ3JpZC5wdXNoKDxJbWFnZSBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIiBrZXkgPSB7ZWxlbWVudC5hc3NldF9uYW1lfSBzcmM9e2VsZW1lbnQuaXBmc30gYWx0PXtlbGVtZW50LmFzc2V0X25hbWV9IHdpZHRoPXsyMDB9IGhlaWdodD17MjAwfSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycrZWxlbWVudC5wb2xpY3lfaWQrZWxlbWVudC5hc3NldF9uYW1lKX0vPik7XG4gICAgICB9XG4gICAgICBzZXRTaG93aW5nKFwiQmFja1wiKTtcbiAgICAgIHNldERpc3BsYXkoZ3JpZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29weVRleHQoZXZlbnQsIHRleHQpIHtcbiAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpLnRoZW4oKCkgPT4ge1xuICAgICAgICAvLyBVcGRhdGUgdGhlIGJ1dHRvbiB0ZXh0IHRvIFwiQ29waWVkIVwiXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmlubmVyVGV4dCA9IFwiQ29waWVkXCI7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIC8vIFJlc2V0IHRoZSBidXR0b24gdGV4dCBhZnRlciAxIHNlY29uZFxuICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29weVwiO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vcmV0dXJucyBhIGdyaWQgdmlldyBvZiBhbGwgTkZUcyBncm91cGVkIGJ5IHBvbGljeVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5mdHNcIj5cbiAgICAgICAgPG5hdj57aW5mb308L25hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLW5mdFwiPlxuICAgICAgICB7ZGlzcGxheX1cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuICAgIClcbn0iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb2xsZWN0aW9uQ2FyZCIsIk5mdHMiLCJwcm9wcyIsImRpc3BsYXkiLCJzZXREaXNwbGF5Iiwic2hvd2luZyIsInNldFNob3dpbmciLCJpbmZvIiwic2V0SW5mbyIsInJvdXRlciIsInNldEdyaWQiLCJncmlkIiwiZGF0YSIsIm5mdHMiLCJsZW5ndGgiLCJlbGVtZW50IiwicG9saWN5IiwicHVzaCIsImNsYXNzTmFtZSIsInNyYyIsImlwZnMiLCJoZWlnaHQiLCJ3aWR0aCIsImFsdCIsImFzc2V0X25hbWUiLCJvbkNsaWNrIiwic2hvd0NvbGxlY3Rpb24iLCJzaG93V2FsbGV0IiwicG9saWN5X2lkIiwiY29weVRleHQiLCJldmVudCIsInRleHQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0aGVuIiwiYnV0dG9uIiwidGFyZ2V0IiwiaW5uZXJUZXh0Iiwic2V0VGltZW91dCIsInRleHRDb250ZW50IiwiZGl2IiwibmF2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/nfts.js\n"));

/***/ })

});