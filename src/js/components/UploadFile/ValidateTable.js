import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormNextLink } from 'grommet-icons';
import {
  Box,
  Button,
  Text,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  closeConfirmAlert,
  CheckBox,
} from 'mnet-ui-base';

const modifiedValInRule = (checked, rule) => {
  if (checked) {
    const ruleKeys = rule && Object.keys(rule);
    return (
      ruleKeys.length &&
      ruleKeys.some(key => {
        return rule[key] && rule[key].isModified;
      })
    );
  }
  return true;
};

const ValidateTable = ({ validateData, onUpload, files, isLoading }) => {
  const { headers, rules } = validateData;
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
        <Box direction="row" margin={{ top: 'large' }}>
          <Button
            isLoading={isLoading}
            label="UPLOAD"
            primary
            size="medium"
            margin={{ right: 'medium' }}
            disabled={!files.length}
            onClick={onUpload}
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

ValidateTable.propTypes = {};

ValidateTable.defaultProps = {};

export { ValidateTable };
