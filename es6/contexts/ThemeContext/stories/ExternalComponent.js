import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Text, ThemeContext } from 'mnet-ui-base';

var ExternalComponentWithTheme = function ExternalComponentWithTheme() {
  return React.createElement(React.Fragment, null, React.createElement(Box, {
    background: "neutral-3"
  }, React.createElement(Text, {
    color: "light-1"
  }, "This is a grommet component")), React.createElement(ThemeContext.Consumer, null, function (theme) {
    return React.createElement("div", {
      style: {
        backgroundColor: theme.global.colors['neutral-3']
      }
    }, React.createElement("p", {
      style: {
        color: theme.global.colors['light-1']
      }
    }, "This component is leveraging the grommet theme capabilities although it is not a grommet component"));
  }));
};

storiesOf('Theme', module).add('External Components', function () {
  return React.createElement(ExternalComponentWithTheme, null);
});