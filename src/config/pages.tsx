import React from 'react';

export type Pages = 'Home' | 'Resume' | 'Contact' | 'Portfolio';

import HomeIcon from '../assets/icons/home-icon.svg?react';
import ResumeIcon from '../assets/icons/resume-icon.svg?react';
import ContactIcon from '../assets/icons/contact-icon.svg?react';
import WorkIcon from '../assets/icons/work-icon.svg?react';

import { AboutMe } from '../organisms/AboutMe';
import { Resume } from '../organisms/resume';
import { Contact } from '../organisms/contact';
import { Portfolio } from '../organisms/portfolio';

export const pagesNames: Pages[] = ['Home', 'Resume', 'Contact', 'Portfolio'];

export const Router: Record<Pages, JSX.Element> = {
  Home: <AboutMe />,
  Resume: <Resume />,
  Contact: <Contact />,
  Portfolio: <Portfolio />,
};

export const pages: Record<Pages, pageProps> = {
  Home: {
    title: 'About Me',
    icon: <HomeIcon />,
  },
  Resume: {
    title: pagesNames[1],
    icon: <ResumeIcon />,
  },
  Contact: {
    title: pagesNames[2],
    icon: <ContactIcon />,
  },
  Portfolio: {
    title: pagesNames[3],
    icon: <WorkIcon />,
  },
};

type pageProps = {
  title: Pages | 'About Me';
  icon: JSX.Element;
};
