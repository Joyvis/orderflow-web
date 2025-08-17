import { useState, useEffect } from "react";
import type { User } from "./User";

// TODO: Tries useResource hook that is able to retrieve any entity
export default function useUsers() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        setUsers([
            { id: '1', name: 'John Doe', email: 'john.doe@example.com' },
            { id: '2', name: 'Jane Doe', email: 'jane.doe@example.com' },
            { id: '3', name: 'Joyvis Santana', email: 'joyvis@example.com' },
        ]);
    }, []);

    return { users };
}