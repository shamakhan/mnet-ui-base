import React from 'react';
import { Gremlin } from 'grommet-icons';

import { MnetUIBase, Box, DropButton, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const renderItems = () => (
  <Box>
    <Text>hi</Text>
    <Text>hi</Text>
    <Text>hi</Text>
    <Text>hi</Text>
  </Box>
);

const MenuItem = () => (
  <Box height="36px" width="36px" align="center">
    <Gremlin />
  </Box>
);

const GremlinDropButton = () => (
  <DropButton
    alignSelf="center"
    margin={{ vertical: 'small' }}
    dropContent={renderItems()}
    dropProps={{ align: { top: 'bottom' } }}
  >
    <MenuItem />
  </DropButton>
);

const MenuDropButton = () => (
  <MnetUIBase theme={mnet} full>
    <Box fill>
      <Box fill="vertical" width="xxsmall" background="dark-2">
        <GremlinDropButton />
        <Box flex />
        <GremlinDropButton />
      </Box>
    </Box>
  </MnetUIBase>
);

export const Menu = () => <MenuDropButton />;
Menu.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Controls/DropButton/Menu',
};
