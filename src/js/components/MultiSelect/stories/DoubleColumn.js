import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, MultiSelect, Text, MnetUIBase } from 'mnet-ui-base';
import { hb } from 'mnet-ui-base-theme-hb';

const options = [
  { id: 1, label: 'Desktop' },
  { id: 2, label: 'Mobile' },
  { id: 3, label: 'Tablet' },
  { id: 4, label: 'Television' },
  { id: 5, label: 'Bot' },
];

const Example = () => {
  const [value, setValue] = useState(['Mobile', 'Tablet']);
  const [isExcluded, setIncExc] = useState(false);

  return (
    <MnetUIBase full theme={hb}>
    <Box fill align="center" justify="start" pad="large">
      <MultiSelect
        options={options}
        value={value}
        labelKey="label"
        valueKey={{ key: 'label', reduce: true }}
        onValueChange={nextValue => setValue(nextValue)}
        layout="double-column"
        width="large"
        height="medium"
        searchPlaceholder="Search"
        searchable
        withSelectAll
        withOptionChips
        withInclusionExclusion
        isExcluded={isExcluded}
        onIncExcChange={nextIncExc => setIncExc(nextIncExc)}
        renderEmptySelected={<Text>No Selection</Text>}
        isEnableOutSideClick={false}
        shouldRenderInDrop={false}
        isOpenState={false}
      />
    </Box>
    </MnetUIBase>
  );
};

storiesOf('MultiSelect', module).add('Double Column', () => <Example />);
