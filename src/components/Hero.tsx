
import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-6 md:pt-14">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/32db7fc1-d06d-40b5-83da-f1342f8a98fc.png"
          alt="Coach sportif en action" 
          className="w-full h-full object-cover"
        />
        {/* Removing the white overlay div */}
      </div>
      
      <div className="container mx-auto px-4 z-10 py-4 md:py-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main heading - Now with white text */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fade-up text-white">
            Pierre Lefebvre
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-white">
              Coach Sportif & Préparateur Physique
            </span>
          </h1>
          
          {/* Slogan - Now with white text */}
          <h2 className="text-xl md:text-2xl font-medium mb-8 text-white animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Dur à l'entraînement, facile dans la vie !
          </h2>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a 
              href="mailto:contact@pierrelefebvre.fr" 
              className="btn-primary"
            >
              <Mail className="w-5 h-5" />
              <span>Contactez-moi par mail</span>
            </a>
            <a 
              href="sms:+33600000000" 
              className="btn-secondary"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Envoyez-moi un SMS</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
