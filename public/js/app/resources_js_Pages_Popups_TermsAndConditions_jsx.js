"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Popups_TermsAndConditions_jsx"],{

/***/ "./resources/js/Pages/Popups/TermsAndConditions.jsx":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Popups/TermsAndConditions.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactjs-popup */ "./node_modules/reactjs-popup/dist/reactjs-popup.esm.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Button */ "./resources/js/components/Button.jsx");
/* harmony import */ var reactjs_popup_dist_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactjs-popup/dist/index.css */ "./node_modules/reactjs-popup/dist/index.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var TermsAndConditions = function TermsAndConditions(_ref) {
  var onAccept = _ref.onAccept,
    onDecline = _ref.onDecline;
  var styles = {
    popupBox: 'fixed inset-0 flex items-center justify-center bg-black bg-opacity-50',
    box: 'w-2/3 bg-white rounded-md p-6 border border-gray-300 text-center',
    heading: 'text-2xl font-bold mb-4',
    content: 'text-lg mb-4',
    buttonsContainer: 'flex justify-center'
  };
  var handleDecline = function handleDecline() {
    onDecline(false);
  };
  var handleAccept = function handleAccept() {
    onAccept(true);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactjs_popup__WEBPACK_IMPORTED_MODULE_1__["default"], {
    trigger: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      message: "Terms and Conditions",
      color: "bg-purple-400"
    }),
    modal: true,
    nested: true,
    position: "center center",
    children: function children(close) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: styles.popupBox,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: styles.box,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: styles.heading,
            children: "Terms and Conditions"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: styles.content,
            children: "By using this website, you agree to the terms and conditions."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: styles.buttonsContainer,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
              onClick: function onClick() {
                handleDecline();
                close();
              },
              message: "Decline",
              color: "bg-gray-600"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
              onClick: function onClick() {
                handleAccept();
                close();
              },
              message: "Accept"
            })]
          })]
        })
      });
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TermsAndConditions);

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/reactjs-popup/dist/index.css":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/reactjs-popup/dist/index.css ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".popup-content{margin:auto;background:#fff;width:50%;padding:5px;border:1px solid #d7d7d7}[role=tooltip].popup-content{width:200px;box-shadow:0 0 3px rgba(0,0,0,.16);border-radius:5px}.popup-overlay{background:rgba(0,0,0,.5)}[data-popup=tooltip].popup-overlay{background:transparent}.popup-arrow{filter:drop-shadow(0 -3px 3px rgba(0,0,0,.16));color:#fff;stroke-width:2px;stroke:#d7d7d7;stroke-dasharray:30px;stroke-dashoffset:-54px;left:0;right:0;top:0;bottom:0}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
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

/***/ }),

/***/ "./node_modules/reactjs-popup/dist/reactjs-popup.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/reactjs-popup/dist/reactjs-popup.esm.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Popup: () => (/* binding */ Popup),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");



function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var useOnEscape = function useOnEscape(handler, active) {
  if (active === void 0) {
    active = true;
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!active) return;

    var listener = function listener(event) {
      // check if key is an Escape
      if (event.key === 'Escape') handler(event);
    };

    document.addEventListener('keyup', listener);
    return function () {
      if (!active) return;
      document.removeEventListener('keyup', listener);
    };
  }, [handler, active]);
};
var useRepositionOnResize = function useRepositionOnResize(handler, active) {
  if (active === void 0) {
    active = true;
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!active) return;

    var listener = function listener() {
      handler();
    };

    window.addEventListener('resize', listener);
    return function () {
      if (!active) return;
      window.removeEventListener('resize', listener);
    };
  }, [handler, active]);
};
var useOnClickOutside = function useOnClickOutside(ref, handler, active) {
  if (active === void 0) {
    active = true;
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!active) return;

    var listener = function listener(event) {
      // Do nothing if clicking ref's element or descendent elements
      var refs = Array.isArray(ref) ? ref : [ref];
      var contains = false;
      refs.forEach(function (r) {
        if (!r.current || r.current.contains(event.target)) {
          contains = true;
          return;
        }
      });
      event.stopPropagation();
      if (!contains) handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return function () {
      if (!active) return;
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, active]);
}; // Make sure that user is not able TAB out of the Modal content on Open

