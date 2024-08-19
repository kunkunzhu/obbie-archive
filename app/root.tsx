/** @format */
import React from "react";

import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
// import type { LinksFunction } from "@remix-run/node";
import "./app.css";
import CalendarTracker from "./components/tracker-calendar";

// export const links: LinksFunction = () => [
//   { rel: "stylesheet", href: appStylesHref },
// ];

export default function App() {
  const timeTable = {
    months: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  };

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="sidebar">
          <h1>oobie app</h1>
          <div>placeholder: selection</div>
        </div>
        <div id="main">
          <div>
            <h1>placeholder: tracker graph</h1>
            <div>
              <CalendarTracker
                months={timeTable.months}
                days={timeTable.days}
              />
            </div>
          </div>
          <div>
            <h1>placeholder: timeline tracker</h1>
          </div>
        </div>

        <Scripts />
      </body>
    </html>
  );
}
