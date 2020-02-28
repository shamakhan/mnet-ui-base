import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box, Chart, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var LabelledChart = function LabelledChart(_ref) {
  var color = _ref.color,
      label = _ref.label,
      value = _ref.value;
  return React.createElement(Box, {
    flex: false,
    basis: "xsmall",
    align: "center",
    gap: "small"
  }, React.createElement(Chart, {
    bounds: [[0, 2], [0, 400]],
    type: "bar",
    values: [{
      value: [1, value]
    }],
    color: color,
    round: true,
    size: {
      height: 'medium',
      width: 'xsmall'
    }
  }), React.createElement(Box, {
    align: "center"
  }, React.createElement(Text, null, label), React.createElement(Text, {
    weight: "bold"
  }, value, " TiB")));
};

var LabelledCharts = function LabelledCharts() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    pad: "large",
    direction: "row",
    gap: "medium"
  }, React.createElement(LabelledChart, {
    label: "Exported",
    value: 300
  }), React.createElement(LabelledChart, {
    label: "Usable",
    value: 200,
    color: "accent-2"
  }), React.createElement(LabelledChart, {
    label: "Used",
    value: 98.2,
    color: "accent-3"
  })));
};

storiesOf('Chart', module).add('Labelled', function () {
  return React.createElement(LabelledCharts, null);
});