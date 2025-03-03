
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

  // Manage body scroll when mobile menu is open
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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // First close the menu
    setIsOpen(false);
    
    // Wait for menu animation to complete before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }, 300);
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
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
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
        
        {/* Badge */}
        <div className="w-full bg-primary/10 text-primary px-3 py-1.5 rounded-lg text-sm font-medium text-center my-2">
          Plus d'une centaine de personnes aidées depuis 2019 !
        </div>
      </div>
      
      {/* NEW MOBILE MENU - Completely redesigned as a full-screen fixed overlay with X button */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden flex flex-col">
          {/* Close button header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/a9a89586-21f7-4d9e-9b7a-379b99a7baee.png" 
                alt="PL Training" 
                className="h-12 w-auto" 
              />
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {/* Navigation links */}
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="block py-3 px-4 text-lg font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Footer with badge */}
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
