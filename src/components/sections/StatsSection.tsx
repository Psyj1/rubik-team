// src/components/sections/StatsSection.tsx
import { colors } from "../../styles/colors";

export function StatsSection() {
  const stats = [
    { number: "[NÚMERO]", label: "[LABEL]", color: colors.red },
    { number: "[NÚMERO]", label: "[LABEL]", color: colors.blue },
    { number: "[NÚMERO]", label: "[LABEL]", color: colors.yellow },
  ];

  return (
    <section style={{ padding: "4rem 4rem", backgroundColor: colors.white }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "3rem",
        textAlign: "center",
        maxWidth: "1000px",
        margin: "0 auto"
      }}>
        {stats.map((stat) => (
          <div key={stat.label}>
            <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: stat.color }}>
              {stat.number}
            </div>
            <div style={{ color: colors.gray600 }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}