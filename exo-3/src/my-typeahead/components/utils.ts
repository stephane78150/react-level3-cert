export function highlightText(
  fullText: string,
  hightlightedPart: string,
): [string, string, string] {
  const begin = fullText.toLowerCase().indexOf(hightlightedPart.toLowerCase());
  const end = begin + hightlightedPart.length;
  const before = fullText.slice(0, begin);
  const middle = fullText.slice(begin, end);
  const after = fullText.slice(end);
  return [before, middle, after];
}
