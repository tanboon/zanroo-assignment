import { Button, Stack, Typography } from "@mui/material";
import { useUsers } from "../hooks/use-users/use-users";
import UsersTable from "../users-table";
import { useState } from "react";
import AddUserForm from "../add-user-form";
import { User } from "../../../types/user/user";

function UsersView() {
  const { users, addUser, updateUser, deleteUser } = useUsers();
  const [isAdding, setIsAdding] = useState(false);

  const handleClickAdd = (user: Omit<User, "id">) => {
    addUser(user);
    setIsAdding(false);
  };

  return (
    <Stack spacing={3} direction="column" sx={{ alignItems: "start" }}>
      <Typography sx={{ fontSize: 32, fontWeight: 600 }}>User</Typography>

      <UsersTable users={users} onSave={updateUser} onDelete={deleteUser} />

      {isAdding && (
        <AddUserForm
          onAdd={handleClickAdd}
          onCancel={() => setIsAdding(false)}
        />
      )}

      <Button
        variant="contained"
        disabled={isAdding}
        onClick={() => setIsAdding(true)}
      >
        Add
      </Button>
    </Stack>
  );
}

export default UsersView;
