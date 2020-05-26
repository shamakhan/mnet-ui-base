import React from 'react';
import { storiesOf } from '@storybook/react';
import { mnet, MnetUIBase, Box, Text } from 'mnet-ui-base';
import { neo } from 'mnet-ui-base-theme-neo';

var Background = function Background() {
  var themeColor = 'background-back';
  var hexValue = '#DCD0FF';
  var cssColor = 'gold';
  return React.createElement(Box, {
    gap: "medium"
  }, React.createElement(MnetUIBase, null, React.createElement(Box, {
    pad: "medium"
  }, React.createElement(Text, null, "MnetUIBase with no theme or background prop"))), React.createElement(MnetUIBase, {
    theme: neo,
    themeMode: "dark"
  }, React.createElement(Box, {
    pad: "medium"
  }, React.createElement(Text, null, "MnetUIBase with theme & themeMode but no background prop"))), React.createElement(MnetUIBase, {
    theme: neo,
    themeMode: "light",
    background: themeColor
  }, React.createElement(Box, {
    pad: "medium"
  }, React.createElement(Text, null, "MnetUIBase with background as theme color of '", themeColor, "'"))), React.createElement(MnetUIBase, {
    theme: mnet,
    background: hexValue
  }, React.createElement(Box, {
    pad: "medium"
  }, React.createElement(Text, null, "MnetUIBase with background as HEX value of '", hexValue, "'"))), React.createElement(MnetUIBase, {
    theme: mnet,
    background: cssColor
  }, React.createElement(Box, {
    pad: "medium"
  }, React.createElement(Text, null, "MnetUIBase with background as CSS color name of '", cssColor, "'"))), React.createElement(MnetUIBase, {
    theme: mnet,
    background: {
      color: 'pink',
      image: 'url(http://librelogo.org/wp-content/uploads/2014/04/gradient2.png)'
    }
  }, React.createElement(Box, {
    pad: "medium"
  }, React.createElement(Text, null, "MnetUIBase with background as object containing color and image"))));
};

storiesOf('MnetUIBase', module).add('Background', function () {
  return React.createElement(Background, null);
});