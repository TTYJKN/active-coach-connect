
import React from 'react';
import { MapPin, Mail, Phone, Instagram, Facebook } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Footer() {
  return (
    <footer className="bg-primary/5 py-12 w-full">
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
              href="https://www.instagram.com/pierre.lefebvre.training?igsh=ZzN3azY3OG8xODNh" 
              className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
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
        
        <div className="mt-8 pt-8 border-t border-primary/10">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="legal">
                <AccordionTrigger className="text-sm text-foreground/70 hover:text-foreground/90 hover:no-underline">
                  Mentions légales
                </AccordionTrigger>
                <AccordionContent className="text-sm text-left">
                  <div className="space-y-4 py-2">
                    <h4 className="font-semibold">MENTIONS LÉGALES</h4>
                    
                    <div>
                      <h5 className="font-medium">Éditeur du site</h5>
                      <p>Nom : Lefebvre Pierre</p>
                      <p>Statut : Auto-entrepreneur</p>
                      <p>Adresse : APPT C13, 21 RUE VAUCANSON, 59800 LILLE</p>
                      <p>Email : pierrelefebvretraining@gmail.com</p>
                      <p>N° SIRET : 84770059800018</p>
                      <p>Responsable de la publication : Lefebvre Pierre</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium">Hébergement</h5>
                      <p>Nom de l'hébergeur : Hostinger</p>
                      <p>Adresse de l'hébergeur : UAB Švitrigailos str. 34, Vilnius 03230 Lithuania</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium">Propriété intellectuelle</h5>
                      <p>Tous les contenus présents sur cette landing page (textes, images, vidéos, logos, etc.) sont protégés par les droits de propriété intellectuelle. Toute reproduction, diffusion ou utilisation sans autorisation est interdite.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <p className="text-sm text-foreground/60 text-center mt-4">
            © {new Date().getFullYear()} Pierre Lefebvre. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
