/** @format */

import { HobbyDataI } from "common/types";
import "remixicon/fonts/remixicon.css";

interface TimelineTrackerI {
  entries: HobbyDataI[];
  emojiDict: any;
}

interface TimelineEntryI {
  entry: HobbyDataI;
  key: number;
  emoji: string;
}

function TimelineEntry({ entry, key, emoji }: TimelineEntryI) {
  const { category, date } = entry;

  const className = "timeline-entry " + category;

  // const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();

  return (
    <div className={className}>
      <div className="day">{day}</div>
      <span className="category">{emoji}</span>
      {entry.text && <div className="text">{entry.text}</div>}
    </div>
  );
}

export default function TimelineTracker({
  entries,
  emojiDict,
}: TimelineTrackerI) {
  function renderEntry({ entry, idx }: { entry: HobbyDataI; idx: number }) {
    const emoji = emojiDict[entry.category];
    return <TimelineEntry entry={entry} key={idx} emoji={emoji} />;
  }

  return (
    <div className="timeline-wrapper">
      <div className="add-action" onClick={() => alert("ADD")}>
        <i className="ri-add-line"></i>
      </div>
      {entries.length > 0 ? (
        <div className="timeline">
          {entries.map((entry, idx) => renderEntry({ entry, idx }))}
        </div>
      ) : (
        <div>log an entry here!</div>
      )}
    </div>
  );
}
