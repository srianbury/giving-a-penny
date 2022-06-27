import * as React from "react";
import Head from "next/head";
import NextLink from "next/link";
import { Container, Link, Box } from "@mui/material";
import { data } from "../data";
import { numberWithCommas, getMealsDonated } from "../../../utils";

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
        <title>Giving a Penny | Donations</title>
      </Head>
      <Container>
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
