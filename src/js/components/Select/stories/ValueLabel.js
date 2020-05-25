import React, { useState } from 'react';

import { CaretDown } from 'grommet-icons';
import { Box, Select } from 'mnet-ui-base';

export const ValueLabel = () => {
  const options = ['one', 'two'];
  const [value, setValue] = useState('');

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'auto' }}>
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
    </div>
  );
};

export default {
  title: 'Input/Select/Value Label',
};
