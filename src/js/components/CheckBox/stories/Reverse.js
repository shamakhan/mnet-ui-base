import React, { useState } from 'react';

import { Box, MnetUIBase, CheckBox } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const SimpleCheckBox = ({ checked: checkedProp, ...rest }) => {
  const [checked, setChecked] = useState(!!checkedProp);
  const onChange = event => setChecked(event.target.checked);

  return (
    <MnetUIBase theme={mnet}>
      <Box align="center" pad="large">
        <CheckBox {...rest} checked={checked} onChange={onChange} />
      </Box>
    </MnetUIBase>
  );
};

export const Reverse = () => <SimpleCheckBox label="Choice" reverse />;

export default {
  title: 'Input/CheckBox/Reverse',
};
