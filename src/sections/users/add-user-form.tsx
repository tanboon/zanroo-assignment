import { Button, MenuItem, Stack, TextField } from "@mui/material";
import { useState } from "react";
import type { User } from "../../types/user/user";
import {
  AGE_OPTIONS,
  DEFAULT_AGE,
  MAX_AGE,
  MIN_AGE,
} from "../../constants/user";

type NewUser = Omit<User, "id">;

const EMPTY_USER: NewUser = { name: "", age: DEFAULT_AGE, nickname: "" };

type AddUserFormProps = {
  onAdd: (user: NewUser) => void;
  onCancel: () => void;
};

function AddUserForm({ onAdd, onCancel }: AddUserFormProps) {
  const [draft, setDraft] = useState<NewUser>(EMPTY_USER);

  const isFormValid = Boolean(
    draft.name.trim() &&
    draft.age >= MIN_AGE &&
    draft.age <= MAX_AGE &&
    draft.nickname.trim(),
  );

  const handleSave = () => {
    if (!isFormValid) return;
    onAdd({
      ...draft,
      name: draft.name.trim(),
      age: Number(draft.age),
      nickname: draft.nickname.trim(),
    });
  };

  return (
    <Stack direction={{ xs: "column", sm: "row" }} sx={{ gap: 2 }}>
      <Stack direction="row" spacing={2}>
        <TextField
          size="small"
          autoFocus
          placeholder="Name"
          value={draft.name}
          onChange={(e) => setDraft({ ...draft, name: e.target.value })}
        />
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
        <TextField
          size="small"
          placeholder="Nickname"
          value={draft.nickname}
          onChange={(e) => setDraft({ ...draft, nickname: e.target.value })}
        />
      </Stack>

      <Stack direction="row" spacing={2} sx={{ justifyContent: "end" }}>
        <Button
          variant="contained"
          disabled={!isFormValid}
          onClick={handleSave}
        >
          Save
        </Button>
        <Button variant="outlined" onClick={onCancel}>
          Cancel
        </Button>
      </Stack>
    </Stack>
  );
}

export default AddUserForm;
