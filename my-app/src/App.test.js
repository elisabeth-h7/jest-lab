import { render, screen } from '@testing-library/react';
import App from './App';

import userEvent from '@testing-library/user-event';

test('check checkbox functionality', () => {
  render(<App />);
  userEvent.click(screen.getByTestId("checkbox"));
  expect(screen.getByTestId("checkbox")).toBeChecked()
  //screen.debug();
});

test('tests button working for text input', () => {
  render(<App/>);

  expect(screen.getByText("Hello World")).toBeInTheDocument();

  const button = screen.getByRole("button");
  userEvent.click(button);
  
});
