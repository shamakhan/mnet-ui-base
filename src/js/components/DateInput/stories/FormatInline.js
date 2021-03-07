import React from 'react';

import { MnetUIBase, Box, DateInput } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const FormatInline = () => {
  const [value, setValue] = React.useState('');
  const onChange = event => {
    const nextValue = event.value;
    console.log('onChange', nextValue);
    setValue(nextValue);
  };
  return (
    <MnetUIBase theme={mnet}>
      <Box align="center" pad="large">
        <DateInput
          format="mm/dd/yyyy"
          inline
          value={value}
          onChange={onChange}
        />
      </Box>
    </MnetUIBase>
  );
};

FormatInline.storyName = 'Format inline';

export default {
  title: 'Input/DateInput/Format inline',
};
