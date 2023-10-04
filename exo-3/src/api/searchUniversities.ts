import { map } from "rxjs";
import { SearchFunction, SearchState } from "../my-typeahead/hooks/useSearchResults";
import { ajax } from 'rxjs/ajax';

export type University = {name: string} & unknown;

export const searchUniversities: SearchFunction<University> = (candidate) => {
    return ajax<University[]>(`http://universities.hipolabs.com/search?name=${candidate}&limit=5`).pipe(map(resp => {
        const state: SearchState<University> = {
            currentResults: resp.response as University[],
            searchedText: candidate,
        };
        return state;
    }));
}