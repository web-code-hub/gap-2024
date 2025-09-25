import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // 断言计数器标题存在
  expect(screen.getByRole('heading')).toHaveTextContent(/2024-/);

  // 断言按钮存在
  expect(screen.getByRole('button', { name: /\+1/i })).toBeInTheDocument();

  // 断言日期段落存在
  expect(screen.getByText(/Current Date:/i)).toBeInTheDocument();
});
