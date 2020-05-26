import React, { useMemo, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Accordion, AccordionPanel, Anchor, Box, Button, Calendar, CheckBox, Clock, DataTable, FormField, Grid, Heading, Menu, Paragraph, RadioButtonGroup, RangeInput, RangeSelector, Select, Stack, Tab, Tabs, Text, TextArea, TextInput, MnetUIBase } from 'mnet-ui-base';
import { mnet, dark } from 'mnet-ui-base/themes';
import { generate } from 'mnet-ui-base/themes/base';
import { deepMerge } from 'mnet-ui-base/utils';
import { neo } from 'mnet-ui-base-theme-neo';
var themes = {
  neo: neo,
  dark: dark,
  mnet: mnet
};

var Components = function Components() {
  var _useState = useState(16),
      baseSize = _useState[0],
      setBaseSize = _useState[1];

  var _useState2 = useState(true),
      checkBox = _useState2[0],
      setCheckBox = _useState2[1];

  var _useState3 = useState('RadioButton 1'),
      radioButton = _useState3[0],
      setRadioButton = _useState3[1];

  var _useState4 = useState([1, 2]),
      rangeSelector = _useState4[0],
      setRangeSelector = _useState4[1];

  var _useState5 = useState(),
      themeMode = _useState5[0],
      setThemeMode = _useState5[1];

  var _useState6 = useState('mnet'),
      themeName = _useState6[0],
      setThemeName = _useState6[1];

  var _useState7 = useState(undefined),
      background = _useState7[0],
      setBackground = _useState7[1];

  var _useState8 = useState(0),
      tabIndex = _useState8[0],
      setTabIndex = _useState8[1];

  var theme = useMemo(function () {
    return deepMerge(generate(baseSize), themes[themeName]);
  }, [baseSize, themeName]);
  var themeCanMode = useMemo(function () {
    return theme && theme.global.colors.background && theme.global.colors.background.dark;
  }, [theme]);
  var content = [React.createElement(Box, {
    key: "type",
    align: "start",
    gap: "small"
  }, React.createElement(Heading, {
    margin: {
      top: 'none'
    }
  }, "Heading"), React.createElement(Paragraph, null, "Paragraph"), React.createElement(Text, null, "Text"), React.createElement(Anchor, {
    href: ""
  }, "Anchor"), React.createElement(Menu, {
    label: "Menu",
    items: [{
      label: 'One',
      onClick: function onClick() {}
    }, {
      label: 'Two'
    }]
  }), React.createElement(Button, {
    label: "Button",
    onClick: function onClick() {}
  }), React.createElement(Button, {
    plain: true,
    onClick: function onClick() {}
  }, React.createElement(Text, null, "plain button"))), React.createElement(Box, {
    key: "input",
    gap: "small"
  }, React.createElement(Select, {
    placeholder: "Select",
    options: ['One', 'Two'],
    onChange: function onChange() {}
  }), React.createElement(CheckBox, {
    name: "check",
    checked: checkBox,
    label: "CheckBox",
    onChange: function onChange(event) {
      return setCheckBox(event.target.checked);
    }
  }), React.createElement(CheckBox, {
    name: "toggle",
    toggle: true,
    checked: checkBox,
    label: "CheckBox toggle",
    onChange: function onChange(event) {
      return setCheckBox(event.target.checked);
    }
  }), React.createElement(RadioButtonGroup, {
    name: "radio",
    options: ['RadioButton 1', 'RadioButton 2'],
    value: radioButton,
    onChange: function onChange(event) {
      return setRadioButton(event.target.value);
    }
  }), React.createElement(TextInput, {
    placeholder: "TextInput"
  }), React.createElement(TextArea, {
    placeholder: "TextArea"
  }), React.createElement(RangeInput, {
    value: 24,
    onChange: function onChange() {}
  }), React.createElement(Stack, null, React.createElement(Box, {
    direction: "row",
    justify: "between"
  }, [0, 1, 2, 3].map(function (value) {
    return React.createElement(Box, {
      key: value,
      pad: "small"
    }, React.createElement(Text, {
      style: {
        fontFamily: 'monospace'
      }
    }, value));
  })), React.createElement(RangeSelector, {
    direction: "horizontal",
    invert: false,
    min: 0,
    max: 3,
    size: "style={{ width: '100vw', height: '100vh', overflow: 'auto' }}",
    round: "small",
    values: rangeSelector,
    onChange: function onChange(values) {
      return setRangeSelector(values);
    }
  })), React.createElement(FormField, {
    label: "FormField"
  }, React.createElement(TextInput, {
    placeholder: "TextInput"
  }))), React.createElement(Box, {
    key: "time",
    gap: "medium"
  }, React.createElement(Calendar, {
    size: "small"
  }), React.createElement(Clock, {
    type: "digital",
    className: "chromatic-ignore"
  }), React.createElement(Clock, {
    className: "chromatic-ignore"
  })), React.createElement(Box, {
    key: "dataTable",
    alignSelf: "start"
  }, React.createElement(DataTable, {
    columns: [{
      property: 'name',
      header: 'Name'
    }, {
      property: 'color',
      header: 'Color'
    }],
    data: [{
      name: 'Alan',
      color: 'blue'
    }, {
      name: 'Chris',
      color: 'purple'
    }, {
      name: 'Eric',
      color: 'orange'
    }],
    sortable: true
  })), React.createElement(Box, {
    key: "accordion"
  }, React.createElement(Accordion, null, React.createElement(AccordionPanel, {
    label: "Accordion Panel 1"
  }, React.createElement(Box, {
    pad: "small"
  }, React.createElement(Text, null, "Accordion panel 1 content"))), React.createElement(AccordionPanel, {
    label: "Accordion Panel 2"
  }, React.createElement(Box, {
    pad: "small"
  }, React.createElement(Text, null, "Accordion panel 2 content"))))), React.createElement(Box, {
    key: "tabs"
  }, React.createElement(Tabs, {
    activeIndex: tabIndex,
    onActive: function onActive(index) {
      return setTabIndex(index);
    }
  }, React.createElement(Tab, {
    title: "Tab 1"
  }, React.createElement(Box, {
    pad: "small"
  }, React.createElement(Text, null, "Tab 1 content"))), React.createElement(Tab, {
    title: "Tab 2"
  }, React.createElement(Box, {
    pad: "small"
  }, React.createElement(Text, null, "Tab 2 content")))))];
  return React.createElement("div", {
    style: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement(MnetUIBase, {
    theme: mnet,
    style: {
      flex: '0 0 auto'
    }
  }, React.createElement(Box, {
    direction: "row-responsive",
    gap: "medium",
    justify: "end",
    align: "center",
    margin: "small"
  }, React.createElement(Box, {
    basis: "small"
  }, React.createElement(Select, {
    plain: true,
    size: "small",
    options: Object.keys(themes),
    value: themeName,
    onChange: function onChange(event) {
      return setThemeName(event.option);
    }
  })), themeCanMode && React.createElement(CheckBox, {
    label: "dark",
    checked: themeMode === 'dark',
    onChange: function onChange() {
      return setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
    }
  }), !themeCanMode && React.createElement(Box, {
    basis: "small"
  }, React.createElement(Select, {
    plain: true,
    placeholder: "background",
    size: "small",
    options: ['default', 'dark-1', 'light-1'],
    value: background,
    onChange: function onChange(event) {
      return setBackground(event.option);
    }
  })), React.createElement(Box, {
    basis: "small"
  }, React.createElement(RangeInput, {
    min: 16,
    max: 36,
    step: 2,
    value: baseSize,
    onChange: function onChange(event) {
      return setBaseSize(parseInt(event.target.value, 10));
    }
  })), React.createElement(Text, {
    size: "small"
  }, baseSize + "px base spacing"))), React.createElement(MnetUIBase, {
    theme: theme,
    themeMode: themeMode,
    style: {
      flex: '1 1'
    }
  }, React.createElement(Box, {
    fill: true,
    pad: "medium",
    background: background || theme.global.colors.background,
    overflow: "auto"
  }, Grid.available ? React.createElement(Grid, {
    columns: "small",
    gap: "medium"
  }, content) : React.createElement(Box, {
    direction: "row",
    wrap: true,
    align: "start",
    gap: "large"
  }, content))));
};

storiesOf('All', module).add('All', function () {
  return React.createElement(Components, null);
});