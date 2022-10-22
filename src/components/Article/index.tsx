import React from 'react';

export const Article = () => {
  return (
    <article className="overflow-hidden rounded-md shadow-md relative">
      <a href="">
        <div className="absolute px-3 py-1 bg-white rounded-md shadow-md right-3 top-3">
          <p className="font-bold italic text-[12px]">6.6</p>
        </div>
        <div className="item-image-bg">
          <img
            className="object-cover w-full h-full max-h-[245px]"
            src="https://static.tvmaze.com/uploads/images/medium_portrait/182/457332.jpg"
          />
        </div>
        <div className="p-4">
          <h4 className="font-bold">Title</h4>
          <p className="font-light">Joe</p>
        </div>
      </a>
    </article>
  );
};
