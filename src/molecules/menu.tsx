import React from 'react';

import { MenuItem } from '../atoms/menuItem';
import HomeIcon from '../assets/icons/home-icon.svg?react';
import ResumeIcon from '../assets/icons/resume-icon.svg?react';
import ContactIcon from '../assets/icons/contact-icon.svg?react';
import WorkIcon from '../assets/icons/work-icon.svg?react';

export const Menu = () => {
  const className = '';
  return (
    <div className='w-96 h-fit bg-m rounded-2xl shadow flex flex-row gap-x-4 cursor-pointer items-center p-4 darkTheme:bg-figma-grayLight'>
      <MenuItem
        title='Home'
        icon={<HomeIcon className={className} />}
        onClick={() => console.log('Home clicked')}
        isActive={true}
      />
      <MenuItem
        title='Resume'
        icon={<ResumeIcon className={className} />}
        onClick={() => console.log('Resume clicked')}
        isActive={false}
      />
      <MenuItem
        title='Word'
        icon={<WorkIcon className={className} />}
        onClick={() => console.log('work clicked')}
        isActive={false}
      />
      <MenuItem
        title='Contact'
        icon={<ContactIcon className={className} />}
        onClick={() => console.log('contact clicked')}
        isActive={false}
      />
    </div>
  );
};
