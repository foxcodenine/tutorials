import type { Board } from "./types";

export const seedBoard: Board = {
  columns: [
    { id: "col-backlog", title: "Backlog", cardIds: ["card-1", "card-2", "card-3"] },
    { id: "col-progress", title: "In Progress", cardIds: ["card-4", "card-5"] },
    { id: "col-review", title: "Review", cardIds: ["card-6"] },
    { id: "col-testing", title: "Testing", cardIds: ["card-7", "card-8"] },
    { id: "col-done", title: "Done", cardIds: ["card-9", "card-10"] },
  ],
  cards: {
    "card-1": {
      id: "card-1",
      title: "Research competitors",
      details: "Review top three Kanban tools and note UX patterns worth adopting.",
    },
    "card-2": {
      id: "card-2",
      title: "Define color tokens",
      details: "Map brand palette to CSS variables and Tailwind theme extensions.",
    },
    "card-3": {
      id: "card-3",
      title: "Draft wireframes",
      details: "Sketch board layout with five fixed columns and card anatomy.",
    },
    "card-4": {
      id: "card-4",
      title: "Build board shell",
      details: "Implement responsive column grid with seed data on first load.",
    },
    "card-5": {
      id: "card-5",
      title: "Add card form",
      details: "Inline form with title and details fields per column.",
    },
    "card-6": {
      id: "card-6",
      title: "Column rename UX",
      details: "Allow inline editing of column titles without page reload.",
    },
    "card-7": {
      id: "card-7",
      title: "Drag and drop",
      details: "Move cards within and across columns with smooth feedback.",
    },
    "card-8": {
      id: "card-8",
      title: "Unit test board logic",
      details: "Cover add, delete, rename, and move helpers with Vitest.",
    },
    "card-9": {
      id: "card-9",
      title: "Playwright smoke tests",
      details: "Verify core flows end to end in Chromium.",
    },
    "card-10": {
      id: "card-10",
      title: "Polish UI",
      details: "Refine spacing, shadows, and hover states for a premium feel.",
    },
  },
};
