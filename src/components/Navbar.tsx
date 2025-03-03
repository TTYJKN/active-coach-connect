
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

  // Surveiller le défilement pour changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fonction pour la navigation sur desktop et mobile
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  // Fonction commune pour le défilement vers une section
  const scrollToSection = (href: string) => {
    try {
      const element = document.querySelector(href);
      if (element) {
        // Utiliser requestAnimationFrame pour s'assurer que le défilement fonctionne correctement
        requestAnimationFrame(() => {
          const offsetTop = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        });
      }
    } catch (error) {
      console.error("Erreur lors du défilement:", error);
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
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
          
          {/* Bouton du menu mobile */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu className="h-6 w-6" />
          </button>
          
          {/* Menu desktop */}
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
      
      {/* Menu mobile - Utilise un composant séparé */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        navLinks={navLinks}
        onNavigate={scrollToSection}
      />
    </header>
  );
}
