"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultValue = {
  name: '',
  email: '',
  subscribe: false,
  ampm: '',
  size: '',
  comments: '',
  age: ''
};

var Example = function Example() {
  var _React$useState = _react["default"].useState(defaultValue),
      value = _React$useState[0],
      setValue = _React$useState[1];

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    align: "center",
    justify: "center"
  }, _react["default"].createElement(_mnetUiBase.Box, {
    width: "medium"
  }, _react["default"].createElement(_mnetUiBase.Form, {
    value: value,
    onChange: function onChange(nextValue) {
      console.log('Change', nextValue);
      setValue(nextValue);
    },
    onReset: function onReset() {
      return setValue(defaultValue);
    },
    onSubmit: function onSubmit(event) {
      return console.log('Submit', event.value, event.touched);
    }
  }, _react["default"].createElement(_mnetUiBase.FormField, {
    label: "Name",
    name: "name"
  }, _react["default"].createElement(_mnetUiBase.TextInput, {
    name: "name"
  })), _react["default"].createElement(_mnetUiBase.FormField, {
    label: "Email",
    name: "email",
    required: true
  }, _react["default"].createElement(_mnetUiBase.MaskedInput, {
    name: "email",
    mask: [{
      regexp: /^[\w\-_.]+$/,
      placeholder: 'example'
    }, {
      fixed: '@'
    }, {
      regexp: /^[\w]+$/,
      placeholder: 'my'
    }, {
      fixed: '.'
    }, {
      regexp: /^[\w]+$/,
      placeholder: 'com'
    }]
  })), _react["default"].createElement(_mnetUiBase.FormField, {
    name: "subscribe"
  }, _react["default"].createElement(_mnetUiBase.CheckBox, {
    name: "subscribe",
    label: "Subscribe?"
  })), _react["default"].createElement(_mnetUiBase.FormField, {
    name: "ampm"
  }, _react["default"].createElement(_mnetUiBase.RadioButtonGroup, {
    name: "ampm",
    options: ['morning', 'evening']
  })), _react["default"].createElement(_mnetUiBase.FormField, {
    label: "Size",
    name: "size"
  }, _react["default"].createElement(_mnetUiBase.Select, {
    name: "size",
    options: ['small', 'medium', 'large']
  })), _react["default"].createElement(_mnetUiBase.FormField, {
    label: "Comments",
    name: "comments"
  }, _react["default"].createElement(_mnetUiBase.TextArea, {
    name: "comments"
  })), _react["default"].createElement(_mnetUiBase.FormField, {
    label: "Age",
    name: "age",
    pad: true
  }, _react["default"].createElement(_mnetUiBase.RangeInput, {
    name: "age",
    min: 15,
    max: 75
  })), _react["default"].createElement(_mnetUiBase.Box, {
    direction: "row",
    justify: "between",
    margin: {
      top: 'medium'
    }
  }, _react["default"].createElement(_mnetUiBase.Button, {
    label: "Cancel"
  }), _react["default"].createElement(_mnetUiBase.Button, {
    type: "reset",
    label: "Reset"
  }), _react["default"].createElement(_mnetUiBase.Button, {
    type: "submit",
    label: "Update",
    primary: true
  }))))));
};

(0, _react2.storiesOf)('Form', module).add('Controlled', function () {
  return _react["default"].createElement(Example, null);
});