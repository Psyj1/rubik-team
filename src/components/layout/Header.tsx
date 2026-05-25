// src/components/layout/Header.tsx
import { colors } from "../../styles/colors";

export function Header() {
  return (
    <header style={{
        backgroundColor: colors.gray900,
        borderBottom: `1px solid ${colors.gray200}`,
        padding: "1rem 4rem",  // ← mesma medida da Hero
        position: "sticky",
        top: 0,
        zIndex: 100,
}}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // tira o maxWidth daqui também
      }}>
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          <span style={{ color: colors.red }}>R</span>
          <span style={{ color: colors.yellow }}>u</span>
          <span style={{ color: colors.blue }}>b</span>
          <span style={{ color: colors.redLight }}>i</span>
          <span style={{ color: colors.yellowLight }}>k</span>
          <span style={{ color: colors.gray400 }}>//</span>
          <span style={{ color: colors.gray300, fontSize: "1rem" }}>team</span>
        </div>

        <nav style={{ display: "flex", gap: "2rem" }}>
          {["Sobre Nós", "Equipe", "Projetos", "Contato"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                color: colors.gray300,
                textDecoration: "none",
                transition: "color 0.2s",
                fontFamily: "Inter",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = colors.yellow)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = colors.gray300)
              }
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
