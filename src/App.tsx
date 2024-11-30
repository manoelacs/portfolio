import React from 'react';
import './App.css';

import Header from './molecules/header';
import { Navbar } from './molecules/navbar';
import { SideMenu } from './molecules/sideMenu';
import { PageSection } from './molecules/pageSection';
import { Footer } from './atoms/footer';

const App: React.FC = () => {
  return (
    <div className='flex flex-col items-center h-full gap-y-4 w-[1230px] bg-background dark:bg-dark-background'>
      <Header />
      <div className='flex flex-row gap-x-4 justify-end items-end'>
        <SideMenu />
        <div className='flex flex-col gap-y-4 h-full justify-end items-end'>
          <Navbar />
          <PageSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
