import React from 'react';
import { mnet } from 'mnet-ui-base/themes';

import { MnetUIBase, Box, InfiniteScroll, Text } from 'mnet-ui-base';

const allItems = Array(240)
  .fill()
  .map((_, i) => `item ${i + 1}`);

const Example = props => (
  <MnetUIBase theme={mnet}>
    <InfiniteScroll items={allItems} {...props}>
      {item => (
        <Box key={item} pad="medium" border={{ side: 'bottom' }} align="center">
          <Text>{item}</Text>
        </Box>
      )}
    </InfiniteScroll>
  </MnetUIBase>
);

export const ShowBefore = () => <Example replace show={27} />;

ShowBefore.storyName = 'Replace, show before step';

ShowBefore.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Utilities/InfiniteScroll/Replace, show before step',
};
