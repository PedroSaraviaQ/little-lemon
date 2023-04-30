import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Specials from "../components/Specials/Specials";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Specials />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
