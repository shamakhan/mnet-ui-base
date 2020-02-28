import styled, { css } from 'styled-components';
import { focusStyle, inputStyle, placeholderStyle } from '../../utils';

var sizeStyle = function sizeStyle(props) {
  var data = props.theme.text[props.size];
  return css(["font-size:", ";line-height:", ";"], data.size, data.height);
};

var plainStyle = css(["border:none;"]);
export var StyledMaskedInput = styled.input.withConfig({
  displayName: "StyledMaskedInput",
  componentId: "aqxhco-0"
})(["", " width:100%;", " ", " ", " &::-moz-focus-inner{border:none;outline:none;}", ";", ";"], inputStyle, function (props) {
  return props.size && sizeStyle(props);
}, function (props) {
  return props.plain && plainStyle;
}, placeholderStyle, function (props) {
  return props.focus && !props.plain && focusStyle;
}, function (props) {
  return props.theme.maskedInput && props.theme.maskedInput.extend;
});
export var StyledMaskedInputContainer = styled.div.withConfig({
  displayName: "StyledMaskedInput__StyledMaskedInputContainer",
  componentId: "aqxhco-1"
})(["position:relative;width:100%;"]);