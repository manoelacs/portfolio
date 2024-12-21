import SocialMediaButton from '../atoms/socialMediaButton';
import React from 'react';
import GithubIcon from '../assets/icons/github-icon.svg?react';
import LinkedInIcon from '../assets/icons/linkedin-icon.svg?react';

export const SocialMedia: React.FC = () => {
  const classNameIconDarkTheme = 'darkTheme:[&_path]:fill-white';
  return (
    <div className='inline-flex gap-3 items-center justify-center'>
      <SocialMediaButton
        icon={<LinkedInIcon className={classNameIconDarkTheme} />}
        url={'https://www.linkedin.com'}
      />
      <SocialMediaButton
        icon={<GithubIcon className={classNameIconDarkTheme} />}
        url={'https://www.github.com'}
      />
    </div>
  );
};
