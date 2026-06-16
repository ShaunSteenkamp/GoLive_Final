
import { motion } from "framer-motion";
import { generatePhotoList } from "@/utils/photoUtils";

const allPhotos = generatePhotoList();

const MemoriesScroll = () => {
  const selectedPhotos = allPhotos.slice(0, 20);

  return (
    <section className="relative pb-16 md:pb-24">
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
            Swipe to explore
          </p>
        </motion.div>
      </div>

      <div className="w-full overflow-x-auto pb-8 snap-x snap-mandatory flex custom-scrollbar">
        <div className="flex gap-4 sm:gap-8 px-4 sm:px-8 w-max">
          {selectedPhotos.map((src, index) => (
            <motion.div
              key={index}
              className="relative group flex-shrink-0 w-[85vw] sm:w-[80vw] md:w-[450px] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white snap-center"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <img
                src={src}
                alt={`Engagement Memory ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                <p className="font-script text-3xl text-white drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Moment {index + 1}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoriesScroll;
