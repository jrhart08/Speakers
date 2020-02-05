/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MoonIcon from '@material-ui/icons/Brightness4';
import SunIcon from '@material-ui/icons/Brightness5';
import { useThemeContext, themes } from '../../theme';

const ToggleThemeButton = (props) => {
  const { theme, toggleTheme } = useThemeContext();

  const Icon = theme === themes.DARK ? SunIcon : MoonIcon;

  return (
    <IconButton {...props} onClick={toggleTheme}>
      <Icon />
    </IconButton>
  );
};
export default ToggleThemeButton;
