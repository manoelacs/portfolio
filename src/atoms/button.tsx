import React from 'react';

interface ButtonProps {
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
  variant?: 'gradient' | 'solid';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  onClick,
  variant = 'solid',
  className,
}) => {
  const baseClasses =
    'h-11 w-[185px] px-5 py-2.5 justify-center items-center rounded-2xl inline-flex gap-2.5 cursor-pointer transition-transform transform hover:scale-105';
  const gradientClasses =
    'bg-gradient-to-r from-[#ff9c1a] to-[#e80505] hover:from-[#e80505] hover:to-[#ff9c1a] text-[#f2f7fc]';
  const solidClasses =
    'border border-figma-orange text-foreground text-xs font-semibold font-raleway leading-tight hover:bg-figma-orange hover:text-white';

  const classes =
    variant === 'gradient'
      ? `${baseClasses} ${gradientClasses}`
      : `${baseClasses} ${solidClasses}`;

  return (
    <button className={`${classes} ${className}`} onClick={onClick}>
      {icon && <div className='icon'>{icon}</div>}
      <div className="text-xs font-semibold font-['Raleway'] leading-tight">
        {label}
      </div>
    </button>
  );
};

export default Button;
