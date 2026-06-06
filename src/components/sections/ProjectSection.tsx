import { colors } from "../../styles/colors";

interface Project {
  id: string;
  date: string;
  title: string;
  description: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: "1",
    date: "2024",
    title: "SmarTraffic",
    description:
      "Já ficou parado num semáforo vermelho enquanto o outro lado, vazio, ficava verde? O SmarTraffic resolve isso. Utilizamos câmeras inteligentes com visão computacional para detectar veículos e pedestres em tempo real, otimizando o fluxo dos cruzamentos de forma dinâmica. Menos espera, mais fluidez.",
    githubUrl: "https://github.com/smartraffic-team",
  }
];

export function ProjectsSection() {
  const handleGitHubClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="project"
      style={{
        padding: "4rem 2rem",
        maxWidth: "1126px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          marginBottom: "2rem",
          borderBottom: `2px solid var(--border)`,
          paddingBottom: "0.5rem",
        }}
      >
        <h2
          style={{
            fontFamily: "'Madimi One', var(--heading)",
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            fontWeight: 400,
            margin: 0,
            color: "var(--text-h)",
          }}
        >
          Projects
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
        }}
      >
        {projects.map((project, idx) => (
          <div
            key={idx}
            style={{
              borderBottom: idx === projects.length - 1 ? "none" : `1px solid var(--border)`,
              paddingBottom: idx === projects.length - 1 ? 0 : "2.5rem",
            }}
          >
            <h3
              style={{
                fontFamily: "'Madimi One', var(--heading)",
                fontSize: "1.3rem",
                fontWeight: 400,
                margin: "0 0 0.75rem 0",
                color: "var(--text-h)",
              }}
            >
              {project.title}
            </h3>

            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--text)",
                fontFamily: "var(--sans)",
                lineHeight: 1.5,
                margin: "0 0 1rem 0",
                maxWidth: "80%",
              }}
            >
              {project.description}
            </p>

            <button
              onClick={() => handleGitHubClick(project.githubUrl)}
              style={{
                backgroundColor: "transparent",
                color: "var(--text-h)",
                border: `1px solid var(--text-h)`,
                padding: "0.3rem 0.8rem",
                fontSize: "0.7rem",
                fontFamily: "var(--mono)",
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.red;
                e.currentTarget.style.color = "white";
                e.currentTarget.style.borderColor = colors.red;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--text-h)";
                e.currentTarget.style.borderColor = "var(--text-h)";
              }}
            >
              GitHub →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}