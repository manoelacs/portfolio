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
import { useMediaQuery } from 'react-responsive';

export const Hero = () => {
  const { info } = myResume;

  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const isTablet = useMediaQuery({ maxWidth: 768 });

  const heroInfo = (
    <div className='mt-8 flex flex-col lg:items-center items-start  gap-4 p-0 lg:p-6 justify-start rounded-2xl bg-background'>
      <Info title={'Phone'} icon={<PhoneIcon />} content={info.phone} />
      <Info title='Email' icon={<EmailIcon />} content={info.email} />
      <Info title='Location' icon={<LocationIcon />} content={info.location} />
      <Button
        label='Download Resume'
        icon={<DownloadIcon />}
        onClick={() => window.open(info.resume, '_blank')}
        variant='gradient'
      />
    </div>
  );

  const NameAndProfession = (
    <div className=' text-center'>
      <div className="text-foreground text-base sm:text-xl xl:text-3xl font-bold font-['Raleway'] xl:leading-9 leading-6">
        {info.name}
      </div>
      <div className="text-foreground/60 text-sm  sm:text-xl xl:text-base font-medium font-['Raleway'] leading-8 xl:leading-10">
        {info.profession}
      </div>
    </div>
  );

  const heroInfoTablet = (
    <div className='w-full flex flex-row items-start bg-primary rounded-2xl shadow   justify-center '>
      <ProfileImage src={profileImage} alt='profile' className='' />

      <div className='flex flex-col items-center justify-start gap-4 w-full pb-6'>
        <div className=' pt-0  flex flex-col items-center'>
          {NameAndProfession}
          <SocialMedia />
        </div>
        <div className='flex flex-col sm:flex-row items-end  gap-10 justify-start border-[#e3e3e3] border-t py-4 w-fit'>
          <div className='flex flex-col items-start gap-4'>
            <Info title={'Phone'} icon={<PhoneIcon />} content={info.phone} />
            <Info title='Email' icon={<EmailIcon />} content={info.email} />
            <Info
              title='Location'
              icon={<LocationIcon />}
              content={info.location}
            />
          </div>

          <Button
            label='Download Resume'
            icon={<DownloadIcon />}
            onClick={() => window.open(info.resume, '_blank')}
            variant='gradient'
            isMobile={isTablet}
          />
        </div>
      </div>
    </div>
  );

  const heroInfoMobile = (
    <div className='w-full flex flex-col items-start bg-primary  shadow p-4   justify-center '>
      <div className='flex flex-row items-center justify-start gap-4 w-full pb-6'>
        <ProfileImage src={profileImage} alt='profile' className='w-24 h-24' />
        <div className=' pt-0  flex flex-col items-center'>
          {NameAndProfession}
          <SocialMedia />
        </div>
      </div>
      <div className='flex flex-row   gap-2  border-[#e3e3e3] border-t py-4 w-full justify-between'>
        <div className='flex flex-col items-start gap-2'>
          <Info title={'Phone'} icon={<PhoneIcon />} content={info.phone} />
          <Info title='Email' icon={<EmailIcon />} content={info.email} />
          <Info
            title='Location'
            icon={<LocationIcon />}
            content={info.location}
          />
        </div>

        <Button
          label='Download Resume'
          icon={<DownloadIcon />}
          onClick={() => window.open(info.resume, '_blank')}
          variant='gradient'
          isMobile={isTablet}
        />
      </div>
    </div>
  );

  if (isMobile) {
    return heroInfoMobile;
  }

  if (!isMobile && isTablet) {
    return heroInfoTablet;
  }

  return (
    <div className='w-full flex flex-col xl:w-96 lg:relative items-center lg:items-center lg:h-[700px] bg-primary rounded-2xl shadow px-6 py-8 '>
      <ProfileImage
        src={profileImage}
        alt='profile'
        className='w-48 h-48 left-1/2 transform -translate-x-1/2 top-[-95px] absolute rounded-2xl shadow'
      />

      <div className='lg:pt-[95px] pt-0  flex flex-col items-center'>
        {NameAndProfession}
        <SocialMedia />
      </div>
      {heroInfo}
    </div>
  );
};

export default Hero;
