import { SearchResultItem } from "./SearchResultsItem";
import { styled } from "styled-components";

type SearchResultsProps<T> = Readonly<{
  currentResults: T[];
  searchedText: string;
  onSelected: (item: T) => void;
  labelProperty: keyof T;
}>;

const StyledDiv = styled.div`
  border: solid 1px lightgray;
`;

export const SearchResults = <T extends object> ({
  currentResults,
  searchedText,
  onSelected,
  labelProperty
}: SearchResultsProps<T>) => {
  if (currentResults.length === 0) {
    return null;
  }
  return (
    <StyledDiv>
      {currentResults?.map((item, idx) => (
        <SearchResultItem
          key={idx}
          labelProperty={labelProperty}          
          item={item}
          highlightedText={searchedText}
          onSelected={onSelected}
        />
      ))}
    </StyledDiv>
  );
};
