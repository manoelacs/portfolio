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
    <div className='w-fit h-fit bg-m rounded-2xl shadow flex flex-row gap-x-4 cursor-pointer items-center p-4 darkTheme:bg-figma-grayLight'>
      {pagesNames.map((page) => (
        <MenuItem
          key={page}
          title={page}
          icon={pages[page].icon}
          onClick={() => handleMenuItemClick(page)}
          isActive={activeItem === page}
        />
      ))}
    </div>
  );
};
