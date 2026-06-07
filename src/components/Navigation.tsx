import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/rsvp", label: "RSVP" },
    { to: "/accommodation", label: "Accommodation" },
    { to: "/ceremony", label: "Ceremony" },
    { to: "/gallery", label: "Gallery" },
    { to: "/guestbook", label: "Guestbook" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-primary/20">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-script text-2xl md:text-3xl text-primary hover:text-primary/80 transition-colors">
          Shaun & Alexandra
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "relative font-display text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:text-primary group",
                location.pathname === link.to
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
              <span className={cn(
                "absolute -bottom-1 left-0 h-[2px] bg-primary/40 transition-all duration-500",
                location.pathname === link.to ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </Link>
          ))}
        </div>

        <div className="hidden md:flex flex-col items-end">
          <p className="font-script text-xl gold-accent-subtle drop-shadow-sm">
            #RotsVas
          </p>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground p-2 border border-primary/20 rounded-full"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} className="text-primary" /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-background/95 backdrop-blur-2xl border-b border-primary/20 px-6 pb-8 pt-4 shadow-2xl"
        >
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "font-display text-base tracking-[0.3em] uppercase transition-colors border-b border-transparent",
                  location.pathname === link.to
                    ? "text-primary border-primary/30 py-2"
                    : "text-muted-foreground py-2"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-primary/20 flex justify-between items-center">
              <p className="font-script text-2xl gold-accent-subtle">#RotsVas</p>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center">
                  <span className="w-2 h-2 bg-primary/60 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
