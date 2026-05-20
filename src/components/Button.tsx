// src/components/RubikButton.tsx
import { colors } from '../styles/colors';
import { useState } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'red' | 'blue' | 'yellow';
  onClick?: () => void;
}

export function Button({ children, variant = 'red', onClick }: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const colorMap = {
    red: colors.red,
    blue: colors.blue,
    yellow: colors.yellow,
  };
  
  const buttonColor = colorMap[variant];
  
  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{
        backgroundColor: 'transparent',
        color: buttonColor,
        border: `2px solid ${buttonColor}`,
        borderRadius: '8px',
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: isHovered ? `0 0 15px ${buttonColor}` : 'none',
      }}
    >
      {children}
    </button>
  );
}