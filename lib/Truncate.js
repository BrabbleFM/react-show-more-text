"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["children", "ellipsis", "lines"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var Truncate = /*#__PURE__*/function (_React$Component) {
  _inherits(Truncate, _React$Component);

  var _super = _createSuper(Truncate);

  function Truncate() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, Truncate);

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "extractReplaceLinksKeys", function (content) {
      var _self = _assertThisInitialized(_this),
          i = 0;

      _this.replacedLinks = [];
      content.replace(/(<a[\s]+([^>]+)>((?:.(?!\<\/a\>))*.)<\/a>)/g, function () {
        var item = Array.prototype.slice.call(arguments, 1, 4);
        item.key = '[' + '@'.repeat(item[2].length - 1) + '=' + i++ + ']';

        _self.replacedLinks.push(item);

        content = content.replace(item[0], item.key);
      });
      return content;
    });

    _defineProperty(_assertThisInitialized(_this), "restoreReplacedLinks", function (content) {
      _this.replacedLinks.forEach(function (item) {
        content = content.replace(item.key, item[0]);
      });

      return _this.createMarkup(content);
    });

    _defineProperty(_assertThisInitialized(_this), "innerText", function (node) {
      var div = document.createElement('div');
      var contentKey = 'innerText' in window.HTMLElement.prototype ? 'innerText' : 'textContent';
      var content = node.innerHTML.replace(/\r\n|\r|\n/g, ' ');
      div.innerHTML = _this.extractReplaceLinksKeys(content);
      var text = div[contentKey];
      var test = document.createElement('div');
      test.innerHTML = 'foo<br/>bar';

      if (test[contentKey].replace(/\r\n|\r/g, '\n') !== 'foo\nbar') {
        div.innerHTML = div.innerHTML.replace(/<br.*?[\/]?>/gi, '\n');
        text = div[contentKey];
      }

      return text;
    });

    _defineProperty(_assertThisInitialized(_this), "onResize", function () {
      _this.calcTargetWidth();
    });

    _defineProperty(_assertThisInitialized(_this), "onTruncate", function (didTruncate) {
      var onTruncate = _this.props.onTruncate;

      if (typeof onTruncate === 'function') {
        _this.timeout = window.requestAnimationFrame(function () {
          onTruncate(didTruncate);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "calcTargetWidth", function (callback) {
      var _assertThisInitialize = _assertThisInitialized(_this),
          target = _assertThisInitialize.elements.target,
          calcTargetWidth = _assertThisInitialize.calcTargetWidth,
          canvasContext = _assertThisInitialize.canvasContext,
          width = _assertThisInitialize.props.width; // Calculation is no longer relevant, since node has been removed


      if (!target) {
        return;
      }

      var targetWidth = width || // Floor the result to deal with browser subpixel precision
      Math.floor(target.parentNode.getBoundingClientRect().width); // Delay calculation until parent node is inserted to the document
      // Mounting order in React is ChildComponent, ParentComponent

      if (!targetWidth) {
        return window.requestAnimationFrame(function () {
          return calcTargetWidth(callback);
        });
      }

      var style = window.getComputedStyle(target);
      var font = [style['font-weight'], style['font-style'], style['font-size'], style['font-family']].join(' ');
      canvasContext.font = font;

      _this.setState({
        targetWidth: targetWidth
      }, callback);
    });

    _defineProperty(_assertThisInitialized(_this), "measureWidth", function (text) {
      return _this.canvasContext.measureText(text).width;
    });

    _defineProperty(_assertThisInitialized(_this), "ellipsisWidth", function (node) {
      return node.offsetWidth;
    });

    _defineProperty(_assertThisInitialized(_this), "trimRight", function (text) {
      return text.replace(/\s+$/, '');
    });

    _defineProperty(_assertThisInitialized(_this), "createMarkup", function (str) {
      return /*#__PURE__*/_react.default.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: str
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getLines", function () {
      var _assertThisInitialize2 = _assertThisInitialized(_this),
          elements = _assertThisInitialize2.elements,
          _assertThisInitialize3 = _assertThisInitialize2.props,
          numLines = _assertThisInitialize3.lines,
          ellipsis = _assertThisInitialize3.ellipsis,
          trimWhitespace = _assertThisInitialize3.trimWhitespace,
          targetWidth = _assertThisInitialize2.state.targetWidth,
          innerText = _assertThisInitialize2.innerText,
          measureWidth = _assertThisInitialize2.measureWidth,
          onTruncate = _assertThisInitialize2.onTruncate,
          trimRight = _assertThisInitialize2.trimRight,
          renderLine = _assertThisInitialize2.renderLine,
          restoreReplacedLinks = _assertThisInitialize2.restoreReplacedLinks;

      var lines = [];
      var text = innerText(elements.text);
      var textLines = text.split('\n').map(function (line) {
        return line.split(' ');
      });
      var didTruncate = true;

      var ellipsisWidth = _this.ellipsisWidth(_this.elements.ellipsis);

      for (var line = 1; line <= numLines; line++) {
        var textWords = textLines[0]; // Handle newline

        if (textWords.length === 0) {
          lines.push();
          textLines.shift();
          line--;
          continue;
        }

        var resultLine = textWords.join(' ');

        if (measureWidth(resultLine) <= targetWidth) {
          if (textLines.length === 1) {
            // Line is end of text and fits without truncating
            didTruncate = false;
            resultLine = restoreReplacedLinks(resultLine);
            lines.push(resultLine);
            break;
          }
        }

        if (line === numLines) {
          // Binary search determining the longest possible line inluding truncate string
          var textRest = textWords.join(' ');
          var lower = 0;
          var upper = textRest.length - 1;

          while (lower <= upper) {
            var middle = Math.floor((lower + upper) / 2);
            var testLine = textRest.slice(0, middle + 1);

            if (measureWidth(testLine) + ellipsisWidth <= targetWidth) {
              lower = middle + 1;
            } else {
              upper = middle - 1;
            }
          }

          var lastLineText = textRest.slice(0, lower);

          if (trimWhitespace) {
            lastLineText = trimRight(lastLineText); // Remove blank lines from the end of text

            while (!lastLineText.length && lines.length) {
              var prevLine = lines.pop();
              lastLineText = trimRight(prevLine);
            }
          }

          if (lastLineText.substr(lastLineText.length - 2) === '][') {
            lastLineText = lastLineText.substring(0, lastLineText.length - 1);
          }

          ;
          lastLineText = lastLineText.replace(/\[@+$/, '');
          lastLineText = restoreReplacedLinks(lastLineText);
          resultLine = /*#__PURE__*/_react.default.createElement("span", null, lastLineText, ellipsis);
        } else {
          // Binary search determining when the line breaks
          var _lower = 0;

          var _upper = textWords.length - 1;

          while (_lower <= _upper) {
            var _middle = Math.floor((_lower + _upper) / 2);

            var _testLine = textWords.slice(0, _middle + 1).join(' ');

            if (measureWidth(_testLine) <= targetWidth) {
              _lower = _middle + 1;
            } else {
              _upper = _middle - 1;
            }
          } // The first word of this line is too long to fit it


          if (_lower === 0) {
            // Jump to processing of last line
            line = numLines - 1;
            continue;
          }

          resultLine = textWords.slice(0, _lower).join(' ');
          resultLine = restoreReplacedLinks(resultLine);
          textLines[0].splice(0, _lower);
        }

        lines.push(resultLine);
      }

      onTruncate(didTruncate);
      return lines.map(renderLine);
    });

    _defineProperty(_assertThisInitialized(_this), "renderLine", function (line, i, arr) {
      if (i === arr.length - 1) {
        return /*#__PURE__*/_react.default.createElement("span", {
          key: i
        }, line);
      } else {
        var br = /*#__PURE__*/_react.default.createElement("br", {
          key: i + 'br'
        });

        if (line) {
          return [/*#__PURE__*/_react.default.createElement("span", {
            key: i
          }, line), br];
        } else {
          return br;
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "styles", {
      ellipsis: {
        position: 'fixed',
        visibility: 'hidden',
        top: 0,
        left: 0
      }
    });

    _this.elements = {};
    _this.replacedLinks = [];
    return _this;
  }

  _createClass(Truncate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var text = this.elements.text,
          calcTargetWidth = this.calcTargetWidth,
          onResize = this.onResize;
      var canvas = document.createElement('canvas');
      this.canvasContext = canvas.getContext('2d');
      calcTargetWidth(function () {
        // Node not needed in document tree to read its content
        if (text) {
          text.parentNode.removeChild(text);
        }
      });
      window.addEventListener('resize', onResize);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Render was based on outdated refs and needs to be rerun
      if (this.props.children !== prevProps.children) {
        this.forceUpdate();
      } // If the width prop has changed, recalculate size of contents


      if (this.props.width !== prevProps.width) {
        this.calcTargetWidth();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var ellipsis = this.elements.ellipsis,
          onResize = this.onResize,
          timeout = this.timeout;
      ellipsis.parentNode.removeChild(ellipsis);
      window.removeEventListener('resize', onResize);
      window.cancelAnimationFrame(timeout);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var target = this.elements.target,
          _this$props = this.props,
          children = _this$props.children,
          ellipsis = _this$props.ellipsis,
          lines = _this$props.lines,
          spanProps = _objectWithoutProperties(_this$props, _excluded),
          targetWidth = this.state.targetWidth,
          getLines = this.getLines,
          onTruncate = this.onTruncate;

      var text;
      var mounted = !!(target && targetWidth);

      if (typeof window !== 'undefined' && mounted) {
        if (lines > 0) {
          text = getLines();
        } else {
          text = children;
          onTruncate(false);
        }
      }

      delete spanProps.onTruncate;
      delete spanProps.trimWhitespace;
      return /*#__PURE__*/_react.default.createElement("span", _extends({}, spanProps, {
        ref: function ref(targetEl) {
          _this2.elements.target = targetEl;
        }
      }), /*#__PURE__*/_react.default.createElement("span", null, text), /*#__PURE__*/_react.default.createElement("span", {
        ref: function ref(textEl) {
          _this2.elements.text = textEl;
        }
      }, children), /*#__PURE__*/_react.default.createElement("span", {
        ref: function ref(ellipsisEl) {
          _this2.elements.ellipsis = ellipsisEl;
        },
        style: this.styles.ellipsis
      }, ellipsis));
    }
  }]);

  return Truncate;
}(_react.default.Component);

exports.default = Truncate;

_defineProperty(Truncate, "propTypes", {
  children: _propTypes.default.node,
  ellipsis: _propTypes.default.node,
  lines: _propTypes.default.oneOfType([_propTypes.default.oneOf([false]), _propTypes.default.number]),
  trimWhitespace: _propTypes.default.bool,
  width: _propTypes.default.number,
  onTruncate: _propTypes.default.func
});

_defineProperty(Truncate, "defaultProps", {
  children: '',
  ellipsis: '…',
  lines: 1,
  trimWhitespace: false,
  width: 0
});

;