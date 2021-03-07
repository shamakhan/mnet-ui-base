import React from 'react';

import { Hide, View } from 'grommet-icons';
import { Box, Button, MnetUIBase, TextInput } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Password = () => {
  const [value, setValue] = React.useState('');
  const [reveal, setReveal] = React.useState(false);

  return (
    <MnetUIBase full theme={mnet}>
      <Box
        width="medium"
        direction="row"
        margin="large"
        align="center"
        round="small"
        border
      >
        <TextInput
          plain
          type={reveal ? 'text' : 'password'}
          value={value}
          onChange={event => setValue(event.target.value)}
        />
        <Button
          icon={reveal ? <View size="medium" /> : <Hide size="medium" />}
          onClick={() => setReveal(!reveal)}
        />
      </Box>
    </MnetUIBase>
  );
};

export default {
  title: 'Input/TextInput/Password',
};
