import React from 'react';

import { MenuItem } from '../atoms/menuItem';

import { pages, Pages, pagesNames } from '@src/config/pages';

export const Menu = ({ onClick, activeItem }: MenuProps) => {
  return (
    <div className='w-96 h-fit bg-m rounded-2xl shadow flex flex-row gap-x-4 cursor-pointer items-center p-4 darkTheme:bg-figma-grayLight'>
      {pagesNames.map((page) => (
        <MenuItem
          key={page}
          title={page}
          icon={pages[page].icon}
          onClick={() => onClick(page)}
          isActive={activeItem === page}
        />
      ))}
    </div>
  );
};

type MenuProps = {
  onClick: (page: Pages) => void;
  activeItem: Pages;
};
