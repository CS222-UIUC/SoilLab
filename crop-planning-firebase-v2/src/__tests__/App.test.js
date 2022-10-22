import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import App from '../App';
import Dashboard from '../Dashboard';

import ReactDOM from 'react-dom';
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

test('Page loads properly & shows correct landing screen', () => {
  render(<App/>);
  const headerElement = screen.getByText('SoilLab');
  expect(headerElement).toBeInTheDocument();
});

test('Shows bar with about link', () => {
  render(<App/>);
  const headerElement = screen.getByText('About');
  expect(headerElement).toBeInTheDocument();
});

test('Test change URL', () => {
  global.window = { location: { pathname: null } };
  expect(global.window.location.pathname).toEqual('/');
});