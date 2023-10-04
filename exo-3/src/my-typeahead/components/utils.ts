
export type TextPart = Readonly<{
  text: string;
  isHighlighted: boolean;  
}>

export function highlightText(
  fullText: string,
  searchedText: string,
): TextPart[] {
  const begin = fullText.toLowerCase().indexOf(searchedText.toLowerCase());
  if (begin === -1) {
    return [{ text:  fullText, isHighlighted: false } as TextPart];
  }
  const end = begin + searchedText.length;
  const before = highlightText(fullText.slice(0, begin), searchedText);
  const highlighted = { text:  fullText.slice(begin, end), isHighlighted: true } as TextPart;
  const after = highlightText(fullText.slice(end), searchedText);
  return [...before, highlighted, ...after]?.filter(p => p.text.length > 0);
}
