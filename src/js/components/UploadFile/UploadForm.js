import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Button, closeConfirmAlert } from 'mnet-ui-base';
import { CloudUpload } from 'grommet-icons';

const UploadForm = ({
  getRootProps,
  getInputProps,
  onValidate,
  files,
  isLoading,
}) => {
  return (
    <>
      <Box
        {...getRootProps()}
        pad="large"
        border={{ style: 'dashed', color: 'dark-2' }}
        height="medium"
        align="center"
        justify="center"
      >
        <input {...getInputProps()} />
        <Box align="center">
          <Box margin="medium">
            <CloudUpload size="medium" color="dark-2" />
          </Box>
          <Text color="dark-1" size="large" weight={600} margin="small">
            Drop your file here or{' '}
            <Text color="neutral-1" size="large">
              Choose File
            </Text>
          </Text>
          {files.length ? (
            files[0].name
          ) : (
            <>
              <Text>CSV format files will be supported</Text>
              <Button
                href="http://localhost:8880/publishers/8CUJB6ET3/targeting/domains/getTemplate"
                onClick={event => event.stopPropagation()}
              >
                Download Sample File
              </Button>
            </>
          )}
        </Box>
      </Box>
      <Box direction="row" margin={{ top: 'large' }}>
        <Button
          isLoading={isLoading}
          label="UPLOAD"
          primary
          size="medium"
          margin={{ right: 'medium' }}
          disabled={!files.length}
          onClick={onValidate}
          background="brand"
        />
        <Button
          label="CANCEL"
          secondary
          size="medium"
          onClick={closeConfirmAlert}
        />
      </Box>
    </>
  );
};

UploadForm.defaultProps = {
  getRootProps: undefined,
  getInputProps: undefined,
  onValidate: undefined,
  files: [],
  isLoading: undefined,
};

UploadForm.propTypes = {
  getRootProps: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  getInputProps: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onValidate: PropTypes.func,
  files: PropTypes.array,
  isLoading: PropTypes.bool,
};

export { UploadForm };
