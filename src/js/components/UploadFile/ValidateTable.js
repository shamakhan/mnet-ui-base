import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormNextLink } from 'grommet-icons';

import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';
import { Table } from '../Table';
import { TableBody } from '../TableBody';
import { TableCell } from '../TableCell';
import { TableHeader } from '../TableHeader';
import { TableRow } from '../TableRow';
import { closeConfirmAlert } from '../ModalPopUp';
import { CheckBox } from '../CheckBox';
import { modifiedValInRule } from '../../utils';

const ValidateTable = ({ tableData, onUpload, files, isLoading, url }) => {
  const { headers, rules } = tableData;
  const [isShowModified, setIsShowModified] = useState(true);
  const onChange = event => setIsShowModified(event.target.checked);

  return (
    <Box>
      <Box align="end" margin={{ bottom: 'medium' }}>
        <CheckBox
          label="Show Changed"
          checked={isShowModified}
          onChange={onChange}
        />
      </Box>
      <Box>
        <Box overflow={{ vertical: 'auto' }} height="medium">
          <Table>
            <TableHeader>
              <TableRow>
                {headers.map(text => (
                  <TableCell key={text} scope="col" verticalAlign="middle">
                    <Text size="large" color="white">
                      {text}
                    </Text>
                  </TableCell>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rules.map(rule => {
                const renderRow = modifiedValInRule(isShowModified, rule) && (
                  <TableRow>
                    {headers.map(header => {
                      const { oldValue, newValue, isModified } = rule[header];
                      return (
                        <TableCell
                          background={
                            isShowModified && isModified ? '#ffe8b9' : null
                          }
                          key={oldValue}
                          scope="row"
                          verticalAlign="middle"
                        >
                          <Text size="large">{oldValue}</Text>
                          <Text
                            style={{ verticalAlign: 'middle' }}
                            margin="large"
                          >
                            <FormNextLink size="medium" color="dark-2" />
                          </Text>
                          <Text size="large">{newValue}</Text>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
                return renderRow;
              })}
            </TableBody>
          </Table>
        </Box>
        <Box direction="row" margin={{ top: 'large' }}>
          <Button
            isLoading={isLoading}
            label="PROCEED"
            primary
            size="medium"
            margin={{ right: 'medium' }}
            disabled={!files.length}
            onClick={() => onUpload(url, false, true)}
            background="brand"
          />
          <Button
            label="CANCEL"
            secondary
            size="medium"
            onClick={closeConfirmAlert}
          />
        </Box>
      </Box>
    </Box>
  );
};

ValidateTable.propTypes = {
  tableData: PropTypes.shape({
    headers: PropTypes.shape([]),
    rules: PropTypes.shape([]),
  }),
};

ValidateTable.defaultProps = {
  tableData: {},
};

export { ValidateTable };
