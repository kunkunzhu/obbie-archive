/** @format */

import { HobbyI } from "~/types";
import { ReactNode } from "react";
import "./sidebar.css";
import { Link } from "@remix-run/react";

interface SidebarNavI {
  hobbies: HobbyI[];
  // colorDict: any;
}

export default function SidebarNav({ hobbies }: SidebarNavI) {
  const renderHobbies = (hobbies: HobbyI[]): ReactNode[] => {
    let hobbiesArray: ReactNode[] = [];
    hobbies.map((hobby, index) => {
      const className = "hobby " + hobby.name;
      hobbiesArray.push(
        <div className={className}>
          <Link to={`/home/${hobby.name}`} key={index}>
            {hobby.emoji}
          </Link>
        </div>
      );
    });
    hobbiesArray.push(
      <div className="hobby star">
        <Link to={`/home/star`} key={9}>
          ⭐
        </Link>
      </div>
    );
    hobbiesArray.push(
      <div className="hobby all">
        <Link to={`/home`} key={10}>
          ⚪
        </Link>
      </div>
    );
    return hobbiesArray;
  };

  return <div className="sidebar-selector">{renderHobbies(hobbies)}</div>;
}
