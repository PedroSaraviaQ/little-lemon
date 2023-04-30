import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BookingForm from "../components/BookingForm/BookingForm";

function BookingPage() {
  return (
    <>
      <Header />
      <main>
        <h1>Book Now</h1>
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}

export default BookingPage;
