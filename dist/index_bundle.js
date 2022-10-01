/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n/* harmony import */ var _src_buttonsData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/buttonsData.js */ \"./src/buttonsData.js\");\n/* harmony import */ var _src_calculatorDraw_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/calculatorDraw.js */ \"./src/calculatorDraw.js\");\n/* harmony import */ var _src_calculatorEngine_calculation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/calculatorEngine/calculation.js */ \"./src/calculatorEngine/calculation.js\");\n\n\n\n\nlet displayString = \"\";\n\nfunction refreshDisplay() {\n  if (displayString || displayString === \"\") {\n    _src_calculatorDraw_js__WEBPACK_IMPORTED_MODULE_2__.display.textContent = displayString;\n  } else {\n    displayString = \"Ошибка\";\n    refreshDisplay();\n    displayString = \"\";\n  }\n}\n\n_src_buttonsData_js__WEBPACK_IMPORTED_MODULE_1__.buttons.forEach(el => {\n  const btn = document.createElement(\"div\");\n  btn.classList.add(\"button\");\n  btn.insertAdjacentHTML(\"afterbegin\", `\n        <div class=\"box\">\n        ${el.text}\n        </div>\n        `);\n\n  if (el.color) {\n    btn.style.background = \"#53d5ea\";\n  }\n\n  btn.addEventListener(\"click\", async () => {\n    console.log(displayString);\n\n    if (el.text !== \"=\" && el.text !== \"C\" && el.text !== \"CE\") {\n      displayString += el.text;\n      refreshDisplay();\n    } else if (el.text === \"=\") {\n      if (displayString !== \"\") {\n        displayString = await (0,_src_calculatorEngine_calculation_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(displayString);\n        await refreshDisplay();\n      }\n    } else if (el.text === \"C\") {\n      if (displayString !== \"\") {\n        displayString = \"\";\n        refreshDisplay();\n      }\n    } else if (el.text === \"CE\") {\n      if (displayString !== \"\") {\n        displayString = displayString.slice(0, displayString.length - 1);\n        refreshDisplay();\n      }\n    }\n  });\n  _src_calculatorDraw_js__WEBPACK_IMPORTED_MODULE_2__.btnArea.appendChild(btn);\n});\ndocument.addEventListener(\"keydown\", async event => {\n  switch (true) {\n    case event.key === \"=\" || event.key === \"Enter\":\n      if (displayString !== \"\") {\n        displayString = await (0,_src_calculatorEngine_calculation_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(displayString);\n        await refreshDisplay();\n      }\n\n      break;\n\n    case event.key === \"c\":\n      if (displayString !== \"\") {\n        displayString = \"\";\n        refreshDisplay();\n      }\n\n      break;\n\n    case event.key === \"Backspace\" || event.key === \"Delete\":\n      if (displayString !== \"\") {\n        displayString = displayString.slice(0, displayString.length - 1);\n        refreshDisplay();\n      }\n\n      break;\n\n    case _src_buttonsData_js__WEBPACK_IMPORTED_MODULE_1__.btnName.includes(event.key):\n      displayString += event.key;\n      refreshDisplay();\n      break;\n  }\n});\n\n//# sourceURL=webpack://quickcalc/./index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://quickcalc/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://quickcalc/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/buttonsData.js":
/*!****************************!*\
  !*** ./src/buttonsData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"btnName\": () => (/* binding */ btnName),\n/* harmony export */   \"buttons\": () => (/* binding */ buttons)\n/* harmony export */ });\nconst buttons = [{\n  text: \"C\",\n  color: \"#468189\"\n}, {\n  text: \"CE\",\n  color: \"#468189\"\n}, {\n  text: \"/\",\n  color: \"#468189\"\n}, {\n  text: \"+\",\n  color: \"#468189\"\n}, {\n  text: \"7\"\n}, {\n  text: \"8\"\n}, {\n  text: \"9\"\n}, {\n  text: \"-\",\n  color: \"#468189\"\n}, {\n  text: \"4\"\n}, {\n  text: \"5\"\n}, {\n  text: \"6\"\n}, {\n  text: \"*\",\n  color: \"#468189\"\n}, {\n  text: \"1\"\n}, {\n  text: \"2\"\n}, {\n  text: \"3\"\n}, {\n  text: \".\",\n  color: \"#468189\"\n}, {\n  text: \"0\"\n}, {\n  text: \"(\"\n}, {\n  text: \")\"\n}, {\n  text: \"=\",\n  color: \"#468189\"\n}];\nconst btnName = [];\nbuttons.forEach(el => {\n  btnName.push(el.text);\n});\n\n//# sourceURL=webpack://quickcalc/./src/buttonsData.js?");

