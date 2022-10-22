import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { DEFAULT_PATH } from '../../consts';
import BurgerMenu from '../../assets/svgs/burger.svg';
import { SearchInput } from '../SearchInput';

type TProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: TProps) => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');

  return (
    <>
      <div className="h-[50px] fixed bg-white z-10 w-full flex justify-center border-b-2">
        <header className="max-w-[1200px] w-full h-full bg-red flex px-4">
          <div className="flex h-full flex-1 center md:justify-start">
            <div className="main-logo flex items-center justify-center">
              <a href={DEFAULT_PATH}>Logo</a>
            </div>
            <div className="mx-4 hidden md:block" />
            <div className="hidden md:flex items-center max-w-xs w-full">
              <form className="w-full" action="/search">
                <SearchInput placeholder="Search shows..." defaultValue={searchQuery as string} />
              </form>
            </div>
            <div className="mx-4 hidden md:block" />
          </div>
        </header>
      </div>
      <div className="h-[50px]"></div>
      <div id="content" className="w-full flex justify-center">
        <main className="max-w-[1200px] w-full">{children}</main>
      </div>
    </>
  );
};
