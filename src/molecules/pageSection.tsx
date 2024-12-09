import React from 'react';

export const PageSection = ({ children }: { children: JSX.Element }) => {
  return (
    <div className='w-[820px] h-[700px] bg-primary  rounded-2xl shadow p-8 '>
      {children}
    </div>
  );
};
