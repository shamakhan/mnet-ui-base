import React from 'react';

import { Box } from '../Box';
import { Text } from '../Text';

const ValueLabelWithNumber = ({ value, color }) => {
  const number = value.length;
  return (
    <Box direction="row" margin={{ horizontal: 'medium' }} align="center">
      <Text
        aria-label="Selected Label Value"
        color={color}
        size="medium"
        weight={600}
      >
        {number ? value.join(', ') : 'Select'}
      </Text>
    </Box>
  );
};

export { ValueLabelWithNumber };
