import React from 'react';

import { Box, MnetUIBase, DataTable } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';
import { columns, DATA } from './data';

export const Paginated = () => {
  const [select, setSelect] = React.useState([]);
  return (
    <MnetUIBase theme={mnet} full>
      <Box pad="large">
        <DataTable
          columns={columns}
          data={[...DATA]}
          onSelect={setSelect}
          select={select}
          sortable
          step={3}
          paginate
        />
      </Box>
    </MnetUIBase>
  );
};

export default {
  title: 'Visualizations/DataTable/Paginated',
};
