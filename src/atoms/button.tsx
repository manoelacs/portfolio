import React from 'react';

interface ButtonProps {
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, icon, onClick }) => {
  return (
    <div
      className='h-11 w-[185px] px-5 py-2.5 bg-gradient-to-r from-[#ff9c1a] to-[#e80505]  justify-center  items-center rounded-2xl inline-flex  gap-2.5 cursor-pointer'
      onClick={onClick}>
      {icon && <div className='icon'>{icon}</div>}
      <div className="text-[#f2f7fc] text-xs font-semibold font-['Raleway'] leading-tight">
        {label}
      </div>
    </div>
  );
};

export default Button;
