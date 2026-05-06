import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";

import { AuthCredentialsForm } from "@/components/auth/AuthCredentialsForm";

const mocks = vi.hoisted(() => ({
  refresh: vi.fn(),
  replace: vi.fn(),
  signInEmail: vi.fn(),
  signUpEmail: vi.fn(),
}));

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    refresh: mocks.refresh,
    replace: mocks.replace,
  }),
}));

vi.mock("@/lib/auth-client", () => ({
  authClient: {
    signIn: {
      email: mocks.signInEmail,
    },
    signUp: {
      email: mocks.signUpEmail,
    },
  },
}));

function renderLoginForm() {
  render(
    <AuthCredentialsForm
      mode="login"
      subtitle="Use your email and password."
      switchHref="/register"
      switchLabel="Create one"
      switchPrompt="Need an account?"
      title="Login"
    />,
  );
}

function renderRegisterForm() {
  render(
    <AuthCredentialsForm
      mode="register"
      subtitle="Create your account."
      switchHref="/login"
      switchLabel="Log in"
      switchPrompt="Already have an account?"
      title="Register"
    />,
  );
}

afterEach(() => {
  vi.clearAllMocks();
});

describe("AuthCredentialsForm", () => {
  test("requires both email and password before calling auth", () => {
    renderLoginForm();

    // Act: submit the untouched form.
    fireEvent.click(screen.getByRole("button", { name: "Sign in" }));

    // Assert: validation happens locally and no auth request is made.
    expect(screen.getByText("Please enter your email and password.")).toBeTruthy();
    expect(mocks.signInEmail).not.toHaveBeenCalled();
  });

  test("logs in with a trimmed email and redirects to notes", async () => {
    mocks.signInEmail.mockResolvedValue({ error: null });
    renderLoginForm();

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "  chris@example.com  " },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "secret123" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Sign in" }));

    await waitFor(() => {
      expect(mocks.signInEmail).toHaveBeenCalledWith({
        email: "chris@example.com",
        password: "secret123",
      });
    });
    expect(mocks.replace).toHaveBeenCalledWith("/notes");
    expect(mocks.refresh).toHaveBeenCalled();
  });

  test("shows a safe login error when credentials are rejected", async () => {
    mocks.signInEmail.mockResolvedValue({ error: { message: "Wrong password" } });
    renderLoginForm();

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "chris@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "bad-password" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Sign in" }));

    expect(await screen.findByText("Invalid email or password.")).toBeTruthy();
    expect(mocks.replace).not.toHaveBeenCalled();
  });

  test("shows the same safe login error when auth throws", async () => {
    mocks.signInEmail.mockRejectedValue(new Error("Network failed"));
    renderLoginForm();

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "chris@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "secret123" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Sign in" }));

    expect(await screen.findByText("Invalid email or password.")).toBeTruthy();
  });

  test("registers with a display name derived from the email", async () => {
    mocks.signUpEmail.mockResolvedValue({ error: null });
    renderRegisterForm();

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "chris.farrugia@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "secret123" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Create account" }));

    await waitFor(() => {
      expect(mocks.signUpEmail).toHaveBeenCalledWith({
        email: "chris.farrugia@example.com",
        name: "Chris Farrugia",
        password: "secret123",
      });
    });
    expect(mocks.replace).toHaveBeenCalledWith("/notes");
    expect(mocks.refresh).toHaveBeenCalled();
  });

  test("shows a safe registration error when account creation fails", async () => {
    mocks.signUpEmail.mockResolvedValue({ error: { message: "Duplicate email" } });
    renderRegisterForm();

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "taken@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "secret123" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Create account" }));

    expect(await screen.findByText("Could not create your account.")).toBeTruthy();
    expect(mocks.replace).not.toHaveBeenCalled();
  });
});
