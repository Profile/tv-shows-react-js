import React, { useCallback, useState } from 'react';
import { ShowService, TShowArticle, TShowArticlesRs } from '../../apis/shows';
import { Article } from '../../components/Article';
import { useFetching } from '../../hooks/useFetch';
import { publishAsyncEvent } from '../../utils/publishAsyncEvent';
import { getInitialAsyncData } from '../../utils/asyncData';

export default function Home() {
  const [articles, setArticles] = useState<TShowArticlesRs>(getInitialAsyncData);

  const getArticles = useCallback(() => {
    publishAsyncEvent({
      eventName: 'ARTICLES',
      fn: () => ShowService.list(),
      onAll: setArticles
    });
  }, [setArticles]);

  useFetching(getArticles);

  return (
    <div className="px-4">
      <h1 className="font-bold text-[30px] mt-4 mb-3">Popular shows</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-10">
        {articles.data?.map((item: TShowArticle) => (
          <Article key={item.id} article={item} />
        ))}
      </div>
    </div>
  );
}
