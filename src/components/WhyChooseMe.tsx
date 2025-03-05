
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
    <section id="why-choose-me" className="section-container bg-secondary/50 reveal">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="section-title">Pourquoi choisir Pierre Lefebvre ?</h2>
        
        <div className="card-glass p-6 md:p-10 w-full">
          <p className="text-lg text-center mb-6">
            Ancien basketteur de haut niveau, aujourd'hui coach sportif et préparateur physique, j'accompagne chaque personne dans sa transformation physique avec un suivi personnalisé et adapté à ses objectifs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="feature-item">
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
              className="btn-primary mx-auto inline-flex"
            >
              Contactez-moi dès aujourd'hui pour votre séance offerte !
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
