import AboutUs from "./section/AboutUs";
import ContactUs from "./section/ContactUs";
import Footer from "./section/Footer";
import Hero from "./section/Hero";
import Navbar from "./section/Navbar";
import Newsletter from "./section/Newsletter";
import Service from "./section/Service";

export default function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <AboutUs/>
      <Service />
      <ContactUs/>
      <Newsletter />
      <Footer />
    </div>
  );
}
