import { Stack, Typography } from "@mui/material";
import { useUsers } from "../hooks/use-users/use-users";
import UsersTable from "../users-table";

function UsersView() {
  const { users, updateUser, deleteUser } = useUsers();

  return (
    <Stack spacing={3} direction="column">
      <Typography sx={{ fontSize: 32, fontWeight: 600 }}>User</Typography>

      <UsersTable users={users} onSave={updateUser} onDelete={deleteUser} />
    </Stack>
  );
}

export default UsersView;
