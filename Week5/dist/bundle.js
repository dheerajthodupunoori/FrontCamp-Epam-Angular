/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/HomeTask3.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/HomeTask3.css":
/*!***************************!*\
  !*** ./css/HomeTask3.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./HomeTask3.css */ \"./node_modules/css-loader/dist/cjs.js!./css/HomeTask3.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./css/HomeTask3.css?");

/***/ }),

/***/ "./js/DisplayHiddenAuthors.js":
/*!************************************!*\
  !*** ./js/DisplayHiddenAuthors.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return displayHiddenAuthors; });\nfunction displayHiddenAuthors() {\n  var channelToDisplay = document.getElementById(\"authors-division\").childNodes;\n  channelToDisplay.forEach(function (channel) {\n    channel.style.display = \"flex\";\n  });\n}\n\n//# sourceURL=webpack:///./js/DisplayHiddenAuthors.js?");

/***/ }),

/***/ "./js/Endpoints.js":
/*!*************************!*\
  !*** ./js/Endpoints.js ***!
  \*************************/
/*! exports provided: newsApiEndPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsApiEndPoint\", function() { return newsApiEndPoint; });\nvar newsApiEndPoint = {\n  getAllChannelsEndpoint: \"https://newsapi.org/v1/sources\",\n  key: \"6ef59af3ef3b4f5d9e338bc971f9f619\",\n  articlesEndPoint: \"https://newsapi.org/v1/articles?\",\n  headlinesEndpoint: \"https://newsapi.org/v2/top-headlines?country=us&apiKey=6ef59af3ef3b4f5d9e338bc971f9f619\"\n};\n\n//# sourceURL=webpack:///./js/Endpoints.js?");

/***/ }),

/***/ "./js/GenerateAuthorsDivision.js":
/*!***************************************!*\
  !*** ./js/GenerateAuthorsDivision.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createAuthorsDivision; });\nfunction createAuthorsDivision(authors) {\n  var authorsDiv = document.getElementById(\"authors-division\");\n  authors.forEach(function (author) {\n    var newsFeed = document.createElement(\"div\");\n    newsFeed.setAttribute(\"class\", \"flex-container\");\n    newsFeed.setAttribute(\"id\", author.author);\n    var logo = document.createElement(\"div\");\n    logo.setAttribute(\"class\", \"logo\");\n    var logoImage = document.createElement(\"img\");\n    logoImage.setAttribute(\"src\", author.urlToImage);\n    logoImage.setAttribute(\"class\", \"logo-image\");\n    logo.appendChild(logoImage);\n    var content = document.createElement(\"div\");\n    content.setAttribute(\"class\", \"content\");\n    var title = document.createElement(\"h3\");\n    title.setAttribute(\"class\", \"title\");\n    title.innerText = author.title;\n    var publishedAt = document.createElement(\"h5\");\n    publishedAt.setAttribute(\"class\", \"published\");\n    publishedAt.innerText = \"Published At: \".concat(author.publishedAt);\n    var description = document.createElement(\"p\");\n    description.innerText = author.description;\n    description.setAttribute(\"class\", \"description\");\n    var clickToReadMore = document.createElement(\"button\");\n    clickToReadMore.setAttribute(\"value\", \"Continue Reading\");\n    clickToReadMore.setAttribute(\"class\", \"continue-reading\");\n    clickToReadMore.setAttribute(\"id\", author.url);\n    clickToReadMore.addEventListener(\"click\", continueReading);\n    clickToReadMore.innerText = \"Continue Reading\";\n    content.appendChild(title);\n    content.appendChild(publishedAt);\n    content.appendChild(description);\n    content.appendChild(clickToReadMore);\n    newsFeed.appendChild(logo);\n    newsFeed.appendChild(content);\n    authorsDiv.appendChild(newsFeed);\n  });\n}\n\nvar continueReading = function continueReading() {\n  window.open(this.id);\n};\n\n//# sourceURL=webpack:///./js/GenerateAuthorsDivision.js?");

/***/ }),

