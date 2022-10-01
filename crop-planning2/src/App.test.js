import { render, screen } from '@testing-library/react';
import App, { Grid } from './App';
import React from 'react';


test('Renders entire responsive, draggable grid', async() => {
  render(<App />);

  expect(screen.getByText('Carrot')).toBeInTheDocument();
  expect(screen.getByText('Corn')).toBeInTheDocument();
  expect(screen.getByText('Soybean')).toBeInTheDocument();
  expect(screen.getByText('Cabbage')).toBeInTheDocument();
  expect(screen.getByText('Rice')).toBeInTheDocument();
});