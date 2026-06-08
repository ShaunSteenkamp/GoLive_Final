
import { useState, useEffect } from "react";
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from "date-fns";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-09-05T14:00:00"); // Assuming 2 PM based on Index.tsx text

    const interval = setInterval(() => {
      const now = new Date();
      if (now > targetDate) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: differenceInDays(targetDate, now),
        hours: differenceInHours(targetDate, now) % 24,
        minutes: differenceInMinutes(targetDate, now) % 60,
        seconds: differenceInSeconds(targetDate, now) % 60,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-2 sm:gap-4 md:gap-8 py-8 text-center text-primary">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center min-w-[60px] sm:min-w-0">
          <span className="font-display text-3xl sm:text-4xl md:text-5xl font-light">
            {value.toString().padStart(2, "0")}
          </span>
          <span className="font-body text-xs sm:text-sm uppercase tracking-widest mt-2 text-muted-foreground">{unit}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
