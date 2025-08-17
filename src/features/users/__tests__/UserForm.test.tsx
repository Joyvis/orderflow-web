import { render, screen } from "@testing-library/react";
import UserForm from "../UserForm";

describe("UserForm", () => {
  it("should render", () => {
    render(<UserForm />);
    expect(screen.getByText("UserForm")).toBeInTheDocument();
  });
});