import React from 'react';
import './App.css';
import Header from './molecules/header';

import { Footer } from './atoms/footer';
import { PageLayout } from './organisms/pageLayout';

const App: React.FC = () => {
  return (
    <div className='flex flex-col items-center h-full gap-y-4 w-[1230px] bg-background dark:bg-dark-background'>
      <Header />
      <PageLayout />
      <Footer />
    </div>
  );
};

export default App;
