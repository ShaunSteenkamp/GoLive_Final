
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Rsvp from "./pages/Rsvp";
import Accommodation from "./pages/Accommodation";
import Ceremony from "./pages/Ceremony";
import Guestbook from "./pages/Guestbook";
import GalleryPage from "./pages/GalleryPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.PROD ? "/2-Wedding-Website/" : "/"}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rsvp" element={<Rsvp />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/ceremony" element={<Ceremony />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/guestbook" element={<Guestbook />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
