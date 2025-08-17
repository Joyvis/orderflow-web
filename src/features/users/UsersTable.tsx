import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface UsersTableProps {
  users: User[];
}

const UsersTable = ({ users }: UsersTableProps) => {
  return (
    <Table>
        <TableHeader>
            <TableRow>
            <TableHead>Name</TableHead>
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
                </TableRow>
            ))}
        </TableBody>
    </Table>
  )
}

export default UsersTable;