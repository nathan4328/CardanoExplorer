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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Set the font and color scheme for the entire page */\\nbody {\\n    font-family: Arial, sans-serif;\\n    color: #333;\\n    background-color: #afdc99;\\n  }\\n  \\n  /* Style the header */\\nheader {\\n    display: flex;\\n    background-color: #333;\\n    color: #fff;\\n    padding: 5px 5px 5px 5px;\\n}\\n\\nmain{\\n    display: flex;\\n    color: #fff;\\n    padding: 20px;\\n}\\n/* Style the search bar in the header */\\nheader input[type=\\\"text\\\"] {\\n    width: 80%;\\n    padding: 12px 20px;\\n    margin: 8px 0;\\n    box-sizing: border-box;\\n    border: 2px solid #ccc;\\n    border-radius: 4px;\\n}\\n\\n.main-title{\\n    text-align: center;\\n}\\n.main-label{\\n    font-size: xx-large;\\n}\\nlabel{\\n    padding: 10px 10px 10px 10px;\\n    display: flex;\\n    align-items: center;\\n    font-weight: bold;\\n    font-size: large;\\n}\\n\\n.searchForm{\\n    padding: 10px 10px 10px 10px;\\n    width: 75%;\\n    text-align: center;\\n}\\n.search-input{\\n    height: 70%;\\n}\\n.wallet-info{\\n    display: flex;\\n    text-align: center;\\n    border-color: #333;\\n    border-width: 15px;\\n}\\n\\n.token-info{\\n    background-color: #333;\\n    padding: 30px 30px 30px 30px;\\n    width: 50%;\\n    text-align: center;\\n    color: white;\\n    border-color: #333;\\n    border-width: 15px;\\n}\\n\\n.ada-info{\\n    background-color: #333;\\n    padding: 30px 30px 30px 30px;\\n    width: 50%;\\n}\\n\\n.inner{\\n\\n    font-weight: bold;\\n    font-size: large;\\n    padding: 10px 10px 10px 10px;\\n    border-color:  #8280cae0; \\n    border-style: solid;\\n    border-width: 5px;\\n    justify-self: center;\\n    align-items: center;\\n    background-color:#a8e3b8db; \\n    color:rgb(71, 68, 68);\\n}\\n\\n/* Style the sorting bar */\\n.sorting-bar {\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n    background-color: #f4f4f4;\\n    border-bottom: 1px solid #ccc;\\n    border-color: #333;\\n    border-width: 4px;\\n}\\n\\n.search-button{\\n    height: 70%;\\n    border: 2px solid rgb(108, 108, 224);\\n    border-radius: 10%;\\n    margin: 10px 10px 10px 10px;\\n    background-color: #98cb91; \\n    color: black;\\n    font-size: large;\\n}\\n\\n.search-button:hover{\\n    background-color:honeydew;\\n}\\n/* Style the sort buttons */\\n.sort-button {\\n  display: inline-block;\\n  padding: 10px 20px;\\n  border: none;\\n  background-color: rgb(180, 225, 183);\\n  font-size: 14px;\\n  color: rgb(47, 62, 64);\\n  cursor: pointer;\\n  transition: background-color 0.2s;\\n}\\n\\n/* Add a hover effect for the sort buttons */\\n.sort-button:hover {\\n  background-color: #f4f4f4;\\n}\\n.wallets{\\n    width: 20%;\\n    display:  flex;\\n    text-align: center;\\n}\\n.walletButton{\\n    height: 70%;\\n    border: 2px solid rgb(108, 108, 224);\\n    border-radius: 10%;\\n    margin: 10px 10px 10px 10px;\\n    background-color: #a6e49e; \\n}\\n\\n.walletButton:hover{\\n    background-color:honeydew;\\n}\\n\\n.token-img{\\n    width: 7%;\\n    object-fit: cover;\\n}\\n\\n.wallet-img{\\n    width: 50px;\\n\\n}\\n\\n.box-title{\\n    display: flex;\\n    text-align: center;\\n}\\n\\n.projects{\\n    background-color: rgb(54, 58, 55);\\n    padding: 10px 10px 10px 10px;\\n    display: grid;\\n    border-width: 5px;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.show-assets-button{\\n    border: 2px solid rgb(108, 108, 224);\\n    border-radius: 10%;\\n    margin: 10px 10px 10px 10px;\\n    background-color: #8294e1; \\n    color: white;\\n}\\n.grid-item{\\n    color: rgb(47, 62, 64);\\n    margin: 10px 0px 0px 20px;\\n    border-style: solid;\\n    border-width: 5px;\\n    border-color:  #6d6ac9e0; \\n    background-color: #a6e49e; \\n    display: flex;\\n    align-items: center;\\n\\n}\\n\\n.dropdown-box{\\n    text-align: center;\\n    justify-content:end;\\n}\\n.dropdown-content{\\n    border-style: solid;\\n    border-width: 3px;\\n    border-color:  #285ec2e0; \\n    background-color: #a6b1e0;\\n    margin: 5px 5px 5px 5px;\\n    display: flex;\\n    width: 40%;\\n}\\n\\n.token-sub-img{\\n    width: 8%;\\n}\\n\\n.nft{\\n    border-width: 5px;\\n    border-color:  #483fe7e0;\\n    background-color: rgb(155, 132, 225);\\n    color:white;\\n}\\n\\n.coin{\\n    border-color:  #c685c5; \\n    background-color:#ddadd1; \\n    color: #333;\\n}\\n\\n.token-list{\\n    display: flex;\\n}\\n\\n.item-info{\\n\\n    display: inline;\\n    padding: 20px 20px 20px 20px;\\n    font-size: large;\\n    font-weight: bold;\\n}\\n\\n.loading-symbol {\\n    position: absolute;\\n    top: 6%;\\n    left: 80%;\\n    transform: translate(-50%, -50%);\\n    width: 30px;\\n    height: 30px;\\n    border: 5px solid #ccc;\\n    border-radius: 50%;\\n    border-top-color: #333;\\n    animation: spin 1s linear infinite;\\n}\\n\\n.main-img{\\n    width: 60%;\\n}\\n.img-div{\\n    text-align: center;\\n}\\n@keyframes spin {\\n100% {\\n    transform: translate(-50%, -50%) rotate(360deg);\\n}\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"/* Set the font and color scheme for the entire page */\\nbody {\\n    font-family: Arial, sans-serif;\\n    color: #333;\\n    background-color: #afdc99;\\n  }\\n  \\n  /* Style the header */\\nheader {\\n    display: flex;\\n    background-color: #333;\\n    color: #fff;\\n    padding: 5px 5px 5px 5px;\\n}\\n\\nmain{\\n    display: flex;\\n    color: #fff;\\n    padding: 20px;\\n}\\n/* Style the search bar in the header */\\nheader input[type=\\\"text\\\"] {\\n    width: 80%;\\n    padding: 12px 20px;\\n    margin: 8px 0;\\n    box-sizing: border-box;\\n    border: 2px solid #ccc;\\n    border-radius: 4px;\\n}\\n\\n.main-title{\\n    text-align: center;\\n}\\n.main-label{\\n    font-size: xx-large;\\n}\\nlabel{\\n    padding: 10px 10px 10px 10px;\\n    display: flex;\\n    align-items: center;\\n    font-weight: bold;\\n    font-size: large;\\n}\\n\\n.searchForm{\\n    padding: 10px 10px 10px 10px;\\n    width: 75%;\\n    text-align: center;\\n}\\n.search-input{\\n    height: 70%;\\n}\\n.wallet-info{\\n    display: flex;\\n    text-align: center;\\n    border-color: #333;\\n    border-width: 15px;\\n}\\n\\n.token-info{\\n    background-color: #333;\\n    padding: 30px 30px 30px 30px;\\n    width: 50%;\\n    text-align: center;\\n    color: white;\\n    border-color: #333;\\n    border-width: 15px;\\n}\\n\\n.ada-info{\\n    background-color: #333;\\n    padding: 30px 30px 30px 30px;\\n    width: 50%;\\n}\\n\\n.inner{\\n\\n    font-weight: bold;\\n    font-size: large;\\n    padding: 10px 10px 10px 10px;\\n    border-color:  #8280cae0; \\n    border-style: solid;\\n    border-width: 5px;\\n    justify-self: center;\\n    align-items: center;\\n    background-color:#a8e3b8db; \\n    color:rgb(71, 68, 68);\\n}\\n\\n/* Style the sorting bar */\\n.sorting-bar {\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n    background-color: #f4f4f4;\\n    border-bottom: 1px solid #ccc;\\n    border-color: #333;\\n    border-width: 4px;\\n}\\n\\n.search-button{\\n    height: 70%;\\n    border: 2px solid rgb(108, 108, 224);\\n    border-radius: 10%;\\n    margin: 10px 10px 10px 10px;\\n    background-color: #98cb91; \\n    color: black;\\n    font-size: large;\\n}\\n\\n.search-button:hover{\\n    background-color:honeydew;\\n}\\n/* Style the sort buttons */\\n.sort-button {\\n  display: inline-block;\\n  padding: 10px 20px;\\n  border: none;\\n  background-color: rgb(180, 225, 183);\\n  font-size: 14px;\\n  color: rgb(47, 62, 64);\\n  cursor: pointer;\\n  transition: background-color 0.2s;\\n}\\n\\n/* Add a hover effect for the sort buttons */\\n.sort-button:hover {\\n  background-color: #f4f4f4;\\n}\\n.wallets{\\n    width: 20%;\\n    display:  flex;\\n    text-align: center;\\n}\\n.walletButton{\\n    height: 70%;\\n    border: 2px solid rgb(108, 108, 224);\\n    border-radius: 10%;\\n    margin: 10px 10px 10px 10px;\\n    background-color: #a6e49e; \\n}\\n\\n.walletButton:hover{\\n    background-color:honeydew;\\n}\\n\\n.token-img{\\n    width: 7%;\\n    object-fit: cover;\\n}\\n\\n.wallet-img{\\n    width: 50px;\\n\\n}\\n\\n.box-title{\\n    display: flex;\\n    text-align: center;\\n}\\n\\n.projects{\\n    background-color: rgb(54, 58, 55);\\n    padding: 10px 10px 10px 10px;\\n    display: grid;\\n    border-width: 5px;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.show-assets-button{\\n    border: 2px solid rgb(108, 108, 224);\\n    border-radius: 10%;\\n    margin: 10px 10px 10px 10px;\\n    background-color: #8294e1; \\n    color: white;\\n}\\n.grid-item{\\n    color: rgb(47, 62, 64);\\n    margin: 10px 0px 0px 20px;\\n    border-style: solid;\\n    border-width: 5px;\\n    border-color:  #6d6ac9e0; \\n    background-color: #a6e49e; \\n    display: flex;\\n    align-items: center;\\n\\n}\\n\\n.dropdown-box{\\n    text-align: center;\\n    justify-content:end;\\n}\\n.dropdown-content{\\n    border-style: solid;\\n    border-width: 3px;\\n    border-color:  #285ec2e0; \\n    background-color: #a6b1e0;\\n    margin: 5px 5px 5px 5px;\\n    display: flex;\\n    width: 40%;\\n}\\n\\n.token-sub-img{\\n    width: 8%;\\n}\\n\\n.nft{\\n    border-width: 5px;\\n    border-color:  #483fe7e0;\\n    background-color: rgb(155, 132, 225);\\n    color:white;\\n}\\n\\n.coin{\\n    border-color:  #c685c5; \\n    background-color:#ddadd1; \\n    color: #333;\\n}\\n\\n.token-list{\\n    display: flex;\\n}\\n\\n.item-info{\\n\\n    display: inline;\\n    padding: 20px 20px 20px 20px;\\n    font-size: large;\\n    font-weight: bold;\\n}\\n\\n.loading-symbol {\\n    position: absolute;\\n    top: 6%;\\n    left: 80%;\\n    transform: translate(-50%, -50%);\\n    width: 30px;\\n    height: 30px;\\n    border: 5px solid #ccc;\\n    border-radius: 50%;\\n    border-top-color: #333;\\n    animation: spin 1s linear infinite;\\n}\\n\\n.main-img{\\n    width: 60%;\\n}\\n.img-div{\\n    text-align: center;\\n}\\n@keyframes spin {\\n100% {\\n    transform: translate(-50%, -50%) rotate(360deg);\\n}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbOV0udXNlWzJdIS4vc3R5bGVzL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ3dIO0FBQ3hILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSx5R0FBeUcscUNBQXFDLGtCQUFrQixnQ0FBZ0MsS0FBSyx3Q0FBd0Msb0JBQW9CLDZCQUE2QixrQkFBa0IsK0JBQStCLEdBQUcsU0FBUyxvQkFBb0Isa0JBQWtCLG9CQUFvQixHQUFHLHlFQUF5RSxpQkFBaUIseUJBQXlCLG9CQUFvQiw2QkFBNkIsNkJBQTZCLHlCQUF5QixHQUFHLGdCQUFnQix5QkFBeUIsR0FBRyxjQUFjLDBCQUEwQixHQUFHLFFBQVEsbUNBQW1DLG9CQUFvQiwwQkFBMEIsd0JBQXdCLHVCQUF1QixHQUFHLGdCQUFnQixtQ0FBbUMsaUJBQWlCLHlCQUF5QixHQUFHLGdCQUFnQixrQkFBa0IsR0FBRyxlQUFlLG9CQUFvQix5QkFBeUIseUJBQXlCLHlCQUF5QixHQUFHLGdCQUFnQiw2QkFBNkIsbUNBQW1DLGlCQUFpQix5QkFBeUIsbUJBQW1CLHlCQUF5Qix5QkFBeUIsR0FBRyxjQUFjLDZCQUE2QixtQ0FBbUMsaUJBQWlCLEdBQUcsV0FBVywwQkFBMEIsdUJBQXVCLG1DQUFtQyxnQ0FBZ0MsMEJBQTBCLHdCQUF3QiwyQkFBMkIsMEJBQTBCLGtDQUFrQyw0QkFBNEIsR0FBRywrQ0FBK0Msb0JBQW9CLDBCQUEwQixxQ0FBcUMsZ0NBQWdDLG9DQUFvQyx5QkFBeUIsd0JBQXdCLEdBQUcsbUJBQW1CLGtCQUFrQiwyQ0FBMkMseUJBQXlCLGtDQUFrQyxpQ0FBaUMsbUJBQW1CLHVCQUF1QixHQUFHLHlCQUF5QixnQ0FBZ0MsR0FBRyw4Q0FBOEMsMEJBQTBCLHVCQUF1QixpQkFBaUIseUNBQXlDLG9CQUFvQiwyQkFBMkIsb0JBQW9CLHNDQUFzQyxHQUFHLHVFQUF1RSw4QkFBOEIsR0FBRyxXQUFXLGlCQUFpQixxQkFBcUIseUJBQXlCLEdBQUcsZ0JBQWdCLGtCQUFrQiwyQ0FBMkMseUJBQXlCLGtDQUFrQyxpQ0FBaUMsR0FBRyx3QkFBd0IsZ0NBQWdDLEdBQUcsZUFBZSxnQkFBZ0Isd0JBQXdCLEdBQUcsZ0JBQWdCLGtCQUFrQixLQUFLLGVBQWUsb0JBQW9CLHlCQUF5QixHQUFHLGNBQWMsd0NBQXdDLG1DQUFtQyxvQkFBb0Isd0JBQXdCLDhCQUE4QiwwQkFBMEIsR0FBRyx3QkFBd0IsMkNBQTJDLHlCQUF5QixrQ0FBa0MsaUNBQWlDLG1CQUFtQixHQUFHLGFBQWEsNkJBQTZCLGdDQUFnQywwQkFBMEIsd0JBQXdCLGdDQUFnQyxpQ0FBaUMsb0JBQW9CLDBCQUEwQixLQUFLLGtCQUFrQix5QkFBeUIsMEJBQTBCLEdBQUcsb0JBQW9CLDBCQUEwQix3QkFBd0IsZ0NBQWdDLGdDQUFnQyw4QkFBOEIsb0JBQW9CLGlCQUFpQixHQUFHLG1CQUFtQixnQkFBZ0IsR0FBRyxTQUFTLHdCQUF3QiwrQkFBK0IsMkNBQTJDLGtCQUFrQixHQUFHLFVBQVUsOEJBQThCLGdDQUFnQyxrQkFBa0IsR0FBRyxnQkFBZ0Isb0JBQW9CLEdBQUcsZUFBZSx3QkFBd0IsbUNBQW1DLHVCQUF1Qix3QkFBd0IsR0FBRyxxQkFBcUIseUJBQXlCLGNBQWMsZ0JBQWdCLHVDQUF1QyxrQkFBa0IsbUJBQW1CLDZCQUE2Qix5QkFBeUIsNkJBQTZCLHlDQUF5QyxHQUFHLGNBQWMsaUJBQWlCLEdBQUcsV0FBVyx5QkFBeUIsR0FBRyxtQkFBbUIsUUFBUSxzREFBc0QsR0FBRyxHQUFHLFNBQVMsMEZBQTBGLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLHdGQUF3RixxQ0FBcUMsa0JBQWtCLGdDQUFnQyxLQUFLLHdDQUF3QyxvQkFBb0IsNkJBQTZCLGtCQUFrQiwrQkFBK0IsR0FBRyxTQUFTLG9CQUFvQixrQkFBa0Isb0JBQW9CLEdBQUcseUVBQXlFLGlCQUFpQix5QkFBeUIsb0JBQW9CLDZCQUE2Qiw2QkFBNkIseUJBQXlCLEdBQUcsZ0JBQWdCLHlCQUF5QixHQUFHLGNBQWMsMEJBQTBCLEdBQUcsUUFBUSxtQ0FBbUMsb0JBQW9CLDBCQUEwQix3QkFBd0IsdUJBQXVCLEdBQUcsZ0JBQWdCLG1DQUFtQyxpQkFBaUIseUJBQXlCLEdBQUcsZ0JBQWdCLGtCQUFrQixHQUFHLGVBQWUsb0JBQW9CLHlCQUF5Qix5QkFBeUIseUJBQXlCLEdBQUcsZ0JBQWdCLDZCQUE2QixtQ0FBbUMsaUJBQWlCLHlCQUF5QixtQkFBbUIseUJBQXlCLHlCQUF5QixHQUFHLGNBQWMsNkJBQTZCLG1DQUFtQyxpQkFBaUIsR0FBRyxXQUFXLDBCQUEwQix1QkFBdUIsbUNBQW1DLGdDQUFnQywwQkFBMEIsd0JBQXdCLDJCQUEyQiwwQkFBMEIsa0NBQWtDLDRCQUE0QixHQUFHLCtDQUErQyxvQkFBb0IsMEJBQTBCLHFDQUFxQyxnQ0FBZ0Msb0NBQW9DLHlCQUF5Qix3QkFBd0IsR0FBRyxtQkFBbUIsa0JBQWtCLDJDQUEyQyx5QkFBeUIsa0NBQWtDLGlDQUFpQyxtQkFBbUIsdUJBQXVCLEdBQUcseUJBQXlCLGdDQUFnQyxHQUFHLDhDQUE4QywwQkFBMEIsdUJBQXVCLGlCQUFpQix5Q0FBeUMsb0JBQW9CLDJCQUEyQixvQkFBb0Isc0NBQXNDLEdBQUcsdUVBQXVFLDhCQUE4QixHQUFHLFdBQVcsaUJBQWlCLHFCQUFxQix5QkFBeUIsR0FBRyxnQkFBZ0Isa0JBQWtCLDJDQUEyQyx5QkFBeUIsa0NBQWtDLGlDQUFpQyxHQUFHLHdCQUF3QixnQ0FBZ0MsR0FBRyxlQUFlLGdCQUFnQix3QkFBd0IsR0FBRyxnQkFBZ0Isa0JBQWtCLEtBQUssZUFBZSxvQkFBb0IseUJBQXlCLEdBQUcsY0FBYyx3Q0FBd0MsbUNBQW1DLG9CQUFvQix3QkFBd0IsOEJBQThCLDBCQUEwQixHQUFHLHdCQUF3QiwyQ0FBMkMseUJBQXlCLGtDQUFrQyxpQ0FBaUMsbUJBQW1CLEdBQUcsYUFBYSw2QkFBNkIsZ0NBQWdDLDBCQUEwQix3QkFBd0IsZ0NBQWdDLGlDQUFpQyxvQkFBb0IsMEJBQTBCLEtBQUssa0JBQWtCLHlCQUF5QiwwQkFBMEIsR0FBRyxvQkFBb0IsMEJBQTBCLHdCQUF3QixnQ0FBZ0MsZ0NBQWdDLDhCQUE4QixvQkFBb0IsaUJBQWlCLEdBQUcsbUJBQW1CLGdCQUFnQixHQUFHLFNBQVMsd0JBQXdCLCtCQUErQiwyQ0FBMkMsa0JBQWtCLEdBQUcsVUFBVSw4QkFBOEIsZ0NBQWdDLGtCQUFrQixHQUFHLGdCQUFnQixvQkFBb0IsR0FBRyxlQUFlLHdCQUF3QixtQ0FBbUMsdUJBQXVCLHdCQUF3QixHQUFHLHFCQUFxQix5QkFBeUIsY0FBYyxnQkFBZ0IsdUNBQXVDLGtCQUFrQixtQkFBbUIsNkJBQTZCLHlCQUF5Qiw2QkFBNkIseUNBQXlDLEdBQUcsY0FBYyxpQkFBaUIsR0FBRyxXQUFXLHlCQUF5QixHQUFHLG1CQUFtQixRQUFRLHNEQUFzRCxHQUFHLEdBQUcscUJBQXFCO0FBQzNvWDtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWxzLmNzcz80YjU2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBTZXQgdGhlIGZvbnQgYW5kIGNvbG9yIHNjaGVtZSBmb3IgdGhlIGVudGlyZSBwYWdlICovXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZmRjOTk7XFxuICB9XFxuICBcXG4gIC8qIFN0eWxlIHRoZSBoZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggNXB4O1xcbn1cXG5cXG5tYWlue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuLyogU3R5bGUgdGhlIHNlYXJjaCBiYXIgaW4gdGhlIGhlYWRlciAqL1xcbmhlYWRlciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIG1hcmdpbjogOHB4IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLm1haW4tdGl0bGV7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1haW4tbGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxufVxcbmxhYmVse1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuLnNlYXJjaEZvcm17XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnNlYXJjaC1pbnB1dHtcXG4gICAgaGVpZ2h0OiA3MCU7XFxufVxcbi53YWxsZXQtaW5mb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItY29sb3I6ICMzMzM7XFxuICAgIGJvcmRlci13aWR0aDogMTVweDtcXG59XFxuXFxuLnRva2VuLWluZm97XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIHBhZGRpbmc6IDMwcHggMzBweCAzMHB4IDMwcHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItY29sb3I6ICMzMzM7XFxuICAgIGJvcmRlci13aWR0aDogMTVweDtcXG59XFxuXFxuLmFkYS1pbmZve1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHggMzBweCAzMHB4O1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uaW5uZXJ7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xcbiAgICBib3JkZXItY29sb3I6ICAjODI4MGNhZTA7IFxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDVweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2E4ZTNiOGRiOyBcXG4gICAgY29sb3I6cmdiKDcxLCA2OCwgNjgpO1xcbn1cXG5cXG4vKiBTdHlsZSB0aGUgc29ydGluZyBiYXIgKi9cXG4uc29ydGluZy1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcbiAgICBib3JkZXItY29sb3I6ICMzMzM7XFxuICAgIGJvcmRlci13aWR0aDogNHB4O1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbntcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMDgsIDEwOCwgMjI0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OGNiOTE7IFxcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmhvbmV5ZGV3O1xcbn1cXG4vKiBTdHlsZSB0aGUgc29ydCBidXR0b25zICovXFxuLnNvcnQtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODAsIDIyNSwgMTgzKTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiByZ2IoNDcsIDYyLCA2NCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxufVxcblxcbi8qIEFkZCBhIGhvdmVyIGVmZmVjdCBmb3IgdGhlIHNvcnQgYnV0dG9ucyAqL1xcbi5zb3J0LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xcbn1cXG4ud2FsbGV0c3tcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgZGlzcGxheTogIGZsZXg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLndhbGxldEJ1dHRvbntcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMDgsIDEwOCwgMjI0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhNmU0OWU7IFxcbn1cXG5cXG4ud2FsbGV0QnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmhvbmV5ZGV3O1xcbn1cXG5cXG4udG9rZW4taW1ne1xcbiAgICB3aWR0aDogNyU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4ud2FsbGV0LWltZ3tcXG4gICAgd2lkdGg6IDUwcHg7XFxuXFxufVxcblxcbi5ib3gtdGl0bGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3Rze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDU4LCA1NSk7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlci13aWR0aDogNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNob3ctYXNzZXRzLWJ1dHRvbntcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDEwOCwgMTA4LCAyMjQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgyOTRlMTsgXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmdyaWQtaXRlbXtcXG4gICAgY29sb3I6IHJnYig0NywgNjIsIDY0KTtcXG4gICAgbWFyZ2luOiAxMHB4IDBweCAwcHggMjBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICAgIGJvcmRlci1jb2xvcjogICM2ZDZhYzllMDsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhNmU0OWU7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4uZHJvcGRvd24tYm94e1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDplbmQ7XFxufVxcbi5kcm9wZG93bi1jb250ZW50e1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDNweDtcXG4gICAgYm9yZGVyLWNvbG9yOiAgIzI4NWVjMmUwOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E2YjFlMDtcXG4gICAgbWFyZ2luOiA1cHggNXB4IDVweCA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA0MCU7XFxufVxcblxcbi50b2tlbi1zdWItaW1ne1xcbiAgICB3aWR0aDogOCU7XFxufVxcblxcbi5uZnR7XFxuICAgIGJvcmRlci13aWR0aDogNXB4O1xcbiAgICBib3JkZXItY29sb3I6ICAjNDgzZmU3ZTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTUsIDEzMiwgMjI1KTtcXG4gICAgY29sb3I6d2hpdGU7XFxufVxcblxcbi5jb2lue1xcbiAgICBib3JkZXItY29sb3I6ICAjYzY4NWM1OyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZGRhZGQxOyBcXG4gICAgY29sb3I6ICMzMzM7XFxufVxcblxcbi50b2tlbi1saXN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaXRlbS1pbmZve1xcblxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubG9hZGluZy1zeW1ib2wge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNiU7XFxuICAgIGxlZnQ6IDgwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzMzMztcXG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLm1haW4taW1ne1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG4uaW1nLWRpdntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbjEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMzYwZGVnKTtcXG59XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvZ2xvYmFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsc0RBQXNEO0FBQ3REO0lBQ0ksOEJBQThCO0lBQzlCLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0I7O0VBRUEscUJBQXFCO0FBQ3ZCO0lBQ0ksYUFBYTtJ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QVc7QUFDZjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0FBQ0E7SUFDSSwrQ0FBK0M7QUFDbkQ7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBTZXQgdGhlIGZvbnQgYW5kIGNvbG9yIHNjaGVtZSBmb3IgdGhlIGVudGlyZSBwYWdlICovXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZmRjOTk7XFxuICB9XFxuICBcXG4gIC8qIFN0eWxlIHRoZSBoZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggNXB4O1xcbn1cXG5cXG5tYWlue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuLyogU3R5bGUgdGhlIHNlYXJjaCBiYXIgaW4gdGhlIGhlYWRlciAqL1xcbmhlYWRlciBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIG1hcmdpbjogOHB4IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLm1haW4tdGl0bGV7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1haW4tbGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxufVxcbmxhYmVse1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuLnNlYXJjaEZvcm17XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnNlYXJjaC1pbnB1dHtcXG4gICAgaGVpZ2h0OiA3MCU7XFxufVxcbi53YWxsZXQtaW5mb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItY29sb3I6ICMzMzM7XFxuICAgIGJvcmRlci13aWR0aDogMTVweDtcXG59XFxuXFxuLnRva2VuLWluZm97XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIHBhZGRpbmc6IDMwcHggMzBweCAzMHB4IDMwcHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItY29sb3I6ICMzMzM7XFxuICAgIGJvcmRlci13aWR0aDogMTVweDtcXG59XFxuXFxuLmFkYS1pbmZve1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHggMzBweCAzMHB4O1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uaW5uZXJ7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xcbiAgICBib3JkZXItY29sb3I6ICAjODI4MGNhZTA7IFxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDVweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2E4ZTNiOGRiOyBcXG4gICAgY29sb3I6cmdiKDcxLCA2OCwgNjgpO1xcbn1cXG5cXG4vKiBTdHlsZSB0aGUgc29ydGluZyBiYXIgKi9cXG4uc29ydGluZy1iYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcbiAgICBib3JkZXItY29sb3I6ICMzMzM7XFxuICAgIGJvcmRlci13aWR0aDogNHB4O1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbntcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMDgsIDEwOCwgMjI0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OGNiOTE7IFxcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmhvbmV5ZGV3O1xcbn1cXG4vKiBTdHlsZSB0aGUgc29ydCBidXR0b25zICovXFxuLnNvcnQtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODAsIDIyNSwgMTgzKTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiByZ2IoNDcsIDYyLCA2NCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxufVxcblxcbi8qIEFkZCBhIGhvdmVyIGVmZmVjdCBmb3IgdGhlIHNvcnQgYnV0dG9ucyAqL1xcbi5zb3J0LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xcbn1cXG4ud2FsbGV0c3tcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgZGlzcGxheTogIGZsZXg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLndhbGxldEJ1dHRvbntcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMDgsIDEwOCwgMjI0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhNmU0OWU7IFxcbn1cXG5cXG4ud2FsbGV0QnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmhvbmV5ZGV3O1xcbn1cXG5cXG4udG9rZW4taW1ne1xcbiAgICB3aWR0aDogNyU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4ud2FsbGV0LWltZ3tcXG4gICAgd2lkdGg6IDUwcHg7XFxuXFxufVxcblxcbi5ib3gtdGl0bGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3Rze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDU4LCA1NSk7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlci13aWR0aDogNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNob3ctYXNzZXRzLWJ1dHRvbntcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDEwOCwgMTA4LCAyMjQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgyOTRlMTsgXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmdyaWQtaXRlbXtcXG4gICAgY29sb3I6IHJnYig0NywgNjIsIDY0KTtcXG4gICAgbWFyZ2luOiAxMHB4IDBweCAwcHggMjBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICAgIGJvcmRlci1jb2xvcjogICM2ZDZhYzllMDsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhNmU0OWU7IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4uZHJvcGRvd24tYm94e1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDplbmQ7XFxufVxcbi5kcm9wZG93bi1jb250ZW50e1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDNweDtcXG4gICAgYm9yZGVyLWNvbG9yOiAgIzI4NWVjMmUwOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E2YjFlMDtcXG4gICAgbWFyZ2luOiA1cHggNXB4IDVweCA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA0MCU7XFxufVxcblxcbi50b2tlbi1zdWItaW1ne1xcbiAgICB3aWR0aDogOCU7XFxufVxcblxcbi5uZnR7XFxuICAgIGJvcmRlci13aWR0aDogNXB4O1xcbiAgICBib3JkZXItY29sb3I6ICAjNDgzZmU3ZTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTUsIDEzMiwgMjI1KTtcXG4gICAgY29sb3I6d2hpdGU7XFxufVxcblxcbi5jb2lue1xcbiAgICBib3JkZXItY29sb3I6ICAjYzY4NWM1OyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZGRhZGQxOyBcXG4gICAgY29sb3I6ICMzMzM7XFxufVxcblxcbi50b2tlbi1saXN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaXRlbS1pbmZve1xcblxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubG9hZGluZy1zeW1ib2wge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNiU7XFxuICAgIGxlZnQ6IDgwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzMzMztcXG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLm1haW4taW1ne1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG4uaW1nLWRpdntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbjEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMzYwZGVnKTtcXG59XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[2]!./styles/globals.css\n"));

/***/ })

});