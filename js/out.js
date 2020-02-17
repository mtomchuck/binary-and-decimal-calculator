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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/BinaryCalculator.js":
/*!********************************!*\
  !*** ./js/BinaryCalculator.js ***!
  \********************************/
/*! exports provided: BinaryCalculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinaryCalculator", function() { return BinaryCalculator; });
/* harmony import */ var _Calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calculator */ "./js/Calculator.js");


class BinaryCalculator extends _Calculator__WEBPACK_IMPORTED_MODULE_0__["Calculator"] {
  constructor(settings) {
    super(settings);
    console.log(this.getName());
  }
  /* Method add numbers in two array
  *  @param {array} numberX First number
  *  @param {array} numberY Second number
  *  @return {array}
  */


  add(numberX, numberY) {
    let result = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let i = numberX.length - 1; i >= 0; i--) {
      let carryBit = numberX[i] + numberY[i] + result[i];

      if (carryBit === 2) {
        result[i] = 0;
        result[i - 1] = 1;
      } else if (carryBit === 3) {
        result[i] = 1;
        result[i - 1] = 1;
      } else {
        result[i] = carryBit;
      }
    }

    return result;
  }
  /* Method changing number
  *  @param {jQuery element} root Parent element
  */


  changeNumber(root) {
    let activeElement = root.find('.active');
    activeElement.removeClass("active");
    activeElement.siblings().addClass("active");
    root.children(":first-child").slideToggle(() => {
      this.checkNumber();
      this.updateResult();
    });
  }
  /* Method changing Result
  */


  updateResult() {
    let root = this.$calculatorDOMElement;
    let $resultNumber = root.children(".group-number").children(".result-bit");

    for (let i = this.resultNumberArray.length - 1, j = 0; i >= 0; i--, j++) {
      let valueResult = parseInt($resultNumber.eq(j).find(".active").text());

      if (this.resultNumberArray[i] != valueResult) {
        let activeElement = $resultNumber.eq(j).find(".active").removeClass("active");
        activeElement.siblings().addClass("active");
        $resultNumber.eq(j).children(":first-child").slideToggle();
      }
    }
  }

}



/***/ }),

/***/ "./js/Calculator.js":
/*!**************************!*\
  !*** ./js/Calculator.js ***!
  \**************************/
/*! exports provided: Calculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calculator", function() { return Calculator; });
/* abstract */
class Calculator {
  constructor(selectorName) {
    this.name = selectorName;
    this.$calculatorDOMElement = $(selectorName);
    this.firstNumberArray = [];
    this.secondNumberArray = [];
    this.resultNumberArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.initEvents();
  }
  /* Abstract method add numbers in two array
  *  @param {array} numberX First number
  *  @param {array} numberY Second number
  *  @return {array}
  */


  add(numberX, numberY) {
    console.error("Powinieneś zaimplementować tą metodę w klasie dziedziczącej. ");
    return [0, 0, 0, 0, 0, 0, 0, 0];
  }
  /* Abstract method changing number
  *  @param {jQuery element} root Parent element
  */


  changeNumber(root) {
    console.error("Powinieneś zaimplementować tą metodę w klasie dziedziczącej. ");
  }
  /* Abstract method changing Result
  */


  updateResult() {} //    console.error("Powinieneś zaimplementować tą metodę w klasie dziedziczącej. ");

  /* Get the name of calculator selector
  *  @return {string}
  */


  getName() {
    return `Hello I am ${this.name}`;
  }
  /* Check what number is set in both numbers and add
  *  @return {string}
  */


  checkNumber() {
    let root = this.$calculatorDOMElement;
    let $firstNumber = root.children(".group-number").children("label:first-child");
    let $secondNumber = root.children(".group-number").children("label:nth-child(2)");
    let $resultNumber = root.children(".group-number").children(".result-bit");

    for (let i = $firstNumber.length - 1, j = 0; i >= 0; i--, j++) {
      this.firstNumberArray[i] = parseInt($firstNumber.eq(j).find('.active').text());
      this.secondNumberArray[i] = parseInt($secondNumber.eq(j).find('.active').text());
    }

    this.resultNumberArray = this.add(this.firstNumberArray, this.secondNumberArray);
  }
  /* Set event click on number
  */


  initEvents() {
    this.$calculatorDOMElement.find(".display-number").on('click', event => {
      event.stopPropagation();
      const parentLabel = $(event.target).parent(".display-number"); //event.target -> element faktycznie kliknięty

      this.changeNumber(parentLabel);
    });
  }

}



/***/ }),

/***/ "./js/DecCalculator.js":
/*!*****************************!*\
  !*** ./js/DecCalculator.js ***!
  \*****************************/
/*! exports provided: DecCalculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecCalculator", function() { return DecCalculator; });
/* harmony import */ var _Calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calculator */ "./js/Calculator.js");


class DecCalculator extends _Calculator__WEBPACK_IMPORTED_MODULE_0__["Calculator"] {
  constructor(settings) {
    super(settings);
    console.log(this.getName());
  }

