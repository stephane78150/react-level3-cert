import { FC, useCallback, useMemo } from "react";
import { highlightText } from "./utils";
import { SearchableItem } from "../hooks/useSearchResults";

type SearchResultItemProps = Readonly<{
  item: SearchableItem;
  highlightedText: string;
  onSelected: (item: SearchableItem) => void;
}>;

export const SearchResultItem: FC<SearchResultItemProps> = ({
  highlightedText,
  item,
  onSelected,
}) => {
  const { label, id } = item;
  const [before, highlighted, after] = useMemo(
    () => highlightText(label, highlightedText),
    [label, highlightedText],
  );
  const onClick = useCallback(() => onSelected(item), [onSelected, item]);

  return (
    <div id={id} onClick={onClick}>
      {before}
      <strong>{highlighted}</strong>
      {after}
    </div>
  );
};
