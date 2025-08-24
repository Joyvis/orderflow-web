import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createUser } from './UsersAPI';
import UserForm from './UserForm';
import type { CreateUserSchema, UpdateUserSchema } from './UserForm';

interface CreateUserProps {
  onCreate: () => void;
}

export default function CreateUser({ onCreate }: CreateUserProps) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const createUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      navigate('/users');
    },
  });

  const handleSubmit = (data: CreateUserSchema | UpdateUserSchema) => {
    // Remove id from data since it's not needed for creation
    const { id, ...userData } = data as any;
    onCreate(userData);
  };

  return (
    <div>
      <h1 className="mt-2 text-5xl tracking-tight sm:text-6xl text-pretty">
        Create User
      </h1>
      <UserForm onSubmit={handleSubmit} submitButtonText="Create" />
    </div>
  );
}
