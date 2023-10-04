import { SearchableItem } from "../my-typeahead";
import users from "./data/users.json";
import countries from "./data/countries";

export const listOfUserNames = users.map(
  (u) => ({ id: `${u.id}`, label: u.name }) as SearchableItem,
);

export const listOfEmails = users.map(
  (u) => ({ id: `${u.id}`, label: u.email }) as SearchableItem,
);

export const listOfCountries = countries.map(
    (c) => ({ id: `${c.code}`, label: c.name }) as SearchableItem,
  );
  