import React from 'react';
import PropTypes, { func } from 'prop-types';

import { Box } from '../Box';
import { CheckBox } from '../CheckBox';

const ShowChanges = ({ isShowModified, setIsShowModified }) => {
  const onChange = event => setIsShowModified(event.target.checked);

  return (
    <Box align="end" margin={{ bottom: 'medium' }}>
      <CheckBox
        label="Show Changed"
        checked={isShowModified}
        onChange={onChange}
      />
    </Box>
  );
};

ShowChanges.propTypes = {
  isShowModified: PropTypes.bool,
  setIsShowModified: PropTypes.func,
};

ShowChanges.defaultProps = {
  isShowModified: true,
  setIsShowModified: func,
};

export { ShowChanges };
