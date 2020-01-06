import React from 'react';

import { Anchor, Box, MnetUIBase } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const DisabledAnchor = () => (
  <MnetUIBase theme={mnet}>
    <Box align="center" pad="large">
      <Box margin="small">
        <Anchor disabled label="Disabled Anchor" />
      </Box>
    </Box>
  </MnetUIBase>
);

export const Disabled = () => <DisabledAnchor />;

export default {
  title: 'Controls/Anchor/Disabled',
};
