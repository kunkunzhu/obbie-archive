/** @format */

import { Form } from "@remix-run/react";
import Button from "../button/button";
import { hobbiesData } from "../../example-data";

export default function CreateModalForm() {
  return (
    <Form id="form" method="post">
      <p className="field">
        <span>hobby</span>
        <select className="input" name="category">
          {hobbiesData.map((hobby, index) => (
            <option value={hobby.name} key={index}>
              {hobby.emoji}&thinsp;{hobby.name}
            </option>
          ))}
        </select>
      </p>
      <p className="field">
        <span>description</span>
        <input
          className="input"
          defaultValue=""
          aria-label="text"
          name="text"
          placeholder="what did you do?"
        />
      </p>
      <p className="field">
        <span>project</span>
        <input
          className="input"
          defaultValue=""
          aria-label="projects"
          name="projects"
          placeholder="what did you do?"
        />
      </p>
      {/* <p className="field">
        <span>picture</span>
      </p> */}
      <p className="field">
        <span>date</span>
        <input className="input" name="date" aria-label="Date" type="date" />
      </p>
      <p className="field">
        <span>star</span>
        <input
          className="input"
          type="checkbox"
          name="star"
          style={{ width: "2rem", borderRadius: "100%" }}
        ></input>
      </p>
      <p className="submit">
        <Button type="submit" text="submit" />
      </p>
    </Form>
  );
}
