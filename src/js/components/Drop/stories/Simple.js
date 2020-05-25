import React, { useEffect, useRef, useState } from 'react';

import { Box, Drop } from 'mnet-ui-base';

const SimpleDrop = () => {
  const targetRef = useRef();

  const [, setShowDrop] = useState(false);
  useEffect(() => {
    setShowDrop(true);
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'auto' }}>
      <Box fill align="center" justify="center">
        <Box
          background="dark-3"
          pad="medium"
          align="center"
          justify="start"
          ref={targetRef}
        >
          Target
        </Box>
        {targetRef.current && (
          <Drop
            align={{ top: 'bottom', left: 'left' }}
            target={targetRef.current}
          >
            <Box pad="large">Drop Contents</Box>
          </Drop>
        )}
      </Box>
    </div>
  );
};

export const Simple = () => <SimpleDrop />;
Simple.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Controls/Drop/Simple',
};
