
import React from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ isOpen, onClose, images, currentIndex, onPrevious, onNext }) => {
  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 lightbox-overlay flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={onPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Image */}
        <motion.img
          key={currentIndex}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          src={`/images/${currentImage.src}`}
          alt={currentImage.alt}
          className="max-w-full max-h-full object-contain rounded-lg"
        />

        {/* Image Info */}
        <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg">
          <h3 className="font-playfair text-lg font-semibold">{currentImage.title}</h3>
          <p className="text-sm opacity-80">{currentImage.description}</p>
          {images.length > 1 && (
            <p className="text-xs opacity-60 mt-2">
              {currentIndex + 1} of {images.length}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Lightbox;
