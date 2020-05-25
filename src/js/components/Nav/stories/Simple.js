import React from 'react';

import { Anchor, Nav } from 'mnet-ui-base';

const items = [
  { label: 'Item A', href: '#' },
  { label: 'Item B', href: '#' },
  { label: 'Item C', href: '#' },
  { label: 'Item D', href: '#' },
];

const SimpleNav = () => (
  <>
    <Nav pad="large">
      {items.map(item => (
        <Anchor href={item.href} label={item.label} key={item.label} />
      ))}
    </Nav>
  </>
);

export const Simple = () => <SimpleNav />;

export default {
  title: 'Controls/Nav/Simple',
};
