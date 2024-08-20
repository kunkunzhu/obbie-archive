/** @format */

export interface HobbyDataI {
  category: string;
  text?: string;
  projects?: string[];
  pictureURL?: string;
  date: Date;
  star: boolean;
}

export interface HobbyI {
  emoji: string;
  name: string;
  // color: string;
}
