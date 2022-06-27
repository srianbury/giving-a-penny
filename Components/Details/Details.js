import * as React from "react";
import { Box, Container, Link } from "@mui/material";
import NextLink from "next/link";
import { getMealsDonated } from "../../utils";

const Details = () => {
  return (
    <Container>
      <NextLink href="/">
        <a>
          <h1>I Survived On $0.01 For 30 Days</h1>
        </a>
      </NextLink>
      <h2>Meals donated: {getMealsDonated()}</h2>
      <Box
        sx={{
          mb: 2,
        }}
      >
        <span>
          <Link
            href="https://www.feedingamerica.org/penny"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate Here
          </Link>
          {` `}or share this site and I'll donate $0.01 for every user that
          visits :)
        </span>
      </Box>
    </Container>
  );
};

export { Details };
