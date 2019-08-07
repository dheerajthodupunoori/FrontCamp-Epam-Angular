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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return displayHiddenAuthors; });\nfunction displayHiddenAuthors() {\r\n  let channelToDisplay = document.getElementById(\"authors-division\").childNodes;\r\n  channelToDisplay.forEach(channel => {\r\n    channel.style.display = \"flex\";\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./js/DisplayHiddenAuthors.js?");

/***/ }),

/***/ "./js/Endpoints.js":
/*!*************************!*\
  !*** ./js/Endpoints.js ***!
  \*************************/
/*! exports provided: newsApiEndPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsApiEndPoint\", function() { return newsApiEndPoint; });\nconst newsApiEndPoint = {\r\n  getAllChannelsEndpoint: \"https://newsapi.org/v1/sources\",\r\n  key: \"6ef59af3ef3b4f5d9e338bc971f9f619\",\r\n  articlesEndPoint: \"https://newsapi.org/v1/articles?\"\r\n};\r\n\n\n//# sourceURL=webpack:///./js/Endpoints.js?");

/***/ }),

/***/ "./js/GenerateAuthorsDivision.js":
/*!***************************************!*\
  !*** ./js/GenerateAuthorsDivision.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createAuthorsDivision; });\nfunction createAuthorsDivision(authors) {\r\n  let authorsDiv = document.getElementById(\"authors-division\");\r\n  authors.forEach(author => {\r\n    let newsFeed = document.createElement(\"div\");\r\n    newsFeed.setAttribute(\"class\", \"flex-container\");\r\n    newsFeed.setAttribute(\"id\", author.author);\r\n    let logo = document.createElement(\"div\");\r\n    logo.setAttribute(\"class\", \"logo\");\r\n    let logoImage = document.createElement(\"img\");\r\n    logoImage.setAttribute(\"src\", author.urlToImage);\r\n    logoImage.setAttribute(\"class\", \"logo-image\");\r\n    logo.appendChild(logoImage);\r\n    let content = document.createElement(\"div\");\r\n    content.setAttribute(\"class\", \"content\");\r\n    let title = document.createElement(\"h3\");\r\n    title.setAttribute(\"class\", \"title\");\r\n    title.innerText = author.title;\r\n    let publishedAt = document.createElement(\"h5\");\r\n    publishedAt.setAttribute(\"class\", \"published\");\r\n    publishedAt.innerText = `Published At: ${author.publishedAt}`;\r\n    let description = document.createElement(\"p\");\r\n    description.innerText = author.description;\r\n    description.setAttribute(\"class\", \"description\");\r\n    let clickToReadMore = document.createElement(\"button\");\r\n    clickToReadMore.setAttribute(\"value\", \"Continue Reading\");\r\n    clickToReadMore.setAttribute(\"class\", \"continue-reading\");\r\n    clickToReadMore.setAttribute(\"id\", author.url);\r\n    clickToReadMore.addEventListener(\"click\", continueReading);\r\n    clickToReadMore.innerText = \"Continue Reading\";\r\n    content.appendChild(title);\r\n    content.appendChild(publishedAt);\r\n    content.appendChild(description);\r\n    content.appendChild(clickToReadMore);\r\n    newsFeed.appendChild(logo);\r\n    newsFeed.appendChild(content);\r\n    authorsDiv.appendChild(newsFeed);\r\n  });\r\n}\r\n\r\nvar continueReading = function() {\r\n  window.open(this.id);\r\n};\r\n\n\n//# sourceURL=webpack:///./js/GenerateAuthorsDivision.js?");

/***/ }),

/***/ "./js/GenerateDropdown.js":
/*!********************************!*\
  !*** ./js/GenerateDropdown.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createChannelDropdown; });\nfunction createChannelDropdown(result) {\r\n  let select_channel = document.getElementById(\"select-channel\");\r\n  let channel = document.createElement(\"option\");\r\n  channel.setAttribute(\"selected\", \"selected\");\r\n  channel.setAttribute(\"disabled\", \"disabled\");\r\n  channel.innerText = `--Select Channel--`;\r\n  select_channel.appendChild(channel);\r\n  result.forEach(item => {\r\n    let channel = document.createElement(\"option\");\r\n    channel.setAttribute(\"value\", item.id);\r\n    channel.innerText = item.name;\r\n    select_channel.appendChild(channel);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./js/GenerateDropdown.js?");

/***/ }),

/***/ "./js/GetAuthors.js":
/*!**************************!*\
  !*** ./js/GetAuthors.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getAuthorsList; });\n/* harmony import */ var _Endpoints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Endpoints.js */ \"./js/Endpoints.js\");\n\r\n\r\nfunction getAuthorsList(channelId) {\r\n  let channelAuthorEndpoint = _Endpoints_js__WEBPACK_IMPORTED_MODULE_0__[\"newsApiEndPoint\"].articlesEndPoint;\r\n  const url = `${channelAuthorEndpoint}source=${channelId}&apiKey=${\r\n    _Endpoints_js__WEBPACK_IMPORTED_MODULE_0__[\"newsApiEndPoint\"].key\r\n  }`;\r\n  return fetch(url)\r\n    .then(response => response.json())\r\n    .then(json => json.articles)\r\n    .catch(error => JSON.stringify(error));\r\n}\r\n\n\n//# sourceURL=webpack:///./js/GetAuthors.js?");

