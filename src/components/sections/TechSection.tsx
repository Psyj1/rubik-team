// src/components/sections/TechSection.tsx
import { colors } from "../../styles/colors";

const techs = ["TECH 1", "TECH 2", "TECH 3", "TECH 4", "TECH 5"];

export function TechSection() {
  return (
    <section style={{ padding: "4rem 4rem", backgroundColor: colors.white }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
        <h3 style={{ color: colors.gray500, marginBottom: "2rem", fontWeight: "normal" }}>
          Tecnologias que dominamos
        </h3>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center"
        }}>
          {techs.map((tech) => (
            <span key={tech} style={{
              color: colors.gray700,
              backgroundColor: colors.gray100,
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              fontSize: "0.9rem"
            }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}