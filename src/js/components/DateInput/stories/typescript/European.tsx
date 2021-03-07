import React from 'react';

import { Box, DateInput, MnetUIBase } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const European = () => {
  const [value, setValue] = React.useState();
  const onChange = event => {
    const nextValue = event.value;
    console.log('onChange', nextValue);
    setValue(nextValue);
  };
  return (
    <MnetUIBase full theme={mnet}>
      <Box fill align="center" justify="start" pad="large">
        <Box width="medium" gap="medium">
          <DateInput format="dd/mm/yyyy" value={value} onChange={onChange} />
        </Box>
      </Box>
    </MnetUIBase>
  );
};

European.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Input/DateInput/European',
};
