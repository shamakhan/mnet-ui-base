import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { MnetUIBase } from '../../MnetUIBase';
import { RangeInput } from '..';
test('RangeInput renders', function () {
  var component = renderer.create(React.createElement(MnetUIBase, null, React.createElement(RangeInput, {
    value: "50"
  })));
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});