import { describe, expect, it } from "vitest";
import * as SUT from "./utils";

describe("Highlighting text", () => {
  it("should highlight searched text when in the beginning", () => {
    expect(SUT.highlightText("Clementine Bauch", "cle").map(p => p.text)).toEqual([
      "Cle",
      "mentine Bauch",
    ]);
  });
  it("should highlight searched text when in the middle", () => {
    expect(SUT.highlightText("Clementine Bauch", "TIN").map(p => p.text)).toEqual([
      "Clemen",
      "tin",
      "e Bauch",
    ]);
  });
  it("should highlight searched text when in the end", () => {
    expect(SUT.highlightText("Clementine Bauch", "AUCH").map(p => p.text)).toEqual([
      "Clementine B",
      "auch",
    ]);
  });
  it("should handle multiple occurence", () => {
    expect(SUT.highlightText("Entertainment", "en")).toEqual([
      {isHighlighted: true, text: "En"},
      {isHighlighted: false, text: "tertainm"},
      {isHighlighted: true, text: "en"},
      {isHighlighted: false, text: "t"},
    ] as SUT.TextPart[]);
  });
});
