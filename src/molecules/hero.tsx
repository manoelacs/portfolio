import Info from '../atoms/info';
import React from 'react';

import PhoneIcon from '../assets/icons/phone-icon.svg?react';
import EmailIcon from '../assets/icons/email-icon.svg?react';
import LocationIcon from '../assets/icons/location-icon.svg?react';
import DownloadIcon from '../assets/icons/download-icon.svg?react';
import Button from '../atoms/button';
import { SocialMedia } from './socialMedia';
import myResume from '../config/myResume.json';
import profileImage from '../assets/images/profile-image.jpg';
import ProfileImage from '@src/atoms/profileImage';

export const Hero = () => {
  const { info } = myResume;

  const NameAndProfession = (
    <div className=' text-center'>
      <div className="text-foreground text-xl lg:text-3xl font-bold font-['Raleway'] leading-7 lg:leading-9">
        {info.name}
      </div>
      <div className="text-foreground/60 text-xs lg:text-base font-medium font-['Raleway'] leading-8 lg:leading-10">
        {info.profession}
      </div>
    </div>
  );

  return (
    <div className='w-full flex flex-col xl:w-96 lg:relative items-center lg:items-center lg:h-[700px] bg-primary rounded-2xl shadow px-6 py-8 '>
      <ProfileImage src={profileImage} alt='profile' />

      <div className='lg:pt-[95px] pt-0  flex flex-col items-center'>
        {NameAndProfession}
        <SocialMedia />
      </div>

      <div className='mt-8 flex flex-col lg:items-center items-start  gap-4 p-0 lg:p-6 justify-start rounded-2xl bg-background'>
        <Info title={'Phone'} icon={<PhoneIcon />} content={info.phone} />
        <Info title='Email' icon={<EmailIcon />} content={info.email} />
        <Info
          title='Location'
          icon={<LocationIcon />}
          content={info.location}
        />
        <Button
          label='Download Resume'
          icon={<DownloadIcon />}
          onClick={() => window.open(info.resume, '_blank')}
          variant='solid'
        />
      </div>
    </div>
  );
};

export default Hero;
