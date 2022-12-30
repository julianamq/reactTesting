import React from 'react';
import { screen } from '@testing-library/react';
import routerApp from './routerApp';
import { NotFound } from '../pages';

describe('Testar se ', () => {
  it('Teste se a página contém um heading `h2` = `Page requested not found`', () => {
    routerApp(<NotFound />);
    const tituto = screen.getByRole('heading', {
      name: /Page requested not found/i, level: 2 });
    expect(tituto).toBeInTheDocument();
  });
  it('Teste se a página mostra a imagem', () => {
    routerApp(<NotFound />);
    const imagem = screen.getByAltText(
      'Pikachu crying because the page requested was not found',
    );

    expect(imagem).toHaveAttribute('src',
      'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
