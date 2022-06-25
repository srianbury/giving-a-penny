import * as React from "react";
import Head from "next/head";
import NextLink from "next/link";
import { Container, CssBaseline, Link, Box } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
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

const Home = () => {
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
          <NextLink href="/donations">
            <Link>Donations</Link>
          </NextLink>
        </Box>
        <ResponsiveContainer height="100%" width="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dayNum" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
              type="monotone"
              dataKey="total"
              stroke="#B87333"
              activeDot={{ r: 8 }}
            />
            {/* <Line type="monotone" dataKey="donations" stroke="#82ca9d" /> */}
          </LineChart>
        </ResponsiveContainer>
      </Container>
    </>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const cash = payload[0].payload.total;
    const currencyConvert = payload[0].payload.currencyConvert;
    const cashText =
      currencyConvert !== undefined
        ? currencyConvert
        : `$${numberWithCommas(cash)}`;

    const inventory = payload[0].payload.inventory;
    const note = payload[0].payload.note;
    const totalDonations = payload[0].payload.donations;
    const mealsDonated = payload[0].payload.mealsDonated;
    const topDonations = payload[0].payload.topDonations;

    return (
      <div className="custom-tooltip">
        {mealsDonated !== undefined ? (
          <h2 className="desc">
            Meals donated: {numberWithCommas(mealsDonated)}
          </h2>
        ) : null}
        {totalDonations !== undefined ? (
          <p className="desc">Top donations:</p>
        ) : null}
        {topDonations && topDonations.length > 0 ? (
          <ol>
            {topDonations.map((dono) => (
              <li key={dono.name}>{`${dono.name} - $${numberWithCommas(
                dono.amount
              )}`}</li>
            ))}
          </ol>
        ) : null}
        <p className="desc">{`Cash: ${cashText}`}</p>
        <div className="desc">
          <span>{`Inventory:${inventory.length > 0 ? "" : " None"}`}</span>
          {inventory.length > 0 ? (
            <ul>
              {inventory.map((val) => (
                <li key={val}>{val}</li>
              ))}
            </ul>
          ) : null}
        </div>
        {note ? <p className="desc">{note}</p> : null}
      </div>
    );
  }

  return null;
};

export { Home };
