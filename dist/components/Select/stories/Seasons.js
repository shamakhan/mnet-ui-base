"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var allSeasons = ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10'];

var SeasonsSelect = function SeasonsSelect() {
  var _useState = (0, _react.useState)([]),
      selected = _useState[0],
      setSelected = _useState[1];

  var onRemoveSeason = function onRemoveSeason(season) {
    var seasonIndex = allSeasons.indexOf(season);
    setSelected(selected.filter(function (selectedSeason) {
      return selectedSeason !== seasonIndex;
    }));
  };

  var renderSeason = function renderSeason(season) {
    return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Button, {
      key: "season_tag_" + season,
      href: "#",
      onClick: function onClick(event) {
        event.preventDefault();
        event.stopPropagation();
        onRemoveSeason(season);
      },
      onFocus: function onFocus(event) {
        return event.stopPropagation();
      }
    }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
      align: "center",
      direction: "row",
      gap: "xsmall",
      pad: {
        vertical: 'xsmall',
        horizontal: 'small'
      },
      margin: "xsmall",
      background: "accent-1",
      round: "large"
    }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, {
      size: "small",
      color: "white"
    }, season), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
      background: "white",
      round: "full",
      margin: {
        left: 'xsmall'
      }
    }, /*#__PURE__*/_react["default"].createElement(_grommetIcons.FormClose, {
      color: "accent-1",
      size: "small",
      style: {
        width: '12px',
        height: '12px'
      }
    }))));
  };

  var renderOption = function renderOption(option, state) {
    return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
      pad: "small",
      background: state.active ? 'active' : undefined
    }, option);
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    align: "center",
    justify: "center"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Select, {
    closeOnChange: false,
    multiple: true,
    value: /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
      wrap: true,
      direction: "row",
      width: "small"
    }, selected && selected.length ? selected.map(function (index) {
      return renderSeason(allSeasons[index]);
    }) : /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
      pad: {
        vertical: 'xsmall',
        horizontal: 'small'
      },
      margin: "xsmall"
    }, "Select Season")),
    options: allSeasons,
    selected: selected,
    disabled: [2, 6],
    onChange: function onChange(_ref) {
      var nextSelected = _ref.selected;
      setSelected([].concat(nextSelected).sort());
    }
  }, renderOption)));
};

(0, _react2.storiesOf)('Select', module).add('Seasons', function () {
  return /*#__PURE__*/_react["default"].createElement(SeasonsSelect, null);
});