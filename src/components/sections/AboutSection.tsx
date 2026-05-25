// src/components/sections/AboutSection.tsx
import { colors } from "../../styles/colors";

export function AboutSection() {
  return (
    <section style={{
      padding: "5rem 4rem",
      backgroundColor: colors.gray50,
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{
          fontSize: "2rem",
          color: colors.gray800,
          marginBottom: "1rem"
        }}>
          Sobre a <span style={{ color: colors.red }}>Rubik</span>
        </h2>
        <p style={{
          fontSize: "1.1rem",
          color: colors.gray600,
          lineHeight: 1.6
        }}>
          [TEXTO AQUI]
        </p>
      </div>
    </section>
  );
}