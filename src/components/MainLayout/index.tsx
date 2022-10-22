import React, { useCallback } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

import { DEFAULT_PATH } from '../../consts';
import BurgerMenu from '../../assets/svgs/burger.svg';

type TProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: TProps) => {
  let activeStyle = {
    textDecoration: 'underline'
  };

  const pages = ['drama', 'comedy', 'sports'];

  const location = useLocation();
  const { pathname: currentPage } = location;

  const generatePageName = useCallback((pageName: string) => `/category/${pageName}`, []);

  const handleMenu = () => {
    console.log('...');
  };

  const renderMenu = () => {
    return (
      <nav className=" h-full">
        <ul className="flex h-full">
          {pages.map((item) => (
            <li key={item}>
              <NavLink
                className={`flex items-center h-full capitalize px-3 ${
                  currentPage === generatePageName(item) ? 'text-[#027aff]' : undefined
                }`}
                to={generatePageName(item)}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  return (
    <>
      <div className="h-[50px] fixed w-full flex justify-center border-b-2 px-4">
        <div className="max-w-[1200px] w-full h-full bg-red">
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
              <input type="search" className="bg-[#efefef] h-[36px] rounded-md p-3 w-full" />
            </div>
            <div className="mx-4 hidden md:block"></div>
            <div className="hidden md:block">{renderMenu()}</div>
          </div>
        </div>
      </div>
      <div className="h-[50px]"></div>
      <div id="content">{children}</div>
    </>
  );
};
