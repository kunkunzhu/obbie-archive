/** @format */

import { HobbyEntryI } from "~/types";
import "remixicon/fonts/remixicon.css";

interface TimelineTrackerI {
  entries: HobbyEntryI[];
  emojiDict: any;
}

interface TimelineEntryI {
  entry: HobbyEntryI;
  emoji: string;
}

function TimelineEntry({ entry, emoji }: TimelineEntryI) {
  const { category, date } = entry;

  const className = "timeline-entry " + category;

  // const month = date.month;
  const day = date.day;

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
  function renderEntry({ entry, idx }: { entry: HobbyEntryI; idx: number }) {
    const emoji = emojiDict[entry.category];
    return <TimelineEntry entry={entry} emoji={emoji} />;
  }
  const test = [];

  return (
    <div className="timeline-wrapper">
      <div className="add-action" onClick={() => alert("ADD")}>
        <i className="ri-add-line"></i>
      </div>
      <div className="timeline">
        {entries.length > 0 ? (
          <div className="entries">
            {entries.map((entry, idx) => renderEntry({ entry, idx }))}
          </div>
        ) : (
          <div className="error">
            There are no entries yet... Start by logging one! (˶˃ ᵕ ˂˶) .ᐟ.ᐟ
          </div>
        )}
      </div>
    </div>
  );
}
