import React from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  id: string;
  name: string;
  required?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  id,
  name,
  required = false,
}) => {
  return (
    <div className='h-8 flex-col justify-start items-start  inline-flex  w-full mb-3'>
      <span
        className="text-foreground text-base font-semibold font-['Raleway'] leading-tight 
      tracking-tight">
        {label}:
      </span>

      <input
        type={type}
        id={id}
        name={name}
        required={required}
        className='w-full h-fit  border-b border-spacing-2 border-muted-foreground
        bg-transparent focus-within:outline-none focus-within:border-figma-orange focus-within:border-b-2'
      />
    </div>
  );
};

export const TextField: React.FC<InputFieldProps> = ({
  label,
  id,
  name,
  required = false,
}) => {
  return (
    <div className='h-fit flex-col justify-start items-start inline-flex w-full'>
      <span className="text-foreground text-base font-semibold font-['Raleway'] leading-tight tracking-tight">
        {label}:
      </span>

      <textarea
        id={id}
        name={name}
        required={required}
        className='w-full h-10  border-b border-spacing-2 border-muted-foreground 
        bg-transparent focus-within:outline-none focus-within:border-figma-orange focus-within:border-b-2'
      />
    </div>
  );
};
