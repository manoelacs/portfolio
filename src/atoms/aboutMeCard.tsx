import React from 'react';

export const AboutMeCard = ({
  title,
  description,
  style,
  icon,
}: {
  title: string;
  description: string;
  style: 'primary' | 'secondary';
  icon: JSX.Element;
}) => {
  const containerStyle =
    style === 'primary'
      ? 'bg-figma-orangeLight darkTheme:bg-figma-grayMedium'
      : 'bg-background';

  return (
    <div
      className={`h-40 p-6 flex-col justify-start items-start flex gap-y-4 ${containerStyle} w-80 rounded-2xl`}>
      <div className='justify-start items-center gap-2.5 inline-flex'>
        {icon}
        <span
          className={`text-foreground text-xl font-semibold font-['Poppins'] leading-tight`}>
          {title}
        </span>
      </div>
      <div className="text-foreground text-sm font-normal font-['Raleway'] leading-tight tracking-tight text-justify">
        {description}
      </div>
    </div>
  );
};
