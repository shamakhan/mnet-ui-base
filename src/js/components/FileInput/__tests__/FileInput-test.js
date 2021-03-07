import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import { MnetUIBase } from '../../MnetUIBase';
import { FileInput } from '..';

describe('FileInput', () => {
  test('basic', () => {
    const { container } = render(
      <MnetUIBase>
        <FileInput name="file" />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('multiple', () => {
    const { container } = render(
      <MnetUIBase>
        <FileInput name="file" multiple />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('multiple aggregateThreshold', () => {
    const { container } = render(
      <MnetUIBase>
        <FileInput name="file" multiple={{ aggregateThreshold: 2 }} />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('accept', () => {
    const { container } = render(
      <MnetUIBase>
        <FileInput name="file" accept="image/*" />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('disabled', () => {
    const { container } = render(
      <MnetUIBase>
        <FileInput name="file" disabled />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('messages', () => {
    const { container } = render(
      <MnetUIBase>
        <FileInput
          name="file"
          messages={{
            browse: 'test browse',
          }}
        />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('background', () => {
    const { container } = render(
      <MnetUIBase>
        <FileInput name="file" background={{ color: 'background-contrast' }} />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('border', () => {
    const { container } = render(
      <MnetUIBase>
        <FileInput name="file" border={{ color: 'brand', size: 'large' }} />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('pad', () => {
    const { container } = render(
      <MnetUIBase>
        <FileInput name="file" pad="small" />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('margin', () => {
    const { container } = render(
      <MnetUIBase>
        <FileInput name="file" margin="small" />
      </MnetUIBase>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
