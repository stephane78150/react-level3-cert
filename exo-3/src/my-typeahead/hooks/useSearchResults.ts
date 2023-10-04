import { Observable, debounceTime, filter, switchMap } from "rxjs";
import { SearchableItem } from "..";
import { useObservableState } from "observable-hooks";
import { useMemo } from "react";
import { SearchInput } from "../components/SearchInput";

export type SearchInput = string;

export type SearchResults = SearchableItem[];

export type SearchState = {
  searchedText: string;
  currentResults: SearchResults;
};

export type SearchFunction = (
  candidate: SearchInput,
) => Observable<SearchState>;

type UpdateSearchInput = (input: SearchInput) => void;

type ReactiveSearchCallback = (
  searchInput$: Observable<SearchInput>,
  previousState: SearchState,
) => Observable<SearchState>;

const makeReactiveCallbackHof: (
  search: SearchFunction,
) => ReactiveSearchCallback =
  (search) =>
  (searching$, { searchedText: previousSearchedText }) => {
    return searching$.pipe(
      filter((candidate) => candidate !== previousSearchedText),
      debounceTime(300),
      switchMap((searchedText) => search(searchedText)),
    );
  };

const initialState: SearchState = { searchedText: "", currentResults: [] };

export function useSearchResults(
  search: SearchFunction,
): [SearchState, UpdateSearchInput] {
  const doSearch = useMemo(() => makeReactiveCallbackHof(search), [search]);
  const [searchState, triggerSearch] = useObservableState<
    SearchState,
    SearchInput
  >(doSearch, initialState);

  return [searchState, triggerSearch];
}
