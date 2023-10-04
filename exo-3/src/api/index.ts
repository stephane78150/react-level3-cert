import { SearchableItem } from "../my-typeahead";
import users from "./data/users.json";

export const listOfUserNames = users.map(
  (u) => ({ id: `${u.id}`, label: u.name }) as SearchableItem,
);

export const listOfEmails = users.map(
  (u) => ({ id: `${u.id}`, label: u.email }) as SearchableItem,
);
