import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter uncovered lines', () => {
  test('shows even/odd hint', () => {
    render(<Counter />);
    // 默认 0 是偶数
    expect(screen.getByText(/even/i)).toBeInTheDocument();

    // 点 3 次变成 3（奇数）
    const btn = screen.getByText('+1');
    fireEvent.click(btn);
    fireEvent.click(btn);
    fireEvent.click(btn);
    expect(screen.getByText(/odd/i)).toBeInTheDocument();
  });

  test('reset button sets count back to 0', () => {
    render(<Counter />);
    const addBtn = screen.getByText('+1');
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);          // count = 2

    const resetBtn = screen.getByText(/reset/i);
    fireEvent.click(resetBtn);
    expect(screen.getByText(/2024-0/i)).toBeInTheDocument();
  });
});