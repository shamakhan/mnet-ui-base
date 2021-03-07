import React, { useRef, useState } from 'react';

import { MnetUIBase, mnet, Box, Button, Drop, Nav, Text } from 'mnet-ui-base';
import { Calculator, Bug, Achievement } from 'grommet-icons';

const TooltipButton = ({ icon, name }) => {
  const [over, setOver] = useState(false);
  const ref = useRef();

  return (
    <Box>
      <Button
        ref={ref}
        onMouseOver={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
        onFocus={() => setOver(true)}
        onBlur={() => setOver(false)}
        plain
      >
        <Box pad={{ vertical: 'small' }} align="center">
          {icon}
        </Box>
      </Button>
      {/* Since this example is demonstrating the Drop's `trapFocus` prop, we
      are using Drop component vs the Tip component. The best practice will be
      the Tip component instead. The Tip is providing trapFocus={false{}
      as a default behavior */}
      {ref.current && over && (
        <Drop
          plain
          align={{ left: 'right' }}
          target={ref.current}
          margin={{ horizontal: 'small' }}
          // trapFocus set to false allows tabbing through the buttons
          trapFocus={false}
        >
          <Box pad="small" background="brand">
            <Text color="white">{name}</Text>
          </Box>
        </Drop>
      )}
    </Box>
  );
};

export const TrapFocus = () => (
  <MnetUIBase theme={mnet}>
    <Nav align="center" pad="large">
      <TooltipButton icon={<Calculator />} name="Calculator" />
      <TooltipButton icon={<Bug />} name="Bug" />
      <TooltipButton icon={<Achievement />} name="Achievement" />
    </Nav>
  </MnetUIBase>
);

TrapFocus.parameters = {
  chromatic: { disable: true },
};

export default {
  title: 'Controls/Drop/Trap Focus',
};
