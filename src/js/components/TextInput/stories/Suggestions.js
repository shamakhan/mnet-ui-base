import React from 'react';

import { Box, MnetUIBase, TextInput } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const allSuggestions = Array(100)
  .fill()
  .map((_, i) => `${i + 1} suggestion`);

export const Suggestions = () => {
  const [suggestions, setSuggestions] = React.useState(allSuggestions);
  const [value, setValue] = React.useState('');

  const onChange = event => {
    const nextValue = event.target.value;
    setValue(nextValue);
    if (!nextValue) setSuggestions(allSuggestions);
    else {
      const regexp = new RegExp(`^${nextValue}`);
      setSuggestions(allSuggestions.filter(s => regexp.test(s)));
    }
  };

  const onSuggestionSelect = event => {
    setValue(event.suggestion);
  };

  return (
    <MnetUIBase full theme={mnet}>
      <Box fill align="center" justify="start" pad="large">
        <Box width="medium">
          <TextInput
            value={value}
            onChange={onChange}
            onSuggestionSelect={onSuggestionSelect}
            suggestions={suggestions}
          />
        </Box>
      </Box>
    </MnetUIBase>
  );
};

Suggestions.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Input/TextInput/Suggestions',
};
