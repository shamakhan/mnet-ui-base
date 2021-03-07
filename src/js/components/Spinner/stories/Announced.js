import React, { useState } from 'react';
import { mnet } from 'mnet-ui-base/themes';

import { Box, Button, MnetUIBase, Paragraph, Spinner } from 'mnet-ui-base';

const PageContent = () => {
  // 'show=true' will trigger the announcement
  const [show, setShow] = useState(false);
  return (
    <Box align="center" gap="small">
      <Paragraph textAlign="center">
        Spinner has a built in Screen Reader functionality to assist screen
        readers. An announcement of the given message prop will be announced to
        screen readers after the spinner component renders.
      </Paragraph>
      <Button
        label="Load"
        onClick={() => {
          setShow(true);
          setTimeout(() => {
            setShow(false);
          }, 1500);
        }}
      />
      {show && <Spinner message="Start Built-in Spinner Announcement" />}
    </Box>
  );
};

export const Announced = () => (
  <MnetUIBase theme={mnet} full>
    <Box align="center" pad="large">
      <PageContent />
    </Box>
  </MnetUIBase>
);

Announced.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Visualizations/Spinner/Announced',
};
