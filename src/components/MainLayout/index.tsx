import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { DEFAULT_PATH } from '../../consts';
import BurgerMenu from '../../assets/svgs/burger.svg';
import { SearchInput } from '../SearchInput';
import { MenuList } from '../Menu/List';

type TProps = {
  children: React.ReactNode;
};

const categories = ['drama', 'comedy', 'sports'];

export const MainLayout = ({ children }: TProps) => {
  const location = useLocation();
  const { pathname: currentPage } = location;

  const handleMenu = () => {
    console.log('...');
  };

  return (
    <>
      <div className="h-[50px] fixed w-full flex justify-center border-b-2 px-4">
        <div className="max-w-[1200px] w-full h-full bg-red flex">
          <div className="flex md:hidden items-center w-[30px]">
            <img
              onClick={handleMenu}
              className="cursor-pointer w-full"
              src={BurgerMenu}
              alt="burger-menu"
            />
          </div>
          <div className="flex h-full flex-1 justify-end md:justify-start">
            <div className="main-logo flex items-center justify-center">
              <Link to={DEFAULT_PATH}>Logo</Link>
            </div>
            <div className="mx-4 hidden md:block"></div>
            <div className="hidden md:flex items-center max-w-xs w-full">
              <SearchInput />
            </div>
            <div className="mx-4 hidden md:block"></div>
            <div className="hidden md:block">
              {/* TODO: Show for mobiles */}
              <MenuList pages={categories} currentPage={currentPage} />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[50px]"></div>
      <div id="content" className="w-full flex justify-center">
        <main className="max-w-[1200px] w-full">{children}</main>
      </div>
    </>
  );
};
