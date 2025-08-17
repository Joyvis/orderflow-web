import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import ListUsers from '../ListUsers';

describe('Users List Component', () => {
  test('should contains the user page title', () => {
    render(<ListUsers />);
    expect(screen.getByText('Users')).toBeInTheDocument();
  });

  test('should contain a new user button', () => {
    render(<ListUsers />);
    expect(screen.getByText('New User')).toBeInTheDocument();
  });

  test('should contain a user list', () => {
    // TODO: Improve the way we check table list
    render(<ListUsers />);
    const usersTable = screen.getByRole('table');
    expect(usersTable).toBeInTheDocument();
  });
});