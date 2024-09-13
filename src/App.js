import "./App.css";
import { Hero } from "./pages/Hero";
import About from "./pages/About";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import WhyChooseUsSection from "./pages/WhyChooseUs";
function App() {
  return (
    <>
      <Hero />
      <About/>
      <Testimonial/>
      <Contact/>
      <WhyChooseUsSection/>
    </>
  );
}

export default App;