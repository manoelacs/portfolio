import React from 'react';

export const MenuItem = ({ title, icon, onClick, isActive }: MenuItemProps) => {
  const textClassName =
    'text-primary-foreground text-xs font-semibold font-raleway leading-tight group-hover:darkTheme:text-white';

  const textActiveClassName =
    'text-white group-hover:text-white text-xs font-semibold font-raleway leading-tight';

  const activeItem =
    'bg-gradient-to-r from-figma-orange to-figma-redOrange [&_path]:fill-white text-white';

  const inactiveItem =
    'bg-primary hover:bg-figma-background hover:text-foreground  [&_path]:fill-foreground ';

  const containerClassName = `w-20 [&_path]:fill-opacity-1 h-20 rounded-2xl flex flex-col p-4 gap-y-1 items-center justify-center group 
        ${isActive ? activeItem : inactiveItem}`;

  return (
    <div onClick={onClick} className={containerClassName}>
      {icon}
      <span className={isActive ? textActiveClassName : textClassName}>
        {title}
      </span>
    </div>
  );
};

interface MenuItemProps {
  title: string;
  icon: JSX.Element;
  onClick?: () => void;
  isActive?: boolean;
}
