import NewUserButton from './NewUserButton';
import UsersTable from './UsersTable';
import useUsers from './useUsers';

const onDeleteUser = (id: string) => {
  console.log('delete user', id);
};

export const users = {
  resourceTable: UsersTable,
  newResourceButton: NewUserButton,
  useResources: useUsers,
  onDeleteResource: onDeleteUser,
};
