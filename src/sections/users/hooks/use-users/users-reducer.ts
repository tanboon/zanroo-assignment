import { User } from "../../../../types/user/user";

type UsersAction =
  | { type: "add"; user: User }
  | { type: "update"; user: User }
  | { type: "delete"; id: string };

function usersReducer(state: User[], action: UsersAction): User[] {
  switch (action.type) {
    case "add":
      return [...state, action.user];
    case "update":
      return state.map((u) => (u.id === action.user.id ? action.user : u));
    case "delete":
      return state.filter((u) => u.id !== action.id);
    default:
      return state;
  }
}

export { usersReducer };
