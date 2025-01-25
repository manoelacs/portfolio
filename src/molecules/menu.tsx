import React, { useEffect, useState } from 'react';
import { MenuItem } from '../atoms/menuItem';
import { pages, Pages, pagesNames } from '@src/config/pages';
import { useLocation, useNavigate } from 'react-router-dom';

export const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState<Pages | null>(null);

  const handleMenuItemClick = (page: Pages) => {
    setActiveItem(page);
    navigate(`/${page}`);
  };

  useEffect(() => {
    const path = location.pathname.split('/')[1] as Pages;
    if (pagesNames.includes(path)) {
      setActiveItem(path);
    } else {
      setActiveItem('Home');
      navigate(`/home`);
    }
  }, [location.pathname, navigate]);

  return (
    <div className='w-full xl:w-fit h-fit rounded-2xl xl:shadow flex flex-row xl:gap-x-4 justify-evenly cursor-pointer items-center xl:p-4 xl:bg-figma-grayLight px-4 py-8 '>
      {pagesNames.map((page) => (
        <MenuItem
          key={page}
          title={page}
          icon={pages[page].icon}
          onClick={() => handleMenuItemClick(page)}
          color={activeItem === page ? 'primary' : 'secondary'}
          text={activeItem === page ? 'primary' : 'secondary'}
        />
      ))}
    </div>
  );
};
