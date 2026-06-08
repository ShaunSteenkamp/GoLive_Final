import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";


import { generatePhotoList } from "@/utils/photoUtils";

const allPhotos = generatePhotoList();


interface PhotoSlideshowProps {
  isOpen: boolean;
  onClose: () => void;
  startIndex?: number;
}

const PhotoSlideshow = ({ isOpen, onClose, startIndex = 0 }: PhotoSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(startIndex);
    }
  }, [isOpen, startIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % allPhotos.length);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + allPhotos.length) % allPhotos.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 z-10 text-white font-display tracking-wider">
        {currentIndex + 1} / {allPhotos.length}
      </div>

      {/* Previous Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToPrevious();
        }}
        className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
        }}
        className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>

      {/* Image Container */}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
            }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <motion.img
              src={allPhotos[currentIndex]}
              initial={{ scale: 1.1, x: -10, y: -10 }}
              animate={{ 
                scale: 1, 
                x: 0, 
                y: 0,
                transition: { duration: 10, ease: "linear" } 
              }}
              className="max-w-[90vw] max-h-[90vh] object-contain shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-sm"
              alt={`Photo ${currentIndex + 1}`}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnail Strip */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] pb-2 scrollbar-hide">
        {allPhotos.slice(Math.max(0, currentIndex - 5), Math.min(allPhotos.length, currentIndex + 6)).map((photo, idx) => {
          const actualIndex = Math.max(0, currentIndex - 5) + idx;
          return (
            <button
              key={actualIndex}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(actualIndex);
              }}
              className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                actualIndex === currentIndex
                  ? "border-wedding-gold scale-110"
                  : "border-white/30 hover:border-white/60"
              }`}
            >
              <img
                src={photo}
                alt={`Thumbnail ${actualIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default PhotoSlideshow;
