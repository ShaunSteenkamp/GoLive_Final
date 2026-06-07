import { Calendar, Check, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const timelineEvents = [
  {
    date: "14:30",
    title: "Gathering of Loved Ones",
    description: "Guests arrive at the historic Die Moederkerk to the soft sounds of the organ, preparing our hearts for the union.",
    status: "upcoming",
  },
  {
    date: "15:00",
    title: "A Sacred Covenant",
    description: "The ceremony begins. We exchange our vows before God and our family, entering into a lifelong promise of love and devotion.",
    status: "highlight",
  },
  {
    date: "16:15",
    title: "Celebration & Joy",
    description: "Confetti and bells as we emerge as Mr. & Mrs. Steenkamp. A moment for photos and cherished embraces with friends.",
    status: "upcoming",
  },
  {
    date: "17:30",
    title: "Twilight Reception",
    description: "Mulderbosch Vineyards welcomes us for an evening of fine wine, heartfelt toasts, and the beginning of our celebration under the stars.",
    status: "highlight",
  },
  {
    date: "20:00",
    title: "Dinner & Dancing",
    description: "A romantic feast is served, followed by our first dance as we celebrate the grace that brought us together.",
    status: "upcoming",
  },
  {
    date: "00:00",
    title: "A Fond Farewell",
    description: "As the clock strikes midnight, we bid you a warm goodbye, bringing an unforgettable evening to a beautiful close.",
    status: "upcoming",
  },
  {
    date: "Gratitude",
    title: "With All Our Hearts",
    description: "Thank you to each and every one of our guests for celebrating this special day with us. Your presence, love, and support mean the absolute world to us as we begin our new journey together.",
    status: "gratitude",
  },
];

const YearPlan = () => {
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Shaun+%26+Alexandra+Wedding&dates=20260905T120000Z/20260905T210000Z&details=Join+us+for+our+wedding+celebration!&location=Stellenbosch,+South+Africa`;

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl p-8 md:p-12">
        <h2 className="font-display text-3xl md:text-4xl text-center tracking-[0.15em] mb-12 text-primary">
          THE BIG DAY
        </h2>
        
          <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/20" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center md:justify-between w-full`}>
                
                {/* Content */}
                <div className={`pl-12 md:pl-0 md:w-[45%] ${index % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"}`}>
                  <div className="p-6 rounded-lg border border-primary/15 bg-white/80 shadow-md transition-all duration-300 hover:shadow-lg">
                    <span className="font-script text-2xl gold-accent-subtle block mb-2">{event.date}</span>
                    <h3 className="font-display text-xl mb-2 text-primary uppercase tracking-widest">{event.title}</h3>
                    <p className="font-body text-muted-foreground">{event.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border-2 border-primary/20 z-10">
                  {event.status === 'highlight' ? (
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 text-primary/60" />
                  ) : event.status === 'gratitude' ? (
                    <Heart className="w-4 h-4 md:w-5 md:h-5 text-red-400 fill-red-400/20" />
                  ) : event.status === 'completed' ? (
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-wedding-sage" />
                  ) : (
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="font-body text-lg text-muted-foreground mb-6">
            Keep track of our special dates.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white font-display tracking-widest">
            <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer">
              Add to Google Calendar
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default YearPlan;
