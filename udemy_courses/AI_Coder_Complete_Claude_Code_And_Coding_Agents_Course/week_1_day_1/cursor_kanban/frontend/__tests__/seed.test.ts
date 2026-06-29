import { describe, expect, it } from "vitest";
import { seedBoard } from "@/lib/seed";

describe("seed data", () => {
  it("defines five columns", () => {
    expect(seedBoard.columns).toHaveLength(5);
  });

  it("keeps card references in sync", () => {
    const referencedIds = seedBoard.columns.flatMap((column) => column.cardIds);
    const uniqueIds = new Set(referencedIds);

    expect(uniqueIds.size).toBe(referencedIds.length);
    referencedIds.forEach((cardId) => {
      expect(seedBoard.cards[cardId]).toBeDefined();
    });
  });

  it("includes expected starter column names", () => {
    expect(seedBoard.columns.map((column) => column.title)).toEqual([
      "Backlog",
      "In Progress",
      "Review",
      "Testing",
      "Done",
    ]);
  });
});
