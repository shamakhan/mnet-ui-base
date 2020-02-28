import React from 'react';
import { storiesOf } from '@storybook/react';
import { Add } from "grommet-icons/es6/icons/Add";
import { Anchor, Box, MnetUIBase } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var Colors = function Colors() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    pad: "medium",
    gap: "medium"
  }, React.createElement(Anchor, {
    icon: React.createElement(Add, null),
    href: "#"
  }), React.createElement(Anchor, {
    icon: React.createElement(Add, null),
    label: "Add",
    href: "#"
  }), React.createElement(Anchor, {
    label: "Add",
    href: "#"
  })), React.createElement(Box, {
    background: "dark-1",
    pad: "medium",
    gap: "medium"
  }, React.createElement(Anchor, {
    icon: React.createElement(Add, null),
    href: "#"
  }), React.createElement(Anchor, {
    icon: React.createElement(Add, null),
    label: "Add",
    href: "#"
  }), React.createElement(Anchor, {
    icon: React.createElement(Add, null),
    label: "Add",
    href: "#"
  }), React.createElement(Anchor, {
    label: "Add",
    href: "#"
  })));
};

storiesOf('Anchor', module).add('Colors', function () {
  return React.createElement(Colors, null);
});