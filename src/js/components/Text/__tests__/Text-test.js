import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { axe } from 'jest-axe';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';

import { MnetUIBase } from '../../MnetUIBase';
import { Text } from '..';

test('should have no accessibility violations', async () => {
  const { container } = render(
    <Grommet>
      <Text a11yTitle="test"> Example</Text>
    </Grommet>,
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  expect(container.firstChild).toMatchSnapshot();
});

test('renders', () => {
  const component = renderer.create(
    <MnetUIBase>
      <Text>text</Text>
    </MnetUIBase>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('accepts ref', () => {
  const ref = React.createRef();
  const component = renderer.create(
    <Grommet>
      <Text ref={ref}>text</Text>
    </Grommet>,
    { createNodeMock: el => el },
  );
  expect(ref.current).not.toBeNull();
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders size', () => {
  const component = renderer.create(
    <MnetUIBase>
      <Text size="xsmall" />
      <Text size="small" />
      <Text size="medium" />
      <Text size="large" />
      <Text size="xlarge" />
      <Text size="xxlarge" />
      <Text size="2xl" />
      <Text size="3xl" />
      <Text size="4xl" />
      <Text size="5xl" />
      <Text size="6xl" />
    </MnetUIBase>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders textAlign', () => {
  const component = renderer.create(
    <MnetUIBase>
      <Text textAlign="start" />
      <Text textAlign="center" />
      <Text textAlign="end" />
    </MnetUIBase>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders margin', () => {
  const component = renderer.create(
    <MnetUIBase>
      <Text margin="small" />
      <Text margin="medium" />
      <Text margin="large" />
      <Text margin="none" />
      <Text margin={{ vertical: 'small' }} />
      <Text margin={{ horizontal: 'small' }} />
      <Text margin={{ bottom: 'small' }} />
      <Text margin={{ top: 'small' }} />
      <Text margin={{ left: 'small' }} />
      <Text margin={{ right: 'small' }} />
    </MnetUIBase>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

const LONG = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';

test('renders truncate', () => {
  const component = renderer.create(
    <MnetUIBase>
      <Text truncate={false}>{LONG}</Text>
      <Text truncate>{LONG}</Text>
    </MnetUIBase>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders color', () => {
  const component = renderer.create(
    <MnetUIBase>
      <Text color="status-critical" />
    </MnetUIBase>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders tag', () => {
  const component = renderer.create(
    <MnetUIBase>
      <Text as="div" />
    </MnetUIBase>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('proxies tag', () => {
  const tagComponent = renderer.create(
    <MnetUIBase>
      <Text tag="div" />
    </MnetUIBase>,
  );
  const asComponent = renderer.create(
    <MnetUIBase>
      <Text as="div" />
    </MnetUIBase>,
  );
  expect(tagComponent.toJSON()).toEqual(asComponent.toJSON());
});

test('renders weight', () => {
  const component = renderer.create(
    <MnetUIBase>
      <Text weight="normal" />
      <Text weight="bold" />
    </MnetUIBase>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
