import React from 'react';

export const PageSection = ({
  children,
  className,
}: {
  children: JSX.Element;
  className?: string;
}) => {
  return (
    <div
      className={`w-[820px] h-[700px] bg-primary  rounded-2xl shadow p-8 ${className}`}>
      {children}
    </div>
  );
};
