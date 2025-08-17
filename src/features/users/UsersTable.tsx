import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { User } from "./User";

const UsersTable = ({ users }: { users: User[] }) => {
  return (
    <Table>
        <TableHeader>
            <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {users.length == 0 && (
                <TableRow>
                    <TableCell colSpan={2} className="h-24 text-center">No results.</TableCell>
                </TableRow>
            )}
            {users.map((user) => (
                <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
  )
}

export default UsersTable;