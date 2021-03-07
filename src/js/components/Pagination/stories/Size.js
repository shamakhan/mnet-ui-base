import React from 'react';

import { Box, MnetUIBase, Pagination, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Size = () => (
  <MnetUIBase theme={mnet}>
    <Box align="start" pad="small" gap="large">
      <>
        <Text>Small</Text>
        <Pagination numberItems={237} size="small" />
      </>
      <>
        <Text>Medium (Default)</Text>
        <Pagination numberItems={237} size="medium" />
      </>
      <>
        <Text>Large</Text>
        <Pagination numberItems={237} size="large" />
      </>
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Controls/Pagination/Size',
};
