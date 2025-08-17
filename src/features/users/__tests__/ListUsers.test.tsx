import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ListUsers from '../ListUsers';

describe('Users List Component', () => {
  const renderWithRouter = (component: React.ReactElement) => {
    return render(<MemoryRouter>{component}</MemoryRouter>);
  };

  test('should contains the user page title', () => {
    renderWithRouter(<ListUsers />);
    expect(screen.getByRole('heading', { name: 'Users' })).toBeInTheDocument();
  });

  test('should contain a new user button', () => {
    renderWithRouter(<ListUsers />);
    expect(screen.getByText('New User')).toBeInTheDocument();
  });

  test('should contain a user list', () => {
    // TODO: Improve the way we check table list
    renderWithRouter(<ListUsers />);
    const usersTable = screen.getByRole('table');
    expect(usersTable).toBeInTheDocument();
  });
});