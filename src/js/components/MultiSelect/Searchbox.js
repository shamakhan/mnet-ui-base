import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Search } from 'grommet-icons/icons/Search';

import { Text } from '../Text';
import { TextInput } from '../TextInput';
import { Button } from '../Button';

import { SearchWrapper } from './StyledMultiSelect';

const Searchbox = ({
  placeholder,
  value,
  onValueChange,
  layout,
  selectIcon,
  onCancel,
}) => {
  const theme = useContext(ThemeContext) || defaultProps.theme;

  const handleChange = textValue => {
    if (textValue.replace(/\s/g, '').length || !textValue.length)
      return onValueChange(textValue);
    return null;
  };

  const CollapsibleIcon = selectIcon && selectIcon.up;

  return (
    <SearchWrapper layout={layout} {...theme.multiselect.searchbox.container}>
      <TextInput
        role="search"
        aria-label="multiselect searchbox"
        plain
        value={value}
        valueLabel={<Text>value</Text>}
        onChange={event => handleChange(event.target.value)}
        placeholder={
          <Text {...theme.multiselect.searchbox.placeholder}>
            {value ? '' : placeholder}
          </Text>
        }
      />
      <Search {...theme.multiselect.searchbox.icon} />
      {selectIcon && (
        <Button role="button" onClick={onCancel} plain>
          <CollapsibleIcon
            margin={{ left: 'large', right: 'small' }}
            color="dark-1"
            size={selectIcon.size}
          />
        </Button>
      )}
    </SearchWrapper>
  );
};

export { Searchbox };
