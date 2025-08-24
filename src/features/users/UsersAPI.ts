import type { User } from '../../types/User';

export const createUser = async (user: User): Promise<User> => {
  const response = await fetch('http://localhost:8080/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error('Failed to create user');
  }

  return response.json();
};

export const getUser = async (id: string): Promise<User> => {
  const response = await fetch(`http://localhost:8080/api/v1/users/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }

  return response.json();
};

export const updateUser = async (
  id: string,
  user: Partial<User>,
): Promise<User> => {
  const response = await fetch(`http://localhost:8080/api/v1/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error('Failed to update user');
  }

  return response.json();
};

export const deleteUser = async (id: string): Promise<void> => {
  const response = await fetch(`http://localhost:8080/api/v1/users/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete user');
  }
};
