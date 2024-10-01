import AboutUs from "./section/AboutUs";
import ContactUs from "./section/ContactUs";
import Footer from "./section/Footer";
import Hero from "./section/Hero";
import Milestone from "./section/Milestone";
import Navbar from "./section/Navbar";
import Newsletter from "./section/Newsletter";
import OurProjects from "./section/OurProjects";
import Service from "./section/Service";
import WhyThrough from "./section/WhyThrough";

export default function App() {
  return (
    <div className="mx-auto overflow-hidden w-full">
      <Navbar />
      <Hero />
      <AboutUs />
      <Service />
      <WhyThrough />
      <Milestone />
      <OurProjects />
      <ContactUs />
      <div className="bg-gray-200 py-20 flex flex-col items-center justify-center">
        <Newsletter />
      </div>
      <div className="bg-[#28519A] text-white w-full">
        <Footer />
      </div>
    </div>
  );
}
