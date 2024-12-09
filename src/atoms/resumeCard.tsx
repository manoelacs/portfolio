import React from 'react';

export const ResumeCard = ({
  title,
  date,
  institution,
  style,
}: {
  title: string;
  date: string;
  institution: string;
  style: 'primary' | 'secondary';
}) => {
  const containerStyle =
    style === 'primary'
      ? 'bg-figma-orangeLight darkTheme:bg-figma-grayMedium'
      : 'bg-figma-orangeLight/50 darkTheme:bg-figma-grayMedium/50';
  return (
    <div
      className={`h-fit w-[288px] pl-6 py-2 flex-col justify-start items-start gap-2.5 inline-flex ${containerStyle} rounded-lg`}>
      <span className="text-foreground/50 text-sm font-normal font-['Raleway']">
        {date}
      </span>
      <span className="text-foreground text-sm font-semibold font-['Raleway']">
        {title}
      </span>
      <span className="text-foreground text-sm font-medium font-['Raleway']">
        {institution}
      </span>
    </div>
  );
};
