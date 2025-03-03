
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

  // Surveiller le défilement pour changer l'apparence de la navbar
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

  // Gérer le défilement du body lorsque le menu mobile est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Fonction pour la navigation
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Fermer le menu mobile avant de naviguer
    setIsOpen(false);
    
    // Utiliser requestAnimationFrame pour s'assurer que le menu est fermé avant de défiler
    requestAnimationFrame(() => {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
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
          
          {/* Bouton du menu mobile */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
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
        
        {/* Badge */}
        <div className="w-full bg-primary/10 text-primary px-3 py-1.5 rounded-lg text-sm font-medium text-center my-2">
          Plus d'une centaine de personnes aidées depuis 2019 !
        </div>
      </div>
      
      {/* Menu mobile - Conception améliorée pour éviter les problèmes de transparence */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col overflow-auto md:hidden">
          <div className="p-4 flex items-center justify-between border-b">
            <a 
              href="#hero" 
              onClick={(e) => handleNavigation(e, "#hero")}
              className="block"
            >
              <img 
                src="/lovable-uploads/a9a89586-21f7-4d9e-9b7a-379b99a7baee.png" 
                alt="PL Training" 
                className="h-10 w-auto" 
              />
            </a>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Fermer le menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <nav className="flex-1 p-4">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavigation(e, link.href)}
                    className="block py-3 px-4 text-lg font-medium rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="p-4 border-t">
            <div className="bg-primary/10 text-primary px-3 py-2 rounded-lg text-sm font-medium text-center">
              Plus d'une centaine de personnes aidées depuis 2019 !
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
