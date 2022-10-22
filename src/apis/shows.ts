import { IAsyncData } from '../models';
import { HttpService } from '../utils/rest';

export type TShowArticle = {
  language: string;
  premiered: string;
  id: number;
  genres: string[];
  name: string;
  network: {
    name: string;
  };
  rating: {
    average: number;
  };
  summary: string;
  image: {
    medium: string;
    original: string;
  };
};

export type TShowSearchQueryArticle = {
  show: TShowArticle;
};

export type TShowArticlesRs = IAsyncData<TShowArticle[]>;
export type TShowSearchQueryArticlesRs = IAsyncData<TShowSearchQueryArticle[]>;
export type TShowArticleRs = IAsyncData<TShowArticle>;

export type TShowQuery = {};

const restClient = new HttpService();

const showEndpoints = {
  base: '/shows',
  shows() {
    return this.base;
  },
  search() {
    return `/search/shows`;
  },
  single(id: string) {
    return `${this.base}/${id}`;
  }
};

export const ShowService = {
  list() {
    return restClient.get<TShowQuery>(showEndpoints.shows());
  },
  search(params?: TShowQuery) {
    return restClient.get<TShowQuery>(showEndpoints.search(), {
      params: {
        ...params
      }
    });
  },
  article(id: string) {
    return restClient.get<TShowArticleRs>(showEndpoints.single(id));
  }
};
