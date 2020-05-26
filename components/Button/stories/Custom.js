"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var newCustomTheme = {
  global: {
    colors: {
      brand: '#ee9933',
      'brand-contrast': '#ee993333',
      active: '#eecc33'
    },
    font: {
      family: 'Arial'
    }
  },
  button: {
    "default": {
      color: 'text',
      border: undefined,
      padding: {
        horizontal: '12px',
        vertical: '8px'
      }
    },
    primary: {
      background: {
        color: 'brand'
      },
      border: undefined,
      color: 'text-strong',
      font: {
        weight: 'bold'
      },
      padding: {
        horizontal: '12px',
        vertical: '8px'
      }
    },
    secondary: {
      border: {
        color: 'brand',
        width: '4px'
      },
      color: 'text',
      padding: {
        horizontal: '8px',
        vertical: '4px'
      }
    },
    active: {
      background: {
        color: 'brand-contrast'
      },
      color: 'text',
      secondary: {
        background: 'none',
        border: {
          color: 'brand-contrast'
        }
      }
    },
    disabled: {
      opacity: 0.3,
      secondary: {
        border: {
          color: 'text-weak'
        }
      }
    },
    hover: {
      background: {
        color: 'active'
      },
      secondary: {
        border: {
          color: 'active'
        }
      }
    }
  }
};
var customTheme = {
  global: {
    font: {
      family: 'Arial'
    }
  },
  button: {
    border: {
      radius: undefined,
      color: '#2196f3'
    },
    disabled: {
      color: 'orange',
      border: {
        color: 'orange'
      },
      extend: "border: 10px dashed red;"
    },
    padding: {
      vertical: '12px',
      horizontal: '24px'
    },
    primary: {
      color: '#2196f3',
      active: {
        border: {
          color: 'red'
        },
        extend: "background: cadetblue;"
      },
      extend: "background: skyblue; border: 5px dotted green;"
    },
    extend: function extend(props) {
      var extraStyles = '';

      if (props.primary) {
        extraStyles = "\n            text-transform: uppercase;\n          ";
      }

      return "\n          font-size: 12px;\n          font-weight: bold;\n          " + extraStyles + "\n        ";
    }
  }
};
var coloredButton = {
  button: {
    border: {
      color: 'accent-1'
    },
    color: {
      dark: 'accent-1',
      light: 'dark-2'
    },
    primary: {
      color: 'neutral-2'
    }
  }
};

var CustomTheme = function CustomTheme() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: newCustomTheme
  }, _react["default"].createElement(_mnetUiBase.Box, {
    gap: "small",
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.Heading, {
    level: 2,
    size: "small"
  }, "new custom theme"), _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    direction: "row",
    gap: "small"
  }, _react["default"].createElement(_mnetUiBase.Button, {
    label: "default",
    onClick: function onClick() {}
  }), _react["default"].createElement(_mnetUiBase.Button, {
    label: "active default",
    onClick: function onClick() {},
    active: true
  }), _react["default"].createElement(_mnetUiBase.Button, {
    label: "disabled default",
    onClick: function onClick() {},
    disabled: true
  })), _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    direction: "row",
    gap: "small"
  }, _react["default"].createElement(_mnetUiBase.Button, {
    label: "primary",
    onClick: function onClick() {},
    primary: true
  }), _react["default"].createElement(_mnetUiBase.Button, {
    label: "active primary",
    onClick: function onClick() {},
    primary: true,
    active: true
  }), _react["default"].createElement(_mnetUiBase.Button, {
    label: "disabled primary",
    onClick: function onClick() {},
    primary: true,
    disabled: true
  })), _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    direction: "row",
    gap: "small"
  }, _react["default"].createElement(_mnetUiBase.Button, {
    label: "secondary",
    onClick: function onClick() {},
    secondary: true
  }), _react["default"].createElement(_mnetUiBase.Button, {
    label: "active secondary",
    onClick: function onClick() {},
    secondary: true,
    active: true
  }), _react["default"].createElement(_mnetUiBase.Button, {
    label: "disabled secondary",
    onClick: function onClick() {},
    secondary: true,
    disabled: true
  })))), _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: customTheme
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    justify: "center",
    pad: "large",
    direction: "row",
    gap: "small"
  }, _react["default"].createElement(_mnetUiBase.Button, {
    label: "custom theme",
    onClick: function onClick() {},
    primary: true
  }), _react["default"].createElement(_mnetUiBase.Button, {
    label: "custom active primary",
    onClick: function onClick() {},
    primary: true,
    active: true
  }), _react["default"].createElement(_mnetUiBase.Button, {
    label: "primary disabled",
    onClick: function onClick() {},
    primary: true,
    disabled: true
  }), _react["default"].createElement(_mnetUiBase.Button, {
    label: "Disabled",
    onClick: function onClick() {},
    disabled: true
  }), _react["default"].createElement(_mnetUiBase.Button, {
    label: "Plain Disabled",
    onClick: function onClick() {},
    plain: true,
    disabled: true
  }))), _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: coloredButton
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.Button, {
    as: "span",
    label: "theme on dark background",
    primary: true
  }))), _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _mnetUiBase.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.Button, {
    as: "span",
    label: "Custom as=span"
  }))));
};

(0, _react2.storiesOf)('Button', module).add('Custom', function () {
  return _react["default"].createElement(CustomTheme, null);
});