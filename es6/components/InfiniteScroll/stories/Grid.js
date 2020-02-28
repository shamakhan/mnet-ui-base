import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid, MnetUIBase, Box, Image, InfiniteScroll, Text } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';
import { allItems } from './Basics';

var GridInfiniteScroll = function GridInfiniteScroll() {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Grid, {
    columns: "xsmall",
    rows: "small"
  }, React.createElement(InfiniteScroll, {
    items: allItems,
    step: 12
  }, function (item) {
    return React.createElement(Box, {
      key: item,
      as: "article",
      pad: "xsmall"
    }, React.createElement(Image, {
      src: "https://via.placeholder.com/350x150"
    }), React.createElement(Text, null, item));
  })));
};

storiesOf('InfiniteScroll', module).add('Grid', function () {
  return React.createElement(GridInfiniteScroll, null);
});