import React from 'react';

import { Box,
  RoutedButton as GrommetRoutedButton,
  Text,} from 'mnet-ui-base';

export const RoutedButton = () => (
  <>
    <Box align="center" pad="large">
      <Text margin="medium" size="small">
        Note: RoutedButton will soon be deprecated
      </Text>
      <GrommetRoutedButton label="Go" path="/" />
    </Box>
  </>
);

RoutedButton.storyName = 'Routed button';

export default {
  title: `Controls/Button/Routed button`,
};
