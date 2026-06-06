import { colors } from "../../styles/colors";
import { useState } from "react";

export function HeroSection() {
  const [imgError, setImgError] = useState(false);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        padding: "4rem 2rem",
        maxWidth: "1126px",
        margin: "0 auto",
        textAlign: "left",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-block",
              backgroundColor: "var(--code-bg)",
              padding: "0.25rem 0.6rem",
              fontSize: "0.75rem",
              fontFamily: "var(--mono)",
              color: "var(--text)",
              marginBottom: "1.5rem",
            }}
          >
            ✦ Rubik
          </div>

          <h1
            style={{
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
            }}
          >
            <span style={{ color: colors.red }}>Olá</span>
            <br />
            <span>Nós somos a </span>
            <span style={{ color: colors.blue }}>Rubik</span>
            <span>.</span>
          </h1>

          <p
            style={{
              fontSize: "1rem",
              color: "var(--text)",
              fontFamily: "var(--sans)",
              marginBottom: "0.5rem",
            }}
          >
            Uma equipe que desenvolve soluções em IoT, Visão Computacional e DevOps.
          </p>

          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--text)",
              opacity: 0.7,
              marginBottom: "2rem",
              fontFamily: "var(--mono)",
            }}
          >
            transformamos ideias em projetos que funcionam.
          </p>

          <button
            onClick={scrollToAbout}
            style={{
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
            }}
          >
            Saiba Mais →
          </button>
        </div>

        <div style={{ position: "relative" }}>
          <div
            style={{
              backgroundColor: "transparent",
              padding: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              aspectRatio: "1 / 1",
            }}
          >
            {!imgError ? (
              <img
                src="/BashBoy.png"
                alt="Bash Boy - Mascote Rubik"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
                onError={() => setImgError(true)}
              />
            ) : (
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "4rem" }}>🐧</span>
                <p
                  style={{
                    fontSize: "0.7rem",
                    fontFamily: "var(--mono)",
                    color: "var(--text)",
                    marginTop: "0.5rem",
                  }}
                >
                  Bash Boy
                </p>
              </div>
            )}
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