function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import isChromatic from 'storybook-chromatic/isChromatic';
import { mnet } from 'mnet-ui-base/themes';
import { MnetUIBase, Box, InfiniteScroll, Text } from 'mnet-ui-base';
var allItems = Array(240).fill().map(function (_, i) {
  return "item " + (i + 1);
});

var InfiniteScrollReplace = function InfiniteScrollReplace(props) {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(InfiniteScroll, _extends({
    items: allItems
  }, props), function (item) {
    return React.createElement(Box, {
      key: item,
      pad: "medium",
      border: {
        side: 'bottom'
      },
      align: "center"
    }, React.createElement(Text, null, item));
  }));
};

if (!isChromatic()) {
  storiesOf('InfiniteScroll', module).add('Replace', function () {
    return React.createElement(InfiniteScrollReplace, {
      replace: true
    });
  });
}