import React, { useState } from 'react';

import { Box, MnetUIBase, RadioButtonGroup, ThemeContext } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';
import { deepMerge } from 'mnet-ui-base/utils';
import { css } from 'styled-components';

const customTheme = deepMerge(mnet, {
  radioButtonGroup: {
    container: {
      gap: 'xlarge',
    },
  },
  radioButton: {
    border: {
      color: 'red',
      width: '10px',
    },
    container: {
      extend: css`
        color: red;
      `,
    },
    hover: {
      border: {
        color: 'blue',
      },
      background: {
        color: 'accent-4',
      },
    },
    size: '100px', // affects the size of the outer circle
    icon: {
      size: '20px', // affects the size of the inner circle
    },
    check: {
      radius: '20%',
    },
  },
});

export const CustomRadioButtonGroup = ({ value: initialValue, ...props }) => {
  const [value, setValue] = useState(initialValue);

  return (
    <MnetUIBase theme={customTheme}>
      <ThemeContext.Consumer>
        {theme => console.log(JSON.stringify(theme.radioButton))}
      </ThemeContext.Consumer>
      <Box align="center" pad="large">
        <RadioButtonGroup
          name="radio"
          options={[
            { label: 'Choice 1', value: 'c1' },
            { label: 'Choice 2', value: 'c2' },
            { label: 'Choice 3', value: 'c3' },
          ]}
          value={value}
          onChange={event => setValue(event.target.value)}
          {...props}
        />
      </Box>
    </MnetUIBase>
  );
};

CustomRadioButtonGroup.storyName = 'Custom theme';

export default {
  title: 'Input/RadioButtonGroup/Custom theme',
};
