import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import App from '../App';
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

// test('renders header', () => {
//   render(<App/>);

//   // await userEvent.click(screen.getByText('Load Greeting'))

//   const headerElement = screen.getByText('Crop Planning');
//   expect(headerElement).toBeInTheDocument();
// });

test('Page loads properly & shows correct landing screen', () => {
  render(<App/>);
  const headerElement = screen.getByText('SoilLab');
  expect(headerElement).toBeInTheDocument();
});
