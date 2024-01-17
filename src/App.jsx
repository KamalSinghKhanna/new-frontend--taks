import './App.css'
import Banner from './components/Banner'
import Carousel from './components/Carousel'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import { Features } from './components/Features'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'


function App() {
  
  return (
    <>
      <Navbar />
      <Banner />
      <Carousel />
      <Features />
      <div className='mt-32'>
        <Testimonial />
      </div>
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default App
