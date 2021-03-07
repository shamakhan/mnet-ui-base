import React from 'react';

import { MnetUIBase, Box, Heading, Paragraph, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const paragraphFiller = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua.
`;

export const Large = () => (
  <MnetUIBase theme={mnet}>
    <Box pad="medium">
      <div>
        <Heading size="large">Heading 1 - Large</Heading>
        <Text size="xxlarge">Text XXLarge</Text>
        <Paragraph size="xlarge">
          Paragraph - XLarge
          {paragraphFiller}
        </Paragraph>
        <Heading level={2} size="large">
          Heading 2 - Large
        </Heading>
        <Text size="xlarge">Text XLarge</Text>
        <Paragraph size="large">
          Paragraph - Large
          {paragraphFiller}
        </Paragraph>
        <Heading level={3} size="large">
          Heading 3 - Large
        </Heading>
        <Text size="large">Text Large</Text>
        <Paragraph>
          Paragraph - Medium
          {paragraphFiller}
        </Paragraph>
        <Heading level={4} size="large">
          Heading 4 - Large
        </Heading>
        <Text>Text Medium</Text>
        <Paragraph>
          Paragraph - Medium
          {paragraphFiller}
        </Paragraph>
      </div>
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Type/Typography/Large',
};