/***/ }),

/***/ "./js/GetListOfChannels.js":
/*!*********************************!*\
  !*** ./js/GetListOfChannels.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getChannels; });\n/* harmony import */ var _Endpoints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Endpoints.js */ \"./js/Endpoints.js\");\n\r\nfunction getChannels() {\r\n  return fetch(_Endpoints_js__WEBPACK_IMPORTED_MODULE_0__[\"newsApiEndPoint\"].getAllChannelsEndpoint)\r\n    .then(response => response.json())\r\n    .then(json => json.sources)\r\n    .catch(error => JSON.stringify(error));\r\n}\r\n\n\n//# sourceURL=webpack:///./js/GetListOfChannels.js?");

/***/ }),

/***/ "./js/HideUnnecessaryChannels.js":
/*!***************************************!*\
  !*** ./js/HideUnnecessaryChannels.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return hideUnnecessaryChannel; });\nfunction hideUnnecessaryChannel(numberOfDivisionsToBeHidden) {\r\n  let divisionsToBeHidden = document.getElementById(\"authors-division\")\r\n    .childNodes;\r\n  for (\r\n    let i = divisionsToBeHidden.length - numberOfDivisionsToBeHidden;\r\n    i < divisionsToBeHidden.length;\r\n    i++\r\n  ) {\r\n    divisionsToBeHidden[i].style.display = \"none\";\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/HideUnnecessaryChannels.js?");

/***/ }),

/***/ "./js/HomeTask3.js":
/*!*************************!*\
  !*** ./js/HomeTask3.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GetListOfChannels_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetListOfChannels.js */ \"./js/GetListOfChannels.js\");\n/* harmony import */ var _GenerateDropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenerateDropdown.js */ \"./js/GenerateDropdown.js\");\n/* harmony import */ var _GetAuthors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GetAuthors.js */ \"./js/GetAuthors.js\");\n/* harmony import */ var _GenerateAuthorsDivision_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GenerateAuthorsDivision.js */ \"./js/GenerateAuthorsDivision.js\");\n/* harmony import */ var _getRequiredNumberOfDivisions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getRequiredNumberOfDivisions.js */ \"./js/getRequiredNumberOfDivisions.js\");\n/* harmony import */ var _OverRidePreviousChannels_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OverRidePreviousChannels.js */ \"./js/OverRidePreviousChannels.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar channels = Object(_GetListOfChannels_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nvar authors;\r\nvar masterData = {};\r\nchannels.then(data => {\r\n  Object(_GenerateDropdown_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\r\n});\r\nvar getAuthors = function() {\r\n  let channelExists = false;\r\n  let selectedChannel = document.getElementById(\"select-channel\");\r\n  let channelId = selectedChannel.value;\r\n  let numberOfDivElements = document.getElementById(\"authors-division\")\r\n    .childNodes.length;\r\n  if (masterData.hasOwnProperty(channelId)) {\r\n    channelExists = true;\r\n  }\r\n  if (channelExists && numberOfDivElements != 0) {\r\n    let requiredDivisions = Object(_getRequiredNumberOfDivisions_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\r\n      numberOfDivElements,\r\n      masterData[channelId]\r\n    );\r\n    Object(_OverRidePreviousChannels_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(masterData[channelId], requiredDivisions);\r\n  } else if (!channelExists && numberOfDivElements != 0) {\r\n    authors = Object(_GetAuthors_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(channelId);\r\n    authors.then(data => {\r\n      masterData = {\r\n        [channelId]: data,\r\n        ...masterData\r\n      };\r\n      let requiredDivisions = Object(_getRequiredNumberOfDivisions_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\r\n        numberOfDivElements,\r\n        masterData[channelId]\r\n      );\r\n      Object(_OverRidePreviousChannels_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(masterData[channelId], requiredDivisions);\r\n    });\r\n  } else {\r\n    authors = Object(_GetAuthors_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(channelId);\r\n    authors.then(data => {\r\n      masterData = {\r\n        [channelId]: data,\r\n        ...masterData\r\n      };\r\n      Object(_GenerateAuthorsDivision_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(data);\r\n    });\r\n  }\r\n};\r\n// writing this function because this js mentioned as type module so cant use \"onchange\" attribute on select in html\r\n// https://stackoverflow.com/questions/53069695/cant-call-a-function-from-js-file-imported-as-type-module\r\n// https://stackoverflow.com/questions/53630310/use-functions-defined-in-es6-module-directly-in-html\r\nfunction addOnChangedEventListener() {\r\n  var selectedChannel = document.getElementById(\"select-channel\");\r\n  selectedChannel.addEventListener(\"change\", getAuthors);\r\n  let emailInput = document.getElementById(\"email\");\r\n  emailInput.addEventListener(\"blur\", validateEmailId);\r\n}\r\naddOnChangedEventListener();\r\n//This function is to validate an email Id entered by the user.\r\nvar validateEmailId = function() {\r\n  alert(\"vds\");\r\n  let emailId = document.getElementById(\"email\").value;\r\n  //regular expression to validate email id.\r\n  let emailRegex = /^[a-z0-9._]+@[a-z0-9]+.[a-z]{2,3}/;\r\n  let errorMessage = document.getElementById(\"error\");\r\n  if (emailRegex.test(emailId)) {\r\n    //if email id is valid then saving it to local storage.\r\n    errorMessage.innerText = \"\";\r\n    localStorage.setItem(\"EmailId\", emailId);\r\n  } else {\r\n    errorMessage.innerText = \"Invalid Email id\";\r\n    errorMessage.style.color = \"red\";\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack:///./js/HomeTask3.js?");

