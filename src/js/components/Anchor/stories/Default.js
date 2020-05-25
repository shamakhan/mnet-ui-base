import React from 'react';

import { Anchor, Box } from 'mnet-ui-base';

const DefaultAnchor = () => (
  <div>
    <Box align="center" pad="large">
      <Anchor href="#">Link</Anchor>
    </Box>
  </div>
);

export const Default = () => <DefaultAnchor />;
Default.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Controls/Anchor/Default',
};
