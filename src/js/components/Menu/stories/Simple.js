import React from 'react';

import { MnetUIBase, Box, Menu } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const SimpleMenu = () => (
  <MnetUIBase theme={mnet}>
    <Box align="center" pad="large">
      <Menu
        dropProps={{
          align: { top: 'bottom', left: 'left' },
          elevation: 'xlarge',
        }}
        label="actions"
        items={[
          { label: 'Launch', onClick: () => {} },
          { label: 'Abort', onClick: () => {} },
          { label: 'Disabled', disabled: true },
        ]}
      />
    </Box>
  </MnetUIBase>
);

export const Simple = () => <SimpleMenu />;
Simple.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Controls/Menu/Simple',
};
