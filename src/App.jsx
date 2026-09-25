// import Hero from "./components/Hero/hero"
// import Navbar from "./components/Navbar/navbar"
// import About from "./pages/About/about"
// import Features from "./pages/Feature/feature"
// import Gallery from "./pages/Gallery/gallery"
// import Testimonials from "./pages/Testimonials/testimonials"
// import Treatments from "./pages/Treatment/treatment"
// import Appointment from "./pages/Appointment/appointment"
// import Footer from "./components/Footer/footer"

// function App() {

//   return (
//     <main>
//      <Navbar />
//      <Hero />
//      <Features />
//      <Treatments /> 
//      <About />
//      <Gallery />
//      <Testimonials />
//      <Appointment />
//     <Footer />
//     </main>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Treatments from "./pages/Treatment/treatment";
import Testimonials from "./pages/Testimonials/testimonials";
import Appointment from "./pages/Appointment/appointment";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;