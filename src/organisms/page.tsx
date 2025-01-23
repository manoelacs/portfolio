import { Footer } from '@src/atoms/footer';
import Header from '@src/molecules/header';
import React, { useEffect, useState } from 'react';
import { Hero } from '@src/molecules/hero';
import { Menu } from '@src/molecules/menu';
import { Outlet, useLocation } from 'react-router-dom';

export const Page = () => {
  const location = useLocation();
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => setFade(false), 300); // Adjust the duration to match the transition duration
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className='flex flex-col items-center h-full xl:w-[1100px] gap-y-4  w-screen  bg-background '>
      <Header />
      <div className='flex flex-col xl:flex-row  gap-x-4 justify-end items-end w-full'>
        <Hero />
        <div className='flex flex-col  gap-y-4 h-full justify-end items-end w-full'>
          <Menu />
          <div
            className={`transition-opacity duration-300 w-full ${
              fade ? 'opacity-0' : 'opacity-100'
            }`}>
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