/***/ }),

/***/ "./src/calculatorDraw.js":
/*!*******************************!*\
  !*** ./src/calculatorDraw.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"btnArea\": () => (/* binding */ btnArea),\n/* harmony export */   \"display\": () => (/* binding */ display)\n/* harmony export */ });\nconst display = document.createElement(\"div\");\nconst btnArea = document.createElement(\"div\");\nconst container = document.querySelector(\".container\");\nconst calcul = document.createElement(\"div\");\ncalcul.classList.add(\"calc\");\ndisplay.classList.add(\"display\");\nbtnArea.classList.add(\"btn-area\");\ncontainer.appendChild(calcul);\ncalcul.appendChild(display);\ncalcul.appendChild(btnArea);\n\n//# sourceURL=webpack://quickcalc/./src/calculatorDraw.js?");

/***/ }),

/***/ "./src/calculatorEngine/calculation.js":
/*!*********************************************!*\
  !*** ./src/calculatorEngine/calculation.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _convertString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convertString */ \"./src/calculatorEngine/convertString.js\");\n/* harmony import */ var _concepts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concepts */ \"./src/calculatorEngine/concepts.js\");\n\n\n\nfunction equal(expression) {\n  return new Promise(resolve => {\n    resolve(expression);\n  }).then(function (str) {\n    return (0,_convertString__WEBPACK_IMPORTED_MODULE_0__.stringToArray)(str);\n  }).then(function (arr) {\n    return (0,_convertString__WEBPACK_IMPORTED_MODULE_0__.createArrNum)(arr);\n  }).then(function (arr) {\n    return (0,_convertString__WEBPACK_IMPORTED_MODULE_0__.fixArrNum)(arr);\n  }).then(function (exp) {\n    return (0,_concepts__WEBPACK_IMPORTED_MODULE_1__.findStep)(exp);\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (equal);\n\n//# sourceURL=webpack://quickcalc/./src/calculatorEngine/calculation.js?");

/***/ }),

