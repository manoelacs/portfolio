import React from 'react';
import { Pages } from './config/pages';
import { AboutMe } from './organisms/AboutMe';
import { Resume } from './organisms/resume';
import { Contact } from './organisms/contact';
import { Portfolio } from './organisms/portfolio';
import { Page } from './organisms/page';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import NotFound from './pages/notFound';

export const Router: Record<Pages, JSX.Element> = {
  Home: <AboutMe />,
  Resume: <Resume />,
  Contact: <Contact />,
  Portfolio: <Portfolio />,
};

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Page />,
      children: [
        {
          path: '',
          element: <Navigate to='home' replace />,
        },
        {
          path: 'home',
          element: Router.Home,
        },
        {
          path: 'contact',
          element: Router.Contact,
        },
        {
          path: 'portfolio',
          element: Router.Portfolio,
        },
        {
          path: 'resume',
          element: Router.Resume,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to='/portfolio/home' replace />,
    },
  ],
  {
    basename: '/portfolio',
  }
);

export default router;
