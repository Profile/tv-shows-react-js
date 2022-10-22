import React from 'react';
import { Article } from '../../components/Article';

export default function Home() {
  return (
    <>
      <h1 className="font-bold text-[30px] mt-2 mb-4">home</h1>

      <div className="grid grid-cols-5 gap-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <Article key={item} />
        ))}
      </div>
    </>
  );
}
