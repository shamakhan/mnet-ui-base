import React from 'react';

import {
  Box,
  MnetUIBase,
  RoutedButton as GrommetRoutedButton,
  Text,
} from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const RoutedButton = () => (
  <MnetUIBase theme={mnet}>
    <Box align="center" pad="large">
      <Text margin="medium" size="small">
        Note: RoutedButton will soon be deprecated
      </Text>
      <GrommetRoutedButton label="Go" path="/" />
    </Box>
  </MnetUIBase>
);

RoutedButton.storyName = 'Routed button';

export default {
  title: `Controls/Button/Routed button`,
};
