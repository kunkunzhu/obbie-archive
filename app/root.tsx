/** @format */
import React from "react";

import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
// import type { LinksFunction } from "@remix-run/node";
import "./app.css";
import CalendarTracker from "./components/tracker-calendar";
import TimelineTracker from "./components/tracker-timeline";
import {
  hobbyEntriesData,
  timeTable,
  hobbiesData,
} from "../common/example-data";
import SidebarNav from "./components/sidebar-nav";
import { HobbyI } from "common/types";

// export const links: LinksFunction = () => [
//   { rel: "stylesheet", href: appStylesHref },
// ];

export default function App() {
  const exampleHobbyEntriesData = Object.values(hobbyEntriesData);
  const exampleHobbiesData = hobbiesData as HobbyI[];
  let hobbyNameDict: any = {};
  let hobbyColorDict: any = {};
  hobbiesData.forEach((hobby: HobbyI) => {
    hobbyNameDict[hobby.name] = hobby.emoji;
  });
  hobbiesData.forEach((hobby: HobbyI) => {
    hobbyColorDict[hobby.name] = hobby.color;
  });

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
          <h1>obbie app</h1>
          <h1 className="placeholder">placeholder: selection</h1>
          <SidebarNav hobbies={exampleHobbiesData} />
        </div>
        <div id="main">
          <div>
            <h1 className="placeholder">placeholder: tracker graph</h1>
            <div>
              <CalendarTracker
                months={timeTable.months}
                days={timeTable.days}
              />
            </div>
          </div>
          <div>
            <h1 className="placeholder">placeholder: timeline tracker</h1>
            <TimelineTracker entries={exampleHobbyEntriesData} />
          </div>
        </div>

        <Scripts />
      </body>
    </html>
  );
}
