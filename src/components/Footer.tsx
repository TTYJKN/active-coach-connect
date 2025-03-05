
import React from 'react';
import { MapPin, Mail, Phone, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary/5 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-heading text-xl font-bold mb-2">Pierre Lefebvre</h3>
            <p className="text-foreground/70">Coach Sportif & Préparateur Physique</p>
          </div>
          
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Lille, France</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:pierrelefebvretraining@gmail.com" className="hover:text-primary transition-colors">
                pierrelefebvretraining@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              <a href="sms:+33667839786" className="hover:text-primary transition-colors">
                +33 6 67 83 97 86
              </a>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-primary" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-primary/10 mt-8 pt-8 text-center">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Pierre Lefebvre. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
