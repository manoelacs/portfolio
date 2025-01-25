import React from 'react';

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt, className }) => {
  return (
    <img
      className={` ${className} rounded-full w-32 h-32 lg:w-40 lg:h-40 object-cover `}
      src={src}
      alt={alt}
    />
  );
};

export default ProfileImage;