/***/ "./js/GenerateDropdown.js":
/*!********************************!*\
  !*** ./js/GenerateDropdown.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createChannelDropdown; });\nfunction createChannelDropdown(result) {\n  var select_channel = document.getElementById(\"select-channel\");\n  var channel = document.createElement(\"option\");\n  channel.setAttribute(\"selected\", \"selected\");\n  channel.setAttribute(\"disabled\", \"disabled\");\n  channel.innerText = \"--Select Channel--\";\n  select_channel.appendChild(channel);\n  result.forEach(function (item) {\n    var channel = document.createElement(\"option\");\n    channel.setAttribute(\"value\", item.id);\n    channel.innerText = item.name;\n    select_channel.appendChild(channel);\n  });\n}\n\n//# sourceURL=webpack:///./js/GenerateDropdown.js?");

/***/ }),

/***/ "./js/GetAuthors.js":
/*!**************************!*\
  !*** ./js/GetAuthors.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getAuthorsList; });\n/* harmony import */ var _Endpoints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Endpoints.js */ \"./js/Endpoints.js\");\n\nfunction getAuthorsList(channelId) {\n  var channelAuthorEndpoint = _Endpoints_js__WEBPACK_IMPORTED_MODULE_0__[\"newsApiEndPoint\"].articlesEndPoint;\n  var url = \"\".concat(channelAuthorEndpoint, \"source=\").concat(channelId, \"&apiKey=\").concat(_Endpoints_js__WEBPACK_IMPORTED_MODULE_0__[\"newsApiEndPoint\"].key);\n  return fetch(url).then(function (response) {\n    return response.json();\n  }).then(function (json) {\n    return json.articles;\n  })[\"catch\"](function (error) {\n    return JSON.stringify(error);\n  });\n}\n\n//# sourceURL=webpack:///./js/GetAuthors.js?");

/***/ }),

/***/ "./js/GetHeadlines.js":
/*!****************************!*\
  !*** ./js/GetHeadlines.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getHeadlines; });\n/* harmony import */ var _Endpoints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Endpoints.js */ \"./js/Endpoints.js\");\n\nfunction getHeadlines() {\n  return fetch(_Endpoints_js__WEBPACK_IMPORTED_MODULE_0__[\"newsApiEndPoint\"].headlinesEndpoint).then(function (response) {\n    return response.json();\n  }).then(function (json) {\n    return json.articles;\n  })[\"catch\"](function (error) {\n    return JSON.stringify(error);\n  });\n}\n\n//# sourceURL=webpack:///./js/GetHeadlines.js?");

/***/ }),

/***/ "./js/GetListOfChannels.js":
/*!*********************************!*\
  !*** ./js/GetListOfChannels.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getChannels; });\n/* harmony import */ var _Endpoints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Endpoints.js */ \"./js/Endpoints.js\");\n\nfunction getChannels() {\n  return fetch(_Endpoints_js__WEBPACK_IMPORTED_MODULE_0__[\"newsApiEndPoint\"].getAllChannelsEndpoint).then(function (response) {\n    return response.json();\n  }).then(function (json) {\n    return json.sources;\n  })[\"catch\"](function (error) {\n    return JSON.stringify(error);\n  });\n}\n\n//# sourceURL=webpack:///./js/GetListOfChannels.js?");

/***/ }),

/***/ "./js/HideUnnecessaryChannels.js":
/*!***************************************!*\
  !*** ./js/HideUnnecessaryChannels.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return hideUnnecessaryChannel; });\nfunction hideUnnecessaryChannel(numberOfDivisionsToBeHidden) {\n  var divisionsToBeHidden = document.getElementById(\"authors-division\").childNodes;\n\n  for (var i = divisionsToBeHidden.length - numberOfDivisionsToBeHidden; i < divisionsToBeHidden.length; i++) {\n    divisionsToBeHidden[i].style.display = \"none\";\n  }\n}\n\n//# sourceURL=webpack:///./js/HideUnnecessaryChannels.js?");

/***/ }),

