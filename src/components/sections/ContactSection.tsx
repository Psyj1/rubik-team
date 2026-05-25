// src/components/sections/ContactSection.tsx
import { colors } from "../../styles/colors";

export function ContactSection() {
  return (
    <section style={{ padding: "5rem 4rem", backgroundColor: colors.gray50 }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", color: colors.gray800, marginBottom: "1rem" }}>
          Fale com a <span style={{ color: colors.red }}>gente</span>
        </h2>
        <p style={{ color: colors.gray600, marginBottom: "2rem" }}>
          [DESCRIÇÃO AQUI]
        </p>
        
        <form action="https://formspree.io/f/SEU-ID" method="POST">
          <input 
            type="email" 
            name="email" 
            placeholder="Seu email" 
            required
            style={{
              width: "100%",
              padding: "1rem",
              marginBottom: "1rem",
              border: `1px solid ${colors.gray300}`,
              borderRadius: "8px",
              fontSize: "1rem",
              boxSizing: "border-box"
            }}
          />
          <textarea 
            name="message" 
            placeholder="Sua mensagem" 
            required
            rows={5}
            style={{
              width: "100%",
              padding: "1rem",
              marginBottom: "1rem",
              border: `1px solid ${colors.gray300}`,
              borderRadius: "8px",
              fontSize: "1rem",
              fontFamily: "inherit",
              boxSizing: "border-box"
            }}
          />
          <button type="submit" style={{
            backgroundColor: colors.red,
            color: colors.white,
            border: "none",
            padding: "0.75rem 2rem",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: "pointer"
          }}>
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}