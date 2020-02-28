import React from 'react';
import { storiesOf } from '@storybook/react';
import { Attraction } from "grommet-icons/es6/icons/Attraction";
import { MnetUIBase, Box, Text } from 'mnet-ui-base';
import { mnet } from '../../../themes';

var OnClickBox = function OnClickBox() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    justify: "center",
    align: "center",
    pad: "large"
  }, React.createElement(Box, {
    border: true,
    pad: "large",
    align: "center",
    round: true,
    gap: "small",
    hoverIndicator: true,
    onClick: function onClick() {
      alert('clicked');
    }
  }, React.createElement(Attraction, {
    size: "large"
  }), React.createElement(Text, null, "Party"))));
};

storiesOf('Box', module).add('onClick', function () {
  return React.createElement(OnClickBox, null);
});