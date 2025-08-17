import { Button } from "@/components/ui/button";
import UsersTable from "./UsersTable";
import useUsers from "./useUsers";

const ListUsers = () => {
  const { users } = useUsers();

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="mt-2 text-5xl tracking-tight sm:text-6xl text-pretty">
          Users
        </h1>
        <Button variant="outline">New User</Button>
      </div>

      <div className="flex flex-col gap-4">
        <UsersTable users={users} />
      </div>
    </div>
  );
};

export default ListUsers;