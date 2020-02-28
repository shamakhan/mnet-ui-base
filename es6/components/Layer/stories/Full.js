import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Button, MnetUIBase, Layer } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var FullLayer = function FullLayer() {
  var _React$useState = React.useState(false),
      showLayer = _React$useState[0],
      setShowLayer = _React$useState[1];

  return React.createElement(MnetUIBase, {
    theme: mnet,
    full: true
  }, React.createElement(Box, {
    pad: "small",
    fill: true,
    background: "dark-3",
    align: "center",
    justify: "center"
  }, React.createElement(Button, {
    primary: true,
    color: "accent-3",
    label: "Show",
    onClick: function onClick() {
      return setShowLayer(true);
    }
  }), showLayer && React.createElement(Layer, {
    full: true,
    animation: "fadeIn"
  }, React.createElement(Box, {
    fill: true,
    background: "light-4",
    align: "center",
    justify: "center"
  }, React.createElement(Button, {
    primary: true,
    label: "Close",
    onClick: function onClick() {
      return setShowLayer(false);
    }
  })))));
};

storiesOf('Layer', module).add('Full', function () {
  return React.createElement(FullLayer, null);
});