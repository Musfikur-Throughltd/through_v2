
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
    <div>
    <Navbar/>
    <Hero/>
    <AboutUs/>
      <Service />
      

      <WhyThrough/>
      <ContactUs/>
      <Milestone />
      <OurProjects />
      <ContactUs />

      <Newsletter />
      <Footer /> 

     
    </div>
  );
}
