"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_User_CheckIn_jsx"],{

/***/ "./resources/js/Pages/Layout.jsx":
/*!***************************************!*\
  !*** ./resources/js/Pages/Layout.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var Layout = function Layout(_ref) {
  var children = _ref.children;
  var styles = {
    main: 'relative min-h-screen bg-gradient-to-br from-blue-500 to-red-500 flex flex-col items-center justify-center p-8',
    content: 'bg-white rounded-lg p-8 flex flex-col items-center justify-center'
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("main", {
    className: styles.main,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: styles.content,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Head, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("title", {
          children: "Booking"
        })
      }), children]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./resources/js/Pages/User/CheckIn.jsx":
/*!*********************************************!*\
  !*** ./resources/js/Pages/User/CheckIn.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layout */ "./resources/js/Pages/Layout.jsx");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Title */ "./resources/js/components/Title.jsx");
/* harmony import */ var _components_FormInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/FormInput */ "./resources/js/components/FormInput.jsx");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _components_Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Alert */ "./resources/js/components/Alert.jsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Button */ "./resources/js/components/Button.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var CheckIn = function CheckIn() {
  var styles = {
    container: 'flex items-center justify-center',
    reservationLink: 'text-blue-500 underline'
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    status = _useState2[0],
    setStatus = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    email = _useState6[0],
    setEmail = _useState6[1];
  var handleEmail = function handleEmail(e) {
    setEmail(e.target.value);
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var data = {
      email: email
    };
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.post('/check-in', data, {
      onError: function onError(errors) {
        setStatus(422);
        setErrors(Object.entries(errors));
        setTimeout(function () {
          return setStatus(false);
        }, 5000);
      }
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
      h1: 'Please Check In',
      paragraph: 'Enter the email you used to make your reservation.'
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_FormInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
        inputValue: email,
        onChangeEvent: handleEmail
      }), status && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Alert__WEBPACK_IMPORTED_MODULE_6__["default"], {
        message: errors,
        containerColor: 'yellow-100',
        borderColor: 'border-yellow-500',
        textColor: 'text-yellow-700'
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: styles.container,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
          type: 'submit',
          message: 'Check In'
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "flex items-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
        children: ["Don't have a reservation yet?", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__.Link, {
          className: styles.reservationLink,
          href: "/reservation",
          children: [' ', "Book a spot!", ' ']
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckIn);
CheckIn.layout = function (page) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: page
  });
};

/***/ }),

/***/ "./resources/js/components/Alert.jsx":
/*!*******************************************!*\
  !*** ./resources/js/components/Alert.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Alert = function Alert(_ref) {
  var message = _ref.message,
    containerColor = _ref.containerColor,
    borderColor = _ref.borderColor,
    textColor = _ref.textColor;
  var styles = {
    container: "alert ".concat(containerColor, " border-l-4 ").concat(borderColor, " ").concat(textColor, " p-4 m-4 rounded-lg"),
    closeButton: 'closebtn float-right cursor-pointer mx-4'
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isHidden = _useState2[0],
    setIsHidden = _useState2[1];
  var selectMessage = function selectMessage(message) {
    return typeof message === 'string' ? message : errorsDisplay(message);
  };
  var errorsDisplay = function errorsDisplay(errors) {
    return errors.map(function (error, index) {
      return error[1];
    }).join('\n');
  };
  var hideAlert = function hideAlert() {
    setIsHidden(true);
  };
  return !isHidden && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: styles.container,
    role: "alert",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
      className: styles.closeButton,
      onClick: hideAlert,
      children: "\xD7"
    }), selectMessage(message)]
  });
};
Alert.defaultProps = {
  message: '',
  containerColor: 'bg-blue-100',
  borderColor: 'border-blue-500',
  textColor: 'text-blue-700'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alert);

/***/ }),

/***/ "./resources/js/components/Button.jsx":
/*!********************************************!*\
  !*** ./resources/js/components/Button.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (_ref, innerRef) {
  var type = _ref.type,
    message = _ref.message,
    color = _ref.color,
    onClick = _ref.onClick;
  var buttonClass = "".concat(color, " text-white py-2 px-4 rounded-full font-bold text-lg mb-4 mx-2 transform transition-transform hover:scale-105");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
    className: buttonClass,
    type: type,
    onClick: onClick,
    children: message
  });
});
Button.defaultProps = {
  type: 'button',
  message: '',
  color: 'bg-blue-500',
  onClick: function onClick() {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./resources/js/components/FormInput.jsx":
/*!***********************************************!*\
  !*** ./resources/js/components/FormInput.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Label */ "./resources/js/components/Label.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var FormInput = function FormInput(_ref) {
  var inputLabel = _ref.inputLabel,
    inputValue = _ref.inputValue,
    onChangeEvent = _ref.onChangeEvent;
  var styles = {
    container: 'mb-4',
    input: 'mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-2/3'
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Label__WEBPACK_IMPORTED_MODULE_1__["default"], {
      labelName: inputLabel
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
      className: styles.input,
      type: "text",
      name: inputLabel,
      value: inputValue,
      onChange: onChangeEvent
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormInput);

/***/ }),

/***/ "./resources/js/components/Label.jsx":
/*!*******************************************!*\
  !*** ./resources/js/components/Label.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var Label = function Label(_ref) {
  var labelName = _ref.labelName;
  var styles = {
    label: 'text-gray-800 font-medium'
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
    htmlFor: labelName,
    className: styles.label,
    children: labelName
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Label);

/***/ }),

/***/ "./resources/js/components/Title.jsx":
/*!*******************************************!*\
  !*** ./resources/js/components/Title.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var Title = function Title(_ref) {
  var h1 = _ref.h1,
    paragraph = _ref.paragraph;
  var styles = {
    h1: 'text-xl font-bold mb-4 text-gray-800 flex items-center justify-center',
    paragraph: 'mb-4 text-gray-800 flex items-center justify-center'
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
      className: styles.h1,
      children: h1
    }), paragraph && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      className: styles.paragraph,
      children: paragraph
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);

/***/ })

}]);