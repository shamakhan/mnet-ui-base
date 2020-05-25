import React from 'react';

import { MnetUIBase, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Color = () => (
  <MnetUIBase theme={mnet}>
    <Text color="accent-1">Colored Text</Text>
  </MnetUIBase>
);

export default {
  title: 'Type/Text/Color',
};
