import React from 'react';
import { Link } from 'react-router-dom';
import { TShowArticle } from '../../apis/shows';

type TArticleProps = {
  article: TShowArticle;
};

export const Article = ({ article }: TArticleProps) => {
  return (
    <article className="overflow-hidden rounded-md shadow-md relative hover:scale-105 transition delay-150 duration-150 ease-in-out">
      <Link to={`/article/${article.id}`}>
        {article.rating.average && (
          <div className="absolute px-3 py-1 bg-white rounded-md shadow-md right-3 top-3">
            <p className="font-bold italic text-[12px]">{article.rating.average}</p>
          </div>
        )}
        <div className="item-image-bg">
          <img
            className="object-cover w-full h-full max-h-[245px]"
            src={article.image?.medium}
            alt={article.name}
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h4 className="font-bold">{article.name}</h4>
          <p className="font-light">{article.genres?.join(', ')}</p>
        </div>
      </Link>
    </article>
  );
};
