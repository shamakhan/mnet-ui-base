import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';

import { createPortal } from '../../../utils/portal';
import { MultiSelect } from '..';

describe('MultiSelect', () => {
  beforeEach(createPortal);

  afterEach(cleanup);

  test('basic', () => {
    const component = renderer.create(
      <MultiSelect
        id="test-select"
        value={[]}
        options={[
          { id: 1, label: 'Test 1' },
          { id: 2, label: 'Test 2' },
        ]}
        labelKey="label"
        valueKey={{ key: 'id', reduce: true }}
      />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

});
