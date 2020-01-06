import React from 'react';

import { MnetUIBase, Box, List, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const locations = [
  'Boise',
  'Fort Collins',
  'Los Gatos',
  'Palo Alto',
  'San Francisco',
];

const data = [];
for (let i = 0; i < 40; i += 1) {
  data.push({
    entry: `entry-${i + 1}`,
    location: locations[i % locations.length],
  });
}

export const RenderedList = () => (
  <MnetUIBase theme={mnet}>
    <Box align="center" pad="large">
      <List
        data={data.slice(0, 10)}
        primaryKey={item => (
          <Text size="large" weight="bold">
            {item.entry}
          </Text>
        )}
        secondaryKey={item => (
          <Text size="small" color="dark-4">
            {item.location}
          </Text>
        )}
      />
    </Box>
  </MnetUIBase>
);

RenderedList.storyName = 'Key render';

export default {
  title: 'Visualizations/List/Key render',
};
