
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { generatePhotoList } from "@/utils/photoUtils";

const allPhotos = generatePhotoList();

const MemoriesScroll = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const selectedPhotos = allPhotos.slice(0, 20);

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-85%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.08, 0.92, 1], [0, 1, 1, 0]);

  return (
    <section className="relative">
      <div ref={targetRef} className="h-[200vh]" />
      <motion.div
        style={{ opacity }}
        className="fixed inset-0 top-0 z-10 flex items-center justify-center overflow-hidden bg-wedding-cream/10 pointer-events-none"
      >
        <div className="absolute top-6 md:top-10 left-4 right-4 z-20">
          <div className="text-center paper-invitation p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl max-w-lg mx-auto">
            <h2 className="font-display text-2xl md:text-4xl text-primary tracking-[0.15em] drop-shadow-sm uppercase">
              Our Journey
            </h2>
            <p className="font-body text-primary/80 text-xs md:text-base tracking-widest mt-1 uppercase">
              Scroll to explore
            </p>
          </div>
        </div>
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
      </motion.div>
    </section>
  );
};

export default MemoriesScroll;
