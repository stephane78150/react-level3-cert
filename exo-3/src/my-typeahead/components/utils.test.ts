import { describe, expect, it } from "vitest";
import * as SUT from "./utils";

describe("Highlighting text", () => {
  it("should highlight searched text when in the beginning", () => {
    expect(SUT.highlightText("Clementine Bauch", "cle")).toEqual([
      "",
      "Cle",
      "mentine Bauch",
    ]);
  });
  it("should highlight searched text when in the middle", () => {
    expect(SUT.highlightText("Clementine Bauch", "TIN")).toEqual([
      "Clemen",
      "tin",
      "e Bauch",
    ]);
  });
  it("should highlight searched text when in the end", () => {
    expect(SUT.highlightText("Clementine Bauch", "AUCH")).toEqual([
      "Clementine B",
      "auch",
      "",
    ]);
  });
});
