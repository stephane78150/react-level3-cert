import { describe, expect, it } from "vitest";
import * as SUT from "./utils";
import { listOfUsers } from "../../api";

describe("Filtering user names", () => {
  const filterUserNames = SUT.filterWithStaticDataHof(listOfUsers, 'name');

  it("should find specific match without considering case", () => {
    const results = filterUserNames("cLeMenTIne");
    const resultIds = results?.map((u) => u.id);
    const resultsLabels = results?.map((u) => u.name);
    expect(resultIds).toEqual([3]);
    expect(resultsLabels).toEqual(["Clementine Bauch"]);
  });
  it("should return many person when similar first name", () => {
    const results = filterUserNames("cle");
    expect(results).toHaveLength(2);
  });
  it("should return empty when no match", () => {
    const results = filterUserNames("xyz");
    expect(results).toHaveLength(0);
  });
});
