import React from 'react';

import { Box, Form, FormField, MnetUIBase, TextInput } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const HelpAndError = () => (
  <MnetUIBase theme={mnet}>
    <Box align="center" pad="large">
      <Form>
        <FormField
          label="Label"
          htmlFor="text-input"
          help="Text to help the user know what is possible"
          error="Text to call attention to an issue with this field"
        >
          <TextInput
            id="text-input"
            placeholder="placeholder"
            value="Value"
            onChange={() => {}}
          />
        </FormField>
      </Form>
    </Box>
  </MnetUIBase>
);

HelpAndError.storyName = 'Help and error';

export default {
  title: 'Input/Form/Help and error',
};
