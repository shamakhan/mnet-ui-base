import styled from 'styled-components';
import { selectedStyle } from '../../utils';
import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';
var disabledStyle = "\n  opacity: 0.4;\n  cursor: not-allowed;\n";
var CheckBoxWrapper = styled(Box).withConfig({
  displayName: "StyledMultiSelect__CheckBoxWrapper",
  componentId: "sc-1yaxkjp-0"
})(["", ";"], function (props) {
  return props.theme.multiselect.checkbox.extend;
});
var SelectedOption = styled(Box).withConfig({
  displayName: "StyledMultiSelect__SelectedOption",
  componentId: "sc-1yaxkjp-1"
})(["", ""], function (props) {
  return props.selected && disabledStyle;
});
var OptionsBox = styled(Box).withConfig({
  displayName: "StyledMultiSelect__OptionsBox",
  componentId: "sc-1yaxkjp-2"
})(["position:relative;scroll-behavior:smooth;overflow:auto;"]);
var SelectOption = styled(Button).withConfig({
  displayName: "StyledMultiSelect__SelectOption",
  componentId: "sc-1yaxkjp-3"
})(["display:block;width:100%;background:", ";"], function (props) {
  return props.active ? props.theme.select.activeColor : 'transparent';
});
var OptionBox = styled(Box).withConfig({
  displayName: "StyledMultiSelect__OptionBox",
  componentId: "sc-1yaxkjp-4"
})(["", ""], function (props) {
  return props.selected && selectedStyle;
});
var CheckBox = styled(Box).withConfig({
  displayName: "StyledMultiSelect__CheckBox",
  componentId: "sc-1yaxkjp-5"
})(["", ";"], function (props) {
  return props.theme.multiselect.checkbox.check;
});
var OptionWrapper = styled(Box).withConfig({
  displayName: "StyledMultiSelect__OptionWrapper",
  componentId: "sc-1yaxkjp-6"
})(["position:relative;scroll-behavior:smooth;overflow:auto;", ";"], function (props) {
  return props.theme.multiselect.chips.wrapper.extend;
});
var OptionText = styled(Box).withConfig({
  displayName: "StyledMultiSelect__OptionText",
  componentId: "sc-1yaxkjp-7"
})(["", ";"], function (props) {
  return props.theme.multiselect.chips.option.extend;
});
var TextAreaWrapper = styled(Box).withConfig({
  displayName: "StyledMultiSelect__TextAreaWrapper",
  componentId: "sc-1yaxkjp-8"
})(["", ";"], function (props) {
  return props.theme.multiselect.custom.textAreaWrap.extend;
});
var LabelText = styled(Text).withConfig({
  displayName: "StyledMultiSelect__LabelText",
  componentId: "sc-1yaxkjp-9"
})(["overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;"]);
var IconWrapper = styled(Box).withConfig({
  displayName: "StyledMultiSelect__IconWrapper",
  componentId: "sc-1yaxkjp-10"
})(["align-items:center;flex-direction:row;"]);
export { CheckBoxWrapper, OptionsBox, SelectOption, OptionBox, CheckBox, OptionWrapper, OptionText, SelectedOption, TextAreaWrapper, LabelText, IconWrapper };