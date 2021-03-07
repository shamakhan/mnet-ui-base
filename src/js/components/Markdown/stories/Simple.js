import React from 'react';

import { Box, MnetUIBase, Markdown } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const CONTENT = `
  # Out of Breath

  You know, sometimes in life it seems like there's no way out. Like
  a sheep trapped in a maze designed by wolves. See all the
  options [here](https://github.com/probablyup/markdown-to-jsx/)

  [reference](#)

\`\`\`
import { mnet } from 'mnet-ui-base';
\`\`\`

  > i carry your heart with me

  ![alt text](//v2.grommet.io/assets/IMG_4245.jpg "Markdown Image")

  Markdown | Less | Pretty
  --- | --- | ---
  *Still* | \`renders\` | **nicely**
  1 | 2 | 3
`;

export const Simple = () => (
  <MnetUIBase theme={mnet}>
    <Box align="center" pad="large">
      <Markdown>{CONTENT}</Markdown>
    </Box>
  </MnetUIBase>
);

export default {
  title: 'Type/Markdown/Simple',
};
