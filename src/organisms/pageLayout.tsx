import React from 'react';

import { PageTitle } from '@src/atoms/pageTitle';

export const PageLayout = ({
  children,
  pageTitle,
}: {
  children: JSX.Element;
  pageTitle: string;
}) => {
  return (
    <div className={`w-[820px] h-[700px] bg-primary rounded-2xl shadow p-8`}>
      <PageTitle title={pageTitle} />
      {children}
    </div>
  );
};
