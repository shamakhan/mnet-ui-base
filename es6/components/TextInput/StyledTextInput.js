import styled, { css } from 'styled-components';
import { disabledStyle, focusStyle, inputStyle, parseMetricToNum, placeholderStyle } from '../../utils';
import { defaultProps } from '../../default-props';

var sizeStyle = function sizeStyle(props) {
  var data = props.theme.text[props.size];
  return css(["font-size:", ";line-height:", ";"], data.size, data.height);
};

var plainStyle = css([""]);
var StyledTextInput = styled.input.withConfig({
  displayName: "StyledTextInput",
  componentId: "ilbntv-0"
})(["", " width:100%;", " ", " ", " &::-moz-focus-inner{border:none;outline:none;}", ";", " ", ";"], inputStyle, function (props) {
  return props.size && sizeStyle(props);
}, function (props) {
  return props.plain && plainStyle;
}, placeholderStyle, function (props) {
  return props.focus && !props.plain && focusStyle;
}, function (props) {
  return props.disabled && disabledStyle(props.theme.textInput.disabled && props.theme.textInput.disabled.opacity);
}, function (props) {
  return props.theme.textInput && props.theme.textInput.extend;
});
StyledTextInput.defaultProps = {};
Object.setPrototypeOf(StyledTextInput.defaultProps, defaultProps);
var StyledTextInputContainer = styled.div.withConfig({
  displayName: "StyledTextInput__StyledTextInputContainer",
  componentId: "ilbntv-1"
})(["position:relative;width:100%;", ";"], function (props) {
  return props.theme.textInput && props.theme.textInput.container && props.theme.textInput.container.extend;
});
StyledTextInputContainer.defaultProps = {};
Object.setPrototypeOf(StyledTextInputContainer.defaultProps, defaultProps);
var StyledPlaceholder = styled.div.withConfig({
  displayName: "StyledTextInput__StyledPlaceholder",
  componentId: "ilbntv-2"
})(["position:absolute;left:", "px;top:50%;transform:translateY(-50%);display:flex;justify-content:center;pointer-events:none;", ";"], function (props) {
  return parseMetricToNum(props.theme.global.input.padding) - parseMetricToNum(props.theme.global.control.border.width);
}, function (props) {
  return props.theme.textInput && props.theme.textInput.placeholder && props.theme.textInput.placeholder.extend;
});
StyledPlaceholder.defaultProps = {};
Object.setPrototypeOf(StyledPlaceholder.defaultProps, defaultProps);
var StyledSuggestions = styled.ol.withConfig({
  displayName: "StyledTextInput__StyledSuggestions",
  componentId: "ilbntv-3"
})(["border-top-left-radius:0;border-top-right-radius:0;margin:0;padding:0;list-style-type:none;", ";"], function (props) {
  return props.theme.textInput && props.theme.textInput.suggestions && props.theme.textInput.suggestions.extend;
});
StyledSuggestions.defaultProps = {};
Object.setPrototypeOf(StyledSuggestions.defaultProps, defaultProps);
export { StyledTextInput, StyledTextInputContainer, StyledPlaceholder, StyledSuggestions };