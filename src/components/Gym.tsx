
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const gymImages = [
  "/lovable-uploads/80e31339-18fb-412a-aca0-d1c017dce73b.png",
  "/lovable-uploads/fb507ccc-6f13-483f-91bb-8e74c322b909.png",
  "/lovable-uploads/bb833e4f-e4eb-48cc-8773-79ae760db691.png",
  "/lovable-uploads/978534e2-415b-42dd-8e67-f343fad8a525.png",
  "/lovable-uploads/d845588a-1ef5-4627-a3b9-75c84bf34798.png"
];

export default function Gym() {
  const [currentImage, setCurrentImage] = React.useState(0);
  
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % gymImages.length);
  };
  
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + gymImages.length) % gymImages.length);
  };
  
  return (
    <section id="gym" className="section-container">
      <h2 className="section-title">La salle de coaching privée</h2>
      
      <div className="max-w-5xl mx-auto">
        <div className="card-glass p-6 md:p-8">
          <div className="relative overflow-hidden rounded-lg aspect-video mb-8">
            {gymImages.map((image, index) => (
              <div
                key={index}
                className="absolute inset-0 transition-all duration-500 ease-in-out"
                style={{
                  transform: `translateX(${(index - currentImage) * 100}%)`,
                  opacity: index === currentImage ? 1 : 0.7
                }}
              >
                <img
                  src={image}
                  alt={`Salle de coaching ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 shadow-md"
              onClick={prevImage}
              aria-label="Image précédente"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 shadow-md"
              onClick={nextImage}
              aria-label="Image suivante"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {gymImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImage ? 'bg-primary' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Voir image ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center">Un espace dédié à votre progression</h3>
            
            <p className="text-lg mb-6 text-center">
              Un environnement professionnel et privé pour des séances d'entraînement optimales.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">200m²</div>
                <p className="text-foreground/80">sur deux étages</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">Premium</div>
                <p className="text-foreground/80">équipement haut de gamme</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">Privé</div>
                <p className="text-foreground/80">sans affluence</p>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <a href="mailto:pierrelefebvretraining@gmail.com" className="btn-primary mx-auto inline-flex">
                Découvrez mon espace d'entraînement !
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
