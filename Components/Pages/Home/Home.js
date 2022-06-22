import * as React from "react";
import { Container, CssBaseline, Link } from "@mui/material";
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
import { data } from "./data";

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          my: 2,
          height: "90vh",
        }}
      >
        <h1
          style={{
            margin: 0,
          }}
        >
          I Survived On $0.01 For 30 Days
        </h1>
        <Link
          href="https://www.feedingamerica.org/penny"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate Here
        </Link>
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
      currencyConvert !== undefined ? currencyConvert : `$${cash.toFixed(2)}`;

    const inventory = payload[0].payload.inventory;
    const note = payload[0].payload.note;

    return (
      <div className="custom-tooltip">
        <p className="desc">{`Cash: ${cashText}`}</p>
        <div className="desc">
          <span>{`Inventory${inventory.length > 0 ? "" : " None"}`}</span>
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
