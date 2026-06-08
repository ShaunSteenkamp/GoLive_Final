
import { motion } from "framer-motion";
import { MapPin, Navigation as NavIcon, Info, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import oldChurch from "@/assets/Derric_van_Rensburg_Kerkstraat_Stellenbosch_DVR0107_-500x500x30.webp";
import newChurch from "@/assets/church-exterior.webp";
import mulderbosch from "@/assets/hero_mulderbosch.webp";
import mulderboschWine from "@/assets/mulderbosch-wine.jpg";
import mountainBg from "@/assets/027A0069.webp";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const Ceremony = () => {
    const churchMapUrl = "https://www.google.com/maps/place/Moederkerk+Stellenbosch+United+Reformed+Church/@-33.9378128,18.8606638,17z/data=!3m1!4b1!4m6!3m5!1s0x1dcdb25c6a51270b:0xc1de140237748434!8m2!3d-33.9378128!4d18.8632387!16s%2Fg%2F11b6y0_0_?entry=ttu";
    const receptionMapUrl = "https://www.google.com/maps/search/Mulderbosch+Vineyards+Stellenbosch";

    return (
        <div className="min-h-screen">
            <div className="fixed inset-0 -z-10">
                <img src={mountainBg} alt="" className="w-full h-full object-cover object-[70%_center] sm:object-center" />
                <div className="absolute inset-0 bg-background/10" />
            </div>
            <Navigation />

            <section className="pt-24 md:pt-32 px-4 container mx-auto max-w-5xl">
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                    className="space-y-12 md:space-y-16 paper-invitation p-6 sm:p-8 md:p-12 rounded-2xl shadow-xl mt-8"
                >
                    {/* Ceremony Section */}
                    <motion.div variants={fadeInUp} className="text-center mb-12">
                        <h1 className="font-display text-4xl md:text-6xl text-primary mb-6 tracking-[0.1em]">
                            THE CEREMONY
                        </h1>
                        <p className="font-script text-3xl gold-accent-subtle">
                            Die Moederkerk
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <motion.div variants={fadeInUp} className="space-y-6">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-primary/10 transform translate-x-2 translate-y-2 rounded-lg -z-10" />
                                <div className="rounded-lg overflow-hidden shadow-xl aspect-[4/3]">
                                    <img 
                                        src={oldChurch} 
                                        alt="Die Moederkerk Stellenbosch" 
                                        className="w-full h-full object-cover" 
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-0 bg-primary/10 transform translate-x-2 translate-y-2 rounded-lg -z-10" />
                                <div className="rounded-lg overflow-hidden shadow-xl aspect-[4/3]">
                                    <img 
                                        src={newChurch} 
                                        alt="Die Moederkerk - Church Street" 
                                        className="w-full h-full object-cover" 
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                                    <a href={churchMapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                        <NavIcon className="w-4 h-4" /> Get Directions
                                    </a>
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="space-y-6">
                            <div>
                                <h3 className="font-display text-2xl mb-3 text-primary flex items-center justify-center gap-2">
                                    <Info className="w-5 h-5" /> HISTORY & BEAUTY
                                </h3>
                                <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg">
                                    We will be exchanging our vows in the historic NG Moederkerk (Mother Church), the second oldest Dutch Reformed congregation in South Africa, established in 1686. 
                                    The first service was held on October 13, 1686, and the cornerstone of the original building was laid in 1687.
                                </p>
                                <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg mt-4">
                                    The current magnificent Neo-Gothic structure was designed by Carl Otto Hager from Dresden, Germany, and completed in 1863. 
                                    With its pristine white walls, impressive tower, buttresses, pointed-arch windows adorned with trefoil decorations, and delicate French-method stained glass, 
                                    this architectural masterpiece provides the perfect sacred space for us to say "I do."
                                </p>
                            </div>

                            <div className="bg-wedding-cream/40 p-6 rounded-lg border border-primary/10">
                                <h3 className="font-display text-xl mb-3 text-primary flex items-center justify-center gap-2">
                                    <MapPin className="w-5 h-5" /> LOCATION
                                </h3>
                                <address className="font-body text-lg not-italic mb-4">
                                    Kerkstraat (Drostdy Street)<br/>
                                    Stellenbosch Central<br/>
                                    7600
                                </address>
                            </div>

                            <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                                <h4 className="font-display text-lg mb-2 text-primary">IMPORTANT NOTE</h4>
                                <p className="font-body text-sm text-muted-foreground">
                                    The ceremony will begin promptly at 3:00 PM. Parking is available along the oak-lined streets surrounding the church, but we recommend allowing extra time to find a spot.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Reception Section */}
                    


                    <motion.div variants={fadeInUp} className="text-center mb-12 pt-8">
                        <h1 className="font-display text-4xl md:text-6xl text-primary mb-6 tracking-[0.1em]">
                            THE RECEPTION
                        </h1>
                        <p className="font-script text-3xl gold-accent-subtle">
                            Mulderbosch Vineyards
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <motion.div variants={fadeInUp} className="space-y-6">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-primary/10 transform translate-x-2 translate-y-2 rounded-lg -z-10" />
                                <div className="rounded-lg overflow-hidden shadow-xl aspect-[4/3]">
                                    <img 
                                        src={mulderbosch} 
                                        alt="Mulderbosch Vineyards" 
                                        className="w-full h-full object-cover" 
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-0 bg-primary/10 transform translate-x-2 translate-y-2 rounded-lg -z-10" />
                                <div className="rounded-lg overflow-hidden shadow-xl aspect-[4/3]">
                                    <img 
                                        src={mulderboschWine} 
                                        alt="Mulderbosch Estate Wine" 
                                        className="w-full h-full object-cover" 
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="space-y-6">
                            <div>
                                <h3 className="font-display text-2xl mb-3 text-primary flex items-center gap-2">
                                    <Wine className="w-5 h-5" /> THE VENUE
                                </h3>
                                <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg">
                                    After the ceremony, join us for an unforgettable evening at <strong>Mulderbosch Vineyards</strong> — one of Stellenbosch's most beloved wine estates. 
                                </p>
                                <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg mt-4">
                                    Set among rolling vineyards with breathtaking views of the Cape mountains, Mulderbosch offers an intimate and romantic atmosphere for our celebration. 
                                    Enjoy award-winning South African wines, exceptional cuisine, and celebrate with us as we begin our new life together.
                                </p>
                                <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg mt-4">
                                    The evening will include a cocktail hour, three-course dinner, speeches, and dancing the night away under the stars.
                                </p>
                                <Button asChild variant="outline" className="mt-4 border-primary text-primary hover:bg-primary hover:text-white">
                                    <a href="https://mulderbosch.co.za" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                        Learn More About Mulderbosch
                                    </a>
                                </Button>
                            </div>

                            <div className="bg-wedding-cream/40 p-6 rounded-lg border border-primary/10">
                                <h3 className="font-display text-xl mb-3 text-primary flex items-center gap-2">
                                    <MapPin className="w-5 h-5" /> LOCATION
                                </h3>
                                <address className="font-body text-lg not-italic mb-4">
                                    Mulderbosch Vineyards<br/>
                                    Stellenbosch<br/>
                                    Western Cape, South Africa
                                </address>
                                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                                    <a href={receptionMapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                        <NavIcon className="w-4 h-4" /> Get Directions
                                    </a>
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                </motion.div>
            </section>

            <footer className="py-12 px-4 text-center">
                <p className="font-script text-3xl md:text-4xl text-white mb-2 drop-shadow-md">Shaun & Alexandra</p>
                <p className="font-display text-sm tracking-[0.2em] text-white/80 uppercase">5 SEPTEMBER 2026 · STELLENBOSCH</p>
                <p className="font-script text-xl text-white/90 mt-4">#RotsVas</p>
            </footer>
        </div>
    );
};

export default Ceremony;
