import { GraduationCap } from "lucide-react";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { SuccessStories } from "./components/SuccessStories";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { CTA } from "./components/CTA";
import { Chatbot } from "./components/Chatbot";
import { Footer } from "./components/Footer";
import { Stats } from "./components/Stats";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Stats />
      <SuccessStories />
      <WhyChooseUs />
      <CTA />
      <Contact />
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;
