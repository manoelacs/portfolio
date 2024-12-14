import { PortfolioCard } from '../atoms/portfolioCard';

import React from 'react';

export const Portfolio = () => {
  const items = [
    {
      title: 'Smart Bank App',
      category: 'Mobile Development',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Mobile App',
      category: 'Mobile Development',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Smart Bank App',
      category: 'Mobile Development',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      title: 'Mobile App',
      category: 'Mobile Development',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [portfolio, setPortfolio] = React.useState(items);

  const onCategorySelect = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setPortfolio(items);
    } else {
      setPortfolio(items.filter((item) => item.category === category));
    }
  };

  const categories = new Set(items.map((item) => item.category));

  const isEven = items.length % 2 === 0;

  return (
    <div className='flex flex-col items-center justify-center gap-y-8 w-full'>
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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-8 w-full h-[500px] overflow-y-scroll'>
        {portfolio.map((item, index) => (
          <PortfolioCard
            key={index}
            {...item}
            type={isEven || index % 2 !== 0 ? 'default' : 'compact'}
          />
        ))}
      </div>
    </div>
  );
};
