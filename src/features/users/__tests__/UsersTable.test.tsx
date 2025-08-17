import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import UsersTable from '../UsersTable';

describe('Users Table Component', () => {
    describe('when users list is empty', () => {
        test('should display no content message', () => {
            render(<UsersTable users={[]} />);
            expect(screen.getByText('No results.')).toBeInTheDocument();
        });
    });

    describe('when users list is not empty', () => {
        const users = [
            { id: '1', name: 'John Doe', email: 'john.doe@example.com' },
            { id: '2', name: 'Jane Doe', email: 'j' },
        ];

        test('should list users', () => {
            render(<UsersTable users={users} />);
            users.forEach((user) => {
                expect(screen.getByText(user.name)).toBeInTheDocument();
            });
        });
    });
});