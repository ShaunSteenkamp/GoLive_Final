import { motion } from "framer-motion";
import { MapPin, ExternalLink, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import accommodationBg from "@/assets/027A0069.webp";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const hotels = [
  {
    name: "Lanzerac Hotel & Spa",
    description: "A five-star luxury estate set among vineyards with Cape Dutch architecture, world-class dining, and a full spa. One of Stellenbosch's most iconic properties.",
    price: "From R3,500 per night",
    rating: 5,
    link: "https://www.lanzerac.co.za",
  },
  {
    name: "Coopmanhuijs Boutique Hotel",
    description: "A charming boutique hotel in the heart of historic Stellenbosch, walking distance to Church Street and local restaurants.",
    price: "From R2,200 per night",
    rating: 4,
    link: "https://www.coopmanhuijs.co.za",
  },
  {
    name: "Lekkaslaap Guest House",
    description: "A cozy, family-run guest house offering comfortable accommodation with authentic South African hospitality. Close to town center and wedding venues.",
    price: "From R800 per night",
    rating: 4,
    link: "https://www.lekkaslaap.co.za",
  },
  {
    name: "Protea Hotel by Marriott Stellenbosch",
    description: "Modern comfort in the town centre with easy access to all wedding venues. Ideal for guests looking for reliable, quality accommodation.",
    price: "From R1,600 per night",
    rating: 4,
    link: "https://www.marriott.com",
  },
  {
    name: "De Zalze Lodge",
    description: "Set on the De Zalze Golf Estate with vineyard views, this lodge offers spacious rooms and tranquil surroundings just minutes from town.",
    price: "From R2,800 per night",
    rating: 4,
    link: "https://www.dezalze.co.za",
  },
  {
    name: "Stumble Inn Backpackers",
    description: "A relaxed, budget-friendly option in the heart of Stellenbosch. Great for younger guests wanting a social atmosphere.",
    price: "From R450 per night",
    rating: 3,
    link: "https://www.stumbleinn.co.za",
  },
  {
    name: "The Devon Valley Hotel",
    description: "Nestled in the scenic Devon Valley with panoramic views of the Stellenbosch winelands. Offers comfortable rooms and excellent dining.",
    price: "From R1,800 per night",
    rating: 4,
    link: "https://www.devonvalleyhotel.co.za",
  },
  {
    name: "Stellenbosch Country House",
    description: "A luxury country house with beautifully appointed rooms, set among historic oak trees and vineyards.",
    price: "From R2,400 per night",
    rating: 4,
    link: "https://www.stellenboschcountryhouse.com",
  },
  {
    name: "Oude Werf Hotel",
    description: "South Africa's oldest hotel, combining historic charm with modern comfort in the heart of Stellenbosch.",
    price: "From R1,900 per night",
    rating: 4,
    link: "https://www.oudefontein.co.za",
  },
  {
    name: "Webersburg Wine Estate",
    description: "A boutique wine estate offering elegant accommodation, private tastings, and breathtaking vineyard views.",
    price: "From R3,200 per night",
    rating: 5,
    link: "https://www.webersburg.com",
  },
  {
    name: "Van der Stel Towers Guest House",
    description: "A cozy guest house with friendly hosts, walking distance to restaurants, shops, and the university.",
    price: "From R750 per night",
    rating: 4,
    link: "https://www.vandersteltowers.co.za",
  },
  {
    name: "The Picture House Marvel Std",
    description: "Modern self-catering apartments in Stellenbosch, perfect for longer stays or groups.",
    price: "From R1,200 per night",
    rating: 4,
    link: "https://www.picturehouse Stellenbosch.com",
  },
];

const Accommodation = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

       <section className="relative pt-28 pb-20 px-4 overflow-hidden">
        {/* Background Image - Fixed */}
        <div className="fixed inset-0 -z-10">
          <img src={accommodationBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/10" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="container mx-auto max-w-3xl paper-invitation p-8 md:p-12 rounded-2xl shadow-xl mt-8 relative z-10"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl tracking-[0.15em] mb-2 text-primary">ACCOMMODATION</h1>
            <p className="font-body text-lg text-muted-foreground">
              Recommended places to stay in and around Stellenbosch
            </p>
          </motion.div>
          
          {/* Shuttle Service Notice */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="container mx-auto max-w-3xl paper-invitation p-6 md:p-8 mb-10 mt-8 relative z-10 rounded-2xl bg-white/80 backdrop-blur-sm"
          >
            <p className="font-body text-muted-foreground">
              A shuttle service will be available throughout the evening to assist with transport. Please note this is on a fee per ride and first-come, first-served basis.
            </p>
            <p className="font-body text-muted-foreground mt-2">
              Service Provider: Avg Shuttle Services
            </p>
            <p className="font-body text-muted-foreground mt-1">
              Contact: <a href="tel:+27731777023" className="text-primary underline">073 177 7023</a>
            </p>
          </motion.div>

          <div className="space-y-6">
            {hotels.map((hotel, i) => (
              <motion.div key={hotel.name} variants={fadeInUp}>
                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display text-xl tracking-[0.05em]">{hotel.name}</h3>
                        </div>
                        <div className="flex items-center gap-0.5 mb-3">
                          {Array.from({ length: hotel.rating }).map((_, j) => (
                            <Star key={j} className="w-3.5 h-3.5 fill-wedding-gold text-wedding-gold" />
                          ))}
                        </div>
                        <p className="font-body text-muted-foreground mb-3">{hotel.description}</p>
                        <div className="flex items-center gap-4 flex-wrap">
                          <span className="font-display text-sm tracking-wider text-primary">{hotel.price}</span>
                          <span className="text-muted-foreground font-body text-sm flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" /> Stellenbosch
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="font-display tracking-[0.1em] text-xs shrink-0" asChild>
                        <a href={hotel.link} target="_blank" rel="noopener noreferrer">
                          Visit <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.p variants={fadeInUp} className="text-center font-body text-sm text-muted-foreground mt-10">
            We recommend booking early as September is a popular time in the Cape Winelands.
          </motion.p>
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

export default Accommodation;
