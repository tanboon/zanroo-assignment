import { Container } from "@mui/material";
import React from "react";
import UsersPage from "./pages/users/page";

const App: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <UsersPage />
    </Container>
  );
};

export default App;
