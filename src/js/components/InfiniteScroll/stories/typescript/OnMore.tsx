import React, { useState } from 'react';

import {
  MnetUIBase,
  Box,
  InfiniteScroll,
  InfiniteScrollProps,
  Text,
} from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

const allItems = Array(2000)
  .fill(0)
  .map((_, i) => `item ${i + 1}`);

// 'interface' declarations can only be used in TypeScript files.
// Remove ': 'interface IProps' if you are not using Typescript.
export interface IProps {
  props?: InfiniteScrollProps;
  step?: InfiniteScrollProps['step'];
}

// Type annotations can only be used in TypeScript files.
// Remove ': React.FC<IProps>' if you are not using Typescript.
const OnMoreInfiniteScroll: React.FC<IProps> = ({ props }) => {
  const [items, setItems] = useState(allItems.slice(0, 50));

  const onMore = () => {
    setTimeout(() => {
      setItems(allItems.slice(0, items.length + 50));
    }, 1000);
  };

  return (
    <MnetUIBase theme={mnet}>
      <Box>
        <InfiniteScroll items={items} onMore={onMore} {...props}>
          {item => (
            <Box
              key={item}
              pad="medium"
              border={{ side: 'bottom' }}
              align="center"
            >
              <Text>{item}</Text>
            </Box>
          )}
        </InfiniteScroll>
      </Box>
    </MnetUIBase>
  );
};

export const onMore = () => <OnMoreInfiniteScroll />;

onMore.storyName = 'onMore';

export default {
  title: 'Utilities/InfiniteScroll/onMore',
};
