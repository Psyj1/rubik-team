// src/components/common/ProjectCard.tsx
import { colors } from "../../styles/colors";

interface ProjectCardProps {
  title: string;
  description: string;
  date?: string;
  href: string;
  colorVariant?: "red" | "blue" | "yellow";
}

export function ProjectCard({
  title,
  description,
  date,
  colorVariant = "red",
}: ProjectCardProps) {
  const borderColor = {
    red: colors.redLight,
    blue: colors.blueLight,
    yellow: colors.yellow,
  }[colorVariant];

  return (
    <div
      style={{
        border: `1px solid ${colors.gray200}`,
        borderRadius: "20px",
        padding: "1.5rem",
        transition: "all 0.2s",
        cursor: "pointer",
        background: colors.white,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = borderColor;
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = colors.gray200;
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {date && (
        <span
          style={{
            fontSize: "0.75rem",
            color: colors.gray400,
            fontFamily: "monospace",
          }}
        >
          {date}
        </span>
      )}
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: 600,
          margin: "0.5rem 0",
          color: colors.gray900,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "0.9rem",
          color: colors.gray500,
          lineHeight: 1.5,
          marginBottom: "1rem",
        }}
      >
        {description}
      </p>
      <span
        style={{
          color: borderColor,
          fontWeight: 500,
          fontSize: "0.85rem",
        }}
      >
        View project →
      </span>
    </div>
  );
}
