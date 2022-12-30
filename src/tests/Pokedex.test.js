import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import routerApp from './routerApp';
import { Pokedex } from '../pages';
import pokemons from '../data';

describe('Testar se ', () => {
  it('Teste se a página contém um heading `h2` = texto `Encountered pokémons`', () => {
    routerApp(<Pokedex
      pokemons={ [pokemons[0], pokemons[1]] }
      isPokemonFavoriteById={ { [pokemons[0].id]: false, [pokemons[1].id]: false } }
      // brackets notation
    />);
    const findPokemon = screen.getByRole('heading', {
      name: /Encountered pokémons/i, level: 2 });
    expect(findPokemon).toBeInTheDocument();
  });
  it('O botão deve conter o texto `Próximo pokémon`', () => {
    routerApp(<Pokedex
      pokemons={ [pokemons[0], pokemons[1]] }
      isPokemonFavoriteById={ { [pokemons[0].id]: false, [pokemons[1].id]: false } }
    />);
    const input = screen.getByRole('button', { name: /Próximo pokémon/i });
    expect(input).toBeInTheDocument();
  });
  it('Os próximos pokémons da lista devem ser mostrados sucessivamente no botão;', () => {
    routerApp(<Pokedex
      pokemons={ [pokemons[0], pokemons[1]] }
      isPokemonFavoriteById={ { [pokemons[0].id]: false, [pokemons[1].id]: false } }
    />);
    const buttonClick = screen.getByTestId('next-pokemon');
    userEvent.click(screen.getByTestId(/next-pokemon/i));

    expect(buttonClick).toBeInTheDocument();
  });
  it('Teste se é mostrado apenas um pokémon por vez', () => {
    routerApp(<Pokedex
      pokemons={ [pokemons[0], pokemons[1]] }
      isPokemonFavoriteById={ { [pokemons[0].id]: false, [pokemons[1].id]: false } }
    />);
    userEvent.click(screen.getByTestId('next-pokemon'));
    const buttonClick = screen.getAllByTestId('pokemon-name');
    expect(buttonClick).toHaveLength(1);
  });
  it('Teste se a Pokédex tem os botões de filtro', () => {
    routerApp(<Pokedex
      pokemons={ [pokemons[0], pokemons[1]] }
      isPokemonFavoriteById={ { [pokemons[0].id]: false, [pokemons[1].id]: false } }
    />);
    const buttonExist = screen.getAllByTestId('pokemon-type-button');
    expect(buttonExist).toHaveLength(2);
  });
  it('O botão `All` precisa estar **sempre** visível e o texto ser All', () => {
    routerApp(<Pokedex
      pokemons={ [pokemons[0], pokemons[1]] }
      isPokemonFavoriteById={ { [pokemons[0].id]: false, [pokemons[1].id]: false } }
    />);
    const textButton = screen.getByText('All');
    expect(textButton).toBeInTheDocument();
  });

  it('É possível clicar no botão de filtragem `All`', () => {
    routerApp(<Pokedex
      pokemons={ [pokemons[0], pokemons[1]] }
      isPokemonFavoriteById={ { [pokemons[0].id]: false, [pokemons[1].id]: false } }
    />);
    const semFiltro = screen.getByRole('button', {
      name: 'All' });
    userEvent.click(semFiltro);
    expect(semFiltro).toBeInTheDocument();
  });
  it(' A Pokedéx deverá mostrar os pokémons normalmente quando clicado', () => {
    routerApp(<Pokedex
      pokemons={ pokemons.filter((id) => id.type) }
      isPokemonFavoriteById={ [pokemons.length] }
    />);
    // const semFiltro = screen.getAllByTestId('pokemon-type-button');
    const psychicType = screen.getByRole('button', { name: 'Psychic' });
    //
    // const buttonPoison = screen.getByRole('button', { name: /Poison/i });
    expect(psychicType).toHaveAttribute('data-testid', 'pokemon-type-button');
  });
});
