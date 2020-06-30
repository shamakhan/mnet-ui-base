import styled, { css } from 'styled-components';
import { Box } from '../Box';
import { backgroundStyle, normalizeColor } from '../../utils';

var ArrowStyle = function ArrowStyle(props) {
  var position = props.position;

  var _backgroundStyle = backgroundStyle(normalizeColor(props.theme.tooptip && props.theme.tooptip.background || 'dark-1', props.theme), props.theme),
      tipColor = _backgroundStyle[1];

  if (position === 'up') {
    return css(["border-left:solid transparent;border-right:solid transparent;border-top:solid ", ";"], tipColor);
  }

  if (position === 'down') {
    return css(["border-left:solid transparent;border-right:solid transparent;border-bottom:solid ", ";"], tipColor);
  }

  if (position === 'left') {
    return css(["border-top:solid transparent;border-bottom:solid transparent;border-left:solid ", ";"], tipColor);
  }

  return css(["border-top:solid transparent;border-bottom:solid transparent;border-right:solid ", ";"], tipColor);
};

export var Arrow = styled(Box).withConfig({
  displayName: "StyledTooltip__Arrow",
  componentId: "sc-7ieemc-0"
})(["width:0;height:0;", " border-width:", ";"], function (props) {
  return ArrowStyle(props);
}, function (props) {
  return props.theme.tooptip.tipSize || '5px';
});

var Alignment = function Alignment(props) {
  var position = props.position;

  if (position === 'up') {
    return css(["flex-direction:column-reverse;align-items:center;"]);
  }

  if (position === 'down') {
    return css(["flex-direction:column;align-items:center;"]);
  }

  if (position === 'left') {
    return css(["flex-direction:row-reverse;align-items:center;"]);
  }

  return css(["flex-direction:row;align-items:center;"]);
};

export var ArrowWrap = styled(Box).withConfig({
  displayName: "StyledTooltip__ArrowWrap",
  componentId: "sc-7ieemc-1"
})(["", ""], function (props) {
  return Alignment(props);
});