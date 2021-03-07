import React from 'react';

import { Grid, MnetUIBase, Box, Image, InfiniteScroll,
   Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const allItems = Array(2000)
  .fill()
  .map((_, i) => `item ${i + 1}`);

export const GridWithShow = () => (
  <MnetUIBase theme={mnet}>
    <Grid columns="xsmall" rows="small">
      <InfiniteScroll items={allItems} step={12} show={78}>
        {item => (
          <Box key={item} as="article" pad="xsmall">
            <Image src="https://via.placeholder.com/350x150" />
            <Text>{item}</Text>
          </Box>
        )}
      </InfiniteScroll>
    </Grid>
  </MnetUIBase>
);

GridWithShow.storyName = 'Grid with show item 77';

export default {
  title: 'Utilities/InfiniteScroll/Grid with show item 77',
};
