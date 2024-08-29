/** @format */

import { ReactNode } from "react";
import "./tracker.css";

interface CalendarTrackerI {
  months: string[];
  days: string[];
}

interface HobbySquareI {
  key: number;
  hobby: number;
}

export default function CalendarTracker({ months, days }: CalendarTrackerI) {
  const renderTime = (times: string[]): ReactNode[] => {
    let timesArray: ReactNode[] = [];
    times.map((time, index) => {
      timesArray.push(<li key={index}>{time}</li>);
    });
    return timesArray;
  };

  const renderSquares = () => {
    let squares: ReactNode[] = [];

    for (let i = 1; i < 365; i++) {
      const hobby = Math.floor(Math.random() * 3);
      squares.push(<li key={i} id={hobby.toString()}></li>);
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
