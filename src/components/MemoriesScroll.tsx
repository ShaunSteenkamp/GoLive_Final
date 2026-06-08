
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { generatePhotoList } from "@/utils/photoUtils";

const allPhotos = generatePhotoList();

const MemoriesScroll = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // We'll use 20 curated mountain photos for this scrolling section
  const selectedPhotos = allPhotos.slice(0, 20);

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section className="relative bg-wedding-cream/10">
      {/* Title at Top */}
      <div className="py-12 md:py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center paper-invitation p-6 sm:p-8 md:p-12 rounded-2xl shadow-xl max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-6xl text-primary tracking-[0.15em] md:tracking-[0.2em] drop-shadow-sm uppercase">
            Our Journey
          </h2>
          <p className="font-body text-primary/80 text-sm md:text-lg tracking-widest mt-2 uppercase">
            Scroll to explore
          </p>
        </motion.div>
      </div>

      <div ref={targetRef} className="relative h-[200vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 px-8">
          {selectedPhotos.map((src, index) => (
            <motion.div
              key={index}
              className="relative group flex-shrink-0 w-[85vw] sm:w-[80vw] md:w-[450px] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <img
                src={src}
                alt={`Engagement Memory ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-script text-3xl text-white drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Moment {index + 1}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </div>
      <div className="h-32 bg-gradient-to-b from-wedding-cream/10 to-background pointer-events-none" />
    </section>
  );
};

export default MemoriesScroll;
