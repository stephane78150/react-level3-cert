import { useCallback, useMemo, useState } from "react";
import { SearchInput } from "./components/SearchInput";
import { SearchFunction, useSearchResults } from "./hooks/useSearchResults";
import { SearchResults } from "./components/SearchResults";
import { searchWithStaticDataHof } from "./datasource";

export type TypeaheadProps<T> = Readonly<{
  data: T[] | SearchFunction<T>;
  labelProperty: keyof T;
  valueChange: (selected: T) => void;
}>;

function isSearchFunction<T>(data: T[] | SearchFunction<T>): data is SearchFunction<T> {
  return typeof data === 'function';
}

export const Typeahead = <T extends object>({
  data,
  labelProperty,
  valueChange: onSelected,
}: TypeaheadProps<T>) => {
  const search = useMemo(() => { 
    if (isSearchFunction<T>(data)) {
        return data;
    } else {
      return searchWithStaticDataHof<T>(data, labelProperty);      
    }
  }, [data, labelProperty]);
  const [selected, setSelected] = useState<string | null>(null);
  const [{ currentResults, searchedText }, updateCandidateText] = useSearchResults<T>(search);

  const onItemSelected = useCallback(
    (item: T) => {
      const label = `${item[labelProperty]}`;
      setSelected(label);
      onSelected(item);
    },
    [onSelected, labelProperty],
  );

  const hasSearchResults = selected === null && currentResults.length > 0;

  return (
    <>
      <SearchInput onSearching={updateCandidateText} selected={selected} />
      {hasSearchResults && (
        <SearchResults<T>
          searchedText={searchedText}
          currentResults={currentResults}
          labelProperty={labelProperty}
          onSelected={onItemSelected}
        />
      )}
    </>
  );
};
