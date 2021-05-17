"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

var _utils = require("mnet-ui-base/utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var myCustomTheme = (0, _utils.deepMerge)(_themes.mnet, {
  global: {
    drop: {
      background: '#444444',
      shadowSize: 'medium',
      extend: "\n          border-bottom-left-radius: 12px;\n          border-bottom-right-radius: 12px;\n\n          overflow: hidden;\n        "
    },
    elevation: {
      dark: {
        medium: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
      },
      light: {
        medium: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
      }
    },
    input: {
      weight: 400
    },
    font: {
      size: '14px',
      family: 'Arial'
    }
  }
});
var folks = [{
  name: 'Alan Souza',
  imageUrl: 'https://s.gravatar.com/avatar/b226da5c619b18b44eb95c30be393953?s=80'
}, {
  name: 'Bryan Jacquot',
  imageUrl: 'https://s.gravatar.com/avatar/10d15019166606cfed23846a7f902660?s=80'
}, {
  name: 'Chris Carlozzi',
  imageUrl: 'https://s.gravatar.com/avatar/56ea1e2ecd0d3cc85479b2d09e31d071?s=80'
}, {
  name: 'Eric Soderberg',
  imageUrl: 'https://s.gravatar.com/avatar/99020cae7ff399a4fbea19c0634f77c3?s=80'
}, {
  name: 'Marlon Parizzotto',
  imageUrl: 'https://s.gravatar.com/avatar/e6684969375a4dcc0aa99f0bfae544c3?s=80'
}, {
  name: 'Tales Chaves',
  imageUrl: 'https://s.gravatar.com/avatar/1f80adca55d9f5d97932ff97f631a4e8?s=80'
}, {
  name: 'Tracy Barmore',
  imageUrl: 'https://s.gravatar.com/avatar/4ec9c3a91da89f278e4482811caad7f3?s=80'
}];

var CustomSuggestionsTextInput = function CustomSuggestionsTextInput() {
  var _useState = (0, _react.useState)(''),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      suggestionOpen = _useState2[0],
      setSuggestionOpen = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      suggestedFolks = _useState3[0],
      setSuggestedFolks = _useState3[1];

  var _useState4 = (0, _react.useState)(),
      updateState = _useState4[1];

  var forceUpdate = (0, _react.useCallback)(function () {
    return updateState({});
  }, []);
  var boxRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    forceUpdate();
  }, [forceUpdate]);

  var onChange = function onChange(event) {
    var newValue = event.target.value;
    setValue(newValue);

    if (!newValue.trim()) {
      setSuggestedFolks([]);
    } else {
      // simulate an async call to the backend
      setTimeout(function () {
        return setSuggestedFolks(folks);
      }, 300);
    }
  };

  var onSelect = function onSelect(event) {
    return setValue(event.suggestion.value);
  };

  var onOpen = (0, _react.useCallback)(function () {
    return setSuggestionOpen(true);
  }, [setSuggestionOpen]);
  var onClose = (0, _react.useCallback)(function () {
    return setSuggestionOpen(false);
  }, [setSuggestionOpen]);
  var suggestions = (0, _react.useMemo)(function () {
    return suggestedFolks.filter(function (_ref) {
      var name = _ref.name;
      return name.toLowerCase().indexOf(value.toLowerCase()) >= 0;
    }).map(function (_ref2, index, list) {
      var name = _ref2.name,
          imageUrl = _ref2.imageUrl;
      return {
        label: /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
          direction: "row",
          align: "center",
          gap: "small",
          border: index < list.length - 1 ? 'bottom' : undefined,
          pad: "small"
        }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Image, {
          width: "48px",
          src: imageUrl,
          style: {
            borderRadius: '100%'
          }
        }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, /*#__PURE__*/_react["default"].createElement("strong", null, name))),
        value: name
      };
    });
  }, [suggestedFolks, value]);
  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: myCustomTheme,
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    background: "dark-1",
    fill: true,
    align: "center",
    pad: {
      top: 'large'
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    ref: boxRef,
    width: "large",
    direction: "row",
    align: "center",
    pad: {
      horizontal: 'small',
      vertical: 'xsmall'
    },
    round: "small",
    elevation: suggestionOpen ? 'medium' : undefined,
    border: {
      side: 'all',
      color: suggestionOpen ? 'transparent' : 'border'
    },
    style: suggestionOpen ? {
      borderBottomLeftRadius: '0px',
      borderBottomRightRadius: '0px'
    } : undefined
  }, /*#__PURE__*/_react["default"].createElement(_grommetIcons.Search, {
    color: "brand"
  }), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.TextInput, {
    type: "search",
    dropTarget: boxRef.current,
    plain: true,
    value: value,
    onChange: onChange,
    onSelect: onSelect,
    suggestions: suggestions,
    placeholder: "Enter your name...",
    onSuggestionsOpen: onOpen,
    onSuggestionsClose: onClose
  }))));
};

(0, _react2.storiesOf)('TextInput', module).add('Custom', function () {
  return /*#__PURE__*/_react["default"].createElement(CustomSuggestionsTextInput, null);
});