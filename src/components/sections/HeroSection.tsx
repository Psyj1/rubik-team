// src/components/sections/HeroSection.tsx (versão com fundo branco)
import { colors } from "../../styles/colors";
import { Button } from "../common/Button";

// src/components/sections/HeroSection.tsx
export function HeroSection() {
  return (
    <section
      style={{
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        alignItems: "center",
        padding: "2rem 4rem",  // ← lateral maior, mas sem maxWidth
        margin: 0,  // ← remove o auto
      }}
    >
      <div style={{ maxWidth: "600px" }}>  {/* só o conteúdo tem limite */}
        <h1 style={{
          fontSize: "4rem",
          fontWeight: 800,
          marginBottom: "1.5rem",
          color: colors.gray900,
        }}>
          <span style={{ color: colors.red }}>Rubik</span>{" "}
          <span style={{ color: colors.gray700 }}>Team</span>
        </h1>

        <p style={{
          fontSize: "1.25rem",
          color: colors.gray600,
          marginBottom: "2rem",
        }}>
          Desenvolvimento que se encaixa perfeitamente no seu projeto
        </p>

        <div style={{ display: "flex", gap: "1rem" }}>
          <Button variant="red">Conheça a equipe →</Button>
          <Button variant="blue">Ver projetos</Button>
        </div>
      </div>
    </section>
  );
}
