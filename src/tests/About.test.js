import React from 'react';
import { screen } from '@testing-library/react';
import routerApp from './routerApp';
import { About } from '../pages';
// import userEvent from '@testing-library/user-event';

describe('Testar se ', () => {
  it('Teste se a página contém as informações sobre a Pokédex', () => {
    routerApp(<About />);
    const title = screen.getByRole('heading', { name: /About Pokédex/i, level: 2 });
    expect(title).toBeInTheDocument();
  });
  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    routerApp(<About />);
    const paragraph = screen.getByRole('heading', { name: /Pokédex/i });
    expect(paragraph).toBeInTheDocument();
  });
  it('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
    routerApp(<About />);
    const imagem = screen.getByAltText('Pokédex');
    expect(imagem).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
