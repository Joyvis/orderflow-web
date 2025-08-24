import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import UsersTable from '../UsersTable';
import type { User } from '@/types/User';

describe('Users Table Component', () => {
  const renderComponent = (
    users: User[],
    onEdit: (id: string) => void = () => {},
    onDelete: (id: string) => void = () => {},
  ) => {
    render(
      <UsersTable resources={users} onEdit={onEdit} onDelete={onDelete} />,
    );
  };

  describe('when users list is empty', () => {
    test('should display no content message', () => {
      renderComponent([]);

      expect(screen.getByText('No results.')).toBeInTheDocument();
    });
  });

  describe('when users list is not empty', () => {
    const users = [
      { id: '1', name: 'John Doe', email: 'john.doe@example.com' },
      { id: '2', name: 'Jane Doe', email: 'j' },
    ];

    test('should list users', () => {
      renderComponent(users);
      users.forEach((user) => {
        expect(screen.getByText(user.name)).toBeInTheDocument();
        expect(screen.getByText(user.email)).toBeInTheDocument();
      });
    });

    describe('when editing a user', () => {
      test('should navigate to the edit page', () => {
        const onEditMock = vi.fn();
        renderComponent(users, onEditMock, () => {});

        const editButtons = screen.getAllByText('Edit');
        fireEvent.click(editButtons[0]);

        expect(onEditMock).toHaveBeenCalledWith(users[0].id);
      });
    });

    describe('when deleting a user', () => {
      test('should delete the user', () => {
        const onDeleteMock = vi.fn();
        renderComponent(users, () => {}, onDeleteMock);

        const deleteButton = screen.getAllByText('Delete');
        fireEvent.click(deleteButton[0]);

        expect(onDeleteMock).toHaveBeenCalledWith(users[0].id);
      });
    });
  });
});
