import React from 'react';

import { Box, Button, DateInput, Form, FormField,
   MnetUIBase } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const DateForm = () => {
  const [value, setValue] = React.useState({ value: '' });
  const onChange = nextValue => {
    console.log('onChange', nextValue);
    setValue(nextValue);
  };
  return (
    <MnetUIBase theme={mnet}>
      <Box align="center" pad="large">
        <Form
          value={value}
          onChange={onChange}
          onSubmit={({ value: nextValue }) => {
            console.log(nextValue);
            setValue({ value: '' });
          }}
        >
          <FormField name="value" label="value" required>
            <DateInput name="value" format="mm/dd/yyyy" />
          </FormField>
          <Button type="submit" label="submit" />
        </Form>
      </Box>
    </MnetUIBase>
  );
};

DateForm.storyName = 'Form';

export default {
  title: 'Input/DateInput/Form',
};
