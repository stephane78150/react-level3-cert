import { FC } from "react";
import { SearchField } from "./SearchField";
import { listOfCountries, listOfUsers } from "./api";

export const App: FC = () => {
  return (
    <div className="container-fluid p-5">
      <h1 className="mb-5">Exercise 3 : typeahead</h1>
      <SearchField
        data={listOfCountries}
        idProperty="code"
        labelProperty="name"
      >
        Choose a country names sing the typeahead below (eg. type 'an')
      </SearchField>
      <SearchField data={listOfUsers} idProperty="id" labelProperty="name">
        Choose a user name using the typeahead below (eg. type 'cle')
      </SearchField>
      <SearchField data={listOfUsers} idProperty="id" labelProperty="email">
        Choose an email using the typeahead below (eg. type 'me' or 'biz')
      </SearchField>
    </div>
  );
};
