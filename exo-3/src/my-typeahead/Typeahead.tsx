import { useCallback, useMemo, useState } from "react";
import { SearchInput } from "./components/SearchInput";
import { SearchableItem, useSearchResults } from "./hooks/useSearchResults";
import { SearchResults } from "./components/SearchResults";
import { searchWithStaticDataHof } from "./datasource";

export type TypeaheadProps<T> = Readonly<{
  data: T[];
  idProperty: keyof T;
  labelProperty: keyof T;
  valueChange: (selected: T) => void;
}>;

export const Typeahead = <T extends object>({
  data,
  idProperty,
  labelProperty,
  valueChange: onSelected,
}: TypeaheadProps<T>) => {
  const items = useMemo(
    () =>
      data.map(
        (d) =>
          ({ id: d[idProperty], label: d[labelProperty] }) as SearchableItem,
      ),
    [idProperty, labelProperty, data],
  );
  const search = useMemo(() => searchWithStaticDataHof(items), [items]);
  const [selected, setSelected] = useState<string | null>(null);
  const [{ currentResults, searchedText }, updateCandidateText] =
    useSearchResults(search);

  const onItemSelected = useCallback(
    (item: SearchableItem) => {
      setSelected(item.label);
      const found = data.find((d) => `${d[idProperty]}` == item.id);
      if (found === undefined) {
        throw new Error(
          "Id property chosen most likely has weird behaviour with equality operator, as this should never happen that we can not find the selected element among the list of selectable",
        );
      }
      onSelected(found);
    },
    [onSelected, data, idProperty],
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
