import React from 'react';
import { screen } from '@testing-library/react';
import { FavoritePokemons } from '../pages';
import routerApp from './routerApp';
// import userEvent from '@testing-library/user-event';

describe('Testar se ', () => {
  it('mensagem `No favorite pokemon found`, sem  pokémons favoritos;', () => {
    routerApp(<FavoritePokemons />);
    const noMessage = screen.getByText(/No favorite pokemon found/i);
    expect(noMessage).toBeInTheDocument();
  });
});
