/** @format */

import TimelineTracker from "../components/tracker/tracker-timeline";
import {
  Outlet,
  useLoaderData,
  useParams,
  useSearchParams,
} from "@remix-run/react";
import { getEmojiDict, timeTable } from "../example-data";
import { ActionFunctionArgs, json, LoaderFunctionArgs } from "@remix-run/node";
import { createHobbyEntry, getHobbyEntries } from "../data";
import { CreateModal } from "../components/modal/create-modal";
import { HobbyMutationI } from "~/types";
import CalendarTracker from "../components/tracker/tracker-calendar";

export const action = async ({ request }: ActionFunctionArgs) => {
  // CREATE ACTION (move to more appropriate location later)

  const formData = await request.formData();
  const formEntry = Object.fromEntries(formData);

  const dateString = formEntry.date as string;
  const projectsString = formEntry.projects as string;

  const entry: HobbyMutationI = {
    category: formEntry.category as string,
    text: formEntry.text as string,
    projects: projectsString ? projectsString.split(",") : [],
    date: {
      year: parseInt(dateString.substring(0, 4)),
      month: parseInt(dateString.substring(5, 7)),
      day: parseInt(dateString.substring(8, 10)),
    },
    dateStr: dateString,
    star: formEntry.star ? true : false,
  };
  return await createHobbyEntry(entry);
};

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
  const [searchParams] = useSearchParams();
  const { entries } = useLoaderData<typeof loader>();
  const emojiDict = getEmojiDict();
  const params = useParams();

  return (
    <>
      <div id="section" className="calendar">
        <div>
          <CalendarTracker
            months={timeTable.months}
            days={timeTable.days}
            entries={entries}
            hobby={params.selection ? params.selection : "all"}
          />
        </div>
      </div>
      <div id="section" className="timeline">
        {searchParams.get("create") && <CreateModal />}
        <TimelineTracker entries={entries} emojiDict={emojiDict} />
        <Outlet />
      </div>
    </>
  );
}
