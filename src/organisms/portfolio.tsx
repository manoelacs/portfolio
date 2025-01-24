import { PortfolioCard } from '../atoms/portfolioCard';
import myResume from '../config/myResume.json';

import React from 'react';
import { PageLayout } from './pageLayout';

export const Portfolio = () => {
  const { portfolio } = myResume;
  const initialState = portfolio.items.length === 0 ? [] : portfolio.items;

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [portfolios, setPortfolios] = React.useState(initialState);

  const onCategorySelect = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setPortfolios(initialState);
    } else {
      setPortfolios(initialState.filter((item) => item.category === category));
    }
  };

  const categories = new Set(initialState.map((item) => item.category));

  const isEven = initialState.length % 2 === 0;

  return (
    <PageLayout pageTitle='Portfolio'>
      <div className=' flex flex-col items-center justify-center gap-y-8   pt-10'>
        <div className='flex flex-row justify-end w-full gap-x-3'>
          <div
            className={`text-[#57657a] text-base font-medium font-['Poppins'] cursor-pointer hover:text-figma-orange ${
              selectedCategory === 'All' ? 'text-figma-redOrange' : ''
            }`}
            onClick={() => onCategorySelect('All')}>
            All
          </div>
          {[...categories].map((category, index) => (
            <div
              key={index}
              className={`text-[#57657a] text-base font-medium font-['Poppins'] hover:text-figma-orange cursor-pointer ${
                selectedCategory === category ? 'text-figma-redOrange' : ''
              }`}
              onClick={() => onCategorySelect(category)}>
              {category}
            </div>
          ))}
        </div>
        <div className='grid grid-cols-1  xl:grid-cols-2  gap-8 w-full h-fit xl:h-[500px] overflow-y-scroll'>
          {portfolios.map((item, index) => (
            <PortfolioCard
              key={index}
              {...item}
              type={isEven || index % 2 !== 0 ? 'default' : 'compact'}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};
