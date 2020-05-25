import React from 'react';

import { Anchor, Box, Paragraph } from 'mnet-ui-base';

const InlineAnchor = () => (
  <div>
    <Box align="center" pad="large">
      <Paragraph>
        This is <Anchor label="an inline link" href="#" /> with surrounding
        text.
      </Paragraph>
    </Box>
  </div>
);

export const Inline = () => <InlineAnchor />;

export default {
  title: 'Controls/Anchor/Inline',
};
