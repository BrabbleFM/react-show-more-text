"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _Truncate = _interopRequireDefault(require("./Truncate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ShowMoreText = /*#__PURE__*/function (_Component) {
  _inherits(ShowMoreText, _Component);

  var _super = _createSuper(ShowMoreText);

  function ShowMoreText(props) {
    var _this;

    _classCallCheck(this, ShowMoreText);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "_isMounted", false);

    _defineProperty(_assertThisInitialized(_this), "handleTruncate", function (truncated) {
      if (_this._isMounted && truncated !== _this.state.truncated) {
        _this.setState({
          truncated: truncated
        });

        if (truncated) {
          _this.truncateRef.onResize();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleLines", function (event) {
      event.preventDefault();

      var _self = _assertThisInitialized(_this);

      if (_this._isMounted) {
        _this.setState({
          expanded: !_this.state.expanded
        }, function () {
          if (_self.props.onClick) {
            _self.props.onClick(_self.state.expanded);
          }
        });
      }
    });

    _this.state = {
      expanded: false,
      truncated: false
    };
    return _this;
  }

  _createClass(ShowMoreText, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;

      var _self = this;

      if (this._isMounted) {
        this.setState({
          expanded: _self.props.expanded
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          more = _this$props.more,
          less = _this$props.less,
          lines = _this$props.lines,
          anchorClass = _this$props.anchorClass,
          className = _this$props.className,
          width = _this$props.width,
          keepNewLines = _this$props.keepNewLines,
          truncatedEndingComponent = _this$props.truncatedEndingComponent;
      var _this$state = this.state,
          expanded = _this$state.expanded,
          truncated = _this$state.truncated;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: className
      }, /*#__PURE__*/_react.default.createElement(_Truncate.default, {
        width: width,
        lines: !expanded && lines,
        ellipsis: /*#__PURE__*/_react.default.createElement("span", null, truncatedEndingComponent, /*#__PURE__*/_react.default.createElement("p", {
          className: anchorClass,
          onClick: this.toggleLines
        }, more)),
        onTruncate: this.handleTruncate,
        ref: function ref(_ref) {
          return _this2.truncateRef = _ref;
        }
      }, keepNewLines ? children.split("\n").map(function (line, i, arr) {
        line = /*#__PURE__*/_react.default.createElement("span", {
          key: i
        }, line);

        if (i === arr.length - 1) {
          return line;
        } else {
          return [line, /*#__PURE__*/_react.default.createElement("br", {
            key: i + "br"
          })];
        }
      }) : children), !truncated && expanded && /*#__PURE__*/_react.default.createElement("span", null, " ", /*#__PURE__*/_react.default.createElement("a", {
        href: "",
        className: anchorClass,
        onClick: this.toggleLines
      }, less)));
    }
  }]);

  return ShowMoreText;
}(_react.Component);

_defineProperty(ShowMoreText, "defaultProps", {
  lines: 3,
  more: "Show more",
  less: "Show less",
  anchorClass: "",
  onClick: undefined,
  expanded: false,
  width: 0,
  keepNewLines: false,
  truncatedEndingComponent: "... "
});

_defineProperty(ShowMoreText, "propTypes", {
  children: _propTypes.PropTypes.node,
  lines: _propTypes.PropTypes.number,
  more: _propTypes.PropTypes.node,
  less: _propTypes.PropTypes.node,
  anchorClass: _propTypes.PropTypes.string,
  className: _propTypes.PropTypes.string,
  onClick: _propTypes.PropTypes.func,
  expanded: _propTypes.PropTypes.bool,
  width: _propTypes.PropTypes.number,
  keepNewLines: _propTypes.PropTypes.bool,
  truncatedEndingComponent: _propTypes.PropTypes.node
});

var _default = ShowMoreText;
exports.default = _default;