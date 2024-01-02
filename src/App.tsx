// App.tsx
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";
import HistorySection from "./components/HistorySection";
import image from "./heather.jpg";
import BlogPage from "./components/BlogPage";
import ContactPage from "./components/ContactPage";
import "./App.css";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home"); // Default section is 'home'

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return (
          <div className="page">
            <HeroSection
              name="Heather Hoffman"
              jobTitle="Marketing/Communications Specialist"
              imageUrl={image}
            />
            <HistorySection />
            <SkillsSection />
          </div>
        );
      case "contact":
        return (
          <div className="page">
            <ContactPage />
          </div>
        );
      case "blog":
        return (
          <div className="page">
            <BlogPage />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <NavBar setActiveSection={setActiveSection} />
      {renderSection()}
      <Footer />
    </div>
  );
};

export default App;