/***/ "./src/calculatorEngine/concepts.js":
/*!******************************************!*\
  !*** ./src/calculatorEngine/concepts.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findStep\": () => (/* binding */ findStep)\n/* harmony export */ });\nfunction calc(arrMathExp) {\n  if (arrMathExp.length !== 1) {\n    let idx, num1, num2, rslt;\n\n    if (arrMathExp.indexOf(\"*\") !== -1) {\n      idx = arrMathExp.indexOf(\"*\");\n      num1 = arrMathExp[idx - 1];\n      num2 = arrMathExp[idx + 1];\n      rslt = num1 * num2;\n      arrMathExp.splice(idx - 1, 3, rslt);\n      return calc(arrMathExp);\n    } else if (arrMathExp.indexOf(\"/\") !== -1) {\n      idx = arrMathExp.indexOf(\"/\");\n      num1 = arrMathExp[idx - 1];\n      num2 = arrMathExp[idx + 1];\n      rslt = num1 / num2;\n      arrMathExp.splice(idx - 1, 3, rslt);\n      return calc(arrMathExp);\n    }\n\n    if (arrMathExp.indexOf(\"+\") !== -1) {\n      idx = arrMathExp.indexOf(\"+\");\n      num1 = arrMathExp[idx - 1];\n      num2 = arrMathExp[idx + 1];\n      rslt = num1 + num2;\n      arrMathExp.splice(idx - 1, 3, rslt);\n      return calc(arrMathExp);\n    } else if (arrMathExp.indexOf(\"-\") !== -1) {\n      idx = arrMathExp.indexOf(\"-\");\n      num1 = arrMathExp[idx - 1];\n      num2 = arrMathExp[idx + 1];\n      rslt = num1 - num2;\n      arrMathExp.splice(idx - 1, 3, rslt);\n      return calc(arrMathExp);\n    }\n  } else {\n    return arrMathExp[0];\n  }\n}\n\nfunction findStep(expArr) {\n  let idxOpen, idxClose, tmpArr, res;\n\n  if (expArr.indexOf(\"(\") !== -1) {\n    if (expArr.indexOf(\")\") !== -1) {\n      idxClose = expArr.indexOf(\")\");\n      idxOpen = expArr.lastIndexOf(\"(\", idxClose) + 1;\n      tmpArr = expArr;\n      tmpArr = expArr.slice(idxOpen, idxClose);\n      res = calc(tmpArr);\n      expArr.splice(idxOpen - 1, 5, res);\n      return findStep(expArr);\n    }\n  } else {\n    return calc(expArr);\n  }\n}\n\n//# sourceURL=webpack://quickcalc/./src/calculatorEngine/concepts.js?");

/***/ }),

/***/ "./src/calculatorEngine/convertString.js":
/*!***********************************************!*\
  !*** ./src/calculatorEngine/convertString.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createArrNum\": () => (/* binding */ createArrNum),\n/* harmony export */   \"fixArrNum\": () => (/* binding */ fixArrNum),\n/* harmony export */   \"stringToArray\": () => (/* binding */ stringToArray)\n/* harmony export */ });\nfunction stringToArray(str) {\n  let arr = [];\n\n  for (let i = 0; i < str.length; i++) {\n    arr.push(str[i]);\n  }\n\n  return arr;\n}\nfunction createArrNum(arr) {\n  let arrMathExp = [];\n  let num = \"\";\n\n  for (let i = 0; i < arr.length; i++) {\n    if (typeof +arr[i] === \"number\" && !Number.isNaN(+arr[i]) || arr[i] === \".\" || arr[0] === \"-\") {\n      num += arr[i];\n    }\n\n    if (Number.isNaN(+arr[i]) && arr[i] !== \".\" || i === arr.length - 1) {\n      arrMathExp.push(+num);\n\n      if (typeof +arr[i] === \"number\" && Number.isNaN(+arr[i])) {\n        arrMathExp.push(arr[i]);\n      }\n\n      num = \"\";\n\n      if (arr[i + 1] === \"-\") {\n        i = i + 1;\n        num = \"-\";\n      }\n    }\n  }\n\n  return arrMathExp;\n}\nfunction fixArrNum(arr) {\n  for (let i = 0; i < arr.length; i++) {\n    let idx;\n\n    if (arr[i] === \"(\") {\n      idx = i - 1;\n      arr.splice(idx, 1);\n    } else if (arr[i] === \")\") {\n      idx = i + 1;\n      arr.splice(idx, 1);\n    }\n  }\n\n  return arr;\n}\n\n//# sourceURL=webpack://quickcalc/./src/calculatorEngine/convertString.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  font-family: sans-serif;\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  padding-top: -30px;\\r\\n  height: 100vh;\\r\\n  width: 100vw;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.calc {\\r\\n  width: 500px;\\r\\n  height: 570px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n  background: rgba(0, 0, 0, 0.733);\\r\\n  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);\\r\\n  padding-bottom: 20px;\\r\\n  padding-top: 20px;\\r\\n  border-radius: 20px;\\r\\n}\\r\\n\\r\\n.display {\\r\\n  width: 450px;\\r\\n  border: 1px black solid;\\r\\n  margin-bottom: 10px;\\r\\n  height: 60px;\\r\\n  border-radius: 3px;\\r\\n  position: center;\\r\\n  left: auto;\\r\\n  background: whitesmoke;\\r\\n  color: black;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n  justify-content: right;\\r\\n  font-size: 40px;\\r\\n  padding-right: 10px;\\r\\n  overflow: hidden;\\r\\n  text-overflow: ellipsis;\\r\\n}\\r\\n\\r\\n.btn-area {\\r\\n  display: grid;\\r\\n  width: 450px;\\r\\n  height: 400px;\\r\\n  background: whitesmoke;\\r\\n  grid-template-columns: repeat(4, 1fr);\\r\\n  border: black 1px solid;\\r\\n}\\r\\n\\r\\n.btn-area div {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.button {\\r\\n  border: black 1px solid;\\r\\n  text-align: center;\\r\\n  margin: 0;\\r\\n  color: #151618;\\r\\n  cursor: pointer;\\r\\n  overflow: hidden;\\r\\n}\\r\\n.button p {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.box {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  font-size: 50px;\\r\\n\\r\\n  transition: all 0.1s;\\r\\n}\\r\\n\\r\\n.box:hover {\\r\\n  background: #9494f1;\\r\\n}\\r\\n.box:hover {\\r\\n  transform: scale(1.25);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://quickcalc/./style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://quickcalc/./style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://quickcalc/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://quickcalc/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://quickcalc/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://quickcalc/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://quickcalc/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://quickcalc/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;