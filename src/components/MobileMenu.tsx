
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { X } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
  onNavigate: (href: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen, 
  onClose, 
  navLinks,
  onNavigate 
}) => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  // Gestionnaire de l'état d'affichage du menu
  useEffect(() => {
    if (isOpen) {
      // Bloquer le scroll du body
      document.body.style.overflow = 'hidden';
      
      // Monter le composant
      setMounted(true);
      
      // Afficher le menu après un court délai (pour l'animation)
      setTimeout(() => setVisible(true), 10);
    } else {
      // Cacher le menu
      setVisible(false);
      
      // Démonter le composant après la fin de l'animation
      setTimeout(() => {
        if (!isOpen) {
          setMounted(false);
          // Restaurer le scroll du body
          document.body.style.overflow = '';
        }
      }, 300);
    }

    // Nettoyage
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Fonction pour la navigation dans le menu mobile
  const handleMenuItemClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Fermer le menu
    onClose();
    
    // Attendre la fin de l'animation avant de naviguer
    setTimeout(() => {
      onNavigate(href);
    }, 300);
  };

  if (!mounted) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 bg-white z-50 flex flex-col transition-opacity duration-300",
        visible ? "opacity-100" : "opacity-0"
      )}
      aria-hidden={!visible}
    >
      <div className="p-4 flex items-center justify-between border-b">
        <a 
          href="#hero" 
          onClick={(e) => handleMenuItemClick(e, "#hero")}
          className="block"
        >
          <img 
            src="/lovable-uploads/a9a89586-21f7-4d9e-9b7a-379b99a7baee.png" 
            alt="PL Training" 
            className="h-10 w-auto" 
          />
        </a>
        <button 
          onClick={onClose}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Fermer le menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleMenuItemClick(e, link.href)}
                className="block py-3 px-4 text-lg font-medium rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
