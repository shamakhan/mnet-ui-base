import React from 'react';

import {
  Box,
  Button,
  Form,
  FormField,
  MnetUIBase,
  Text,
  TextInput,
} from 'mnet-ui-base';

import { mnet } from 'mnet-ui-base/themes';
import { deepMerge } from 'mnet-ui-base/utils';

const customTheme = deepMerge(mnet, {
  formField: {
    label: {
      requiredIndicator: true,
    },
  },
});

export const RequiredLabel = () => (
  <MnetUIBase theme={customTheme}>
    <Box align="center" pad="large">
      <Form>
        <FormField
          name="firstName"
          htmlFor="firstName"
          label="First Name"
          required
        >
          <TextInput id="firstName" name="firstName" />
        </FormField>
        <FormField
          name="lastName"
          htmlFor="lastName"
          label="Last Name"
          required
        >
          <TextInput id="lastName" name="lastName" />
        </FormField>
        <FormField name="email" htmlFor="email" label="Email" required>
          <TextInput id="email" name="email" type="email" />
        </FormField>
        <Button type="submit" label="Submit" primary />
        <Text margin={{ left: 'small' }} size="small" color="status-critical">
          * Required Field
        </Text>
      </Form>
    </Box>
  </MnetUIBase>
);

RequiredLabel.storyName = 'Required label';

export default {
  title: 'Input/Form/Required label',
};
