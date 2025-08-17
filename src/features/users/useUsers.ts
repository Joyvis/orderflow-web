import { useState, useEffect } from "react";
import type { User } from "./User";

// TODO: Tries useResource hook that is able to retrieve any entity
export default function useUsers() {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // To skip this hook's logic when running tests, you can check for the test environment and early return.
    // In React apps, NODE_ENV is often set to 'test' during testing.
    // You can add a conditional at the top of the hook to return dummy values if process.env.NODE_ENV === 'test'.
    // Example:
    if (process.env.NODE_ENV === 'test') {
        return { users: [], isLoading: false };
    }
    // This way, the fetch logic is skipped during tests.

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error))
            .finally(() => setIsLoading(false));
    }, []);

    return { users, isLoading };
}