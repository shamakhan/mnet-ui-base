import React from 'react';

import { base } from 'mnet-ui-base/themes';
import { deepMerge } from 'mnet-ui-base/utils';

import { Box, extendDefaultTheme } from 'mnet-ui-base';

extendDefaultTheme(
  deepMerge(base, {
    global: {
      colors: {
        brand: 'red',
      },
    },
  }),
);

export const CustomDefaultProps = () => (
  <Box background="brand" pad="small">
    Hello
  </Box>
);

CustomDefaultProps.storyName = 'Extend default';

export default {
  title: 'Utilities/Theme/Extend default',
};
