import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render the footer component', () => {
    render(<Footer />);
    expect(screen.getByAltText("Logo da Twitch")).toBeInTheDocument()
    expect(screen.getByAltText("Logo do Youtube")).toBeInTheDocument()
    expect(screen.getByAltText("Logo do Twitter")).toBeInTheDocument()
    expect(screen.getByAltText("Logo do Instagram")).toBeInTheDocument()
    expect(screen.getByAltText("Logo do Facebook")).toBeInTheDocument()
  })
})
