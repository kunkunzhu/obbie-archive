/** @format */

import { HobbyDataI } from "common/types";
import { ReactNode } from "react";

interface TimelineTrackerI {
  entries: HobbyDataI[];
}

interface TimelineEntryI {
  entry: HobbyDataI;
}

function TimelineEntry({ entry }: TimelineEntryI) {
  return (
    <div className="timeline-entry">
      {entry.text && <div className="text">{entry.text}</div>}
    </div>
  );
}

export default function TimelineTracker({ entries }: TimelineTrackerI) {
  return (
    <div>
      {entries.length > 0 ? (
        <div className="timeline">
          {entries.map((entry, idx) => (
            <TimelineEntry entry={entry} key={idx} />
          ))}
        </div>
      ) : (
        <div>log an entry here!</div>
      )}
    </div>
  );
}
