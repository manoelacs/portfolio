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
    <div
      className={`w-full h-fit xl:w-[820px] xl:h-[700px] bg-primary rounded-2xl shadow xl:p-8 px-3 py-4`}>
      <PageTitle title={pageTitle} />
      {children}
    </div>
  );
};
