import styled from 'styled-components';
import { selectedStyle } from '../../utils';
import { Box } from '../Box';
import { Button } from '../Button';
var CheckBoxWrapper = styled(Box).withConfig({
  displayName: "StyledMultiSelect__CheckBoxWrapper",
  componentId: "sc-1yaxkjp-0"
})(["", ";"], function (props) {
  return props.theme.multiselect.checkbox.extend;
});
var OptionsBox = styled.div.withConfig({
  displayName: "StyledMultiSelect__OptionsBox",
  componentId: "sc-1yaxkjp-1"
})(["position:relative;scroll-behavior:smooth;overflow:auto;"]);
var SelectOption = styled(Button).withConfig({
  displayName: "StyledMultiSelect__SelectOption",
  componentId: "sc-1yaxkjp-2"
})(["display:block;width:100%;"]);
var OptionBox = styled(Box).withConfig({
  displayName: "StyledMultiSelect__OptionBox",
  componentId: "sc-1yaxkjp-3"
})(["", ""], function (props) {
  return props.selected && selectedStyle;
});
export { CheckBoxWrapper, OptionsBox, SelectOption, OptionBox };