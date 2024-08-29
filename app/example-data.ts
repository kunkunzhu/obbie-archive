/** @format */

import { HobbyI } from "./types";

export const hobbiesData = [
  {
    emoji: "📚",
    name: "reading",
    // color: "#FFD3BA",
  },
  {
    emoji: "📝",
    name: "writing",
    // color: "#AEE2CD",
  },
  {
    emoji: "💻",
    name: "coding",
    // color: "#CFDEFF",
  },
  {
    emoji: "🎨",
    name: "art",
    // color: "#FFFCCF",
  },
];

export const timeTable = {
  months: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  days: ["S", "M", "T", "W", "T", "F", "S"],
};

export const fakeHobbyEntriesData = [
  {
    category: "reading",
    text: "read little fires everywhere during the hour-long commute",
    project: ["little fires everywhere"],
    date: {
      year: 2024,
      month: 8,
      day: 12,
    },
    dateStr: "2024-08-12",
    star: false,
  },
  {
    category: "coding",
    text: "worked on some bug fixes for hobby tracker",
    project: ["hobby tracker"],
    date: {
      year: 2024,
      month: 8,
      day: 11,
    },
    dateStr: "2024-08-11",
    star: false,
  },
  {
    category: "reading",
    text: "read little fires everywhere in the morning and astrophysics for people in a hurry before sleep",
    project: ["little fires everywhere", "astrophysics for people in a hurry"],
    date: {
      year: 2024,
      month: 8,
      day: 10,
    },
    dateStr: "2024-08-10",
    star: false,
  },
  {
    category: "writing",
    text: "started a new draft on thoughts on traveling",
    project: ["thoughts on traveling"],
    date: {
      year: 2024,
      month: 8,
      day: 10,
    },
    dateStr: "2024-08-10",
    star: false,
  },
  {
    category: "reading",
    text: "started reading little fires everywhere finallyyyy after having the book for so long",
    project: ["little fires everywhere"],
    date: {
      year: 2024,
      month: 8,
      day: 9,
    },
    dateStr: "2024-08-19",
    star: true,
  },
  {
    category: "art",
    text: "drew some random ppl i saw at the coffee shop hehehe",
    project: [],
    date: {
      year: 2024,
      month: 8,
      day: 9,
    },
    dateStr: "2024-08-19",
    star: true,
  },
  {
    category: "reading",
    text: "read astrophysics for people in a hurry for a couple hrs before sleep",
    project: ["astrophysics for people in a hurry"],
    date: {
      year: 2024,
      month: 8,
      day: 7,
    },
    dateStr: "2024-08-7",
    star: true,
  },
];

export const getEmojiDict = () => {
  let hobbyEmojiDict: any = {};
  hobbiesData.forEach((hobby: HobbyI) => {
    hobbyEmojiDict[hobby.name] = hobby.emoji;
  });
  return hobbyEmojiDict;
};
