import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { CloudUpload } from 'grommet-icons';

import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';
import { closeConfirmAlert } from '../ModalPopUp';
import { defaultProps } from '../../default-props';

const UploadForm = ({
  getRootProps,
  getInputProps,
  onUpload,
  files,
  isLoading,
  downloadSampleUrl,
  url,
}) => {
  const { upload } = useContext(ThemeContext) || defaultProps.theme;

  return (
    <>
      <Box
        {...getRootProps()}
        {...(upload && upload.form && upload.form.container)}
      >
        <input {...getInputProps()} />
        <Box align="center">
          <Box margin="medium">
            <CloudUpload size="medium" color="dark-2" />
          </Box>
          <Text {...(upload && upload.form && upload.form.header)}>
            Drop your file here or{' '}
            <Text color="neutral-1" size="large">
              Choose File
            </Text>
          </Text>
          {files.length ? (
            files[0].name
          ) : (
            <>
              <Text {...(upload && upload.form && upload.form.text)}>
                CSV format files will be supported
              </Text>
              <Button
                margin="small"
                href={downloadSampleUrl}
                onClick={event => event.stopPropagation()}
              >
                <Text {...(upload && upload.form && upload.form.sampleText)}>
                  Download Sample File
                </Text>
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
          onClick={() => onUpload(url, true, false)}
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
  onUpload: undefined,
  files: [],
  isLoading: undefined,
};

UploadForm.propTypes = {
  getRootProps: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  getInputProps: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onUpload: PropTypes.func,
  files: PropTypes.array,
  isLoading: PropTypes.bool,
};

export { UploadForm };
