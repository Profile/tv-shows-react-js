import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchInput } from '../index';

describe('<SearchInput />', () => {
  it('should be properly attr', function () {
    render(
      <SearchInput
        data-testid="searchQuery"
        placeholder="Search shows..."
        defaultValue={'searchQuery'}
      />
    );
    const element: HTMLInputElement = screen.getByTestId('searchQuery');
    expect(element.name).toEqual('q');
    expect(element.placeholder).toEqual('Search shows...');
    expect(element.defaultValue).toEqual('searchQuery');
  });
});
