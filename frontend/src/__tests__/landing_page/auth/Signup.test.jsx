import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Signup from "../../../landing_page/auth/Signup";
import axios from "axios";

jest.mock("axios");

describe("Signup Component", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clears any previous mock calls
  });

  test("renders Signup form correctly", () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /sign up/i })).toBeInTheDocument();
  });

  test("updates input fields correctly", () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    const usernameInput = screen.getByLabelText("Username");
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(usernameInput.value).toBe("testuser");
    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("password123");
  });

  test("submits the form successfully", async () => {
    axios.post.mockResolvedValue({ data: { message: "User registered" } });

    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText("Username"), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /sign up/i }));

    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));

    expect(axios.post).toHaveBeenCalledWith("http://localhost:3000/auth/signup", {
      username: "testuser",
      email: "test@example.com",
      password: "password123",
    });
  });

  test("handles API error correctly", async () => {
    axios.post.mockRejectedValue({
      response: { data: { message: "Signup failed" } },
    });

    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText("Username"), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /sign up/i }));

    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
  });
});
