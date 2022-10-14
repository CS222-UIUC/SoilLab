import { render, renderHook, screen, fireEvent, waitFor} from '@testing-library/react';
import App, { Grid } from './App';
import React from 'react';


test('Renders entire form (all fields + submit button)', async() => {
  render(<App />);

  expect(screen.getByText('Feedback Form')).toBeInTheDocument();
  expect(screen.getByText('First Name')).toBeInTheDocument();
  expect(screen.getByText('Last Name')).toBeInTheDocument();
  expect(screen.getByText('Email Address')).toBeInTheDocument();
  expect(screen.getByText('Feedback')).toBeInTheDocument();
  expect(screen.getByText('Submit')).toBeInTheDocument();
});