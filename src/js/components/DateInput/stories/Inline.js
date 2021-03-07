import React from 'react';

import { MnetUIBase, Box, DateInput } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Inline = () => {
  const [value, setValue] = React.useState('');
  const onChange = event => {
    const nextValue = event.value;
    console.log('onChange', nextValue);
    setValue(nextValue);
  };
  return (
    <MnetUIBase theme={mnet}>
      <Box align="center" pad="large">
        <DateInput inline value={value} onChange={onChange} />
      </Box>
    </MnetUIBase>
  );
};

export default {
  title: 'Input/DateInput/Inline',
};
