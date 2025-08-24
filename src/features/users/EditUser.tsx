import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';

import { updateUser, getUser } from './UsersAPI';
import UserForm from './UserForm';
import type { UpdateUserSchema } from './UserForm';

export default function EditUser() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { id } = useParams();

  const { data: user, isLoading, error } = useQuery({
    queryKey: ['user', id],
    queryFn: () => getUser(id!),
    enabled: Boolean(id),
  });

  const updateUserMutation = useMutation({
    mutationFn: (data: UpdateUserSchema) => updateUser(id!, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
      navigate('/users');
    },
  });

  const handleSubmit = (data: UpdateUserSchema) => {
    updateUserMutation.mutate(data);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !user) {
    return <div>Error loading user</div>;
  }

  return (
    <div>
      <h1 className="mt-2 text-5xl tracking-tight sm:text-6xl text-pretty">
        Edit User
      </h1>
      <UserForm
        user={user}
        onSubmit={handleSubmit}
        isPending={updateUserMutation.isPending}
        submitButtonText="Update"
      />
    </div>
  );
} 