var useTabbing = function useTabbing(contentRef, active) {
  if (active === void 0) {
    active = true;
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!active) return;

    var listener = function listener(event) {
      // check if key is an Tab
      if (event.keyCode === 9) {
        var _contentRef$current;

        var els = contentRef === null || contentRef === void 0 ? void 0 : (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');
        var focusableEls = Array.prototype.slice.call(els);

        if (focusableEls.length === 1) {
          event.preventDefault();
          return;
        }

        var firstFocusableEl = focusableEls[0];
        var lastFocusableEl = focusableEls[focusableEls.length - 1];

        if (event.shiftKey && document.activeElement === firstFocusableEl) {
          event.preventDefault();
          lastFocusableEl.focus();
        } else if (document.activeElement === lastFocusableEl) {
          event.preventDefault();
          firstFocusableEl.focus();
        }
      }
    };

    document.addEventListener('keydown', listener);
    return function () {
      if (!active) return;
      document.removeEventListener('keydown', listener);
    };
  }, [contentRef, active]);
};
var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

var Style = {
  popupContent: {
    tooltip: {
      position: 'absolute',
      zIndex: 999
    },
    modal: {
      position: 'relative',
      margin: 'auto'
    }
  },
  popupArrow: {
    height: '8px',
    width: '16px',
    position: 'absolute',
    background: 'transparent',
    color: '#FFF',
    zIndex: -1
  },
  overlay: {
    tooltip: {
      position: 'fixed',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      zIndex: 999
    },
    modal: {
      position: 'fixed',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      display: 'flex',
      zIndex: 999
    }
  }
};

var POSITION_TYPES = ['top left', 'top center', 'top right', 'right top', 'right center', 'right bottom', 'bottom left', 'bottom center', 'bottom right', 'left top', 'left center', 'left bottom'];

var getCoordinatesForPosition = function getCoordinatesForPosition(triggerBounding, ContentBounding, position, //PopupPosition | PopupPosition[],
arrow, _ref) {
  var offsetX = _ref.offsetX,
      offsetY = _ref.offsetY;
  var margin = arrow ? 8 : 0;
  var args = position.split(' '); // the step N 1 : center the popup content => ok

  var CenterTop = triggerBounding.top + triggerBounding.height / 2;
  var CenterLeft = triggerBounding.left + triggerBounding.width / 2;
  var height = ContentBounding.height,
      width = ContentBounding.width;
  var top = CenterTop - height / 2;
  var left = CenterLeft - width / 2;
  var transform = '';
  var arrowTop = '0%';
  var arrowLeft = '0%'; // the  step N 2 : => ok

  switch (args[0]) {
    case 'top':
      top -= height / 2 + triggerBounding.height / 2 + margin;
      transform = "rotate(180deg)  translateX(50%)";
      arrowTop = '100%';
      arrowLeft = '50%';
      break;

    case 'bottom':
      top += height / 2 + triggerBounding.height / 2 + margin;
      transform = "rotate(0deg) translateY(-100%) translateX(-50%)";
      arrowLeft = '50%';
      break;

    case 'left':
      left -= width / 2 + triggerBounding.width / 2 + margin;
      transform = " rotate(90deg)  translateY(50%) translateX(-25%)";
      arrowLeft = '100%';
      arrowTop = '50%';
      break;

    case 'right':
      left += width / 2 + triggerBounding.width / 2 + margin;
      transform = "rotate(-90deg)  translateY(-150%) translateX(25%)";
      arrowTop = '50%';
      break;
  }

  switch (args[1]) {
    case 'top':
      top = triggerBounding.top;
      arrowTop = triggerBounding.height / 2 + "px";
      break;

    case 'bottom':
      top = triggerBounding.top - height + triggerBounding.height;
      arrowTop = height - triggerBounding.height / 2 + "px";
      break;

    case 'left':
      left = triggerBounding.left;
      arrowLeft = triggerBounding.width / 2 + "px";
      break;

    case 'right':
      left = triggerBounding.left - width + triggerBounding.width;
      arrowLeft = width - triggerBounding.width / 2 + "px";
      break;
  }

  top = args[0] === 'top' ? top - offsetY : top + offsetY;
  left = args[0] === 'left' ? left - offsetX : left + offsetX;
  return {
    top: top,
    left: left,
    transform: transform,
    arrowLeft: arrowLeft,
    arrowTop: arrowTop
  };
};

var getTooltipBoundary = function getTooltipBoundary(keepTooltipInside) {
  // add viewport
  var boundingBox = {
    top: 0,
    left: 0,

    /* eslint-disable-next-line no-undef */
    width: window.innerWidth,

    /* eslint-disable-next-line no-undef */
    height: window.innerHeight
  };

  if (typeof keepTooltipInside === 'string') {
    /* eslint-disable-next-line no-undef */
    var selector = document.querySelector(keepTooltipInside);

    if (true) {
      if (selector === null) throw new Error(keepTooltipInside + " selector does not exist : keepTooltipInside must be a valid html selector 'class' or 'Id'  or a boolean value");
    }

    if (selector !== null) boundingBox = selector.getBoundingClientRect();
  }

  return boundingBox;
};

