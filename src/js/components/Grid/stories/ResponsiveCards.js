import React, { useContext } from 'react';

import {
  mnet,
  Box,
  Card,
  Grid,
  MnetUIBase,
  ResponsiveContext,
  Text,
} from 'mnet-ui-base';

const cards = Array(20)
  .fill()
  // eslint-disable-next-line react/no-array-index-key
  .map((_, i) => <Text key={i}>{`Card ${i}`}</Text>);

export const Example = () => {
  const size = useContext(ResponsiveContext);
  return (
    <MnetUIBase theme={mnet}>
      <Box pad="large">
        <Grid columns={size !== 'small' ? 'small' : '100%'} gap="small">
          {cards.map((card, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Card pad="large" key={index}>
              {card}
            </Card>
          ))}
        </Grid>
      </Box>
    </MnetUIBase>
  );
};

Example.storyName = 'Responsive cards';

export default {
  title: 'Layout/Grid/Responsive cards',
};
