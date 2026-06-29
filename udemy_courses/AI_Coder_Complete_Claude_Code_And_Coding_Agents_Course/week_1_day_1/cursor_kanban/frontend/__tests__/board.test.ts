import { describe, expect, it } from "vitest";
import {
  addCard,
  deleteCard,
  findColumnByCardId,
  moveCard,
  renameColumn,
} from "@/lib/board";
import { seedBoard } from "@/lib/seed";

describe("board helpers", () => {
  it("finds the column containing a card", () => {
    expect(findColumnByCardId(seedBoard, "card-1")?.id).toBe("col-backlog");
    expect(findColumnByCardId(seedBoard, "card-9")?.id).toBe("col-done");
  });

  it("adds a card to a column", () => {
    const next = addCard(seedBoard, "col-backlog", "New task", "Details", "card-new");

    expect(next.cards["card-new"]).toEqual({
      id: "card-new",
      title: "New task",
      details: "Details",
    });
    expect(next.columns[0].cardIds).toContain("card-new");
  });

  it("deletes a card from the board", () => {
    const next = deleteCard(seedBoard, "card-1");

    expect(next.cards["card-1"]).toBeUndefined();
    expect(next.columns[0].cardIds).not.toContain("card-1");
  });

  it("renames a column", () => {
    const next = renameColumn(seedBoard, "col-backlog", "Ideas");

    expect(next.columns[0].title).toBe("Ideas");
  });

  it("moves a card to another column", () => {
    const next = moveCard(seedBoard, "card-1", "col-done", 1);

    expect(next.columns[0].cardIds).not.toContain("card-1");
    expect(next.columns[4].cardIds[1]).toBe("card-1");
  });

  it("moves the first card down within a column", () => {
    const next = moveCard(seedBoard, "card-1", "col-backlog", 1);

    expect(next.columns[0].cardIds).toEqual(["card-2", "card-1", "card-3"]);
  });

  it("moves a lower card above the first card", () => {
    const next = moveCard(seedBoard, "card-3", "col-backlog", 0);

    expect(next.columns[0].cardIds).toEqual(["card-3", "card-1", "card-2"]);
  });

  it("reorders a card within the same column", () => {
    const next = moveCard(seedBoard, "card-1", "col-backlog", 2);

    expect(next.columns[0].cardIds).toEqual(["card-2", "card-3", "card-1"]);
  });

  it("does not mutate the original board", () => {
    const originalIds = [...seedBoard.columns[0].cardIds];
    moveCard(seedBoard, "card-1", "col-done", 0);

    expect(seedBoard.columns[0].cardIds).toEqual(originalIds);
  });
});
