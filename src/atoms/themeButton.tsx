import React from 'react';
import DarkIcon from '../assets/icons/dark-mode-icon.svg?react';
import LightIcon from '../assets/icons/light-mode-icon.svg?react';
import { useTheme } from '../themeContext';

export const ThemeButton: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  const themeIcon = theme === 'lightTheme' ? <DarkIcon /> : <LightIcon />;

  return (
    <div
      className='w-14 h-14  p-2.5 cursor-pointer rounded-3xl xl:shadown flex-col justify-center items-center gap-2.5 inline-flex'
      onClick={toggleTheme}>
      {themeIcon}
    </div>
  );
};
