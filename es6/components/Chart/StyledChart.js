import styled from 'styled-components';
import { genericStyles } from '../../utils';
import { defaultProps } from '../../default-props';
var StyledChart = styled.svg.withConfig({
  displayName: "StyledChart",
  componentId: "em7wce-0"
})(["display:block;max-width:100%;overflow:visible;", " ", ";"], genericStyles, function (props) {
  return props.theme.chart && props.theme.chart.extend;
});
StyledChart.defaultProps = {};
Object.setPrototypeOf(StyledChart.defaultProps, defaultProps);
export { StyledChart };