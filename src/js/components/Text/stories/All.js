import React from 'react';

import { Box, MnetUIBase, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const sizes = [
  '6xl',
  '5xl',
  '4xl',
  '3xl',
  '2xl',
  'xxlarge',
  'xlarge',
  'large',
  'medium',
  'small',
  'xsmall',
  '77px',
];

export const All = () => (
  <MnetUIBase theme={mnet}>
    <>
      {sizes.map(size => (
        <Box key={size} margin="small">
          <Text size={size}>{`Text ${size}`}</Text>
        </Box>
      ))}
      <Box background="light-3" align="end" width="small" pad="small">
        <Text truncate>
          This is a long truncated string of text that is aligned to the end.
        </Text>
      </Box>
    </>
  </MnetUIBase>
);

export default {
  title: 'Type/Text/All',
};
