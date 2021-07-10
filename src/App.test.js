import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const title = screen.getByText(/Giffy/i);
  expect(title).toBeInTheDocument();
});

test('search form could be used', async () => {
  render(<App />);
  const textBox = await screen.findByRole('textbox');
  const button = await screen.findByRole('button');
  fireEvent.change(textBox, { target: { value: 'Matrix' }} );
  fireEvent.click(button)

  const title = await screen.findByText('Matrix');
  expect(title).toBeVisible();
});
