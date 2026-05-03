import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { OriginStory } from "@/components/OriginStory";
import { ProductShowcase } from "@/components/ProductShowcase";
import { BrewingGuide } from "@/components/BrewingGuide";
import { ProcessValues } from "@/components/ProcessValues";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useTintiAnimations } from "@/hooks/useTintiAnimations";

const queryClient = new QueryClient();

function App() {
  useTintiAnimations();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <div className="relative">
            <Navigation />
            <main>
              <Hero />
              <OriginStory />
              <ProductShowcase />
              <BrewingGuide />
              <ProcessValues />
              <ContactSection />
            </main>
            <Footer />
          </div>
        </LanguageProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
