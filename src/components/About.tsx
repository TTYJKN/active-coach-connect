
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const certifications = [
  { title: "Licence mention 'Entraînement Sportif'", year: 2017 },
  { title: "Master mention 'Entraînement Sportif'", year: 2019 },
  { title: "Functional Movement Screen - Gray Cook", year: 2019 },
  { title: "Évaluation Neurotyping - Christian Thibaudeau", year: 2020 },
  { title: "Sport et Grossesse - Kinesport", year: 2021 },
  { title: "Réathlétisation du genou - Olivier Bolliet", year: 2022 },
  { title: "Evaluation de la Mobilité - Training Thérapie", year: 2023 }
];

export default function About() {
  const [showCertifications, setShowCertifications] = useState(false);
  
  return (
    <section id="about" className="section-container bg-secondary/30">
      <h2 className="section-title">À propos de moi</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/3">
            <div className="rounded-full overflow-hidden aspect-square w-64 mx-auto shadow-lg border-4 border-white">
              <img 
                src="/lovable-uploads/077547bf-5425-4909-b70b-67a9c4ad7d90.png"
                alt="Pierre Lefebvre" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="card-glass p-6 md:p-8">
              <p className="text-lg mb-8">
                Diplômé d'un Master STAPS en Entraînement Sportif, j'ai évolué en tant que basketteur de haut niveau avant de me consacrer pleinement au coaching.
              </p>
              
              <button 
                className="flex items-center gap-2 bg-secondary rounded-md px-4 py-2 w-full justify-between mb-4"
                onClick={() => setShowCertifications(!showCertifications)}
              >
                <span className="font-medium">Diplômes & Certifications</span>
                {showCertifications ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              
              {showCertifications && (
                <div className="border rounded-md p-4 mb-6 space-y-3 animate-fade-in">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span>{cert.title}</span>
                      <span className="text-sm bg-primary/10 px-2 py-0.5 rounded text-primary font-medium">
                        {cert.year}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="text-center mt-6">
                <a href="mailto:pierrelefebvretraining@gmail.com" className="btn-primary subtle-hover mx-auto inline-flex">
                  Envie d'en savoir plus ? Contactez-moi !
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
