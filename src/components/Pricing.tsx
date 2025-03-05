import React from 'react';
import { Users, User } from 'lucide-react';
export default function Pricing() {
  return <section id="pricing" className="section-container bg-secondary/50">
      <h2 className="section-title">Tarifs & Offres</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Price 1 */}
          <div className="card-glass p-6 text-center flex flex-col h-full">
            <div className="mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Séance Solo</h3>
              <p className="text-foreground/70 text-sm mt-1">1x par semaine</p>
            </div>
            
            <div className="text-3xl font-bold my-4">50€</div>
            <p className="text-foreground/70 mb-4">par séance</p>
            
            <ul className="text-sm space-y-2 mb-6 text-left">
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs font-bold">✓</span>
                </div>
                <span>Coaching personnalisé</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs font-bold">✓</span>
                </div>
                <span>Suivi de progression</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs font-bold">✓</span>
                </div>
                <span>Séance d'1 heure</span>
              </li>
            </ul>
            
            <div className="mt-auto">
              <a href="#contact" className="btn-primary w-full">la Réserver</a>
            </div>
          </div>
          
          {/* Price 2 */}
          <div className="card-glass p-6 text-center flex flex-col h-full relative border-primary">
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <span className="bg-primary text-white text-sm font-medium px-4 py-1 rounded-full">
                Recommandé
              </span>
            </div>
            
            <div className="mb-4 pt-2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Séance Solo</h3>
              <p className="text-foreground/70 text-sm mt-1">2x par semaine</p>
            </div>
            
            <div className="text-3xl font-bold my-4">40€</div>
            <p className="text-foreground/70 mb-4">par séance</p>
            
            <ul className="text-sm space-y-2 mb-6 text-left">
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs font-bold">✓</span>
                </div>
                <span>Coaching personnalisé</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs font-bold">✓</span>
                </div>
                <span>Suivi de progression</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs font-bold">✓</span>
                </div>
                <span>Séance d'1 heure</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs font-bold">✓</span>
                </div>
                <span>Économie de 20%</span>
              </li>
            </ul>
            
            <div className="mt-auto">
              <a href="#contact" className="btn-primary w-full">
                Réserver
              </a>
            </div>
          </div>
          
          {/* Price 3 */}
          <div className="card-glass p-6 text-center flex flex-col h-full">
            <div className="mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Séance Duo</h3>
              <p className="text-foreground/70 text-sm mt-1">1x par semaine</p>
            </div>
            
            <div className="text-3xl font-bold my-4">30€</div>
            <p className="text-foreground/70 mb-4">par personne / séance</p>
            
            <ul className="text-sm space-y-2 mb-6 text-left">
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs font-bold">✓</span>
                </div>
                <span>Coaching à deux</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs font-bold">✓</span>
                </div>
                <span>Émulation de groupe</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs font-bold">✓</span>
                </div>
                <span>Séance d'1 heure</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs font-bold">✓</span>
                </div>
                <span>Prix avantageux</span>
              </li>
            </ul>
            
            <div className="mt-auto">
              <a href="#contact" className="btn-primary w-full">
                Réserver
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <a href="mailto:pierrelefebvretraining@gmail.com" className="btn-primary mx-auto inline-flex">
            Profitez de votre première séance offerte !
          </a>
        </div>
      </div>
    </section>;
}