import * as React from "react";
import Head from "next/head";
import NextLink from "next/link";
import { Container, CssBaseline, Link, Box } from "@mui/material";
import { data } from "../data";

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (parts.length >= 2) {
    parts[1] = `${parts[1]}00`.substring(0, 2);
  }
  return parts.join(".");
}

function getMealsDonated() {
  for (let i = data.length - 1; i > -1; i--) {
    const curMealsDonated = data[i].mealsDonated;
    if (curMealsDonated !== undefined) {
      return numberWithCommas(curMealsDonated);
    }
  }
  return 0;
}

function getDonationers() {
  for (let i = data.length - 1; i > -1; i--) {
    const { topDonations } = data[i];
    if (topDonations !== undefined) {
      return topDonations;
    }
  }
  return [];
}

const Donationers = () => {
  return (
    <>
      <Head>
        <title>Giving a Penny</title>
      </Head>
      <CssBaseline />
      <Container
        sx={{
          my: 2,
          height: "90vh",
        }}
      >
        <NextLink href="/">
          <a>
            <h1>I Survived On $0.01 For 30 Days</h1>
          </a>
        </NextLink>
        <h2>Meals donated: {getMealsDonated()}</h2>
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
        <Box
          sx={{
            cursor: "pointer",
          }}
        >
          <NextLink href="/">
            <Link>Home</Link>
          </NextLink>
        </Box>
        <h2>Meals donated: {getMealsDonated()}</h2>
        <ol>
          {getDonationers().map((dono) => (
            <li key={dono.name}>{`${dono.name} - $${numberWithCommas(
              dono.amount
            )}`}</li>
          ))}
        </ol>
      </Container>
    </>
  );
};

export { Donationers };
