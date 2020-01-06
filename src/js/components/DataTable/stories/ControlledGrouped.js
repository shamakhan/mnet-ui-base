import React, { useState } from 'react';

import { MnetUIBase, DataTable } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

// Source code for the data can be found here
// https://github.com/grommet/grommet/blob/master/src/js/components/DataTable/stories/data.js
import { columns, DATA } from './data';

const groupColumns = [...columns];
const first = groupColumns[0];
groupColumns[0] = { ...groupColumns[1] };
groupColumns[1] = { ...first };
groupColumns[0].footer = groupColumns[1].footer;
delete groupColumns[1].footer;

export const ControlledGroupedDataTable = () => {
  const [expandedGroups, setExpandedGroups] = useState([DATA[2].location]);

  return (
    <MnetUIBase theme={mnet}>
      <DataTable
        columns={groupColumns}
        data={DATA}
        groupBy={{
          property: 'location',
          expand: expandedGroups,
          onExpand: setExpandedGroups,
        }}
        sortable
      />
    </MnetUIBase>
  );
};

ControlledGroupedDataTable.storyName = 'Controlled grouped';

export default {
  title: 'Visualizations/DataTable/Controlled grouped',
};
