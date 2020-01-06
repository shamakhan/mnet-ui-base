import React from 'react';

import { Anchor, Box, MnetUIBase } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const DefaultAnchor = () => (
  <MnetUIBase theme={mnet}>
    <Box align="center" pad="large">
      <Anchor href="#">Link</Anchor>
    </Box>
  </MnetUIBase>
);

export const Default = () => <DefaultAnchor />;
Default.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Controls/Anchor/Default',
};
