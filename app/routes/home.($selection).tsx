/** @format */

import TimelineTracker from "../components/tracker/tracker-timeline";
import {
  Outlet,
  redirect,
  useLoaderData,
  useSearchParams,
} from "@remix-run/react";
import { getEmojiDict } from "../example-data";
import { ActionFunctionArgs, json, LoaderFunctionArgs } from "@remix-run/node";
import { createHobbyEntry, getHobbyEntries } from "../data";
import { CreateModal } from "../components/modal/create-modal";
import { HobbyMutationI } from "~/types";

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

  return (
    <div id="section" className="timeline">
      {searchParams.get("create") && <CreateModal />}
      <TimelineTracker entries={entries} emojiDict={emojiDict} />
      <Outlet />
    </div>
  );
}
