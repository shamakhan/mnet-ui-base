import { rgba } from 'polished';
import { css } from 'styled-components';

import { Actions } from 'grommet-icons/icons/Actions';
import { ClosedCaption } from 'grommet-icons/icons/ClosedCaption';
import { Expand } from 'grommet-icons/icons/Expand';
import { FormDown } from 'grommet-icons/icons/FormDown';
import { FormNext } from 'grommet-icons/icons/FormNext';
import { FormPrevious } from 'grommet-icons/icons/FormPrevious';
import { FormUp } from 'grommet-icons/icons/FormUp';
import { Next } from 'grommet-icons/icons/Next';
import { Pause } from 'grommet-icons/icons/Pause';
import { Play } from 'grommet-icons/icons/Play';
import { Previous } from 'grommet-icons/icons/Previous';
import { Subtract } from 'grommet-icons/icons/Subtract';
import { Volume } from 'grommet-icons/icons/Volume';
import { VolumeLow } from 'grommet-icons/icons/VolumeLow';
import { Info } from 'grommet-icons/icons/Info';
import { FormClose } from 'grommet-icons/icons/FormClose';
import { base as iconBase } from 'grommet-icons/themes/base';

import { deepFreeze, deepMerge } from '../utils/object';
import { normalizeColor } from '../utils/colors';
import { parseMetricToNum } from '../utils/mixins';

const brandColor = '#E15151';
const accentColors = ['#38C18B', '#8F94A6', '#739FFC', '#439ADC'];
const neutralColors = ['#519bff', '#99742E', '#00739D', '#A2423D'];
const statusColors = {
  critical: '#e35e59',
  error: '#e35e59',
  warning: '#FFAA15',
  ok: '#44b88d',
  unknown: '#CCCCCC',
  disabled: '#CCCCCC',
};
const darkColors = [
  '#313340',
  '#4b4d59',
  '#65707d',
  '#8691a8',
  '#999999',
  '#999999',
];
const lightColors = [
  '#fbfbfb',
  '#f6f6f8',
  '#f5f6f8',
  '#e1e3ef',
  '#dfdfdf',
  '#DADADA',
];
const focusColor = '#B1C2FE';

const colors = {
  active: rgba(221, 221, 221, 0.5),
  'background-back': {
    dark: '#33333308',
    light: '#EDEDED',
  },
  'background-front': {
    dark: '#444444',
    light: '#FFFFFF',
  },
  'background-contrast': {
    dark: '#33333308',
    light: '#FFFFFF08',
  },
  'active-background': 'background-contrast',
  'active-text': 'text-strong',
  black: '#000000',
  border: {
    dark: rgba(255, 255, 255, 0.33),
    light: rgba(205, 211, 227, 1),
  },
  brand: brandColor,
  control: {
    dark: 'brand',
    light: 'brand',
  },
  focus: focusColor,
  'graph-0': 'accent-1',
  'graph-1': 'neutral-1',
  'graph-2': 'neutral-2',
  'graph-3': 'neutral-3',
  'graph-4': 'neutral-4',
  placeholder: '#e0e4ee',
  selected: 'dark-2',
  text: {
    dark: '#f8f8f8',
    light: '#444444',
  },
  'text-strong': {
    dark: '#FFFFFF',
    light: '#000000',
  },
  'text-weak': {
    dark: '#CCCCCC',
    light: '#555555',
  },
  'text-xweak': {
    dark: '#BBBBBB',
    light: '#666666',
  },
  icon: {
    dark: '#f8f8f8',
    light: '#666666',
  },
  'selected-background': 'brand',
  'selected-text': 'text-strong',
  white: '#FFFFFF',
};

const colorArray = (array, prefix) =>
  array.forEach((color, index) => {
    colors[`${prefix}-${index + 1}`] = color;
  });

colorArray(accentColors, 'accent');
colorArray(darkColors, 'dark');
colorArray(lightColors, 'light');
colorArray(neutralColors, 'neutral');
Object.keys(statusColors).forEach(color => {
  colors[`status-${color}`] = statusColors[color];
});

