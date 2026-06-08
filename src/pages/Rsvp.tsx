import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Heart, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

import bougainvillea from "@/assets/bougainvillea.png";
import whiteRoses from "@/assets/white-roses.png";
import rsvpBg from "@/assets/engagement-3.webp";

const rsvpSchema = z.object({
  full_name: z.string().trim().min(1, "Please enter your name").max(100, "Name is too long"),
  attending: z.boolean(),
  message: z.string().trim().max(500, "Message is too long").optional(),
  dietary_requirements: z.string().trim().max(500, "Dietary requirements too long").optional(),
});

type RsvpForm = z.infer<typeof rsvpSchema>;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const Rsvp = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<RsvpForm>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      full_name: "",
      attending: true,
      message: "",
    },
  });

  const onSubmit = async (data: RsvpForm) => {
    setIsSubmitting(true);
    try {
      if (!supabase) {
        toast({
          title: "RSVP Not Available",
          description: "Please contact Shaun & Alexandra directly to RSVP.",
          variant: "destructive",
        });
        return;
      }
      
       const { error } = await supabase.from("rsvps").insert({
         full_name: data.full_name,
         attending: data.attending,
         message: data.message || null,
         dietary_requirements: data.dietary_requirements || null,
       });

      if (error) throw error;
      setSubmitted(true);
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact Shaun & Alexandra directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Mountain Background */}
      <div className="fixed inset-0 -z-10">
        <img 
          src={rsvpBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/10" />
      </div>

      <section className="relative pt-28 pb-20 px-4 overflow-hidden">


        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="container mx-auto max-w-lg text-center"
        >
          <motion.p variants={fadeInUp} className="font-body text-lg text-muted-foreground mb-10">
            We would be honoured to have you celebrate with us
          </motion.p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="paper-invitation rounded-lg p-10 text-center shadow-xl"
            >
              <div className="w-16 h-16 bg-wedding-sage/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display text-2xl tracking-[0.1em] mb-2">Thank You!</h2>
              <p className="font-body text-muted-foreground">
                Your RSVP has been received. We can't wait to celebrate with you!
              </p>
              <p className="font-script text-2xl gold-accent-subtle mt-4">#RotsVas</p>
            </motion.div>
          ) : (
            <motion.div variants={fadeInUp} className="paper-invitation rounded-lg p-4 sm:p-8 md:p-10 shadow-xl">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-left">
                  <FormField
                    control={form.control}
                    name="full_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-display tracking-[0.1em] text-sm">FULL NAME</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" className="font-body" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="attending"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-display tracking-[0.1em] text-sm">WILL YOU BE ATTENDING?</FormLabel>
                        <div className="flex gap-3">
                          <Button
                            type="button"
                            variant={field.value ? "default" : "outline"}
                            className="flex-1 font-display tracking-[0.1em]"
                            onClick={() => field.onChange(true)}
                          >
                            <Heart className="w-4 h-4 mr-2" />
                            Joyfully Accept
                          </Button>
                          <Button
                            type="button"
                            variant={!field.value ? "default" : "outline"}
                            className="flex-1 font-display tracking-[0.1em]"
                            onClick={() => field.onChange(false)}
                          >
                            Regretfully Decline
                          </Button>
                        </div>
                      </FormItem>
                    )}
                  />

                   <FormField
                     control={form.control}
                     name="message"
                     render={({ field }) => (
                       <FormItem>
                         <FormLabel className="font-display tracking-[0.1em] text-sm">PERSONAL MESSAGE</FormLabel>
                         <FormControl>
                           <Textarea
                             placeholder="Share a message with the couple..."
                             className="font-body min-h-[100px]"
                             {...field}
                           />
                         </FormControl>
                         <FormMessage />
                       </FormItem>
                     )}
                   />
                   
                   <FormField
                     control={form.control}
                     name="dietary_requirements"
                     render={({ field }) => (
                       <FormItem>
                         <FormLabel className="font-display tracking-[0.1em] text-sm">DO YOU HAVE ANY SPECIFIC DIETARY REQUIREMENTS?</FormLabel>
                         <FormControl>
                           <Textarea
                             placeholder="Please let us know of any allergies or dietary restrictions..."
                             className="font-body min-h-[100px]"
                             {...field}
                           />
                         </FormControl>
                         <FormMessage />
                       </FormItem>
                     )}
                   />

                  <Button
                    type="submit"
                    className="w-full font-display tracking-[0.15em] uppercase"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send RSVP"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default Rsvp;
