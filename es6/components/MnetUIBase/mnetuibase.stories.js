import React from 'react';
import { storiesOf } from '@storybook/react';
import { mnet, MnetUIBase, Anchor, Box } from 'mnet-ui-base';
import { Add } from "grommet-icons/es6/icons/Add";
var customTheme = {
  global: {
    colors: {
      custom: '#cc6633'
    }
  }
};

var Themed = function Themed() {
  return React.createElement(MnetUIBase, {
    theme: customTheme
  }, React.createElement(Box, {
    pad: "medium"
  }, React.createElement(Anchor, {
    icon: React.createElement(Add, null),
    label: "Add",
    color: "custom"
  })));
};

var Plain = function Plain() {
  return React.createElement(React.Fragment, null, React.createElement(MnetUIBase, {
    plain: true
  }, React.createElement(Box, {
    pad: "medium"
  }, React.createElement("p", null, "Plain MnetUIBase"))), React.createElement(MnetUIBase, null, React.createElement(Box, {
    pad: "medium"
  }, React.createElement("p", null, "Not plain MnetUIBase"))));
};

var MnetUIBaseVars = function MnetUIBaseVars() {
  return React.createElement(MnetUIBase, {
    theme: mnet,
    cssVars: true
  }, React.createElement(Box, {
    pad: "medium",
    background: "var(--accent-2)",
    gap: "medium"
  }, React.createElement(Box, null, "Checkout MnetUIBase variables, you can find them in the StyledMnetUIBase DOM."), React.createElement(Box, {
    "with": true
  }, "For example, the background color in this Box is using var(--accent-2)")));
};

storiesOf('MnetUIBase', module).add('Plain', function () {
  return React.createElement(Plain, null);
}).add('Theme', function () {
  return React.createElement(Themed, null);
}).add('Vars', function () {
  return React.createElement(MnetUIBaseVars, null);
});