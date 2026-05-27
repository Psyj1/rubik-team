// src/components/layout/Header.tsx - versão retrô com borda preta
import { colors } from "../../styles/colors";
import { useState } from "react";

export function Header() {
  const [hovered, setHovered] = useState<string | null>(null);

  const navItems = ["Projects", "Blog", "Learn", "Cloneme", "Find me"];

  return (
    <header style={{
      padding: "1rem 2rem",
      backgroundColor: colors.white,
      borderBottom: `2px solid ${colors.black}`,  // Borda PRETA e mais grossa
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        {/* Logo ou texto estilo retrô */}
        <div style={{
          fontFamily: "'Madimi One', monospace",
          fontSize: "1.25rem",
          fontWeight: 400,
          color: colors.black,
          letterSpacing: "-0.5px",
        }}>
          <span style={{ color: colors.red }}>✦</span> rubik
        </div>

        {/* Navegação estilo Mac (links simples, negrito, borda preta no hover) */}
        <nav style={{ display: "flex", gap: "2rem" }}>
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              style={{
                color: hovered === item ? colors.red : colors.gray700,
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 600,  // NEGRITO
                fontFamily: "'Madimi One', monospace",
                transition: "all 0.15s ease",
                padding: "0.25rem 0",
                borderBottom: hovered === item ? `2px solid ${colors.black}` : "2px solid transparent",
              }}
              onMouseEnter={() => setHovered(item)}
              onMouseLeave={() => setHovered(null)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}