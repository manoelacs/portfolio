import React from 'react';

import { ThemeButton } from '../atoms/themeButton';

const Header: React.FC = () => {
  return (
    <div className='w-full h-24 py-11 justify-between items-center inline-flex md:px-0  px-3'>
      <div className='py-5 justify-start items-center gap-2.5 flex'>
        <div>
          <span className="text-foreground text-xl xl:text-2xl font-normal font-['Pacifico']">
            Manoela C.{' '}
          </span>
          <span className="text-figma-orange text-xl xl:text-2xl font-normal font-['Pacifico']">
            Dos Santos
          </span>
        </div>
      </div>
      <ThemeButton />
    </div>
  );
};

export default Header;
