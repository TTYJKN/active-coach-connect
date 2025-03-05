
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Tableau avec tous les chemins des images uploadées
const galleryImages = [
  "/lovable-uploads/33cb7ac3-ae7e-4aa3-8c30-79fa3091617b.png",
  "/lovable-uploads/8570e954-87a7-45c3-9908-c9fb4222e2fe.png",
  "/lovable-uploads/89001184-596c-4111-b9de-5606a5e91c98.png",
  "/lovable-uploads/490a6957-f3e1-4e1f-a40e-a6160688325c.png",
  "/lovable-uploads/3eea8eba-4487-4a66-af41-97bcd2f1e26b.png",
  "/lovable-uploads/28f71e4c-66aa-4579-a9db-0028fef808c1.png",
  "/lovable-uploads/1eb167ba-9c91-4949-bdd2-dac8286e1a58.png",
  "/lovable-uploads/f2a0b07b-d928-4d2f-984d-202f7f056c14.png",
  "/lovable-uploads/c97d87a4-d603-4ebf-9dd2-2b7e023f4df7.png",
  "/lovable-uploads/7c5dc210-bc40-465d-bc11-79d55810979e.png",
  "/lovable-uploads/f6aa47f7-e6c9-41b4-bf76-cc37078efb08.png",
  "/lovable-uploads/2144fa29-a9d3-401f-bfbd-9d87876de820.png",
  "/lovable-uploads/972a2802-0784-4762-b39a-d4ff6397f6cf.png",
  "/lovable-uploads/f021728b-d0ae-4073-aab0-e08f1f25b82a.png",
  "/lovable-uploads/9be61bee-0f39-4ca1-925f-35a045abefdc.png",
  "/lovable-uploads/cee6e34d-bc8e-4b26-acc8-0bd1558f8f7f.png",
  "/lovable-uploads/4ac4a564-80e1-4981-bdaf-6bae5eb1acb2.png",
  "/lovable-uploads/d3e638de-895a-4504-99d8-3eb0120ae4eb.png"
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  // Écouter l'événement d'ouverture de la galerie
  useEffect(() => {
    const handleOpenGallery = () => {
      // Ouvrir la première image ou simplement montrer la galerie
      setSelectedImage(0);
      console.log("Gallery event received, opening viewer");
    };
    
    // Ajouter l'écouteur d'événement
    document.addEventListener('openGallery', handleOpenGallery);
    
    // Nettoyer l'écouteur d'événement
    return () => {
      document.removeEventListener('openGallery', handleOpenGallery);
    };
  }, []);
  
  const openViewer = (index: number) => {
    setSelectedImage(index);
    // Bloquer le scroll de la page quand le viewer est ouvert
    document.body.style.overflow = 'hidden';
  };
  
  const closeViewer = () => {
    setSelectedImage(null);
    // Rétablir le scroll de la page
    document.body.style.overflow = '';
  };
  
  const goToNextImage = () => {
    setSelectedImage((prev) => (prev === null ? 0 : (prev + 1) % galleryImages.length));
  };
  
  const goToPrevImage = () => {
    setSelectedImage((prev) => 
      prev === null ? 0 : (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImage === null) return;
    
    if (e.key === 'Escape') {
      closeViewer();
    } else if (e.key === 'ArrowRight') {
      goToNextImage();
    } else if (e.key === 'ArrowLeft') {
      goToPrevImage();
    }
  };
  
  return (
    <div onKeyDown={handleKeyDown} tabIndex={-1} id="gallery" className="hidden">
      {/* Photo viewer modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white z-[60]"
            onClick={closeViewer}
            aria-label="Fermer la visionneuse"
          >
            <X className="h-6 w-6" />
          </button>
          
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white z-[60]"
            onClick={goToPrevImage}
            aria-label="Image précédente"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <div className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center">
            <img
              src={galleryImages[selectedImage]}
              alt={`Photo de coaching ${selectedImage + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
          
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white z-[60]"
            onClick={goToNextImage}
            aria-label="Image suivante"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            <div className="bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
