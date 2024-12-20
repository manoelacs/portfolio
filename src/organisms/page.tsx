import { Footer } from '@src/atoms/footer';
import Header from '@src/molecules/header';
import React from 'react';
import { Hero } from '@src/molecules/hero';
import { Menu } from '@src/molecules/menu';
import { Pages } from '@src/config/pages';
import { Outlet } from 'react-router-dom';

export const Page = () => (
  <div className='flex flex-col items-center h-full gap-y-4 w-[1230px] bg-background'>
    <Header />
    <div className='flex flex-row gap-x-4 justify-end items-end'>
      <Hero />
      <div className='flex flex-col gap-y-4 h-full justify-end items-end '>
        <Menu
          onClick={(page: Pages) => {
            // Handle menu click
            console.log(page);
          }}
        />
        <Outlet />
      </div>
    </div>
    <Footer />
  </div>
);
