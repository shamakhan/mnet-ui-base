import React from 'react';

import { Box, MnetUIBase, WorldMap } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Places = () => {
  const [active, setActive] = React.useState();
  return (
    <MnetUIBase theme={mnet}>
      <Box align="center" pad="large">
        <WorldMap
          places={[
            {
              name: 'Sydney',
              location: [-33.8830555556, 151.216666667],
              color: 'graph-1',
              onClick: () => setActive(!active),
            },
          ]}
        />
        {active && <Box margin="large">Sydney</Box>}
      </Box>
    </MnetUIBase>
  );
};

export default {
  title: 'Visualizations/WorldMap/Places',
};
