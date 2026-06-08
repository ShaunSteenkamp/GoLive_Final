

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import PhotoSlideshow from "./PhotoSlideshow";
import { Button } from "./ui/button";
import { Search } from "lucide-react";


import { generatePhotoList } from "@/utils/photoUtils";

const allPhotos = generatePhotoList();

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  index: number;
  className?: string; // For grid spanning
}

const images: GalleryImage[] = [
  { 
    id: "1", 
    src: allPhotos[0], 
    alt: "Together in the Fynbos", 
    index: 0,
    className: "col-span-1 md:col-span-2 row-span-2" 
  },
  { 
    id: "2", 
    src: allPhotos[2], 
    alt: "Hiking Stellenbosch Mountains", 
    index: 2,
    className: "col-span-1 row-span-1" 
  },
  { 
    id: "3", 
    src: allPhotos[4], 
    alt: "A Special Moment", 
    index: 4,
    className: "col-span-1 row-span-1" 
  },
  { 
    id: "4", 
    src: allPhotos[6], 
    alt: "Laughter & Love", 
    index: 6,
    className: "col-span-1 md:col-span-1 row-span-1" 
  },
  { 
    id: "5", 
    src: allPhotos[8], 
    alt: "Walking Together", 
    index: 8,
    className: "col-span-1 md:col-span-1 row-span-1" 
  },
  { 
    id: "6", 
    src: allPhotos[9], 
    alt: "Forever Ours", 
    index: 9,
    className: "col-span-1 md:col-span-2 row-span-1" 
  },
];


const Gallery = () => {
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const openSlideshow = (index: number = 0) => {
    setStartIndex(index);
    setIsSlideshowOpen(true);
  };

  return (
    <section ref={ref} className="relative min-h-screen py-20 px-4 overflow-hidden">

      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
            src={allPhotos[0]} 
            alt="Background" 
            className="w-full h-[120%] object-cover object-center filter blur-[2px]" 
        />
      </motion.div>

      <div className="container mx-auto max-w-6xl relative z-10 text-white">
        <motion.div
           style={{ opacity }}
           className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl tracking-[0.1em] mb-4 text-white drop-shadow-lg">
            OUR STORY IN PHOTOS
          </h2>
          <p className="font-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto drop-shadow-md mb-8">
            Capturing the moments that led us here.
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button 
              onClick={() => openSlideshow(0)}
              variant="fynbos"
              size="lg"
              className="font-display tracking-widest uppercase text-sm shadow-2xl group"
            >
              <Search className="w-4 h-4 mr-2 group-hover:scale-125 transition-transform" />
              View Full Gallery (10 Photos)
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
          {images.map((image, index) => (
             <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative group overflow-hidden rounded-lg shadow-2xl border border-white/20 cursor-pointer ${image.className || ""}`}
                onClick={() => openSlideshow(image.index)}
             >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="w-full">
                      <p className="font-display tracking-widest text-sm text-white mb-2">{image.alt}</p>
                      <div className="h-px w-0 group-hover:w-full bg-white/50 transition-all duration-500" />
                    </div>
                </div>
             </motion.div>
          ))}
        </div>
      </div>

      <PhotoSlideshow 
        isOpen={isSlideshowOpen} 
        onClose={() => setIsSlideshowOpen(false)} 
        startIndex={startIndex}
      />
    </section>
  );
};

export default Gallery;

