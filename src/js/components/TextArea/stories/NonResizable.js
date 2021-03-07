import React, { useState } from 'react';

import { Box, MnetUIBase, TextArea } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const Resize = props => {
  const [value, setValue] = useState('');

  const onChange = event => setValue(event.target.value);

  return (
    <MnetUIBase theme={mnet}>
      <Box align="center" pad="large">
        <TextArea value={value} onChange={onChange} {...props} />
      </Box>
    </MnetUIBase>
  );
};

export const NonResizable = () => <Resize resize={false} />;

NonResizable.storyName = 'Non resizable';

export default {
  title: 'Input/TextArea/Non resizable',
};
