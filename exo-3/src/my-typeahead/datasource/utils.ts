import { Observable, of } from "rxjs";
import { SearchState } from "../hooks/useSearchResults";

const MIN_SEARCH_CHAR_COUNT = 2;
const MAX_SEARCH_RESULTS = 5;

export const filterWithStaticDataHof = <T extends object>
  (data: T[], labelProperty: keyof T) =>
  (candidateText: string) => {
    if (candidateText.length < MIN_SEARCH_CHAR_COUNT) {
      return [];
    }
    const normalizedCandidateText = candidateText?.toLowerCase();
    return data
      .filter((u) => `${u[labelProperty]}`.toLowerCase().includes(normalizedCandidateText))
      .slice(0, MAX_SEARCH_RESULTS) as T[];
  };

export const searchWithStaticDataHof  = <T extends object> (data : T[], labelProperty: keyof T) => (candidateText: string) => {
    const filtered = filterWithStaticDataHof<T>(data, labelProperty)(candidateText);
    const state: SearchState<T> = {
      currentResults: filtered,
      searchedText: candidateText,
    };    
    return of(state) as Observable<SearchState<T>>;
  };

