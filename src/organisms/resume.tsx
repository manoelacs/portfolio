import React from 'react';
import { PageTitle } from '../atoms/pageTitle';
import { PageSubtitle } from '../atoms/pageSubtitle';
import { Tag } from '../atoms/tag';
import { ResumeCard } from '../atoms/resumeCard';
import EducationIcon from '../assets/icons/resume/education.svg?react';
import ExperienceIcon from '../assets/icons/resume/experience.svg?react';

export const Resume = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'VIT Vellore',
      year: '2019-2023',
    },
  ];
  const workExperience = [
    {
      role: 'Frontend Developer',
      company: 'Google',
      year: '2023-2024',
    },
    {
      role: 'Backend Developer',
      company: 'Facebook',
      year: '2024-2025',
    },
  ];

  const softSkills = [
    'Time Management',
    'Problem Solving',
    'Teamwork',
    'Communication',
    'Adaptability',
  ];
  const workSkills = [
    'React',
    'Angular',
    'Vue',
    'Node.js',
    'Express',
    'MongoDB',
    'UI/UX Design',
    'DevOps',
  ];

  const renderWorkExperience = () => {
    return workExperience.map((work, index) => {
      return (
        <ResumeCard
          key={index}
          title={work.role}
          date={work.year}
          institution={work.company}
          style={index === 0 || index === 3 ? 'primary' : 'secondary'}
        />
      );
    });
  };

  const renderEducation = () => {
    return education.map((edu, index) => {
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
    <>
      <div className='flex flex-col gap-y-6 pt-10 h-[60%] pl-[72px]'>
        <PageTitle title='Resume' />
        <div className='w-full flex-wrap flex gap-x-10 '>
          <div className='flex flex-col gap-y-4 w-fit'>
            <div className='inline-flex gap-x-2 items-center'>
              <EducationIcon />
              <PageSubtitle subtitle='Education' />
            </div>

            {renderEducation()}
          </div>
          <div className='flex flex-col gap-y-4 w-fit'>
            <div className='inline-flex gap-x-2 items-center'>
              <ExperienceIcon />
              <PageSubtitle subtitle='Experience' />
            </div>

            {renderWorkExperience()}
          </div>
        </div>
      </div>
      <div className='h-[40%] bg-background/50  flex-row  w-full flex-wrap flex gap-x-10 pl-[72px]'>
        <div className='flex flex-col gap-4 w-[288px] '>
          <PageSubtitle subtitle='Work Skill' />
          <div className=' flex flex-wrap gap-4 w-full'>
            {workSkills.map((skill, index) => (
              <Tag key={index} text={skill} />
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-4 w-[288px] '>
          <PageSubtitle subtitle='Soft Skill' />
          <div className=' flex flex-wrap gap-4 w-full'>
            {softSkills.map((skill, index) => (
              <Tag key={index} text={skill} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
