// src/components/layout/Footer.tsx - versão Mac + Rubik
import { colors } from "../../styles/colors";

export function Footer() {
  const quickLinks = ["Projects", "Blog", "About", "Contact"];

  return (
    <footer style={{
      padding: "3rem 4rem",
      backgroundColor: colors.white,
      borderTop: `1px solid ${colors.gray200}`,
    }}>
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "3rem",
      }}>
        <div>
          <h4 style={{ color: colors.red, marginBottom: "1rem", fontSize: "1rem" }}>
            Rubik Team
          </h4>
          <p style={{ color: colors.gray500, fontSize: "0.9rem" }}>
            Desenvolvimento que se encaixa perfeitamente.
          </p>
        </div>

        <div>
          <h4 style={{ color: colors.gray700, marginBottom: "1rem", fontSize: "0.9rem" }}>
            Quick links
          </h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {quickLinks.map((link) => (
              <li key={link} style={{ marginBottom: "0.5rem" }}>
                <a href="#" style={{ color: colors.gray500, textDecoration: "none", fontSize: "0.9rem" }}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ color: colors.gray700, marginBottom: "1rem", fontSize: "0.9rem" }}>
            Find me
          </h4>
          <p style={{ color: colors.gray500, fontSize: "0.9rem" }}>
            GitHub: @rubik-team<br />
            Email: contato@rubik.com
          </p>
        </div>
      </div>
    </footer>
  );
}