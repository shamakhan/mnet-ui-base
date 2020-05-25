import React, { useState } from 'react';

import { Box, Button, CheckBox, Text } from 'mnet-ui-base';

export const InsideButton = () => {
  const [checked, setChecked] = useState(false);
  const onButtonClick = () => setChecked(!checked);
  const onCheckboxChange = () => {};

  return (
    <>
      <Box align="center" pad="large">
        <Button hoverIndicator="background" onClick={onButtonClick}>
          <CheckBox
            tabIndex="-1"
            checked={checked}
            label={<Text>Hi</Text>}
            onChange={onCheckboxChange}
          />
        </Button>
      </Box>
    </>
  );
};

InsideButton.storyName = 'Inside a Button';

export default {
  title: 'Input/CheckBox/Inside a Button',
};
