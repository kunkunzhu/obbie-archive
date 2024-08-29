/** @format */

import { fakeHobbyEntriesData } from "./example-data";
import { HobbyEntryI, HobbyMutationI } from "./types";
import invariant from "tiny-invariant";
// FAKE DATABASE as placeholder until backend is created

const fakeHobbyEntries = {
  entries: {} as Record<string, HobbyEntryI>,

  async getAll(): Promise<HobbyEntryI[]> {
    return Object.keys(fakeHobbyEntries.entries).map(
      (key) => fakeHobbyEntries.entries[key]
    );
  },

  async get(id: string): Promise<HobbyEntryI | null> {
    return fakeHobbyEntries.entries[id] || null;
  },

  async create(values: HobbyMutationI): Promise<HobbyEntryI> {
    const id = Math.random().toString(36).substring(2, 9); // placeholder ID
    const newEntry = { id, ...values };
    fakeHobbyEntries.entries[id] = newEntry;
    return newEntry;
  },

  async set(id: string, values: HobbyMutationI): Promise<HobbyEntryI> {
    const entry = await fakeHobbyEntries.get(id);
    invariant(entry, `No entry found for ${id}`);
    const updatedEntry = { ...entry, ...values };
    fakeHobbyEntries.entries[id] = updatedEntry;
    return updatedEntry;
  },

  destroy(id: string): null {
    delete fakeHobbyEntries.entries[id];
    return null;
  },
};

// Helper functions to be exported

export async function getHobbyEntries(query?: string | null) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  let allEntries = await fakeHobbyEntries.getAll();

  if (!query || query == "all") {
    return allEntries;
  } else if (query) {
    if (query == "star") {
      return allEntries.filter((entry) => entry.star);
    } else {
      return allEntries.filter((entry) => entry.category == query);
    }
  }
}

export async function createHobbyEntry(values: HobbyMutationI) {
  const entry = await fakeHobbyEntries.create(values);
  return entry;
}

export async function getHobbyEntry(id: string) {
  return fakeHobbyEntries.get(id);
}

export async function updateHobbyEntry(id: string, updates: HobbyEntryI) {
  const entry = await fakeHobbyEntries.get(id);
  if (!entry) {
    throw new Error(`No entry found for ${id}`);
  }
  return fakeHobbyEntries.set(id, { ...entry, ...updates });
}

export async function deleteHobbyEntry(id: string) {
  fakeHobbyEntries.destroy(id);
}

fakeHobbyEntriesData.forEach((entry) => {
  fakeHobbyEntries.create({
    ...entry,
  });
});
