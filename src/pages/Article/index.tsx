import React, { useCallback, useState } from 'react';
import { ShowService, TShowArticle, TShowArticleRs } from '../../apis/shows';
import { Article } from '../../components/Article';
import { useFetching } from '../../hooks/useFetch';
import { publishAsyncEvent } from '../../utils/publishAsyncEvent';
import { getInitialAsyncData } from '../../utils/asyncData';
import { useParams } from 'react-router-dom';

export default function Home() {
  const [article, setArticle] = useState<TShowArticleRs>(getInitialAsyncData);

  const articleData = article.data || ({} as TShowArticle);

  const { articleId } = useParams();

  const getArticles = useCallback(() => {
    if (!articleId) return;

    publishAsyncEvent({
      eventName: 'ARTICLES',
      fn: () => ShowService.article(articleId),
      onAll: setArticle
    });
  }, [setArticle, articleId]);

  useFetching(getArticles);

  if (!articleData.name) return null;

  return (
    <div className="px-4">
      <div className="flex mt-10">
        <div className="item-image-bg max-w-[500px] w-full">
          <img
            className="object-cover w-full h-full"
            src={articleData.image.original}
            alt={articleData.name}
            loading="lazy"
          />
        </div>
        <div className="hidden md:block pl-10"></div>
        <div className="max-w-[500px]">
          <h1 className="font-bold text-[30px] mt-4 mb-3">{articleData.name}</h1>
          <p className="ml-2 p-2 bg-slate-100">Rating: {articleData.rating.average}</p>
          <p className="ml-2 p-2">Genres: {articleData.genres?.join(', ')}</p>
          <p className="ml-2 p-2 bg-slate-100">Language: {articleData.language}</p>
          <p className="ml-2 p-2">Premiered: {articleData.premiered}</p>
          <p className="ml-2 p-2 bg-slate-100">Network: {articleData.network.name}</p>
          <div className="ml-2 text-[25px] mt-10 mb-2">Summary:</div>
          <p className="ml-2">{articleData.summary.replace(/(<([^>]+)>)/gi, '')}</p>
        </div>
      </div>
      <div></div>
    </div>
  );
}
