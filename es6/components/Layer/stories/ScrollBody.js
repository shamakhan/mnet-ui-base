import React from 'react';
import { storiesOf } from '@storybook/react';
import { FormClose } from "grommet-icons/es6/icons/FormClose";
import { Box, Button, MnetUIBase, Layer, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var ScrollBodyLayer = function ScrollBodyLayer() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Layer, {
    full: "vertical",
    position: "right"
  }, React.createElement(Box, {
    fill: true,
    style: {
      minWidth: '378px'
    }
  }, React.createElement(Box, {
    direction: "row",
    align: "center",
    as: "header",
    elevation: "small",
    justify: "between"
  }, React.createElement(Text, {
    margin: {
      left: 'small'
    }
  }, "Header"), React.createElement(Button, {
    icon: React.createElement(FormClose, null)
  })), React.createElement(Box, {
    flex: true,
    overflow: "auto",
    pad: "xsmall"
  }, React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body"), React.createElement("span", null, "body")), React.createElement(Box, {
    as: "footer",
    border: {
      side: 'top'
    },
    pad: "small",
    justify: "end",
    direction: "row",
    align: "center"
  }, React.createElement(Button, {
    primary: true,
    label: "Save"
  })))));
};

storiesOf('Layer', module).add('Fixed Header, Scroll Body', function () {
  return React.createElement(ScrollBodyLayer, null);
});