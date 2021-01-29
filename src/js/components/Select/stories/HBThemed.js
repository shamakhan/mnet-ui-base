import React, { useState,useRef ,useEffect } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, MnetUIBase, Select } from 'mnet-ui-base';
import { hb } from 'mnet-ui-base-theme-hb';
import {deepMerge} from '../../../utils'
import { TextInput } from '../../TextInput';
import { SearchBorderBox } from './components/SearchBorderBox';

const StyledSearchInput = props => {
  const textInputRef = useRef();
  useEffect(() => {
    const focusTimeout = setTimeout(() => {
      textInputRef.current.focus();
    }, 300);

    return () => {
      clearTimeout(focusTimeout);
    };
  }, []);
 return (
   <SearchBorderBox>
     <TextInput {...props} plain ref={textInputRef} />
   </SearchBorderBox>
 )
}

const customRoundedTheme = deepMerge(hb, {
  select: {
    searchInput: StyledSearchInput,
  },
});

const defaultOptions = ['China', 'USA', 'Russia', 'Brazil'];
const prefix = 'Create';
const updateCreateOption = text => {
  const len = defaultOptions.length;
  if (defaultOptions[len - 1].includes(prefix)) {
    // remove Create option before adding an updated one
    defaultOptions.pop();
  }
  defaultOptions.push(`${prefix} '${text}'`);
  
};


const getRegExp = text => {
  // The line below escapes regular expression special characters:
  // [ \ ^ $ . | ? * + ( )
  const escapedText = text.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
  
  // Create the regular expression with modified value which
  // handles escaping special characters. Without escaping special
  // characters, errors will appear in the console
  return new RegExp(escapedText, 'i');
};

const SimpleSelect = ({ ...rest }) => {
  const [options, setOptions] = useState(defaultOptions);
  const [searchValue, setSearchValue] = useState('')
  const [value, setValue] = useState('');


  return (
    <MnetUIBase full theme={customRoundedTheme}>
      <Box
        pad="large"
        height="xsmall"
        width="large"
      >
        <Select
          id="select"
          name="select"
          placeholder="Select"
          value={value}
          options={options}
          onClose={() => setOptions(defaultOptions)}
          onSearch={text => {
            updateCreateOption(text);
            const exp = getRegExp(text);
            setOptions(defaultOptions.filter(o => exp.test(o)));
            setSearchValue(text);
          }}
          {...rest}
          open
          onChange={({ option }) => {
            if (option.includes(prefix)) {
              defaultOptions.pop(); // remove Create option
              defaultOptions.push(searchValue);
              setValue(searchValue);
            } else {
              setValue(option);
            }
          }}
        />
      </Box>
      <Box
        pad="large"
        height="xsmall"
        width="medium"
      >
        <Select
          id="select"
          name="select"
          placeholder="Select"
          value={value}
          options={options}
          onSearch={_ => _}
          onChange={({ option }) => setValue(option)}
          {...rest}
        />
      </Box>
      <Box
        pad="large"
        height="xsmall"
        width="small"
      >
        <Select
          id="select"
          name="select"
          placeholder="Select"
          value={value}
          options={options}
          onSearch={_ => _}
          onChange={({ option }) => setValue(option)}
          {...rest}
        />
      </Box>
    </MnetUIBase>
  );
};

// const defaultOptions = [];
// const objectOptions = [];
// for (let i = 1; i <= 200; i += 1) {
//   defaultOptions.push(`option ${i}`);
//   objectOptions.push({
//     lab: `option ${i}`,
//     val: i,
//     dis: i % 5 === 0,
//     sel: i % 13 === 0,
//   });
// }

storiesOf('Select', module)
  // Chromatic does not catch open Drop.
  // Screenshot taken before the Drop is open.
  .add('HBTheme', () => <SimpleSelect width="xxlarge" />);
