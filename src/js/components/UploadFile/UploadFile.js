import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box } from 'mnet-ui-base';

import { ValidateTable } from './ValidateTable';
import { UploadedTable } from './UploadedTable';
import { UploadForm } from './UploadForm';

const UploadFile = ({ validateUrl, uploadUrl }) => {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const onDrop = file => {
    setFiles(file);
  };

  const [validateData, setValidateData] = useState({
    rules: [],
    headers: [],
  });
  const [uploadedData, setUploadedData] = useState({
    rules: [],
    headers: [],
  });
  const { getRootProps, getInputProps } = useDropzone({
    accept: '.csv',
    multiple: false,
    onDrop,
  });

  const onValidate = () => {
    const file = files[0];
    const formData = new FormData();
    formData.append('file', file);
    setIsLoading(true);

    fetch(validateUrl, {
      method: 'POST',
      body: formData,
    })
      .then(resp => resp.json())
      .then(({ data }) => {
        setIsLoading(false);
        setValidateData({
          headers: data.headers,
          rules: data.rules,
        });
      });
  };

  const onUpload = () => {
    const file = files[0];
    const formData = new FormData();
    formData.append('file', file);
    setIsLoading(true);

    fetch(uploadUrl, {
      method: 'POST',
      body: formData,
    })
      .then(resp => resp.json())
      .then(({ data }) => {
        setIsLoading(false);
        setUploadedData({
          headers: data.headers,
          rules: data.rules,
        });
      });
  };

  return (
    <Box>
      <ValidateTable
        validateData={{
          rules: [
            {
              domain: {
                oldValue: 'test',
                newValue: 'changes',
                isModified: false,
              },
            },
            {
              domain: {
                oldValue: 'test1',
                newValue: 'changes2',
                isModified: true,
              },
            },
          ],
          headers: ['domain'],
        }}
        onUpload={onUpload}
        files={files}
        isLoading={isLoading}
      />
      <UploadedTable
        uploadedData={{
          rules: [
            {
              domain: {
                oldValue: 'test',
                newValue: 'changes',
                isModified: false,
                result: {
                  status: 'OK',
                  messages: '',
                },
              },
            },
            {
              domain: {
                oldValue: 'test1',
                newValue: 'changes2',
                isModified: true,
                result: {
                  status: 'FAIL',
                  messages: '',
                },
              },
            },
          ],
          headers: ['domain'],
        }}
      />
      <UploadForm
        getRootProps={getRootProps}
        getInputProps={getInputProps}
        onValidate={onValidate}
        files={files}
        isLoading={isLoading}
      />
    </Box>
  );
};

export { UploadFile };
