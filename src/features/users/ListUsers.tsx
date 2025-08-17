import React from "react";
import Button from "@/components/Button";
import UsersTable from "./UsersTable";

const ListUsers = (): React.JSX.Element => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="mt-2 text-5xl tracking-tight sm:text-6xl text-pretty">
          Users
        </h1>
        <Button>New User</Button>
      </div>
      {/* User list */}
      <UsersTable users={[]} />
    </div>
  );
};

export default ListUsers;