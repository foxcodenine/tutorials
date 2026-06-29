import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { AddCardForm } from "@/components/AddCardForm";

describe("AddCardForm", () => {
  afterEach(() => {
    cleanup();
  });

  it("submits title and details", async () => {
    const user = userEvent.setup();
    const onAdd = vi.fn();
    const onCancel = vi.fn();

    render(<AddCardForm onAdd={onAdd} onCancel={onCancel} />);

    await user.type(screen.getByLabelText("Card title"), "Ship release");
    await user.type(screen.getByLabelText("Card details"), "Prepare changelog and deploy.");
    await user.click(screen.getByRole("button", { name: "Add card" }));

    expect(onAdd).toHaveBeenCalledWith("Ship release", "Prepare changelog and deploy.");
  });

  it("does not submit empty values", async () => {
    const user = userEvent.setup();
    const onAdd = vi.fn();

    render(<AddCardForm onAdd={onAdd} onCancel={vi.fn()} />);
    await user.click(screen.getByRole("button", { name: "Add card" }));

    expect(onAdd).not.toHaveBeenCalled();
  });
});
