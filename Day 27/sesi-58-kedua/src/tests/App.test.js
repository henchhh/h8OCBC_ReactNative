import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

test('Render halaman home dengan benar', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  const title = screen.getByText(/why do we need test ?/i) // i: case insensitive
  expect(title).toBeInTheDocument() // matcher dokumentasi jest => toBeInTheDocument(), toHaveTextContent(), toBe(), toHaveTextContent()

  // Mencari button tertentu
  const button = screen.getByRole('button')
  expect(button).toBeInTheDocument()
  expect(button).toHaveTextContent('User List')

  // Buka halaman /users => pindah halaman
  fireEvent.click(button)

  // Posisi di halaman /users
  // Ambil tombol kedua
  const backToHomeButton = screen.getByRole('button')
  expect(backToHomeButton).toBeInTheDocument()
  expect(backToHomeButton).toHaveTextContent('Back to Home')
});
