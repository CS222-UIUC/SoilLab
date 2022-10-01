import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('renders header', () => {
  render(<App/>);

  // await userEvent.click(screen.getByText('Load Greeting'))

  const headerElement = screen.getByText('Crop Planning');
  expect(headerElement).toBeInTheDocument();
});
