// src/components/sections/HeroSection.tsx - versão Mac + Rubik
import { colors } from "../../styles/colors";
import { Button } from "../common/Button";

export function HeroSection() {
  return (
    <section style={{
      padding: "6rem 4rem",
      maxWidth: "1400px",
      margin: "0 auto",
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        alignItems: "center",
      }}>
        {/* Lado esquerdo - texto */}
        <div>
          <h1 style={{
            fontSize: "4rem",
            fontWeight: 700,
            color: colors.gray900,
            marginBottom: "1rem",
          }}>
            <span style={{ color: colors.red }}>Hello.</span>
            <br />
            <span>We're </span>
            <span style={{ color: colors.blue }}>Rubik</span>
            <span style={{ color: colors.gray900 }}>.</span>
          </h1>
          <p style={{
            fontSize: "1.2rem",
            color: colors.gray600,
            marginBottom: "2rem",
            lineHeight: 1.6,
          }}>
            Uma equipe que desenvolve soluções em IoT, Visão Computacional e DevOps.
            Transformamos ideias em projetos que funcionam.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Button variant="red">Clone no GitHub →</Button>
            <Button variant="blue">Nossos projetos</Button>
          </div>
        </div>

        {/* Lado direito - cubo ilustrativo */}
        <div style={{
          backgroundColor: colors.gray100,
          borderRadius: "24px",
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          aspectRatio: "1 / 1",
        }}>
          <div style={{
            width: "200px",
            height: "200px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "8px",
          }}>
            {[...Array(9)].map((_, i) => {
              const gridColors = [
                colors.red, colors.blue, colors.yellow,
                colors.yellow, colors.red, colors.blue,
                colors.blue, colors.yellow, colors.red
              ];
              return (
                <div key={i} style={{
                  backgroundColor: gridColors[i],
                  borderRadius: "12px",
                  aspectRatio: "1 / 1",
                }} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}