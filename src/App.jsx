import './App.css'
import Banner from './components/Banner'
import Carousel from './components/Carousel'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Works from './components/Works'

function App() {
  
  return (
    <>
    <Navbar />
    <Banner />
    <Carousel />
    <Works />
    <Testimonial />
    <Pricing />
    <FAQ />
    <Contact />
    <Footer />
    </>
  )
}

export default App
