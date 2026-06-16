import { useState } from "react";
import { motion } from "framer-motion";
import { Music, MessageCircle, Heart, Camera, Upload, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import mountainBg from "@/assets/027A0069.webp";
import norwayPainting from "@/assets/norway-painting.jpg";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const funQuestions = [
    "Who said 'I love you' first?",
    "Who is the better cook?",
    "Who takes longer to get ready?",
    "Who made the first move?",
    "Who is more likely to get lost?",
    "Who is the better driver?",
    "Who is the bigger coffee snob?",
    "Who cries at movies?",
    "Who is the early bird?",
    "Who is the night owl?",
    "Who sings in the shower?",
    "Who is the better dancer?",
    "Who steals the covers?",
    "Who is the neat freak?",
    "Who is more romantic?",
    "Who is the bigger sweet tooth?",
    "Who hogs the remote?",
    "Who is the first to wake up?",
    "Who makes the best playlists?",
    "Who is the bigger adventurer?",
];

const Guestbook = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  // Song Request State
  const [songTitle, setSongTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [isSubmittingSong, setIsSubmittingSong] = useState(false);
  const [songSubmitted, setSongSubmitted] = useState(false);

  // Guestbook Message State
  const [senderName, setSenderName] = useState("");
  const [messageText, setMessageText] = useState("");
  const [isSubmittingMessage, setIsSubmittingMessage] = useState(false);
  const [messageSubmitted, setMessageSubmitted] = useState(false);

  const { toast } = useToast();

  const nextQuestion = () => {
    setActiveQuestion((prev) => (prev + 1) % funQuestions.length);
  };

  const handleAnswer = async (choice: "SHAUN" | "ALEXANDRA") => {
    const currentQuestion = funQuestions[activeQuestion];
    nextQuestion();

    try {
      if (supabase) {
        await supabase.from("guess_who_votes").insert({
          question: currentQuestion,
          vote: choice,
        });
      }
    } catch (error) {
      console.error("Failed to submit vote:", error);
    }
  };

  const handleSongSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!songTitle.trim() || !artist.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in both the song title and artist.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmittingSong(true);
    try {
      if (!supabase) {
        toast({
          title: "Connection Not Configured",
          description: "Supabase connection is not available.",
          variant: "destructive",
        });
        return;
      }
      
      const { error } = await supabase.from("song_requests").insert({
        title: songTitle.trim(),
        artist: artist.trim(),
      });
      
      if (error) throw error;
      
      setSongSubmitted(true);
      setSongTitle("");
      setArtist("");
      toast({
        title: "Song Requested!",
        description: "We've added your request to our list.",
      });
    } catch {
      toast({
        title: "Error",
        description: "Failed to submit your song request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmittingSong(false);
    }
  };

  const handleMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !messageText.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in both your name and message.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmittingMessage(true);
    try {
      if (!supabase) {
        toast({
          title: "Connection Not Configured",
          description: "Supabase connection is not available.",
          variant: "destructive",
        });
        return;
      }
      
      const { error } = await supabase.from("guestbook_messages").insert({
        guest_name: senderName.trim(),
        message: messageText.trim(),
      });
      
      if (error) throw error;
      
      setMessageSubmitted(true);
      setSenderName("");
      setMessageText("");
      toast({
        title: "Message Saved!",
        description: "Thank you for signing our guestbook!",
      });
    } catch {
      toast({
        title: "Error",
        description: "Failed to submit your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmittingMessage(false);
    }
  };

  return (
    <div className="min-h-screen pb-20">
      <div className="fixed inset-0 -z-10">
        <img src={mountainBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/10" />
      </div>
      <Navigation />
      
      <section className="pt-32 pb-12 px-4 container mx-auto max-w-4xl">
        <motion.div
           variants={stagger}
           initial="hidden"
           animate="visible"
           className="space-y-12 md:space-y-16 paper-invitation p-4 sm:p-8 md:p-12 rounded-2xl shadow-xl mt-8"
         >
            <motion.div variants={fadeInUp} className="text-center">
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary mb-4 tracking-[0.08em] sm:tracking-[0.1em]">
                    GUESTBOOK & FUN
                </h1>
                <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                    Help us build the playlist, share your wisdom, and capture the memories!
                </p>
            </motion.div>

            {/* Song Request Section */}
            <motion.div variants={fadeInUp}>
                <Card className="bg-wedding-cream/30 border-wedding-gold/20">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 font-display text-2xl tracking-wide text-primary">
                            <Music className="w-6 h-6" /> REQUEST A SONG
                        </CardTitle>
                        <CardDescription>
                            What will get you on the dance floor?
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {songSubmitted ? (
                            <div className="text-center py-4 space-y-3">
                                <p className="font-display text-lg text-primary">Thank you for your request!</p>
                                <Button 
                                    variant="outline" 
                                    size="sm" 
                                    onClick={() => setSongSubmitted(false)}
                                    className="border-wedding-gold text-wedding-gold hover:bg-wedding-gold hover:text-white"
                                >
                                    Request Another Song
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSongSubmit} className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="song-title">Song Title</Label>
                                    <Input 
                                        id="song-title" 
                                        placeholder="e.g. Can't Help Falling in Love" 
                                        value={songTitle}
                                        onChange={(e) => setSongTitle(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="artist">Artist</Label>
                                    <Input 
                                        id="artist" 
                                        placeholder="e.g. Elvis Presley" 
                                        value={artist}
                                        onChange={(e) => setArtist(e.target.value)}
                                    />
                                </div>
                                <Button 
                                    type="submit"
                                    disabled={isSubmittingSong}
                                    className="md:col-span-2 bg-wedding-gold hover:bg-wedding-gold/90 text-white w-full sm:w-auto ml-auto"
                                >
                                    {isSubmittingSong ? "Submitting..." : "Submit Request"}
                                </Button>
                            </form>
                        )}
                    </CardContent>
                </Card>
            </motion.div>

            {/* Questions for the Couple (Game) */}
            <motion.div variants={fadeInUp}>
                <Card className="bg-white/50 border-wedding-gold/20 overflow-hidden">
                    <CardHeader>
                         <CardTitle className="flex items-center gap-3 font-display text-2xl tracking-wide text-primary">
                            <Heart className="w-6 h-6" /> GUESS WHO?
                        </CardTitle>
                        <CardDescription>
                            A fun little game for our guests.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center py-8">
                        <h3 className="font-script text-4xl text-wedding-gold mb-8 h-20 flex items-center justify-center">
                            {funQuestions[activeQuestion]}
                        </h3>
                        <div className="flex justify-center gap-4 mb-6">
                            <Button className="w-32 bg-wedding-sage hover:bg-wedding-sage/90 text-white font-display tracking-widest shadow-md transition-all" onClick={() => handleAnswer("SHAUN")}>
                                SHAUN
                            </Button>
                            <Button className="w-32 bg-wedding-blush hover:bg-wedding-blush/90 text-white font-display tracking-widest shadow-md transition-all" onClick={() => handleAnswer("ALEXANDRA")}>
                                ALEXANDRA
                            </Button>
                        </div>
                         <Button variant="ghost" onClick={nextQuestion} className="text-muted-foreground text-xs uppercase tracking-widest">
                            Next Question
                        </Button>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Message for the Album */}
            <motion.div variants={fadeInUp}>
                <Card className="bg-wedding-cream/30 border-wedding-gold/20">
                     <CardHeader>
                         <CardTitle className="flex items-center gap-3 font-display text-2xl tracking-wide text-primary">
                            <MessageCircle className="w-6 h-6" /> MESSAGE FOR THE ALBUM
                        </CardTitle>
                        <CardDescription>
                            Leave us a note, some advice, or a funny memory.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {messageSubmitted ? (
                            <div className="text-center py-4 space-y-3">
                                <p className="font-display text-lg text-primary">Your message has been saved!</p>
                                <Button 
                                    variant="outline" 
                                    size="sm" 
                                    onClick={() => setMessageSubmitted(false)}
                                    className="border-wedding-gold text-wedding-gold hover:bg-wedding-gold hover:text-white"
                                >
                                    Write Another Message
                                </Button>
                            </div>
                        ) : (
                             <form onSubmit={handleMessageSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="from">From</Label>
                                    <Input 
                                        id="from" 
                                        placeholder="Your Name" 
                                        value={senderName}
                                        onChange={(e) => setSenderName(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea 
                                        id="message" 
                                        placeholder="Write your message here..." 
                                        className="min-h-[120px]" 
                                        value={messageText}
                                        onChange={(e) => setMessageText(e.target.value)}
                                    />
                                </div>
                                <Button 
                                    type="submit"
                                    disabled={isSubmittingMessage}
                                    className="bg-wedding-gold hover:bg-wedding-gold/90 text-white w-full sm:w-auto ml-auto"
                                >
                                    {isSubmittingMessage ? "Signing..." : "Sign Guestbook"}
                                </Button>
                             </form>
                        )}
                    </CardContent>
                </Card>
            </motion.div>

            {/* Photo Upload */}
            <motion.div variants={fadeInUp}>
                 <Card className="bg-white/50 border-wedding-gold/20">
                     <CardHeader>
                         <CardTitle className="flex items-center gap-3 font-display text-2xl tracking-wide text-primary">
                            <Camera className="w-6 h-6" /> CAPTURE THE MOMENT
                        </CardTitle>
                        <CardDescription>
                            Upload your photos from the day directly to our shared folder.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center py-8 border-2 border-dashed border-wedding-gold/30 rounded-lg m-6 bg-wedding-cream/10">
                        <Upload className="w-12 h-12 text-wedding-gold mb-4" />
                        <p className="text-muted-foreground mb-6 text-center max-w-md">
                            We'd love to see the wedding through your eyes! Click below to upload uncompressed photos to our Google Drive.
                        </p>
                        <Button asChild size="lg" className="bg-primary text-white font-display tracking-widest">
                            <a href="https://drive.google.com/" target="_blank" rel="noopener noreferrer">
                                UPLOAD PHOTOS
                            </a>
                        </Button>
                    </CardContent>
                </Card>
            </motion.div>
        
            {/* Registry / Gifts Section */}
            <motion.div variants={fadeInUp}>
                <Card className="bg-wedding-cream/35 border-wedding-gold/20 overflow-hidden">
                    <CardHeader className="text-center pb-2">
                        <CardTitle className="flex items-center justify-center gap-3 font-display text-3xl tracking-wider text-primary">
                            <Gift className="w-7 h-7 text-wedding-gold" /> GIFTS & REGISTRY
                        </CardTitle>
                        <p className="font-script text-2xl gold-accent-subtle mt-1">From Stellenbosch to Stavanger</p>
                    </CardHeader>
                    <CardContent className="space-y-10 p-6 md:p-10">
                        {/* Relocation letter */}
                        <div className="max-w-2xl mx-auto space-y-4 font-body text-base md:text-lg leading-relaxed text-foreground/80 text-left">
                            <p className="first-letter:text-5xl first-letter:font-script first-letter:text-wedding-gold first-letter:mr-2 first-letter:float-left first-letter:leading-[0.8]">
                                As many of you know, shortly after we say "I do," we will be packing up our lives—and our two little dachshunds—for a permanent relocation to Stavanger, Norway!
                            </p>
                            <p>
                                Because we are managing strict international luggage limits and moving across hemispheres, we are unable to take traditional physical gifts with us. If you would like to honor us with a gift, we would be incredibly grateful for contributions toward our <strong className="text-primary font-semibold">"Stavanger Setup Fund."</strong>
                            </p>
                            <p>
                                We have set up a digital registry below featuring vouchers for everyday essentials, home establishment, and outdoor gear that we can redeem once we land in Norway. Thank you for helping us build our new home from afar!
                            </p>
                        </div>

                        {/* Store Cards */}
                        <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                            {/* IKEA */}
                            <a
                                href="https://shop.gogift.com/no/no/nok/shop/ikea-se-gavekort/261723246637580288"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block bg-white/60 hover:bg-white rounded-xl p-4 border border-primary/10 hover:border-wedding-gold/40 shadow-sm hover:shadow-md transition-all duration-300 text-center"
                            >
                                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#0058A3]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <span className="font-display text-sm font-bold text-[#0058A3]">IKEA</span>
                                </div>
                                <h4 className="font-display text-sm font-semibold tracking-wider text-primary">IKEA</h4>
                                <p className="font-body text-xs text-muted-foreground">Home &amp; Furniture</p>
                                <span className="inline-block mt-2 font-body text-[10px] tracking-widest uppercase text-wedding-gold group-hover:underline">Vouchers →</span>
                            </a>

                            {/* Zalando */}
                            <a
                                href="https://shop.gogift.com/en/no/nok/shop/zalando-no-gift-card/268537433296289792"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block bg-white/60 hover:bg-white rounded-xl p-4 border border-primary/10 hover:border-wedding-gold/40 shadow-sm hover:shadow-md transition-all duration-300 text-center"
                            >
                                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#FF6900]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <span className="font-display text-sm font-bold text-[#FF6900]">Z</span>
                                </div>
                                <h4 className="font-display text-sm font-semibold tracking-wider text-primary">Zalando</h4>
                                <p className="font-body text-xs text-muted-foreground">Fashion &amp; Apparel</p>
                                <span className="inline-block mt-2 font-body text-[10px] tracking-widest uppercase text-wedding-gold group-hover:underline">Vouchers →</span>
                            </a>

                            {/* XXL */}
                            <a
                                href="https://shop.gogift.com/no/no/nok/shop/xxl-gavekort/467318667962101760"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block bg-white/60 hover:bg-white rounded-xl p-4 border border-primary/10 hover:border-wedding-gold/40 shadow-sm hover:shadow-md transition-all duration-300 text-center"
                            >
                                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#00A651]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <span className="font-display text-sm font-bold text-[#00A651]">XXL</span>
                                </div>
                                <h4 className="font-display text-sm font-semibold tracking-wider text-primary">XXL Sport</h4>
                                <p className="font-body text-xs text-muted-foreground">Outdoor &amp; Gear</p>
                                <span className="inline-block mt-2 font-body text-[10px] tracking-widest uppercase text-wedding-gold group-hover:underline">Vouchers →</span>
                            </a>
                        </div>

                        {/* Alternate Option: Banking Details */}
                        <div className="max-w-md mx-auto bg-white/40 p-5 rounded-xl border border-wedding-gold/25 shadow-sm">
                            <p className="font-display text-sm font-semibold text-primary tracking-widest mb-3 text-center uppercase">Bank Details (Contributions)</p>
                            <div className="grid grid-cols-2 gap-y-1.5 gap-x-4 font-body text-xs md:text-sm text-muted-foreground">
                                <span className="font-semibold text-primary/80 text-right">Bank:</span>
                                <span>Discovery Bank</span>
                                <span className="font-semibold text-primary/80 text-right">Account Name:</span>
                                <span>S Steenkamp</span>
                                <span className="font-semibold text-primary/80 text-right">Account Number:</span>
                                <span className="font-mono">17299461020</span>
                                <span className="font-semibold text-primary/80 text-right">Account Type:</span>
                                <span>Savings Account</span>
                                <span className="font-semibold text-primary/80 text-right">Branch Code:</span>
                                <span className="font-mono">679000</span>
                                <span className="font-semibold text-primary/80 text-right">Reference:</span>
                                <span className="italic">Wedding</span>
                            </div>
                        </div>

                        {/* Old-school letter ending with painting */}
                        <div className="max-w-lg mx-auto text-center pt-6 border-t border-wedding-gold/10">
                            <div className="relative inline-block mb-6">
                                <div className="absolute -inset-2.5 border border-wedding-gold/20 rounded-sm transform rotate-1" />
                                <div className="relative bg-white p-2 shadow-lg rounded-sm transform -rotate-1">
                                    <img
                                        src={norwayPainting}
                                        alt="Shaun & Alexandra — from South Africa to Norway"
                                        className="w-full max-w-sm h-auto rounded-sm mx-auto"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <p className="font-body text-base text-foreground/80 italic">
                                    With all our love and gratitude,
                                </p>
                                <p className="font-script text-5xl md:text-6xl text-primary mt-2 drop-shadow-sm leading-none">
                                    S & A
                                </p>
                                <div className="w-16 h-px bg-wedding-gold/40 mx-auto my-3" />
                                <p className="font-display text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                                    Shaun & Alexandra Steenkamp
                                </p>
                                <p className="font-body text-[10px] text-muted-foreground/60 italic">
                                    Stellenbosch → Stavanger, 2026
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
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

export default Guestbook;
