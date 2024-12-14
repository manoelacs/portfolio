import React from 'react';
import { Pages } from './config/pages';
import { AboutMe } from './organisms/AboutMe';
import { Resume } from './organisms/resume';
import { Contact } from './organisms/contact';
import { Portfolio } from './organisms/portfolio';

export const Router: Record<Pages, JSX.Element> = {
  Home: <AboutMe />,
  Resume: <Resume />,
  Contact: <Contact />,
  Portfolio: <Portfolio />,
};
