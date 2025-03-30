
import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-6 md:pt-14">
      {/* Background image with overlay - with responsive positioning */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/75bf9201-0dd4-42d0-bfd7-6c0669ee43ae.png"
          alt="Coach sportif en action" 
          className="w-full h-full object-cover md:object-[center_50%]"
        />
      </div>
      
      <div className="container mx-auto px-4 z-10 py-4 md:py-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* CTA Buttons - further increased margin-top to move them down even more */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-80 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a 
              href="mailto:pierrelefebvretraining@gmail.com" 
              className="btn-primary subtle-hover"
            >
              <Mail className="w-5 h-5" />
              <span>Contactez-moi par mail</span>
            </a>
            <a 
              href="sms:+33667839786" 
              className="btn-secondary subtle-hover"
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
