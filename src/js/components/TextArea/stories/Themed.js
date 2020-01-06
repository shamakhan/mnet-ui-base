import React, { useState } from 'react';

import { Box, MnetUIBase, TextArea } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';
import { deepMerge } from 'mnet-ui-base/utils';

const customTheme = deepMerge(mnet, {
  textArea: {
    extend: () => `
      font-size: 40px;
      color: red;
    `,
  },
});

export const Themed = () => {
  const [value, setValue] = useState('');

  const onChange = event => setValue(event.target.value);

  return (
    <MnetUIBase theme={customTheme}>
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
  title: 'Input/TextArea/Themed',
};
