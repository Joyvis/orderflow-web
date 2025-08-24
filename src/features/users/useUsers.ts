import { useQuery } from '@tanstack/react-query';

// TODO: Tries useResource hook that is able to retrieve any entity
export default function useUsers() {
  // if (process.env.NODE_ENV === 'test') {
  //   return { users: [], isLoading: false };
  // }

  const getUsers = async () => {
    const response = await fetch('http://localhost:8080/api/v1/users');
    return response.json();
  };

  const query = useQuery({ queryKey: ['users'], queryFn: getUsers });

  return { data: query.data, isLoading: query.isLoading };
}

export function useUser(id: string) {
  const getUser = async () => {
    const response = await fetch(`http://localhost:8080/api/v1/users/${id}`);
    return response.json();
  };

  const query = useQuery({ queryKey: ['user', id], queryFn: getUser });
  return { data: query.data, isLoading: query.isLoading };
}
