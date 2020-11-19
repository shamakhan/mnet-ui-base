import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { FormNextLink } from 'grommet-icons';

import { defaultProps } from '../../default-props';
import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';
import { Table } from '../Table';
import { TableBody } from '../TableBody';
import { TableCell } from '../TableCell';
import { TableHeader } from '../TableHeader';
import { TableRow } from '../TableRow';
import { closeConfirmAlert } from '../ModalPopUp';
import { ShowChanges } from './ShowChanges';
import { modifiedValInRule } from '../../utils';

const ValidateTable = ({ tableData, onUpload, files, isLoading, url }) => {
  const { upload } = useContext(ThemeContext) || defaultProps.theme;
  const { headers, rules } = tableData;
  const [isShowModified, setIsShowModified] = useState(true);

  return (
    <Box>
      <ShowChanges
        isShowModified={isShowModified}
        setIsShowModified={setIsShowModified}
      />
      <Box>
        <Box {...(upload && upload.table && upload.table.container)}>
          <Table>
            <TableHeader>
              <TableRow>
                {headers.map(text => (
                  <TableCell key={text} scope="col" verticalAlign="middle">
                    <Text
                      size="medium"
                      color="dark-2"
                      style={{ textTransform: 'uppercase' }}
                    >
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
                            isShowModified && isModified ? '#FBFADC' : null
                          }
                          key={oldValue}
                          scope="row"
                          verticalAlign="middle"
                        >
                          <Text size="medium">{oldValue}</Text>
                          {oldValue && newValue && (
                            <Text
                              style={{ verticalAlign: 'middle' }}
                              margin="medium"
                            >
                              <FormNextLink size="medium" color="dark-2" />
                            </Text>
                          )}
                          <Text size="medium">{newValue}</Text>
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
