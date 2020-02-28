import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, MnetUIBase, Video } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var SimpleVideo = function SimpleVideo(props) {
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(Video, props, React.createElement("source", {
    src: "http://techslides.com/demos/sample-videos/small.webm",
    type: "video/webm"
  }), React.createElement("source", {
    src: "http://techslides.com/demos/sample-videos/small.ogv",
    type: "video/ogg"
  }), React.createElement("source", {
    src: "http://techslides.com/demos/sample-videos/small.mp4",
    type: "video/mp4"
  }), React.createElement("source", {
    src: "http://techslides.com/demos/sample-videos/small.3gp",
    type: "video/3gp"
  }))));
};

storiesOf('Video', module).add('Simple', function () {
  return React.createElement(SimpleVideo, null);
}).add('Controls Below', function () {
  return React.createElement(SimpleVideo, {
    controls: "below"
  });
});