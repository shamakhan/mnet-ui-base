import React from 'react';
import { storiesOf } from '@storybook/react';
import { Anchor, Box, Header, Nav, Menu, ResponsiveContext } from 'mnet-ui-base';

var CollapsableNav = function CollapsableNav() {
  return React.createElement(React.Fragment, null, React.createElement(Header, {
    background: "dark-1",
    pad: "medium"
  }, React.createElement(Box, {
    direction: "row",
    align: "center",
    gap: "small"
  }, "Resize the page to collapse the Nav into a Menu"), React.createElement(ResponsiveContext.Consumer, null, function (responsive) {
    return responsive === 'small' ? React.createElement(Menu, {
      label: "Click me",
      items: [{
        label: 'This is',
        onClick: function onClick() {}
      }, {
        label: 'The Menu',
        onClick: function onClick() {}
      }, {
        label: 'Component',
        onClick: function onClick() {}
      }]
    }) : React.createElement(Nav, {
      direction: "row"
    }, React.createElement(Anchor, {
      href: "#",
      label: "This is"
    }), React.createElement(Anchor, {
      href: "#",
      label: "The Nav"
    }), React.createElement(Anchor, {
      href: "#",
      label: "Component"
    }));
  })));
};

storiesOf('ResponsiveContext', module).add('Collapsable Nav', function () {
  return React.createElement(CollapsableNav, null);
});