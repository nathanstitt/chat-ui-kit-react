var _excluded = ["children", "className", "icon", "border", "labelPosition"];
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
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
export var Button = function Button(_ref) {
  var _ref$children = _ref.children,
    children = _ref$children === void 0 ? undefined : _ref$children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? undefined : _ref$icon,
    _ref$border = _ref.border,
    border = _ref$border === void 0 ? false : _ref$border,
    _ref$labelPosition = _ref.labelPosition,
    labelPosition =
      _ref$labelPosition === void 0 ? undefined : _ref$labelPosition,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cName = "".concat(prefix, "-button");
  var lPos = typeof labelPosition !== "undefined" ? labelPosition : "right";
  var labelPositionClassName =
    React.Children.count(children) > 0
      ? "".concat(cName, "--").concat(lPos)
      : "";
  var borderClassName = border === true ? "".concat(cName, "--border") : "";
  return /*#__PURE__*/ React.createElement(
    "button",
    _extends({}, rest, {
      className: classNames(
        cName,
        labelPositionClassName,
        borderClassName,
        className
      ),
    }),
    lPos === "left" && children,
    icon,
    lPos === "right" && children
  );
};
process.env.NODE_ENV !== "production"
  ? (Button.propTypes = {
      /** Primary content */
      children: PropTypes.node,
      /** Additional classes. */
      className: PropTypes.string,
      icon: PropTypes.node,
      labelPosition: PropTypes.oneOf(["left", "right"]),
      border: PropTypes.bool,
    })
  : void 0;
export default Button;