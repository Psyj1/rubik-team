import { colors } from "../../styles/colors";
import { useState } from "react";

export function AboutSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="about"
      style={{
        padding: "4rem 2rem",
        maxWidth: "1126px",
        margin: "0 auto",
        borderTop: `1px solid var(--border)`,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
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
              marginBottom: "1rem",
              border: `1px solid var(--border)`,
            }}
          >
            ✦ sobre nós
          </div>
          <h2
            style={{
              fontFamily: "'Madimi One', var(--heading)",
              fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
              fontWeight: 400,
              margin: "0 0 1rem 0",
              color: "var(--text-h)",
            }}
          >
            Quem está por trás dos <span style={{ color: colors.red }}>códigos</span>?
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text)",
              lineHeight: 1.6,
              marginBottom: "1rem",
            }}
          >
            Somos uma equipe de dois estudantes da <strong>Fatec Registro</strong>, unindo forças 
            nas áreas de IoT, Visão Computacional e desenvolvimento Fullstack.
          </p>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text)",
              lineHeight: 1.6,
              marginBottom: "1rem",
            }}
          >
            O que começou como projetos de faculdade virou um laboratório de experimentação 
            constante. Aqui a gente aprende na prática, erra, acerta e compartilha tudo 
            que descobrimos pelo caminho.
          </p>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text)",
              lineHeight: 1.6,
            }}
          >
            O nome <strong>Rubik</strong> é uma analogia ao cubo mágico: cada face representa 
            uma área de atuação, mas juntos formamos algo maior. Nosso objetivo é simples: 
            resolver problemas reais com tecnologia, sem firula.
          </p>
        </div>
        <div
          style={{
            backgroundColor: "transparent",
            border: "none",
            padding: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {!imgError ? (
            <img
              src="/Coding.png"
              alt="Coding illustration"
              style={{
                width: "100%",
                maxWidth: "550px",
                height: "auto",
              }}
              onError={() => setImgError(true)}
            />
          ) : (
            <div
              style={{
                fontSize: "4rem",
              }}
            >
              🧩
            </div>
          )}
        </div>
      </div>
    </section>
  );
}