// src/components/sections/ProjectsSection.tsx - estilo Mac
import { colors } from "../../styles/colors";

const projects = [
  {
    title: "TCC - Visão Computacional",
    description: "Detecção de objetos em tempo real com YOLO e Arduino.",
    link: "#",
    date: "2024",
    color: colors.red
  },
  {
    title: "Site da Equipe Rubik",
    description: "Website profissional com CI/CD e testes automatizados.",
    link: "#",
    date: "2024",
    color: colors.blue
  },
  {
    title: "Documentação do Projeto",
    description: "Guia completo de instalação e uso do sistema.",
    link: "#",
    date: "2024",
    color: colors.yellow
  }
];

export function ProjectsSection() {
  return (
    <section style={{
      padding: "5rem 4rem",
      backgroundColor: colors.white,
    }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <h2 style={{
          fontSize: "2rem",
          fontWeight: 600,
          color: colors.gray800,
          marginBottom: "0.5rem",
        }}>
          Projects
        </h2>
        <p style={{
          color: colors.gray500,
          marginBottom: "3rem",
          fontSize: "1rem",
        }}>
          Conheça alguns dos nossos trabalhos
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "2rem",
        }}>
          {projects.map((project) => (
            <div
              key={project.title}
              style={{
                borderTop: `3px solid ${project.color}`,
                padding: "1.5rem 0",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{
                color: colors.gray400,
                fontSize: "0.8rem",
                marginBottom: "0.5rem",
              }}>
                {project.date}
              </div>
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                color: colors.gray800,
                marginBottom: "0.75rem",
              }}>
                {project.title}
              </h3>
              <p style={{
                color: colors.gray600,
                marginBottom: "1rem",
                lineHeight: 1.5,
              }}>
                {project.description}
              </p>
              <a
                href={project.link}
                style={{
                  color: project.color,
                  textDecoration: "none",
                  fontWeight: 500,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                View project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}