/***/ }),

/***/ "./js/OverRidePreviousChannels.js":
/*!****************************************!*\
  !*** ./js/OverRidePreviousChannels.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return overRidePreviousChannels; });\n/* harmony import */ var _GenerateAuthorsDivision_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GenerateAuthorsDivision.js */ \"./js/GenerateAuthorsDivision.js\");\n/* harmony import */ var _OverrideData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OverrideData.js */ \"./js/OverrideData.js\");\n/* harmony import */ var _HideUnnecessaryChannels_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HideUnnecessaryChannels.js */ \"./js/HideUnnecessaryChannels.js\");\n/* harmony import */ var _DisplayHiddenAuthors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DisplayHiddenAuthors.js */ \"./js/DisplayHiddenAuthors.js\");\n\r\n\r\n\r\n\r\n\r\nfunction overRidePreviousChannels(\r\n  requiredChannelTobeDisplayed,\r\n  extraDivisionsRequired\r\n) {\r\n  if (extraDivisionsRequired == 0) {\r\n    Object(_OverrideData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(requiredChannelTobeDisplayed);\r\n    Object(_DisplayHiddenAuthors_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n  } else if (extraDivisionsRequired > 0) {\r\n    Object(_OverrideData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(requiredChannelTobeDisplayed);\r\n    Object(_HideUnnecessaryChannels_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(extraDivisionsRequired);\r\n  } else {\r\n    let divisionsToBeCreated = Math.abs(extraDivisionsRequired);\r\n    Object(_OverrideData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n      requiredChannelTobeDisplayed.slice(\r\n        0,\r\n        requiredChannelTobeDisplayed.length - divisionsToBeCreated\r\n      )\r\n    );\r\n    Object(_GenerateAuthorsDivision_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n      requiredChannelTobeDisplayed.slice(\r\n        requiredChannelTobeDisplayed.length - divisionsToBeCreated,\r\n        requiredChannelTobeDisplayed.length\r\n      )\r\n    );\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/OverRidePreviousChannels.js?");

/***/ }),

/***/ "./js/OverrideData.js":
/*!****************************!*\
  !*** ./js/OverrideData.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OverrideData; });\nfunction OverrideData(authors) {\r\n  for (let i = 0; i < authors.length; i++) {\r\n    document\r\n      .getElementsByClassName(\"flex-container\")\r\n      [i].setAttribute(\"id\", authors[i].author);\r\n    document\r\n      .getElementsByClassName(\"logo-image\")\r\n      [i].setAttribute(\"src\", authors[i].urlToImage);\r\n    document.getElementsByClassName(\"title\")[i].innerText = authors[i].title;\r\n    document.getElementsByClassName(\"published\")[\r\n      i\r\n    ].innerText = `Published At: ${authors[i].publishedAt}`;\r\n    document.getElementsByClassName(\"description\")[i].innerText =\r\n      authors[i].description;\r\n    document\r\n      .getElementsByClassName(\"continue-reading\")\r\n      [i].setAttribute(\"id\", authors[i].url);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/OverrideData.js?");

/***/ }),

/***/ "./js/getRequiredNumberOfDivisions.js":
/*!********************************************!*\
  !*** ./js/getRequiredNumberOfDivisions.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getRequiredNumberOfDivisions; });\nfunction getRequiredNumberOfDivisions(\r\n  divisionsPresentOnUI,\r\n  divisionsRequiredFromApiResponse\r\n) {\r\n  let required = divisionsRequiredFromApiResponse.length;\r\n  return divisionsPresentOnUI - required;\r\n}\r\n\n\n//# sourceURL=webpack:///./js/getRequiredNumberOfDivisions.js?");

/***/ })

/******/ });