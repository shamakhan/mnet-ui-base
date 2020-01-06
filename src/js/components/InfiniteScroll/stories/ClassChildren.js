import React from 'react';

import { MnetUIBase, Box, InfiniteScroll, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const allItems = Array(2000)
  .fill()
  .map((_, i) => `item ${i + 1}`);

/* eslint-disable react/prefer-stateless-function */
const MyItem = ({ item }) => (
  <Box pad="medium" border={{ side: 'bottom' }} align="center">
    <Text>{item}</Text>
  </Box>
);

export const ClassChildrenInfiniteScroll = props => (
  <MnetUIBase theme={mnet}>
    <Box>
      <InfiniteScroll items={allItems} {...props}>
        {item => <MyItem key={item} item={item} />}
      </InfiniteScroll>
    </Box>
  </MnetUIBase>
);

ClassChildrenInfiniteScroll.storyName = 'Class children';

export default {
  title: 'Utilities/InfiniteScroll/Class children',
};
