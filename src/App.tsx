import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { SuccessStories } from "./components/SuccessStories";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { CTA } from "./components/CTA";
import { Chatbot } from "./components/Chatbot";
import { Footer } from "./components/Footer";
import { Stats } from "./components/Stats";
import { Contact } from "./components/Contact";
import SydneyIndustryReport from "./pages/sydney-industry-report";
import SingaporeWorkVisaGuide from "./pages/singapore-work-visa-guide";
import Cases from "./pages/cases";
import { Analytics } from "@vercel/analytics/react";

function HomePage() {
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

function App() {
  return (
    <>
      <Analytics />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cases" element={<Cases />} />
          <Route
            path="/sydney-industry-report"
            element={<SydneyIndustryReport />}
          />
          <Route
            path="/singapore-work-visa-guide"
            element={<SingaporeWorkVisaGuide />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
