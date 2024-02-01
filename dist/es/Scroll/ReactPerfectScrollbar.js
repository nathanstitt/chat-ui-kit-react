function _typeof(o) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              "function" == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          }),
    _typeof(o)
  );
}
var _excluded = [
    "className",
    "style",
    "option",
    "options",
    "containerRef",
    "onScrollY",
    "onScrollX",
    "onScrollUp",
    "onScrollDown",
    "onScrollLeft",
    "onScrollRight",
    "onYReachStart",
    "onYReachEnd",
    "onXReachStart",
    "onXReachEnd",
    "onSync",
    "component",
  ],
  _excluded2 = [
    "className",
    "style",
    "option",
    "options",
    "containerRef",
    "onScrollY",
    "onScrollX",
    "onScrollUp",
    "onScrollDown",
    "onScrollLeft",
    "onScrollRight",
    "onYReachStart",
    "onYReachEnd",
    "onXReachStart",
    "onXReachEnd",
    "component",
    "onSync",
    "children",
  ];
function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
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
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), !0).forEach(function (r) {
          _defineProperty(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ownKeys(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _callSuper(t, o, e) {
  return (
    (o = _getPrototypeOf(o)),
    _possibleConstructorReturn(
      t,
      _isNativeReflectConstruct()
        ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor)
        : o.apply(t, e)
    )
  );
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  }
  return _assertThisInitialized(self);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  return _setPrototypeOf(o, p);
}
// https://github.com/goldenyz/react-perfect-scrollbar/
import React, { Component } from "react";
import { PropTypes } from "prop-types";
import PerfectScrollbar from "./perfect-scrollbar.esm.js";
var handlerNameByEvent = {
  "ps-scroll-y": "onScrollY",
  "ps-scroll-x": "onScrollX",
  "ps-scroll-up": "onScrollUp",
  "ps-scroll-down": "onScrollDown",
  "ps-scroll-left": "onScrollLeft",
  "ps-scroll-right": "onScrollRight",
  "ps-y-reach-start": "onYReachStart",
  "ps-y-reach-end": "onYReachEnd",
  "ps-x-reach-start": "onXReachStart",
  "ps-x-reach-end": "onXReachEnd",
};
Object.freeze(handlerNameByEvent);
var ScrollBar = /*#__PURE__*/ (function (_Component) {
  _inherits(ScrollBar, _Component);
  function ScrollBar(_ref) {
    var _this;
    var _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? undefined : _ref$style,
      _ref$option = _ref.option,
      option = _ref$option === void 0 ? undefined : _ref$option,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? undefined : _ref$options,
      _ref$containerRef = _ref.containerRef,
      containerRef =
        _ref$containerRef === void 0 ? function () {} : _ref$containerRef,
      _ref$onScrollY = _ref.onScrollY,
      onScrollY = _ref$onScrollY === void 0 ? undefined : _ref$onScrollY,
      _ref$onScrollX = _ref.onScrollX,
      onScrollX = _ref$onScrollX === void 0 ? undefined : _ref$onScrollX,
      _ref$onScrollUp = _ref.onScrollUp,
      onScrollUp = _ref$onScrollUp === void 0 ? undefined : _ref$onScrollUp,
      _ref$onScrollDown = _ref.onScrollDown,
      onScrollDown =
        _ref$onScrollDown === void 0 ? undefined : _ref$onScrollDown,
      _ref$onScrollLeft = _ref.onScrollLeft,
      onScrollLeft =
        _ref$onScrollLeft === void 0 ? undefined : _ref$onScrollLeft,
      _ref$onScrollRight = _ref.onScrollRight,
      onScrollRight =
        _ref$onScrollRight === void 0 ? undefined : _ref$onScrollRight,
      _ref$onYReachStart = _ref.onYReachStart,
      onYReachStart =
        _ref$onYReachStart === void 0 ? undefined : _ref$onYReachStart,
      _ref$onYReachEnd = _ref.onYReachEnd,
      onYReachEnd = _ref$onYReachEnd === void 0 ? undefined : _ref$onYReachEnd,
      _ref$onXReachStart = _ref.onXReachStart,
      onXReachStart =
        _ref$onXReachStart === void 0 ? undefined : _ref$onXReachStart,
      _ref$onXReachEnd = _ref.onXReachEnd,
      onXReachEnd = _ref$onXReachEnd === void 0 ? undefined : _ref$onXReachEnd,
      _ref$onSync = _ref.onSync,
      onSync =
        _ref$onSync === void 0
          ? function (ps) {
              return ps.update();
            }
          : _ref$onSync,
      _ref$component = _ref.component,
      component = _ref$component === void 0 ? "div" : _ref$component,
      rest = _objectWithoutProperties(_ref, _excluded);
    _classCallCheck(this, ScrollBar);
    _this = _callSuper(this, ScrollBar, [
      _objectSpread(
        {
          className: className,
          style: style,
          option: option,
          options: options,
          containerRef: containerRef,
          onScrollX: onScrollX,
          onScrollY: onScrollY,
          onScrollUp: onScrollUp,
          onScrollDown: onScrollDown,
          onScrollLeft: onScrollLeft,
          onScrollRight: onScrollRight,
          onYReachStart: onYReachStart,
          onYReachEnd: onYReachEnd,
          onXReachStart: onXReachStart,
          onXReachEnd: onXReachEnd,
          onSync: onSync,
          component: component,
        },
        rest
      ),
    ]);
    _this.handleRef = _this.handleRef.bind(_assertThisInitialized(_this));
    _this._handlerByEvent = {};
    return _this;
  }
  _createClass(ScrollBar, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.option) {
          console.warn(
            'react-perfect-scrollbar: the "option" prop has been deprecated in favor of "options"'
          );
        }
        this._ps = new PerfectScrollbar(
          this._container,
          this.props.options || this.props.option
        );
        // hook up events
        this._updateEventHook();
        this._updateClassName();
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        this._updateEventHook(prevProps);
        this.updateScroll();
        if (prevProps.className !== this.props.className) {
          this._updateClassName();
        }
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var _this2 = this;
        // unhook up evens
        Object.keys(this._handlerByEvent).forEach(function (key) {
          var value = _this2._handlerByEvent[key];
          if (value) {
            _this2._container.removeEventListener(key, value, false);
          }
        });
        this._handlerByEvent = {};
        this._ps.destroy();
        this._ps = null;
      },
    },
    {
      key: "_updateEventHook",
      value: function _updateEventHook() {
        var _this3 = this;
        var prevProps =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {};
        // hook up events
        Object.keys(handlerNameByEvent).forEach(function (key) {
          var callback = _this3.props[handlerNameByEvent[key]];
          var prevCallback = prevProps[handlerNameByEvent[key]];
          if (callback !== prevCallback) {
            if (prevCallback) {
              var prevHandler = _this3._handlerByEvent[key];
              _this3._container.removeEventListener(key, prevHandler, false);
              _this3._handlerByEvent[key] = null;
            }
            if (callback) {
              var handler = function handler() {
                return callback(_this3._container);
              };
              _this3._container.addEventListener(key, handler, false);
              _this3._handlerByEvent[key] = handler;
            }
          }
        });
      },
    },
    {
      key: "_updateClassName",
      value: function _updateClassName() {
        var className = this.props.className;
        var psClassNames = this._container.className
          .split(" ")
          .filter(function (name) {
            return name.match(/^ps([-_].+|)$/);
          })
          .join(" ");
        if (this._container) {
          this._container.className = "scrollbar-container"
            .concat(className ? " ".concat(className) : "")
            .concat(psClassNames ? " ".concat(psClassNames) : "");
        }
      },
    },
    {
      key: "updateScroll",
      value: function updateScroll() {
        this.props.onSync(this._ps);
      },
    },
    {
      key: "handleRef",
      value: function handleRef(ref) {
        this._container = ref;
        this.props.containerRef(ref);
      },
    },
    {
      key: "render",
      value: function render() {
        var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          option = _this$props.option,
          options = _this$props.options,
          containerRef = _this$props.containerRef,
          onScrollY = _this$props.onScrollY,
          onScrollX = _this$props.onScrollX,
          onScrollUp = _this$props.onScrollUp,
          onScrollDown = _this$props.onScrollDown,
          onScrollLeft = _this$props.onScrollLeft,
          onScrollRight = _this$props.onScrollRight,
          onYReachStart = _this$props.onYReachStart,
          onYReachEnd = _this$props.onYReachEnd,
          onXReachStart = _this$props.onXReachStart,
          onXReachEnd = _this$props.onXReachEnd,
          component = _this$props.component,
          onSync = _this$props.onSync,
          children = _this$props.children,
          remainProps = _objectWithoutProperties(_this$props, _excluded2);
        var Comp = component;
        return /*#__PURE__*/ React.createElement(
          Comp,
          _extends(
            {
              style: style,
              ref: this.handleRef,
            },
            remainProps
          ),
          children
        );
      },
    },
  ]);
  return ScrollBar;
})(Component);
export { ScrollBar as default };
process.env.NODE_ENV !== "production"
  ? (ScrollBar.propTypes = {
      children: PropTypes.node.isRequired,
      className: PropTypes.string,
      style: PropTypes.object,
      option: PropTypes.object,
      options: PropTypes.object,
      containerRef: PropTypes.func,
      onScrollY: PropTypes.func,
      onScrollX: PropTypes.func,
      onScrollUp: PropTypes.func,
      onScrollDown: PropTypes.func,
      onScrollLeft: PropTypes.func,
      onScrollRight: PropTypes.func,
      onYReachStart: PropTypes.func,
      onYReachEnd: PropTypes.func,
      onXReachStart: PropTypes.func,
      onXReachEnd: PropTypes.func,
      onSync: PropTypes.func,
      component: PropTypes.string,
    })
  : void 0;
