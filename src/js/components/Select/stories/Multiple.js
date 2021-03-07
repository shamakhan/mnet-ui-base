import React, { useState } from 'react';

import { Box, MnetUIBase, Select } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const options = ['one', 'two'];

export const Multiple = () => {
  const [value, setValue] = useState(['one']);

  return (
    <MnetUIBase full theme={mnet}>
      <Box fill align="center" justify="start" pad="large">
        <Select
          placeholder="Select"
          multiple
          closeOnChange={false}
          value={value}
          options={options}
          onChange={({ value: nextValue }) => setValue(nextValue)}
        />
      </Box>
    </MnetUIBase>
  );
};

Multiple.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Input/Select/Multiple',
};
