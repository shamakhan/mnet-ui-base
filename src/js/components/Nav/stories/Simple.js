import React from 'react';

import { Anchor, MnetUIBase, Nav } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const items = [
  { label: 'Item A', href: '#' },
  { label: 'Item B', href: '#' },
  { label: 'Item C', href: '#' },
  { label: 'Item D', href: '#' },
];

const SimpleNav = () => (
  <MnetUIBase theme={mnet}>
    <Nav pad="large">
      {items.map(item => (
        <Anchor href={item.href} label={item.label} key={item.label} />
      ))}
    </Nav>
  </MnetUIBase>
);

export const Simple = () => <SimpleNav />;

export default {
  title: 'Controls/Nav/Simple',
};
