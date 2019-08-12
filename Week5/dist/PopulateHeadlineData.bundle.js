exports.ids = ["PopulateHeadlineData"];
exports.modules = {

/***/ "./js/PopulateHeadlines.js":
/*!*********************************!*\
  !*** ./js/PopulateHeadlines.js ***!
  \*********************************/
/*! exports provided: populateHeadlines */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"populateHeadlines\", function() { return populateHeadlines; });\nfunction populateHeadlines(headlines) {\n  var headlineContent = document.getElementById(\"modal-content\");\n  headlines.forEach(function (headline) {\n    var newHeadLine = document.createElement(\"p\");\n    newHeadLine.innerText = headline.title;\n    newHeadLine.setAttribute(\"class\", \"headline-title\");\n    headlineContent.appendChild(newHeadLine);\n  });\n}\n\n//# sourceURL=webpack:///./js/PopulateHeadlines.js?");

/***/ })

};;