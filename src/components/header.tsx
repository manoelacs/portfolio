import React, { useState } from 'react';
import DarkIcon from '../assets/icons/dark-mode-icon.svg?react';

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className='w-96 h-24 py-11 justify-between items-center inline-flex bg-background dark:bg-dark-background'>
      <div className='py-5 justify-start items-center gap-2.5 flex'>
        <div>
          <span className="text-text dark:text-dark-text text-2xl font-normal font-['Pacifico']">
            Beatrice{' '}
          </span>
          <span className="text-accent text-2xl font-normal font-['Pacifico']">
            Wambui
          </span>
          <span className="text-text dark:text-dark-text text-2xl font-normal font-['Pacifico']" />
        </div>
      </div>
      <div className='w-14 h-14 p-2.5 bg-info-background dark:bg-dark-secondary rounded-3xl shadow flex-col justify-center items-center gap-2.5 inline-flex' onClick={toggleTheme}>
        <DarkIcon />
      </div>
    </div>
  );
};

export default Header;
