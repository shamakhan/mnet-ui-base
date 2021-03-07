import React from 'react';

import { MnetUIBase, Box, Heading, Paragraph, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const paragraphFiller = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.
`;

export const Small = () => (
  <MnetUIBase theme={mnet}>
    <Box pad="medium">
      <div>
        <Heading size="small">Heading 1 - Small</Heading>
        <Text size="large">Text Large</Text>
        <Paragraph>
          Paragraph - Medium
          {paragraphFiller}
        </Paragraph>
        <Heading level={2} size="small">
          Heading 2 - Small
        </Heading>
        <Text>Text Medium</Text>
        <Paragraph>
          Paragraph - Medium
          {paragraphFiller}
        </Paragraph>
        <Heading level={3} size="small">
          Heading 3 - Small
        </Heading>
        <Text>Text Medium</Text>
        <Paragraph size="small">
          Paragraph - Small
          {paragraphFiller}
        </Paragraph>
        <Heading level={4} size="small">
          Heading 4 - Small
        </Heading>
        <Text size="small">Text Small</Text>
        <Paragraph size="small">
          Paragraph - Small
          {paragraphFiller}
        </Paragraph>
      </div>
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Type/Typography/Small',
};
