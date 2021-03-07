import React, { useState } from 'react';

import { Box, MnetUIBase, Select, mnet } from 'mnet-ui-base';

const options = ['one', 'two', 'three'];

const ClearTop = () => {
  const [value, setValue] = useState();
  return (
    <Box fill align="center" justify="start" pad="large">
      <Select
        placeholder="Clear Options"
        multiple
        value={value}
        options={options}
        onChange={({ value: nextValue }) => setValue(nextValue)}
        clear
      />
    </Box>
  );
};

export const Clear = () => (
  <MnetUIBase theme={mnet}>
    <ClearTop />
  </MnetUIBase>
);

Clear.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Input/Select/Clear',
};
