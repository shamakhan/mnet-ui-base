import React from 'react';

import { MnetUIBase, Box, InfiniteScroll, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const allItems = Array(2000)
  .fill()
  .map((_, i) => `item ${i + 1}`);

const Example = props => (
  <MnetUIBase theme={mnet}>
    <Box>
      <InfiniteScroll items={allItems} {...props}>
        {item => (
          <Box
            key={item}
            pad="medium"
            border={{ side: 'bottom' }}
            align="center"
          >
            <Text>{item}</Text>
          </Box>
        )}
      </InfiniteScroll>
    </Box>
  </MnetUIBase>
);

export const Marker = () => (
  <Example
    renderMarker={marker => (
      <Box pad="medium" background="accent-1">
        {marker}
      </Box>
    )}
  />
);

export default {
  title: 'Utilities/InfiniteScroll/Marker',
};
