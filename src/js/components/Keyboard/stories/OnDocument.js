import React from 'react';

import { Box, MnetUIBase, Heading, Keyboard } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const OnDocument = () => (
  <MnetUIBase theme={mnet}>
    {/* eslint-disable no-alert */}
    <Keyboard target="document" onEsc={() => alert('You pressed Esc!')}>
      <Box pad="large" background="light-4">
        <Heading level="3">Press Esc on me!</Heading>
      </Box>
    </Keyboard>
  </MnetUIBase>
);

OnDocument.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Utilities/Keyboard/On Document',
};
