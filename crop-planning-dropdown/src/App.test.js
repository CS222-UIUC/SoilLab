import { render, renderHook, screen, fireEvent, waitFor} from '@testing-library/react';
import App, { Grid } from './App';
import React from 'react';


test('Renders entire form (all fields + submit button)', async() => {
  render(<App />);

  expect(screen.getByText('Before you start planning...')).toBeInTheDocument();
  expect(screen.getByText('Location')).toBeInTheDocument();
  expect(screen.getByText('Temperature Range')).toBeInTheDocument();
  expect(screen.getByText('Submit')).toBeInTheDocument();
});

test('Renders geolocation button)', async() => {
  render(<App />);

  expect(screen.getByText("Get Location")).toBeInTheDocument();

  const button = screen.getByRole('button', {name: 'Get Location'});
  fireEvent.click(button);
  expect(screen.getByText('Geolocation is not supported by your browser')).toBeInTheDocument();
});