import React from 'react';

import { MnetUIBase, Image } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

export const Fallback = () => (
  <MnetUIBase theme={mnet}>
    <Image
      fallback="//v2.grommet.io/assets/IMG_4245.jpg"
      src="//v2.grommet.io/assets/IMG_4245_not_exists.jpg"
    />
  </MnetUIBase>
);

export default {
  title: 'Media/Image/Fallback',
};
