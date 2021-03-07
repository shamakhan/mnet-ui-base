import React, { useState } from 'react';

import { Box, FormField, Select } from 'mnet-ui-base';
import { allOptions } from './data';

export const Simple = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <Box align="center" pad="large">
        <FormField label="Label" htmlFor="select">
          <Select
            id="select"
            placeholder="placeholder"
            options={allOptions}
            value={value}
            onChange={({ option }) => setValue(option)}
          />
        </FormField>
      </Box>
    </>
  );
};

export default {
  title: 'Input/FormField/Simple',
};
