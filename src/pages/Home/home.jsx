import Hero from "../../components/Hero/hero";
import Features from "../Feature/feature";
import Treatments from "../Treatment/treatment";
import About from "../About/about";
import Gallery from "../Gallery/gallery";
import Testimonials from "../Testimonials/testimonials";
import Appointment from "../Appointment/appointment";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Treatments />
      <About />
      <Gallery />
      <Testimonials />
      <Appointment />
    </>
  );
}

export default Home;