import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';

import { Box } from '../Box';
import { addToast } from '../Notification';
import { ValidateTable } from './ValidateTable';
import { UploadedTable } from './UploadedTable';
import { UploadForm } from './UploadForm';

const UploadFile = ({ validateUrl, uploadUrl, downloadSampleUrl }) => {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showValidateTable, setShowValidateTable] = useState(false);
  const [showUploadedTable, setShowUploadedTable] = useState(false);
  const [tableData, setTableData] = useState({
    rules: [],
    headers: [],
  });

  const onDrop = file => setFiles(file);

  const { getRootProps, getInputProps } = useDropzone({
    accept: '.csv',
    multiple: false,
    disabled: isLoading,
    onDrop,
  });

  const getFormDate = () => {
    const formData = new FormData();
    formData.append('file', files[0]);
    return formData;
  };

  const onUpload = (url, isValidate, isUpload) => {
    setIsLoading(true);
    fetch(url, {
      method: 'POST',
      body: getFormDate(),
    })
      .then(resp => resp.json())
      .then(({ data }) => {
        setIsLoading(false);
        setTableData({
          headers: data.headers,
          rules: data.rules,
        });
        if (isValidate) {
          setShowUploadedTable(false);
          setShowValidateTable(true);
        }
        if (isUpload) {
          setShowValidateTable(false);
          setShowUploadedTable(true);
        }
      })
      .catch(error => {
        addToast({ msg: 'Something went wrong', type: 'error' });
        setIsLoading(false);
      });
  };

  return (
    <Box>
      {showValidateTable && (
        <ValidateTable
          tableData={tableData}
          onUpload={onUpload}
          files={files}
          isLoading={isLoading}
          url={uploadUrl}
        />
      )}
      {showUploadedTable && <UploadedTable tableData={tableData} />}
      {!showValidateTable && !showUploadedTable && (
        <UploadForm
          getRootProps={getRootProps}
          getInputProps={getInputProps}
          onUpload={onUpload}
          files={files}
          isLoading={isLoading}
          downloadSampleUrl={downloadSampleUrl}
          url={validateUrl}
        />
      )}
    </Box>
  );
};

UploadFile.propTypes = {
  validateUrl: PropTypes.string,
  uploadUrl: PropTypes.string,
  downloadSampleUrl: PropTypes.string,
};

UploadFile.defaultProps = {
  validateUrl: '',
  uploadUrl: '',
  downloadSampleUrl: '',
};

export { UploadFile };
