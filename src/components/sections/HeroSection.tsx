// src/components/sections/HeroSection.tsx
import { colors } from "../../styles/colors";

export function HeroSection() {
  return (
    <section style={{
      padding: "4rem 2rem",
      maxWidth: "1126px",
      margin: "0 auto",
      textAlign: "left",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "3rem",
        alignItems: "center",
      }}>
        <div>
          <div style={{
            display: "inline-block",
            backgroundColor: "var(--code-bg)",
            padding: "0.25rem 0.6rem",
            fontSize: "0.75rem",
            fontFamily: "var(--mono)",
            color: "var(--text)",
            marginBottom: "1.5rem",
          }}>
            ✦ equipe rubik
          </div>

          <h1 style={{
            fontFamily: "'Madimi One', var(--heading)",
            fontSize: "clamp(2.2rem, 7vw, 3.8rem)",
            fontWeight: 400,
            margin: "0 0 1rem 0",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            wordBreak: "break-word",
            whiteSpace: "normal",
            maxWidth: "100%",
            color: "var(--text-h)",
          }}>
            <span style={{ color: colors.red }}>Hello.</span>
            <br />
            <span>We're </span>
            <span style={{ color: colors.blue }}>Rubik</span>
            <span>.</span>
          </h1>

          <p style={{
            fontSize: "1rem",
            color: "var(--text)",
            fontFamily: "var(--sans)",
            marginBottom: "0.5rem",
          }}>
            Uma equipe que desenvolve soluções em IoT, Visão Computacional e DevOps.
          </p>

          <p style={{
            fontSize: "0.85rem",
            color: "var(--text)",
            opacity: 0.7,
            marginBottom: "2rem",
            fontFamily: "var(--mono)",
          }}>
            transformamos ideias em projetos que funcionam.
          </p>

          {/* Botão estilo retrô QUADRADO */}
          <button style={{
            backgroundColor: "transparent",
            color: "var(--text-h)",
            border: `1px solid var(--text-h)`,
            padding: "0.5rem 1.2rem",
            borderRadius: "0",
            fontSize: "0.8rem",
            fontFamily: "var(--mono)",
            cursor: "pointer",
            transition: "all 0.15s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--text-h)";
            e.currentTarget.style.color = "var(--bg)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "var(--text-h)";
          }}>
            Clone no GitHub →
          </button>
        </div>

        {/* Lado direito - cubo com as cores CERTAS da equipe */}
        <div style={{ position: "relative" }}>
          <div style={{
            backgroundColor: "var(--code-bg)",
            padding: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            aspectRatio: "1 / 1",
            border: `1px solid var(--border)`,
          }}>
            <div style={{
              width: "200px",
              height: "200px",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "8px",
            }}>
              {[...Array(9)].map((_, i) => {
                // AQUI ESTÃO AS CORES CERTAS DA EQUIPE: vermelho, azul, amarelo
                const gridColors = [
                  colors.red, colors.blue, colors.yellow,
                  colors.yellow, colors.red, colors.blue,
                  colors.blue, colors.yellow, colors.red
                ];
                return (
                  <div key={i} style={{
                    backgroundColor: gridColors[i],
                  }} />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}