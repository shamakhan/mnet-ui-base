import React from 'react';

import { Box, Text, Heading } from 'mnet-ui-base';

const wordBreakValues = ['normal', 'break-all', 'keep-all', 'break-word'];

const All = () => (
  <>
    {sizes.map(size => (
      <Box key={size} margin="small">
        <Text size={size}>{`Text ${size}`}</Text>
      </Box>
    ))}
  </>
);

const Color = () => (
  <>
    <Text color="accent-1">Colored Text</Text>
  </>
);

/* eslint-disable max-len */
export const WordBreak = () => (
  <>
    {wordBreakValues.map(value => (
      <Box key={value} margin="small" width="medium">
        <Heading level={4}>{`word-break: ${value};`}</Heading>
        <Text wordBreak={value}>
          Honorificabilitudinitatibus califragilisticexpialidocious
          Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
          グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
        </Text>
      </Box>
    ))}
  </>
);
/* eslint-enable max-len */
WordBreak.storyName = 'Word break';

export default {
  title: 'Type/Text/Word break',
};
