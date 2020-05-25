import React from 'react';

import { Header, Main, Text } from 'mnet-ui-base';

export const Simple = () => (
  <>
    <Header background="light-4" pad="small">
      <Text size="small">Header</Text>
    </Header>
    <Main pad="small">
      I am Main! Main is a good place to place your content.
    </Main>
  </>
);

export default {
  title: 'Layout/Main/Simple',
};