/***/ "./js/HomeTask3.js":
/*!*************************!*\
  !*** ./js/HomeTask3.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GetListOfChannels_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetListOfChannels.js */ \"./js/GetListOfChannels.js\");\n/* harmony import */ var _GenerateDropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenerateDropdown.js */ \"./js/GenerateDropdown.js\");\n/* harmony import */ var _GetAuthors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GetAuthors.js */ \"./js/GetAuthors.js\");\n/* harmony import */ var _GenerateAuthorsDivision_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GenerateAuthorsDivision.js */ \"./js/GenerateAuthorsDivision.js\");\n/* harmony import */ var _getRequiredNumberOfDivisions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getRequiredNumberOfDivisions.js */ \"./js/getRequiredNumberOfDivisions.js\");\n/* harmony import */ var _OverRidePreviousChannels_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OverRidePreviousChannels.js */ \"./js/OverRidePreviousChannels.js\");\n/* harmony import */ var _css_HomeTask3_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/HomeTask3.css */ \"./css/HomeTask3.css\");\n/* harmony import */ var _css_HomeTask3_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_HomeTask3_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _GetHeadlines_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GetHeadlines.js */ \"./js/GetHeadlines.js\");\n/* harmony import */ var _PopulateHeadlines_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PopulateHeadlines.js */ \"./js/PopulateHeadlines.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\nvar channels = Object(_GetListOfChannels_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nvar authors;\nvar masterData = {};\nchannels.then(function (data) {\n  Object(_GenerateDropdown_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\n});\n\nvar getAuthors = function getAuthors() {\n  var channelExists = false;\n  var selectedChannel = document.getElementById(\"select-channel\");\n  var channelId = selectedChannel.value;\n  var numberOfDivElements = document.getElementById(\"authors-division\").childNodes.length;\n\n  if (masterData.hasOwnProperty(channelId)) {\n    channelExists = true;\n  }\n\n  if (channelExists && numberOfDivElements != 0) {\n    var requiredDivisions = Object(_getRequiredNumberOfDivisions_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numberOfDivElements, masterData[channelId]);\n    Object(_OverRidePreviousChannels_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(masterData[channelId], requiredDivisions);\n  } else if (!channelExists && numberOfDivElements != 0) {\n    authors = Object(_GetAuthors_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(channelId);\n    authors.then(function (data) {\n      masterData = _objectSpread(_defineProperty({}, channelId, data), masterData);\n      var requiredDivisions = Object(_getRequiredNumberOfDivisions_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numberOfDivElements, masterData[channelId]);\n      Object(_OverRidePreviousChannels_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(masterData[channelId], requiredDivisions);\n    });\n  } else {\n    authors = Object(_GetAuthors_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(channelId);\n    authors.then(function (data) {\n      masterData = _objectSpread(_defineProperty({}, channelId, data), masterData);\n      Object(_GenerateAuthorsDivision_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(data);\n    });\n  }\n}; // writing this function because this js mentioned as type module so cant use \"onchange\" attribute on select in html\n// https://stackoverflow.com/questions/53069695/cant-call-a-function-from-js-file-imported-as-type-module\n// https://stackoverflow.com/questions/53630310/use-functions-defined-in-es6-module-directly-in-html\n\n\nfunction addOnChangedEventListener() {\n  var selectedChannel = document.getElementById(\"select-channel\");\n  selectedChannel.addEventListener(\"change\", getAuthors);\n  var emailInput = document.getElementById(\"email\");\n  emailInput.addEventListener(\"blur\", validateEmailId);\n}\n\naddOnChangedEventListener(); // function addHeadlinesEventListener() {\n//   let headlines = document.getElementById(\"headlines\");\n//   headlines.addEventListener(\"click\", getHeadlines);\n//   populateHeadlinesDataInModal();\n// }\n//This function is to validate an email Id entered by the user.\n\nvar validateEmailId = function validateEmailId() {\n  alert(\"vds\");\n  var emailId = document.getElementById(\"email\").value; //regular expression to validate email id.\n\n  var emailRegex = /^[a-z0-9._]+@[a-z0-9]+.[a-z]{2,3}/;\n  var errorMessage = document.getElementById(\"error\");\n\n  if (emailRegex.test(emailId)) {\n    //if email id is valid then saving it to local storage.\n    errorMessage.innerText = \"\";\n    localStorage.setItem(\"EmailId\", emailId);\n  } else {\n    errorMessage.innerText = \"Invalid Email id\";\n    errorMessage.style.color = \"red\";\n  }\n}; // Get the modal\n\n\nvar modal = document.getElementById(\"myModal\"); // Get the button that opens the modal\n\nvar btn = document.getElementById(\"myBtn\"); // Get the <span> element that closes the modal\n\nvar span = document.getElementsByClassName(\"close\")[0]; // When the user clicks on the button, open the modal\n\nbtn.onclick = function () {\n  var headlines = Object(_GetHeadlines_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n  headlines.then(function (data) {\n    Object(_PopulateHeadlines_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(data);\n  });\n  modal.style.display = \"block\";\n}; // When the user clicks on <span> (x), close the modal\n\n\nspan.onclick = function () {\n  modal.style.display = \"none\";\n}; // When the user clicks anywhere outside of the modal, close it\n\n\nwindow.onclick = function (event) {\n  if (event.target == modal) {\n    modal.style.display = \"none\";\n  }\n};\n\n//# sourceURL=webpack:///./js/HomeTask3.js?");

