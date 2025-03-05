
import React from 'react';
import { Clock, Flame, ArrowRight, MessageCircle, Dumbbell } from 'lucide-react';

export default function Session() {
  return (
    <section id="session" className="section-container py-12 md:py-16 bg-secondary/30 reveal">
      <h2 className="section-title mb-6">Comment se déroule une séance ?</h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Content column */}
        <div className="w-full">
          <div className="card-glass p-6 md:p-8 h-full flex flex-col">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-medium">Durée : Toujours 1 heure</span>
              </div>
            </div>
            
            <div className="space-y-6 flex-grow">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Flame className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Échauffement adapté</h3>
                  <p className="text-foreground/80">
                    Un échauffement personnalisé selon votre profil et vos besoins, pour préparer votre corps 
                    de manière optimale à la séance.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Dumbbell className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Exercices ciblés</h3>
                  <p className="text-foreground/80">
                    Des exercices spécifiquement choisis selon vos objectifs et adaptés à votre niveau,
                    avec une attention particulière à la technique.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Étirements et conseils</h3>
                  <p className="text-foreground/80">
                    Un retour au calme avec des étirements adaptés et des conseils personnalisés
                    pour optimiser votre récupération.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Encadrement personnalisé</h3>
                  <p className="text-foreground/80">
                    Un suivi attentif tout au long de la séance, avec des retours immédiats et des 
                    ajustements pour maximiser vos résultats.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <a href="mailto:pierrelefebvretraining@gmail.com" className="btn-primary mx-auto inline-flex">
                Je suis prêt à commencer ! Contactez-moi !
              </a>
            </div>
          </div>
        </div>
        
        {/* Session image */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="overflow-hidden rounded-xl shadow-lg w-full h-auto aspect-[4/3]">
            <img 
              src="/lovable-uploads/b610a884-c6ec-45e9-94ea-fee03ac639ee.png" 
              alt="Séance d'entraînement personnalisée" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
