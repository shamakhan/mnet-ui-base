import React, { useState } from 'react';

import { MnetUIBase, Box, TextArea } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Fill = () => {
  const [value, setValue] = useState('');

  const onChange = event => setValue(event.target.value);

  return (
    <MnetUIBase theme={mnet}>
      <Box
        width="large"
        height="medium"
        border={{ color: 'brand', size: 'medium' }}
      >
        <TextArea value={value} onChange={onChange} fill />
      </Box>
    </MnetUIBase>
  );
};

export default {
  title: 'Input/TextArea/Fill',
};
