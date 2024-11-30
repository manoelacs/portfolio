import { Navbar } from '@src/molecules/navbar';
import { PageSection } from '@src/molecules/pageSection';
import { SideMenu } from '@src/molecules/sideMenu';
import React from 'react';

export const PageLayout = () => {
  return (
    <div className='flex flex-row gap-x-4 justify-end items-end'>
      <SideMenu />
      <div className='flex flex-col gap-y-4 h-full justify-end items-end'>
        <Navbar />
        <PageSection />
      </div>
    </div>
  );
};
