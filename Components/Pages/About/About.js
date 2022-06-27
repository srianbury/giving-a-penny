import * as React from "react";
import Head from "next/head";
import { Box, Container } from "@mui/material";

const About = () => {
  return (
    <>
      <Head>
        <title>Giving a Penny | About</title>
      </Head>
      <Container>
        <Box sx={{ mb: 2 }}>
          howdy! the beloved PENNY is going extinct in 2023! to prove how
          powerful a penny can be, I've joined Team Feed to help end hunger in
          America. no one should go without a meal, yet more than 38 million
          people in America face hunger. I am spending the next 30 days
          attempting to cross America starting from only $0.01, and together we
          can help provide much needed meals to our neighbors through the
          Feeding America network of food banks. I'm asking you to join the
          cause! Every $1 donated helps provide at least 10 meals. - Ryan
        </Box>
        <Box>
          <h2>Rules:</h2>
          <ol>
            <li>All profit must come from penny</li>
            <li>
              All grub, boarding, transportation must come from profit from
              penny
            </li>
            <li>30 day time limit to cross America and give MrBeast a penny</li>
          </ol>
        </Box>
      </Container>
    </>
  );
};

export { About };
