import React from 'react';

import { MnetUIBase, Box } from 'mnet-ui-base';

export const Plain = () => (
  <>
    <MnetUIBase plain>
      <Box pad="medium">
        <p>Plain MnetUIBase</p>
      </Box>
    </MnetUIBase>
    <MnetUIBase>
      <Box pad="medium">
        <p>Not plain MnetUIBase</p>
      </Box>
    </MnetUIBase>
  </>
);

export default {
  title: 'Utilities/MnetUIBase/Plain',
};
