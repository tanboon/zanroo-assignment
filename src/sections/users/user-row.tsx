import { Button, Stack, TableCell, TableRow, TextField } from "@mui/material";
import { memo, useState } from "react";
import { User } from "../../types/user/user";

type UserRowProps = {
  user: User;
  onSave: (user: User) => void;
  onDelete: (id: string) => void;
};

function UserRow({ user, onSave, onDelete }: UserRowProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<User>(user);

  const handleEdit = () => {
    setDraft(user);
    setEditing(true);
  };

  const handleSave = () => {
    onSave({
      ...draft,
      name: draft.name.trim(),
      nickname: draft.nickname.trim(),
    });
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleDelete = () => {
    onDelete(user.id);
  };

  if (!editing) {
    return (
      <TableRow>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.age}</TableCell>
        <TableCell>{user.nickname}</TableCell>
        <TableCell>
          <Stack spacing={1} direction="row">
            <Button variant="text" onClick={handleEdit}>
              Edit
            </Button>
            <Button variant="text" color="error" onClick={handleDelete}>
              Delete
            </Button>
          </Stack>
        </TableCell>
      </TableRow>
    );
  }

  return (
    <TableRow>
      <TableCell>
        <TextField
          size="small"
          value={draft.name}
          onChange={(e) => setDraft({ ...draft, name: e.target.value })}
        />
      </TableCell>
      <TableCell>
        <TextField
          select
          size="small"
          value={draft.age}
          onChange={(e) => setDraft({ ...draft, age: Number(e.target.value) })}
        />
      </TableCell>
      <TableCell>
        <TextField
          size="small"
          value={draft.nickname}
          onChange={(e) => setDraft({ ...draft, nickname: e.target.value })}
        />
      </TableCell>
      <TableCell>
        <Stack spacing={1} direction="row">
          <Button
            variant="text"
            disabled={!draft.name.trim() || !draft.age || !draft.nickname}
            onClick={handleSave}
          >
            Save
          </Button>
          <Button variant="text" onClick={handleCancel}>
            Cancel
          </Button>
        </Stack>
      </TableCell>
    </TableRow>
  );
}

export default memo(UserRow);
