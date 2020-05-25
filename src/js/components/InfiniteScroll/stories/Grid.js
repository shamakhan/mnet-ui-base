import React from 'react';

import { Grid, Box, Image, InfiniteScroll, Text } from 'mnet-ui-base';

const allItems = Array(2000)
  .fill()
  .map((_, i) => `item ${i + 1}`);

export const GridInfiniteScroll = () => (
  <>
    <Grid columns="xsmall" rows="small">
      <InfiniteScroll items={allItems} step={12}>
        {item => (
          <Box key={item} as="article" pad="xsmall">
            <Image src="https://via.placeholder.com/350x150" />
            <Text>{item}</Text>
          </Box>
        )}
      </InfiniteScroll>
    </Grid>
  </>
);

GridInfiniteScroll.storyName = 'Grid';

export default {
  title: 'Utilities/InfiniteScroll/Grid',
};
