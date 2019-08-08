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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsApiEndPoint\", function() { return newsApiEndPoint; });\nvar newsApiEndPoint = {\n  getAllChannelsEndpoint: \"https://newsapi.org/v1/sources\",\n  key: \"6ef59af3ef3b4f5d9e338bc971f9f619\",\n  articlesEndPoint: \"https://newsapi.org/v1/articles?\"\n};\n\n//# sourceURL=webpack:///./js/Endpoints.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GetListOfChannels_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetListOfChannels.js */ \"./js/GetListOfChannels.js\");\n/* harmony import */ var _GenerateDropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenerateDropdown.js */ \"./js/GenerateDropdown.js\");\n/* harmony import */ var _GetAuthors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GetAuthors.js */ \"./js/GetAuthors.js\");\n/* harmony import */ var _GenerateAuthorsDivision_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GenerateAuthorsDivision.js */ \"./js/GenerateAuthorsDivision.js\");\n/* harmony import */ var _getRequiredNumberOfDivisions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getRequiredNumberOfDivisions.js */ \"./js/getRequiredNumberOfDivisions.js\");\n/* harmony import */ var _OverRidePreviousChannels_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OverRidePreviousChannels.js */ \"./js/OverRidePreviousChannels.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar channels = Object(_GetListOfChannels_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nvar authors;\nvar masterData = {};\nchannels.then(function (data) {\n  Object(_GenerateDropdown_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\n});\n\nvar getAuthors = function getAuthors() {\n  var channelExists = false;\n  var selectedChannel = document.getElementById(\"select-channel\");\n  var channelId = selectedChannel.value;\n  var numberOfDivElements = document.getElementById(\"authors-division\").childNodes.length;\n\n  if (masterData.hasOwnProperty(channelId)) {\n    channelExists = true;\n  }\n\n  if (channelExists && numberOfDivElements != 0) {\n    var requiredDivisions = Object(_getRequiredNumberOfDivisions_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numberOfDivElements, masterData[channelId]);\n    Object(_OverRidePreviousChannels_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(masterData[channelId], requiredDivisions);\n  } else if (!channelExists && numberOfDivElements != 0) {\n    authors = Object(_GetAuthors_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(channelId);\n    authors.then(function (data) {\n      masterData = _objectSpread(_defineProperty({}, channelId, data), masterData);\n      var requiredDivisions = Object(_getRequiredNumberOfDivisions_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(numberOfDivElements, masterData[channelId]);\n      Object(_OverRidePreviousChannels_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(masterData[channelId], requiredDivisions);\n    });\n  } else {\n    authors = Object(_GetAuthors_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(channelId);\n    authors.then(function (data) {\n      masterData = _objectSpread(_defineProperty({}, channelId, data), masterData);\n      Object(_GenerateAuthorsDivision_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(data);\n    });\n  }\n}; // writing this function because this js mentioned as type module so cant use \"onchange\" attribute on select in html\n// https://stackoverflow.com/questions/53069695/cant-call-a-function-from-js-file-imported-as-type-module\n// https://stackoverflow.com/questions/53630310/use-functions-defined-in-es6-module-directly-in-html\n\n\nfunction addOnChangedEventListener() {\n  var selectedChannel = document.getElementById(\"select-channel\");\n  selectedChannel.addEventListener(\"change\", getAuthors);\n  var emailInput = document.getElementById(\"email\");\n  emailInput.addEventListener(\"blur\", validateEmailId);\n}\n\naddOnChangedEventListener(); //This function is to validate an email Id entered by the user.\n\nvar validateEmailId = function validateEmailId() {\n  alert(\"vds\");\n  var emailId = document.getElementById(\"email\").value; //regular expression to validate email id.\n\n  var emailRegex = /^[a-z0-9._]+@[a-z0-9]+.[a-z]{2,3}/;\n  var errorMessage = document.getElementById(\"error\");\n\n  if (emailRegex.test(emailId)) {\n    //if email id is valid then saving it to local storage.\n    errorMessage.innerText = \"\";\n    localStorage.setItem(\"EmailId\", emailId);\n  } else {\n    errorMessage.innerText = \"Invalid Email id\";\n    errorMessage.style.color = \"red\";\n  }\n};\n\n//# sourceURL=webpack:///./js/HomeTask3.js?");

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

/***/ "./js/getRequiredNumberOfDivisions.js":
/*!********************************************!*\
  !*** ./js/getRequiredNumberOfDivisions.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getRequiredNumberOfDivisions; });\nfunction getRequiredNumberOfDivisions(divisionsPresentOnUI, divisionsRequiredFromApiResponse) {\n  var required = divisionsRequiredFromApiResponse.length;\n  return divisionsPresentOnUI - required;\n}\n\n//# sourceURL=webpack:///./js/getRequiredNumberOfDivisions.js?");

/***/ })

/******/ });