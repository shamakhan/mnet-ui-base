import React, { useState } from 'react';

import { Box, MnetUIBase, TextArea } from 'mnet-ui-base';

const Resize = props => {
  const [value, setValue] = useState('');

  const onChange = event => setValue(event.target.value);

  return (
    <>
      <Box align="center" pad="large">
        <TextArea value={value} onChange={onChange} {...props} />
      </Box>
    </>
  );
};

export const Simple = () => <Resize resize />;

export default {
  title: 'Input/TextArea/Simple',
};
