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

export const Hero = () => {
  const { info } = myResume;

  return (
    <div className='w-96 relative h-[700px] bg-primary rounded-2xl shadow px-6'>
      <img
        className='w-48 h-48 left-[92px] top-[-80px] absolute rounded-2xl shadow'
        src={profileImage}
        alt='profile'
        
      />

      <div className='pt-[60px]'>
        <div className='mt-24 text-center'>
          <div className="text-foreground text-3xl font-bold font-['Raleway'] leading-9">
            {info.name}
          </div>
          <div className="text-foreground/60 text-base font-medium font-['Raleway'] leading-10">
            {info.profession}
          </div>
        </div>
        <SocialMedia />

        <div className='mt-8 w-full flex flex-col gap-4 px-8 py-4  justify-start rounded-2xl bg-background'>
          <Info title='Phone' content={info.phone} icon={<PhoneIcon />} />
          <Info title='Email' content={info.email} icon={<EmailIcon />} />
          <Info
            title='Location'
            content={info.location}
            icon={<LocationIcon />}
          />
          <div className='inline-flex w-full justify-center items-center'>
            <Button
              icon={<DownloadIcon />}
              label={'Download  Resume'}
              onClick={function (): void {
                throw new Error('Function not implemented.');
              }}
              variant='gradient'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
