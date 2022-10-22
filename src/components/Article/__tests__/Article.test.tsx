import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Article } from '../index';
import { TShowArticle } from '../../../apis/shows';

const article: TShowArticle = {
  language: 'English',
  premiered: '11-22-2002',
  id: 1,
  genres: ['Drama'],
  name: 'Breaking Dad',
  network: {
    name: 'HBO'
  },
  rating: {
    average: 9
  },
  summary: 'Simple description',
  image: {
    medium: 'https://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg',
    original: 'https://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg'
  }
};

describe('renders learn react link', () => {
  it('should be in document', function () {
    render(
      <MemoryRouter>
        <Article article={article} />
      </MemoryRouter>
    );
    const linkElement = screen.getByTestId(`article-${article.id}`);
    expect(linkElement).toBeInTheDocument();
  });
  it('should render properly', function () {
    const { getByText, getByAltText } = render(
      <MemoryRouter>
        <Article article={article} />
      </MemoryRouter>
    );

    expect(getByText(article.name)).toBeInTheDocument();
    expect(getByText(article.genres.join(', '))).toBeInTheDocument();
    expect(getByText(article.rating.average)).toBeInTheDocument();
    expect(getByAltText(article.name)).toBeInTheDocument();
  });
});
