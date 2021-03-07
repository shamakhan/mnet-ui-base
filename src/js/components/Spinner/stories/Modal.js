import React from 'react';

import { mnet, Box, Button, MnetUIBase, Layer, Spinner,
  Text } from 'mnet-ui-base';

export const Modal = () => {
  const [open, setOpen] = React.useState();
  const [isDataLoaded, setIsDataLoaded] = React.useState(false);

  const onOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(undefined);
      setIsDataLoaded(true);
    }, 2000);
  };

  return (
    <MnetUIBase theme={mnet} full>
      <Box fill align="center" justify="center" gap="medium">
        <Button label="Load Data" onClick={onOpen} />
        {isDataLoaded && (
          <Box align="center" gap="small">
            {/* https://getemoji.com/ */}
            <Text>Congrats! 🎉 </Text>
            <Text>Data is now loaded</Text>
          </Box>
        )}
      </Box>
      {open && (
        <Layer>
          <Box
            align="center"
            justify="center"
            gap="small"
            direction="row"
            alignSelf="center"
            pad="large"
          >
            <Spinner />
            <Text>Loading...</Text>
          </Box>
        </Layer>
      )}
    </MnetUIBase>
  );
};

Modal.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Visualizations/Spinner/Modal',
};