export const generate = (baseSpacing = 24, scale = 6) => {
  // 24
  const baseFontSize = baseSpacing * 0.75; // 18
  const fontScale = baseSpacing / scale; // 4

  const fontSizing = factor => ({
    size: `${baseFontSize + factor * fontScale}px`,
    height: `${baseSpacing + factor * fontScale}px`,
    // maxWidth chosen to be ~50 characters wide
    // see: https://ux.stackexchange.com/a/34125
    maxWidth: `${baseSpacing * (baseFontSize + factor * fontScale)}px`,
  });

  const borderWidth = 2;
  const controlBorderWidth = 1;

  const result = deepMerge(iconBase, {
    global: {
      active: {
        background: {
          color: 'active',
          opacity: 'medium',
        },
        color: {
          dark: 'white',
          light: 'black',
        },
      },
      animation: {
        duration: '1s',
        jiggle: {
          duration: '0.1s',
        },
      },
      borderSize: {
        xsmall: '1px',
        small: '2px',
        medium: `${baseSpacing / 6}px`, // 4
        large: `${baseSpacing / 2}px`, // 12
        xlarge: `${baseSpacing}px`, // 24
      },
      breakpoints: {
        small: {
          value: baseSpacing * 32, // 768
          borderSize: {
            xsmall: '1px',
            small: '2px',
            medium: `${baseSpacing / 6}px`, // 4
            large: `${baseSpacing / 4}px`, // 6
            xlarge: `${baseSpacing / 2}px`, // 12
          },
          edgeSize: {
            none: '0px',
            hair: '1px', // for Chart
            xxsmall: '2px',
            xsmall: `${baseSpacing / 8}px`, // 3
            small: `${baseSpacing / 4}px`, // 6
            medium: `${baseSpacing / 2}px`, // 12
            large: `${baseSpacing}px`, // 24
            xlarge: `${baseSpacing * 2}px`, // 48
          },
          size: {
            xxsmall: `${baseSpacing}px`, // 24
            xsmall: `${baseSpacing * 2}px`, // 48
            small: `${baseSpacing * 4}px`, // 96
            medium: `${baseSpacing * 8}px`, // 192
            large: `${baseSpacing * 16}px`, // 384
            xlarge: `${baseSpacing * 32}px`, // 768
            full: '100%',
          },
        },
        medium: {
          value: baseSpacing * 64, // 1536
        },
        large: {}, // anything above 'medium'
      },
      // Breakpoints used at Server Side Rendering for the initial rendering
      // These values correspond to the theme breakpoints
      deviceBreakpoints: {
        phone: 'small',
        tablet: 'medium',
        computer: 'large',
      },
      colors,
      control: {
        border: {
          width: `${controlBorderWidth}px`,
          radius: '4px',
          color: 'border',
        },
        disabled: {
          opacity: 0.3,
        },
      },
      // The time to wait after the user stopped typing, measured in ms.
      debounceDelay: 300,
      drop: {
        background: '#ffffff',
        border: {
          radius: '0px',
        },
        shadowSize: 'small',
        zIndex: '20',
        marginTop: '4px',
      },
      edgeSize: {
        none: '0px',
        hair: '1px', // for Chart
        xxsmall: `${baseSpacing / 16}px`, // 3
        xsmall: `${baseSpacing / 8}px`, // 6
        small: `${baseSpacing / 4}px`, // 12
        medium: `${baseSpacing / 2}px`, // 24
        large: `${baseSpacing}px`, // 48
        xlarge: `${baseSpacing}px`, // 96
        responsiveBreakpoint: 'small',
      },
      elevation: {
        light: {
          none: 'none',
          xsmall: '0px 1px 2px rgba(0, 0, 0, 0.20)',
          small: '0px 2px 4px rgba(0, 0, 0, 0.20)',
          medium: '0px 4px 8px rgba(0, 0, 0, 0.20)',
          large: '0px 8px 16px rgba(0, 0, 0, 0.20)',
          xlarge: '0px 12px 24px rgba(0, 0, 0, 0.20)',
        },
        dark: {
          none: 'none',
          xsmall: '0px 2px 2px rgba(255, 255, 255, 0.40)',
          small: '0px 4px 4px rgba(255, 255, 255, 0.40)',
          medium: '0px 6px 8px rgba(255, 255, 255, 0.40)',
          large: '0px 8px 16px rgba(255, 255, 255, 0.40)',
          xlarge: '0px 12px 24px rgba(255, 255, 255, 0.40)',
        },
      },
      focus: {
        // shadow or outline are required for accessibility
        border: {
          // remove to only have shadow
          color: 'focus',
        },
        // outline: { color: undefined, size: undefined },
        shadow: {
          color: 'focus',
          size: '2px',
        },
      },
      font: {
        ...fontSizing(0),
        // face: undefined,
        // family: undefined,
      },
      hover: {
        background: {
          color: 'active',
          opacity: 'medium',
        },
        color: {
          dark: 'white',
          light: 'black',
        },
      },
      input: {
        padding: {
          horizontal: `${parseMetricToNum(`${baseSpacing / 2}px`) -
            parseMetricToNum(`${controlBorderWidth}px`)}px`,
          vertical: `${parseMetricToNum(`${baseSpacing / 2}px`) -
            parseMetricToNum(`${controlBorderWidth}px`)}px`,
        },
        font: {
          // size: undefined,
          // height: undefined,
          weight: 600,
        },
        // deprecate in v3
        // weight: undefined,
      },
      opacity: {
        strong: 0.8,
        medium: 0.4,
        weak: 0.1,
      },
      selected: {
        background: 'selected',
        color: 'white',
      },
      spacing: `${baseSpacing}px`,
      size: {
        xxsmall: `${baseSpacing * 2}px`, // 48
        xsmall: `${baseSpacing * 4}px`, // 96
        small: `${baseSpacing * 8}px`, // 192
        medium: `${baseSpacing * 16}px`, // 384
        large: `${baseSpacing * 32}px`, // 768
        xlarge: `${baseSpacing * 48}px`, // 1152
        xxlarge: `${baseSpacing * 64}px`, // 1536
        full: '100%',
      },
    },
    accordion: {
      panel: {
        // border: {
        //   side: 'bottom',
        //   color: 'border',
        // },
      },
      border: {
        side: 'bottom',
        color: 'border',
      },
      heading: {
        level: '4', // level ranges from 1-6
        // margin: undefined
      },
      hover: {
        color: { dark: 'light-4', light: 'dark-3' }, // deprecated
        heading: {
          color: { dark: 'light-4', light: 'dark-3' },
        },
      },
      icons: {
        collapse: FormUp,
        expand: FormDown,
        // color: { dark: undefined, light: undefined },
      },
    },
    anchor: {
      textDecoration: 'none',
      fontWeight: 600,
      color: {
        dark: 'brand',
        light: 'brand',
      },
      hover: {
        textDecoration: 'underline',
        // fontWeight: undefined,
        // extend: undefined,
      },
      // extend: undefined,
    },
    avatar: {
      // extend: undefined,
      size: {
        xsmall: `${baseSpacing * 0.75}px`,
        small: `${baseSpacing}px`,
        medium: `${baseSpacing * 2}px`, // default 48
        large: `${baseSpacing * 3}px`,
        xlarge: `${baseSpacing * 4}px`,
      },
      text: {
        // fontWeight: undefined,
        // extend: undefined
      },
    },
    box: {
      responsiveBreakpoint: 'small', // when we switch rows to columns
      // extend: undefined,
    },
    breadcrumb: {
      item: {
        margin: {
          right: 'medium',
        },
      },
      content: {
        color: 'dark-1',
        size: 'large',
        // extend: undefined,
      },
      icon: {
        color: 'dark-1',
        size: 'small',
      },
      icons: {
        separator: Next,
      },
      extend: {
        ul: {
          display: 'flex',
          li: {
            border: 'none',
            padding: 0,
          },
        },
      },
    },
    button: {
      size: {
        small: {
          border: {
            radius: `${baseSpacing * 0.75}px`,
          },
          pad: {
            vertical: `${baseSpacing / 4 - borderWidth}px`, // 4px
            horizontal: `${baseSpacing - borderWidth * 2}px`, // 20px,
          },
        },
        medium: {
          border: {
            radius: `${baseSpacing * 0.75}px`, // 18px
          },
          pad: {
            vertical: `${baseSpacing / 4 - borderWidth}px`, // 4px
            horizontal: `${baseSpacing - borderWidth}px`, // 22px
          },
        },
        large: {
          border: {
            radius: `${baseSpacing}px`, // 24px
          },
          pad: {
            vertical: `${baseSpacing / 4 + borderWidth}px`, // 8px
            horizontal: `${baseSpacing + borderWidth * 4}px`, // 32px,
          },
        },
      },
      border: {
        // color: { dark: undefined, light: undefined }
        width: `${borderWidth}px`,
        radius: `${baseSpacing * 0.2}px`,
      },
      // color: { dark: undefined, light: undefined }
      // default: {
      //   background: undefined,
      //   border: undefined,
      //   color: undefined,
      //   padding: {
      //     vertical: undefined,
      //     horizontal: undefined,
      //   },
      //   extend: undefined,
      // },
      // primary: {
      //   background: undefined,
      //   border: undefined,
      //   color: undefined,
      //   padding: {
      //     vertical: undefined,
      //     horizontal: undefined,
      //   },
      //   extend: undefined,
      // },
      // secondary: {
      //   background: undefined,
      //   border: undefined,
      //   color: undefined,
      //   padding: {
      //     vertical: undefined,
      //     horizontal: undefined,
      //   },
      //   extend: undefined,
      // },
      active: {
        background: 'active-background',
        //   border: undefined,
        color: 'active-text',
        //   extend: undefined,
        //   default: {},
        //   primary: {},
        //   secondary: {},
      },
      disabled: {
        //   background: undefined,
        //   border: undefined,
        //   color: undefined,
        opacity: 0.3,
        //   extend: undefined,
        //   default: {},
        //   primary: {},
        //   secondary: {},
      },
      // hover: {
      //   background: undefined,
      //   border: undefined,
      //   color: undefined},
      //   extend: undefined,
      //   default: {},
      //   primary: {},
      //   secondary: {},
      // },
      padding: {
        vertical: `${baseSpacing / 4 - borderWidth}px`,
        horizontal: `${baseSpacing - borderWidth}px`,
      },
      transition: {
        timing: 'ease-in-out',
        duration: 0.1,
        properties: ['color', 'background-color', 'border-color', 'box-shadow'],
      },
    },
    calendar: {
      // daySize must align with global.size
      small: {
        fontSize: `${baseFontSize - fontScale}px`,
        lineHeight: 1.375,
        daySize: `${(baseSpacing * 8) / 7}px`,
        slideDuration: '0.2s',
      },
      medium: {
        fontSize: `${baseFontSize}px`,
        lineHeight: 1.45,
        daySize: `${(baseSpacing * 16) / 7}px`,
        slideDuration: '0.5s',
      },
      large: {
        fontSize: `${baseFontSize + 3 * fontScale}px`,
        lineHeight: 1.11,
        daySize: `${(baseSpacing * 32) / 7}px`,
        slideDuration: '0.8s',
      },
      icons: {
        previous: Previous,
        next: Next,
        small: {
          previous: FormPrevious,
          next: FormNext,
        },
      },
      heading: { level: '4' }, // level ranges from 1-6
    },
    carousel: {
      icons: {
        current: Subtract,
        next: Next,
        previous: Previous,
        // color: { dark: undefined, light: undefined },
      },
      animation: {
        duration: 1000,
      },
      disabled: {
        icons: {
          // color: { dark: undefined, light: undefined },
        },
      },
    },
    chart: {
      color: 'graph-0',
      // extend: undefined,
    },
    checkBox: {
      border: {
        color: {
          dark: 'rgba(255, 255, 255, 0.5)',
          light: 'rgba(0, 0, 0, 0.15)',
        },
        width: '2px',
      },
      check: {
        // extend: undefined,
        radius: '4px',
        thickness: '4px',
      },
      // color: { dark: undefined, light: undefined },
      // extend: undefined,
      // gap: undefined
      hover: {
        border: {
          color: {
            dark: 'white',
            light: 'black',
          },
        },
      },
      icon: {
        // size: undefined,
        // extend: undefined,
      },
      icons: {
        // checked: undefined,
        // indeterminate: undefined,
      },
      size: `${baseSpacing}px`,
      toggle: {
        // background: undefined
        color: {
          dark: '#d9d9d9',
          light: '#d9d9d9',
        },
        knob: {
          // extend: undefined,
        },
        radius: `${baseSpacing}px`,
        size: `${baseSpacing * 2}px`,
        // extend: undefined,
      },
    },
    clock: {
      analog: {
        // extend: undefined,
        hour: {
          color: {
            dark: 'light-2',
            light: 'dark-3',
          },
          width: `${baseSpacing / 3}px`,
          size: `${baseSpacing}px`,
          shape: 'round',
        },
        minute: {
          color: {
            dark: 'light-4',
            light: 'dark-3',
          },
          width: `${baseSpacing / 6}px`,
          size: `${Math.round(baseSpacing / 2)}px`,
          shape: 'round',
        },
        second: {
          color: {
            dark: 'accent-1',
            light: 'accent-1',
          },
          width: `${baseSpacing / 8}px`,
          size: `${Math.round(baseSpacing / 2.666)}px`,
          shape: 'round',
        },
        size: {
          small: `${baseSpacing * 3}px`,
          medium: `${baseSpacing * 4}px`,
          large: `${baseSpacing * 6}px`,
          xlarge: `${baseSpacing * 9}px`,
          huge: `${baseSpacing * 12}px`,
        },
      },
      digital: {
        text: {
          xsmall: { size: `${baseFontSize - 2 * fontScale}px`, height: 1.5 },
          small: { size: `${baseFontSize - fontScale}px`, height: 1.43 },
          medium: { size: `${baseFontSize}px`, height: 1.375 },
          large: { size: `${baseFontSize + fontScale}px`, height: 1.167 },
          xlarge: { size: `${baseFontSize + 2 * fontScale}px`, height: 1.1875 },
          xxlarge: { size: `${baseFontSize + 4 * fontScale}px`, height: 1.125 },
        },
      },
    },
    collapsible: {
      minSpeed: 200,
      baseline: 500,
    },
    dataTable: {
      groupHeader: {
        background: {
          dark: 'dark-2',
          light: 'light-2',
        },
        border: { side: 'bottom', size: 'xsmall' },
        pad: { horizontal: 'small', vertical: 'xsmall' },
      },
      groupEnd: {
        border: { side: 'bottom', size: 'xsmall' },
      },
      header: {},
      icons: {
        ascending: FormDown,
        contract: FormUp,
        descending: FormUp,
        expand: FormDown,
      },
      primary: {
        weight: 'bold',
      },
      resize: {
        border: {
          color: 'border',
          side: 'end',
        },
      },
    },
    diagram: {
      // extend: undefined,
      line: {
        color: 'graph-0',
      },
    },
    // drop: {
    //   extend: undefined,
    //   maxHeight: undefined,
    // },
    formField: {
      border: {
        color: 'border',
        error: {
          color: {
            dark: 'white',
            light: 'status-critical',
          },
        },
        position: 'inner',
        side: 'all',
        size: 'xsmall',
      },
      content: {
        pad: 'small',
      },
      disabled: {
        background: {
          color: 'status-disabled',
          opacity: 'medium',
        },
        // border: {
        //   color: undefined,
        // },
        // label: {
        //   color: undefined,
        // },
      },
      // focus: {
      //   background: {
      //     color: undefined,
      //   },
      //   border: {
      //     color: undefined,
      //   },
      // },
      error: {
        color: 'status-critical',
        margin: { vertical: 'medium', horizontal: 'none' },
        // background: undefined,
      },
      // extend: undefined,
      help: {
        color: 'dark-3',
        margin: {
          start: 'small',
        },
      },
      info: {
        color: 'text-xweak',
        margin: { vertical: 'xsmall', left: 'medium' },
      },
      label: {
        margin: { vertical: 'xsmall', horizontal: 'small' },
        width: 'xxsmall',
      },
      margin: { bottom: 'small' },
      postfix: {
        color: 'white',
        background: 'dark-3',
        justify: 'center',
        pad: { horizontal: 'medium', vertical: 'medium' },
      },
      prefix: {
        color: 'white',
        background: 'dark-3',
        justify: 'center',
        pad: { horizontal: 'medium', vertical: 'medium' },
      },
      extend: {
        button: {
          flex: 1,
          border: 'none',
        },
      },

      // round: undefined,
    },
    mnet: {
      // extend: undefined
    },
    heading: {
      font: {
        // family: undefined
      },
      level: {
        1: {
          font: {
            // family: undefined,
            // weight: undefined,
          },
          small: { ...fontSizing(4) },
          medium: { ...fontSizing(8) },
          large: { ...fontSizing(16) },
          xlarge: { ...fontSizing(24) },
        },
        2: {
          font: {
            // family: undefined,
            // weight: undefined,
          },
          small: { ...fontSizing(2) },
          medium: { ...fontSizing(4) },
          large: { ...fontSizing(8) },
          xlarge: { ...fontSizing(12) },
        },
        3: {
          font: {
            // family: undefined,
            // weight: undefined,
          },
          small: { ...fontSizing(1) },
          medium: { ...fontSizing(2) },
          large: { ...fontSizing(4) },
          xlarge: { ...fontSizing(6) },
        },
        4: {
          font: {
            // family: undefined,
            // weight: undefined,
          },
          small: { ...fontSizing(0) },
          medium: { ...fontSizing(0) },
          large: { ...fontSizing(0) },
          xlarge: { ...fontSizing(0) },
        },
        5: {
          font: {
            // family: undefined,
            // weight: undefined,
          },
          small: { ...fontSizing(-0.5) },
          medium: { ...fontSizing(-0.5) },
          large: { ...fontSizing(-0.5) },
          xlarge: { ...fontSizing(-0.5) },
        },
        6: {
          font: {
            // family: undefined,
            // weight: undefined,
          },
          small: { ...fontSizing(-1) },
          medium: { ...fontSizing(-1) },
          large: { ...fontSizing(-1) },
          xlarge: { ...fontSizing(-1) },
        },
      },
      responsiveBreakpoint: 'small', // when we scale the font size down
      weight: 600,
    },
    layer: {
      background: 'white',
      border: {
        radius: '4px',
      },
      container: {
        zIndex: '15',
      },
      // extend: undefined,
      overlay: {
        background: 'rgba(0, 0, 0, 0.5)',
      },
      responsiveBreakpoint: 'small', // when Layer takes over the full screen
      zIndex: '10',
    },
    list: {
      item: {
        // background: undefined,
        border: 'horizontal',
        pad: { horizontal: 'medium', vertical: 'small' },
        // extend: undefined,
      },
      // extend: undefined,
    },
    maskedInput: {
      // extend: undefined,
      // disabled: { opacity: undefined },
    },
    menu: {
      // background: undefined,
      // extend: undefined,
      icons: {
        down: FormDown,
        // color: { dark: undefined, light: undefined },
      },
    },
    meter: {
      color: 'graph-0',
      // colors: [] || colors: ['graph-0', 'graph-1', 'graph-2', 'graph-3'],
      // extend: undefined,
    },
    modalpopup: {
      container: {
        width: 'large',
      },
      title: {
        wrapper: {
          pad: {
            horizontal: 'large',
            vertical: 'small',
          },
          direction: 'row',
          justify: 'between',
          align: 'center',
          border: {
            side: 'bottom',
            color: 'dark-6',
          },
        },
        text: {
          level: 3,
          size: 'small',
          color: 'dark-3',
        },
        close: {
          icon: FormClose,
          size: 'medium',
          color: 'dark-1',
        },
      },
      message: {
        wrapper: {
          pad: 'large',
        },
        text: {
          size: 'medium',
          color: 'dark-3',
        },
      },
      buttons: {
        wrapper: {
          pad: {
            horizontal: 'large',
            bottom: 'large',
          },
          direction: 'row',
        },
        button: {
          margin: {
            right: 'medium',
          },
        },
      },
    },
    multiselect: {
      option: {
        width: 'full',
        direction: 'row',
        justify: 'between',
        pad: { horizontal: 'medium' },
      },
      checkbox: {
        box: {
          margin: {
            right: 'medium',
            // extend: undefined,
          },
        },
        checkmark: {
          size: `${baseSpacing * 1.2}px`,
          color: 'white',
        },
        check: {
          height: `${baseSpacing * 1.2}px`,
          width: `${baseSpacing * 1.2}px`,
          margin: 'auto',
          round: 'small',
          align: 'center',
          background: 'white',
          border: { color: 'light-6' },
          extend: props => {
            const getBackground = () => {
              switch (props.isExcluded) {
                case null:
                  return accentColors[2];
                case false:
                  return '#38C18B';
                case true:
                  return '#FC564F';
                default:
                  return accentColors[2];
              }
            };
            return {
              background: props.active ? getBackground() : 'white',
              'border-color': props.active ? 'transparent' : lightColors[5],
            };
          },
        },
      },
      chips: {
        wrapper: {
          pad: 'medium',
          direction: 'row',
          extend: props => ({
            padding: props.twoColumnLayout ? 0 : `${baseSpacing / 1.618}px`,
            'border-bottom': props.twoColumnLayout
              ? 'none'
              : '1px solid #D9DBE5',
          }),
        },
        option: {
          background: 'light-3',
          round: 'small',
          pad: {
            vertical: 'small',
            horizontal: 'medium',
          },
          margin: 'small',
          direction: 'row',
          align: 'center',
          extend: props => ({
            width: props.twoColumnLayout ? '100%' : 'auto',
            margin: props.twoColumnLayout
              ? 0
              : `${baseSpacing / (1.618 * 2)}px`,
            background: props.twoColumnLayout ? 'white' : lightColors[2],
            padding: props.twoColumnLayout
              ? `${baseSpacing / 1.618}px`
              : `${baseSpacing / (1.618 * 2)}px ${baseSpacing / 1.618}px`,
            'border-radius': props.twoColumnLayout
              ? 0
              : `${baseSpacing / (1.618 * 2)}px`,
            'border-bottom': props.twoColumnLayout
              ? '1px solid #D9DBE5'
              : 'none',
            'justify-content': props.twoColumnLayout
              ? 'space-between'
              : 'flex-start',
          }),
        },
        label: {
          color: 'dark-3',
          size: 'medium',
          weight: 600,
          margin: {
            right: 'small',
          },
          extend: props => {
            const getTextColor = () => {
              switch (props.isExcluded) {
                case false:
                  return '#38C18B';
                case true:
                  return '#FC564F';
                default:
                  return darkColors[2];
              }
            };
            return {
              color: getTextColor(),
            };
          },
        },
        icon: {
          size: 'small',
          color: 'dark-3',
        },
        clear: {
          color: 'accent-2',
          size: 'small',
        },
      },
      controls: {
        wrapper: {
          pad: 'medium',
          direction: 'row',
          height: {
            min: 'auto',
          },
          // extend: undefined,
        },
        button: {
          margin: 'small',
        },
      },
      searchbox: {
        container: {
          height: {
            min: 'xxsmall',
            max: 'xxsmall',
          },
          direction: 'row',
          align: 'center',
          background: 'light-2',
          pad: { right: 'medium', vertical: 'small' },
          extend: props => ({
            background:
              props.layout === 'double-column' ? 'white' : lightColors[1],
            'flex-direction':
              props.layout === 'double-column' ? 'row-reverse' : 'row',
            'padding-left':
              props.layout === 'double-column' ? `${baseSpacing / 1.618}px` : 0,
            'border-bottom':
              props.layout === 'double-column' ? '1px solid #D9DBE5' : 'none',
          }),
        },
        placeholder: {
          color: 'dark-5',
          size: 'medium',
        },
        icon: {
          size: 'small',
          color: 'dark-3',
        },
      },
      rightPanel: {
        border: '#D9DBE5',
        incExcHeader: {
          box: {
            direction: 'row',
            justify: 'between',
            pad: 'medium',
            background: 'background-back',
            border: {
              side: 'bottom',
              color: '#D9DBE5',
            },
          },
          text: {
            color: 'accent-2',
            size: 'medium',
            weight: 600,
          },
        },
      },
      label: undefined,
      custom: {
        wrapper: {
          direction: 'row',
        },
        textAreaWrap: {
          border: { side: 'right' },
          pad: 'large',
        },
        label: {
          weight: 600,
        },
        textAreaContainer: {
          minHeight: '140px',
          margin: { vertical: 'medium' },
        },
        actions: {
          wrapper: {
            direction: 'row',
            margin: { vertical: 'small' },
            gap: 'medium',
          },
        },
      },
    },
    paragraph: {
      small: { ...fontSizing(-1) },
      medium: { ...fontSizing(0) },
      large: { ...fontSizing(1) },
      xlarge: { ...fontSizing(2) },
      xxlarge: { ...fontSizing(4) },
    },
    radioButton: {
      border: {
        color: {
          dark: 'rgba(255, 255, 255, 0.5)',
          light: 'rgba(0, 0, 0, 0.15)',
        },
        width: '2px',
      },
      check: {
        radius: '100%',
        // color: { dark: undefined, light: undefined },
        // extend: undefined,
      },
      hover: {
        border: {
          color: {
            dark: 'white',
            light: 'black',
          },
        },
      },
      icon: {
        // size: undefined,
        // extend: undefined,
      },
      icons: {
        // circle: undefined,
      },
      gap: 'small',
      size: `${baseSpacing}px`,
    },
    rangeInput: {
      track: {
        height: '4px',
        color: css`
          ${props => rgba(normalizeColor('border', props.theme), 0.2)};
        `,
      },
      thumb: {
        // color: { dark: undefined, light: undefined },
      },
    },
    rangeSelector: {
      background: {
        invert: {
          color: 'light-4',
        },
      },
      // edge: {
      //   type: undefined,
      // },
    },
    select: {
      // background: undefined,
      background: 'dark-2',
      activeColor: lightColors[4],
      container: {
        extend: undefined,
      },
      control: {
        // extend: undefined,
        // open: undefined,
      },
      icons: {
        color: 'white',
        margin: { horizontal: 'small' },
        down: FormDown,
        // up: undefined
      },
      options: {
        container: {
          align: 'start',
          pad: 'small',
        },
        text: {
          margin: 'none',
        },
      },
      // searchInput: undefined,
      step: 20,
    },
    switch: {
      padding: `${baseSpacing * 0.625}px`,
      background: {
        active: 'accent-1',
        inactive: 'dark-3',
        disabled: {
          // active: 'dark-2',
          // inactive: undefined,
        },
      },
      text: {
        active: 'white',
        inactive: 'dark-2',
        disabled: {
          // active: 'dark-3',
          // inactive: undefined,
        },
      },
      container: {
        direction: 'row',
        gap: 'none',
        round: 'small',
        overflow: 'hidden',
      },
      disabled: undefined,
    },
    tab: {
      active: {
        color: 'text',
        // background: undefined,
      },
      // background: undefined,
      border: {
        side: 'bottom',
        size: 'small',
        color: {
          dark: 'brand',
          light: 'brand',
        },
        active: {
          color: {
            dark: 'white',
            light: 'black',
          },
        },
        hover: {
          color: {
            dark: 'white',
            light: 'black',
          },
          // extend: undefined,
        },
      },
      color: 'control',
      // extend: undefined,
      hover: {
        // background: undefined,
        // extend: undefined,
        color: {
          dark: 'white',
          light: 'black',
        },
      },
      margin: {
        vertical: 'xxsmall',
        horizontal: 'small',
      },
      pad: {
        bottom: 'xsmall',
      },
    },
    tabs: {
      // background: undefined,
      // extend: undefined,
      // gap: undefined,
      header: {
        // background: undefined,
        // extend: undefined,
      },
      panel: {
        // extend: undefined,
      },
    },
    table: {
      header: {
        align: 'start',
        pad: { horizontal: 'small', vertical: 'xsmall' },
        border: 'bottom',
        // verticalAlign: undefined,
        // background: undefined,
        // extend: undefined,
      },
      body: {
        align: 'start',
        pad: { horizontal: 'small', vertical: 'xsmall' },
        // background: undefined,
        // border: undefined,
        // extend: undefined,
      },
      // row: {
      //   hover: {
      //     background: undefined,
      //     color: undefined,
      //   },
      // },
      footer: {
        align: 'start',
        pad: { horizontal: 'small', vertical: 'xsmall' },
        border: 'top',
        // verticalAlign: undefined,
        // background: undefined,
        // extend: undefined,
      },
    },
    text: {
      xsmall: { ...fontSizing(-1.5) },
      small: { ...fontSizing(-1) },
      medium: { ...fontSizing(0) }, // 18px
      large: { ...fontSizing(1) }, // 22px
      xlarge: { ...fontSizing(2) },
      xxlarge: { ...fontSizing(4) },
    },
    textArea: {
      // extend: undefined,
      // disabled: { opacity: undefined },
    },
    textInput: {
      // extend: undefined,
      // disabled: { opacity: undefined },
    },
    video: {
      captions: {
        background: 'rgba(0, 0, 0, 0.7)',
      },
      // controls: { background: undefined },
      icons: {
        closedCaption: ClosedCaption,
        configure: Actions,
        fullScreen: Expand,
        pause: Pause,
        play: Play,
        reduceVolume: VolumeLow,
        volume: Volume,
        // color: { dark: undefined, light: undefined },
      },
      // scrubber: { track: { color: undefined } },
      scrubber: {
        color: 'light-4',
      },
    },
    tooptip: {
      background: 'dark-1',
      color: 'white',
      tipSize: '5px',
      round: 'small',
      maxWidth: '20%',
    },
    pagination: {
      background: 'white',
      round: 'small',
      border: {
        color: 'dark-6',
      },
      pad: 'xlarge',
      active: {
        color: '#e7eaf1',
      },
      icon: {
        bgColor: 'light-2',
        pad: 'xsmall',
      },
    },
    notification: {
      toast: {
        closeIcon: FormClose,
        position: 'top-right',
        zIndex: 1,
        width: '60%',
        timeout: 2000,
        icon: {
          size: 'medium',
          default: Info,
        },
        text: {
          default: {
            weight: 600,
          },
          ok: {},
          error: {},
        },
        default: {
          background: 'dark-1',
          // border: {},
          size: 'medium',
          align: 'center',
          direction: 'row',
          gap: 'small',
          justify: 'between',
          round: 'xsmall',
          elevation: 'medium',
          pad: { vertical: 'medium', horizontal: 'medium' },
          margin: { vertical: 'small', horizontal: 'large' },
        },
        ok: {
          background: 'status-ok',
          // text: {},
        },
        critical: {
          background: 'status-critical',
          // text: {},
        },
        error: {
          background: 'status-error',
          // text: {},
        },
        warning: {
          background: 'status-warning',
          // text: {},
        },
      },
    },
  });

  return deepFreeze(result);
};

export const base = generate(16);
