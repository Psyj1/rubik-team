import { colors } from "../../styles/colors";

interface Member {
  name: string;
  role: string;
  area: "CV" | "Fullstack";
  bio: string;
}

const members: Member[] = [
  {
    name: "Bruno de Lucca",
    role: "Pesquisador de IA & Visão Computacional",
    area: "CV",
    bio: "Pesquisa e desenvolvimento em visão computacional, artigos técnicos e modelos de IA. Responsável pela documentação e inovação em computer vision.",
  },
  {
    name: "Paulo Seiji",
    role: "IoT & Fullstack Engineer",
    area: "Fullstack",
    bio: "Desenvolvimento de soluções IoT, sistemas embarcados e aplicações fullstack. Responsável pela arquitetura e integração de sistemas.",
  },
];

const areaColors = {
  CV: colors.red,
  Fullstack: colors.blue,
};

const areaLabels = {
  CV: "Computer Vision & IA",
  Fullstack: "IoT & Fullstack",
};

export function MembersSection() {
  return (
    <section
      id="members"
      style={{
        padding: "4rem 2rem",
        maxWidth: "1126px",
        margin: "0 auto",
        backgroundColor: "var(--code-bg)",
        borderTop: `1px solid var(--border)`,
        borderBottom: `1px solid var(--border)`,
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div
          style={{
            display: "inline-block",
            backgroundColor: "var(--bg)",
            padding: "0.25rem 0.6rem",
            fontSize: "0.75rem",
            fontFamily: "var(--mono)",
            color: "var(--text)",
            marginBottom: "1rem",
            border: `1px solid var(--border)`,
          }}
        >
          Membros
        </div>
        <h2
          style={{
            fontFamily: "'Madimi One', var(--heading)",
            fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
            fontWeight: 400,
            margin: 0,
            color: "var(--text-h)",
          }}
        >
          Duas mentes,<br />
          <span style={{ color: colors.red }}>uma missão</span>
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {members.map((member, idx) => (
          <div
            key={idx}
            style={{
              border: `1px solid var(--border)`,
              backgroundColor: "var(--bg)",
              padding: "1.5rem",
              textAlign: "center",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = areaColors[member.area];
              e.currentTarget.style.transform = "translate(-2px, -2px)";
              e.currentTarget.style.boxShadow = "4px 4px 0px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.transform = "translate(0, 0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
              
            </div>
            <h3
              style={{
                fontFamily: "'Madimi One', var(--heading)",
                fontSize: "1.2rem",
                fontWeight: 400,
                margin: "0 0 0.25rem 0",
                color: "var(--text-h)",
              }}
            >
              {member.name}
            </h3>
            <p
              style={{
                fontSize: "0.7rem",
                color: areaColors[member.area],
                fontFamily: "var(--mono)",
                marginBottom: "0.75rem",
                fontWeight: "bold",
                letterSpacing: "0.5px",
              }}
            >
              {areaLabels[member.area]}
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: "var(--text)",
                lineHeight: 1.5,
                marginTop: "0.5rem",
              }}
            >
              {member.bio}
            </p>
            <div
              style={{
                marginTop: "1rem",
                paddingTop: "0.75rem",
                borderTop: `1px solid var(--border)`,
              }}
            >
              <span
                style={{
                  fontSize: "0.65rem",
                  fontFamily: "var(--mono)",
                  color: "var(--text)",
                  opacity: 0.6,
                }}
              >
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}