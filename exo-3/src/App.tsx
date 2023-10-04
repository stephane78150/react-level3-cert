import { FC } from "react";
import { SearchField } from "./SearchField";
import { University, listOfCountries, listOfUsers, searchUniversities, } from "./api";

export const App: FC = () => {
  return (
    <div className="container-fluid p-5">
      <h1 className="mb-5">Exercise 3 : typeahead</h1>
      <SearchField<University> data={searchUniversities} labelProperty="name">
        Choose an university name (eg. type 'mit') <span className="badge bg-success rounded-pill" title="http://universities.hipolabs.com/search?country=United+States">AJAX</span>
      </SearchField>
      <SearchField
        data={listOfCountries}
        labelProperty="name"
      >
        Choose a country names sing the typeahead below (eg. type 'an')
      </SearchField>
      <SearchField data={listOfUsers} labelProperty="name">
        Choose a user name using the typeahead below (eg. type 'cle')
      </SearchField>
      <SearchField data={listOfUsers} labelProperty="email">
        Choose an email using the typeahead below (eg. type 'me' or 'biz')
      </SearchField>
    </div>
  );
};
