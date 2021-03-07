import React from 'react';

import { MnetUIBase, Paragraph } from 'mnet-ui-base';
import { deepMerge } from 'mnet-ui-base/utils';
import { mnet } from 'mnet-ui-base/themes';

const customTheme = deepMerge(mnet, {
  paragraph: {
    font: {
      family: 'Comic Sans MS',
    },
  },
});

export const Themed = () => (
  <MnetUIBase theme={customTheme}>
    <Paragraph>
      The font family for this paragraph is being defined by a custom theme.
    </Paragraph>
  </MnetUIBase>
);

Themed.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Type/Paragraph/Themed',
};
