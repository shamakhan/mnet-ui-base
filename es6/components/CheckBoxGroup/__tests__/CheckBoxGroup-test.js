import React from 'react';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { MnetUIBase } from '../../MnetUIBase';
import { CheckBoxGroup } from '..';
describe('CheckBoxGroup', function () {
  afterEach(cleanup);
  test('options renders', function () {
    var component = renderer.create(React.createElement(MnetUIBase, null, React.createElement(CheckBoxGroup, {
      options: ['First', 'Second']
    })));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('value renders', function () {
    var component = renderer.create(React.createElement(MnetUIBase, null, React.createElement(CheckBoxGroup, {
      value: ['First'],
      options: ['First', 'Second']
    })));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('initial value renders', function () {
    var component = renderer.create(React.createElement(MnetUIBase, null, React.createElement(CheckBoxGroup, {
      value: ['Wuhan', 'Jerusalem'],
      options: [{
        label: 'Maui',
        value: 'Maui'
      }, {
        label: 'Jerusalem',
        value: 'Jerusalem'
      }, {
        label: 'Wuhan',
        value: 'Wuhan'
      }]
    })));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('disabled renders', function () {
    var component = renderer.create(React.createElement(MnetUIBase, null, React.createElement(CheckBoxGroup, {
      disabled: true,
      options: ['First', 'Second']
    }), React.createElement(CheckBoxGroup, {
      options: [{
        label: 'First',
        disabled: true
      }]
    }), React.createElement(CheckBoxGroup, {
      options: [{
        label: 'First',
        disabled: true
      }]
    })));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});