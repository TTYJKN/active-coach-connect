
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyChooseMe from '@/components/WhyChooseMe';
import Services from '@/components/Services';
import Session from '@/components/Session';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Gym from '@/components/Gym';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import { Dumbbell } from 'lucide-react';

const Index = () => {
  // Animation for scroll reveal
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const reveal = () => {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', reveal);
    // Initial check
    reveal();
    
    // Hide loader after page is loaded
    const hideLoader = () => {
      const loader = document.getElementById('loader');
      if (loader) {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
          loader.style.display = 'none';
        }, 500);
      }
    };
    
    // Execute hide loader immediately and also on window load
    hideLoader();
    window.addEventListener('load', hideLoader);
    
    return () => {
      window.removeEventListener('scroll', reveal);
      window.removeEventListener('load', hideLoader);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Loading animation */}
      <div id="loader" className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
        <div className="animate-pulse-soft">
          <Dumbbell className="w-12 h-12 text-primary" />
        </div>
      </div>
      
      <Navbar />
      <Hero />
      <WhyChooseMe />
      <Services />
      <Session />
      <Testimonials />
      <Pricing />
      <Gym />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Index;
