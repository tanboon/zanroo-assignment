import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import UserRow from "./user-row";
import type { User } from "../../types/user/user";

const COLUMNS = [
  { id: "name", label: "Name", width: 180 },
  { id: "age", label: "Age", width: 150 },
  { id: "nickname", label: "Nickname", width: 240 },
  { id: "action", label: "Action", width: 300 },
] as const;

type UsersTableProps = {
  users: User[];
  onSave: (user: User) => void;
  onDelete: (id: string) => void;
};

function UsersTable({ users, onSave, onDelete }: UsersTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: 1 }}>
        <TableHead>
          <TableRow>
            {COLUMNS.map((c) => (
              <TableCell key={c.id} sx={{ width: c.width }}>
                {c.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((u) => (
            <UserRow key={u.id} user={u} onSave={onSave} onDelete={onDelete} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UsersTable;
