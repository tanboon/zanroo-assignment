import {
  Button,
  MenuItem,
  Stack,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
import { memo, useState } from "react";
import { User } from "../../types/user/user";
import { AGE_OPTIONS, MAX_AGE, MIN_AGE } from "../../constants/user";

type UserRowProps = {
  user: User;
  onSave: (user: User) => void;
  onDelete: (id: string) => void;
};

function UserRow({ user, onSave, onDelete }: UserRowProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<User>(user);

  const isFormValid = Boolean(
    draft.name.trim() &&
    draft.age >= MIN_AGE &&
    draft.age <= MAX_AGE &&
    draft.nickname.trim(),
  );

  const handleEdit = () => {
    setDraft(user);
    setEditing(true);
  };

  const handleSave = () => {
    if (!isFormValid) return;
    onSave({
      ...draft,
      name: draft.name.trim(),
      age: Number(draft.age),
      nickname: draft.nickname.trim(),
    });
    setEditing(false);
  };

  const handleCancel = () => {
    setDraft(user);
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
            <Button variant="contained" onClick={handleEdit}>
              Edit
            </Button>
            <Button variant="contained" color="error" onClick={handleDelete}>
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
          sx={{ minWidth: 90 }}
          value={draft.age}
          onChange={(e) => setDraft({ ...draft, age: Number(e.target.value) })}
          slotProps={{
            select: {
              MenuProps: {
                slotProps: {
                  paper: {
                    sx: { maxHeight: 300 },
                  },
                },
              },
            },
          }}
        >
          {AGE_OPTIONS.map((age) => (
            <MenuItem key={age} value={age}>
              {age}
            </MenuItem>
          ))}
        </TextField>
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
            variant="contained"
            disabled={!isFormValid}
            onClick={handleSave}
          >
            Edit
          </Button>
          <Button variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
        </Stack>
      </TableCell>
    </TableRow>
  );
}

export default memo(UserRow);
