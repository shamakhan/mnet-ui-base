import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { Box, Markdown } from 'mnet-ui-base';
var CONTENT = "\n  # Out of Breath\n\n  You know, sometimes in life it seems like there's no way out. Like\n  a sheep trapped in a maze designed by wolves. See all the\n  options [here](https://github.com/probablyup/markdown-to-jsx/)\n\n  [reference](#)\n\n```\nimport { MnetUIBase } from 'mnet-ui-base';\n```\n\n  > i carry your heart with me\n\n  ![alt text](//v2.grommet.io/assets/IMG_4245.jpg \"Markdown Image\")\n\n  Markdown | Less | Pretty\n  --- | --- | ---\n  *Still* | `renders` | **nicely**\n  1 | 2 | 3\n";

var SimpleMarkdown = function SimpleMarkdown() {
  return React.createElement(React.Fragment, null, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(Markdown, null, CONTENT)));
};

var StyledPre = styled.pre.withConfig({
  displayName: "markdownstories__StyledPre",
  componentId: "sc-1bljy9e-0"
})(["background-color:#7d4cdb;"]);

var ComponentOverrideMarkdown = function ComponentOverrideMarkdown() {
  return React.createElement(React.Fragment, null, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(Markdown, {
    components: {
      pre: StyledPre
    }
  }, CONTENT)));
};

storiesOf('Markdown', module).add('Simple', function () {
  return React.createElement(SimpleMarkdown, null);
}).add('Component Override Markdown', function () {
  return React.createElement(ComponentOverrideMarkdown, null);
});