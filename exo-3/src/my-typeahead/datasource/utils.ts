import { Observable, of } from "rxjs";
import { SearchState, SearchableItem } from "../hooks/useSearchResults";

const MIN_SEARCH_CHAR_COUNT = 2;
const MAX_SEARCH_RESULTS = 5;

export const filterWithStaticDataHof =
  (data: SearchableItem[]) =>
  (candidateText: string): SearchableItem[] => {
    if (candidateText.length < MIN_SEARCH_CHAR_COUNT) {
      return [];
    }
    const normalizedCandidateText = candidateText?.toLowerCase();
    return data
      .filter((u) => u.label.toLowerCase().includes(normalizedCandidateText))
      .slice(0, MAX_SEARCH_RESULTS);
  };

export const searchWithStaticDataHof: (
  data: SearchableItem[],
) => (candidateText: string) => Observable<SearchState> =
  (data) => (candidateText) => {
    const filtered = filterWithStaticDataHof(data)(candidateText);
    const state: SearchState = {
      currentResults: filtered,
      searchedText: candidateText,
    };
    console.log("Searching", candidateText, "with results", state);
    return of(state);
  };
