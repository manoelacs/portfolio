import React from 'react';

interface ContactCardProps {
  title: string;
  content: string;
  icon: JSX.Element;
  type: 'primary' | 'secondary';
}

export const ContactCard: React.FC<ContactCardProps> = ({
  title,
  content,
  icon,
  type,
}) => {
  const typeClass =
    type === 'primary' ? 'bg-figma-orangeLight text-black' : 'bg-muted';
  const textColor = type === 'primary' ? 'text-black' : 'text-foreground';

  return (
    <div
      className={`w-[333px] h-36 rounded-2xl p-5 flex flex-col  ${typeClass}`}>
      <div className='inline-flex gap-x-2 w-full items-center h-fit'>
        {icon}
        <span
          className={`${textColor} text-base font-medium font-['Poppins'] leading-10 tracking-tight`}>
          {title}
        </span>
      </div>
      <span
        className={`${textColor}/90 text-sm font-medium font-['Poppins'] tracking-tight w-fit ml-4`}>
        {content}
      </span>
    </div>
  );
};
