import React, { useCallback } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { DEFAULT_PATH } from '../../consts';

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

  return (
    <>
      <div className="h-[50px] fixed w-full border-b-2">
        {/* burger menu for menu */}
        <div className="flex h-full">
          <div className="main-logo flex items-center px-4 justify-center">
            <Link to={DEFAULT_PATH}>Logo</Link>
          </div>
          <div>
            <input type="text" />
          </div>
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
        </div>
      </div>
      <div className="h-[50px]"></div>
      <div id="content">{children}</div>
    </>
  );
};
