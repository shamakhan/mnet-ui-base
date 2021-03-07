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

export const ShowAfter = () => <Example replace show={87} />;

ShowAfter.storyName = 'Replace, show after step';

ShowAfter.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Utilities/InfiniteScroll/Replace, show after step',
};
