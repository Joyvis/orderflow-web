import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';

export default function NewUserButton() {
  return (
    <Button variant="outline" asChild>
      <Link to="/users/create">New User</Link>
    </Button>
  );
}
