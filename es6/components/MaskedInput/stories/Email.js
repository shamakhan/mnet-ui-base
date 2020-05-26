import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, MaskedInput } from 'mnet-ui-base';
import { MailOption } from "grommet-icons/es6/icons/MailOption";

var EmailMaskedInput = function EmailMaskedInput() {
  var _React$useState = React.useState(''),
      value = _React$useState[0],
      setValue = _React$useState[1];

  var emailMask = [{
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
  }];
  return React.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }
  }, React.createElement(Box, {
    fill: true,
    align: "center",
    justify: "start",
    pad: "large"
  }, React.createElement(Box, {
    width: "medium",
    gap: "medium"
  }, React.createElement(MaskedInput, {
    icon: React.createElement(MailOption, null),
    mask: emailMask,
    value: value,
    onChange: function onChange(event) {
      return setValue(event.target.value);
    }
  }), React.createElement(MaskedInput, {
    reverse: true,
    icon: React.createElement(MailOption, null),
    mask: emailMask,
    value: value,
    onChange: function onChange(event) {
      return setValue(event.target.value);
    }
  }))));
};

storiesOf('MaskedInput', module).add('Email with Icon', function () {
  return React.createElement(EmailMaskedInput, null);
});