import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import App from '../App';
import {BrowserRouter, MemoryRouter} from 'react-router-dom'


test('Page loads properly & shows correct landing screen', () => {
  render(<App/>);
  const headerElement = screen.getByText('Welcome to');
  expect(headerElement).toBeInTheDocument();
});


test('Page shows app description', () => {
  render(<App/>);
  const pageDescript = screen.getByText('Get help with your crop planning!');
  expect(pageDescript).toBeInTheDocument();
});

test('Page shows nav bar', () => {
  render(<App/>);
  const nav_one = screen.getByText('About us');
  const nav_two = screen.getByText('Contact us');
  const nav_three = screen.getByText('Sign in');
  const nav_four = screen.getByText('Sign up');

  expect(nav_one).toBeInTheDocument();
  expect(nav_two).toBeInTheDocument();
  expect(nav_three).toBeInTheDocument();
  expect(nav_four).toBeInTheDocument();
});