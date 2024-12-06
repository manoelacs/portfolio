import React from 'react';

interface InfoProps {
  title: string;
  content: string;
  icon: JSX.Element;
}

const Info: React.FC<InfoProps> = ({ title, content, icon }) => {
  return (
    <div className='w-full h-16 justify-start items-center gap-2.5 inline-flex border-b border-[#e3e3e3]'>
      <div className='p-2.5  rounded-lg justify-start items-start gap-1 flex'>
        <div className='px-1.5 py-0.5 rounded-lg justify-start items-start gap-2.5 flex'>
          {icon}
        </div>
      </div>
      <div className='py-1 flex-col justify-start items-start inline-flex'>
        <div className='h-3.5 justify-center items-center inline-flex'>
          <div className="text-foreground/50 text-sm font-semibold font-['Raleway']">
            {title}
          </div>
        </div>
        <div className="text-foreground text-sm font-semibold font-['Raleway'] leading-tight">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Info;
