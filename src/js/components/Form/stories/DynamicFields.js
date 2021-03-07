import React, { useState } from 'react';

import {
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  MnetUIBase,
  TextInput,
} from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const DynamicFields = () => {
  const [haveAlias, setHaveAlias] = useState();
  return (
    <MnetUIBase full theme={mnet}>
      <Box fill align="center" justify="center">
        <Box width="medium">
          <Form
            validate="blur"
            onReset={event => console.log(event)}
            onValidate={event => console.log('Validate', event)}
            onSubmit={({ value }) => console.log('Submit', value)}
          >
            <FormField label="Name" name="name" required>
              <TextInput name="name" />
            </FormField>
            <FormField name="haveAlias">
              <CheckBox
                name="haveAlias"
                label="alias?"
                checked={haveAlias}
                onChange={() => setHaveAlias(!haveAlias)}
              />
            </FormField>
            {haveAlias && (
              <FormField label="Alias" name="alias" required>
                <TextInput name="alias" />
              </FormField>
            )}
            <Box direction="row" justify="between" margin={{ top: 'medium' }}>
              <Button type="reset" label="Reset" />
              <Button type="submit" label="Update" primary />
            </Box>
          </Form>
        </Box>
      </Box>
    </MnetUIBase>
  );
};

DynamicFields.storyName = 'Dynamic fields';

export default {
  title: 'Input/Form/Dynamic fields',
};
