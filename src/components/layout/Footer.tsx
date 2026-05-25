// src/components/layout/Footer.tsx
import { colors } from "../../styles/colors";

export function Footer() {
  return (
    <footer style={{
      backgroundColor: colors.gray900,
      padding: "2rem 4rem",
      textAlign: "center",
      borderTop: `1px solid ${colors.gray800}`
    }}>
      <p style={{ color: colors.gray500 }}>
        © 2024 Rubik Team - Todos os direitos reservados
      </p>
    </footer>
  );
}