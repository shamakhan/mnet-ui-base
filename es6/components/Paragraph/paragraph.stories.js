import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Paragraph } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';
var sizes = ['xxlarge', 'xlarge', 'large', 'medium', 'small'];
var paragraphFiller = "\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua.\n";

var All = function All() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, sizes.map(function (size) {
    return React.createElement(Paragraph, {
      key: size,
      size: size
    }, "Paragraph " + size, paragraphFiller);
  }), React.createElement(Paragraph, {
    color: "status-critical"
  }, "This is an error message."), React.createElement(Paragraph, {
    fill: true
  }, "This is a full-width paragraph, using the \"fill\" property:", ' ', paragraphFiller));
};

storiesOf('Paragraph', module).add('All', function () {
  return React.createElement(All, null);
});