import React from 'react';

import { mnet, Box, MnetUIBase, Spinner } from 'mnet-ui-base';

const RoundSpinner = ({ round }) => (
  <Spinner
    round={round}
    border={false}
    size="large"
    background="linear-gradient(to right, #fc466b, #3f5efb)"
  />
);
export const Round = () => (
  <MnetUIBase theme={mnet} full>
    <Box align="center" direction="row" gap="medium" pad="large">
      <RoundSpinner round={false} />
      <RoundSpinner round="small" />
      <RoundSpinner round="medium" />
      <RoundSpinner round="full" />
    </Box>
  </MnetUIBase>
);

Round.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Visualizations/Spinner/Round',
};
