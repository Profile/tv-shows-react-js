import React, { InputHTMLAttributes, useCallback } from 'react';
import { NavLink } from 'react-router-dom';

type TMenuListProps = {
  pages: string[];
  currentPage: string;
};

export const MenuList = ({ pages, currentPage }: TMenuListProps) => {
  const generatePageName = useCallback((pageName: string) => `/category/${pageName}`, []);

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
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
