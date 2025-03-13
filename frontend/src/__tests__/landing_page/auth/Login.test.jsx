import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import Login from "../../../landing_page/auth/Login";

jest.mock("axios");

describe("Login Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    Storage.prototype.setItem = jest.fn(); 
  });

  test("renders Login form correctly", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("updates input fields correctly", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("password123");
  });

  test("submits the form successfully", async () => {
    axios.post.mockResolvedValue({ data: { token: "mockToken123" } });

    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));

    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:3000/auth/login",
      {
        email: "test@example.com",
        password: "password123",
      }
    );

    expect(localStorage.setItem).toHaveBeenCalledWith("token", "mockToken123");
  });

  test("handles API error correctly", async () => {
    axios.post.mockRejectedValue({
      response: { data: { message: "Invalid credentials" } },
    });

    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
  });
});
