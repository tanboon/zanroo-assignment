import { useCallback, useEffect, useReducer } from "react";
import { usersReducer } from "./users-reducer";

const KEY = "persistent-users";

function loadUsers(): User[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "[]");
  } catch (error) {
    return [];
  }
}

function useUsers() {
  const [users, dispatch] = useReducer(usersReducer, [], loadUsers);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(users));
  }, [users]);

  const addUser = useCallback((data: Omit<User, "id">) => {
    dispatch({ type: "add", user: { id: crypto.randomUUID(), ...data } });
  }, []);

  const updateUser = useCallback(
    (user: User) => dispatch({ type: "update", user }),
    [],
  );
  const deleteUser = useCallback(
    (id: string) => dispatch({ type: "delete", id }),
    [],
  );

  return { users, addUser, updateUser, deleteUser };
}

export { useUsers };
