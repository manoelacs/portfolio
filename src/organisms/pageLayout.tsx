import { Menu } from '@src/molecules/menu';
import { PageSection } from '@src/molecules/pageSection';
import { Hero } from '@src/molecules/hero';
import React from 'react';

import { Pages, pagesNames } from '@src/config/pages';

export const PageLayout = () => {
  const [selectedPage, setSelectedPage] = React.useState<Pages>(pagesNames[0]);

  const onSelectedPage = (page: Pages) => {
    setSelectedPage(page);
  };

  return (
    <div className='flex flex-row gap-x-4 justify-end items-end'>
      <Hero />
      <div className='flex flex-col gap-y-4 h-full justify-end items-end '>
        <Menu onClick={onSelectedPage} activeItem={selectedPage} />
        <PageSection selectedPage={selectedPage} />
      </div>
    </div>
  );
};
