import React, { useCallback, useState } from 'react';
import {
  ShowService,
  TShowArticle,
  TShowArticlesRs,
  TShowSearchQueryArticlesRs
} from '../../apis/shows';
import { Article } from '../../components/Article';
import { useFetching } from '../../hooks/useFetch';
import { publishAsyncEvent } from '../../utils/publishAsyncEvent';
import { getInitialAsyncData } from '../../utils/asyncData';
import { useLocation } from 'react-router-dom';
import { EProcessStatus } from '../../enums';

export default function Home() {
  const [articles, setArticles] = useState<TShowSearchQueryArticlesRs>(getInitialAsyncData);

  const location = useLocation();

  const searchQuery = new URLSearchParams(location.search).get('q');

  const isEmptyResult = articles.status === EProcessStatus.SUCCESS && !articles.data?.length;

  const getArticles = useCallback(() => {
    publishAsyncEvent({
      eventName: 'SEARCH_ARTICLES',
      fn: () => ShowService.search({ q: searchQuery }),
      onAll: setArticles
    });
  }, [setArticles, searchQuery]);

  useFetching(getArticles);

  return (
    <div className="px-4">
      <h1 className="font-bold text-[30px] mt-4 mb-3">Search: {searchQuery}</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-10">
        {isEmptyResult ? (
          <h2>Not found</h2>
        ) : (
          articles.data?.map((item) => <Article key={item.show.id} article={item.show} />)
        )}
      </div>
    </div>
  );
}
