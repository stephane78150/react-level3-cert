import React from "react";
import { SearchResultItem } from "./SearchResultsItem";
import { styled } from "styled-components";
import { SearchableItem } from "../hooks/useSearchResults";

type SearchResultsProps = Readonly<{
  currentResults: SearchableItem[];
  searchedText: string;
  onSelected: (item: SearchableItem) => void;
}>;

const StyledDiv = styled.div`
  border: solid 1px lightgray;
  width: 15em;
`;

export const SearchResults: React.FC<SearchResultsProps> = ({
  currentResults,
  searchedText,
  onSelected,
}) => {
  if (currentResults.length === 0) {
    return null;
  }
  return (
    <StyledDiv>
      {currentResults?.map((item) => (
        <SearchResultItem
          key={item.id}
          item={item}
          highlightedText={searchedText}
          onSelected={onSelected}
        />
      ))}
    </StyledDiv>
  );
};
