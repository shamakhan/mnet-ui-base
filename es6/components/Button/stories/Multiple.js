import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box, Button } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';
import { Add } from "grommet-icons/es6/icons/Add";

var MultipleButton = function MultipleButton() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(Box, {
    direction: "row",
    align: "center",
    gap: "small",
    pad: "xsmall"
  }, React.createElement(Button, {
    label: "Cancel",
    onClick: function onClick() {}
  }), React.createElement(Button, {
    color: "dark-1",
    primary: true,
    icon: React.createElement(Add, {
      color: "accent-1"
    }),
    label: "Add",
    onClick: function onClick() {}
  })), React.createElement(Box, {
    direction: "row",
    align: "center",
    gap: "small",
    pad: "xsmall"
  }, React.createElement(Button, {
    label: "Cancel",
    onClick: function onClick() {}
  }), React.createElement(Button, {
    color: "dark-1",
    primary: true,
    icon: React.createElement(Add, null),
    label: "Add",
    onClick: function onClick() {}
  })), React.createElement(Box, {
    direction: "row",
    align: "center",
    gap: "small",
    pad: "xsmall"
  }, React.createElement(Button, {
    label: "Cancel",
    onClick: function onClick() {}
  }), React.createElement(Button, {
    primary: true,
    icon: React.createElement(Add, null),
    label: "Add",
    onClick: function onClick() {}
  })), React.createElement(Box, {
    direction: "row",
    align: "center",
    gap: "small",
    pad: "xsmall"
  }, React.createElement(Button, {
    label: "Cancel",
    onClick: function onClick() {}
  }), React.createElement(Button, {
    color: "light-2",
    primary: true,
    icon: React.createElement(Add, null),
    label: "Add",
    onClick: function onClick() {}
  }))));
};

storiesOf('Button', module).add('Multiple', function () {
  return React.createElement(MultipleButton, null);
});