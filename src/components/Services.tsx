
import React from 'react';
import { Activity, Dumbbell } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="section-container">
      <h2 className="section-title">Mes services</h2>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Service 1: Coaching Sportif */}
        <div className="card-glass p-6 md:p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <Activity className="w-8 h-8 text-primary" />
          </div>
          
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Coaching Sportif</h3>
          <p className="text-foreground/70 mb-4">
            Pour les personnes sédentaires ou souhaitant retrouver la forme
          </p>
          
          <ul className="space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary text-xs font-bold">✓</span>
              </div>
              <span>Réapprenez à bouger en douceur</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary text-xs font-bold">✓</span>
              </div>
              <span>Améliorez votre condition physique et votre posture</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary text-xs font-bold">✓</span>
              </div>
              <span>Travail adapté aux douleurs dorsales et articulaires</span>
            </li>
          </ul>
        </div>
        
        {/* Service 2: Préparation Physique */}
        <div className="card-glass p-6 md:p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <Dumbbell className="w-8 h-8 text-primary" />
          </div>
          
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Préparation Physique</h3>
          <p className="text-foreground/70 mb-4">
            Pour les sportifs souhaitant optimiser leurs performances
          </p>
          
          <ul className="space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary text-xs font-bold">✓</span>
              </div>
              <span>Programmes personnalisés selon votre discipline</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary text-xs font-bold">✓</span>
              </div>
              <span>Suivi de progression et ajustements</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary text-xs font-bold">✓</span>
              </div>
              <span>Entraînement en salle privée avec équipement premium</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <a href="#contact" className="btn-primary mx-auto inline-flex">
          Réservez votre séance d'essai gratuite !
        </a>
      </div>
    </section>
  );
}
