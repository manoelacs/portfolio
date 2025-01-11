import React from 'react';

export const PageTitle = ({ title }: { title: string }) => {
  return (
    <div className='inline-flex items-center justify-start gap-x-8 w-full'>
      <span className="text-foreground text-4xl font-medium font-['Poppins'] leading-10 tracking-wide uppercase">
        {title}
      </span>
      <div className='xl:w-[252px] h-[3px] bg-gradient-to-r from-figma-orange to-figma-redOrange' />
    </div>
  );
};
