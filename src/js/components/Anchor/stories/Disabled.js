import React from 'react';

import { Anchor, Box } from 'mnet-ui-base';

const DisabledAnchor = () => (
  <div>
    <Box align="center" pad="large">
      <Box margin="small">
        <Anchor disabled label="Disabled Anchor" />
      </Box>
    </Box>
  </div>
);

export const Disabled = () => <DisabledAnchor />;

export default {
  title: 'Controls/Anchor/Disabled',
};
