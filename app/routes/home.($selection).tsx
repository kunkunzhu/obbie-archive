/** @format */

import TimelineTracker from "../components/tracker-timeline";
import { useLoaderData } from "@remix-run/react";
import { getEmojiDict } from "../example-data";
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { getHobbyEntries } from "../data";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const entries = params
    ? await getHobbyEntries(params.selection)
    : await getHobbyEntries();
  if (!entries) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ entries });
};

export default function Home() {
  const { entries } = useLoaderData<typeof loader>();
  const emojiDict = getEmojiDict();

  return (
    <div id="section" className="timeline">
      <TimelineTracker entries={entries} emojiDict={emojiDict} />
    </div>
  );
}
