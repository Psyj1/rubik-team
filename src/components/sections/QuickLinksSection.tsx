import "./QuickLinksSection.css";
import { colors } from "../../styles/colors";

interface QuickLink {
  label: string;
  href: string;
  id: string;
}

const quickLinks: QuickLink[] = [
  { label: "Sobre", href: "#about", id: "about" },
  { label: "Projetos", href: "#project", id: "project" },
  { label: "Contato", href: "#contact", id: "contact" },
];

export function QuickLinksSection() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        position: "relative",
        maxWidth: "1126px",
        margin: "0 auto",
        padding: "0 2rem",
      }}
    >
      <div
        style={{
          borderTop: `2px solid var(--border)`,
          marginBottom: "-1.2rem",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "-1.2rem",
        }}
      >
        <div
          style={{
            backgroundColor: "var(--bg)",
            border: `2px solid var(--border)`,
            padding: "0.5rem 2rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
            boxShadow: "4px 4px 0px rgba(0,0,0,0.2)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: "0.7rem",
              fontWeight: "bold",
              color: "var(--text)",
              letterSpacing: "1px",
            }}
          >
            LINKS RÁPIDOS
          </span>
          <div
            style={{
              display: "flex",
              gap: "0",
              borderLeft: `1px solid var(--border)`,
              borderRight: `1px solid var(--border)`,
            }}
          >
            {quickLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e, link.id)}
                style={{
                  display: "inline-block",
                  padding: "0.3rem 1.2rem",
                  fontSize: "0.75rem",
                  fontFamily: "var(--mono)",
                  fontWeight: "bold",
                  color: "var(--text-h)",
                  textDecoration: "none",
                  backgroundColor: "transparent",
                  borderRight:
                    index < quickLinks.length - 1
                      ? `1px solid var(--border)`
                      : "none",
                  transition: "all 0.15s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.red;
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--text-h)";
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          borderTop: `2px solid var(--border)`,
        }}
      />
    </div>
  );
}