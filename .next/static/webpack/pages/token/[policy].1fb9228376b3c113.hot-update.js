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

/***/ "./src/pages/nftGrid.js":
/*!******************************!*\
  !*** ./src/pages/nftGrid.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NftGrid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/shared/lib/utils */ \"./node_modules/next/dist/shared/lib/utils.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n// takes list of tokens with ipfs and metadata and oupts a grid diplsaying said nfts\nfunction NftGrid(props) {\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        function func() {\n            if (props.nfts != null) {\n                let nftGrid = addNftsToGrid(props.nfts);\n                setDisplay(nftGrid);\n            }\n        }\n        func();\n    }, [\n        props\n    ]);\n    function addNftsToGrid(nfts) {\n        let grid = [];\n        for (const element of nfts){\n            let token = element;\n            let name = token.asset_name;\n            grid.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-item\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: \"grid-img\",\n                        src: token.ipfs,\n                        alt: \"failed to load image\",\n                        width: 270,\n                        height: 270,\n                        onClick: ()=>router.push(\"/token/\" + token.policy_id + token.asset_name)\n                    }, void 0, false, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/nftGrid.js\",\n                        lineNumber: 35,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid-item-text\",\n                        children: [\n                            \"Asset Name: \",\n                            name.substring(0, 7),\n                            \"...\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nathan/Desktop/explorer/src/pages/nftGrid.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, token.asset_name + \"nft\", true, {\n                fileName: \"/Users/nathan/Desktop/explorer/src/pages/nftGrid.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this));\n        }\n        return grid;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid-nft\",\n        children: display\n    }, void 0, false, {\n        fileName: \"/Users/nathan/Desktop/explorer/src/pages/nftGrid.js\",\n        lineNumber: 53,\n        columnNumber: 12\n    }, this);\n}\n_s(NftGrid, \"O6pXH/dFd/GL64WZIBwAW52JcdY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = NftGrid;\nvar _c;\n$RefreshReg$(_c, \"NftGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbmZ0R3JpZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEQ7QUFDN0I7QUFDUztBQUNlO0FBR3ZELG9GQUFvRjtBQUNyRSxTQUFTTSxRQUFRQyxLQUFLLEVBQUM7O0lBRWxDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUE7SUFDdEMsTUFBTUssU0FBU1Isc0RBQVNBO0lBR3hCQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osU0FBU1EsT0FBTztZQUNaLElBQUdKLE1BQU1LLElBQUksSUFBSSxJQUFJLEVBQUM7Z0JBQ2xCLElBQUlDLFVBQVVDLGNBQWNQLE1BQU1LLElBQUk7Z0JBQ3RDSCxXQUFXSTtZQUNmLENBQUM7UUFFTDtRQUNBRjtJQUNKLEdBQUc7UUFBQ0o7S0FBTTtJQUVWLFNBQVNPLGNBQWNGLElBQUksRUFBRTtRQUN6QixJQUFJRyxPQUFPLEVBQUU7UUFHYixLQUFLLE1BQU1DLFdBQVdKLEtBQU07WUFDMUIsSUFBSUssUUFBUUQ7WUFDYixJQUFJRSxPQUFPRCxNQUFNRSxVQUFVO1lBRTFCSixLQUFLSyxJQUFJLGVBQ1AsOERBQUNDO2dCQUFtQ0MsV0FBVTs7a0NBQzVDLDhEQUFDckIsbURBQUtBO3dCQUNKcUIsV0FBVTt3QkFDVkMsS0FBS04sTUFBTU8sSUFBSTt3QkFDZkMsS0FBSTt3QkFDSkMsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkMsU0FBUyxJQUFNbEIsT0FBT1UsSUFBSSxDQUFDLFlBQVlILE1BQU1ZLFNBQVMsR0FBR1osTUFBTUUsVUFBVTs7Ozs7O2tDQUV6RSw4REFBQ0U7d0JBQUlDLFdBQVU7OzRCQUFpQjs0QkFDbkJKLEtBQUtZLFNBQVMsQ0FBQyxHQUFHOzRCQUFHOzs7Ozs7OztlQVY1QmIsTUFBTUUsVUFBVSxHQUFHOzs7OztRQWNqQztRQUVBLE9BQU9KO0lBQ1Q7SUFFRixxQkFBTyw4REFBQ007UUFBSUMsV0FBVTtrQkFBWWQ7Ozs7OztBQUN0QyxDQUFDO0dBOUN1QkY7O1FBR0xKLGtEQUFTQTs7O0tBSEpJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9uZnRHcmlkLmpzPzhhNTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0RGlzcGxheU5hbWUgfSBmcm9tIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuXG4vLyB0YWtlcyBsaXN0IG9mIHRva2VucyB3aXRoIGlwZnMgYW5kIG1ldGFkYXRhIGFuZCBvdXB0cyBhIGdyaWQgZGlwbHNheWluZyBzYWlkIG5mdHNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5mdEdyaWQocHJvcHMpe1xuXG4gICAgY29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gZnVuYyAoKXtcbiAgICAgICAgICAgIGlmKHByb3BzLm5mdHMgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgbGV0IG5mdEdyaWQgPSBhZGROZnRzVG9HcmlkKHByb3BzLm5mdHMpO1xuICAgICAgICAgICAgICAgIHNldERpc3BsYXkobmZ0R3JpZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBmdW5jKCk7XG4gICAgfSwgW3Byb3BzXSlcblxuICAgIGZ1bmN0aW9uIGFkZE5mdHNUb0dyaWQobmZ0cykge1xuICAgICAgICBsZXQgZ3JpZCA9IFtdO1xuXG4gICAgICBcbiAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIG5mdHMpIHtcbiAgICAgICAgICBsZXQgdG9rZW4gPSBlbGVtZW50O1xuICAgICAgICAgbGV0IG5hbWUgPSB0b2tlbi5hc3NldF9uYW1lO1xuXG4gICAgICAgICAgZ3JpZC5wdXNoKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3Rva2VuLmFzc2V0X25hbWUgKyAnbmZ0J30gY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCI+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtaW1nXCJcbiAgICAgICAgICAgICAgICBzcmM9e3Rva2VuLmlwZnN9XG4gICAgICAgICAgICAgICAgYWx0PVwiZmFpbGVkIHRvIGxvYWQgaW1hZ2VcIlxuICAgICAgICAgICAgICAgIHdpZHRoPXsyNzB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyNzB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy90b2tlbi8nICsgdG9rZW4ucG9saWN5X2lkICsgdG9rZW4uYXNzZXRfbmFtZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW0tdGV4dFwiPlxuICAgICAgICAgICAgICAgIEFzc2V0IE5hbWU6IHtuYW1lLnN1YnN0cmluZygwLCA3KX0uLi5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgcmV0dXJuIGdyaWQ7XG4gICAgICB9XG5cbiAgICByZXR1cm4oPGRpdiBjbGFzc05hbWU9XCJncmlkLW5mdFwiPntkaXNwbGF5fTwvZGl2Pilcbn0iXSwibmFtZXMiOlsiZ2V0RGlzcGxheU5hbWUiLCJJbWFnZSIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVJlZHVjZXIiLCJ1c2VTdGF0ZSIsIk5mdEdyaWQiLCJwcm9wcyIsImRpc3BsYXkiLCJzZXREaXNwbGF5Iiwicm91dGVyIiwiZnVuYyIsIm5mdHMiLCJuZnRHcmlkIiwiYWRkTmZ0c1RvR3JpZCIsImdyaWQiLCJlbGVtZW50IiwidG9rZW4iLCJuYW1lIiwiYXNzZXRfbmFtZSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJpcGZzIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJvbkNsaWNrIiwicG9saWN5X2lkIiwic3Vic3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/nftGrid.js\n"));

/***/ })

});