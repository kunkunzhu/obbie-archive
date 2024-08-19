/** @format */

import { ReactNode } from "react";
import "./tracker.css";

interface CalendarTrackerI {
  months: string[];
  days: string[];
}

export default function CalendarTracker({ months, days }: CalendarTrackerI) {
  const renderTime = (times: string[]): ReactNode[] => {
    let timesArray: ReactNode[] = [];
    times.map((time) => {
      timesArray.push(<li>{time}</li>);
    });
    return timesArray;
  };

  const renderSquares = () => {
    let squares: ReactNode[] = [];
    for (let i = 1; i < 365; i++) {
      const level = Math.floor(Math.random() * 3);
      squares.push(<li key={i}></li>);
    }
    return squares;
  };

  return (
    <div className="graph">
      <ul className="months">{renderTime(months)}</ul>
      <ul className="days">{renderTime(days)}</ul>
      <ul className="squares">{renderSquares()}</ul>
    </div>
  );
}
