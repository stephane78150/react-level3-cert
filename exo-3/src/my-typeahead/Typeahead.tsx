import { FC, useCallback, useState } from "react";
import { SearchInput } from "./components/SearchInput";
import { SearchFunction, useSearchResults } from "./hooks/useSearchResults";
import { SearchResults } from "./components/SearchResults";

export type SearchableItem = Readonly<{
  id: string;
  label: string;
}>;

export type TypeaheadProps = Readonly<{
  onSelected: (selected: SearchableItem) => void;
  search: SearchFunction;
}>;

export const Typeahead: FC<TypeaheadProps> = ({ search, onSelected }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [{ currentResults, searchedText }, updateCandidateText] =
    useSearchResults(search);

  const onItemSelected = useCallback(
    (item: SearchableItem) => {
      setSelected(item.label);
      onSelected(item);
    },
    [onSelected],
  );

  const hasSearchResults = selected === null && currentResults.length > 0;

  return (
    <>
      <SearchInput onSearching={updateCandidateText} selected={selected} />
      {hasSearchResults && (
        <SearchResults
          searchedText={searchedText}
          currentResults={currentResults}
          onSelected={onItemSelected}
        />
      )}
    </>
  );
};
