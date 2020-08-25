import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { createPortal } from '../../../utils/portal';
import { MultiSelect } from '..';

const options = [
  { id: 1, label: 'Test 1' },
  { id: 2, label: 'Test 2' },
  { id: 3, label: 'Test 3' },
  { id: 4, label: 'Test 4' },
  { id: 5, label: 'Test 5' },
  { id: 10, label: 'Test 10' },
  { id: 11, label: 'Test 11' },
  { id: 12, label: 'Test 12' },
];
const labelKey = 'label';
const valueKey = { key: 'id', reduce: true };

describe('MultiSelect', () => {
  beforeEach(createPortal);
  afterEach(cleanup);

  it('basic', () => {
    const props = { value: [], options, labelKey, valueKey };

    const component = renderer.create(
      <MultiSelect
        id="test-multiselect"
        {...props}
      />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('double-column', () => {
    let incExc = null;
    let value = [];
    const props = { options, labelKey, valueKey, layout: 'double-column' };

    const onIncExcChange = jest.fn(() => {
      incExc = incExc !== null ? !incExc : true
    });
    const onValueChange = jest.fn(() => { value = [1,2] });

    const component = renderer.create(
      <MultiSelect
        id="test-multiselect"
        value={value}
        isExcluded={incExc}
        onValueChange={onValueChange}
        onIncExcChange={onIncExcChange}
        withOptionChips
        withUpdateCancelButtons
        withInclusionExclusion
        {...props}
      />,
    );
    expect(component.toJSON()).toMatchSnapshot();

  });

  it('Single Column - Passing value externally - Value Label', () => {
    const props = { options, labelKey, valueKey, layout: 'single-column' };
    let value = [ 1, 3 ];
    const onValueChange = jest.fn(values => { value = values });

    const { getByLabelText } = render(
      <MultiSelect
        id="test-multiselect"
        value={value}
        onValueChange={onValueChange}
        withOptionChips
        {...props}
      />,
    );

    expect(getByLabelText('Selected Label Value'))
      .toHaveTextContent(/^Selected$/);
    expect(getByLabelText('Selected Label Count')).toHaveTextContent(/^2$/);

  });

  it('Single Coulmn - Passing value externally - Option Chips', () => {
    const props = { options, labelKey, valueKey, layout: 'single-column' };
    const value = [ 1, 3 ];
    const onValueChange = jest.fn();

    const { getByLabelText, queryAllByRole } = render(
      <MultiSelect
        id="test-multiselect"
        value={value}
        onValueChange={onValueChange}
        withOptionChips
        {...props}
      />,
    );

    // Open the multiselect dropdown
    fireEvent.click(getByLabelText('Open Drop'));
    
    const chipsElements = queryAllByRole(
      'listitem',
      { name: 'Selected Option Chip'},
    );

    // Match no. of options which are selected
    expect(chipsElements.length).toBe(2);

    // Match the option labels which are selected
    chipsElements.forEach((el, index) => {
      expect(el).toHaveTextContent(new RegExp(`^Test ${value[index]}$`));
    });

  });

  it('Single Column - Passing value externally - Verify checkbox check', () => {
    const props = { options, labelKey, valueKey, layout: 'single-column' };
    const value = [ 1, 3 ];
    const onValueChange = jest.fn();

    const { getByLabelText } = render(
      <MultiSelect
        id="test-multiselect"
        value={value}
        onValueChange={onValueChange}
        withOptionChips
        {...props}
      />,
    );

    // Open the multiselect dropdown
    fireEvent.click(getByLabelText('Open Drop'));

    value.forEach(_ => {
      expect(getByLabelText(`select checkbox for Test ${_}`))
        .toHaveClass('option-checkbox-active');
    });

  });

  it('Single Column - No values selected - Value Label', () => {
    const props = { options, labelKey, valueKey, layout: 'single-column' };
    const onValueChange = jest.fn();

    const { queryAllByLabelText } = render(
      <MultiSelect
        id="test-multiselect"
        value={[]}
        onValueChange={onValueChange}
        withOptionChips
        {...props}
      />,
    );

    const [selectLabel] = queryAllByLabelText('Selected Label Value');
    const count = queryAllByLabelText('Selected Label Count');

    expect(selectLabel).toHaveTextContent(/^Select$/);
    expect(count.length).toBe(0);

  });

  it('Single Column - No values selected - Option Chips', () => {
    const props = { options, labelKey, valueKey, layout: 'single-column' };
    const onValueChange = jest.fn();

    const { getByLabelText, queryAllByRole } = render(
      <MultiSelect
        id="test-multiselect"
        value={[]}
        onValueChange={onValueChange}
        withOptionChips
        {...props}
      />,
    );

    // Open the multiselect dropdown
    fireEvent.click(getByLabelText('Open Drop'));
    
    const chipsElements = queryAllByRole(
      'listitem',
      { name: 'Selected Option Chip'},
    );

    // Match no. of options which are selected
    expect(chipsElements.length).toBe(0);

  });

  it('Single Column - No values selected - Verify checkbox check', () => {
    const props = { options, labelKey, valueKey, layout: 'single-column' };
    const onValueChange = jest.fn();

    const { getByLabelText } = render(
      <MultiSelect
        id="test-multiselect"
        value={[]}
        onValueChange={onValueChange}
        withOptionChips
        {...props}
      />,
    );

    // Open the multiselect dropdown
    fireEvent.click(getByLabelText('Open Drop'));

    options.forEach(_ => {
      expect(getByLabelText(`select checkbox for Test ${_.id}`))
        .toHaveClass('option-checkbox-inactive');
    });

  });

  it('Single Column - Search - Value match', () => {
    const props = { options, labelKey, valueKey, layout: 'single-column' };
    const onValueChange = jest.fn();

    const { getByRole, getByLabelText } = render(
      <MultiSelect
        id="test-multiselect"
        value={[]}
        onValueChange={onValueChange}
        withOptionChips
        searchable
        searchPlaceholder="Search"
        {...props}
      />,
    );

    // Open the multiselect dropdown
    fireEvent.click(getByLabelText('Open Drop'));

    const searchElement = getByRole(
      'search',
      { name: 'multiselect searchbox' },
    );

    fireEvent.change(searchElement, { target: { value: 'Test 1' } });
    expect(searchElement.value).toBe('Test 1');

  });

  it('Single Column - Search - Option match', () => {
    const props = { options, labelKey, valueKey, layout: 'single-column' };
    const onValueChange = jest.fn();

    const { getByRole, getByLabelText, queryAllByRole } = render(
      <MultiSelect
        id="test-multiselect"
        value={[]}
        onValueChange={onValueChange}
        withOptionChips
        searchable
        searchPlaceholder="Search"
        {...props}
      />,
    );

    // Open the multiselect dropdown
    fireEvent.click(getByLabelText('Open Drop'));

    const searchElement = getByRole(
      'search',
      { name: 'multiselect searchbox' },
    );

    // Initial Option count check
    expect(queryAllByRole(
      'option',
      { name: 'multiselect option value' },
    ).length).toBe(8);

    fireEvent.change(searchElement, { target: { value: 'Test 1' } });

    const filteredOptions = queryAllByRole(
      'option',
      { name: 'multiselect option value' },
    );

    expect(filteredOptions.length).toBe(4);

    filteredOptions.forEach((option, index) => {
      expect(option)
        .toHaveTextContent(
          new RegExp(
            `^${options.filter(_ => _.label.includes('Test 1'))[index].label}$`,
          ))
    });

  });

});
