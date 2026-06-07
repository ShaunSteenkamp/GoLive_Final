
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Countdown from "@/components/Countdown";

import { Button } from "@/components/ui/button";
import YearPlan from "@/components/YearPlan";
import MemoriesScroll from "@/components/MemoriesScroll";
import { Link } from "react-router-dom";
import { generatePhotoList } from "@/utils/photoUtils";
import mountainBg from "@/assets/027A0069.webp";


const allPhotos = generatePhotoList() || [];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const Index = () => {
  return (
    <div className="min-h-screen relative z-0">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <img src={mountainBg} alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-background/20" />
      </div>
      <Navigation />

      {/* Invitation / Hero Section - no extra background, just the global fixed bg */}
      <section className="relative min-h-[110vh] flex flex-col items-center justify-center px-4 pt-20 overflow-hidden">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="text-center z-10 max-w-3xl px-8 md:px-12 py-16 md:py-24 paper-invitation rounded-lg border border-wedding-gold/20 shadow-2xl overflow-hidden mt-10"
        >
          {/* Subtle floral pattern overlay on paper */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/vintage-floral.png')] shadow-inner" />
          
          <motion.div variants={fadeInUp} className="mb-8 relative">
            <p className="font-body text-sm md:text-base tracking-[0.5em] uppercase text-primary/70 font-medium">
              Together with their families
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4 mb-10">
            <h1 className="font-script text-7xl md:text-9xl text-primary drop-shadow-sm leading-tight">
              <span className="text-liquid-gold">Shaun & Alexandra</span>
            </h1>
            <p className="font-display text-5xl md:text-7xl tracking-[0.4em] text-primary/90 uppercase font-light">
              <span className="text-liquid-gold">Steenkamp</span>
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp} 
            className="w-48 h-px bg-wedding-gold mx-auto my-10 relative"
          >
            <div className="absolute inset-0 blur-sm bg-gold-leaf" />
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-1 mb-8">
            <p className="font-display text-4xl md:text-5xl tracking-[0.2em] text-primary font-medium">
              5 September 2026
            </p>
            <p className="font-script text-3xl md:text-4xl tracking-[0.1em] gold-accent-subtle mt-4 font-normal">
              14:30 for 15:00
            </p>
            <p className="font-body text-lg md:text-xl text-muted-foreground mt-3 italic">
              Die Moederkerk • Church Street, Stellenbosch
            </p>
          </motion.div>

          <motion.p variants={fadeInUp} className="font-script text-6xl md:text-8xl gold-accent-subtle mt-6 mb-2 tracking-wide">
            #RotsVas
          </motion.p>

          <motion.p variants={fadeInUp} className="font-body text-sm md:text-base text-muted-foreground italic tracking-wide mb-4 max-w-lg mx-auto leading-relaxed">
            "Elkeen dan wat na hierdie woorde van My luister en dit doen, hom sal Ek vergelyk met 'n verstandige man wat sy huis op die rots gebou het. En die stortreën het geval en die waterstrome het gekom en die winde het gewaai en teen daardie huis aangestorm, en dit het nie geval nie, want sy fondament was op die rots."
            <br/><span className="text-xs mt-1 block">— Matteus 7:24-25</span>
          </motion.p>

          <motion.div variants={fadeInUp} className="mb-12 scale-110">
            <Countdown />
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="fynbos" className="font-display tracking-[0.2em] uppercase text-sm px-10 py-7 shadow-2xl hover:scale-105 transition-all">
              <Link to="/rsvp">RSVP Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-display tracking-[0.2em] uppercase text-sm px-10 py-7 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all">
              <Link to="/ceremony">The Ceremony</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-display tracking-[0.2em] uppercase text-sm px-10 py-7 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all">
              <Link to="/accommodation">Guest Info</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-display tracking-[0.2em] uppercase text-sm px-10 py-7 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all">
              <Link to="/gallery#gallery-top">View Gallery</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-display tracking-[0.2em] uppercase text-sm px-10 py-7 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all">
              <Link to="/guestbook">Guestbook</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <YearPlan />
      
      {/* Our Story Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-wedding-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={stagger}
           className="container mx-auto max-w-4xl relative z-10 paper-invitation p-8 md:p-12 rounded-2xl shadow-xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl tracking-[0.2em] mb-6 text-primary uppercase">
              Ons Verhaal
            </h2>
            <div className="w-24 h-px bg-wedding-gold/40 mx-auto mb-10" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp} className="space-y-6">
              <p className="font-body text-xl md:text-2xl leading-relaxed text-foreground/90 first-letter:text-6xl first-letter:font-script first-letter:text-wedding-gold first-letter:mr-3 first-letter:float-left drop-shadow-sm">
                In 'n tyd toe die wêreld stil en afgesonder was, het 'n toevallige glimlag en 'n onverwags ontmoeting 'n vonk laat ontstaan wat ons lewens verander het. Waar ander mense vrees gehad het vir kontak, het ons twee siele mekaar gevind en 'n band gesmee wat onmiddellik onafskeidbaar gevoel het.
              </p>
              <p className="font-body text-xl md:text-2xl leading-relaxed text-foreground/90">
                Daardie eerste paar dae was 'n storm van opwinding en ontdekking — elke oomblik saam het soos 'n nuwe avontuur gevoel. Ons het gelag, gedroom en geleef asof die wêreld net vir ons twee bestaan het, sonder 'n enkele oomblik van verveling.
              </p>
              <p className="font-body text-xl md:text-2xl leading-relaxed text-foreground/90">
                Sedertdien het ons liefde net sterker geword: daar is geen berg te hoog, geen uitdaging te groot, en geen avontuur te waaghalsig wat ons nie saam wil aanpak nie.
              </p>
              <p className="font-body text-xl md:text-2xl leading-relaxed text-foreground/90">
                Nou is ons opgewonde om in 'n huwelik in te tree onder God se genade, liefde en seën. Ons eer Hom vandag en elke dag daarna dat Hy die twee van ons saam gebring het. Ons bid en vra dat die Here hierdie heilige verbintenis sal seën, en mag ons dag Hom loof deur ons liefde en ons lewens saam.
              </p>
              <div className="pt-6 border-t border-primary/20">
                <p className="font-body text-lg md:text-xl leading-relaxed text-primary/80 font-medium italic">
                  "Liefde is geduldig, liefde is vriendelik; dit is nie jaloers nie, liefde praat nie stout nie, soek nie sy eie voordeel nie, word nie verbitterd nie, dink nie aan kwaad nie."
                  <br/><span className="text-sm mt-2 block text-wedding-gold">— 1 Korintiërs 13:4-5</span>
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute -inset-4 border border-wedding-gold/30 rounded-lg transform rotate-3" />
              <div className="relative bg-white p-4 shadow-2xl rounded-sm transform -rotate-2 paper-invitation">
                <img 
                  src={allPhotos[5]} 
                  alt="Shaun & Alexandra" 
                  className="w-full h-auto grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
                <p className="font-script text-4xl text-center mt-6 text-primary drop-shadow-sm">Shaun & Alexandra</p>
                <p className="font-display text-xs text-center tracking-[0.2em] text-muted-foreground uppercase mt-2">Stellenbosch, South Africa</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Thank You Note */}
      <section className="py-16 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="container mx-auto max-w-4xl text-center"
        >
          <motion.div 
            variants={fadeInUp}
            className="paper-invitation rounded-lg p-8 md:p-12 shadow-xl"
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
              className="font-display tracking-[0.15em] uppercase"
            >
              <a 
                href="https://www.candidphotography.co.za" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Visit Candid Photography
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <MemoriesScroll />

      
      <section className="py-16 px-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="container mx-auto max-w-2xl"
        >
          <motion.div variants={fadeInUp} className="mb-8 paper-invitation p-8 md:p-12 rounded-2xl shadow-xl">
            <h2 className="font-display text-3xl md:text-4xl tracking-[0.15em] mb-4 text-primary">
              OUR PHOTO GALLERY
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8">
              View our beautiful engagement photos captured by Candid Photography
            </p>
            <Button asChild size="lg" variant="fynbos" className="font-display tracking-[0.2em] uppercase px-12 py-7">
              <Link to="/gallery#gallery-top">View Full Gallery</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
      
      <footer className="py-12 px-4 text-center">
        <p className="font-script text-4xl text-white mb-2 drop-shadow-md">Shaun & Alexandra</p>
        <p className="font-display text-sm tracking-[0.2em] text-white/80 uppercase">5 SEPTEMBER 2026 · STELLENBOSCH</p>
        <p className="font-script text-xl text-white/90 mt-4">#RotsVas</p>
      </footer>
    </div>
  );
};

export default Index;
