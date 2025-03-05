
import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-container bg-primary/5">
      <div className="max-w-4xl mx-auto">
        <div className="card-glass p-8 md:p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à commencer ?</h2>
          <p className="text-xl font-medium text-primary mb-6">
            Contactez-moi, la séance d'essai est offerte !
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a 
              href="mailto:pierrelefebvretraining@gmail.com" 
              className="btn-primary subtle-hover"
            >
              <Mail className="w-5 h-5" />
              <span>M'envoyer un mail</span>
            </a>
            <a 
              href="sms:+33667839786" 
              className="btn-secondary subtle-hover"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Envoyer un SMS</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
