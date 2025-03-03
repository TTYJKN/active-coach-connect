
import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-6 md:pt-14">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/592d2aca-c44c-4352-bfbf-d209c5f2e0f7.png"
          alt="Coach sportif en action" 
          className="w-full h-full object-cover"
        />
        {/* Removing the white overlay div */}
      </div>
      
      <div className="container mx-auto px-4 z-10 py-4 md:py-8">
        <div className="max-w-3xl mx-auto text-center">
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
