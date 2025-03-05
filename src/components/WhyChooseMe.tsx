
import React from 'react';
import { Check } from 'lucide-react';

const advantages = [
  "6 ans d'expérience en coaching",
  "Ancien basketteur professionnel",
  "Coaching adapté à tous les niveaux",
  "Salle privée de 200m² avec matériel haut de gamme",
  "Suivi personnalisé et progressif",
  "Séance d'essai offerte !"
];

export default function WhyChooseMe() {
  return (
    <section id="why-choose-me" className="py-16 w-full bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 font-heading">Pourquoi choisir Pierre Lefebvre ?</h2>
        
        <div className="bg-white/60 backdrop-blur-sm border border-white/30 shadow-md rounded-xl p-6 md:p-8 max-w-4xl mx-auto">
          <p className="text-base md:text-lg text-center mb-8">
            Ancien basketteur de haut niveau, aujourd'hui coach sportif et préparateur physique, j'accompagne chaque personne dans sa transformation physique avec un suivi personnalisé et adapté à ses objectifs.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 rounded-full bg-primary/10 p-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <span className="text-base md:text-lg">{advantage}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <a
              href="mailto:pierrelefebvretraining@gmail.com"
              className="bg-primary text-primary-foreground hover:bg-primary/90 py-2.5 px-4 md:px-6 rounded-md font-medium transition-all duration-300 shadow-sm hover:shadow flex items-center justify-center gap-2 mx-auto inline-flex"
            >
              Contactez-moi dès aujourd'hui pour votre séance offerte !
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
