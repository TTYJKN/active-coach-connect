
import React from 'react';
import { StarIcon } from 'lucide-react';

const testimonials = [
  {
    name: "Thomas",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop",
    text: "Pierre m'a aidé à me remettre en forme après une blessure. Aujourd'hui, je n'ai plus de douleurs et je me sens énergique !",
    stars: 5
  },
  {
    name: "Julie",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1471&auto=format&fit=crop",
    text: "Son coaching m'a permis d'améliorer mes performances en course à pied et de gagner en endurance. Les résultats sont impressionnants !",
    stars: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-container py-16 relative z-10 bg-white">
      <h2 className="section-title">Témoignages & Transformations</h2>
      
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-glass p-6 md:p-8 bg-white/90 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-medium">{testimonial.name}</h4>
                  <div className="flex">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-foreground/80 italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
        
        {/* Transformation case study */}
        <div className="card-glass p-8 md:p-10 max-w-4xl mx-auto bg-white/90 backdrop-blur-sm">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">Transformation marquante</h3>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-sm font-medium px-3 py-1 rounded-full">
                  Avant
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop"
                  alt="Avant transformation" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="relative">
                <div className="absolute top-2 left-2 bg-primary/90 backdrop-blur-sm text-white text-sm font-medium px-3 py-1 rounded-full">
                  Après
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop"
                  alt="Après transformation" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <h4 className="text-lg font-medium mb-2">Hugo, 34 ans</h4>
            <p className="text-foreground/80 mb-6">
              "Après 6 mois d'entraînement avec Pierre, j'ai non seulement perdu 12kg, mais j'ai surtout gagné en énergie et en confiance. Le suivi personnalisé a fait toute la différence."
            </p>
            
            <a href="mailto:pierrelefebvretraining@gmail.com" className="btn-primary mx-auto inline-flex">
              Prêt à transformer votre corps ? Contactez-moi !
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
