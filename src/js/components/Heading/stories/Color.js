import React from 'react';
import { MnetUIBase, Heading } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Color = () => (
  <MnetUIBase theme={mnet}>
    <Heading color="accent-1">Colored Heading</Heading>
  </MnetUIBase>
);

export default {
  title: 'Type/Heading/Color',
};