  add(numberX, numberY) {
    let result = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let i = numberX.length - 1; i >= 0; i--) {
      result[i] = (numberX[i] + numberY[i]) % 10;

      if (numberX[i] + numberY[i] > 9) {
        numberX[i - 1]++;
      }
    }

    console.log(result);
    return result;
  }

  updateResult() {
    let root = this.$calculatorDOMElement;
    let $resultNumber = root.children(".group-number").children(".result-bit");

    for (let i = this.resultNumberArray.length - 1, j = 0; i >= 0; i--, j++) {
      $resultNumber.eq(j).find(".active").text(this.resultNumberArray[i]);
    }
  }

  changeNumber(root) {
    console.log(root);
    root.find("span").text("");
    root.find("span").attr("contenteditable", true);
    root.find("span").trigger("focus"); // Typing numbers to calculator

    root.find("span").on("keydown", function (e) {
      return false;
    });
    root.find("span").on("keyup", function (e) {
      if (!isNaN(e.key)) {
        $(this).text(e.key);
      }
    });

    if (root.find("span").text("")) {
      return root.find("span").text(0);
    }

    ;
  }

  initEvents(...param) {
    super.initEvents(...param), this.$calculatorDOMElement.find('.operator-bar span').on("click", e => {
      e.stopPropagation();
      this.checkNumber();
      this.updateResult();
    });
    $(document).on("click", () => {
      this.$calculatorDOMElement.find(".display-number span").each(function () {
        $(this).text(Number($(this).text()));
      });
      this.$calculatorDOMElement.find('.operator-bar span').click();
    });
  }

}



/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BinaryCalculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BinaryCalculator */ "./js/BinaryCalculator.js");
/* harmony import */ var _DecCalculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DecCalculator */ "./js/DecCalculator.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./js/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);



$(document).ready(function () {
  const bitCalc = new _BinaryCalculator__WEBPACK_IMPORTED_MODULE_0__["BinaryCalculator"](".binary-calculator");
  const decCalc = new _DecCalculator__WEBPACK_IMPORTED_MODULE_1__["DecCalculator"](".dec-calculator");
});

/***/ }),

