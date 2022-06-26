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
import { numberWithCommas, getMealsDonated } from "../../../utils";

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

    const { dayNum, inventory, note, mealsDonated } = payload[0].payload;
    // const totalDonations = payload[0].payload.donations;
    // const topDonations = payload[0].payload.topDonations;

    return (
      <div className="custom-tooltip">
        <div>Day: {dayNum}</div>
        {mealsDonated !== undefined ? (
          <h2 className="desc">
            Meals donated: {numberWithCommas(mealsDonated)}
          </h2>
        ) : null}
        {/* {totalDonations !== undefined ? (
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
        ) : null} */}
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
