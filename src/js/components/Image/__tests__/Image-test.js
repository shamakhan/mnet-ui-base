import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';

import { act, cleanup, fireEvent, render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { MnetUIBase } from '../../MnetUIBase';
import { Image } from '..';

const opacityTypes = ['weak', 'medium', 'strong', '0.3', true, false];
const SRC =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABGdBTUEAALGPC/xhBQAAAA1JREFUCB1jYGBg+A8AAQQBAB5znEAAAAAASUVORK5CYII='; // eslint-disable-line max-len

test('image should have no violations', async () => {
  const { container } = render(
    <Grommet>
      <Image src={SRC} a11yTitle="Alt Text" />
    </Grommet>,
  );

  const results = await axe(container);
  expect(results).toHaveNoViolations();

  cleanup();
});

test('Image renders', () => {
  const component = renderer.create(
    <MnetUIBase>
      <Image src={SRC} />
    </MnetUIBase>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Image renders with aria-label', () => {
  const component = renderer.create(
    <Grommet>
      <Image a11yTitle="aria-label-text" src={SRC} />
    </Grommet>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Image fit renders', () => {
  const component = renderer.create(
    <MnetUIBase>
      <Image fit="cover" src={SRC} />
      <Image fit="contain" src={SRC} />
    </MnetUIBase>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

opacityTypes.forEach(opacity => {
  test(`Image opacity of ${opacity} renders`, () => {
    const component = renderer.create(
      <MnetUIBase>
        <Image opacity={opacity} src={SRC} />
      </MnetUIBase>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

test('Image fillProp renders', () => {
  const component = renderer.create(
    <MnetUIBase>
      <Image fill src={SRC} />
      <Image fill={false} src={SRC} />
      <Image fill="horizontal" src={SRC} />
      <Image fill="vertical" src={SRC} />
    </MnetUIBase>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Image onError', () => {
  const onError = jest.fn();
  const { getByAltText } = render(
    <Grommet>
      <Image alt="test" onError={onError} />
    </Grommet>,
  );

  act(() => {
    fireEvent(getByAltText('test'), new Event('error'));
  });

  expect(onError).toHaveBeenCalledTimes(1);
});
