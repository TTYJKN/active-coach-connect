
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, Image } from 'lucide-react';
import MobileMenu from './MobileMenu';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Accueil", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Tarifs", href: "#pricing" },
  { name: "Galerie Photos", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (href: string) => {
    try {
      // Check for '#gallery' to trigger gallery display
      if (href === '#gallery') {
        // Find the element
        const gallerySection = document.querySelector(href);
        
        // If the gallery section exists, scroll to it
        if (gallerySection) {
          const navbarHeight = 64;
          const elementPosition = gallerySection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        } else {
          console.log("Gallery section not found, but we'll still open gallery");
        }
        
        // Dispatch a custom event to open gallery
        const galleryEvent = new CustomEvent('openGallery');
        document.dispatchEvent(galleryEvent);
        return;
      }
      
      // For non-gallery sections
      const element = document.querySelector(href);
      if (!element) {
        console.warn(`Element with selector "${href}" not found`);
        return;
      }
      
      const navbarHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } catch (error) {
      console.error("Error scrolling to section:", error);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white shadow-sm"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Desktop version: Logo + Title on the left */}
          <div className="flex items-center space-x-4">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="block"
            >
              <img 
                src="/lovable-uploads/a9a89586-21f7-4d9e-9b7a-379b99a7baee.png" 
                alt="PL Training" 
                className="h-12 md:h-14 w-auto" 
              />
            </a>
            
            <h1 
              className="text-xl md:text-2xl font-bold text-black cursor-pointer hidden md:block" 
              onClick={scrollToTop}
            >
              PIERRE LEFEBVRE TRAINING
            </h1>
          </div>

          {/* Mobile version: centered flex with logo and title */}
          <div className="flex items-center space-x-2 md:hidden">
            <h1 
              className="text-sm font-bold text-black cursor-pointer" 
              onClick={scrollToTop}
            >
              PIERRE LEFEBVRE TRAINING
            </h1>
          </div>
          
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu className="h-6 w-6" />
          </button>
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
                className="text-base font-bold text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
      
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        navLinks={navLinks}
        onNavigate={scrollToSection}
      />
    </header>
  );
}
