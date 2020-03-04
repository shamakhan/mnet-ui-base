import React from 'react';
import { storiesOf } from '@storybook/react';
import { Anchor, Box, MnetUIBase, Main, Nav } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';
import { deepMerge } from 'mnet-ui-base/utils';
var navItems = [{
  label: 'HTML',
  href: '#'
}, {
  label: 'JS',
  href: '#'
}, {
  label: 'CSS',
  href: '#'
}, {
  label: 'REACT',
  href: '#'
}];
var customTheme = deepMerge(mnet, {
  anchor: {
    textDecoration: 'none',
    fontWeight: 500,
    color: {
      dark: 'white',
      light: 'neutral-2'
    },
    hover: {
      textDecoration: 'none',
      fontWeight: 700
    }
  }
});

var CustomAnchor = function CustomAnchor() {
  return React.createElement(MnetUIBase, {
    full: true,
    theme: customTheme
  }, React.createElement(Box, {
    background: "dark-1",
    pad: "large",
    fill: true
  }, React.createElement(Box, {
    direction: "row",
    pad: {
      vertical: 'medium'
    }
  }, React.createElement(Nav, {
    width: "small",
    margin: {
      right: 'large'
    }
  }, navItems.map(function (item) {
    return React.createElement(Anchor, {
      href: item.href,
      label: item.label,
      key: item.label
    });
  })), React.createElement(Main, null, "Place main content here"))));
};

storiesOf('Nav', module).add('Custom Anchor', function () {
  return React.createElement(CustomAnchor, null);
});