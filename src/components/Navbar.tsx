
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Accueil", href: "#hero" },
  { name: "Pourquoi moi ?", href: "#why-choose-me" },
  { name: "Services", href: "#services" },
  { name: "Témoignages", href: "#testimonials" },
  { name: "Tarifs", href: "#pricing" },
  { name: "Salle", href: "#gym" },
  { name: "À propos", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Watch for scrolling to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Safe scrolling function with error handling
  const scrollToSection = (href: string) => {
    try {
      const element = document.querySelector(href);
      if (!element) {
        console.warn(`Element with selector "${href}" not found`);
        return;
      }
      
      // Calculate position accounting for any fixed headers
      const navbarHeight = 80; // approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;
      
      // Use a more reliable scrolling approach
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } catch (error) {
      console.error("Error scrolling to section:", error);
    }
  };

  // Handle navigation link clicks
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a 
              href="#hero" 
              onClick={(e) => handleNavigation(e, "#hero")}
              className="block"
            >
              <img 
                src="/lovable-uploads/a9a89586-21f7-4d9e-9b7a-379b99a7baee.png" 
                alt="PL Training" 
                className="h-12 md:h-14 w-auto" 
              />
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu className="h-6 w-6" />
          </button>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
      
      {/* Mobile menu component */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        navLinks={navLinks}
        onNavigate={scrollToSection}
      />
    </header>
  );
}
