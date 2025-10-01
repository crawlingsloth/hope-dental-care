import Header from './components/shared/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Promotions from './components/Promotions';
import Gallery from './components/Gallery';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/shared/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Services Section */}
        <Services />
        
        {/* Promotions Section */}
        <Promotions />
        
        {/* Gallery Section */}
        <Gallery />
        
        {/* Appointment Booking Section */}
        <Appointment />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;