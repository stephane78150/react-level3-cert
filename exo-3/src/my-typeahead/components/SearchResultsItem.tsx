import { useCallback, useMemo } from "react";
import { highlightText } from "./utils";

type SearchResultItemProps<T> = Readonly<{
  item: T;
  highlightedText: string;
  onSelected: (item: T) => void;
  labelProperty: keyof T;
}>;

export const SearchResultItem = <T extends object> ({
  highlightedText,
  item,
  onSelected,
  labelProperty,
}: SearchResultItemProps<T>) => {  
  const parts = useMemo(
    () => {
      const label = `${item[labelProperty]}`;
      return highlightText(label, highlightedText);
    },[item, highlightedText, labelProperty],
  );
  const onClick = useCallback(() => onSelected(item), [onSelected, item]);

  return (
    <div onClick={onClick}>
      {parts.map( ({isHighlighted, text}, idx) => isHighlighted ? <strong key={idx}>{text}</strong> : <span key={idx}>{text}</span> )}
    </div>
  );
};
