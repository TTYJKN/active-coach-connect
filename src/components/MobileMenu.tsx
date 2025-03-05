
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
  const [animating, setAnimating] = useState(false);

  // Handle mounting and unmounting of the menu
  useEffect(() => {
    if (isOpen) {
      // Block body scroll
      document.body.style.overflow = 'hidden';
      
      // Mount component
      setMounted(true);
      
      // Set a small timeout to allow the DOM to update before animation
      const animTimer = setTimeout(() => {
        setAnimating(true);
      }, 10);
      
      return () => clearTimeout(animTimer);
    } else if (mounted) {
      // Start unmounting animation
      setAnimating(false);
      
      // Wait for animation to complete before unmounting
      const unmountTimer = setTimeout(() => {
        setMounted(false);
        // Restore body scroll
        document.body.style.overflow = '';
      }, 300);
      
      return () => clearTimeout(unmountTimer);
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle menu item clicks safely
  const handleMenuItemClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // First close the menu
    onClose();
    
    // Then navigate with a slight delay to ensure smooth transition
    setTimeout(() => {
      onNavigate(href);
    }, 100);
  };

  // Don't render anything if not mounted
  if (!mounted) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 z-50 flex flex-col bg-white",
        "transition-opacity duration-300",
        animating ? "opacity-100" : "opacity-0"
      )}
      aria-hidden={!animating}
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
          onClick={() => {
            // Use requestAnimationFrame for smoother closing
            requestAnimationFrame(() => {
              onClose();
            });
          }}
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
