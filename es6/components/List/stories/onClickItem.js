import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, List } from 'mnet-ui-base';
import { data } from './data';

var OnClickItemList = function OnClickItemList() {
  var _React$useState = React.useState(),
      clicked = _React$useState[0],
      setClicked = _React$useState[1];

  return React.createElement(React.Fragment, null, React.createElement(Box, {
    align: "center",
    pad: "large",
    gap: "large"
  }, React.createElement(List, {
    data: data.slice(0, 10),
    onClickItem: function onClickItem(event) {
      return setClicked(event.item);
    }
  }), clicked && JSON.stringify(clicked, null, 2)));
};

storiesOf('List', module).add('onClickItem', function () {
  return React.createElement(OnClickItemList, null);
});