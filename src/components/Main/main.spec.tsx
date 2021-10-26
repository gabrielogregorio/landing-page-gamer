import React from 'react';
import { render, screen } from '@testing-library/react';
import { Main } from '.';

describe('<Main />', () => {
  it('should render the Main component', () => {
    render(<Main />);
    expect(screen.getByRole('heading', {name: /Bem vindo ao GG/i})).toBeInTheDocument()
  });
})

