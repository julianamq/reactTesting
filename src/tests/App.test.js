import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import routerApp from './routerApp';
// import userEvent from '@testing-library/user-event';

describe('Testar se ', () => {
  it('O primeiro link deve possuir o texto `Home`', () => {
    routerApp(<App />);
    const linkHome = screen.getByRole('link', { name: /home/i });
    expect(linkHome).toBeInTheDocument();
    const linkAbout = screen.getByRole('link', { name: /about/i });
    expect(linkAbout).toBeInTheDocument();
    const linkFavoritePokemons = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(linkFavoritePokemons).toBeInTheDocument();
  });
  it('O segundo link deve possuir o texto `About', () => {
    const { history } = routerApp(<App />);
    history.push('/about');
    const linkHome = screen.getByRole('link', { name: /home/i });
    expect(linkHome).toBeInTheDocument();
    const linkAbout = screen.getByRole('link', { name: /about/i });
    expect(linkAbout).toBeInTheDocument();
    const linkFavoritePokemons = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(linkFavoritePokemons).toBeInTheDocument();
  });
  it(' O terceiro link deve possuir o texto `Favorite Pokémons', () => {
    const { history } = routerApp(<App />);
    history.push('/favorites');
    const linkHome = screen.getByRole('link', { name: /home/i });
    expect(linkHome).toBeInTheDocument();
    const linkAbout = screen.getByRole('link', { name: /about/i });
    expect(linkAbout).toBeInTheDocument();
    const linkFavoritePokemons = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(linkFavoritePokemons).toBeInTheDocument();
  });
});
