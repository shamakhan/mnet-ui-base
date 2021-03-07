import React, { useState } from 'react';

import { Box, MnetUIBase, Select } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const objectOptions = [
  {
    label: 'Male',
    value: 1,
  },
  {
    label: 'Female',
    value: 2,
  },
  {
    label: 'Non Binary',
    value: 3,
  },
  {
    label: 'Other',
    value: 4,
  },
];

export const ObjectOptions = () => {
  const [value, setValue] = useState('');

  return (
    <MnetUIBase theme={mnet}>
      <Box fill align="center" justify="start" pad="large">
        <Select
          id="select"
          name="select"
          placeholder="Select"
          labelKey="label"
          valueKey={{ key: 'value', reduce: true }}
          value={value}
          options={objectOptions}
          onChange={({ value: nextValue }) => setValue(nextValue)}
        />
      </Box>
    </MnetUIBase>
  );
};

ObjectOptions.storyName = 'Object options';

ObjectOptions.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Input/Select/Object options',
};
