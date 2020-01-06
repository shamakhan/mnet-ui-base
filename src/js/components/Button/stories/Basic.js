import React from 'react';

import { mnet, Box, Button, MnetUIBase } from 'mnet-ui-base';

export const Basic = props => (
  <MnetUIBase theme={mnet}>
    <Box align="center" pad="medium">
      <Button label="Default" onClick={() => {}} {...props} />
    </Box>
    <Box align="center" pad="medium">
      <Button label="Anchor" href="#" />
    </Box>
    <Box align="center" pad="medium">
      <Button disabled label="Disabled" onClick={() => {}} {...props} />
    </Box>
    <Box align="center" pad="medium">
      <Button primary label="Primary" onClick={() => {}} {...props} />
    </Box>
    <Box align="center" pad="medium">
      <Button
        primary
        label="Active Primary"
        active
        onClick={() => {}}
        {...props}
      />
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Controls/Button/Basic',
};
