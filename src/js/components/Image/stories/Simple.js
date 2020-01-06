import React from 'react';

import { MnetUIBase, Image } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Simple = () => (
  <MnetUIBase theme={mnet}>
    <Image src="//v2.grommet.io/assets/IMG_4245.jpg" />
  </MnetUIBase>
);

export default {
  title: 'Media/Image/Simple',
};
