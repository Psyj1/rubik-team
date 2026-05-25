// src/components/sections/SpecialtiesSection.tsx
import { colors } from "../../styles/colors";

const specialties = [
  {
    title: "[TÍTULO 1]",
    description: "[DESCRIÇÃO 1]",
    color: colors.red
  },
  {
    title: "[TÍTULO 2]",
    description: "[DESCRIÇÃO 2]",
    color: colors.blue
  },
  {
    title: "[TÍTULO 3]",
    description: "[DESCRIÇÃO 3]",
    color: colors.yellow
  }
];

export function SpecialtiesSection() {
  return (
    <section style={{ padding: "5rem 4rem", backgroundColor: colors.gray50 }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{
          fontSize: "2rem",
          textAlign: "center",
          color: colors.gray800,
          marginBottom: "3rem"
        }}>
          Nossas <span style={{ color: colors.yellow }}>especialidades</span>
        </h2>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem"
        }}>
          {specialties.map((item) => (
            <div key={item.title} style={{
              backgroundColor: colors.white,
              padding: "2rem",
              borderRadius: "12px",
              borderTop: `4px solid ${item.color}`,
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
            }}>
              <h3 style={{ color: item.color, marginBottom: "1rem" }}>
                {item.title}
              </h3>
              <p style={{ color: colors.gray600, lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}