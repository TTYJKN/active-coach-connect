
import React from 'react';
import { StarIcon } from 'lucide-react';

const testimonials = [
  {
    name: "Morgan",
    image: "/lovable-uploads/1dfa93d4-64eb-4537-8827-8011cf035547.png",
    text: "Pierre m'a réconcilié avec le sport grâce à son approche bienveillante et adaptée. Ses séances m'ont aidé à me sentir mieux, à gagner en autonomie et à surmonter douleurs et fatigue. Merci Coach !",
    stars: 5
  },
  {
    name: "Émeline",
    image: "/lovable-uploads/930bbe7f-c93a-4135-ba37-38138553c76a.png",
    text: "Après un grave accident, les médecins m'ont conseillé de faire du renforcement musculaire. C'est là où j'ai contacté Pierre. Coach passionné et créatif, qui m'a permis de vite évoluer et de pouvoir pratiquer le triathlon aujourd'hui.",
    stars: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-container py-16 relative z-10 bg-white">
      <h2 className="section-title">Ils ont testé ma méthode</h2>
      
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
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
      </div>
    </section>
  );
}
