// src/styles/colors.ts
export const colors = {
  // Vermelho: mais profundo e menos agressivo
  red: "#E53935", // vermelho mais escuro/elegante
  redLight: "#EF5350", // pra hovers/detalhes
  redDark: "#C62828", // pra elementos de fundo

  // Azul: mais escuro e "corporativo"
  blue: "#1E3A8A", // azul mais profundo (tipo da Twitch)
  blueLight: "#3B82F6", // pra hovers
  blueDark: "#172554", // pra fundos

  // Amarelo: mais suave e menos neon
  yellow: "#F59E0B", // amarelo queimado/âmbar
  yellowLight: "#FBBF24",
  yellowDark: "#B45309",

  // Neutros (mantém)
  white: "#FFFFFF",
  black: "#0A0A0A",
  gray100: "#F5F5F5",
  gray200: "#E5E5E5",
  gray300: "#D4D4D4",
  gray400: "#A3A3A3",
  gray500: "#737373",
  gray600: "#525252",
  gray700: "#404040",
  gray800: "#262626",
  gray900: "#171717",
} as const;
