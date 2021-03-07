import React from 'react';
import { mnet } from 'mnet-ui-base/themes';

import { MnetUIBase, Box, InfiniteScroll, Text } from 'mnet-ui-base';

const allItems = Array(240)
  .fill()
  .map((_, i) => i + 1);

export const Height = () => (
  <MnetUIBase theme={mnet}>
    <Box>
      <InfiniteScroll items={allItems}>
        {item => (
          <Box
            key={item}
            height={item <= 25 ? 'xsmall' : 'xxsmall'}
            pad="medium"
            border={{ side: 'bottom' }}
            align="center"
          >
            <Text>item {item}</Text>
          </Box>
        )}
      </InfiniteScroll>
    </Box>
  </MnetUIBase>
);

Height.storyName = 'Variable item height';

Height.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Utilities/InfiniteScroll/Variable item height',
};
