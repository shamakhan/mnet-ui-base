import React from 'react';

import { Box, MnetUIBase, Pagination, Text } from 'mnet-ui-base';
import { ThemeType } from 'mnet-ui-base/themes';
import { FormPreviousLink } from 'grommet-icons/icons/FormPreviousLink';
import { FormNextLink } from 'grommet-icons/icons/FormNextLink';

// Type annotations can only be used in TypeScript files.
// Remove ': ThemeType' if you are not using Typescript.
const customTheme: ThemeType = {
  global: {
    font: {
      family: 'Arial',
    },
  },
  pagination: {
    button: {
      color: 'text-strong',
      border: {
        color: 'skyblue',
        width: '3px',
      },
      active: {
        background: {
          color: 'salmon',
        },
        color: 'text',
      },
      hover: {
        background: {
          color: 'skyblue',
        },
      },
    },
    controls: {
      gap: 'xxsmall',
    },
    icons: {
      next: FormNextLink,
      previous: FormPreviousLink,
    },
  },
};

export const Custom = () => (
  <MnetUIBase theme={customTheme}>
    <Box direction="row" gap="large">
      <Box
        align="start"
        pad={{ top: 'medium', bottom: 'medium', horizontal: 'medium' }}
      >
        <Text margin={{ bottom: 'small' }}>
          Custom Theme via theme.pagination.button
        </Text>
        <Pagination numberItems={237} />
      </Box>
      <Box
        align="start"
        background="black"
        pad={{ top: 'medium', bottom: 'medium', horizontal: 'medium' }}
      >
        <Text margin={{ bottom: 'small' }}>
          Custom Theme via theme.pagination.button
        </Text>
        <Pagination numberItems={237} />
      </Box>
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Controls/Pagination/Custom',
};
