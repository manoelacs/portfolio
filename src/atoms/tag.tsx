import React from 'react';

export const Tag = ({ text }: { text: string }) => {
  return (
    <div className='h-8 px-2 py-1 bg-secondary rounded-lg justify-center items-center gap-2.5 inline-flex'>
      <div className="text-foreground text-xs font-normal font-['Raleway'] leading-normal tracking-tight">
        {text}
      </div>
    </div>
  );
};
