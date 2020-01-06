import React from 'react';

import { Anchor, Box, MnetUIBase, Paragraph } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const InlineAnchor = () => (
  <MnetUIBase theme={mnet}>
    <Box align="center" pad="large">
      <Paragraph>
        This is <Anchor label="an inline link" href="#" /> with surrounding
        text.
      </Paragraph>
    </Box>
  </MnetUIBase>
);

export const Inline = () => <InlineAnchor />;

export default {
  title: 'Controls/Anchor/Inline',
};
