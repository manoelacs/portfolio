import React from 'react';
import { PageSubtitle } from '../atoms/pageSubtitle';
import { AboutMeCard } from '../atoms/aboutMeCard';
import CodeIcon from '../assets/icons/aboutme/code.svg?react';
import UIUXIcon from '../assets/icons/aboutme/ui.svg?react';
import myResume from '../config/myResume.json';

import { PageLayout } from './pageLayout';

const mapIconsToTitle: { [key: string]: JSX.Element } = {
  'Frontend Development': <CodeIcon />,
  'Backend Development': <CodeIcon />,
  'UI/UX Design': <UIUXIcon />,
  DevOps: <CodeIcon />,
  'Flutter Development': <CodeIcon />,
  'React Development': <CodeIcon />,
};

export const AboutMe = () => {
  const { aboutMe } = myResume;

  const renderCards = () => {
    return aboutMe.whatIDo.map((card, index) => {
      const style = index === 0 || index === 3 ? 'primary' : 'secondary';
      return (
        <AboutMeCard
          key={index}
          style={style}
          {...card}
          icon={mapIconsToTitle[card.title]}
        />
      );
    });
  };

  return (
    <PageLayout pageTitle='About Me'>
      <div className='w-full h-full  flex flex-col gap-y-4   md:px-10 xl:items-center xl:justify-center'>
        <div className="text-foreground tx-sm md:text-base font-medium font-['Raleway'] leading-loose text-justify w-full">
          {aboutMe.description}
        </div>
        <PageSubtitle subtitle={aboutMe.whatIDoTitle} />
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-4 xl:w-[660px] w-fit'>
          {renderCards()}
        </div>
      </div>
    </PageLayout>
  );
};