var calculatePosition = function calculatePosition(triggerBounding, ContentBounding, position, arrow, _ref2, keepTooltipInside) {
  var offsetX = _ref2.offsetX,
      offsetY = _ref2.offsetY;
  var bestCoords = {
    arrowLeft: '0%',
    arrowTop: '0%',
    left: 0,
    top: 0,
    transform: 'rotate(135deg)'
  };
  var i = 0;
  var wrapperBox = getTooltipBoundary(keepTooltipInside);
  var positions = Array.isArray(position) ? position : [position]; // keepTooltipInside would be activated if the  keepTooltipInside exist or the position is Array

  if (keepTooltipInside || Array.isArray(position)) positions = [].concat(positions, POSITION_TYPES); // add viewPort for WarpperBox
  // wrapperBox.top = wrapperBox.top + window.scrollY;
  // wrapperBox.left = wrapperBox.left + window.scrollX;

  while (i < positions.length) {
    bestCoords = getCoordinatesForPosition(triggerBounding, ContentBounding, positions[i], arrow, {
      offsetX: offsetX,
      offsetY: offsetY
    });
    var contentBox = {
      top: bestCoords.top,
      left: bestCoords.left,
      width: ContentBounding.width,
      height: ContentBounding.height
    };

    if (contentBox.top <= wrapperBox.top || contentBox.left <= wrapperBox.left || contentBox.top + contentBox.height >= wrapperBox.top + wrapperBox.height || contentBox.left + contentBox.width >= wrapperBox.left + wrapperBox.width) {
      i++;
    } else {
      break;
    }
  }

  return bestCoords;
};

var popupIdCounter = 0;

var getRootPopup = function getRootPopup() {
  var PopupRoot = document.getElementById('popup-root');

  if (PopupRoot === null) {
    PopupRoot = document.createElement('div');
    PopupRoot.setAttribute('id', 'popup-root');
    document.body.appendChild(PopupRoot);
  }

  return PopupRoot;
};

