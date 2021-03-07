import React from 'react';

import { mnet, MnetUIBase, Box } from 'mnet-ui-base';

export const Vars = () => (
  <MnetUIBase theme={mnet} cssVars>
    <Box pad="medium" background="var(--accent-2)" gap="medium">
      <Box>
        {/* eslint-disable-next-line max-len */}
        Checkout MnetUIBase variables, you can find them in the StyledMnetUIBase DOM.
      </Box>
      <Box with>
        For example, the background color in this Box is using var(--accent-2)
      </Box>
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Utilities/MnetUIBase/Vars',
};
