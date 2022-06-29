"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DemiTest2 = exports.DemiTest1 = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const DemiTest1 = props => {
  return /*#__PURE__*/_react.default.createElement("button", {
    "data-id": props.id,
    type: props.type,
    name: props.name,
    style: _objectSpread({
      backgroundColor: "#5cb85c",
      color: "white",
      fontSize: 12,
      border: 0,
      padding: 5,
      height: 50,
      width: 100,
      borderRadius: 6,
      margin: 5,
      cursor: "pointer"
    }, props.style),
    value: props.value,
    disabled: props.disabled,
    onClick: props.handleClick
  }, /*#__PURE__*/_react.default.createElement("h4", null, props.label));
};

exports.DemiTest1 = DemiTest1;

const DemiTest2 = props => {
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn--".concat(props.kind, " CTA"),
    "data-id": props.id,
    type: props.type,
    name: props.name,
    style: _objectSpread({
      backgroundColor: "#0275d8",
      color: "white",
      fontSize: 12,
      border: 0,
      padding: 5,
      height: 50,
      width: 100,
      borderRadius: 6,
      margin: 5,
      cursor: "pointer"
    }, props.style),
    value: props.value,
    disabled: props.disabled,
    onClick: props.handleClick
  }, /*#__PURE__*/_react.default.createElement("h4", null, props.label));
}; //  primary2: '#24A0ED',
//     primary: '#0275d8',
//     secondary: '#3f37c8',
//     accent: '#4895ef',
//     // danger: '#f72585',
//     danger: '#bb2124',
//     danger2: '#dg534f',
//     warning: '#f0ad48',
//     success: '#5cb85c',
//     success2: '#4cc9f0',
//     grey: '#adb5bd',
//     white: '#ffffff',


exports.DemiTest2 = DemiTest2;