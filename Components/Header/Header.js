import * as React from "react";
import { useContext } from "react";
import { Box, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavigationContext } from "../Navigation";

const Header = () => {
  const { openDrawer } = useContext(NavigationContext);
  return (
    <Container>
      <Box
        sx={{
          cursor: "pointer",
        }}
      >
        <h1 onClick={openDrawer}>
          <MenuIcon /> $0.01
        </h1>
      </Box>
    </Container>
  );
};

export { Header };
