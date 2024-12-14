import { PageTitle } from '@src/atoms/pageTitle';
import { pages, Pages, Router } from '@src/config/pages';

import React from 'react';

export const PageSection = ({
  className,
  selectedPage,
}: {
  className?: string;
  selectedPage: Pages;
}) => {
  return (
    <div
      className={`w-[820px] h-[700px] bg-primary  rounded-2xl shadow p-8 ${className}`}>
      <PageTitle title={pages[selectedPage].title} />
      {Router[selectedPage]}
    </div>
  );
};
