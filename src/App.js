import "./App.css";
import { Hero } from "./pages/Hero";
import About from "./pages/About";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import WhyChooseUsSection from "./pages/WhyChooseUs";
import TourPackages from "./components/TourPackages";
function App() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUsSection />
      <TourPackages />
      <Testimonial />
      <Contact />
    </>

  );
}

export default App;