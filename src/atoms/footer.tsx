import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className='py-5 items-center gap-2.5 flex justify-center'>
      <span className='text-text darkTheme:text-white font-normal font-poppins'>
        &copy; {new Date().getFullYear()} Manoela.
      </span>
      <span className="text-accent l font-normal font-['Pacifico']">
        All rights reserved.
      </span>
    </footer>
  );
};
