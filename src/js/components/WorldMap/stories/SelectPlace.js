import React from 'react';

import { Box, MnetUIBase, WorldMap } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const SelectPlace = () => {
  const [places, setPlaces] = React.useState();

  const onSelectPlace = place => {
    setPlaces([{ color: 'graph-1', location: place }]);
  };

  return (
    <MnetUIBase theme={mnet}>
      <Box align="center" pad="large">
        <WorldMap onSelectPlace={onSelectPlace} places={places} />
      </Box>
    </MnetUIBase>
  );
};

SelectPlace.storyName = 'Select place';

SelectPlace.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Visualizations/WorldMap/Select place',
};
