exports.ids = ["GetHeadlines"];
exports.modules = {

/***/ "./js/GetHeadlines.js":
/*!****************************!*\
  !*** ./js/GetHeadlines.js ***!
  \****************************/
/*! exports provided: getHeadlines */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHeadlines\", function() { return getHeadlines; });\n/* harmony import */ var _Endpoints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Endpoints.js */ \"./js/Endpoints.js\");\n\nfunction getHeadlines() {\n  return fetch(_Endpoints_js__WEBPACK_IMPORTED_MODULE_0__[\"newsApiEndPoint\"].headlinesEndpoint).then(function (response) {\n    return response.json();\n  }).then(function (json) {\n    return json.articles;\n  })[\"catch\"](function (error) {\n    return JSON.stringify(error);\n  });\n}\n\n//# sourceURL=webpack:///./js/GetHeadlines.js?");

/***/ })

};;