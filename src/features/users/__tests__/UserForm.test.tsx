import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import UserForm from "../UserForm";
import { describe, expect, it, vi, beforeEach } from "vitest";

const mockOnSubmit = vi.fn();
const mockUser = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  password: "password123"
};

const renderUserForm = (props = {}) => {
  const defaultProps = {
    user: null,
    onSubmit: mockOnSubmit,
    isPending: false,
    submitButtonText: "Submit",
    ...props
  };

  return render(<UserForm {...defaultProps} />);
};

describe("UserForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("when creating a new user", () => {
    it("should render with blank form", () => {
      renderUserForm();
      
      expect(screen.getByLabelText("Name")).toHaveValue("");
      expect(screen.getByLabelText("Email")).toHaveValue("");
      expect(screen.getByLabelText("Password")).toHaveValue("");
      expect(screen.getByText("Submit")).toBeInTheDocument();
    });

    it("should render input fields for all user attributes", () => {
      renderUserForm();

      expect(screen.getByLabelText("Name")).toBeInTheDocument();
      expect(screen.getByLabelText("Email")).toBeInTheDocument();
      expect(screen.getByLabelText("Password")).toBeInTheDocument();
    });

    it("should call onSubmit when form is submitted", async () => {
      renderUserForm();
      
      const nameInput = screen.getByLabelText("Name") as HTMLInputElement;
      const emailInput = screen.getByLabelText("Email") as HTMLInputElement;
      const passwordInput = screen.getByLabelText("Password") as HTMLInputElement;
      const submitButton = screen.getByText("Submit");

      fireEvent.change(nameInput, { target: { value: "John Doe" } });
      fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
      fireEvent.change(passwordInput, { target: { value: "password123" } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(mockOnSubmit).toHaveBeenCalledWith(
          {
            name: "John Doe",
            email: "john.doe@example.com",
            password: "password123",
          },
          expect.any(Object) // React event object
        );
      });
    });
  });

  describe("when editing an existing user", () => {
    it("should render with pre-filled form data", () => {
      renderUserForm({ user: mockUser });
      
      expect(screen.getByLabelText("Name")).toHaveValue("John Doe");
      expect(screen.getByLabelText("Email")).toHaveValue("john.doe@example.com");
      expect(screen.getByLabelText("Password")).toHaveValue(""); // Password should be empty for security
    });

    it("should call onSubmit with updated data", async () => {
      renderUserForm({ user: mockUser });
      
      const nameInput = screen.getByLabelText("Name") as HTMLInputElement;
      const passwordInput = screen.getByLabelText("Password") as HTMLInputElement;
      const submitButton = screen.getByText("Submit");

      fireEvent.change(nameInput, { target: { value: "Jane Doe" } });
      fireEvent.change(passwordInput, { target: { value: "newpassword123" } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(mockOnSubmit).toHaveBeenCalledWith(
          {
            name: "Jane Doe",
            email: "john.doe@example.com",
            password: "newpassword123",
          },
          expect.any(Object) // React event object
        );
      });
    });
  });

  describe("when form is pending", () => {
    it("should disable submit button", () => {
      renderUserForm({ isPending: true });
      
      const submitButton = screen.getByText("Submit");
      expect(submitButton).toBeDisabled();
    });
  });

  describe("submit button text", () => {
    it("should display custom submit button text", () => {
      renderUserForm({ submitButtonText: "Create User" });
      
      expect(screen.getByText("Create User")).toBeInTheDocument();
    });
  });
});