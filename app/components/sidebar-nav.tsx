/** @format */

import { HobbyI } from "common/types";
import { ReactNode } from "react";
import "./sidebar.css";

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
          <a href={`/home`} key={index}>
            {hobby.emoji}
          </a>
        </div>
      );
    });
    hobbiesArray.push(
      <div className="hobby star">
        <a href={`/`} key={9}>
          ⭐
        </a>
      </div>
    );
    hobbiesArray.push(
      <div className="hobby all">
        <a href={`/`} key={10}>
          ⚪
        </a>
      </div>
    );
    return hobbiesArray;
  };

  return <div className="sidebar-selector">{renderHobbies(hobbies)}</div>;
}
