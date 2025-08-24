import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { User } from '../../types/User';
import { Button } from '@/components/shared/Button';

interface UsersTableProps {
  resources: User[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const UsersTable = ({ resources, onEdit, onDelete }: UsersTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {resources.length == 0 && (
          <TableRow>
            <TableCell colSpan={2} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
        {resources.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              {onEdit && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => user.id && onEdit(user.id)}
                >
                  Edit
                </Button>
              )}
              {onDelete && (
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => user.id && onDelete(user.id)}
                >
                  Delete
                </Button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UsersTable;
