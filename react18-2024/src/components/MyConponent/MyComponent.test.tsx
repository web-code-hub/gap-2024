import { render, screen, waitFor } from '@testing-library/react';
import MyComponent from './MyComponent';
import { server } from '../../mocks';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ title: 'mock post' }),
  } as Response)
) as jest.Mock;

describe('MyComponent uncovered lines', () => {
  afterEach(() => jest.clearAllMocks());

  test('renders loading then date', async () => {
    render(<MyComponent />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.getByText(/2024-09-24/i)).toBeInTheDocument()
    );
  });
});