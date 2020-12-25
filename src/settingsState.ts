import { State } from "@simple-html/core";

type formDetails = { loggedin: boolean; username: string };

export const formState = new State<formDetails>(
  "FORM_STATE",
  {} as formDetails
);