var Popup = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var _ref$trigger = _ref.trigger,
      trigger = _ref$trigger === void 0 ? null : _ref$trigger,
      _ref$onOpen = _ref.onOpen,
      onOpen = _ref$onOpen === void 0 ? function () {} : _ref$onOpen,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
      _ref$defaultOpen = _ref.defaultOpen,
      defaultOpen = _ref$defaultOpen === void 0 ? false : _ref$defaultOpen,
      _ref$open = _ref.open,
      open = _ref$open === void 0 ? undefined : _ref$open,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$nested = _ref.nested,
      nested = _ref$nested === void 0 ? false : _ref$nested,
      _ref$closeOnDocumentC = _ref.closeOnDocumentClick,
      closeOnDocumentClick = _ref$closeOnDocumentC === void 0 ? true : _ref$closeOnDocumentC,
      _ref$repositionOnResi = _ref.repositionOnResize,
      repositionOnResize = _ref$repositionOnResi === void 0 ? true : _ref$repositionOnResi,
      _ref$closeOnEscape = _ref.closeOnEscape,
      closeOnEscape = _ref$closeOnEscape === void 0 ? true : _ref$closeOnEscape,
      _ref$on = _ref.on,
      on = _ref$on === void 0 ? ['click'] : _ref$on,
      _ref$contentStyle = _ref.contentStyle,
      contentStyle = _ref$contentStyle === void 0 ? {} : _ref$contentStyle,
      _ref$arrowStyle = _ref.arrowStyle,
      arrowStyle = _ref$arrowStyle === void 0 ? {} : _ref$arrowStyle,
      _ref$overlayStyle = _ref.overlayStyle,
      overlayStyle = _ref$overlayStyle === void 0 ? {} : _ref$overlayStyle,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'bottom center' : _ref$position,
      _ref$modal = _ref.modal,
      modal = _ref$modal === void 0 ? false : _ref$modal,
      _ref$lockScroll = _ref.lockScroll,
      lockScroll = _ref$lockScroll === void 0 ? false : _ref$lockScroll,
      _ref$arrow = _ref.arrow,
      arrow = _ref$arrow === void 0 ? true : _ref$arrow,
      _ref$offsetX = _ref.offsetX,
      offsetX = _ref$offsetX === void 0 ? 0 : _ref$offsetX,
      _ref$offsetY = _ref.offsetY,
      offsetY = _ref$offsetY === void 0 ? 0 : _ref$offsetY,
      _ref$mouseEnterDelay = _ref.mouseEnterDelay,
      mouseEnterDelay = _ref$mouseEnterDelay === void 0 ? 100 : _ref$mouseEnterDelay,
      _ref$mouseLeaveDelay = _ref.mouseLeaveDelay,
      mouseLeaveDelay = _ref$mouseLeaveDelay === void 0 ? 100 : _ref$mouseLeaveDelay,
      _ref$keepTooltipInsid = _ref.keepTooltipInside,
      keepTooltipInside = _ref$keepTooltipInsid === void 0 ? false : _ref$keepTooltipInsid,
      children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(open || defaultOpen),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var triggerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var contentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var arrowRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var focusedElBeforeOpen = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var popupId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)("popup-" + ++popupIdCounter);
  var isModal = modal ? true : !trigger;
  var timeOut = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  useIsomorphicLayoutEffect(function () {
    if (isOpen) {
      focusedElBeforeOpen.current = document.activeElement;
      setPosition();
      focusContentOnOpen(); // for accessibility

      lockScrolll();
    } else {
      resetScroll();
    }

    return function () {
      clearTimeout(timeOut.current);
    };
  }, [isOpen]); // for uncontrolled popup we need to sync isOpen with open prop

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (typeof open === 'boolean') {
      if (open) openPopup();else closePopup();
    }
  }, [open, disabled]);

  var openPopup = function openPopup(event) {
    if (isOpen || disabled) return;
    setIsOpen(true);
    setTimeout(function () {
      return onOpen(event);
    }, 0);
  };

  var closePopup = function closePopup(event) {
    var _focusedElBeforeOpen$;

    if (!isOpen || disabled) return;
    setIsOpen(false);
    if (isModal) (_focusedElBeforeOpen$ = focusedElBeforeOpen.current) === null || _focusedElBeforeOpen$ === void 0 ? void 0 : _focusedElBeforeOpen$.focus();
    setTimeout(function () {
      return onClose(event);
    }, 0);
  };

  var togglePopup = function togglePopup(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    if (!isOpen) openPopup(event);else closePopup(event);
  };

  var onMouseEnter = function onMouseEnter(event) {
    clearTimeout(timeOut.current);
    timeOut.current = setTimeout(function () {
      return openPopup(event);
    }, mouseEnterDelay);
  };

  var onContextMenu = function onContextMenu(event) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    togglePopup();
  };

  var onMouseLeave = function onMouseLeave(event) {
    clearTimeout(timeOut.current);
    timeOut.current = setTimeout(function () {
      return closePopup(event);
    }, mouseLeaveDelay);
  };

  var lockScrolll = function lockScrolll() {
    if (isModal && lockScroll) document.getElementsByTagName('body')[0].style.overflow = 'hidden'; // migrate to document.body
  };

  var resetScroll = function resetScroll() {
    if (isModal && lockScroll) document.getElementsByTagName('body')[0].style.overflow = 'auto';
  };

  var focusContentOnOpen = function focusContentOnOpen() {
    var _contentRef$current;

    var focusableEls = contentRef === null || contentRef === void 0 ? void 0 : (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');
    var firstEl = Array.prototype.slice.call(focusableEls)[0];
    firstEl === null || firstEl === void 0 ? void 0 : firstEl.focus();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, function () {
    return {
      open: function open() {
        openPopup();
      },
      close: function close() {
        closePopup();
      },
      toggle: function toggle() {
        togglePopup();
      }
    };
  }); // set Position

  var setPosition = function setPosition() {
    if (isModal || !isOpen) return;
    if (!(triggerRef === null || triggerRef === void 0 ? void 0 : triggerRef.current) || !(triggerRef === null || triggerRef === void 0 ? void 0 : triggerRef.current) || !(contentRef === null || contentRef === void 0 ? void 0 : contentRef.current)) return; /// show error as one of ref is undefined

    var trigger = triggerRef.current.getBoundingClientRect();
    var content = contentRef.current.getBoundingClientRect();
    var cords = calculatePosition(trigger, content, position, arrow, {
      offsetX: offsetX,
      offsetY: offsetY
    }, keepTooltipInside);
    contentRef.current.style.top = cords.top + window.scrollY + "px";
    contentRef.current.style.left = cords.left + window.scrollX + "px";

    if (arrow && !!arrowRef.current) {
      var _arrowStyle$top, _arrowStyle$left;

      arrowRef.current.style.transform = cords.transform;
      arrowRef.current.style.setProperty('-ms-transform', cords.transform);
      arrowRef.current.style.setProperty('-webkit-transform', cords.transform);
      arrowRef.current.style.top = ((_arrowStyle$top = arrowStyle.top) === null || _arrowStyle$top === void 0 ? void 0 : _arrowStyle$top.toString()) || cords.arrowTop;
      arrowRef.current.style.left = ((_arrowStyle$left = arrowStyle.left) === null || _arrowStyle$left === void 0 ? void 0 : _arrowStyle$left.toString()) || cords.arrowLeft;
    }
  }; // hooks


  useOnEscape(closePopup, closeOnEscape); // can be optimized if we disabled for hover

  useTabbing(contentRef, isOpen && isModal);
  useRepositionOnResize(setPosition, repositionOnResize);
  useOnClickOutside(!!trigger ? [contentRef, triggerRef] : [contentRef], closePopup, closeOnDocumentClick && !nested); // we need to add a ne
  // render the trigger element and add events

  var renderTrigger = function renderTrigger() {
    var triggerProps = {
      key: 'T',
      ref: triggerRef,
      'aria-describedby': popupId.current
    };
    var onAsArray = Array.isArray(on) ? on : [on];

    for (var i = 0, len = onAsArray.length; i < len; i++) {
      switch (onAsArray[i]) {
        case 'click':
          triggerProps.onClick = togglePopup;
          break;

        case 'right-click':
          triggerProps.onContextMenu = onContextMenu;
          break;

        case 'hover':
          triggerProps.onMouseEnter = onMouseEnter;
          triggerProps.onMouseLeave = onMouseLeave;
          break;

        case 'focus':
          triggerProps.onFocus = onMouseEnter;
          triggerProps.onBlur = onMouseLeave;
          break;
      }
    }

    if (typeof trigger === 'function') {
      var comp = trigger(isOpen);
      return !!trigger && react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(comp, triggerProps);
    }

    return !!trigger && react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(trigger, triggerProps);
  };

  var addWarperAction = function addWarperAction() {
    var popupContentStyle = isModal ? Style.popupContent.modal : Style.popupContent.tooltip;
    var childrenElementProps = {
      className: "popup-content " + (className !== '' ? className.split(' ').map(function (c) {
        return c + "-content";
      }).join(' ') : ''),
      style: _extends({}, popupContentStyle, contentStyle, {
        pointerEvents: 'auto'
      }),
      ref: contentRef,
      onClick: function onClick(e) {
        e.stopPropagation();
      }
    };

    if (!modal && on.indexOf('hover') >= 0) {
      childrenElementProps.onMouseEnter = onMouseEnter;
      childrenElementProps.onMouseLeave = onMouseLeave;
    }

    return childrenElementProps;
  };

  var renderContent = function renderContent() {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", Object.assign({}, addWarperAction(), {
      key: "C",
      role: isModal ? 'dialog' : 'tooltip',
      id: popupId.current
    }), arrow && !isModal && react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      ref: arrowRef,
      style: Style.popupArrow
    }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      "data-testid": "arrow",
      className: "popup-arrow " + (className !== '' ? className.split(' ').map(function (c) {
        return c + "-arrow";
      }).join(' ') : ''),
      viewBox: "0 0 32 16",
      style: _extends({
        position: 'absolute'
      }, arrowStyle)
    }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M16 0l16 16H0z",
      fill: "currentcolor"
    }))), children && typeof children === 'function' ? children(closePopup, isOpen) : children);
  };

  var overlay = !(on.indexOf('hover') >= 0);
  var ovStyle = isModal ? Style.overlay.modal : Style.overlay.tooltip;
  var content = [overlay && react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: "O",
    "data-testid": "overlay",
    "data-popup": isModal ? 'modal' : 'tooltip',
    className: "popup-overlay " + (className !== '' ? className.split(' ').map(function (c) {
      return c + "-overlay";
    }).join(' ') : ''),
    style: _extends({}, ovStyle, overlayStyle, {
      pointerEvents: closeOnDocumentClick && nested || isModal ? 'auto' : 'none'
    }),
    onClick: closeOnDocumentClick && nested ? closePopup : undefined,
    tabIndex: -1
  }, isModal && renderContent()), !isModal && renderContent()];
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, renderTrigger(), isOpen && react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(content, getRootPopup()));
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);

//# sourceMappingURL=reactjs-popup.esm.js.map


/***/ }),

/***/ "./node_modules/reactjs-popup/dist/index.css":
/*!***************************************************!*\
  !*** ./node_modules/reactjs-popup/dist/index.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./index.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/reactjs-popup/dist/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



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
    var nonce =  true ? __webpack_require__.nc : 0;

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

  if (sourceMap && typeof btoa !== 'undefined') {
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

}]);