import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<Ap />);
  const linkElement = screen.getByText(/lea react/i);
  expect(linkElement).toBeInTheDocument();
});


// test('Hello', () => {
//   expect (Hello()).toEqual("hello")
// })