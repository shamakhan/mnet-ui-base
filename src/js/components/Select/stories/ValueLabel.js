import React, { useState } from 'react';

import { CaretDown } from 'grommet-icons';
import { Box, MnetUIBase, Select } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const ValueLabel = () => {
  const options = ['one', 'two'];
  const [value, setValue] = useState('');

  return (
    <MnetUIBase full theme={mnet}>
      <Box fill align="center" justify="start" pad="large">
        <Select
          id="select"
          name="select"
          placeholder="Select"
          value={value}
          options={options}
          onChange={({ option }) => setValue(option)}
          plain
          valueLabel={
            <Box
              width="small"
              overflow="hidden"
              align="center"
              border={{
                color: 'dark-3',
                size: 'xsmall',
                style: 'solid',
                side: 'bottom',
              }}
            >
              {value || 'Select...'}
            </Box>
          }
          icon={
            <Box>
              <CaretDown size="small" color="black" />
            </Box>
          }
        />
      </Box>
    </MnetUIBase>
  );
};

export default {
  title: 'Input/Select/Value Label',
};
