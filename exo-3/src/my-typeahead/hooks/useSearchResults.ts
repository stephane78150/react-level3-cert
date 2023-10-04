import { Observable, debounceTime, filter, switchMap } from "rxjs";
import { useObservableState } from "observable-hooks";
import { useMemo } from "react";
import { SearchInput } from "../components/SearchInput";

export type SearchableItem = Readonly<{
  id: string;
  label: string;
}>;

export type SearchInput = string;

export type SearchResults<T> = T[];

export type SearchState<T> = {
  searchedText: string;
  currentResults: SearchResults<T>;
};

export type SearchFunction<T> = (
  candidate: SearchInput,
) => Observable<SearchState<T>>;

type UpdateSearchInput = (input: SearchInput) => void;

const makeReactiveCallbackHof = <T extends object>
  (search : SearchFunction<T>) =>
  (searching$:  Observable<SearchInput>, previous : SearchState<T>)   => {
    return searching$.pipe(
      filter((candidate) => candidate !== previous.searchedText),
      debounceTime(300),
      switchMap((searchedText) => search(searchedText)),
    ) as Observable<SearchState<T>>;
  };

export function useSearchResults<T extends object>(
  search: SearchFunction<T>,
): [SearchState<T>, UpdateSearchInput] {
  const doSearch = useMemo(() => makeReactiveCallbackHof(search), [search]);
  const [searchState, triggerSearch] = useObservableState<
    SearchState<T>,
    SearchInput
  >(doSearch, { searchedText: "", currentResults: [] });

  return [searchState, triggerSearch];
}
