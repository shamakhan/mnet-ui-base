import React from 'react';

import { MnetUIBase, Box, DateInput, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Simple = () => {
  const [value, setValue] = React.useState('');
  const onChange = event => {
    const nextValue = event.value;
    console.log('onChange', nextValue);
    setValue(nextValue);
  };
  return (
    <MnetUIBase theme={mnet}>
      <Box direction="row" align="center" justify="center" pad="large">
        <Text weight="bold">
          {value && new Date(value).toLocaleDateString()}
        </Text>
        <DateInput value={value} onChange={onChange} />
      </Box>
    </MnetUIBase>
  );
};

Simple.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Input/DateInput/Simple',
};
