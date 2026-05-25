// src/components/common/RubikButton.tsx
import { colors } from "../../styles/colors";
import { useState } from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "red" | "blue" | "yellow";
  href?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "red",
  href,
  onClick,
}: ButtonProps) {
  const [isActive, setIsActive] = useState(false);

  const variantMap = {
    red: {
      bg: colors.red,
      border: colors.redDark,
      shadow: `0 4px 0 ${colors.redDark}`,
    },
    blue: {
      bg: colors.blue,
      border: colors.blueDark,
      shadow: `0 4px 0 ${colors.blueDark}`,
    },
    yellow: {
      bg: colors.yellow,
      border: colors.yellowDark,
      shadow: `0 4px 0 ${colors.yellowDark}`,
    },
  };

  const style = variantMap[variant];

  const buttonStyle = {
    backgroundColor: style.bg,
    border: `1px solid ${style.border}`,
    color: "#FFFFFF",
    padding: "14px 24px",
    borderRadius: "8px",
    fontSize: "20px",
    fontWeight: 500,
    fontFamily: "Inter, sans-serif",
    cursor: "pointer",
    transition: "all 0.1s ease",
    boxShadow: isActive ? "none" : style.shadow,
    transform: isActive ? "translateY(4px)" : "translateY(0)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    textDecoration: "none",
  };

  const handleMouseDown = () => setIsActive(true);
  const handleMouseUp = () => setIsActive(false);
  const handleMouseLeave = () => setIsActive(false);

  if (href) {
    return (
      <a
        href={href}
        style={buttonStyle}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}
