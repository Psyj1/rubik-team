// src/components/layout/Header.tsx - versão inspirada no site
import { colors } from "../../styles/colors";
import { useState } from "react";

export function Header() {
  const [hovered, setHovered] = useState<string | null>(null);

  const navItems = ["Projects", "Blog", "Learn", "Cloneme", "Find me"];

  return (
    <header style={{
      padding: "1rem 4rem",
      backgroundColor: colors.white,
      borderBottom: `1px solid ${colors.gray200}`,
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1400px",
        margin: "0 auto",
      }}>
        {/* Logo estilo "Hello. I'm Rubik" */}
         <img 
          src="logo.png"  // ou .svg, .webp
          alt="Rubik Team Logo"
          style={{
            height: "40px",  // ajusta conforme sua logo
            width: "auto",
            display: "block",
          }}
        />
        {/* Navegação estilo Mac (links simples) */}
        <nav style={{ display: "flex", gap: "2rem" }}>
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              style={{
                color: hovered === item ? colors.red : colors.gray600,
                textDecoration: "none",
                fontSize: "1rem",
                transition: "color 0.2s",
                padding: "0.25rem 0",
                borderBottom: hovered === item ? `2px solid ${colors.red}` : "none",
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