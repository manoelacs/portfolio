import React from 'react';

import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@src/utils';
import { useMediaQuery } from 'react-responsive';

export const MenuItem = ({
  title,
  icon,
  onClick,
  color,
  text,
}: MenuItemProps) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const renderMobile = () => {
    return (
      <div>
        <div
          onClick={onClick}
          className={cn(
            'w-10 h-10 rounded-2xl flex justify-center items-center',
            menuMobileItemVariants({ color, text })
          )}>
          {icon}
        </div>
        <span
          className={cn(
            'text-xs font-semibold font-raleway leading-tight',
            menuMobileItemVariants({ text })
          )}>
          {title}
        </span>
      </div>
    );
  };

  if (isMobile) {
    return renderMobile();
  }
  return (
    <div onClick={onClick} className={cn(menuItemVariants({ color, text }))}>
      {icon}
      <span className={cn('text-xs font-semibold font-raleway leading-tight')}>
        {title}
      </span>
    </div>
  );
};

const menuItemVariants = cva(
  'w-16 [&_path]:fill-opacity-1 h-16 rounded-2xl flex flex-col p-1 md:w-20 xl:h-20 xl:p-4 gap-y-1 items-center justify-center group transition-transform transform hover:scale-105',
  {
    variants: {
      color: {
        primary:
          'bg-gradient-to-r from-figma-orange to-figma-redOrange [&_path]:fill-white text-white',
        secondary:
          'xl:bg-primary hover:bg-secondary hover:text-foreground  [&_path]:fill-foreground',
      },
      text: {
        primary: 'text-white ',
        secondary: 'text-foreground group-hover:text-white',
      },
    },
    defaultVariants: {
      color: 'secondary',
      text: 'secondary',
    },
  }
);

const menuMobileItemVariants = cva('', {
  variants: {
    color: {
      primary: 'bg-secondary [&_path]:fill-figma-orange text-white',
      secondary: 'bg-secondary [&_path]:fill-foreground',
    },
    text: {
      primary: 'text-figma-orange',
      secondary: 'text-foreground',
    },
  },
  defaultVariants: {
    color: null,
    text: null,
  },
});

type MenuItemProps = {
  title: string;
  icon: JSX.Element;
  onClick?: () => void;
} & VariantProps<typeof menuItemVariants>;