/***/ }),

/***/ "./js/OverRidePreviousChannels.js":
/*!****************************************!*\
  !*** ./js/OverRidePreviousChannels.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return overRidePreviousChannels; });\n/* harmony import */ var _GenerateAuthorsDivision_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenerateAuthorsDivision.js */ \"./js/GenerateAuthorsDivision.js\");\n/* harmony import */ var _OverrideData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OverrideData.js */ \"./js/OverrideData.js\");\n/* harmony import */ var _HideUnnecessaryChannels_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HideUnnecessaryChannels.js */ \"./js/HideUnnecessaryChannels.js\");\n/* harmony import */ var _DisplayHiddenAuthors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DisplayHiddenAuthors.js */ \"./js/DisplayHiddenAuthors.js\");\n\n\n\n\nfunction overRidePreviousChannels(requiredChannelTobeDisplayed, extraDivisionsRequired) {\n  if (extraDivisionsRequired == 0) {\n    Object(_OverrideData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(requiredChannelTobeDisplayed);\n    Object(_DisplayHiddenAuthors_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  } else if (extraDivisionsRequired > 0) {\n    Object(_OverrideData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(requiredChannelTobeDisplayed);\n    Object(_HideUnnecessaryChannels_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(extraDivisionsRequired);\n  } else {\n    var divisionsToBeCreated = Math.abs(extraDivisionsRequired);\n    Object(_OverrideData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(requiredChannelTobeDisplayed.slice(0, requiredChannelTobeDisplayed.length - divisionsToBeCreated));\n    Object(_GenerateAuthorsDivision_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(requiredChannelTobeDisplayed.slice(requiredChannelTobeDisplayed.length - divisionsToBeCreated, requiredChannelTobeDisplayed.length));\n  }\n}\n\n//# sourceURL=webpack:///./js/OverRidePreviousChannels.js?");

/***/ }),

/***/ "./js/OverrideData.js":
/*!****************************!*\
  !*** ./js/OverrideData.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OverrideData; });\nfunction OverrideData(authors) {\n  for (var i = 0; i < authors.length; i++) {\n    document.getElementsByClassName(\"flex-container\")[i].setAttribute(\"id\", authors[i].author);\n    document.getElementsByClassName(\"logo-image\")[i].setAttribute(\"src\", authors[i].urlToImage);\n    document.getElementsByClassName(\"title\")[i].innerText = authors[i].title;\n    document.getElementsByClassName(\"published\")[i].innerText = \"Published At: \".concat(authors[i].publishedAt);\n    document.getElementsByClassName(\"description\")[i].innerText = authors[i].description;\n    document.getElementsByClassName(\"continue-reading\")[i].setAttribute(\"id\", authors[i].url);\n  }\n}\n\n//# sourceURL=webpack:///./js/OverrideData.js?");

/***/ }),

/***/ "./js/PopulateHeadlines.js":
/*!*********************************!*\
  !*** ./js/PopulateHeadlines.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return populateHeadlines; });\nfunction populateHeadlines(headlines) {\n  var headlineContent = document.getElementById(\"modal-content\");\n  headlines.forEach(function (headline) {\n    var newHeadLine = document.createElement(\"p\");\n    newHeadLine.innerText = headline.title; // headlineContent.appendChild(newHeadLine);\n  });\n}\n\n//# sourceURL=webpack:///./js/PopulateHeadlines.js?");

/***/ }),

