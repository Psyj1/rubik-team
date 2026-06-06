// src/App.tsx ou src/pages/Home.tsx
import { HeroSection } from "./components/sections/HeroSection";
import { QuickLinksSection } from "./components/sections/QuickLinksSection.tsx";
import { AboutSection } from "./components/sections/AboutSection";
import { MembersSection } from "./components/sections/MembersSection";
import { ProjectsSection } from "./components/sections/ProjectSection.tsx";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header.tsx";

function App() {
  return (
    <main>
      <Header />
      <HeroSection />
      <QuickLinksSection />
      <AboutSection />
      <MembersSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}

export default App;