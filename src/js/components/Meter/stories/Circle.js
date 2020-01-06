import React, { useState, useEffect, useRef } from 'react';

import { MnetUIBase, Box, Meter } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Circle = () => {
  const [value, setValue] = useState(20);

  const timer = useRef();
  clearTimeout(timer.current);
  timer.current = setTimeout(() => {
    setValue(value < 100 ? value + 8 : 20);
  }, 2000);

  useEffect(
    () => () => {
      clearTimeout(timer.current);
    },
    [],
  );

  return (
    <MnetUIBase theme={mnet}>
      <Box align="center" pad="large">
        <Meter
          type="circle"
          background="light-2"
          values={[{ value, color: value > 50 ? 'accent-2' : 'accent-1' }]}
        />
      </Box>
    </MnetUIBase>
  );
};

export default {
  title: 'Visualizations/Meter/Circle',
};
