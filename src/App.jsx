import Footer from "./section/Footer";
import Newsletter from "./section/Newsletter";
import Service from "./section/Service";

export default function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Service />
      <Newsletter />
      <Footer />
    </div>
  );
}
