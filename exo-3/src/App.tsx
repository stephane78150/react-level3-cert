import { FC } from "react";
import { SearchField } from "./SearchField";
import { searchWithStaticDataHof } from "./my-typeahead";
import { listOfEmails, listOfUserNames } from "./api";

const searchUsersNames = searchWithStaticDataHof(listOfUserNames);
const searchUsersEmails = searchWithStaticDataHof(listOfEmails);

export const App: FC = () => {
  return (
    <div className="container-fluid p-5">
      <h1 className="mb-5">Exercise 3 : typeahead</h1>
      <SearchField search={searchUsersNames}>
        Choose a user names using the typeahead below (eg. type 'cle')
      </SearchField>
      <SearchField search={searchUsersEmails}>
        Choose an email using the typeahead below (eg. type 'me' or 'biz')
      </SearchField>
    </div>
  );
};
