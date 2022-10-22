import React, { InputHTMLAttributes } from 'react';

type TInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const SearchInput = (props: TInputProps) => (
  <input
    {...props}
    type="search"
    className="bg-[#efefef] h-[36px] rounded-md p-3 w-full"
    name="q"
  />
);
