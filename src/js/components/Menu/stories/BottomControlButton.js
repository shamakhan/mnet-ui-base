import React from 'react';

import { Box, Menu } from 'mnet-ui-base';

const ControlBottomMenu = () => (
  <div>
    <Box height="medium" justify="center" align="center" pad="large">
      <Menu
        dropProps={{ align: { bottom: 'bottom', left: 'left' } }}
        label="actions"
        items={[
          { label: 'Profile', onClick: () => {} },
          { label: 'Settings', onClick: () => {} },
          { label: 'FAQ', onClick: () => {} },
        ]}
      />
    </Box>
  </div>
);

export const BottomControlButton = () => <ControlBottomMenu />;
BottomControlButton.storyName = 'Bottom control button';

BottomControlButton.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Controls/Menu/Bottom control button',
};
