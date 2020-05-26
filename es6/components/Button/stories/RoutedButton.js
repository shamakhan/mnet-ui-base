import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, RoutedButton, Text } from 'mnet-ui-base';

var RouteButton = function RouteButton() {
  return React.createElement(React.Fragment, null, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(Text, {
    margin: "medium",
    size: "small"
  }, "Note: RoutedButton will soon be deprecated"), React.createElement(RoutedButton, {
    label: "Go",
    path: "/"
  })));
};

storiesOf('Button', module).add('RoutedButton', function () {
  return React.createElement(RouteButton, null);
});