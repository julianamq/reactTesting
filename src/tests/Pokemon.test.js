import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import routerApp from './routerApp';
import App from '../App';
import { Pokedex } from '../pages';
import pokemons from '../data';
// import Pokemon from '../components/Pokemon';
// import { pokemons } from '../data';

describe('Teste do componente Pokemon', () => {
  test('É exibido o nome na tela ', () => {
    routerApp(
      <App />,
    );
    const pokemonName = screen.getByText(/Pikachu/i);
    expect(pokemonName).toBeInTheDocument();
  });
  it('A imagem do pokemon possui o `alt` `<name> sprite`', () => {
    routerApp(
      <App />,
    );
    const image = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const pokemonSprite = screen.getByAltText(/sprite/i);
    expect(pokemonSprite.src).toBe(image);
  });
  it(' É exibido na tela um `link` com o `href` `/pokemons/<id>`', () => {
    routerApp(
      <App />,
    );
    const detailsLink = screen.getByRole('link', { name: /more details/i });
    expect(detailsLink).toBeInTheDocument();
  });
  it('É exibido na tela um texto com o tipo do pokemon', () => {
    routerApp(<Pokedex
      pokemons={ [pokemons[0]] }
      isPokemonFavoriteById={ { [pokemons[0].id]: false } }
    />);
    const tipoPokemons = screen.getByTestId('pokemon-type');
    expect(tipoPokemons.textContent).toEqual('Electric');
  });
  it('A imagem de favorito :star: possui o `alt` `<name> is marked as favorite`', () => {
    routerApp(<Pokedex
      pokemons={ [pokemons[0], pokemons[1]] }
      isPokemonFavoriteById={ { [pokemons[0].id]: true, [pokemons[1].id]: true } }
    />);
    const imageFavorite = screen.getByRole('img', { name: /is marked as favorite/i });
    expect(imageFavorite).toBeInTheDocument();
    expect(imageFavorite).toHaveAttribute('src', '/star-icon.svg');
  });
  it('pegar botao More details', () => {
    const { history } = routerApp(<App />);
    const maisDetalhes = screen.getByText(/details/i);
    expect(maisDetalhes).toBeInTheDocument();
    userEvent.click(maisDetalhes);
    expect(history.location.pathname).toBe('/pokemons/25');
  });
});
