/** @format */

import { HobbyI } from "~/types";
import { ReactNode } from "react";
import "./sidebar.css";
import { NavLink } from "@remix-run/react";

interface SidebarNavI {
  hobbies: HobbyI[];
  // colorDict: any;
}

export default function SidebarNav({ hobbies }: SidebarNavI) {
  const renderHobbies = (hobbies: HobbyI[]): ReactNode[] => {
    let hobbiesArray: ReactNode[] = [];
    hobbies.map((hobby, index) => {
      hobbiesArray.push(
        <div key={index}>
          <NavLink
            to={`/home/${hobby.name}`}
            className={({ isActive, isPending }) =>
              isActive
                ? "active " + hobby.name
                : isPending
                ? "pending " + hobby.name
                : hobby.name
            }
          >
            {hobby.emoji}
          </NavLink>
        </div>
      );
    });
    hobbiesArray.push(
      <div key={9}>
        <NavLink
          to={`/home/star`}
          className={({ isActive, isPending }) =>
            isActive ? "active " : isPending ? "pending " : ""
          }
        >
          ⭐
        </NavLink>
      </div>
    );
    hobbiesArray.push(
      <div key={10}>
        <NavLink to={`/home/all`}>⚪</NavLink>
      </div>
    );
    return hobbiesArray;
  };

  return <div className="sidebar-selector">{renderHobbies(hobbies)}</div>;
}
