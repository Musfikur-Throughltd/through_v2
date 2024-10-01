import React, { useEffect, useState } from "react";
import { TracingBeam } from "./TracingBeam";

const CardSection = ({ icon, title }) => (
  <div className="flex flex-col items-center justify-center w-40 h-48 border rounded-lg border-gray-300 shadow hover:shadow-lg transition-transform duration-300">
    <div className="text-6xl mb-4">{icon}</div>
    <h3 className="text-lg font-semibold">{title}</h3>
  </div>
);

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0)); // Loop through the cards
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-2xl font-bold mb-8">
        Tracing Beam Example
      </h1>

      {/* Tracing Beam for Card 1 */}
      <TracingBeam className="mt-10">
        <CardSection icon="⭐" title="Card 1" />

        {/* Tracing Beam for Card 2 */}
        <CardSection icon="🌟" title="Card 2" />

        {/* Tracing Beam for Card 3 */}
        <CardSection icon="✨" title="Card 3" />
      </TracingBeam>
    </div>
  );
};

export default App;
