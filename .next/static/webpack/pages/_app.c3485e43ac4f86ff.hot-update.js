"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[2]!./styles/globals.css":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[2]!./styles/globals.css ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Set the font and color scheme for the entire page */\\nbody {\\n    font-family: Arial, sans-serif;\\n    color: #333;\\n    background-color: #afdc99;\\n  }\\n  \\n  /* Style the header */\\nheader {\\n    display: flex;\\n    background-color: #333;\\n    color: #fff;\\n    padding: 5px 5px 5px 5px;\\n}\\n\\nmain{\\n    display: flex;\\n    color: #fff;\\n    padding: 20px;\\n}\\n/* Style the search bar in the header */\\nheader input[type=\\\"text\\\"] {\\n    width: 80%;\\n    padding: 12px 20px;\\n    margin: 8px 0;\\n    box-sizing: border-box;\\n    border: 2px solid #ccc;\\n    border-radius: 4px;\\n}\\n\\n.main-title{\\n    text-align: center;\\n}\\n.main-label{\\n    font-size: xx-large;\\n}\\nlabel{\\n    padding: 10px 10px 10px 10px;\\n    display: flex;\\n    align-items: center;\\n    font-weight: bold;\\n    font-size: large;\\n}\\n\\n.searchForm{\\n    padding: 10px 10px 10px 10px;\\n    width: 75%;\\n    text-align: center;\\n}\\n.search-input{\\n    height: 70%;\\n}\\n.wallet-info{\\n    display: flex;\\n    text-align: center;\\n    border-color: #333;\\n    border-width: 15px;\\n}\\n\\n.token-info{\\n    background-color: #333;\\n    padding: 30px 30px 30px 30px;\\n    width: 50%;\\n    text-align: center;\\n    color: white;\\n    border-color: #333;\\n    border-width: 15px;\\n}\\n\\n.ada-info{\\n    background-color: #333;\\n    padding: 30px 30px 30px 30px;\\n    width: 50%;\\n}\\n\\n.inner{\\n\\n    font-weight: bold;\\n    font-size: large;\\n    padding: 10px 10px 10px 10px;\\n    border-color:  #8280cae0; \\n    border-style: solid;\\n    border-width: 5px;\\n    justify-self: center;\\n    align-items: center;\\n    background-color:#a8e3b8db; \\n    color:rgb(71, 68, 68);\\n}\\n\\n/* Style the sorting bar */\\n.sorting-bar {\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n    background-color: #f4f4f4;\\n    border-bottom: 1px solid #ccc;\\n    border-color: #333;\\n    border-width: 4px;\\n}\\n\\n.search-button{\\n    height: 70%;\\n    border: 2px solid rgb(108, 108, 224);\\n    border-radius: 10%;\\n    margin: 10px 10px 10px 10px;\\n    background-color: #98cb91; \\n    color: black;\\n    font-size: large;\\n}\\n\\n.search-button:hover{\\n    background-color:honeydew;\\n}\\n/* Style the sort buttons */\\n.sort-button {\\n  display: inline-block;\\n  padding: 10px 20px;\\n  border: none;\\n  background-color: rgb(180, 225, 183);\\n  font-size: 14px;\\n  color: rgb(47, 62, 64);\\n  cursor: pointer;\\n  transition: background-color 0.2s;\\n}\\n\\n/* Add a hover effect for the sort buttons */\\n.sort-button:hover {\\n  background-color: #f4f4f4;\\n}\\n.wallets{\\n    width: 20%;\\n    display:  flex;\\n    text-align: center;\\n}\\n.walletButton{\\n    height: 70%;\\n    border: 2px solid rgb(108, 108, 224);\\n    border-radius: 10%;\\n    margin: 10px 10px 10px 10px;\\n    background-color: #a6e49e; \\n}\\n\\n.walletButton:hover{\\n    background-color:honeydew;\\n}\\n\\n.token-img{\\n    width: 7%;\\n    object-fit: cover;\\n}\\n\\n.wallet-img{\\n    width: 50px;\\n\\n}\\n\\n.box-title{\\n    display: flex;\\n    text-align: center;\\n}\\n\\n.projects{\\n    background-color: rgb(54, 58, 55);\\n    padding: 10px 10px 10px 10px;\\n    display: grid;\\n    border-width: 5px;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.show-assets-button{\\n    border: 2px solid rgb(108, 108, 224);\\n    border-radius: 10%;\\n    margin: 10px 10px 10px 10px;\\n    background-color: #5b72d6; \\n    color: white;\\n}\\n.grid-item{\\n    color: rgb(47, 62, 64);\\n    margin: 10px 0px 0px 20px;\\n    border-style: solid;\\n    border-width: 5px;\\n    border-color:  #6d6ac9e0; \\n    background-color: #a6e49e; \\n    display: flex;\\n    align-items: center;\\n\\n}\\n.dropdownContent{\\n    border-style: solid;\\n    border-width: 3px;\\n    border-color:  #6aced7e0; \\n}\\n\\n.token-subimg{\\n    width: 5%;\\n    object-fit: cover;\\n}\\n\\n.nft{\\n    border-width: 5px;\\n    border-color:  #8280cae0;\\n    background-color: rgb(108, 65, 238);\\n\\n    color:white;\\n}\\n\\n.coin{\\n    border-color:  #c685c5; \\n    background-color:#ddadd1; \\n    color: #333;\\n}\\n\\n.token-list{\\n    display: flex;\\n}\\n\\n.item-info{\\n\\n    display: inline;\\n    padding: 20px 20px 20px 20px;\\n    font-size: large;\\n    font-weight: bold;\\n}\\n\\n.loading-symbol {\\n    position: absolute;\\n    top: 6%;\\n    left: 80%;\\n    transform: translate(-50%, -50%);\\n    width: 30px;\\n    height: 30px;\\n    border: 5px solid #ccc;\\n    border-radius: 50%;\\n    border-top-color: #333;\\n    animation: spin 1s linear infinite;\\n}\\n\\n.main-img{\\n    width: 60%;\\n}\\n.img-div{\\n    text-align: center;\\n}\\n@keyframes spin {\\n100% {\\n    transform: translate(-50%, -50%) rotate(360deg);\\n}\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA,sDAAsD;AACtD;IACI,8BAA8B;IAC9B,WAAW;IACX,yBAAyB;EAC3B;;EAEA,qBAAqB;AACvB;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,WAAW;IACX,aAAa;AACjB;AACA,uCAAuC;AACvC;IACI,UAAU;IACV,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,4BAA4B;IAC5B,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,4BAA4B;IAC5B,UAAU;IACV,kBAAkB;AACtB;AACA;IACI,WAAW;AACf;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,4BAA4B;IAC5B,UAAU;IACV,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,4BAA4B;IAC5B,UAAU;AACd;;AAEA;;IAEI,iBAAiB;IACjB,gBAAgB;IAChB,4BAA4B;IAC5B,wBAAwB;IACxB,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;IACpB,mBAAmB;IACnB,0BAA0B;IAC1B,qBAAqB;AACzB;;AAEA,0BAA0B;AAC1B;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,yBAAyB;IACzB,6BAA6B;IAC7B,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,oCAAoC;IACpC,kBAAkB;IAClB,2BAA2B;IAC3B,yBAAyB;IACzB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;AAC7B;AACA,2BAA2B;AAC3B;EACE,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,oCAAoC;EACpC,eAAe;EACf,sBAAsB;EACtB,eAAe;EACf,iCAAiC;AACnC;;AAEA,4CAA4C;AAC5C;EACE,yBAAyB;AAC3B;AACA;IACI,UAAU;IACV,cAAc;IACd,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,oCAAoC;IACpC,kBAAkB;IAClB,2BAA2B;IAC3B,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,WAAW;;AAEf;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,iCAAiC;IACjC,4BAA4B;IAC5B,aAAa;IACb,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;IACpC,kBAAkB;IAClB,2BAA2B;IAC3B,yBAAyB;IACzB,YAAY;AAChB;AACA;IACI,sBAAsB;IACtB,yBAAyB;IACzB,mBAAmB;IACnB,iBAAiB;IACjB,wBAAwB;IACxB,yBAAyB;IACzB,aAAa;IACb,mBAAmB;;AAEvB;AACA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA;IACI,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,wBAAwB;IACxB,mCAAmC;;IAEnC,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,wBAAwB;IACxB,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;;IAEI,eAAe;IACf,4BAA4B;IAC5B,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,SAAS;IACT,gCAAgC;IAChC,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;IAClB,sBAAsB;IACtB,kCAAkC;AACtC;;AAEA;IACI,UAAU;AACd;AACA;IACI,kBAAkB;AACtB;AACA;AACA;IACI,+CAA+C;AACnD;AACA\",\"sourcesContent\":[\"/* Set the font and color scheme for the entire page */\\nbody {\\n    font-family: Arial, sans-serif;\\n    color: #333;\\n    background-color: #afdc99;\\n  }\\n  \\n  /* Style the header */\\nheader {\\n    display: flex;\\n    background-color: #333;\\n    color: #fff;\\n    padding: 5px 5px 5px 5px;\\n}\\n\\nmain{\\n    display: flex;\\n    color: #fff;\\n    padding: 20px;\\n}\\n/* Style the search bar in the header */\\nheader input[type=\\\"text\\\"] {\\n    width: 80%;\\n    padding: 12px 20px;\\n    margin: 8px 0;\\n    box-sizing: border-box;\\n    border: 2px solid #ccc;\\n    border-radius: 4px;\\n}\\n\\n.main-title{\\n    text-align: center;\\n}\\n.main-label{\\n    font-size: xx-large;\\n}\\nlabel{\\n    padding: 10px 10px 10px 10px;\\n    display: flex;\\n    align-items: center;\\n    font-weight: bold;\\n    font-size: large;\\n}\\n\\n.searchForm{\\n    padding: 10px 10px 10px 10px;\\n    width: 75%;\\n    text-align: center;\\n}\\n.search-input{\\n    height: 70%;\\n}\\n.wallet-info{\\n    display: flex;\\n    text-align: center;\\n    border-color: #333;\\n    border-width: 15px;\\n}\\n\\n.token-info{\\n    background-color: #333;\\n    padding: 30px 30px 30px 30px;\\n    width: 50%;\\n    text-align: center;\\n    color: white;\\n    border-color: #333;\\n    border-width: 15px;\\n}\\n\\n.ada-info{\\n    background-color: #333;\\n    padding: 30px 30px 30px 30px;\\n    width: 50%;\\n}\\n\\n.inner{\\n\\n    font-weight: bold;\\n    font-size: large;\\n    padding: 10px 10px 10px 10px;\\n    border-color:  #8280cae0; \\n    border-style: solid;\\n    border-width: 5px;\\n    justify-self: center;\\n    align-items: center;\\n    background-color:#a8e3b8db; \\n    color:rgb(71, 68, 68);\\n}\\n\\n/* Style the sorting bar */\\n.sorting-bar {\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n    background-color: #f4f4f4;\\n    border-bottom: 1px solid #ccc;\\n    border-color: #333;\\n    border-width: 4px;\\n}\\n\\n.search-button{\\n    height: 70%;\\n    border: 2px solid rgb(108, 108, 224);\\n    border-radius: 10%;\\n    margin: 10px 10px 10px 10px;\\n    background-color: #98cb91; \\n    color: black;\\n    font-size: large;\\n}\\n\\n.search-button:hover{\\n    background-color:honeydew;\\n}\\n/* Style the sort buttons */\\n.sort-button {\\n  display: inline-block;\\n  padding: 10px 20px;\\n  border: none;\\n  background-color: rgb(180, 225, 183);\\n  font-size: 14px;\\n  color: rgb(47, 62, 64);\\n  cursor: pointer;\\n  transition: background-color 0.2s;\\n}\\n\\n/* Add a hover effect for the sort buttons */\\n.sort-button:hover {\\n  background-color: #f4f4f4;\\n}\\n.wallets{\\n    width: 20%;\\n    display:  flex;\\n    text-align: center;\\n}\\n.walletButton{\\n    height: 70%;\\n    border: 2px solid rgb(108, 108, 224);\\n    border-radius: 10%;\\n    margin: 10px 10px 10px 10px;\\n    background-color: #a6e49e; \\n}\\n\\n.walletButton:hover{\\n    background-color:honeydew;\\n}\\n\\n.token-img{\\n    width: 7%;\\n    object-fit: cover;\\n}\\n\\n.wallet-img{\\n    width: 50px;\\n\\n}\\n\\n.box-title{\\n    display: flex;\\n    text-align: center;\\n}\\n\\n.projects{\\n    background-color: rgb(54, 58, 55);\\n    padding: 10px 10px 10px 10px;\\n    display: grid;\\n    border-width: 5px;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.show-assets-button{\\n    border: 2px solid rgb(108, 108, 224);\\n    border-radius: 10%;\\n    margin: 10px 10px 10px 10px;\\n    background-color: #5b72d6; \\n    color: white;\\n}\\n.grid-item{\\n    color: rgb(47, 62, 64);\\n    margin: 10px 0px 0px 20px;\\n    border-style: solid;\\n    border-width: 5px;\\n    border-color:  #6d6ac9e0; \\n    background-color: #a6e49e; \\n    display: flex;\\n    align-items: center;\\n\\n}\\n.dropdownContent{\\n    border-style: solid;\\n    border-width: 3px;\\n    border-color:  #6aced7e0; \\n}\\n\\n.token-subimg{\\n    width: 5%;\\n    object-fit: cover;\\n}\\n\\n.nft{\\n    border-width: 5px;\\n    border-color:  #8280cae0;\\n    background-color: rgb(108, 65, 238);\\n\\n    color:white;\\n}\\n\\n.coin{\\n    border-color:  #c685c5; \\n    background-color:#ddadd1; \\n    color: #333;\\n}\\n\\n.token-list{\\n    display: flex;\\n}\\n\\n.item-info{\\n\\n    display: inline;\\n    padding: 20px 20px 20px 20px;\\n    font-size: large;\\n    font-weight: bold;\\n}\\n\\n.loading-symbol {\\n    position: absolute;\\n    top: 6%;\\n    left: 80%;\\n    transform: translate(-50%, -50%);\\n    width: 30px;\\n    height: 30px;\\n    border: 5px solid #ccc;\\n    border-radius: 50%;\\n    border-top-color: #333;\\n    animation: spin 1s linear infinite;\\n}\\n\\n.main-img{\\n    width: 60%;\\n}\\n.img-div{\\n    text-align: center;\\n}\\n@keyframes spin {\\n100% {\\n    transform: translate(-50%, -50%) rotate(360deg);\\n}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbOV0udXNlWzJdIS4vc3R5bGVzL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ3dIO0FBQ3hILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSx5R0FBeUcscUNBQXFDLGtCQUFrQixnQ0FBZ0MsS0FBSyx3Q0FBd0Msb0JBQW9CLDZCQUE2QixrQkFBa0IsK0JBQStCLEdBQUcsU0FBUyxvQkFBb0Isa0JBQWtCLG9CQUFvQixHQUFHLHlFQUF5RSxpQkFBaUIseUJBQXlCLG9CQUFvQiw2QkFBNkIsNkJBQTZCLHlCQUF5QixHQUFHLGdCQUFnQix5QkFBeUIsR0FBRyxjQUFjLDBCQUEwQixHQUFHLFFBQVEsbUNBQW1DLG9CQUFvQiwwQkFBMEIsd0JBQXdCLHVCQUF1QixHQUFHLGdCQUFnQixtQ0FBbUMsaUJBQWlCLHlCQUF5QixHQUFHLGdCQUFnQixrQkFBa0IsR0FBRyxlQUFlLG9CQUFvQix5QkFBeUIseUJBQXlCLHlCQUF5QixHQUFHLGdCQUFnQiw2QkFBNkIsbUNBQW1DLGlCQUFpQix5QkFBeUIsbUJBQW1CLHlCQUF5Qix5QkFBeUIsR0FBRyxjQUFjLDZCQUE2QixtQ0FBbUMsaUJBQWlCLEdBQUcsV0FBVywwQkFBMEIsdUJBQXVCLG1DQUFtQyxnQ0FBZ0MsMEJBQTBCLHdCQUF3QiwyQkFBMkIsMEJBQTBCLGtDQUFrQyw0QkFBNEIsR0FBRywrQ0FBK0Msb0JBQW9CLDBCQUEwQixxQ0FBcUMsZ0NBQWdDLG9DQUFvQyx5QkFBeUIsd0JBQXdCLEdBQUcsbUJBQW1CLGtCQUFrQiwyQ0FBMkMseUJBQXlCLGtDQUFrQyxpQ0FBaUMsbUJBQW1CLHVCQUF1QixHQUFHLHlCQUF5QixnQ0FBZ0MsR0FBRyw4Q0FBOEMsMEJBQTBCLHVCQUF1QixpQkFBaUIseUNBQXlDLG9CQUFvQiwyQkFBMkIsb0JBQW9CLHNDQUFzQyxHQUFHLHVFQUF1RSw4QkFBOEIsR0FBRyxXQUFXLGlCQUFpQixxQkFBcUIseUJBQXlCLEdBQUcsZ0JBQWdCLGtCQUFrQiwyQ0FBMkMseUJBQXlCLGtDQUFrQyxpQ0FBaUMsR0FBRyx3QkFBd0IsZ0NBQWdDLEdBQUcsZUFBZSxnQkFBZ0Isd0JBQXdCLEdBQUcsZ0JBQWdCLGtCQUFrQixLQUFLLGVBQWUsb0JBQW9CLHlCQUF5QixHQUFHLGNBQWMsd0NBQXdDLG1DQUFtQyxvQkFBb0Isd0JBQXdCLDhCQUE4QiwwQkFBMEIsR0FBRyx3QkFBd0IsMkNBQTJDLHlCQUF5QixrQ0FBa0MsaUNBQWlDLG1CQUFtQixHQUFHLGFBQWEsNkJBQTZCLGdDQUFnQywwQkFBMEIsd0JBQXdCLGdDQUFnQyxpQ0FBaUMsb0JBQW9CLDBCQUEwQixLQUFLLG1CQUFtQiwwQkFBMEIsd0JBQXdCLGdDQUFnQyxHQUFHLGtCQUFrQixnQkFBZ0Isd0JBQXdCLEdBQUcsU0FBUyx3QkFBd0IsK0JBQStCLDBDQUEwQyxvQkFBb0IsR0FBRyxVQUFVLDhCQUE4QixnQ0FBZ0Msa0JBQWtCLEdBQUcsZ0JBQWdCLG9CQUFvQixHQUFHLGVBQWUsd0JBQXdCLG1DQUFtQyx1QkFBdUIsd0JBQXdCLEdBQUcscUJBQXFCLHlCQUF5QixjQUFjLGdCQUFnQix1Q0FBdUMsa0JBQWtCLG1CQUFtQiw2QkFBNkIseUJBQXlCLDZCQUE2Qix5Q0FBeUMsR0FBRyxjQUFjLGlCQUFpQixHQUFHLFdBQVcseUJBQXlCLEdBQUcsbUJBQW1CLFFBQVEsc0RBQXNELEdBQUcsR0FBRyxTQUFTLDBGQUEwRixNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sd0ZBQXdGLHFDQUFxQyxrQkFBa0IsZ0NBQWdDLEtBQUssd0NBQXdDLG9CQUFvQiw2QkFBNkIsa0JBQWtCLCtCQUErQixHQUFHLFNBQVMsb0JBQW9CLGtCQUFrQixvQkFBb0IsR0FBRyx5RUFBeUUsaUJBQWlCLHlCQUF5QixvQkFBb0IsNkJBQTZCLDZCQUE2Qix5QkFBeUIsR0FBRyxnQkFBZ0IseUJBQXlCLEdBQUcsY0FBYywwQkFBMEIsR0FBRyxRQUFRLG1DQUFtQyxvQkFBb0IsMEJBQTBCLHdCQUF3Qix1QkFBdUIsR0FBRyxnQkFBZ0IsbUNBQW1DLGlCQUFpQix5QkFBeUIsR0FBRyxnQkFBZ0Isa0JBQWtCLEdBQUcsZUFBZSxvQkFBb0IseUJBQXlCLHlCQUF5Qix5QkFBeUIsR0FBRyxnQkFBZ0IsNkJBQTZCLG1DQUFtQyxpQkFBaUIseUJBQXlCLG1CQUFtQix5QkFBeUIseUJBQXlCLEdBQUcsY0FBYyw2QkFBNkIsbUNBQW1DLGlCQUFpQixHQUFHLFdBQVcsMEJBQTBCLHVCQUF1QixtQ0FBbUMsZ0NBQWdDLDBCQUEwQix3QkFBd0IsMkJBQTJCLDBCQUEwQixrQ0FBa0MsNEJBQTRCLEdBQUcsK0NBQStDLG9CQUFvQiwwQkFBMEIscUNBQXFDLGdDQUFnQyxvQ0FBb0MseUJBQXlCLHdCQUF3QixHQUFHLG1CQUFtQixrQkFBa0IsMkNBQTJDLHlCQUF5QixrQ0FBa0MsaUNBQWlDLG1CQUFtQix1QkFBdUIsR0FBRyx5QkFBeUIsZ0NBQWdDLEdBQUcsOENBQThDLDBCQUEwQix1QkFBdUIsaUJBQWlCLHlDQUF5QyxvQkFBb0IsMkJBQTJCLG9CQUFvQixzQ0FBc0MsR0FBRyx1RUFBdUUsOEJBQThCLEdBQUcsV0FBVyxpQkFBaUIscUJBQXFCLHlCQUF5QixHQUFHLGdCQUFnQixrQkFBa0IsMkNBQTJDLHlCQUF5QixrQ0FBa0MsaUNBQWlDLEdBQUcsd0JBQXdCLGdDQUFnQyxHQUFHLGVBQWUsZ0JBQWdCLHdCQUF3QixHQUFHLGdCQUFnQixrQkFBa0IsS0FBSyxlQUFlLG9CQUFvQix5QkFBeUIsR0FBRyxjQUFjLHdDQUF3QyxtQ0FBbUMsb0JBQW9CLHdCQUF3Qiw4QkFBOEIsMEJBQTBCLEdBQUcsd0JBQXdCLDJDQUEyQyx5QkFBeUIsa0NBQWtDLGlDQUFpQyxtQkFBbUIsR0FBRyxhQUFhLDZCQUE2QixnQ0FBZ0MsMEJBQTBCLHdCQUF3QixnQ0FBZ0MsaUNBQWlDLG9CQUFvQiwwQkFBMEIsS0FBSyxtQkFBbUIsMEJBQTBCLHdCQUF3QixnQ0FBZ0MsR0FBRyxrQkFBa0IsZ0JBQWdCLHdCQUF3QixHQUFHLFNBQVMsd0JBQXdCLCtCQUErQiwwQ0FBMEMsb0JBQW9CLEdBQUcsVUFBVSw4QkFBOEIsZ0NBQWdDLGtCQUFrQixHQUFHLGdCQUFnQixvQkFBb0IsR0FBRyxlQUFlLHdCQUF3QixtQ0FBbUMsdUJBQXVCLHdCQUF3QixHQUFHLHFCQUFxQix5QkFBeUIsY0FBYyxnQkFBZ0IsdUNBQXVDLGtCQUFrQixtQkFBbUIsNkJBQTZCLHlCQUF5Qiw2QkFBNkIseUNBQXlDLEdBQUcsY0FBYyxpQkFBaUIsR0FBRyxXQUFXLHlCQUF5QixHQUFHLG1CQUFtQixRQUFRLHNEQUFzRCxHQUFHLEdBQUcscUJBQXFCO0FBQzl4VztBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWxzLmNzcz80YjU2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBTZXQgdGhlIGZvbnQgYW5kIGNvbG9yIHNjaGVtZSBmb3IgdGhlIGVudGlyZSBwYWdlICovXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZmRjOTk7XFxuICB9XFxuICBcXG4gIC8qIFN0eWxlIHRoZSBoZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggNXB4O1xcbn1cXG5cXG5tYWlue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuLyogU3R5bGUgdGhlIHNlYXJjaCBiYXIgaW4gdGhlIGhlYWRlciAqL1xcbmhlYWRlciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIG1hcmdpbjogOHB4IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLm1haW4tdGl0bGV7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1haW4tbGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxufVxcbmxhYmVse1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuLnNlYXJjaEZvcm17XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnNlYXJjaC1pbnB1dHtcXG4gICAgaGVpZ2h0OiA3MCU7XFxufVxcbi53YWxsZXQtaW5mb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItY29sb3I6ICMzMzM7XFxuICAgIGJvcmRlci13aWR0aDogMTVweDtcXG59XFxuXFxuLnRva2VuLWluZm97XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIHBhZGRpbmc6IDMwcHggMzBweCAzMHB4IDMwcHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItY29sb3I6ICMzMzM7XFxuICAgIGJvcmRlci13aWR0aDogMTVweDtcXG59XFxuXFxuLmFkYS1pbmZve1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHggMzBweCAzMHB4O1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uaW5uZXJ7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xcbiAgICBib3JkZXItY29sb3I6ICAjODI4MGNhZTA7IFxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDVweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2E4ZTNiOGRiOyBcXG4gICAgY29sb3I6cmdiKDcxLCA2OCwgNjgpO1xcbn1cXG5cXG4vKiBTdHlsZSB0aGUgc29ydGluZyBiYXIgKi9cXG4uc29ydGluZy1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcbiAgICBib3JkZXItY29sb3I6ICMzMzM7XFxuICAgIGJvcmRlci13aWR0aDogNHB4O1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbntcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMDgsIDEwOCwgMjI0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OGNiOTE7IFxcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmhvbmV5ZGV3O1xcbn1cXG4vKiBTdHlsZSB0aGUgc29ydCBidXR0b25zICovXFxuLnNvcnQtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODAsIDIyNSwgMTgzKTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiByZ2IoNDcsIDYyLCA2NCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxufVxcblxcbi8qIEFkZCBhIGhvdmVyIGVmZmVjdCBmb3IgdGhlIHNvcnQgYnV0dG9ucyAqL1xcbi5zb3J0LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xcbn1cXG4ud2FsbGV0c3tcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgZGlzcGxheTogIGZsZXg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLndhbGxldEJ1dHRvbntcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMDgsIDEwOCwgMjI0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhNmU0OWU7IFxcbn1cXG5cXG4ud2FsbGV0QnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmhvbmV5ZGV3O1xcbn1cXG5cXG4udG9rZW4taW1ne1xcbiAgICB3aWR0aDogNyU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4ud2FsbGV0LWltZ3tcXG4gICAgd2lkdGg6IDUwcHg7XFxuXFxufVxcblxcbi5ib3gtdGl0bGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3Rze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDU4LCA1NSk7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlci13aWR0aDogNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNob3ctYXNzZXRzLWJ1dHRvbntcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDEwOCwgMTA4LCAyMjQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzViNzJkNjsgXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmdyaWQtaXRlbXtcXG4gICAgY29sb3I6IHJnYig0NywgNjIsIDY0KTtcXG4gICAgbWFyZ2luOiAxMHB4IDBweCAwcHggMjBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICAgIGJvcmRlci1jb2xvcjogICM2ZDZhYzllMDsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhNmU0OWU7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG4uZHJvcGRvd25Db250ZW50e1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDNweDtcXG4gICAgYm9yZGVyLWNvbG9yOiAgIzZhY2VkN2UwOyBcXG59XFxuXFxuLnRva2VuLXN1YmltZ3tcXG4gICAgd2lkdGg6IDUlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLm5mdHtcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICAgIGJvcmRlci1jb2xvcjogICM4MjgwY2FlMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOCwgNjUsIDIzOCk7XFxuXFxuICAgIGNvbG9yOndoaXRlO1xcbn1cXG5cXG4uY29pbntcXG4gICAgYm9yZGVyLWNvbG9yOiAgI2M2ODVjNTsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6I2RkYWRkMTsgXFxuICAgIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG4udG9rZW4tbGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLml0ZW0taW5mb3tcXG5cXG4gICAgZGlzcGxheTogaW5saW5lO1xcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAyMHB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmxvYWRpbmctc3ltYm9sIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDYlO1xcbiAgICBsZWZ0OiA4MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjY2NjO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci10b3AtY29sb3I6ICMzMzM7XFxuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi5tYWluLWltZ3tcXG4gICAgd2lkdGg6IDYwJTtcXG59XFxuLmltZy1kaXZ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuQGtleWZyYW1lcyBzcGluIHtcXG4xMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDM2MGRlZyk7XFxufVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHNEQUFzRDtBQUN0RDtJQUNJLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gseUJBQXlCO0VBQzNCOztFQUVBLHFCQUFxQjtBQUN2QjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBLHVDQUF1QztBQUN2QztJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixn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ZXNDb250ZW50XCI6W1wiLyogU2V0IHRoZSBmb250IGFuZCBjb2xvciBzY2hlbWUgZm9yIHRoZSBlbnRpcmUgcGFnZSAqL1xcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZkYzk5O1xcbiAgfVxcbiAgXFxuICAvKiBTdHlsZSB0aGUgaGVhZGVyICovXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcXG59XFxuXFxubWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcbi8qIFN0eWxlIHRoZSBzZWFyY2ggYmFyIGluIHRoZSBoZWFkZXIgKi9cXG5oZWFkZXIgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBtYXJnaW46IDhweCAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5tYWluLXRpdGxle1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tYWluLWxhYmVse1xcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcbn1cXG5sYWJlbHtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi5zZWFyY2hGb3Jte1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zZWFyY2gtaW5wdXR7XFxuICAgIGhlaWdodDogNzAlO1xcbn1cXG4ud2FsbGV0LWluZm97XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMzMzO1xcbiAgICBib3JkZXItd2lkdGg6IDE1cHg7XFxufVxcblxcbi50b2tlbi1pbmZve1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHggMzBweCAzMHB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMzMzO1xcbiAgICBib3JkZXItd2lkdGg6IDE1cHg7XFxufVxcblxcbi5hZGEtaW5mb3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgcGFkZGluZzogMzBweCAzMHB4IDMwcHggMzBweDtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmlubmVye1xcblxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcXG4gICAgYm9yZGVyLWNvbG9yOiAgIzgyODBjYWUwOyBcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNhOGUzYjhkYjsgXFxuICAgIGNvbG9yOnJnYig3MSwgNjgsIDY4KTtcXG59XFxuXFxuLyogU3R5bGUgdGhlIHNvcnRpbmcgYmFyICovXFxuLnNvcnRpbmctYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcXG4gICAgYm9yZGVyLWNvbG9yOiAjMzMzO1xcbiAgICBib3JkZXItd2lkdGg6IDRweDtcXG59XFxuXFxuLnNlYXJjaC1idXR0b257XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTA4LCAxMDgsIDIyNCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOThjYjkxOyBcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpob25leWRldztcXG59XFxuLyogU3R5bGUgdGhlIHNvcnQgYnV0dG9ucyAqL1xcbi5zb3J0LWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgwLCAyMjUsIDE4Myk7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogcmdiKDQ3LCA2MiwgNjQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xcbn1cXG5cXG4vKiBBZGQgYSBob3ZlciBlZmZlY3QgZm9yIHRoZSBzb3J0IGJ1dHRvbnMgKi9cXG4uc29ydC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcXG59XFxuLndhbGxldHN7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGRpc3BsYXk6ICBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi53YWxsZXRCdXR0b257XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTA4LCAxMDgsIDIyNCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTZlNDllOyBcXG59XFxuXFxuLndhbGxldEJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpob25leWRldztcXG59XFxuXFxuLnRva2VuLWltZ3tcXG4gICAgd2lkdGg6IDclO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLndhbGxldC1pbWd7XFxuICAgIHdpZHRoOiA1MHB4O1xcblxcbn1cXG5cXG4uYm94LXRpdGxle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0c3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU0LCA1OCwgNTUpO1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXItd2lkdGg6IDVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaG93LWFzc2V0cy1idXR0b257XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMDgsIDEwOCwgMjI0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YjcyZDY7IFxcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5ncmlkLWl0ZW17XFxuICAgIGNvbG9yOiByZ2IoNDcsIDYyLCA2NCk7XFxuICAgIG1hcmdpbjogMTBweCAwcHggMHB4IDIwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogNXB4O1xcbiAgICBib3JkZXItY29sb3I6ICAjNmQ2YWM5ZTA7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTZlNDllOyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuLmRyb3Bkb3duQ29udGVudHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxuICAgIGJvcmRlci1jb2xvcjogICM2YWNlZDdlMDsgXFxufVxcblxcbi50b2tlbi1zdWJpbWd7XFxuICAgIHdpZHRoOiA1JTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5uZnR7XFxuICAgIGJvcmRlci13aWR0aDogNXB4O1xcbiAgICBib3JkZXItY29sb3I6ICAjODI4MGNhZTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDgsIDY1LCAyMzgpO1xcblxcbiAgICBjb2xvcjp3aGl0ZTtcXG59XFxuXFxuLmNvaW57XFxuICAgIGJvcmRlci1jb2xvcjogICNjNjg1YzU7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkZGFkZDE7IFxcbiAgICBjb2xvcjogIzMzMztcXG59XFxuXFxuLnRva2VuLWxpc3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5pdGVtLWluZm97XFxuXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMjBweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5sb2FkaW5nLXN5bWJvbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA2JTtcXG4gICAgbGVmdDogODAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgI2NjYztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjMzMzO1xcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4ubWFpbi1pbWd7XFxuICAgIHdpZHRoOiA2MCU7XFxufVxcbi5pbWctZGl2e1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgzNjBkZWcpO1xcbn1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[2]!./styles/globals.css\n"));

/***/ })

});