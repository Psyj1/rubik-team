// src/App.tsx
import { Header } from "./components/layout/Header.tsx";
import { HeroSection } from "./components/sections/HeroSection";

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
    </div>
  );
}

export default App;
