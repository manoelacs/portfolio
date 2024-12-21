import React from 'react';
import { PageSubtitle } from '../atoms/pageSubtitle';
import { Tag } from '../atoms/tag';
import { ResumeCard } from '../atoms/resumeCard';
import EducationIcon from '../assets/icons/resume/education.svg?react';
import ExperienceIcon from '../assets/icons/resume/experience.svg?react';

import myResume from '../config/myResume.json';

import { PageLayout } from './pageLayout';

export const Resume = () => {
  const { resume } = myResume;

  const renderWorkExperience = () => {
    return resume.experience.map((work, index) => {
      return (
        <ResumeCard
          key={index}
          title={work.title}
          date={work.date}
          institution={work.company}
          style={index === 0 || index === 3 ? 'primary' : 'secondary'}
        />
      );
    });
  };

  const renderEducation = () => {
    return resume.education.map((edu, index) => {
      return (
        <ResumeCard
          key={index}
          title={edu.degree}
          date={edu.year}
          institution={edu.institution}
          style={index === 1 || index === 2 ? 'primary' : 'secondary'}
        />
      );
    });
  };

  return (
    <PageLayout pageTitle='Resume'>
      <div>
        <div className='flex flex-col gap-y-6 pt-10 h-[70%] pl-[72px]'>
          <div className='w-full flex-wrap flex gap-x-10 '>
            <div className='flex flex-col gap-y-4 w-fit'>
              <div className='inline-flex gap-x-2 items-center'>
                <EducationIcon />
                <PageSubtitle subtitle={resume.educationTitle} />
              </div>

              {renderEducation()}
            </div>
            <div className='flex flex-col gap-y-4 w-fit'>
              <div className='inline-flex gap-x-2 items-center'>
                <ExperienceIcon />
                <PageSubtitle subtitle={resume.experienceTitle} />
              </div>

              {renderWorkExperience()}
            </div>
          </div>
        </div>
        <div className='h-[30%] bg-background/50  flex-row  w-full flex-wrap flex gap-x-10 pl-[72px]'>
          <div className='flex flex-col gap-4 w-[288px] '>
            <PageSubtitle subtitle={resume.technicalSkills.title} />
            <div className=' flex flex-wrap gap-4 w-full'>
              {resume.technicalSkills.skills.map((skill, index) => (
                <Tag key={index} text={skill} />
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-4 w-[288px] '>
            <PageSubtitle subtitle={resume.softSkills.title} />
            <div className=' flex flex-wrap gap-4 w-full'>
              {resume.softSkills.skills.map((skill, index) => (
                <Tag key={index} text={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
