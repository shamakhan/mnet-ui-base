import React from 'react';

import { Box, Form, MnetUIBase, TextInput, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const StyledPlaceholder = () => (
  <MnetUIBase full theme={mnet}>
    <Box>
      <Form>
        <TextInput name="name" placeholder={<Text>placeholder</Text>} />
      </Form>
    </Box>
  </MnetUIBase>
);

StyledPlaceholder.storyName = 'Styled placeholder';

export default {
  title: 'Input/TextInput/Styled placeholder',
};
