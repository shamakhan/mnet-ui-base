import React from 'react';

import { MnetUIBase, Box, DateInput } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const dateFormat = new Intl.DateTimeFormat(undefined, {
  month: 'short',
  day: 'numeric',
});

export const Range = () => {
  const [value, setValue] = React.useState([
    '2020-07-31T15:27:42.920Z',
    '2020-08-07T15:27:42.920Z',
  ]);
  const onChange = event => {
    const nextValue = event.value;
    console.log('onChange', nextValue);
    setValue(nextValue);
  };
  return (
    <MnetUIBase theme={mnet}>
      <Box align="center" pad="large">
        <DateInput
          value={value}
          buttonProps={{
            label: `${dateFormat.format(
              new Date(value[0]),
            )} - ${dateFormat.format(new Date(value[1]))}`,
          }}
          onChange={onChange}
        />
      </Box>
    </MnetUIBase>
  );
};

Range.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Input/DateInput/Range',
};
