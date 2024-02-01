"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = exports.MessageSeparator = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _settings = require("../settings");
var _utils = require("../utils");
var _excluded = ["content", "as", "children", "className"];
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
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
var MessageSeparator = (exports.MessageSeparator = function MessageSeparator(
  _ref
) {
  var _ref$content = _ref.content,
    content = _ref$content === void 0 ? undefined : _ref$content,
    _ref$as = _ref.as,
    as = _ref$as === void 0 ? "div" : _ref$as,
    _ref$children = _ref.children,
    children = _ref$children === void 0 ? undefined : _ref$children,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(_settings.prefix, "-message-separator");
  var Tag = (function () {
    if (typeof as === "string" && as.length > 0) {
      return as;
    } else {
      return "div";
    }
  })();
  return /*#__PURE__*/ _react["default"].createElement(
    Tag,
    _extends({}, rest, {
      className: (0, _classnames["default"])(cName, className),
    }),
    (0, _utils.isChildrenNil)(children) === true ? content : children
  );
});
process.env.NODE_ENV !== "production"
  ? (MessageSeparator.propTypes = {
      /** Primary content. */
      children: _propTypes["default"].node,
      /** Shorthand for primary content. */
      content: _propTypes["default"].node,
      /** An element type to render as. */
      as: _propTypes["default"].elementType,
      /** Additional classes. */
      className: _propTypes["default"].string,
    })
  : void 0;
var _default = (exports["default"] = MessageSeparator);