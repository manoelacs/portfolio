import React from 'react';

interface PortfolioCardProps {
  title: string;
  category: string;
  imageUrl: string;
  type: 'compact' | 'default';
  link?: string;
}

export const PortfolioCard = ({
  title,
  imageUrl,
  category,
  type,
  link,
}: PortfolioCardProps) => {
  const cardHeight = type === 'compact' ? 'h-48 xl:w-72 w-fit' : 'h-48 w-92';

  return (
    <div
      className={` bg-figma-orangeLight rounded-lg p-2 flex flex-col 
      items-start justify-between ${cardHeight} shadow-md`}>
      <a href={link} className={`w-full h-full {link? 'cursor-pointer' : ''}`}>
        <img className='w-full h-32 rounded-lg' src={imageUrl} alt={title} />
      </a>

      <div className='p-2'>
        <p className="text-foreground/50 text-xs font-normal text-left font-['Poppins'] leading-none">
          {category}
        </p>
        <p className='text-base text-foreground font-semibold'>{title}</p>
      </div>
    </div>
  );
};
