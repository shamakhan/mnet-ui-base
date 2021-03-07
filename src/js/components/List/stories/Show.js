import React from 'react';

import { Box, MnetUIBase, List, Menu } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';
import { More } from 'grommet-icons';

const data = [];

for (let i = 0; i < 95; i += 1) {
  data.push({
    entry: `entry-${i + 1}`,
  });
}

export const Show = () => (
  <MnetUIBase theme={mnet} full>
    <Box pad="medium">
      <List
        data={data}
        action={(item, index) => (
          <Menu
            key={index}
            icon={<More />}
            hoverIndicator
            items={[{ label: 'one' }]}
          />
        )}
        show={30}
      />
    </Box>
  </MnetUIBase>
);
