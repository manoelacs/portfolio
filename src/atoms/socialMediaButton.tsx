import React from 'react';

interface SocialMediaButtonProps {
  icon: React.ReactNode;
  url: string;
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({ icon, url }) => {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='h-16 px-6 py-5 bg-secondary rounded-lg flex-col justify-start items-start gap-2 inline-flex'>
      <div className='p-0.5 flex-col justify-start items-start gap-2 flex'>
        {icon}
      </div>
    </a>
  );
};

export default SocialMediaButton;
