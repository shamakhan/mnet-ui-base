import React from 'react';
import { storiesOf } from '@storybook/react';
import { Upload } from 'grommet-icons';

import { Box, Text, Button, openConfirmAlert } from 'mnet-ui-base';
import { UploadFile } from '../UploadFile';

const UploadCsvFile = () => {
  return (
    <Box align="center" justify="center" height="100vh" width="100vw">
      <Button
        icon={<Upload color="white" />}
        onClick={() =>
          openConfirmAlert({
            title: 'Upload',
            body: (
              <UploadFile
                validateUrl="http://localhost:8880/publishers/8CUJB6ET3/targeting/domains/validate"
                uploadUrl="http://localhost:8880/publishers/8CUJB6ET3/targeting/domains/upload"
              />
            ),
          })
        }
        label={
          <Text size="large" weight={600}>
            Upload File
          </Text>
        }
        primary
      />
    </Box>
  );
};

storiesOf('Upload', module).add('UploadCsv', () => <UploadCsvFile />);
