import * as React from "react";
import Head from "next/head";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { data } from "../data";
import { numberWithCommas } from "../../../utils";

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
        <Grid container spacing={2} direction="row">
          {getDonationers().map((dono) => (
            <Grid item xs={4} key={dono.name}>
              <Card sx={{ my: 2 }}>
                <CardContent>
                  <h3>{dono.name}</h3>
                  <h2>{`$${numberWithCommas(dono.amount)}`}</h2>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export { Donationers };
