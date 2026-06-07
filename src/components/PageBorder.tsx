
import { motion } from "framer-motion";
import border4 from "@/assets/border4.jpg";
import border3 from "@/assets/border3.png";
import border2 from "@/assets/border2.png";
import rosesborder1 from "@/assets/rosesborder1.jpg";

const PageBorder = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[80] overflow-hidden">
      {/* Top Border - Elegant floral border */}
      <motion.img
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ duration: 1.5 }}
        src={rosesborder1}
        className="absolute top-0 left-0 w-full h-16 md:h-24 object-contain"
        loading="lazy"
      />

      {/* Bottom Border - Elegant floral border */}
      <motion.img
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        src={rosesborder1}
        className="absolute bottom-0 left-0 w-full h-16 md:h-24 object-contain flip-y"
        loading="lazy"
        style={{ transform: 'scaleY(-1)' }}
      />

      {/* Left Border - Vertical decorative */}
      <motion.img
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.7, x: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        src={border2}
        className="absolute top-0 left-0 w-12 md:w-16 h-full object-contain"
        loading="lazy"
      />

      {/* Right Border - Vertical decorative */}
      <motion.img
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.7, x: 0 }}
        transition={{ duration: 1.5, delay: 0.4 }}
        src={border2}
        className="absolute top-0 right-0 w-12 md:w-16 h-full object-contain"
        loading="lazy"
        style={{ transform: 'scaleX(-1)' }}
      />

      {/* Corner Accents - Top Left */}
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.85, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        src={border3}
        className="absolute w-20 md:w-28 h-auto top-2 left-2"
        loading="lazy"
      />

      {/* Corner Accents - Top Right */}
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.85, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        src={border3}
        className="absolute w-20 md:w-28 h-auto top-2 right-2"
        loading="lazy"
        style={{ transform: 'scaleX(-1)' }}
      />

      {/* Corner Accents - Bottom Left */}
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.85, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        src={border3}
        className="absolute w-20 md:w-28 h-auto bottom-2 left-2"
        loading="lazy"
        style={{ transform: 'scaleY(-1)' }}
      />

      {/* Corner Accents - Bottom Right */}
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.85, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        src={border3}
        className="absolute w-20 md:w-28 h-auto bottom-2 right-2"
        loading="lazy"
        style={{ transform: 'scale(-1, -1)' }}
      />

      {/* Inner elegant frame */}
      <div className="absolute inset-4 md:inset-6 border border-wedding-gold/30 rounded-sm pointer-events-none" />
    </div>
  );
};

export default PageBorder;
