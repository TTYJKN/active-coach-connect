
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';

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
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Amélioration de la gestion du scroll pour le menu mobile
  useEffect(() => {
    if (isOpen) {
      // Sauvegarde de la position de défilement actuelle
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollY}px`;
    } else {
      // Restauration de la position de défilement
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    
    return () => {
      // Nettoyage en cas de démontage du composant
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Petit délai pour permettre la fermeture du menu avant le défilement
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="#hero" className="block">
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
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        
        {/* Badge placed below the main navbar as full width */}
        <div className="w-full bg-primary/10 text-primary px-3 py-1.5 rounded-lg text-sm font-medium text-center my-2">
          Plus d'une centaine de personnes aidées depuis 2019 !
        </div>
      </div>
      
      {/* Mobile menu - Correction complète */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 md:hidden overflow-y-auto">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-lg font-medium py-2 border-b border-gray-100"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
