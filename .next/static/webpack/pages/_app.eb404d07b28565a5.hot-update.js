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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Set the font and color scheme for the entire page */\\nbody {\\n    font-family: Arial, sans-serif;\\n    color: #333;\\n    background-color: #afdc99;\\n  }\\n  \\n  /* Style the header */\\nheader {\\n    display: flex;\\n    background-color: #333;\\n    color: #fff;\\n    padding: 5px 5px 5px 5px;\\n}\\n\\nmain{\\n    display: flex;\\n    color: #fff;\\n    padding: 20px;\\n}\\n/* Style the search bar in the header */\\nheader input[type=\\\"text\\\"] {\\n    width: 80%;\\n    padding: 12px 20px;\\n    margin: 8px 0;\\n    box-sizing: border-box;\\n    border: 2px solid #ccc;\\n    border-radius: 4px;\\n}\\n\\n.main-title{\\n    text-align: center;\\n}\\n.main-label{\\n    font-size: xx-large;\\n}\\nlabel{\\n    padding: 10px 10px 10px 10px;\\n    display: flex;\\n    align-items: center;\\n    font-weight: bold;\\n    font-size: large;\\n}\\n\\n.searchForm{\\n    padding: 10px 10px 10px 10px;\\n    width: 75%;\\n    text-align: center;\\n}\\n.search-input{\\n    height: 70%;\\n}\\n.wallet-info{\\n    display: flex;\\n    text-align: center;\\n    border-color: #333;\\n    border-width: 15px;\\n}\\n\\n.token-info{\\n    background-color: #333;\\n    padding: 30px 30px 30px 30px;\\n    width: 50%;\\n    text-align: center;\\n    color: white;\\n    border-color: #333;\\n    border-width: 15px;\\n}\\n\\n.ada-info{\\n    background-color: #333;\\n    padding: 30px 30px 30px 30px;\\n    width: 50%;\\n}\\n\\n.inner{\\n\\n    font-weight: bold;\\n    font-size: large;\\n    padding: 10px 10px 10px 10px;\\n    border-color:  #8280cae0; \\n    border-style: solid;\\n    border-width: 5px;\\n    justify-self: center;\\n    align-items: center;\\n    background-color:#a8e3b8db; \\n    color:rgb(71, 68, 68);\\n}\\n\\n/* Style the sorting bar */\\n.sorting-bar {\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n    background-color: #f4f4f4;\\n    border-bottom: 1px solid #ccc;\\n    border-color: #333;\\n    border-width: 4px;\\n}\\n\\n.search-button{\\n    height: 70%;\\n    border: 2px solid rgb(108, 108, 224);\\n    border-radius: 10%;\\n    margin: 10px 10px 10px 10px;\\n    background-color: #98cb91; \\n    color: black;\\n    font-size: large;\\n}\\n\\n.search-button:hover{\\n    background-color:honeydew;\\n}\\n/* Style the sort buttons */\\n.sort-button {\\n  display: inline-block;\\n  padding: 10px 20px;\\n  border: none;\\n  background-color: rgb(180, 225, 183);\\n  font-size: 14px;\\n  color: rgb(47, 62, 64);\\n  cursor: pointer;\\n  transition: background-color 0.2s;\\n}\\n\\n/* Add a hover effect for the sort buttons */\\n.sort-button:hover {\\n  background-color: #f4f4f4;\\n}\\n.wallets{\\n    width: 20%;\\n    display:  flex;\\n    text-align: center;\\n}\\n.walletButton{\\n    height: 70%;\\n    border: 2px solid rgb(108, 108, 224);\\n    border-radius: 10%;\\n    margin: 10px 10px 10px 10px;\\n    background-color: #a6e49e; \\n}\\n\\n.walletButton:hover{\\n    background-color:honeydew;\\n}\\n\\n.token-img{\\n    width: 7%;\\n    object-fit: cover;\\n}\\n\\n.wallet-img{\\n    width: 50px;\\n\\n}\\n\\n.box-title{\\n    display: flex;\\n    text-align: center;\\n}\\n\\n.projects{\\n    background-color: rgb(54, 58, 55);\\n    padding: 10px 10px 10px 10px;\\n    display: grid;\\n    border-width: 5px;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.show-assets-button{\\n    border: 2px solid rgb(108, 108, 224);\\n    border-radius: 10%;\\n    margin: 10px 10px 10px 10px;\\n    background-color: #8294e1; \\n    color: white;\\n}\\n.grid-item{\\n    color: rgb(47, 62, 64);\\n    margin: 10px 0px 0px 20px;\\n    border-style: solid;\\n    border-width: 5px;\\n    border-color:  #6d6ac9e0; \\n    background-color: #a6e49e; \\n    display: flex;\\n    align-items: center;\\n\\n}\\n.dropdownContent{\\n    border-style: solid;\\n    border-width: 3px;\\n    border-color:  #285ec2e0; \\n    background-color: #8294e1;\\n}\\n\\n.token-subimg{\\n    width: 5%;\\n    object-fit: cover;\\n}\\n\\n.nft{\\n    border-width: 5px;\\n    border-color:  #8280cae0;\\n    background-color: rgb(108, 65, 238);\\n    color:white;\\n}\\n\\n.coin{\\n    border-color:  #c685c5; \\n    background-color:#ddadd1; \\n    color: #333;\\n}\\n\\n.token-list{\\n    display: flex;\\n}\\n\\n.item-info{\\n\\n    display: inline;\\n    padding: 20px 20px 20px 20px;\\n    font-size: large;\\n    font-weight: bold;\\n}\\n\\n.loading-symbol {\\n    position: absolute;\\n    top: 6%;\\n    left: 80%;\\n    transform: translate(-50%, -50%);\\n    width: 30px;\\n    height: 30px;\\n    border: 5px solid #ccc;\\n    border-radius: 50%;\\n    border-top-color: #333;\\n    animation: spin 1s linear infinite;\\n}\\n\\n.main-img{\\n    width: 60%;\\n}\\n.img-div{\\n    text-align: center;\\n}\\n@keyframes spin {\\n100% {\\n    transform: translate(-50%, -50%) rotate(360deg);\\n}\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"/* Set the font and color scheme for the entire page */\\nbody {\\n    font-family: Arial, sans-serif;\\n    color: #333;\\n    background-color: #afdc99;\\n  }\\n  \\n  /* Style the header */\\nheader {\\n    display: flex;\\n    background-color: #333;\\n    color: #fff;\\n    padding: 5px 5px 5px 5px;\\n}\\n\\nmain{\\n    display: flex;\\n    color: #fff;\\n    padding: 20px;\\n}\\n/* Style the search bar in the header */\\nheader input[type=\\\"text\\\"] {\\n    width: 80%;\\n    padding: 12px 20px;\\n    margin: 8px 0;\\n    box-sizing: border-box;\\n    border: 2px solid #ccc;\\n    border-radius: 4px;\\n}\\n\\n.main-title{\\n    text-align: center;\\n}\\n.main-label{\\n    font-size: xx-large;\\n}\\nlabel{\\n    padding: 10px 10px 10px 10px;\\n    display: flex;\\n    align-items: center;\\n    font-weight: bold;\\n    font-size: large;\\n}\\n\\n.searchForm{\\n    padding: 10px 10px 10px 10px;\\n    width: 75%;\\n    text-align: center;\\n}\\n.search-input{\\n    height: 70%;\\n}\\n.wallet-info{\\n    display: flex;\\n    text-align: center;\\n    border-color: #333;\\n    border-width: 15px;\\n}\\n\\n.token-info{\\n    background-color: #333;\\n    padding: 30px 30px 30px 30px;\\n    width: 50%;\\n    text-align: center;\\n    color: white;\\n    border-color: #333;\\n    border-width: 15px;\\n}\\n\\n.ada-info{\\n    background-color: #333;\\n    padding: 30px 30px 30px 30px;\\n    width: 50%;\\n}\\n\\n.inner{\\n\\n    font-weight: bold;\\n    font-size: large;\\n    padding: 10px 10px 10px 10px;\\n    border-color:  #8280cae0; \\n    border-style: solid;\\n    border-width: 5px;\\n    justify-self: center;\\n    align-items: center;\\n    background-color:#a8e3b8db; \\n    color:rgb(71, 68, 68);\\n}\\n\\n/* Style the sorting bar */\\n.sorting-bar {\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n    background-color: #f4f4f4;\\n    border-bottom: 1px solid #ccc;\\n    border-color: #333;\\n    border-width: 4px;\\n}\\n\\n.search-button{\\n    height: 70%;\\n    border: 2px solid rgb(108, 108, 224);\\n    border-radius: 10%;\\n    margin: 10px 10px 10px 10px;\\n    background-color: #98cb91; \\n    color: black;\\n    font-size: large;\\n}\\n\\n.search-button:hover{\\n    background-color:honeydew;\\n}\\n/* Style the sort buttons */\\n.sort-button {\\n  display: inline-block;\\n  padding: 10px 20px;\\n  border: none;\\n  background-color: rgb(180, 225, 183);\\n  font-size: 14px;\\n  color: rgb(47, 62, 64);\\n  cursor: pointer;\\n  transition: background-color 0.2s;\\n}\\n\\n/* Add a hover effect for the sort buttons */\\n.sort-button:hover {\\n  background-color: #f4f4f4;\\n}\\n.wallets{\\n    width: 20%;\\n    display:  flex;\\n    text-align: center;\\n}\\n.walletButton{\\n    height: 70%;\\n    border: 2px solid rgb(108, 108, 224);\\n    border-radius: 10%;\\n    margin: 10px 10px 10px 10px;\\n    background-color: #a6e49e; \\n}\\n\\n.walletButton:hover{\\n    background-color:honeydew;\\n}\\n\\n.token-img{\\n    width: 7%;\\n    object-fit: cover;\\n}\\n\\n.wallet-img{\\n    width: 50px;\\n\\n}\\n\\n.box-title{\\n    display: flex;\\n    text-align: center;\\n}\\n\\n.projects{\\n    background-color: rgb(54, 58, 55);\\n    padding: 10px 10px 10px 10px;\\n    display: grid;\\n    border-width: 5px;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.show-assets-button{\\n    border: 2px solid rgb(108, 108, 224);\\n    border-radius: 10%;\\n    margin: 10px 10px 10px 10px;\\n    background-color: #8294e1; \\n    color: white;\\n}\\n.grid-item{\\n    color: rgb(47, 62, 64);\\n    margin: 10px 0px 0px 20px;\\n    border-style: solid;\\n    border-width: 5px;\\n    border-color:  #6d6ac9e0; \\n    background-color: #a6e49e; \\n    display: flex;\\n    align-items: center;\\n\\n}\\n.dropdownContent{\\n    border-style: solid;\\n    border-width: 3px;\\n    border-color:  #285ec2e0; \\n    background-color: #8294e1;\\n}\\n\\n.token-subimg{\\n    width: 5%;\\n    object-fit: cover;\\n}\\n\\n.nft{\\n    border-width: 5px;\\n    border-color:  #8280cae0;\\n    background-color: rgb(108, 65, 238);\\n    color:white;\\n}\\n\\n.coin{\\n    border-color:  #c685c5; \\n    background-color:#ddadd1; \\n    color: #333;\\n}\\n\\n.token-list{\\n    display: flex;\\n}\\n\\n.item-info{\\n\\n    display: inline;\\n    padding: 20px 20px 20px 20px;\\n    font-size: large;\\n    font-weight: bold;\\n}\\n\\n.loading-symbol {\\n    position: absolute;\\n    top: 6%;\\n    left: 80%;\\n    transform: translate(-50%, -50%);\\n    width: 30px;\\n    height: 30px;\\n    border: 5px solid #ccc;\\n    border-radius: 50%;\\n    border-top-color: #333;\\n    animation: spin 1s linear infinite;\\n}\\n\\n.main-img{\\n    width: 60%;\\n}\\n.img-div{\\n    text-align: center;\\n}\\n@keyframes spin {\\n100% {\\n    transform: translate(-50%, -50%) rotate(360deg);\\n}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbOV0udXNlWzJdIS4vc3R5bGVzL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ3dIO0FBQ3hILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSx5R0FBeUcscUNBQXFDLGtCQUFrQixnQ0FBZ0MsS0FBSyx3Q0FBd0Msb0JBQW9CLDZCQUE2QixrQkFBa0IsK0JBQStCLEdBQUcsU0FBUyxvQkFBb0Isa0JBQWtCLG9CQUFvQixHQUFHLHlFQUF5RSxpQkFBaUIseUJBQXlCLG9CQUFvQiw2QkFBNkIsNkJBQTZCLHlCQUF5QixHQUFHLGdCQUFnQix5QkFBeUIsR0FBRyxjQUFjLDBCQUEwQixHQUFHLFFBQVEsbUNBQW1DLG9CQUFvQiwwQkFBMEIsd0JBQXdCLHVCQUF1QixHQUFHLGdCQUFnQixtQ0FBbUMsaUJBQWlCLHlCQUF5QixHQUFHLGdCQUFnQixrQkFBa0IsR0FBRyxlQUFlLG9CQUFvQix5QkFBeUIseUJBQXlCLHlCQUF5QixHQUFHLGdCQUFnQiw2QkFBNkIsbUNBQW1DLGlCQUFpQix5QkFBeUIsbUJBQW1CLHlCQUF5Qix5QkFBeUIsR0FBRyxjQUFjLDZCQUE2QixtQ0FBbUMsaUJBQWlCLEdBQUcsV0FBVywwQkFBMEIsdUJBQXVCLG1DQUFtQyxnQ0FBZ0MsMEJBQTBCLHdCQUF3QiwyQkFBMkIsMEJBQTBCLGtDQUFrQyw0QkFBNEIsR0FBRywrQ0FBK0Msb0JBQW9CLDBCQUEwQixxQ0FBcUMsZ0NBQWdDLG9DQUFvQyx5QkFBeUIsd0JBQXdCLEdBQUcsbUJBQW1CLGtCQUFrQiwyQ0FBMkMseUJBQXlCLGtDQUFrQyxpQ0FBaUMsbUJBQW1CLHVCQUF1QixHQUFHLHlCQUF5QixnQ0FBZ0MsR0FBRyw4Q0FBOEMsMEJBQTBCLHVCQUF1QixpQkFBaUIseUNBQXlDLG9CQUFvQiwyQkFBMkIsb0JBQW9CLHNDQUFzQyxHQUFHLHVFQUF1RSw4QkFBOEIsR0FBRyxXQUFXLGlCQUFpQixxQkFBcUIseUJBQXlCLEdBQUcsZ0JBQWdCLGtCQUFrQiwyQ0FBMkMseUJBQXlCLGtDQUFrQyxpQ0FBaUMsR0FBRyx3QkFBd0IsZ0NBQWdDLEdBQUcsZUFBZSxnQkFBZ0Isd0JBQXdCLEdBQUcsZ0JBQWdCLGtCQUFrQixLQUFLLGVBQWUsb0JBQW9CLHlCQUF5QixHQUFHLGNBQWMsd0NBQXdDLG1DQUFtQyxvQkFBb0Isd0JBQXdCLDhCQUE4QiwwQkFBMEIsR0FBRyx3QkFBd0IsMkNBQTJDLHlCQUF5QixrQ0FBa0MsaUNBQWlDLG1CQUFtQixHQUFHLGFBQWEsNkJBQTZCLGdDQUFnQywwQkFBMEIsd0JBQXdCLGdDQUFnQyxpQ0FBaUMsb0JBQW9CLDBCQUEwQixLQUFLLG1CQUFtQiwwQkFBMEIsd0JBQXdCLGdDQUFnQyxnQ0FBZ0MsR0FBRyxrQkFBa0IsZ0JBQWdCLHdCQUF3QixHQUFHLFNBQVMsd0JBQXdCLCtCQUErQiwwQ0FBMEMsa0JBQWtCLEdBQUcsVUFBVSw4QkFBOEIsZ0NBQWdDLGtCQUFrQixHQUFHLGdCQUFnQixvQkFBb0IsR0FBRyxlQUFlLHdCQUF3QixtQ0FBbUMsdUJBQXVCLHdCQUF3QixHQUFHLHFCQUFxQix5QkFBeUIsY0FBYyxnQkFBZ0IsdUNBQXVDLGtCQUFrQixtQkFBbUIsNkJBQTZCLHlCQUF5Qiw2QkFBNkIseUNBQXlDLEdBQUcsY0FBYyxpQkFBaUIsR0FBRyxXQUFXLHlCQUF5QixHQUFHLG1CQUFtQixRQUFRLHNEQUFzRCxHQUFHLEdBQUcsU0FBUywwRkFBMEYsTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sd0ZBQXdGLHFDQUFxQyxrQkFBa0IsZ0NBQWdDLEtBQUssd0NBQXdDLG9CQUFvQiw2QkFBNkIsa0JBQWtCLCtCQUErQixHQUFHLFNBQVMsb0JBQW9CLGtCQUFrQixvQkFBb0IsR0FBRyx5RUFBeUUsaUJBQWlCLHlCQUF5QixvQkFBb0IsNkJBQTZCLDZCQUE2Qix5QkFBeUIsR0FBRyxnQkFBZ0IseUJBQXlCLEdBQUcsY0FBYywwQkFBMEIsR0FBRyxRQUFRLG1DQUFtQyxvQkFBb0IsMEJBQTBCLHdCQUF3Qix1QkFBdUIsR0FBRyxnQkFBZ0IsbUNBQW1DLGlCQUFpQix5QkFBeUIsR0FBRyxnQkFBZ0Isa0JBQWtCLEdBQUcsZUFBZSxvQkFBb0IseUJBQXlCLHlCQUF5Qix5QkFBeUIsR0FBRyxnQkFBZ0IsNkJBQTZCLG1DQUFtQyxpQkFBaUIseUJBQXlCLG1CQUFtQix5QkFBeUIseUJBQXlCLEdBQUcsY0FBYyw2QkFBNkIsbUNBQW1DLGlCQUFpQixHQUFHLFdBQVcsMEJBQTBCLHVCQUF1QixtQ0FBbUMsZ0NBQWdDLDBCQUEwQix3QkFBd0IsMkJBQTJCLDBCQUEwQixrQ0FBa0MsNEJBQTRCLEdBQUcsK0NBQStDLG9CQUFvQiwwQkFBMEIscUNBQXFDLGdDQUFnQyxvQ0FBb0MseUJBQXlCLHdCQUF3QixHQUFHLG1CQUFtQixrQkFBa0IsMkNBQTJDLHlCQUF5QixrQ0FBa0MsaUNBQWlDLG1CQUFtQix1QkFBdUIsR0FBRyx5QkFBeUIsZ0NBQWdDLEdBQUcsOENBQThDLDBCQUEwQix1QkFBdUIsaUJBQWlCLHlDQUF5QyxvQkFBb0IsMkJBQTJCLG9CQUFvQixzQ0FBc0MsR0FBRyx1RUFBdUUsOEJBQThCLEdBQUcsV0FBVyxpQkFBaUIscUJBQXFCLHlCQUF5QixHQUFHLGdCQUFnQixrQkFBa0IsMkNBQTJDLHlCQUF5QixrQ0FBa0MsaUNBQWlDLEdBQUcsd0JBQXdCLGdDQUFnQyxHQUFHLGVBQWUsZ0JBQWdCLHdCQUF3QixHQUFHLGdCQUFnQixrQkFBa0IsS0FBSyxlQUFlLG9CQUFvQix5QkFBeUIsR0FBRyxjQUFjLHdDQUF3QyxtQ0FBbUMsb0JBQW9CLHdCQUF3Qiw4QkFBOEIsMEJBQTBCLEdBQUcsd0JBQXdCLDJDQUEyQyx5QkFBeUIsa0NBQWtDLGlDQUFpQyxtQkFBbUIsR0FBRyxhQUFhLDZCQUE2QixnQ0FBZ0MsMEJBQTBCLHdCQUF3QixnQ0FBZ0MsaUNBQWlDLG9CQUFvQiwwQkFBMEIsS0FBSyxtQkFBbUIsMEJBQTBCLHdCQUF3QixnQ0FBZ0MsZ0NBQWdDLEdBQUcsa0JBQWtCLGdCQUFnQix3QkFBd0IsR0FBRyxTQUFTLHdCQUF3QiwrQkFBK0IsMENBQTBDLGtCQUFrQixHQUFHLFVBQVUsOEJBQThCLGdDQUFnQyxrQkFBa0IsR0FBRyxnQkFBZ0Isb0JBQW9CLEdBQUcsZUFBZSx3QkFBd0IsbUNBQW1DLHVCQUF1Qix3QkFBd0IsR0FBRyxxQkFBcUIseUJBQXlCLGNBQWMsZ0JBQWdCLHVDQUF1QyxrQkFBa0IsbUJBQW1CLDZCQUE2Qix5QkFBeUIsNkJBQTZCLHlDQUF5QyxHQUFHLGNBQWMsaUJBQWlCLEdBQUcsV0FBVyx5QkFBeUIsR0FBRyxtQkFBbUIsUUFBUSxzREFBc0QsR0FBRyxHQUFHLHFCQUFxQjtBQUN0Mlc7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/NGI1NiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogU2V0IHRoZSBmb250IGFuZCBjb2xvciBzY2hlbWUgZm9yIHRoZSBlbnRpcmUgcGFnZSAqL1xcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZkYzk5O1xcbiAgfVxcbiAgXFxuICAvKiBTdHlsZSB0aGUgaGVhZGVyICovXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcXG59XFxuXFxubWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcbi8qIFN0eWxlIHRoZSBzZWFyY2ggYmFyIGluIHRoZSBoZWFkZXIgKi9cXG5oZWFkZXIgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBtYXJnaW46IDhweCAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5tYWluLXRpdGxle1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tYWluLWxhYmVse1xcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcbn1cXG5sYWJlbHtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi5zZWFyY2hGb3Jte1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zZWFyY2gtaW5wdXR7XFxuICAgIGhlaWdodDogNzAlO1xcbn1cXG4ud2FsbGV0LWluZm97XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMzMzO1xcbiAgICBib3JkZXItd2lkdGg6IDE1cHg7XFxufVxcblxcbi50b2tlbi1pbmZve1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHggMzBweCAzMHB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMzMzO1xcbiAgICBib3JkZXItd2lkdGg6IDE1cHg7XFxufVxcblxcbi5hZGEtaW5mb3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgcGFkZGluZzogMzBweCAzMHB4IDMwcHggMzBweDtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmlubmVye1xcblxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcXG4gICAgYm9yZGVyLWNvbG9yOiAgIzgyODBjYWUwOyBcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNhOGUzYjhkYjsgXFxuICAgIGNvbG9yOnJnYig3MSwgNjgsIDY4KTtcXG59XFxuXFxuLyogU3R5bGUgdGhlIHNvcnRpbmcgYmFyICovXFxuLnNvcnRpbmctYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcXG4gICAgYm9yZGVyLWNvbG9yOiAjMzMzO1xcbiAgICBib3JkZXItd2lkdGg6IDRweDtcXG59XFxuXFxuLnNlYXJjaC1idXR0b257XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTA4LCAxMDgsIDIyNCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOThjYjkxOyBcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpob25leWRldztcXG59XFxuLyogU3R5bGUgdGhlIHNvcnQgYnV0dG9ucyAqL1xcbi5zb3J0LWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgwLCAyMjUsIDE4Myk7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogcmdiKDQ3LCA2MiwgNjQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xcbn1cXG5cXG4vKiBBZGQgYSBob3ZlciBlZmZlY3QgZm9yIHRoZSBzb3J0IGJ1dHRvbnMgKi9cXG4uc29ydC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcXG59XFxuLndhbGxldHN7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGRpc3BsYXk6ICBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi53YWxsZXRCdXR0b257XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTA4LCAxMDgsIDIyNCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTZlNDllOyBcXG59XFxuXFxuLndhbGxldEJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpob25leWRldztcXG59XFxuXFxuLnRva2VuLWltZ3tcXG4gICAgd2lkdGg6IDclO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLndhbGxldC1pbWd7XFxuICAgIHdpZHRoOiA1MHB4O1xcblxcbn1cXG5cXG4uYm94LXRpdGxle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0c3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU0LCA1OCwgNTUpO1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXItd2lkdGg6IDVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaG93LWFzc2V0cy1idXR0b257XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMDgsIDEwOCwgMjI0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4Mjk0ZTE7IFxcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5ncmlkLWl0ZW17XFxuICAgIGNvbG9yOiByZ2IoNDcsIDYyLCA2NCk7XFxuICAgIG1hcmdpbjogMTBweCAwcHggMHB4IDIwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogNXB4O1xcbiAgICBib3JkZXItY29sb3I6ICAjNmQ2YWM5ZTA7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTZlNDllOyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuLmRyb3Bkb3duQ29udGVudHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxuICAgIGJvcmRlci1jb2xvcjogICMyODVlYzJlMDsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4Mjk0ZTE7XFxufVxcblxcbi50b2tlbi1zdWJpbWd7XFxuICAgIHdpZHRoOiA1JTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5uZnR7XFxuICAgIGJvcmRlci13aWR0aDogNXB4O1xcbiAgICBib3JkZXItY29sb3I6ICAjODI4MGNhZTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDgsIDY1LCAyMzgpO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG59XFxuXFxuLmNvaW57XFxuICAgIGJvcmRlci1jb2xvcjogICNjNjg1YzU7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkZGFkZDE7IFxcbiAgICBjb2xvcjogIzMzMztcXG59XFxuXFxuLnRva2VuLWxpc3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5pdGVtLWluZm97XFxuXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMjBweDtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5sb2FkaW5nLXN5bWJvbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA2JTtcXG4gICAgbGVmdDogODAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgI2NjYztcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjMzMzO1xcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4ubWFpbi1pbWd7XFxuICAgIHdpZHRoOiA2MCU7XFxufVxcbi5pbWctZGl2e1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgzNjBkZWcpO1xcbn1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxzREFBc0Q7QUFDdEQ7SUFDSSw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLHlCQUF5QjtFQUMzQjs7RUFFQSxxQkFBcUI7QUFDdkI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQSx1Q0FBdUM7QUFDdkM7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSw0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O0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtJQUNJLCtDQUErQztBQUNuRDtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFNldCB0aGUgZm9udCBhbmQgY29sb3Igc2NoZW1lIGZvciB0aGUgZW50aXJlIHBhZ2UgKi9cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FmZGM5OTtcXG4gIH1cXG4gIFxcbiAgLyogU3R5bGUgdGhlIGhlYWRlciAqL1xcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCA1cHg7XFxufVxcblxcbm1haW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4vKiBTdHlsZSB0aGUgc2VhcmNoIGJhciBpbiB0aGUgaGVhZGVyICovXFxuaGVhZGVyIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgbWFyZ2luOiA4cHggMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4ubWFpbi10aXRsZXtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubWFpbi1sYWJlbHtcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG59XFxubGFiZWx7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4uc2VhcmNoRm9ybXtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uc2VhcmNoLWlucHV0e1xcbiAgICBoZWlnaHQ6IDcwJTtcXG59XFxuLndhbGxldC1pbmZve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1jb2xvcjogIzMzMztcXG4gICAgYm9yZGVyLXdpZHRoOiAxNXB4O1xcbn1cXG5cXG4udG9rZW4taW5mb3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgcGFkZGluZzogMzBweCAzMHB4IDMwcHggMzBweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1jb2xvcjogIzMzMztcXG4gICAgYm9yZGVyLXdpZHRoOiAxNXB4O1xcbn1cXG5cXG4uYWRhLWluZm97XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICAgIHBhZGRpbmc6IDMwcHggMzBweCAzMHB4IDMwcHg7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5pbm5lcntcXG5cXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XFxuICAgIGJvcmRlci1jb2xvcjogICM4MjgwY2FlMDsgXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogNXB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojYThlM2I4ZGI7IFxcbiAgICBjb2xvcjpyZ2IoNzEsIDY4LCA2OCk7XFxufVxcblxcbi8qIFN0eWxlIHRoZSBzb3J0aW5nIGJhciAqL1xcbi5zb3J0aW5nLWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1jb2xvcjogIzMzMztcXG4gICAgYm9yZGVyLXdpZHRoOiA0cHg7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9ue1xcbiAgICBoZWlnaHQ6IDcwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDEwOCwgMTA4LCAyMjQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk4Y2I5MTsgXFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuLnNlYXJjaC1idXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6aG9uZXlkZXc7XFxufVxcbi8qIFN0eWxlIHRoZSBzb3J0IGJ1dHRvbnMgKi9cXG4uc29ydC1idXR0b24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MCwgMjI1LCAxODMpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6IHJnYig0NywgNjIsIDY0KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcXG59XFxuXFxuLyogQWRkIGEgaG92ZXIgZWZmZWN0IGZvciB0aGUgc29ydCBidXR0b25zICovXFxuLnNvcnQtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XFxufVxcbi53YWxsZXRze1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBkaXNwbGF5OiAgZmxleDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ud2FsbGV0QnV0dG9ue1xcbiAgICBoZWlnaHQ6IDcwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDEwOCwgMTA4LCAyMjQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E2ZTQ5ZTsgXFxufVxcblxcbi53YWxsZXRCdXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6aG9uZXlkZXc7XFxufVxcblxcbi50b2tlbi1pbWd7XFxuICAgIHdpZHRoOiA3JTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi53YWxsZXQtaW1ne1xcbiAgICB3aWR0aDogNTBweDtcXG5cXG59XFxuXFxuLmJveC10aXRsZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdHN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NCwgNTgsIDU1KTtcXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2hvdy1hc3NldHMtYnV0dG9ue1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTA4LCAxMDgsIDIyNCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODI5NGUxOyBcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uZ3JpZC1pdGVte1xcbiAgICBjb2xvcjogcmdiKDQ3LCA2MiwgNjQpO1xcbiAgICBtYXJnaW46IDEwcHggMHB4IDBweCAyMHB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDVweDtcXG4gICAgYm9yZGVyLWNvbG9yOiAgIzZkNmFjOWUwOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E2ZTQ5ZTsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcbi5kcm9wZG93bkNvbnRlbnR7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogM3B4O1xcbiAgICBib3JkZXItY29sb3I6ICAjMjg1ZWMyZTA7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODI5NGUxO1xcbn1cXG5cXG4udG9rZW4tc3ViaW1ne1xcbiAgICB3aWR0aDogNSU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4ubmZ0e1xcbiAgICBib3JkZXItd2lkdGg6IDVweDtcXG4gICAgYm9yZGVyLWNvbG9yOiAgIzgyODBjYWUwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA4LCA2NSwgMjM4KTtcXG4gICAgY29sb3I6d2hpdGU7XFxufVxcblxcbi5jb2lue1xcbiAgICBib3JkZXItY29sb3I6ICAjYzY4NWM1OyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZGRhZGQxOyBcXG4gICAgY29sb3I6ICMzMzM7XFxufVxcblxcbi50b2tlbi1saXN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaXRlbS1pbmZve1xcblxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubG9hZGluZy1zeW1ib2wge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNiU7XFxuICAgIGxlZnQ6IDgwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzMzMztcXG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLm1haW4taW1ne1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG4uaW1nLWRpdntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbjEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMzYwZGVnKTtcXG59XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[9].use[2]!./styles/globals.css\n"));

/***/ })

});