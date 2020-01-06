import React, { useState } from 'react';

import { mnet, Box, Button, MnetUIBase, Nav, Text } from 'mnet-ui-base';

const SidebarButton = ({ label, ...rest }) => (
  <Button plain {...rest}>
    {({ hover }) => (
      <Box
        background={hover ? 'accent-1' : undefined}
        pad={{ horizontal: 'large', vertical: 'medium' }}
      >
        <Text size="large">{label}</Text>
      </Box>
    )}
  </Button>
);

const SidebarNav = () => {
  const [active, setActive] = useState();
  return (
    <MnetUIBase full theme={mnet}>
      <Box fill direction="row">
        <Nav background="neutral-1">
          {['Dashboard', 'Devices', 'Settings'].map(label => (
            <SidebarButton
              key={label}
              label={label}
              active={label === active}
              onClick={() => setActive(label)}
            />
          ))}
        </Nav>
      </Box>
    </MnetUIBase>
  );
};

export const Sidebar = () => <SidebarNav />;

export default {
  title: 'Controls/Nav/Sidebar',
};