/***/ "./js/getRequiredNumberOfDivisions.js":
/*!********************************************!*\
  !*** ./js/getRequiredNumberOfDivisions.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getRequiredNumberOfDivisions; });\nfunction getRequiredNumberOfDivisions(divisionsPresentOnUI, divisionsRequiredFromApiResponse) {\n  var required = divisionsRequiredFromApiResponse.length;\n  return divisionsPresentOnUI - required;\n}\n\n//# sourceURL=webpack:///./js/getRequiredNumberOfDivisions.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/HomeTask3.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/HomeTask3.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".newsfeed {\\n  margin-right: 15px;\\n  color: white;\\n  display: inline;\\n}\\n.another-feedback {\\n  color: white;\\n  display: inline;\\n  text-align: center;\\n}\\n.header {\\n  background-color: #404040;\\n  padding: 25px 0px 30px 20px;\\n  margin-bottom: 20px;\\n}\\n.subscribe-division {\\n  float: right;\\n  margin-right: 10px;\\n}\\n.headlines {\\n  width: 65px;\\n  height: 33px;\\n  background-color: black;\\n  color: white;\\n  border: 0px;\\n  border-radius: 3px;\\n  float: left;\\n  margin-right: 10px;\\n}\\n.headlines:hover {\\n  background-color: blue;\\n  cursor: pointer;\\n}\\n.input {\\n  width: 130px;\\n  height: 27px;\\n  float: left;\\n  border-radius: 3px;\\n  text-align: center;\\n}\\n.subscribe-button {\\n  width: 65px;\\n  height: 33px;\\n  background-color: black;\\n  color: white;\\n  border: 0px;\\n  border-radius: 3px;\\n}\\n.subscribe-button:hover {\\n  background-color: crimson;\\n  cursor: pointer;\\n}\\n.select-div {\\n  text-align: center;\\n  margin: 10px;\\n}\\n.select-channel {\\n  background-color: #97a1b0;\\n  width: 130px;\\n}\\n\\n.main-div {\\n  margin-left: 15px;\\n}\\n.footer {\\n  background-color: #97a1b0;\\n  padding: 15px;\\n  text-align: center;\\n}\\n.continue-reading {\\n  background-color: #ff6666;\\n  padding: 10px;\\n  margin-top: 11px;\\n  border-width: 0px;\\n  color: white;\\n  border-radius: 3px;\\n}\\n.continue-reading:hover {\\n  background-color: crimson;\\n  cursor: pointer;\\n}\\n.dropdown {\\n  width: 210px;\\n  height: 30px;\\n  margin-top: 10px;\\n}\\n\\n.flex-container {\\n  display: flex;\\n}\\n.flex-container .logo {\\n  width: 200px;\\n  margin: 10px;\\n  text-align: center;\\n}\\n.flex-container .content {\\n  width: 1000px;\\n  margin: 10px;\\n}\\n.flex-container .category {\\n  width: 200px;\\n  margin: 10px;\\n  text-align: center;\\n}\\n.logo-image {\\n  height: 200px;\\n  width: 200px;\\n}\\n.modal {\\n  display: none; /* Hidden by default */\\n  position: fixed; /* Stay in place */\\n  z-index: 1; /* Sit on top */\\n  left: 0;\\n  top: 0;\\n  width: 100%; /* Full width */\\n  height: 100%; /* Full height */\\n  overflow: auto; /* Enable scroll if needed */\\n  background-color: rgb(0, 0, 0); /* Fallback color */\\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\\n}\\n\\n/* Modal Content/Box */\\n.modal-content {\\n  background-color: #fefefe;\\n  margin: 15% auto; /* 15% from the top and centered */\\n  padding: 20px;\\n  border: 1px solid #888;\\n  width: 80%; /* Could be more or less, depending on screen size */\\n}\\n\\n/* The Close Button */\\n.close {\\n  color: #aaa;\\n  float: right;\\n  font-size: 28px;\\n  font-weight: bold;\\n}\\n\\n.close:hover,\\n.close:focus {\\n  color: black;\\n  text-decoration: none;\\n  cursor: pointer;\\n}\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./css/HomeTask3.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ });