"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Example = function Example() {
  return _react["default"].createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }
  }, _react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    align: "center",
    justify: "center"
  }, _react["default"].createElement(_mnetUiBase.Box, {
    width: "medium"
  }, _react["default"].createElement(_mnetUiBase.Form, {
    onReset: function onReset(event) {
      return console.log(event);
    },
    onSubmit: function onSubmit(_ref) {
      var value = _ref.value;
      return console.log('Submit', value);
    }
  }, _react["default"].createElement(_mnetUiBase.FormField, {
    label: "Name",
    name: "name",
    required: true
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
    name: "subscription"
  }, _react["default"].createElement(_mnetUiBase.CheckBoxGroup, {
    name: "subscription",
    options: ['subscribe', 'receive email notifications']
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
    multiple: true,
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

(0, _react2.storiesOf)('Form', module).add('FormField children', function () {
  return _react["default"].createElement(Example, null);
});