/***/ "./js/style.scss":
/*!***********************!*\
  !*** ./js/style.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./js/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./js/style.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./js/style.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  background: #C0C0C0; }\n\nh2 {\n  font-family: Tahoma;\n  font-size: 2.6em;\n  text-align: center;\n  color: white;\n  text-shadow: 3px 3px 0 rgba(255, 255, 255, 0.3);\n  padding: 1em;\n  box-sizing: border-box; }\n\n.info {\n  width: 45vw;\n  max-width: 600px;\n  font-family: Tahoma;\n  line-height: 1.4;\n  margin: 0 auto;\n  text-align: center;\n  color: #8D8276; }\n\nsection {\n  margin-top: 50px;\n  width: calc(100vw - 60px);\n  height: calc(100vh - 60px); }\n\n.binary-calculator, .dec-calculator {\n  display: block;\n  width: 950px;\n  height: 255px;\n  position: relative;\n  left: 10vw;\n  margin-top: 15vh; }\n  .binary-calculator .group-number, .dec-calculator .group-number {\n    position: absolute; }\n  .binary-calculator .display-number,\n  .binary-calculator .result-bit, .dec-calculator .display-number,\n  .dec-calculator .result-bit {\n    display: block;\n    width: 85px;\n    height: 85px;\n    position: absolute;\n    overflow: hidden;\n    box-sizing: border-box;\n    font-family: Arial;\n    font-size: 34px; }\n  .binary-calculator .display-number, .dec-calculator .display-number {\n    cursor: pointer;\n    background: #dadada;\n    border-radius: 10%; }\n    .binary-calculator .display-number:hover, .dec-calculator .display-number:hover {\n      font-size: 42.5px; }\n  .binary-calculator .display-number__value--zero,\n  .binary-calculator .display-number__value--one, .dec-calculator .display-number__value--zero,\n  .dec-calculator .display-number__value--one {\n    display: block;\n    float: left;\n    width: 85px;\n    height: 85px;\n    text-align: center;\n    line-height: 85px; }\n  .binary-calculator .display-number__value--zero,\n  .binary-calculator .display-number__value--one, .dec-calculator .display-number__value--zero,\n  .dec-calculator .display-number__value--one {\n    color: #8D8276; }\n  .binary-calculator .result-bit .display-number__value--zero,\n  .binary-calculator .result-bit .display-number__value--one, .dec-calculator .result-bit .display-number__value--zero,\n  .dec-calculator .result-bit .display-number__value--one {\n    color: white; }\n  .binary-calculator .operator-bar, .dec-calculator .operator-bar {\n    position: relative;\n    display: block;\n    width: 100%;\n    height: 5px;\n    background: #545E6E;\n    top: 195px;\n    left: 85px;\n    border-radius: 5px; }\n    .binary-calculator .operator-bar span, .dec-calculator .operator-bar span {\n      font-size: 85px;\n      position: absolute;\n      top: -85px;\n      left: 25px;\n      font-family: Tahoma;\n      color: #545E6E;\n      cursor: pointer; }\n  .binary-calculator .group-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(1) {\n    right: 0px; }\n    .binary-calculator .group-number:nth-of-type(1) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(1) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(1) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(1) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(1) .result-bit, .dec-calculator .group-number:nth-of-type(1) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(2) {\n    right: 95px; }\n    .binary-calculator .group-number:nth-of-type(2) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(2) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(2) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(2) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(2) .result-bit, .dec-calculator .group-number:nth-of-type(2) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(3), .dec-calculator .group-number:nth-of-type(3) {\n    right: 190px; }\n    .binary-calculator .group-number:nth-of-type(3) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(3) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(3) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(3) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(3) .result-bit, .dec-calculator .group-number:nth-of-type(3) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(4), .dec-calculator .group-number:nth-of-type(4) {\n    right: 285px; }\n    .binary-calculator .group-number:nth-of-type(4) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(4) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(4) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(4) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(4) .result-bit, .dec-calculator .group-number:nth-of-type(4) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(5), .dec-calculator .group-number:nth-of-type(5) {\n    right: 380px; }\n    .binary-calculator .group-number:nth-of-type(5) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(5) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(5) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(5) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(5) .result-bit, .dec-calculator .group-number:nth-of-type(5) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(6), .dec-calculator .group-number:nth-of-type(6) {\n    right: 475px; }\n    .binary-calculator .group-number:nth-of-type(6) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(6) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(6) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(6) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(6) .result-bit, .dec-calculator .group-number:nth-of-type(6) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(7), .dec-calculator .group-number:nth-of-type(7) {\n    right: 570px; }\n    .binary-calculator .group-number:nth-of-type(7) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(7) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(7) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(7) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(7) .result-bit, .dec-calculator .group-number:nth-of-type(7) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(8), .dec-calculator .group-number:nth-of-type(8) {\n    right: 665px; }\n    .binary-calculator .group-number:nth-of-type(8) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(8) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(8) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(8) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(8) .result-bit, .dec-calculator .group-number:nth-of-type(8) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(9), .dec-calculator .group-number:nth-of-type(9) {\n    right: 760px; }\n    .binary-calculator .group-number:nth-of-type(9) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(9) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(9) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(9) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(9) .result-bit, .dec-calculator .group-number:nth-of-type(9) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(10), .dec-calculator .group-number:nth-of-type(10) {\n    right: 855px; }\n    .binary-calculator .group-number:nth-of-type(10) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(10) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(10) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(10) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(10) .result-bit, .dec-calculator .group-number:nth-of-type(10) .result-bit {\n      top: 200px; }\n  .binary-calculator .group-number:nth-of-type(11), .dec-calculator .group-number:nth-of-type(11) {\n    right: 950px; }\n    .binary-calculator .group-number:nth-of-type(11) .display-number:nth-of-type(1), .dec-calculator .group-number:nth-of-type(11) .display-number:nth-of-type(1) {\n      top: 0; }\n    .binary-calculator .group-number:nth-of-type(11) .display-number:nth-of-type(2), .dec-calculator .group-number:nth-of-type(11) .display-number:nth-of-type(2) {\n      top: 95px; }\n    .binary-calculator .group-number:nth-of-type(11) .result-bit, .dec-calculator .group-number:nth-of-type(11) .result-bit {\n      top: 200px; }\n  .binary-calculator .display-17,\n  .binary-calculator .display-18, .dec-calculator .display-17,\n  .dec-calculator .display-18 {\n    visibility: hidden; }\n  .binary-calculator .result-9, .dec-calculator .result-9 {\n    border-bottom: 5px solid #dadada; }\n    .binary-calculator .result-9:after, .dec-calculator .result-9:after {\n      content: 'carry';\n      position: absolute;\n      bottom: 5px;\n      left: 0;\n      text-align: center;\n      font-size: .5em;\n      font-family: Tahoma;\n      width: 100%;\n      color: white; }\n\n.tooltip {\n  display: none; }\n\n.tooltip {\n  background: lightslategrey;\n  border: 2px solid #666666;\n  font-size: 20px;\n  padding: 10px;\n  position: relative;\n  text-align: center;\n  width: 158px;\n  top: -111px;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  border-radius: 5px;\n  -moz-box-shadow: 0px 0px 5px #aaa;\n  -webkit-box-shadow: 0px 0px 5px #aaa;\n  box-shadow: 0px 0px 5px #aaa; }\n\n.chatBubbleArrow {\n  border-color: lightslategrey transparent transparent transparent;\n  border-style: solid;\n  border-width: 10px;\n  height: 0px;\n  width: 0px;\n  position: absolute;\n  bottom: -19px;\n  left: 30px; }\n\n.chatBubbleArrowBorder {\n  border-color: #666666 transparent transparent transparent;\n  border-style: solid;\n  border-width: 10px;\n  height: 0;\n  width: 0;\n  position: absolute;\n  bottom: -22px;\n  left: 30px; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ });
//# sourceMappingURL=out.js.map