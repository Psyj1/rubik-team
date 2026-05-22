// src/components/sections/HeroSection.tsx (versão com fundo branco)
import { colors } from '../../styles/colors';
import { Button } from '../common/Button';

export function HeroSection() {
  return (
    <section style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      padding: '4rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <div>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 800,
          marginBottom: '1.5rem',
          color: colors.gray900
        }}>
          <span style={{ color: colors.red }}>Rubik</span>{' '}
          <span style={{ color: colors.gray700 }}>Team</span>
        </h1>
        
        <p style={{
          fontSize: '1.25rem',
          color: colors.gray600,
          marginBottom: '2rem',
          maxWidth: '500px'
        }}>
        </p>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button variant="red">Conheça a equipe →</Button>
          <Button variant="blue">Ver projetos</Button>
        </div>
      </div>
    </section>
  );
}