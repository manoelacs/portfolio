import React from 'react';
import { PageSubtitle } from '../atoms/pageSubtitle';
import { AboutMeCard } from '../atoms/aboutMeCard';
import CodeIcon from '../assets/icons/aboutme/code.svg?react';
import UIUXIcon from '../assets/icons/aboutme/ui.svg?react';

export const AboutMe = () => {
  const cards = [
    {
      title: 'Frontend Development',
      description:
        'I specialize in creating visually appealing and user-friendly interfaces using modern frontend technologies like React, Angular, and Vue.',
      icon: <CodeIcon />,
    },
    {
      title: 'Backend Development',
      description:
        'I have experience in building robust and scalable backend systems using Node.js, Express, and MongoDB.',
      icon: <CodeIcon />,
    },
    {
      title: 'UI/UX Design',
      description:
        'I create intuitive and engaging user experiences with a focus on usability and aesthetics.',
      icon: <UIUXIcon />,
    },
    {
      title: 'DevOps',
      description:
        'I ensure smooth deployment and operation of applications with a focus on automation and monitoring.',
      icon: <CodeIcon />,
    },
  ];

  const renderCards = () => {
    return cards.map((card, index) => {
      const style = index === 0 || index === 3 ? 'primary' : 'secondary';
      return <AboutMeCard key={index} style={style} {...card} />;
    });
  };

  return (
    <div className='w-full h-full items-center justify-center flex flex-col gap-y-4 px-10'>
      <div className="text-foreground text-base font-medium font-['Raleway'] leading-loose text-justify w-full">
        Hello there! I'm thrilled to welcome you to my portfolio. I am a
        passionate and versatile
        <br />
        full-stack developer with a keen interest in exploring the latest
        cutting-edge technologies.
        <br />
        My journey in the world of web development has been nothing short of
        exhilarating, and <br />I constantly strive to enhance my skills and
        embrace emerging trends in the industry.
      </div>
      <PageSubtitle subtitle='What I do!' />
      <div className='grid grid-cols-2 md:grid-cols-2 gap-4 w-[660px]'>
        {renderCards()}
      </div>
    </div>
  );
};
