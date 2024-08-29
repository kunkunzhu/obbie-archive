/** @format */

import { ReactNode } from "react";
import "./tracker.css";
import { HobbyEntryI } from "~/types";
import { dateIntoYear } from "../../util";

interface CalendarTrackerI {
  months: string[];
  days: string[];
  entries: HobbyEntryI[];
  hobby: string;
}

export default function CalendarTracker({
  months,
  days,
  entries,
  hobby,
}: CalendarTrackerI) {
  function renderTime(times: string[]): ReactNode[] {
    let timesArray: ReactNode[] = [];
    times.map((time, index) => {
      timesArray.push(<li key={index}>{time}</li>);
    });
    return timesArray;
  }

  function renderSquares(entryDays: number[]) {
    let squares: ReactNode[] = [];

    for (let i = 1; i < 365; i++) {
      const entryDay = entryDays.includes(i + 1);

      squares.push(<li key={i} className={entryDay ? hobby : ""}></li>);
    }
    return squares;
  }

  const entryDays = entries.map((entry) => dateIntoYear(entry.date));

  return (
    <div className="graph">
      <ul className="months">{renderTime(months)}</ul>
      <ul className="days">{renderTime(days)}</ul>
      <ul className="squares">{renderSquares(entryDays)}</ul>
    </div>
  );
}
