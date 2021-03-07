import React from 'react';

import { Box, MnetUIBase, TextInput } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const suggestions = Array(100)
  .fill()
  .map((_, i) => `suggestion ${i + 1}`);

export const OnSelect = () => {
  const [value, setValue] = React.useState('');

  const onChange = event => setValue(event.target.value);

  const onSelect = event => setValue(event.suggestion);

  const onHighlight = event => {
    if (event.target.selectionStart !== event.target.selectionEnd) {
      console.log(
        event.target.value.substring(
          event.target.selectionStart,
          event.target.selectionEnd,
        ),
      );
    }
  };

  return (
    <MnetUIBase full theme={mnet}>
      <Box fill align="center" justify="start" pad="large">
        <Box width="medium">
          <TextInput
            value={value}
            onChange={onChange}
            onSelect={onHighlight}
            onSuggestionSelect={onSelect}
            suggestions={suggestions}
          />
        </Box>
      </Box>
    </MnetUIBase>
  );
};

OnSelect.storyName = 'onSelect and onSuggestionSelect';

OnSelect.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Input/TextInput/onSelect and onSuggestionSelect',
};
