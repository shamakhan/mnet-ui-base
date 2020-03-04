import React from 'react';
import { storiesOf } from '@storybook/react';
import { Anchor, MnetUIBase, Nav } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';
var items = [{
  label: 'Item A',
  href: '#'
}, {
  label: 'Item B',
  href: '#'
}, {
  label: 'Item C',
  href: '#'
}, {
  label: 'Item D',
  href: '#'
}];

var Simple = function Simple() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Nav, {
    pad: "large"
  }, items.map(function (item) {
    return React.createElement(Anchor, {
      href: item.href,
      label: item.label,
      key: item.label
    });
  })));
};

storiesOf('Nav', module).add('Simple', function () {
  return React.createElement(Simple, null);
});