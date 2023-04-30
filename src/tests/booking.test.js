import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm/BookingForm.jsx";

test("Renders the BookingForm labels", () => {
  render(<BookingForm />);
  const heading = screen.getByText(/Choose Date/);
  expect(heading).toBeInTheDocument();
});
