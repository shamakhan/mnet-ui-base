import React from 'react';

import { Box, MnetUIBase, WorldMap } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Continents = () => {
  const [active, setActive] = React.useState();
  return (
    <MnetUIBase theme={mnet}>
      <Box align="center" pad="large">
        <WorldMap
          continents={[
            {
              name: 'Africa',
              color: 'graph-1',
              onClick: () => setActive(!active),
            },
          ]}
        />
        {active && <Box margin="large">Africa</Box>}
      </Box>
    </MnetUIBase>
  );
};

export default {
  title: 'Visualizations/WorldMap/Continents',
};
