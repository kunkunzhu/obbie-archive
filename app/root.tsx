/** @format */

import {
  Links,
  Meta,
  Outlet,
  redirect,
  Scripts,
  useSearchParams,
} from "@remix-run/react";
import "./app.css";
import CalendarTracker from "./components/tracker/tracker-calendar";
import { timeTable, hobbiesData } from "./example-data";
import SidebarNav from "./components/sidebar/sidebar-nav";
import { HobbyI } from "~/types";

export default function App() {
  const exampleHobbiesData = hobbiesData as HobbyI[];

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
          <SidebarNav hobbies={exampleHobbiesData} />
        </div>

        <div id="main">
          <div id="section" className="calendar">
            <div>
              <CalendarTracker
                months={timeTable.months}
                days={timeTable.days}
              />
            </div>
          </div>
          <Outlet />
        </div>
        <Scripts />
      </body>
    </html>
  );
}
