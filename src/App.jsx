import Hero from "./components/Hero/hero"
import Navbar from "./components/Navbar/navbar"
import About from "./pages/About/about"
import Features from "./pages/Feature/feature"
import Gallery from "./pages/Gallery/gallery"
import Testimonials from "./pages/Testimonials/testimonials"
import Treatments from "./pages/Treatment/treatment"
import Appointment from "./pages/Appointment/appointment"
import Footer from "./components/Footer/footer"

function App() {

  return (
    <main>
     <Navbar />
     <Hero />
     <Features />
     <Treatments /> 
     <About />
     <Gallery />
     <Testimonials />
     <Appointment />
    <Footer />
    </main>
  )
}

export default App
