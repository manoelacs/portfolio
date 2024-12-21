import React from 'react';

export const PageSubtitle = ({ subtitle }: { subtitle: string }) => {
  return (
    <div className="text-foreground text-3xl font-medium font-['Poppins'] leading-10 tracking-wide text-start w-full">
      {subtitle}
    </div>
  );
};
