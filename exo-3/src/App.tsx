import { FC } from "react";
import { SearchField } from "./SearchField";
import { searchWithStaticDataHof } from "./my-typeahead";
import { listOfCountries, listOfEmails, listOfUserNames } from "./api";

const searchUsersNames = searchWithStaticDataHof(listOfUserNames);
const searchUsersEmails = searchWithStaticDataHof(listOfEmails);
const searchCountriesNames = searchWithStaticDataHof(listOfCountries);

export const App: FC = () => {
  return (
    <div className="container-fluid p-5">
      <h1 className="mb-5">Exercise 3 : typeahead</h1>
      <SearchField search={searchCountriesNames}>        
        Choose a country names sing the typeahead below (eg. type 'un')
      </SearchField>
      <SearchField search={searchUsersNames}>
        Choose a user name using the typeahead below (eg. type 'cle'  or 'me')
      </SearchField>
      <SearchField search={searchUsersEmails}>        
        Choose an email using the typeahead below (eg. type 'me' or 'biz')
      </SearchField>
    </div>
  );
};
