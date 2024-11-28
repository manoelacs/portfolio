import React from 'react';
import DarkIcon from '../assets/icons/dark-mode-icon.svg?react';

const Header: React.FC = () => {
  return (
    <div className='w-96 h-24 py-11 justify-between items-center inline-flex'>
      <div className='py-5 justify-start items-center gap-2.5 flex'>
        <div>
          <span className="text-black text-2xl font-normal font-['Pacifico']">
            Beatrice{' '}
          </span>
          <span className="text-[#ff9c1a] text-2xl font-normal font-['Pacifico']">
            Wambui
          </span>
          <span className="text-black text-2xl font-normal font-['Pacifico']" />
        </div>
      </div>
      <div className='w-14 h-14 p-2.5 bg-[#ebf2fa] rounded-3xl shadow flex-col justify-center items-center gap-2.5 inline-flex'>
        <DarkIcon />
      </div>
    </div>
  );
};

export default Header;
