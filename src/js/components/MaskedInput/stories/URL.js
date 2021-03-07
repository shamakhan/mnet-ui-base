import React from 'react';
import { Box, MnetUIBase, MaskedInput } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const UrlMaskedInput = () => {
  const [value, setValue] = React.useState('');

  return (
    <MnetUIBase full theme={mnet}>
      <Box fill align="center" justify="start" pad="large">
        <Box width="medium" gap="medium">
          <MaskedInput
            mask={[{ fixed: 'https://' }, { regexp: /^.*$/ }]}
            value={value}
            onChange={event => setValue(event.target.value)}
          />
        </Box>
      </Box>
    </MnetUIBase>
  );
};

UrlMaskedInput.storyName = 'URL';

UrlMaskedInput.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Input/MaskedInput/URL',
};
