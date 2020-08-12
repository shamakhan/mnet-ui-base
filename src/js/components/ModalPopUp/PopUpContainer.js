import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import { defaultProps } from '../../default-props';
import { Box } from '../Box';
import { Text } from '../Text';
import { Button } from '../Button';
import { Heading } from '../Heading';

const PopUpContainer = ({ title, message, buttons, isLoading, onClose }) => {
  const theme = useContext(ThemeContext) || defaultProps.theme;

  return(
    <Box {...theme.modalpopup.container}>
      <Box {...theme.modalpopup.title.wrapper}>
        <Heading {...theme.modalpopup.title.text}>{title}</Heading>
      </Box>
      <Box {...theme.modalpopup.message.wrapper}>
        <Text {...theme.modalpopup.message.text}>{message}</Text>
      </Box>
      <Box {...theme.modalpopup.buttons.wrapper}>
        {buttons.map(({ label, onClick, primary }) => (
          <Button
            key={label}
            onClick={onClick || onClose}
            primary={primary || false}
            secondary={!primary || false}
            isLoading={(primary && isLoading) || false}
            background={primary ? 'accent-1' : 'accent-2'}
            {...theme.modalpopup.buttons.button}
          >
            <Text weight={600}>{label}</Text>
          </Button>
        ))}
      </Box>
    </Box>
  );
};

PopUpContainer.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  buttons: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
    primary: PropTypes.bool,
  })).isRequired,
  isLoading: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export { PopUpContainer };