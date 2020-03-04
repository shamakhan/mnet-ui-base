import React from 'react';

import { Box, MnetUIBase, RangeInput } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Simple = () => {
  const [value, setValue] = React.useState(5);

  const onChange = event => setValue(event.target.value);

  return (
    <MnetUIBase theme={mnet}>
      <Box align="center" pad="large">
        <RangeInput value={value} onChange={onChange} />
      </Box>
    </MnetUIBase>
  );
};

export default {
  title: 'Input/RangeInput/Simple',
};
