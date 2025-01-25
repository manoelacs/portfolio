import React from 'react';
import { useMediaQuery } from 'react-responsive';

interface InfoProps {
  title: string;
  content: string;
  icon: JSX.Element;
}

const Info: React.FC<InfoProps> = ({ title, content, icon }) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const InfoMobile = (
    <div className='w-full h-fit justify-start items-center gap-x-2.5 inline-flex '>
      <div className='h-fit w-5 inline-flex justify-center items-center'>
        {icon}
      </div>

      <div className='flex-col justify-center items-start inline-flex'>
        <div className='text-foreground text-xs sm:text-sm font-semibold font-raleway leading-tight w-fit '>
          {content}
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return InfoMobile;
  } else {
    return (
      <div className='w-full h-16 justify-start items-center gap-2.5 inline-flex border-b border-[#e3e3e3]'>
        {icon}
        <div className='flex-col justify-center items-start inline-flex'>
          <div className='text-foreground/50 text-sm font-semibold font-raleway'>
            {title}
          </div>

          <div className='text-foreground text-sm font-semibold font-raleway leading-tight w-fit '>
            {content}
          </div>
        </div>
      </div>
    );
  }
};

export default Info;
