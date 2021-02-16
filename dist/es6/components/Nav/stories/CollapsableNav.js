import React from 'react';
import { storiesOf } from '@storybook/react';
import { Anchor, Box, Header, Nav, Menu, ResponsiveContext } from 'mnet-ui-base';

var CollapsableNav = function CollapsableNav() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    background: "dark-1",
    pad: "medium"
  }, /*#__PURE__*/React.createElement(Box, {
    direction: "row",
    align: "center",
    gap: "small"
  }, "Resize the page to collapse the Nav into a Menu"), /*#__PURE__*/React.createElement(ResponsiveContext.Consumer, null, function (responsive) {
    return responsive === 'small' ? /*#__PURE__*/React.createElement(Menu, {
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
    }) : /*#__PURE__*/React.createElement(Nav, {
      direction: "row"
    }, /*#__PURE__*/React.createElement(Anchor, {
      href: "#",
      label: "This is"
    }), /*#__PURE__*/React.createElement(Anchor, {
      href: "#",
      label: "The Nav"
    }), /*#__PURE__*/React.createElement(Anchor, {
      href: "#",
      label: "Component"
    }));
  })));
};

storiesOf('ResponsiveContext', module).add('Collapsable Nav', function () {
  return /*#__PURE__*/React.createElement(CollapsableNav, null);
});