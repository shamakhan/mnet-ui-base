import React from 'react';

import { MnetUIBase, Box, Button, RadioButton } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Simple = () => {
  const [selected, setSelected] = React.useState();

  return (
    <MnetUIBase theme={mnet}>
      <Box align="center" pad="large" gap="large">
        <RadioButton
          label="option 1"
          name="name"
          value="option 1"
          checked={selected === 'option 1'}
          onChange={event => setSelected(event.target.value)}
        />

        <Button label="clear" onClick={() => setSelected(undefined)} />
      </Box>
    </MnetUIBase>
  );
};

export default {
  title: 'Input/RadioButton/Simple',
};
