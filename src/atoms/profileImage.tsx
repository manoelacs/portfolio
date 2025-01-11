import React from 'react';

interface ProfileImageProps {
  src: string;
  alt: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt }) => {
  return (
    <img
      className='w-32 h-32 md:w-48 md:h-48 left-1/2 transform -translate-x-1/2  md:top-[-95px] absolute rounded-2xl shadow'
      src={src}
      alt={alt}
    />
  );
};

export default ProfileImage;
