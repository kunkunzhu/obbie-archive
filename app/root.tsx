/** @format */

import { Links, Meta, Outlet, Scripts, useNavigation } from "@remix-run/react";
import "./app.css";
import { hobbiesData } from "./example-data";
import SidebarNav from "./components/sidebar/sidebar-nav";
import { HobbyI } from "~/types";

export default function App() {
  const exampleHobbiesData = hobbiesData as HobbyI[];
  const navigation = useNavigation();

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

        <div
          id="main"
          className={navigation.state === "loading" ? "loading" : ""}
        >
          <Outlet />
        </div>
        <Scripts />
      </body>
    </html>
  );
}
