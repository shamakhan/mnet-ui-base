import React, { useCallback } from 'react';
import { TextArea } from '../TextArea';

import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';
import SelectedList from './SelectedList';

const Domain = ({ value, onValueChange, renderSearch, searchPlaceholder }) => {
  const { isInclude, items } = value;
  const [textAreaValue, setTextAreaValue] = React.useState('');

  // eslint-disable-next-line no-shadow
  const setItems = isInclude => {
    if (textAreaValue.length) {
      const values = textAreaValue.trim().split('\n');
      onValueChange({
        ...value,
        isInclude,
        items: [...items, ...values],
      });
      setTextAreaValue('');
    }
  };

  const removeItem = useCallback(
    item => {
      const lists = [...items];
      const index = lists.indexOf(item);
      lists.splice(index, 1);
      if (!lists.length) {
        onValueChange({ ...value, isInclude: null, items: [...lists] });
        return;
      }
      onValueChange({ ...value, items: [...lists] });
    },
    [value, items, onValueChange],
  );

  return (
    <Box direction="row">
      <Box border={{ side: 'right' }} pad="large">
        <Text weight={600}>Enter one domain per line</Text>
        <Box width="medium" height="medium" margin={{ vertical: 'medium' }}>
          <TextArea
            value={textAreaValue}
            onChange={event => setTextAreaValue(event.target.value)}
            fill
          />
        </Box>
        <Box direction="row" margin={{ vertical: 'small' }} gap="medium">
          {(isInclude || isInclude === null) && (
            <Button primary onClick={() => setItems(true)}>
              INCLUDE
            </Button>
          )}
          {(isInclude === false || isInclude === null) && (
            <Button secondary color="brand" onClick={() => setItems(false)}>
              EXCLUDE
            </Button>
          )}
        </Box>
      </Box>
      <SelectedList
        selectedItems={items}
        isInclude={isInclude}
        onValueChange={onValueChange}
        renderSearch={renderSearch}
        searchPlaceholder={searchPlaceholder}
        onRemove={removeItem}
      />
    </Box>
  );
};

export default Domain;
