
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { generatePhotoList } from "@/utils/photoUtils";
import mountainBg from "@/assets/027A0069.webp";

const allPhotos = generatePhotoList();

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 -z-10">
        <img src={mountainBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/10" />
      </div>
      <Navigation />

      {/* Thank You Note */}
      <section className="pt-28 pb-16 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="container mx-auto max-w-4xl text-center"
        >
          <motion.div 
            variants={fadeInUp}
            className="paper-invitation rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl"
          >
            <p className="font-script text-3xl md:text-4xl text-primary mb-6">
              Thank You, Ben & Anri!
            </p>
            <p className="font-body text-lg md:text-xl leading-relaxed text-foreground/80 mb-6">
              We are endlessly grateful to our dear friends <strong>Ben & Anri</strong> of <strong>Candid Photography</strong> for capturing our engagement photos so beautifully. 
              Your talent, patience, and creative eye have given us memories we will cherish forever.
            </p>
            <p className="font-body text-lg md:text-xl leading-relaxed text-foreground/80 mb-8">
              The photos throughout this website are a testament to your incredible work and the love you pour into every shot. 
              We couldn't have asked for better friends or photographers!
            </p>
            <Button 
              asChild
              variant="fynbos"
              size="lg"
              className="w-full sm:w-auto font-display tracking-[0.15em] uppercase px-6 sm:px-10 py-4 sm:py-7 shadow-2xl h-auto"
            >
              <a 
                href="https://www.candidphotography.co.za" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-sm sm:text-base whitespace-normal break-words"
              >
                Visit Candid Photography
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 px-4 bg-wedding-cream/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {allPhotos.map((photo, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative group overflow-hidden rounded-lg shadow-lg aspect-[3/4]"
              >
                <img 
                  src={photo} 
                  alt={`Engagement photo ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <footer className="py-12 px-4 text-center">
        <p className="font-script text-4xl text-white mb-2 drop-shadow-md">Shaun & Alexandra</p>
        <p className="font-display text-sm tracking-[0.2em] text-white/80 uppercase">5 SEPTEMBER 2026 · STELLENBOSCH</p>
        <p className="font-script text-xl text-white/90 mt-4">#RotsVas</p>
      </footer>
    </div>
  );
};

export default Gallery;
