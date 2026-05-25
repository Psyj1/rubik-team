// src/App.tsx
import { Footer } from "./components/layout/footer.tsx";
import { Header } from "./components/layout/Header.tsx";
import { AboutSection } from "./components/sections/AboutSection.tsx";
import { ContactSection } from "./components/sections/ContactSection.tsx";
import { HeroSection } from "./components/sections/HeroSection";
import { SpecialtiesSection } from "./components/sections/SpecialitiesSection.tsx";
import { StatsSection } from "./components/sections/StatsSection.tsx";
import { TechSection } from "./components/sections/TechSection.tsx";
import { colors } from "./styles/colors";

function App() {
  return (
    <div style={{
      backgroundColor: colors.white,
      minHeight: "100vh",
      width: "100%",  // ← força 100% da largura
    }}>
      <Header />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <SpecialtiesSection />
      <TechSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
