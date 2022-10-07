import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('renders header', () => {
  render(<App/>);

  // await userEvent.click(screen.getByText('Load Greeting'))

  const headerElement = screen.getByText('Crop Planner');
  expect(headerElement).toBeInTheDocument();
});

test('renders cropModelBoard components', async () => {
  render(<App url="/cropModelBoard" />)

  fireEvent.click(screen.getByText('Crops'));
  // await userEvent.click(screen.getByText('Load Greeting'))

  expect(screen.getByText('Carrot')).toBeInTheDocument();
  expect(screen.getByText('Corn')).toBeInTheDocument();
  expect(screen.getByText('Soybean')).toBeInTheDocument();
  expect(screen.getByText('Cabbage')).toBeInTheDocument();
  expect(screen.getByText('Rice')).toBeInTheDocument();
});
