import * as React from "react";
import { useContext } from "react";
import { Box, Link, SwipeableDrawer } from "@mui/material";
import NextLink from "next/link";
import { NavigationContext } from ".";

const Navigation = () => {
  const { isOpen, closeDrawer, openDrawer } = useContext(NavigationContext);
  return (
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      onClose={closeDrawer}
      onOpen={openDrawer}
    >
      <Box
        sx={{ width: 250, p: 2 }}
        role="presentation"
        onClick={closeDrawer}
        onKeyDown={closeDrawer}
      >
        <NavLink href="/" title="Home" />
        <NavLink href="/donations" title="Donations" />
        <NavLink href="/about" title="About" />
      </Box>
    </SwipeableDrawer>
  );
};

const NavLink = ({ href, title }) => {
  return (
    <Box
      sx={{
        cursor: "pointer",
        "&:hover": {
          textDecoration: "underline",
        },
      }}
    >
      <NextLink href={href}>
        <h2>{title}</h2>
      </NextLink>
    </Box>
  );
};

export { Navigation };
