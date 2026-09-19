import { Container } from "@mui/material";
import React from "react";
import UserPage from "./pages/user/page";

const App: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <UserPage />
    </Container>
  );
};

export default App;
